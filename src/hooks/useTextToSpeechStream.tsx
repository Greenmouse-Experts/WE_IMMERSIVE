import { useState } from "react";
import { ElevenLabsClient } from "elevenlabs";

const ELEVENLABS_API_KEY = "sk_b986ff032f529b5b6c7fec597520509049658071cb6ea3e9"; // Replace with your actual API key

const useTextToSpeechStream = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertTextToSpeech = async (
    text: string,
    options: {
      speed?: number;
      stability?: number;
      similarity_boost?: number;
      use_speaker_boost?: boolean;
    } = {}
  ) => {
    if (!text.trim()) return alert("Please enter text!");

    try {
      setIsLoading(true);
      setError(null);

      const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });

      const audioStream = await client.textToSpeech.convertAsStream("JBFqnCBsd6RMkjVDRZzb", {
        model_id: "eleven_multilingual_v2",
        text,
        output_format: "mp3_44100_128",
        voice_settings: {
          stability: options.stability ?? 0, // Default: 0
          similarity_boost: options.similarity_boost ?? 1.0, // Default: 1.0
          use_speaker_boost: options.use_speaker_boost ?? true, // Default: true
          speed: options.speed ?? 1.0, // Default: 1.0
        },
      });

      const chunks: Uint8Array[] = [];
      for await (const chunk of audioStream) {
        chunks.push(chunk);
      }

      const audioBuffer = new Blob(chunks, { type: "audio/mpeg" });
      const url = URL.createObjectURL(audioBuffer);
      setAudioUrl(url);
    } catch (err) {
      setError("Failed to generate audio");
      console.error("Error streaming audio:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { audioUrl, isLoading, error, convertTextToSpeech };
};

export default useTextToSpeechStream;
