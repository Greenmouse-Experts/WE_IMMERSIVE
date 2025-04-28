// src/components/PageViewTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../lib/mixpanel';

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Every time the location changes, track the page view
    trackEvent('Page Viewed', {
      path: location.pathname,
    });
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageViewTracker;
