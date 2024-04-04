import { useEffect, useRef } from 'react';

const YouTubeVideoPlayer = ({ videoId }) => {
  const videoPlayerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(videoPlayerRef.current, {
        videoId: videoId,
        width: 560,
        height: 315,
        playerVars: {
          autoplay: 0, // Cambia a 1 si quieres que el video se reproduzca automáticamente al cargar
        },
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  return (
    <div ref={videoPlayerRef}></div>
  );
};

export default YouTubeVideoPlayer;
