import { useState, useEffect } from "react";

const IsTouchable = () => {
  const [isTouchable, setIsTouchable] = useState(false);

  useEffect(() => {
    setIsTouchable("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchable;
};

export default IsTouchable;
