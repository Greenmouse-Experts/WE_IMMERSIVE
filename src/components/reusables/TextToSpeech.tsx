import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../ui/TextInput";
import { useEffect, useRef, useState } from "react";
import useTextToSpeechStream from "../../hooks/useTextToSpeechStream";
import useVoices from "../../hooks/useVioces";
import Select, { SingleValue } from "react-select";
import Loader from "./loader";
import { IoReload } from "react-icons/io5";

const TextToSpeech = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      text: "",
    },
  });
  const [speed, setSpeed] = useState(1.0);
  const [stability, setStability] = useState(50);
  const [similarity, setSimilarity] = useState(50);

  const onSubmit = (data: any) => {
    const currentText = data.text;

    convertTextToSpeech(currentText, {
      speed,
      stability: stability / 100,
      similarity_boost: similarity / 100,
      use_speaker_boost: true,
    });
  };

  const { audioUrl, isLoading, convertTextToSpeech } = useTextToSpeechStream();
  const { voices, isLoading: isGettingVoices } = useVoices();

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
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
    }
  }, [audioUrl]);
  const options = voices?.map((voice) => ({
    value: voice.voice_id,
    label: voice.name,
  }));

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (newValue: SingleValue<{ value: any; label: any }>) => {
    if (newValue) {
      setSelectedOption(newValue);
    }
  };

  useEffect(() => {
    if (options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options, selectedOption]);

  const handleReset = () =>{
    setSpeed(1.0);
    setStability(50);
    setSimilarity(50);
    setSelectedOption(options[0]);
    reset();
  }

  if (isGettingVoices) return <Loader />;

  return (
    <div className="flex mt-5 w-full gap-10 items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter asset name",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType.text}
                label="Asset Name"
                placeholder="Enter asset name"
                error={errors.name?.message}
                {...field}
                ref={null}
                // disabled={isInitializing || isProcessing}
              />
            )}
          />

          <div className="relative mt-8">
            <Controller
              name="text"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Text is required",
                },
              }}
              render={({ field }) => (
                <TextInput
                  className="bg-[#E9EBFB] h-[400px] rounded-[10px]"
                  fullWidth={true}
                  type={InputType.textarea}
                  label="Prompt"
                  placeholder="Enter prompt to generate asset "
                  error={errors.text?.message}
                  //   disabled={isInitializing || isProcessing}
                  {...field}
                  ref={null}
                  maxLength={500}
                />
              )}
            />
          </div>
        </div>

        <button
          // disabled={isPending || isInitializing}
          type="submit"
          className="btn-primary text-xs unbound fw-500 w-full h-10 mt-10 disabled:cursor-not-allowed"
        >
          {isLoading ? "Generating Audio..." : "Convert to Speech"}
        </button>
        {audioUrl && (
          <audio
            key={audioUrl}
            ref={audioRef}
            controls
            autoPlay
            className="mt-2 w-full"
          >
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
        {/* {audioUrl && (
          <button
            className="mt-2 px-4 py-2 bg-green text-white rounded"
            onClick={playAudio}
          >
            Play Audio
          </button>
        )} */}
      </form>
      <div className="flex-1 w-full ">
        <div>
          <Select
            value={selectedOption}
            defaultValue={options[0]}
            onChange={handleChange}
            options={options}
            placeholder="Choose a voice..."
            isLoading={isLoading}
          />
        </div>
        <div className="relative group w-full mt-6">
          <p className="text-[#343333]">Speed</p>
          <input
            type="range"
            min="0.7"
            max="1.2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full accent-primary h-[5px] bg-gray-300 rounded-none outline-none transition-all group-hover:opacity-100"
          />
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {speed.toFixed(1)}
          </span>
        </div>

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

        <div className="mt-10">
          <div onClick={handleReset} className="flex items-center gap-2 border border-[#AFAEAE] rounded-[10px] w-fit h-10 px-5 ml-auto">
            <IoReload className="text-[#696767]" />
            <p className="text-sm text-[#696767]">Reset Values</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
