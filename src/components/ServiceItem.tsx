import React from "react";
import { Service } from "../types";
import useObserver from "../hooks/useObserver";

const ServiceItem = (props: Service) => {
  const reference = props.id.toString();
  const Icon = props.icon;
  // const { isContentVisible } = useObserver(reference);
  return (
    <div className="service">
      <Icon size={50} className="service--icon" />
      <h3 className="service--title">{props.title.toUpperCase()}</h3>

      <ul
        // className={`${
        //   isContentVisible ? "fade-in fade-in--visible" : "fade-in"
        // }`}
        id={reference}
      >
        {props.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;
