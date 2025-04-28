import { useEffect } from "react";
import { trackEvent } from "../helpers/mixpanelClient";


export const useTrackViewDuration = (id: string | undefined, name: string | undefined, type: string) => {
  useEffect(() => {
    if (!id) return;
    let startTime = Date.now();

    trackEvent(`Viewed ${type}`, { id, name, type });

    return () => {
      const endTime = Date.now();
      const durationSeconds = Math.floor((endTime - startTime) / 1000);

      trackEvent(`${type} View Duration`, {
        id,
        name,
        duration: durationSeconds,
      });
    };
  }, [id]);
};
