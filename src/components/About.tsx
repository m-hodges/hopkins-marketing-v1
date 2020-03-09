import React from "react";
import useObserver from "../hooks/useObserver";

const About = () => {
  const { isHrVisible, isContentVisible } = useObserver("aboutReference");
  return (
    <div className="about container--centered__col">
      <div className="background about--background"></div>
      <h2>
        Lorem Ipsum
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <p
        className={`about--content ${
          isContentVisible ? "fade-in fade-in--visible" : "fade-in"
        }`}
        id="aboutReference"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
        lectus dapibus tristique volutpat. Maecenas pretium ipsum non
        ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula
        euismod, feugiat nisi in, sollicitudin turpis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus
        tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum.
        Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in,
        sollicitudin turpis.
      </p>
    </div>
  );
};

export default About;
