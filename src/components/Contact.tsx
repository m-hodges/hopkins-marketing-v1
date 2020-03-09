import React from "react";
import useObserver from "../hooks/useObserver";

const Contact = () => {
  const { isHrVisible } = useObserver("contactReference");
  const submitHandler = (event: any) => {
    // event.preventDefault();
  };
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
        <form action="/email" method="POST">
          <div className="contact--form__item">
            <p className="contact--form__label">Name</p>
            <input type="text" className="contact--form__input" name="name" />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Email</p>
            <input type="email" className="contact--form__input" name="email" />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Phone</p>
            <input type="text" className="contact--form__input" name="phone" />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Message</p>
            <textarea
              name="content"
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
              onClick={event => submitHandler(event)}
              className="contact--button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
