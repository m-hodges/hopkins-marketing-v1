import React, { useState } from "react";
import { clients } from "../data";
import { Client as ClientType } from "../types";
import useObserver from "../hooks/useObserver";

const Clients = () => {
  const [index, setIndex] = useState(0);
  const { isHrVisible } = useObserver("clientsReference");

  return (
    <div className="clients container--centered__col">
      <h2>
        Our Clients
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <div className="clients--container" id="clientsReference">
        {clients.map(client => (
          <Client client={client} key={client.id} />
        ))}
      </div>
    </div>
  );
};

//include circles (with hover purple) over image, on click nav to that client
//timeout to go to next client in loop
//fade to the side on switch

const Client = ({ client }: { client: ClientType }) => {
  return (
    <div className="client">
      <div className="client--content">
        <div>
          <p style={{ padding: "10px 20px" }}>{client.name}</p>
          <p style={{ padding: "10px 20px" }}>{client.website}</p>
        </div>
        <p
          style={{
            paddingTop: "10px",
            paddingRight: "20px",
            paddingBottom: "10px",
            paddingLeft: "10px"
          }}
        >{`\"${client.testimonial}\"`}</p>
      </div>
      <div
        className="client--image"
        style={{
          backgroundImage: `url(${client.image})`,
          backgroundPosition: "center"
        }}
      ></div>
    </div>
  );
};

export default Clients;
