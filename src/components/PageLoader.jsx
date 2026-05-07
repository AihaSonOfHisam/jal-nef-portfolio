import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function PageLoader({ children, delay = 900, fadeDuration = 500 }) {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, delay);

    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, delay + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [delay, fadeDuration]);

  return (
    <>
      {showLoader && <LoadingScreen fadeOut={fadeOut} fadeDuration={fadeDuration} />}
      {children}
    </>
  );
}