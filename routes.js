const express = require("express");
require("dotenv").config();
const router = express.Router();

const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const marketingEmail = "michaelcshodges@gmail.com";

const mailToSelf = (name, email, phone, message) =>
  mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: marketingEmail,
          Name: "Hopkins Marketing Group Website",
        },
        To: [
          {
            Email: marketingEmail,
            Name: "Michael Hodges",
          },
        ],
        Subject: "New enquiry received",
        HTMLPart: `<h3>New Enquiry Received:</h3> <br /> <ul><li><strong>Name:</strong> ${name}</li><li><strong>Email:</strong> ${email}</li><li><strong>Phone:</strong> ${phone}</li><li><strong>Message:</strong> ${message}</li></ul>`,
      },
    ],
  });

const mailToClient = (name, email, phone, message) =>
  mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: marketingEmail,
          Name: "Hopkins Marketing Group",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Subject: "New enquiry received",
        HTMLPart: `<h3>Thank you for your enquiry.</h3><br /><p>We will get back to you as soon as possible.</p><br /><img src="/images/HMG-Logo-Web.png" />`,
      },
    ],
  });

const validateEmail = (emailString) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
  return regex.test(emailString);
};

router.post("/email", (req, res) => {
  const { name, email, phone, message } = req.body.formData;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string"
  ) {
    return;
  }
  if (!validateEmail(email)) {
    return;
  }
  try {
    mailToSelf(name, email, phone, message)
      .then((result) => {
        console.log("Success: ", result.body);
      })
      .then(() => {
        try {
          mailToClient(name, email, phone, message).then((result) => {
            console.log("Bounce Email Success: ", result.body);
            res.json({ result });
            return;
          });
        } catch (error) {
          console.log("Bounce Error: ", err.statusCode);
          res.json({ error });
        }
      });
  } catch (error) {
    console.log("Error: ", err.statusCode);
    res.json({ error });
  }
});

module.exports = router;
