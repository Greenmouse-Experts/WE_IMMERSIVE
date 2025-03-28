import { useState, useEffect } from "react";
import { ElevenLabsClient } from "elevenlabs";

const ELEVENLABS_API_KEY = "sk_ebe73bf0c9c006feffbf5b6529ecd309624e57de95b2a625"; // Replace with your actual API key

const useVoices = () => {
  const [voices, setVoices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVoices = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const client = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY });
      const response = await client.voices.search({ include_total_count: true });

      if (response?.voices) {
        setVoices(response.voices);
      } else {
        setError("No voices found.");
      }
    } catch (err) {
      setError("Failed to fetch voices.");
      console.error("Error fetching voices:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVoices();
  }, []);

  return { voices, isLoading, error, refetch: fetchVoices };
};

export default useVoices;
