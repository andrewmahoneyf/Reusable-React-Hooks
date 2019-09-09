import { useEffect } from "react";

const useScrollToBottom = (domRef, trigger) => {
  const scrollToBottom = () => {
    const container = domRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [trigger]);
};
