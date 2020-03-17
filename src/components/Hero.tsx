import React, { useEffect } from "react";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

const Hero = ({ setHeaderVisibility }: Props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio === 0) {
          setHeaderVisibility(true);
        } else {
          setHeaderVisibility(false);
        }
      });
    });
    const target: any = document.querySelector("#headerReference");
    observer.observe(target);
    return () => observer.unobserve(target);
  }, []);
  return (
    <>
      <div className="hero container--centered" id="headerReference">
        <div className="background hero--background"></div>
        <div className="hero--logo__container">
          <img
            src="/images/HMG-Logo-Web.png"
            alt="Hopkins Marketing Group"
            className="hero--logo"
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: -999,
          height: `${document.documentElement.clientHeight - 75}px`
        }}
      ></div>
    </>
  );
};

export default Hero;
