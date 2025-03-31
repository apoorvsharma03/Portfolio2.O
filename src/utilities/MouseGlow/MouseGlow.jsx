import React, { useEffect, useState } from "react";
import "./MouseGlow.css";

const MouseGlow = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className="mouse-glow"
      style={{
        top: position.y + "px",
        left: position.x + "px",
      }}
    />
  );
};

export default MouseGlow;