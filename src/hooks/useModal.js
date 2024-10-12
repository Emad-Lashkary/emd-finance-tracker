import { useState, useEffect, useRef } from "react";

function useModal() {
  const [isShowing, setIsShowing] = useState(false);
  const modalRef = useRef();

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsShowing(false);
    }
  };

  useEffect(() => {
    if (isShowing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowing]);

  return {
    isShowing,
    toggle,
    modalRef,
  };
}

export default useModal;
