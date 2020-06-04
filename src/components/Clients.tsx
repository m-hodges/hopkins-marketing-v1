import React, { useState, useEffect } from "react";
import { clients } from "../data";
import { Client as ClientType } from "../types";
import useObserver from "../hooks/useObserver";
import { FaCircle } from "react-icons/fa";
import classnames from "classnames";

const Clients = () => {
  const [index, setIndex] = useState(0);
  const { isHrVisible } = useObserver("clientsReference");

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < clients.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="clients container--centered__col">
      <h2 className="heading" id="clientsReference">
        Our Clients
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <div className="clients--container">
        <Client client={clients[index]} key={clients[index].id} />
        <div className="clients--icon__container">
          {clients.map((client, i) => (
            <FaCircle
              size={20}
              className={classnames("clients--icon", {
                "clients--icon__active": index === i,
              })}
              onClick={() => setIndex(i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Client = ({ client }: { client: ClientType }) => {
  const [onMount, setMount] = useState(false);
  const [onUnmount, setUnmount] = useState(false);

  useEffect(() => {
    const onMountTimer = setTimeout(() => {
      setMount(true);
    }, 100);
    const onUnmountTimer = setTimeout(() => {
      setUnmount(true);
    }, 9000);
    return () => {
      clearTimeout(onMountTimer);
      clearTimeout(onUnmountTimer);
    };
  }, []);

  return (
    <div
      className={classnames("client", {
        "fade-in--from-side__visible": onMount,
        "fade-out--from-side__invisible": onUnmount,
        "fade-in--from-side": !onUnmount,
      })}
    >
      <div className={"client--content"}>
        <div>
          <p style={{ padding: "10px 20px" }}>{client.businessName}</p>
          <p style={{ padding: "10px 20px" }}>{client.website}</p>
        </div>
        <p
          style={{
            paddingTop: "10px",
            paddingRight: "20px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            overflowY: "auto",
          }}
        >{`\"${client.testimonial}\"`}</p>
      </div>
      <div
        className="client--image"
        style={{
          backgroundImage: `url(${client.image})`,
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Clients;
