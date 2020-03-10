import request from "superagent";
import { FormData } from "./types";

export const sendEmail = (formData: FormData) => {
  console.log(`from api:`, formData);
  return request
    .post("/email")
    .send({ formData })
    .set({ Accept: "application/json" })
    .then(res => JSON.stringify(res.body))
    .catch(err => console.log(err.message, err.response));
};
