import React, { useReducer } from "react";
import useObserver from "../hooks/useObserver";
import { FormData } from "../types";
import { sendEmail } from "../api";

const setName = "SET_NAME";
const setEmail = "SET_EMAIL";
const setPhone = "SET_PHONE";
const setMessage = "SET_MESSAGE";

const reducer = (state: FormData, action: any) => {
  switch (action.type) {
    case setName:
      return { ...state, name: action.payload };
    case setEmail:
      return { ...state, email: action.payload };
    case setPhone:
      return { ...state, phone: action.payload };
    case setMessage:
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
};

const Contact = () => {
  const { isHrVisible } = useObserver("contactReference");
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: setName, payload: event.target.value });
  };

  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: setEmail, payload: event.target.value });
  };

  const phoneInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: setPhone, payload: event.target.value });
  };

  const messageInputHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: setMessage, payload: event.target.value });
  };

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendEmail(state).then(response => console.log(response));
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
        <form>
          <div className="contact--form__item">
            <p className="contact--form__label">Name</p>
            <input
              type="text"
              className="contact--form__input"
              name="name"
              required
              onChange={nameInputHandler}
            />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Email</p>
            <input
              type="email"
              className="contact--form__input"
              name="email"
              required
              onChange={emailInputHandler}
            />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Phone</p>
            <input
              type="tel"
              className="contact--form__input"
              name="phone"
              required
              onChange={phoneInputHandler}
            />
          </div>
          <div className="contact--form__item">
            <p className="contact--form__label">Message</p>
            <textarea
              name="content"
              cols={50}
              rows={20}
              className="contact--form__text-area"
              placeholder=" Enter your message here"
              required
              onChange={messageInputHandler}
            ></textarea>
          </div>
          <div className="contact--form__item contact--form__button">
            <button
              type="submit"
              onClick={submitHandler}
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
