import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Qr() {
  const [scanResult, setScanResult] = useState(null);
  const [scanner, setScanner] = useState(null);

  useEffect(() => {
    if (!scanner) {
      const newScanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 500,
          height: 500,
        },
        fps: 5,
      });

      newScanner.render(success, error);
      setScanner(newScanner);
    }

    function success(result) {
      if (scanner) {
        scanner.clear();
        setScanResult(result);
      }
    }

    function error(err) {
      console.warn("QR code scan error:", err);
    }

    return () => {
      if (scanner) {
        scanner.stop();
        setScanner(null);
      }
    };
  }, [scanner]);

  const handleNotShowQr = () => {
    setShowQr(false);
  };

  return (
    <div className="bg-white max-h-200 w-200 m-t-20">
      <h1>Escanear código QR</h1>
      {scanResult ? (
        <div>
          Success: <a href={"http://" + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
