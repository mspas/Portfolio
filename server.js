const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
//const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//const binaryData = fs.readFileSync("CV.pdf");
//const fileBase64 = new Buffer.from(binaryData).toString("base64");
var isTimeout = false;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mspasBot@gmail.com",
    pass: "Niebanujbandyto123",
  },
});

app.post("/api/send-mail", (req, res) => {
  let mailSubject = req.body.mailSubject;
  let mailText = req.body.mailText;

  if (isTimeout) {
    res.send({
      statusCode: "420",
      error: "Timeout between emails is set to 5 min to prevent spam!",
    });
  }

  let mailOptions = {
    from: "mspasBot@gmail.com",
    to: "marcinspasinski96@gmail.com",
    subject: mailSubject,
    text: mailText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({ statusCode: "404", error: error });
    } else {
      res.send({ statusCode: "200", error: true });
      isTimeout = true;
      console.log(isTimeout);
      timeout();
    }
  });
});

const timeout = () => {
  setTimeout(() => {
    isTimeout = false;
  }, 300000);
};

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
