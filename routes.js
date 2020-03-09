const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = express.Router();

const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

router.post("/email", (req, res) => {
  //remember to sanitize input
  console.log(req.body);
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "michaelcshodges@gmail.com",
          Name: "Mailjet Pilot"
        },
        To: [
          {
            Email: "michaelcshodges@gmail.com",
            Name: "passenger 1"
          }
        ],
        Subject: "Your email flight plan!",
        TextPart:
          "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        HTMLPart:
          '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!'
      }
    ]
  });
  request
    .then(result => {
      console.log(result.body);
    })
    .catch(err => {
      console.log(err.statusCode);
    });
});

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

module.exports = router;
