//@ts-nocheck
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN, { autocapture: true });
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  mixpanel.track(eventName, properties);
};

export const identifyUser = (userId:string) => {
  mixpanel.identify(userId);
};

export const setUserProperties = (properties = {}) => {
  mixpanel.people.set(properties);
};
