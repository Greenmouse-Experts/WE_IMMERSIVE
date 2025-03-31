import { useState, useCallback } from "react";
import { ElevenLabsClient, play } from "elevenlabs";

const ELEVENLABS_API_KEY = "sk_ebe73bf0c9c006feffbf5b6529ecd309624e57de95b2a625";

const useVoiceChanger = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audioStream, setAudioStream] = useState<string | null>(null);

  const convertSpeech = useCallback(async (voiceId:string, audioUrl:any) => {
    setLoading(true);
    setError(null);

    try {
        const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });
      const response = await fetch("https://res.cloudinary.com/do2kojulq/video/upload/v1743430600/cde6d18c-be31-4d7d-ae91-ab7e5b876f80_vl7urq.mp3");
      const audioBlob = new Blob([await response.arrayBuffer()], { type: "audio/mp3" });

      const stream = await client.speechToSpeech.convert(voiceId, {
        audio: audioBlob,
        model_id: "eleven_multilingual_sts_v2",
        output_format: "mp3_44100_128",
      });

      const chunks: Uint8Array[] = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }

      const audioBuffer = new Blob(chunks, { type: "audio/mpeg" });
      const url = URL.createObjectURL(audioBuffer);

      setAudioStream(url);
      await play(stream);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { convertSpeech, loading, error, audioStream };
};

export default useVoiceChanger;
