import { useEffect } from "react";

const useScrollToTop = (domRef, trigger) => {
  const scrollToTop = () => {
    const container = domRef.current;
    if (container) {
      container.scrollTop = 0;
    }
  };

  useEffect(() => {
    scrollToTop();
  }, [trigger]);
};
