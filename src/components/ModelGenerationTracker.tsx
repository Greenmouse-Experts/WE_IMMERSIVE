import { useEffect, useState } from "react";

const YOUR_API_KEY = import.meta.env.VITE_MESHY_KEY;

interface IModelGenerationTracker {
  taskId: string;
  isProcessing: boolean;
}

const ModelGenerationTracker = ({
  taskId,
  isProcessing,
}: IModelGenerationTracker) => {
  const [status, setStatus] = useState("PENDING");
  const [progress, setProgress] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!taskId) return;

    const fetchStream = async () => {
      const url = `https://api.meshy.ai/openapi/v2/text-to-3d/${taskId}/stream`;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) return;

        const decoder = new TextDecoder();
        let receivedData = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          receivedData += decoder.decode(value, { stream: true });
          const events = receivedData.split("\n\n");

          events.forEach((event) => {
            if (event.startsWith("data:")) {
              try {
                const jsonData = JSON.parse(event.replace("data:", "").trim());
                setStatus(jsonData.status);
                setProgress(jsonData.progress || 0);

                console.log("Received update:", jsonData);

                if (
                  ["SUCCEEDED", "FAILED", "CANCELED"].includes(jsonData.status)
                ) {
                  reader.cancel();
                }
              } catch (err) {
                console.error("Error parsing event data:", err);
              }
            }
          });
        }
      } catch (error) {
        console.error("Failed to fetch SSE:", error);
        setError("Failed to track model generation.");
      }
    };

    fetchStream();
  }, [taskId]);

  return (
    <div className="text-black text-center">
      <h2>Model Generation Status</h2>
      {isProcessing && <p>Initializing...</p>}
      <p>Status: {status}</p>
      {progress !== null && <p>Progress: {progress}%</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ModelGenerationTracker;
