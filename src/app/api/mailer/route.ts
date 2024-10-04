import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { reciever, cartId } = await request.json();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASSWORD, // your email password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${process.env.EMAIL_SENDER}`, // sender address
    to: `${reciever}`, // list of receivers
    subject: `Zaklejki.pl: Twoje zamówienie jest przetwarzane.`, // Subject line
    html: `
      <div style="font-family: Arial,sans-serif;font-size: 16px;line-height: 1.5;color:white;background:#212121;border-radius:5px;padding:20px;">
        <h2 style="font-size: 24px; margin-bottom: 20px;">Dziękujemy za zakupy w naszym sklepie!</h2>
        <p style="margin-bottom: 20px;">Twoje naklejki dotrą do Ciebie bezpiecznie w przeciągu 2-3 dni roboczych!</p>
        <p style="margin-bottom: 20px;">Numer zamówienia: ${cartId}</p>
        <p style="margin-bottom: 20px;">W razie jakichkolwiek pytań prosimy o kontakt na adres mailowy <a href="mailto:zaklejkishop@gmail.com">zaklejkishop@gmail.com</a> z numerem zamówienia w tytule.</p>
      </div>
    `,
  });

  return NextResponse.json({ message: info });
}
