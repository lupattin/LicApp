import sgMail from "@sendgrid/mail";

export function sendMail(email, name, lastname, phoneNumber, argument ){

    sgMail.setApiKey(process.env.SENDGRID_SECRET as any)
    
    const msg = {
      to: 'lupattin@gmail.com', // Change to your recipient
      from: 'pattindev@gmail.com', // Change to your verified sender
      subject: 'Nuevo paciente',
      html: `
      <strong>
        Paciente:${name}" "${lastname}
        Telefono: ${phoneNumber}
        Email: ${email}
        Motivo de consulta: ${argument}
      </strong>
      `,
    }
    sgMail
      .send(msg)
      .then(() => {
        return true
      })
      .catch((error) => {
        return error
      })
}