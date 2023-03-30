import sgMail from "@sendgrid/mail";

type FormData ={
   name:string
   lastname:string
   email:string
   phone:number
   argument:string
}

export async function sendMail(formData:FormData){

    sgMail.setApiKey(process.env.SENDGRID_SECRET as any)

    console.log(formData);
    
    
    const msg = {
      to: 'lupattin@gmail.com', // Change to your recipient
      from: 'pattindev@gmail.com', // Change to your verified sender
      subject: 'Nuevo paciente',
      html: `
      <strong>
        Paciente:${formData.name}" "${formData.lastname}
        Telefono: ${formData.phone}
        Email: ${formData.email}
        Motivo de consulta: ${formData.argument}
      </strong>
      `,
    }
    sgMail
      .send(msg)
      .then((r) => {
        console.log("entro al then");
        console.log(r);
        
        return true
      })
      .catch((error) => {
        throw error
      })
}