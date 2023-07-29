import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Camera.module.scss";

const Camera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const handleStopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setIsCameraActive(false);
  };

  return (
    <div>
      {isCameraActive ? (
        <div>
          <video ref={videoRef} autoPlay playsInline />
          <button onClick={handleStopCamera}>Stop Camera</button>
        </div>
      ) : (
        <button
          style={{ background: "none", border: "none" }}
          onClick={handleStartCamera}
        >
          <Image
            className={styles.img}
            alt="camera"
            src="/camera.png"
            width={40}
            height={40}
          />{" "}
        </button>
      )}
    </div>
  );
};

export default Camera;
