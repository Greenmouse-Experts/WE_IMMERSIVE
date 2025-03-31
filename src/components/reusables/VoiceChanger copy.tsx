// import { Controller, useForm } from "react-hook-form";
// import TextInput, { InputType } from "../ui/TextInput";
// import { useEffect, useRef, useState } from "react";
// import useVoices from "../../hooks/useVioces";
// import Select, { SingleValue } from "react-select";
// import { IoReload } from "react-icons/io5";
// import useVoiceChanger from "../../hooks/useVoiceChanger";
// import WaveSurfer from "wavesurfer.js";

// const VoiceChanger = () => {
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onChange",
//     defaultValues: {
//       name: "",
//       audio: "",
//     },
//   });
//   // const [startRecord, setStartRecord] = useState(false);
//   const [stability, setStability] = useState(50);
//   const [similarity, setSimilarity] = useState(50);
//   const [documentUrl, setDocumentUrl] = useState<string | null>(null);

//   const onSubmit = (data: any) => {
//     const currentText = data.text;

//     convertSpeech(currentText, {
//       model_id: "eleven_multilingual_sts_v2",
//       output_format: "mp3_44100_128",
//     });
//   };

//   // const { audioUrl, isLoading, convertTextToSpeech } = useTextToSpeechStream();
//   const { convertSpeech, loading, error, audioStream } = useVoiceChanger();
//   const { voices, isLoading: isGettingVoices } = useVoices();

//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   // const playAudio = () => {
//   //   if (audioUrl) {
//   //     const audio = new Audio(audioUrl);
//   //     audio
//   //       .play()
//   //       .catch((error) => console.error("Audio playback error:", error));
//   //   }
//   // };
//   useEffect(() => {
//     if (audioStream) {
//       audioRef.current = new Audio(audioStream);
//     }
//   }, [audioStream]);
//   const options = voices?.map((voice) => ({
//     value: voice.voice_id,
//     label: voice.name,
//   }));

//   const [selectedOption, setSelectedOption] = useState(options[0]);
//   const handleChange = (newValue: SingleValue<{ value: any; label: any }>) => {
//     if (newValue) {
//       setSelectedOption(newValue);
//     }
//   };

//   useEffect(() => {
//     if (options.length > 0 && !selectedOption) {
//       setSelectedOption(options[0]);
//     }
//   }, [options, selectedOption]);

//   const handleReset = () => {
//     setStability(50);
//     setSimilarity(50);
//     setSelectedOption(options[0]);
//     reset();
//   };

//   const [startRecord, setStartRecord] = useState(false);
//   const [recordingTime, setRecordingTime] = useState(0);
//   const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
//   const [audioUrl, setAudioUrl] = useState<string | null>(null);
//   const maxRecordingTime = 300; // 5 minutes

//   const [recording, setRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
//   // const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
//   const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
//   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//   const audioChunksRef = useRef<Blob[]>([]);
//   const waveContainerRef = useRef<HTMLDivElement | null>(null);


//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (startRecord) {
//       timerRef.current = setInterval(() => {
//         setRecordingTime((prev) => {
//           if (prev >= maxRecordingTime) {
//             handleStopRecording();
//             return maxRecordingTime;
//           }
//           return prev + 1;
//         });
//       }, 1000);
//     } else {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     }
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [startRecord]);

//   const handleStartRecording = () => {
//     setStartRecord(true);
//     setRecordingTime(0);
//   };

//   const handleStopRecording = () => {
//     setStartRecord(false);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

//   useEffect(() => {
//     if (audioUrl) {
//       const wave = WaveSurfer.create({
//         container: "#waveform",
//         waveColor: "#4F46E5",
//         progressColor: "#312E81",
//         barWidth: 2,
//         barHeight: 1,
//         height: 50,
//       });
//       wave.load(audioUrl);
//       setWaveSurfer(wave);
//     }
//   }, [audioUrl]);

//   useEffect(() => {
//     if (waveContainerRef.current) {
//       const ws = WaveSurfer.create({
//         container: waveContainerRef.current,
//         waveColor: "#4F46E5",
//         progressColor: "#4338CA",
//         barWidth: 3,
//         height: 100,
//       });
//       setWaveSurfer(ws);
//     }
//     return () => {
//       waveSurfer?.destroy();
//     };
//   }, []);

//   // const handleRecord = () => {
//   //   const audio = new Audio();
//   //   const constraints = { audio: true };

//   //   navigator.mediaDevices
//   //     .getUserMedia(constraints)
//   //     .then((stream) => {
//   //       audio.srcObject = stream;
//   //       audio.play();
//   //       audio.onended = () => {
//   //         setDocumentUrl(null);
//   //       };
//   //     })
//   //     .catch((error) => console.error("Error getting audio stream:", error));
//   // };

//   // if (isGettingVoices) return <Loader />;

//   return (
//     <div className="flex pt-7 mt-7 w-full gap-10 items-center xl:flex-row flex-col-reverse border-t border-[#EEEEEE]">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className=" xl:w-[65%] w-full border-r-[2px] border-[#EEEEEE] pr-6"
//       >
//         <div>
//           <Controller
//             name="name"
//             control={control}
//             rules={{
//               required: {
//                 value: true,
//                 message: "Please enter asset name",
//               },
//             }}
//             render={({ field }) => (
//               <TextInput
//                 type={InputType.text}
//                 label="Asset Name"
//                 placeholder="Enter asset name"
//                 error={errors.name?.message}
//                 {...field}
//                 ref={null}
//               />
//             )}
//           />

//           <div className="w-full flex flex-col gap-2 mt-5">
//             <p className="mt-4 text-[16px] md:text-[15px] lg:text-[15px] font-[400]">
//               Audio
//             </p>
//             <div
//               className=" w-full h-[320px] bg-[#E9EBFB] pt-8 border-primary border-dashed border rounded-[10px] relative"
//               // onClick={() => documentUrlInputRef.current?.click()}
//             >
//               {/* {startRecord ? (
//                 <>
//                   <div
//                     className="absolute top-2 left-4 bg-white rounded-lg px-4 py-1 border border-gray-300 flex items-center gap-2"
//                     onClick={handleStopRecording}
//                   >
//                     <IoMdArrowBack className="text-gray-500" />
//                     <p className="text-xs text-gray-500">Stop</p>
//                   </div>
//                   <div className="absolute bottom-2 right-4 flex items-center gap-3">
//                     <div className="bg-white rounded-lg px-4 py-1 border border-gray-300 flex items-center gap-2">
//                       <p className="text-xs text-gray-500">
//                         {(recordingTime / 60).toFixed(2)}
//                       </p>
//                     </div>
//                     /
//                     <div className="bg-white rounded-lg px-4 py-1 border border-gray-300 flex items-center gap-2">
//                       <p className="text-xs text-gray-500">5.00</p>
//                     </div>
//                   </div>
//                   <div id="waveform" className="w-full"></div>
//                 </>
//               ) : (
//                 <button
//                   onClick={handleStartRecording}
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Start Recording
//                 </button>
//               )} */}
//               {/* {!startRecord && (
//                 <div className="flex flex-col items-center justify-center">
//                   <img
//                     src="https://res.cloudinary.com/do2kojulq/image/upload/v1742369135/Group_1171275572_kwpd52.png"
//                     alt="Image Placeholder"
//                     className=" w-[287px] object-cover"
//                   />

//                   <p className="mb-5 mt-2">Or</p>
//                   <div
//                     onClick={() => setStartRecord(true)}
//                     className="bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] "
//                   >
//                     <p className="unbound text-xs text-greyLight">
//                       Record Audio
//                     </p>
//                   </div>
//                 </div>
//               )}
//               {startRecord && (
//                 <div className="relative flex justify-center items-center h-full">
//                   <div
//                     className="absolute -top-2 left-4 bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2"
//                     onClick={() => setStartRecord(false)}
//                   >
//                     <IoMdArrowBack className="text-greyLight" />
//                     <p className="unbound text-xs text-greyLight ">Back</p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <select className="bg-white dark:bg-darkMode rounded-lg px-4 py-2  border border-[#CCCCCC]">
//                       <option defaultChecked value="">
//                         Default Macbook Pro microphone built in
//                       </option>
//                     </select>
//                     <button
//                       type="button"
//                       // onClick={() => openFilePicker(documentUrlInputRef)}
//                       className=" px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
//                     >
//                       Start
//                     </button>
//                   </div>

//                   <div className="absolute bottom-2 right-4 flex items-center gap-3">
//                     <div className=" bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2">
//                       <p className="unbound text-xs text-greyLight ">0.00</p>
//                     </div>
//                     /
//                     <div className=" bg-white dark:bg-darkMode rounded-lg px-4 py-1  border border-[#CCCCCC] flex items-center gap-2">
//                       <p className="unbound text-xs text-greyLight ">5.00</p>
//                     </div>
//                   </div>
//                 </div>
//               )} */}
//             </div>

//             {documentUrl && (
//               <button
//                 // onClick={() => openFilePicker(documentUrlInputRef)}
//                 className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
//               >
//                 Change Audio
//               </button>
//             )}
//           </div>
//         </div>

//         <button
//           // disabled={isPending || isInitializing}
//           type="submit"
//           className="btn-primary text-xs unbound fw-500 w-full h-10 mt-10 disabled:cursor-not-allowed"
//         >
//           {loading ? "Generating Audio..." : "Convert to Speech"}
//         </button>
//         {audioStream && (
//           <audio
//             key={audioStream}
//             ref={audioRef}
//             controls
//             autoPlay
//             className="mt-2 w-full"
//           >
//             <source src={audioStream} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         )}
//         {/* {audioUrl && (
//           <button
//             className="mt-2 px-4 py-2 bg-green text-white rounded"
//             onClick={playAudio}
//           >
//             Play Audio
//           </button>
//         )} */}
//       </form>
//       <div className=" xl:w-[35%] w-full">
//         <div className=" mb-7">
//           <p className="text-primary fw-600">Settings</p>
//         </div>
//         <div>
//           <p className="text-[#343333] mb-3">Voices</p>
//           <Select
//             value={selectedOption}
//             defaultValue={options[0]}
//             onChange={handleChange}
//             options={options}
//             placeholder="Choose a voice..."
//             isLoading={isGettingVoices}
//           />
//         </div>

//         <div className="relative group w-full mt-6">
//           <p className="text-[#343333]">Stability</p>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={stability}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setStability(Number(e.target.value))
//             }
//             className="w-full accent-primary h-[5px] bg-gray-300 rounded-none outline-none transition-all"
//           />
//           <div className="flex justify-between items-center">
//             <p className="text-sm text-[#696767]">More Variable</p>
//             <p className="text-sm text-[#696767]">More Stable</p>
//           </div>
//           <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//             {stability}%
//           </span>
//         </div>

//         <div className="relative group w-full mt-6">
//           <p className="text-[#343333]">Similarity</p>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={similarity}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               setSimilarity(Number(e.target.value))
//             }
//             className="w-full accent-primary h-[5px] bg-gray-300 rounded-none outline-none transition-all"
//           />
//           <div className="flex justify-between items-center">
//             <p className="text-sm text-[#696767]">Low</p>
//             <p className="text-sm text-[#696767]">High</p>
//           </div>
//           <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
//             {similarity}%
//           </span>
//         </div>

//         <div className="mt-10">
//           <div
//             onClick={handleReset}
//             className="flex items-center gap-2 border border-[#AFAEAE] rounded-[10px] w-fit h-10 px-5 ml-auto"
//           >
//             <IoReload className="text-[#696767]" />
//             <p className="text-sm text-[#696767]">Reset Values</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoiceChanger;
