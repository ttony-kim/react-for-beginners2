import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const useNetwork = (onChange) => {
  // navigator.onLine : 웹사이트가 온라인인지 아닌지 (true, false)
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
