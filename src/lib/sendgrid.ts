import sgMail from "@sendgrid/mail";

export async function sendMail(formData){

    sgMail.setApiKey(process.env.SENDGRID_SECRET as any)  
 
    const msg = {
      to: 'lic.agustinascasso@gmail.com', // Change to your recipient
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
    try {
      const result = await sgMail.send(msg)

      return result
      
    } catch (error) {
      
      throw error
    }
}