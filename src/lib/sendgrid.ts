import sgMail from "@sendgrid/mail";

export async function sendMail(formData){

  console.log(formData);
  

    sgMail.setApiKey(process.env.SENDGRID_SECRET as any)
    
    const msg = {
      to: 'lupattin@gmail.com', // Change to your recipient
      from: 'pattindev@gmail.com', // Change to your verified sender
      subject: 'Nuevo paciente',
      html: `
      <strong>
        Paciente:${formData.name} ${formData.lastname}
        Telefono: ${formData.phone}
        Email: ${formData.email}
        Motivo de consulta: ${formData.argument}
      </strong>
      `,
    }
    sgMail
      .send(msg)
      .then((r) => {
        console.log(r);
        
        return true
      })
      .catch((error) => {
        console.log(error);
        
        throw error
      })
}