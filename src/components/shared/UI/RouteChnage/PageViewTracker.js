import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const PageViewTracker = () => {

  useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <div>
      
    </div>
  );
}

export default PageViewTracker
