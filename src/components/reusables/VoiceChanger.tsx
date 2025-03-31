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
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const waveContainerRef = useRef<HTMLDivElement | null>(null);
  const [microphones, setMicrophones] = useState<MediaDeviceInfo[]>([]);
  const [selectedMic, setSelectedMic] = useState<string>("");

  const { convertSpeech, loading, error, audioStream } = useVoiceChanger();

  console.log(error)

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

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioBlob(audioBlob);
        setRecordedAudioUrl(audioUrl);
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
    waveSurfer?.empty();
    reset();
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
    console.log("called");
    convertSpeech(voiceId, audioBlob);
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
          <div className="w-full h-[320px] bg-[#E9EBFB] pt-8 border-primary border-dashed border rounded-[10px] relative">
            {!recording && !readyToStart && !recordedAudioUrl && (
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1742369135/Group_1171275572_kwpd52.png"
                  alt="Image Placeholder"
                  className="w-[287px] object-cover"
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
              <div className="relative flex justify-center items-center h-full">
                <div
                  className="absolute -top-2 left-4 bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2"
                  onClick={() => setReadyToStart(false)}
                >
                  <IoMdArrowBack className="text-greyLight" />
                  <p className="unbound text-xs text-greyLight ">Back</p>
                </div>
                {!recording && !recordedAudioUrl && (
                  <div className="flex items-center gap-4">
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
                      onClick={startRecording}
                      className=" px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
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
                        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
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

                {recording && (
                  <div onClick={stopRecording}>
                    <FaRegCircleStop className="text-primary" size={40} />
                  </div>
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
        <div className="mt-10">
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
