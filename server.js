const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const binaryData = fs.readFileSync("CV.pdf");
const fileBase64 = new Buffer.from(binaryData).toString("base64");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "@gmail.com",
    pass: "",
  },
});

app.post("/api/send-mail", (req, res) => {
  let mail = req.body.mail;

  let mailOptions = {
    from: "mspasBot@gmail.com",
    to: mail,
    subject: "You requested my CV, so here you are!",
    html:
      "<h2>I'm honoured that you liked my work that much!</h2> All the contact information are listed in my CV. This mail was sent automatically, do not respond to this email adress, instead of it use the one mentioned in CV.",
    attachments: [
      {
        filename: "Marcin Spasiński-CV.pdf",
        content: fileBase64,
        encoding: "base64",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send({ statusCode: "404", error: error });
    } else {
      res.send({ statusCode: "200", error: true });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
