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
          Name: name
        },
        To: [
          {
            Email: email,
            Name: "Michael Hodges"
          }
        ],
        Subject: "New enquiry received",
        TextPart: message,
        HTMLPart: ""
      }
    ]
  });

router.post("/email", (req, res) => {
  console.log(req.body.formData);
  //remember to sanitize input
  //set up a bounce email that confirms in their email that we have received their enquiry
  const { name, email, phone, message } = req.body.formData;
  request(name, email, phone, message)
    .then(result => {
      console.log(result.body);
    })
    .catch(err => {
      console.log("Error: ", err.statusCode);
    });
});

module.exports = router;
