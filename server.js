const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 1, // start blocking after 1 request
  handler: (req, res) => {
    res.status(429).send({
      statusCode: "429",
      message: `Sorry! 5 mins timeout between emails! Don't try to spam please!`,
    });
  },
  skipFailedRequests: true,
});

app.use("/api/send-email", limiter);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mspasbot@gmail.com",
    pass: "Niebanujbandyto123",
  },
});

app.post("/api/send-email", (req, res) => {
  let mailSubject = req.body.mailSubject;
  let mailText = req.body.mailText;

  let mailOptions = {
    from: "mspasbot@gmail.com",
    to: "marcin7789@gmail.com",
    subject: mailSubject,
    text: mailText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({
        statusCode: "404",
        message:
          "Sorry! Email has not been sent. Please try to conntact me via linkedin instead.",
      });
    } else {
      res.status(200).send({
        statusCode: "200",
        message: "Email was sent successfully!",
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
