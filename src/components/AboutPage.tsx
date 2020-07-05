import React, { useEffect } from "react";
import About from "./Mission";
import useObserver from "../hooks/useObserver";
import classnames from "classnames";

const content = [
  "Hopkins Marketing Group was created to simplify the marketing experince for the individual, created out of Director Elliot Hopkins' initial love of Moving Image.",
  "Add more details to the story here, as well as more picture cards if more details are required",
];

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

function AboutPage({ setHeaderVisibility }: Props) {
  const { isHrVisible } = useObserver("aboutPageTitleReference");
  useEffect(() => {
    setHeaderVisibility(true);
  }, []);
  return (
    <div className="about--page">
      <h2
        className="heading"
        id={"aboutPageTitleReference"}
        style={{ textAlign: "center" }}
      >
        About Us
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <AboutPageItem
        orientation={1}
        content={content[0]}
        imageUrl={
          "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        }
      />
      <AboutPageItem
        orientation={2}
        content={content[1]}
        imageUrl={
          "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        }
      />
    </div>
  );
}

export default AboutPage;

type AboutPageItemProps = {
  orientation: number;
  content: string;
  imageUrl: string;
};

function AboutPageItem({ orientation, content, imageUrl }: AboutPageItemProps) {
  return (
    <div
      className={classnames(
        "about--page__container",
        orientation % 2 !== 0
          ? "about--page__container--left-aligned"
          : "about--page__container--right-aligned"
      )}
    >
      {orientation % 2 !== 0 && (
        <div className="about--page__content about--page__content--right-aligned">
          <p>{content}</p>
        </div>
      )}
      <div className="about--page__image--container">
        <img src={imageUrl} alt="" className="about--page__image" />
      </div>

      {orientation % 2 === 0 && (
        <div className="about--page__content about--page__content--left-aligned">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
