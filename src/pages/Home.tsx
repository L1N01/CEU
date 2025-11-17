
import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowRight, Users, Home as HomeIcon, Heart, Star, MapPin, Clock, Shield} from 'lucide-react'
import ImageCarousel from '../components/ImageCarousel'
import ScrollableContent from '../components/ScrollableContent'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const { t } = useLanguage()
  
  const carouselImages = [
    'https://cdn-static-lumi.artvibe.ai/b0/b0d3e608c1e5d7db8f4c5ea9301d5647.webp',
    'https://cdn-static-lumi.artvibe.ai/fd/fd9aeb6eeef00c8b4ae56274b0e6cb3c.webp',
    'https://cdn-static-lumi.artvibe.ai/e3/e3f019a3eae67fac9d50485ced7f3e0c.webp',
    'https://cdn-static-lumi.artvibe.ai/2d/2d11952bbf1b8dc4ea231c4005ccd5df.webp',
    'https://cdn-static-lumi.artvibe.ai/69/6914fda13b00f548fd48b1d9510dc88a.webp',
    'https://cdn-static-lumi.artvibe.ai/87/872aaccc7d2c92cac8fe08236ee48c4e.webp',
    'https://cdn-static-lumi.artvibe.ai/37/37b852c7e228157f71cd7184468da938.webp',
    'https://cdn-static-lumi.artvibe.ai/cd/cda9e23412ef79bceb3504ed6f9e314b.webp',
    'https://cdn-static-lumi.artvibe.ai/a9/a906ab8c27723e03de33533a32e02089.webp',
    'https://cdn-static-lumi.artvibe.ai/6c/6c0f5496b9c634de776357a0f230c5f1.webp',
    'https://cdn-static-lumi.artvibe.ai/c9/c986e7ca3f8f5d476096d780ec7b6bf7.webp',
    'https://cdn-static-lumi.artvibe.ai/b6/b62c66b41f2ddb744b20c693c086d8ef.webp',
    'https://cdn-static-lumi.artvibe.ai/20/204c24df097e4010c7be1972f8408e70.webp'
  ]

  const features = [
    {
      icon: HomeIcon,
      title: t.studentHousing,
      description: t.studentHousingDesc,
      color: 'bg-sky-400'
    },
    {
      icon: Users,
      title: t.activeCommunity,
      description: t.activeCommunityDesc,
      color: 'bg-sky-500'
    },
    {
      icon: Heart,
      title: t.centralLocation,
      description: t.centralLocationDesc,
      color: 'bg-sky-300'
    },
    {
      icon: Shield,
      title: t.completeStructure,
      description: t.completeStructureDesc,
      color: 'bg-sky-600'
    }
  ]

  const stats = [
    { number: '76', label: t.yearsOfHistory, icon: Clock },
    { number: '200+', label: t.activeStudents, icon: Users },
    { number: '24/7', label: t.availablePorter, icon: Shield },
    { number: '#1', label: t.selfManagedHouse, icon: Star }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-sky-300/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-sky-200 to-sky-100 bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/sobre"
                className="group bg-white text-sky-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>{t.knowOurHistory}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contato"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-800 transition-all duration-300 flex items-center space-x-2"
              >
                <MapPin size={20} />
                <span>{t.visitUs}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="bg-sky-100 p-3 rounded-full">
                      <Icon className="text-sky-500" size={24} />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.knowOurStructure}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.structureDescription}
            </p>
          </div>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.whyChooseCEU}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyChooseDescription}
            </p>
          </div>

          <ScrollableContent maxHeight="max-h-none" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </ScrollableContent>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.readyToJoin}
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            {t.readyToJoinDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/faq"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.clarifyDoubts}
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-sky-600 transition-all duration-300"
            >
              {t.getInTouch}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
