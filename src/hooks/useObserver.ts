import { useEffect, useState } from "react";

const useObserver = (reference: string) => {
  const [isContentVisible, setContentVisibility] = useState<boolean>(false);
  const [isHrVisible, setHrVisibility] = useState<boolean>(false);

  useEffect(() => {
    const observer = (
      reference: string,
      setHrState: (arg: boolean) => void,
      setContentState: (arg: boolean) => void
    ) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          setHrState(entry.isIntersecting);
          if (entry.isIntersecting) {
            setContentState(true);
          }
        });
      });
      const target: Element | null = document.querySelector(`#${reference}`);
      if (target) {
        observer.observe(target);
        return () => observer.unobserve(target);
      }
    };
    observer(reference, setHrVisibility, setContentVisibility);
  }, []);

  return {
    isHrVisible,
    isContentVisible
  };
};

export default useObserver;
