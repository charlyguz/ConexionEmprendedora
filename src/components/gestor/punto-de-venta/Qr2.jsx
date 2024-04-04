import React, { useState, useRef } from "react";
import QrReader from "react-webcam";
import QrCode from "jsqr";

const Qr2 = () => {
  const webcamRef = useRef(null);
  const [scannedText, setScannedText] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScannedText(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleDecode = () => {
    const canvas = webcamRef.current.getCanvas();
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = QrCode(imageData.data, canvas.width, canvas.height);
    if (code) {
      handleScan(code.data);
    }
  };

  return (
    <div>
      <QrReader
        ref={webcamRef}
        onScan={handleScan}
        onError={handleError}
        style={{ width: "100%" }}
      />
      <button onClick={handleDecode}>Decode QR</button>
      {scannedText && <p>Scanned Text: {scannedText}</p>}
    </div>
  );
};

export default Qr2;
