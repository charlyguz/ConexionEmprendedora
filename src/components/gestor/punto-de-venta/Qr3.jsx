import React, { useRef, useEffect } from "react";

export default function Qr3() {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    async function openCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    }

    openCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <video
        className="p-10"
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
