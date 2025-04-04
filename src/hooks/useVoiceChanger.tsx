import { useState, useCallback } from "react";
import { ElevenLabsClient, play } from "elevenlabs";

const ELEVENLABS_API_KEY =
  "sk_b986ff032f529b5b6c7fec597520509049658071cb6ea3e9";

const useVoiceChanger = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioStream, setAudioStream] = useState<string | null>(null);

  const convertSpeech = useCallback(
    async (
      voiceId: string,
      audioUrl: any,
      voice_settings?:string,
      remove_background_noise?:boolean,
    ) => {
      setLoading(true);
      setError(null);

      console.log(audioUrl);

      try {
        const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });
        const response = await fetch(audioUrl);
        const audioBlob = new Blob([await response.arrayBuffer()], {
          type: "audio/mp3",
        });

        const stream = await client.speechToSpeech.convert(voiceId, {
          audio: audioBlob,
          model_id: "eleven_multilingual_sts_v2",
          output_format: "mp3_44100_128",
          voice_settings,
          remove_background_noise
        });

        const chunks: Uint8Array[] = [];
        for await (const chunk of stream) {
          chunks.push(chunk);
        }

        const audioBuffer = new Blob(chunks, { type: "audio/mpeg" });
        const url = URL.createObjectURL(audioBuffer);

        setAudioStream(url);
        await play(stream);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { convertSpeech, loading, error, audioStream };
};

export default useVoiceChanger;
