import request from "superagent";
import { FormData } from "./types";

export const sendEmail = (formData: FormData) => {
  return request
    .post("http://localhost:8080/email")
    .send({ formData })
    .then(response => {
      console.log("Response received: ", response);
      return response;
    })
    .catch(error => {
      console.log(error.message, error.response);
    });
};
