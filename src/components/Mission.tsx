import React from "react";
import useObserver from "../hooks/useObserver";

const Mission = () => {
  const { isHrVisible } = useObserver("aboutTitleReference");
  const { isContentVisible } = useObserver("aboutReference");
  return (
    <div className="about container--centered__col">
      <div className="background"></div>
      <h2 className="heading" id="aboutTitleReference">
        Our Mission
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <div
        className={`about--container ${
          isContentVisible ? "fade-in fade-in--visible" : "fade-in"
        }`}
        id="aboutReference"
      >
        <p className={"about--content"}>
          We are passionate about using multimedia and social media, to platform
          ones ideas and artistries out to the public
        </p>
        <p className={"about--content"}>
          We strive to deliver optimal results for all of your marketing needs
          at an affordable budget.
        </p>
        <p className={"about--content"}>
          We pride ourselves on our ability to effectively communicate,
          construct and develop your intended message bringing it to the wider
          target audience for an even greater public understanding.
        </p>
      </div>
    </div>
  );
};

export default Mission;
