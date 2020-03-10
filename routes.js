const express = require("express");

const router = express.Router();

const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const request = (name, email, phone, message) =>
  mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "michaelcshodges@gmail.com",
          Name: "Hopkins Marketing Group Website"
        },
        To: [
          {
            Email: email,
            Name: "Michael Hodges"
          }
        ],
        Subject: "New enquiry received",
        HTMLPart: `<h3>New Enquiry Received:</h3> <br /> <ul><li><strong>Name:</strong> ${name}</li><li><strong>Email:</strong> ${email}</li><li><strong>Phone:</strong> ${phone}</li><li><strong>Message:</strong> ${message}</li></ul>`
      }
    ]
  });

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
  request(name, email, phone, message)
    .then(result => {
      console.log("Success: ", result.body);
    })
    .catch(err => {
      console.log("Error: ", err.statusCode);
    });
  //set up a bounce email that confirms in their email that we have received their enquiry
});

module.exports = router;
