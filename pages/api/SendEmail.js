import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, phone } = req.body;
    console.log(name, email, message, phone);

    let transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: 'sendmail@seasunsarbinowo.pl',
        pass: 'V1Sqfn7OAsK}~w22&O8&_',
      },
    });

    let mailOptions = {
      from: email,
      to: 'booking@seasunsarbinowo.pl',
      subject: 'Wiadomość z formularza kontaktowego',
      text: `Oto treść wiadomości:\n\n ${message}\n\n Dane kontaktowe:\n\n Imię: ${name}\n E-mail: ${email}\n Telefon: ${phone}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Wystąpił błąd podczas wysyłania wiadomości e-mail.' });
      } else {
        console.log('E-mail wysłany: ' + info.response);
        res.status(200).json({ message: 'Wiadomość e-mail została wysłana.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Metoda HTTP nie jest obsługiwana.' });
  }
}
