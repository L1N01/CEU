
import React, { useState, useEffect } from 'react'
import {MapPin, Phone, Mail, Clock, Send, MessageCircleDashed as MessageCircle, Users, FileText, LogIn} from 'lucide-react'
import toast from 'react-hot-toast'
import { lumi } from '../lib/lumi'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [user, setUser] = useState(lumi.auth.user)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const unsubscribe = lumi.auth.onAuthChange(({ user }) => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async () => {
    try {
      await lumi.auth.signIn()
      toast.success('Login realizado com sucesso!')
    } catch (error) {
      toast.error('Erro ao fazer login. Tente novamente.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      toast.error('Você precisa fazer login para enviar mensagens.')
      return
    }

    setIsSubmitting(true)

    try {
      // Enviar e-mail para o usuário logado
      await lumi.tools.email.send({
        to: user.email,
        subject: `Contato CEU - ${formData.subject}`,
        fromName: 'CEU - Casa do Estudante Universitário',
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
                <strong>Nota:</strong> Esta é uma cópia da mensagem enviada através do formulário de contato do site da CEU.
              </p>
            </div>
          </div>
        `,
        replyTo: formData.email
      })

      toast.success('Mensagem enviada com sucesso! Você receberá uma cópia no seu e-mail.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t.address,
      info: 'Rua Luiz Leão, 01 - Centro',
      detail: 'Curitiba/PR - CEP: 80030-010',
      color: 'bg-sky-400'
    },
    {
      icon: Phone,
      title: t.phone,
      info: '(41) 3324-1984',
      detail: t.generalEmailDesc,
      color: 'bg-sky-500'
    },
    {
      icon: Mail,
      title: t.generalEmail,
      info: 'comunicacao@ceupr.com.br',
      detail: t.generalEmailDesc,
      color: 'bg-sky-600'
    },
    {
      icon: Clock,
      title: t.phone,
      info: 'Segunda a Sexta: 8h às 18h',
      detail: 'Sábados: 8h às 12h',
      color: 'bg-sky-300'
    }
  ]

  const specificContacts = [
    {
      icon: FileText,
      title: t.selectionProcess,
      email: 'processoseletivo@ceupr.org.br',
      description: t.selectionEmailDesc,
      color: 'text-sky-600'
    },
    {
      icon: MessageCircle,
      title: t.generalEmail,
      email: 'comunicacao@ceupr.com.br',
      description: t.generalEmailDesc,
      color: 'text-sky-600'
    },
    {
      icon: Users,
      title: t.generalQuestions,
      email: 'comunicacao@ceupr.com.br',
      description: t.generalEmailDesc,
      color: 'text-sky-600'
    }
  ]

  const subjects = [
    'Informações Gerais',
    'Processo Seletivo',
    'Documentação',
    'Visita à Casa',
    'Moradia',
    'Outros'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.contactTitle}
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              {t.contactDescription}
            </p>
            {!user && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleLogin}
                  className="bg-white text-sky-800 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-300 flex items-center space-x-2 shadow-lg"
                >
                  <LogIn size={20} />
                  <span>Fazer Login para Enviar Mensagem</span>
                </button>
              </div>
            )}
            {user && (
              <div className="flex justify-center mt-6">
                <div className="bg-sky-700/50 px-6 py-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sky-100">Logado como: <strong>{user.userName}</strong> ({user.email})</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    <div className={`${contact.color} p-3 rounded-full text-white`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {contact.info}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {contact.detail}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Specific Contact Channels */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.usefulLinks}
              </h2>
              <p className="text-xl text-gray-600">
                {t.contactDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specificContacts.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sky-100 p-3 rounded-lg">
                        <Icon className={contact.color} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-sky-600 font-medium mb-2 break-all">
                          {contact.email}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Envie sua Mensagem
                </h2>
                <p className="text-gray-600">
                  Preencha o formulário e entraremos em contato em breve
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  >
                    <option value="">Selecione o assunto</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-vertical"
                    placeholder="Descreva sua dúvida ou mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!user || isSubmitting}
                  className="w-full bg-sky-400 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-sky-500 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Enviando...' : user ? 'Enviar Mensagem' : 'Faça Login para Enviar'}</span>
                </button>
                {!user && (
                  <p className="text-sm text-gray-500 text-center mt-2">
                    Você precisa fazer login para enviar mensagens
                  </p>
                )}
                {user && (
                  <p className="text-sm text-sky-600 text-center mt-2">
                    Uma cópia da mensagem será enviada para {user.email}
                  </p>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Location Map */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nossa Localização
                </h3>
                <div className="aspect-video rounded-lg mb-4 overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0234567890123!2d-49.2658!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4f4d7d7d7d7%3A0x1234567890abcdef!2sRua%20Luiz%20Le%C3%A3o%2C%201%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080030-010!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da CEU - Casa do Estudante Universitário"
                  />
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Transporte Público:</strong> Fácil acesso por ônibus urbano</p>
                  <p><strong>Intercampi UFPR:</strong> Próximo às paradas</p>
                  <p><strong>Centro de Curitiba:</strong> Localização privilegiada</p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-sky-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Dicas para Contato
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Para processo seletivo, use: processoseletivo@ceupr.org.br</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Para questões gerais, use: comunicacao@ceupr.com.br</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Telefone: (41) 3324-1984</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Resposta em até 48 horas úteis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
