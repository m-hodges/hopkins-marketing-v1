import React, { useState, useEffect } from "react";
import useObserver from "../hooks/useObserver";

const Contact = () => {
  const { isHrVisible } = useObserver("contactReference");
  //   const submitHandler = () => {
  //     fetch("/api/email")
  //       .then(response => response.json())
  //       .then(response => console.log(response));
  //   };
  return (
    <div className="contact">
      <div className="background contact--background"></div>
      <h2>
        Contact Us Now!
        <hr
          className={`scroll-in-hr ${
            isHrVisible ? "scroll-in-hr__visible" : "scroll-in-hr__not-visible"
          }`}
        />
      </h2>
      <div id="contactReference" className="contact--form">
        {/* <form action="/email" method='POST'> */}
        <div className="contact--form__item">
          <p className="contact--form__label">Name</p>
          <input type="text" className="contact--form__input" />
        </div>
        <div className="contact--form__item">
          <p className="contact--form__label">Email</p>
          <input type="email" className="contact--form__input" />
        </div>
        <div className="contact--form__item">
          <p className="contact--form__label">Phone</p>
          <input type="text" className="contact--form__input" />
        </div>
        <div className="contact--form__item">
          <p className="contact--form__label">Message</p>
          <textarea
            name=""
            id=""
            cols={50}
            rows={20}
            className="contact--form__text-area"
            placeholder=" Enter your message here"
          ></textarea>
        </div>
        <div className="contact--form__item contact--form__button">
          <button
            type="submit"
            // onClick={() => submitHandler()}
            className="contact--button"
          >
            Send
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Contact;
