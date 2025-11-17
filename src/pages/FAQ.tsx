
import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {Search, ChevronDown, ChevronUp, MapPin, Phone, Mail, Clock, Users, Home as HomeIcon, CreditCard, FileText, ArrowRight} from 'lucide-react'
import ScrollableContent from '../components/ScrollableContent'
import { useLanguage } from '../contexts/LanguageContext'

const FAQ = () => {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const categories = ['Todas', 'Moradia', 'Processo Seletivo', 'Pagamentos', 'Vida Estudantil', 'Documentação']

  const faqItems = [
    {
      id: 1,
      category: 'Moradia',
      question: t.faqQ1,
      answer: t.faqA1
    },
    {
      id: 2,
      category: 'Pagamentos',
      question: t.faqQ2,
      answer: t.faqA2
    },
    {
      id: 3,
      category: 'Moradia',
      question: t.faqQ3,
      answer: t.faqA3
    },
    {
      id: 4,
      category: 'Documentação',
      question: t.faqQ4,
      answer: t.faqA4
    },
    {
      id: 5,
      category: 'Moradia',
      question: t.faqQ5,
      answer: t.faqA5
    },
    {
      id: 6,
      category: 'Processo Seletivo',
      question: t.faqQ6,
      answer: t.faqA6
    }
  ]

  const filteredFAQs = useMemo(() => {
    return faqItems.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t.address,
      info: 'Rua Luiz Leão, 01 - Centro, Curitiba - PR, CEP 80030-010',
      color: 'text-sky-500'
    },
    {
      icon: Mail,
      title: t.generalEmail,
      info: 'comunicacao@ceupr.com.br',
      color: 'text-sky-500'
    },
    {
      icon: Mail,
      title: t.selectionProcess,
      info: 'processoseletivo@ceupr.org.br',
      color: 'text-sky-500'
    },
    {
      icon: Phone,
      title: t.phone,
      info: '(41) 3324-1984',
      color: 'text-sky-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.faqTitle}
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              {t.faqDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.faqTitle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-sky-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollableContent maxHeight="max-h-none" className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="bg-sky-100 text-sky-600 px-2 py-1 rounded text-xs font-medium">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4">
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="text-sky-400" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={20} />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.includes(faq.id) && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {t.faqDescription}
                </h3>
                <p className="text-gray-500">
                  {t.faqDescription}
                </p>
              </div>
            )}
          </ScrollableContent>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Não encontrou sua dúvida?
            </h2>
            <p className="text-xl text-gray-600">
              Entre em contato conosco pelos canais específicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="flex justify-center mb-4">
                    <div className="bg-sky-100 p-3 rounded-full">
                      <Icon className={contact.color} size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 text-sm break-all">{contact.info}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              to="/contato"
              className="inline-flex items-center space-x-2 bg-sky-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-500 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>{t.getInTouch}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
