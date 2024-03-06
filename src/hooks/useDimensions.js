import { useEffect, useState } from 'react';
import breakPoints from '../constants/breakPoints';

function getMedia() {
  const width = window.outerWidth;
  return Object.fromEntries(Object.entries(breakPoints).map(([key, value]) => [key, value < width]));
}

export default () => {
  const [media, setMedia] = useState(getMedia());

  const handleResize = (event) => {
    const { outerWidth } = event.target;
    const result = Object.fromEntries(Object.entries(breakPoints).map(([key, value]) => [key, value < outerWidth]));
    setMedia(result);
  };

  useEffect(() => {
    // this Listener work when user resize dimensions
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return media;
};
