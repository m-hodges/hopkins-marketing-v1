import React from "react";
import About from "./Mission";
import useObserver from "../hooks/useObserver";
import classnames from "classnames";

const content = [
  " Quisque pharetra sem ante, non aliquam libero porttitor vel. Nulla facilisi. Ut laoreet consectetur hendrerit. Ut accumsan felis vitae hendrerit venenatis. Praesent maximus pulvinar placerat. Nulla facilisi. Donec efficitur posuere consequat. ",
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, ex vitae laoreet varius, libero lectus imperdiet dolor, vel facilisis nunc justo non nibh. Integer nec vehicula lectus, sed fermentum diam. Nunc congue ac enim egestas ullamcorper. Curabitur bibendum lorem tellus, sed accumsan tortor molestie sed. Curabitur porta dapibus ante vel cursus. "
];

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

function AboutPage({ setHeaderVisibility }: Props) {
  setHeaderVisibility(true);
  const { isHrVisible } = useObserver("aboutPageTitleReference");
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
          <p style={{ fontSize: "30px" }}>{content}</p>
        </div>
      )}
      <div className="about--page__image--container">
        <img src={imageUrl} alt="" className="about--page__image" />
      </div>

      {orientation % 2 === 0 && (
        <div className="about--page__content about--page__content--left-aligned">
          <p style={{ fontSize: "30px" }}>{content}</p>
        </div>
      )}
    </div>
  );
}
