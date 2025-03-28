import { useState, useEffect } from "react";
import { ElevenLabsClient } from "elevenlabs";

const ELEVENLABS_API_KEY = "sk_9dfc90e22e185ea9713781c2f327b7c55b22cb58e20f00ef"; // Replace with your actual API key

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
