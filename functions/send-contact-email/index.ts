import { createClient } from 'npm:@lumi.new/sdk@0.2.1'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

Deno.serve(async (req) => {
  // CORS headers
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  try {
    // Parse request body
    const formData: ContactFormData = await req.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Todos os campos são obrigatórios' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'E-mail inválido' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    // Initialize Lumi client with authorization from request
    const authorization = req.headers.get('Authorization')
    const lumi = createClient({
      projectId: 'p374654511434596352',
      apiBaseUrl: 'https://api.lumi.new',
      authOrigin: '',
      authorization,
    })

    // Send email using Lumi SDK
    await lumi.tools.email.send({
      to: 'lincoln.pereira90@gmail.com', // Email destinatário da CEU
      subject: `Contato CEU - ${formData.subject}`,
      fromName: 'CEU - Formulário de Contato',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nova Mensagem de Contato</h2>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${formData.name}</p>
            <p><strong>E-mail:</strong> ${formData.email}</p>
            <p><strong>Assunto:</strong> ${formData.subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151;">Mensagem:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${formData.message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfeff; border-left: 4px solid #0ea5e9;">
            <p style="margin: 0; color: #0e7490; font-size: 14px;">
              <strong>Responder para:</strong> ${formData.email}
            </p>
          </div>
        </div>
      `,
      replyTo: formData.email,
    })

    // Send confirmation email to the user
    await lumi.tools.email.send({
      to: formData.email,
      subject: 'Confirmação - Mensagem Recebida pela CEU',
      fromName: 'CEU - Casa do Estudante Universitário',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Obrigado por entrar em contato!</h2>
          <p style="color: #374151; font-size: 16px;">Olá, <strong>${formData.name}</strong>!</p>
          <p style="color: #6b7280; line-height: 1.6;">
            Recebemos sua mensagem e responderemos o mais breve possível.
          </p>
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #374151;"><strong>Sua mensagem:</strong></p>
            <p style="color: #6b7280; margin-top: 10px;">${formData.message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Atenciosamente,<br>
            <strong>Equipe CEU</strong>
          </p>
        </div>
      `,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'E-mail enviado com sucesso!' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Erro ao enviar e-mail. Tente novamente mais tarde.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
})
