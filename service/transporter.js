import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pseudopsy0@gmail.com",
      pass: "shyurftvwysyhcuf",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
export default transporter

