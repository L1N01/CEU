
import React from 'react'
import { Link } from 'react-router-dom'
import {Calendar, Users, Award, Heart, ArrowRight, Building, Globe, Trophy, Video} from 'lucide-react'
import ScrollableContent from '../components/ScrollableContent'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  
  const milestones = [
    {
      year: '1948',
      title: t.timelineFoundation,
      description: t.timelineFoundationDesc,
      icon: Building
    },
    {
      year: '1960',
      title: t.timelineExpansion,
      description: t.timelineExpansionDesc,
      icon: Users
    },
    {
      year: '1985',
      title: t.timelineRecognition,
      description: t.timelineRecognitionDesc,
      icon: Award
    },
    {
      year: '2000',
      title: t.timelineModernization,
      description: t.timelineModernizationDesc,
      icon: Globe
    },
    {
      year: '2024',
      title: t.timelineLargest,
      description: t.timelineLargestDesc,
      icon: Trophy
    }
  ]

  const values = [
    {
      icon: Heart,
      title: t.solidarity,
      description: t.solidarityDesc
    },
    {
      icon: Users,
      title: t.community,
      description: t.communityDesc
    },
    {
      icon: Award,
      title: t.excellence,
      description: t.excellenceDesc
    },
    {
      icon: Globe,
      title: t.inclusion,
      description: t.inclusionDesc
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-800 via-sky-700 to-sky-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t.ourHistory}
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              {t.aboutTitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.mission}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {t.ourHistoryText1}
                </p>
                <p>
                  {t.missionText}
                </p>
                <p>
                  {t.ourHistoryText3}
                </p>
              </div>
            </div>
            <div className="bg-sky-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-sky-400 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Calendar size={24} />
                  </div>
                  <div className="text-2xl font-bold text-sky-600">76</div>
                  <div className="text-sm text-gray-600">{t.yearsOfHistory}</div>
                </div>
                <div className="text-center">
                  <div className="bg-sky-400 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users size={24} />
                  </div>
                  <div className="text-2xl font-bold text-sky-600">200+</div>
                  <div className="text-sm text-gray-600">{t.activeStudents}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.ourHistory}
            </h2>
            <p className="text-xl text-gray-600">
              {t.ourHistoryText2}
            </p>
          </div>

          <ScrollableContent maxHeight="max-h-96" className="space-y-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="bg-sky-400 text-white p-3 rounded-full">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </ScrollableContent>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="bg-sky-400 text-white p-3 rounded-full">
                <Video size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t.videoSectionTitle}
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.videoSectionDesc}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/xRGBuJ9uNDw"
                title="Tour pela CEU - Casa do Estudante Universitário"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t.values}
            </h2>
            <p className="text-xl text-gray-600">
              {t.valuesText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="group p-6 bg-gray-50 rounded-xl hover:bg-sky-50 transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-400 text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-400 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            {t.readyToJoin}
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            {t.readyToJoinDescription}
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center space-x-2 bg-white text-sky-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <span>{t.getInTouch}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
