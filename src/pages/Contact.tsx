
import React, { useState } from 'react'
import {MapPin, Phone, Mail, Clock, Send, MessageCircleDashed as MessageCircle, Users, FileText} from 'lucide-react'
import toast from 'react-hot-toast'
import { lumi } from '../lib/lumi'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Enviar dados para o Deno Function
      const response = await lumi.functions.invoke('send-contact-email', {
        method: 'POST',
        body: formData,
      })

      if (response.success) {
        toast.success(t.messageSentSuccess)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error(response.error || t.messageSentError)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      toast.error(t.messageSentError)
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
      info: t.weekdaySchedule,
      detail: t.saturdaySchedule,
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
    t.subjectGeneral,
    t.subjectSelection,
    t.subjectDocumentation,
    t.subjectVisit,
    t.subjectHousing,
    t.subjectOthers
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
                  {t.sendYourMessage}
                </h2>
                <p className="text-gray-600">
                  {t.formDescription}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder={t.fullNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subject} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  >
                    <option value="">{t.selectSubject}</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-vertical"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-400 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-sky-500 transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? t.sending : t.sendMessage}</span>
                </button>
                <p className="text-sm text-sky-600 text-center mt-2">
                  {t.emailCopyNotice}
                </p>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Location Map */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t.ourLocation}
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
                  <p><strong>{t.publicTransport}:</strong> {t.publicTransportDesc}</p>
                  <p><strong>{t.intercampi}:</strong> {t.intercampiDesc}</p>
                  <p><strong>{t.downtownLocation}:</strong> {t.downtownLocationDesc}</p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-sky-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t.contactTips}
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{t.selectionEmailTip}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{t.generalEmailTip}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{t.phoneTip}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{t.responseTime}</span>
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
