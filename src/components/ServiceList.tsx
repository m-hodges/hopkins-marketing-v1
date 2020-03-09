import React from "react";

import ServiceItem from "./ServiceItem";

import data from "../data";
import Service from "../types";
import useObserver from "../hooks/useObserver";

const ServiceList = () => {
  const { isHrVisible } = useObserver("servicesReference");
  return (
    <div className="services container--centered__col">
      <div className="background services--background"></div>
      <h2 className="alt-heading" id="servicesReference">
        Our Services
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <div className="services--service-container container--wrap">
        {data.map((service: Service, i: number) => (
          <ServiceItem
            id={service.id}
            title={service.title}
            details={service.details}
            icon={service.icon}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
