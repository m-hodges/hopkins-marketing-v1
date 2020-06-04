import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

const Hero = ({ setHeaderVisibility }: Props) => {
  const [width, height] = useWindowSize();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
          height: (() => {
            if (width > 600) {
              return `${height - 75}px`;
            } else {
              return `${height}px`;
            }
          })(),
        }}
      ></div>
    </>
  );
};

export default Hero;
