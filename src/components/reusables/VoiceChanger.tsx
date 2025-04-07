//@ts-nocheck
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../ui/TextInput";
import { useEffect, useRef, useState } from "react";

import Select, { SingleValue } from "react-select";
import Loader from "./loader";
import { IoReload } from "react-icons/io5";
import WaveSurfer from "wavesurfer.js";
import useVoices from "../../hooks/useVioces";
import { IoMdArrowBack } from "react-icons/io";
import { FaRegCircleStop } from "react-icons/fa6";
import useVoiceChanger from "../../hooks/useVoiceChanger";
import { toast } from "react-toastify";
import { uploadAudio } from "../../helpers";
import { BeatLoader } from "react-spinners";
import { Switch } from "@material-tailwind/react";

const VoiceChanger = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const [recording, setRecording] = useState(false);
  const [readyToStart, setReadyToStart] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const waveContainerRef = useRef<HTMLDivElement | null>(null);
  const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>([]);
  const [selectedMic, setSelectedMic] = useState<string>("");
  const [stability, setStability] = useState(50);
  const [similarity, setSimilarity] = useState(50);
  const [remove_background_noise, setRemove_background_noise] = useState(true);
  const [use_speaker_boost, setUse_speaker_boost] = useState(true);

  const { convertSpeech, loading, audioStream } = useVoiceChanger();

  // console.log(remove_background_noise );

  useEffect(() => {
    const getMicrophones = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputDevices = devices.filter(
          (device) => device.kind === "audioinput"
        );
        setMicrophones(audioInputDevices);

        // Set default mic
        if (audioInputDevices.length > 0) {
          setSelectedMic(audioInputDevices[0].deviceId);
        }
      } catch (error) {
        console.error("Error getting microphone devices:", error);
      }
    };

    getMicrophones();
  }, []);

  const maxRecordingTime = 300;

  const { voices, isLoading: isGettingVoices } = useVoices();
  const options = voices?.map((voice) => ({
    value: voice.voice_id,
    label: voice.name,
  }));
  const [selectedOption, setSelectedOption] = useState(options?.[0] || null);

  const handleChange = (newValue: SingleValue<{ value: any; label: any }>) => {
    if (newValue) {
      setSelectedOption(newValue);
    }
  };

  // Initialize Wavesurfer
  useEffect(() => {
    if (waveContainerRef.current) {
      const ws = WaveSurfer.create({
        container: waveContainerRef.current,
        waveColor: "#4F46E5",
        progressColor: "#4338CA",
        barWidth: 3,
        height: 100,
      });
      setWaveSurfer(ws);
    }
    return () => {
      waveSurfer?.destroy();
    };
  }, []);

  // Start Recording
  const startRecording = async () => {
    setReadyToStart(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        setIsUploadingAudio(true);
        const { isSuccess, fileUrl, isLoading } = await uploadAudio(audioBlob);

        if (isLoading) {
          console.log("Uploading...", isLoading);
        }

        if (isSuccess) {
          setRecordedAudioUrl(fileUrl);
          console.log("Upload successful:", fileUrl);
          setIsUploadingAudio(false);
        } else {
          console.log("Upload failed");
          setIsUploadingAudio(false);
        }
        // setAudioBlob(audioBlob);
        // setRecordedAudioUrl(audioUrl);
        setAudioBlob(fileUrl);
        setRecordedAudioUrl(fileUrl);
        waveSurfer?.load(audioUrl);
      };

      mediaRecorder.start();
      setRecording(true);

      // Stop recording after 5 minutes
      setTimeout(() => {
        stopRecording();
      }, 300000); // 300,000ms = 5 mins
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (recording) {
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => {
          if (prev >= maxRecordingTime) {
            stopRecording();
            return maxRecordingTime;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [recording]);

  // Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // Reset All Fields
  const handleReset = () => {
    setRecordedAudioUrl(null);
    setAudioBlob(null);
    setRecordingTime(0);
    setStability(50)
    setSimilarity(50)
    setRemove_background_noise(true)
    setUse_speaker_boost(true)
    waveSurfer?.empty();
    reset();
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      await uploadAudioFile({ target: { files: [file] } } as any);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const uploadAudioFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReadyToStart(true);
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingAudio(true);
    const { isSuccess, fileUrl, isLoading } = await uploadAudio(file);

    if (isLoading) {
      console.log("Uploading...");
    }

    if (isSuccess) {
      setRecordedAudioUrl(fileUrl);
      console.log("Upload successful:", fileUrl);
    } else {
      console.log("Upload failed");
    }

    setIsUploadingAudio(false);
  };

  const handleGenerate = () => {
    if (!recordedAudioUrl) {
      toast.warning("Please record an audio first");
      return;
    }

    const voiceId = selectedOption?.value;
    if (!voiceId) {
      toast.warning("Please select a voice");
      return;
    }
    const voice_settings_string = {
      stability: stability/100,
      similarity: similarity/100,
      use_speaker_boost: use_speaker_boost,
    };
    const voice_settings = JSON.stringify(voice_settings_string);
    console.log("called");
    // convertSpeech(voiceId, audioBlob);
    convertSpeech(
      voiceId,
      recordedAudioUrl,
      voice_settings,
      remove_background_noise
    );
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const playAudio = () => {
  //   if (audioUrl) {
  //     const audio = new Audio(audioUrl);
  //     audio
  //       .play()
  //       .catch((error) => console.error("Audio playback error:", error));
  //   }
  // };
  useEffect(() => {
    if (audioStream) {
      audioRef.current = new Audio(audioStream);
    }
  }, [audioStream]);

  if (isGettingVoices) return <Loader />;

  return (
    <div className="flex pt-7 mt-7 w-full gap-10 items-center xl:flex-row flex-col-reverse border-t border-[#EEEEEE]">
      <form
        onSubmit={handleSubmit(() => {})}
        className="xl:w-[65%] w-full border-r-2 border-[#EEEEEE] pr-6"
      >
        <Controller
          name="name"
          control={control}
          rules={{ required: "Please enter asset name" }}
          render={({ field }) => (
            <TextInput
              type={InputType.text}
              label="Asset Name"
              placeholder="Enter asset name"
              error={errors.name?.message}
              {...field}
              ref={null}
            />
          )}
        />

        <div className="w-full flex flex-col gap-2 mt-5">
          <p className="mt-4 text-[16px] font-[400]">Audio</p>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full h-[320px] bg-[#E9EBFB] pt-8 border-primary border-dashed border rounded-[10px] relative"
          >
            {!recording && !readyToStart && !recordedAudioUrl && (
              <div className="flex flex-col items-center justify-center ">
                <div onClick={handleImageClick} className="cursor-pointer">
                  <img
                    src="https://res.cloudinary.com/do2kojulq/image/upload/v1742369135/Group_1171275572_kwpd52.png"
                    alt="Image Placeholder"
                    className="w-[287px] object-cover"
                  />
                </div>
                <input
                  type="file"
                  accept="audio/*"
                  ref={fileInputRef}
                  onChange={uploadAudioFile}
                  className="hidden"
                />
                <p className="mb-5 mt-2">Or</p>
                <button
                  onClick={() => setReadyToStart(true)}
                  className="bg-white rounded-lg px-4 py-1 border border-[#CCCCCC]"
                >
                  <p className="text-xs text-greyLight">Record Audio</p>
                </button>
              </div>
            )}
            {readyToStart && (
              <div className="relative flex justify-center items-center h-full w-full">
                <div
                  className="absolute -top-2 left-4 bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2"
                  onClick={() => {
                    setReadyToStart(false);
                    handleReset();
                  }}
                >
                  <IoMdArrowBack className="text-greyLight" />
                  <p className="unbound text-xs text-greyLight ">Back</p>
                </div>
                {!recording && !recordedAudioUrl && (
                  <div className="flex items-center gap-4 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <select
                      className="bg-white dark:bg-darkMode rounded-lg px-4 py-2 border border-[#CCCCCC]"
                      value={selectedMic}
                      onChange={(e) => setSelectedMic(e.target.value)}
                    >
                      {microphones.length > 0 ? (
                        microphones.map((mic) => (
                          <option key={mic.deviceId} value={mic.deviceId}>
                            {mic.label || "Unknown Microphone"}
                          </option>
                        ))
                      ) : (
                        <option value="">No microphones found</option>
                      )}
                    </select>
                    <button
                      type="button"
                      disabled={isUploadingAudio}
                      onClick={startRecording}
                      className=" px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit disabled:cursor-not-allowed"
                    >
                      Start
                    </button>
                  </div>
                )}
                <div className="w-full">
                  {recordedAudioUrl && (
                    <div className=" w-full">
                      <audio
                        controls
                        src={recordedAudioUrl}
                        className=" w-full"
                      />
                      <button
                        onClick={handleReset}
                        disabled={isUploadingAudio}
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:cursor-not-allowed"
                      >
                        Change Audio
                      </button>
                    </div>
                  )}
                  {audioStream && (
                    <audio
                      key={audioStream}
                      ref={audioRef}
                      controls
                      autoPlay
                      className="mt-2 w-full"
                    >
                      <source src={audioStream} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>

                {recording ? (
                  <div onClick={stopRecording} className="mx-auto w-full">
                    <FaRegCircleStop className="text-primary" size={40} />
                  </div>
                ) : (
                  isUploadingAudio && (
                    <div className="flex flex-col items-center absolute bottom-8">
                      <p>uploading audio</p>
                      <BeatLoader />
                    </div>
                  )
                )}

                <div className="absolute bottom-2 right-4 flex items-center gap-3">
                  <div className=" bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2">
                    <p className="unbound text-xs text-greyLight ">
                      {" "}
                      {(recordingTime / 60).toFixed(2)}
                    </p>
                  </div>
                  /
                  <div className=" bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2">
                    <p className="unbound text-xs text-greyLight ">5.00</p>
                  </div>
                </div>
              </div>
            )}
            {/* 
            {recording && (
              <div className="flex flex-col items-center justify-center">
                <p className="text-red-600 text-sm">Recording...</p>
                <button
                  onClick={stopRecording}
                  className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
                >
                  Stop Recording
                </button>
              </div>
            )} */}
          </div>
        </div>
        <button
          // disabled={isPending || isInitializing}
          onClick={handleGenerate}
          type="button"
          className="btn-primary text-xs unbound fw-500 w-full h-10 mt-10 disabled:cursor-not-allowed"
        >
          {loading ? "Generating Audio..." : "Convert to Speech"}
        </button>
      </form>

      <div className="xl:w-[35%] w-full">
        <p className="text-primary fw-600">Settings</p>
        <p className="text-[#343333] mb-3">Voices</p>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          placeholder="Choose a voice..."
          isLoading={isGettingVoices}
        />
        <div className="relative group w-full mt-6">
          <p className="text-[#343333]">Stability</p>
          <input
            type="range"
            min="0"
            max="100"
            value={stability}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStability(Number(e.target.value))
            }
            className="w-full accent-primary h-[5px] bg-gray-300 rounded-none outline-none transition-all"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#696767]">More Variable</p>
            <p className="text-sm text-[#696767]">More Stable</p>
          </div>
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {stability}%
          </span>
        </div>

        <div className="relative group w-full mt-6">
          <p className="text-[#343333]">Similarity</p>
          <input
            type="range"
            min="0"
            max="100"
            value={similarity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSimilarity(Number(e.target.value))
            }
            className="w-full accent-primary h-[5px] bg-gray-300 rounded-none outline-none transition-all"
          />
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#696767]">Low</p>
            <p className="text-sm text-[#696767]">High</p>
          </div>
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {similarity}%
          </span>
        </div>
        <div className="mt-10 flex items-end">
          <div className="flex flex-col gap-2">
            <Switch
              onChange={() =>
                setRemove_background_noise(!remove_background_noise)
              }
              defaultChecked
              label="Remove Background Noise"
              className="mulish"
              value={remove_background_noise}
            />
            <Switch
              defaultChecked
              label="Speaker boost"
              className="mulish"
              onChange={() => setUse_speaker_boost(!use_speaker_boost)}
              value={remove_background_noise}
            />
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 border border-[#AFAEAE] rounded-[10px] w-fit h-10 px-5 ml-auto"
          >
            <IoReload className="text-[#696767]" />
            <p className="text-sm text-[#696767]">Reset Values</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceChanger;
