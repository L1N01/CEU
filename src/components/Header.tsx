
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu, X, Home, Info, HelpCircle, Mail} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  const navigation = [
    { name: t.home, href: '/', icon: Home },
    { name: t.about, href: '/sobre', icon: Info },
    { name: t.faq, href: '/faq', icon: HelpCircle },
    { name: t.contact, href: '/contato', icon: Mail },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white/90 p-2 rounded-lg group-hover:bg-white transition-all duration-300 shadow-md">
              <img 
                src="https://cdn-static-lumi.artvibe.ai/88/88ec529bfd62c91170a7c2d1dee4fe49.webp" 
                alt="CEU Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold tracking-tight">CEU</h1>
              <p className="text-xs text-sky-100 opacity-90">{t.studentHouse}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <nav className="flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-white/25 text-white shadow-lg'
                      : 'text-sky-100 hover:bg-white/15 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            </nav>
            <LanguageSelector />
          </div>

          {/* Mobile menu button and language selector */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/15 text-white hover:bg-white/25 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-white/25 text-white'
                        : 'text-sky-100 hover:bg-white/15 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
