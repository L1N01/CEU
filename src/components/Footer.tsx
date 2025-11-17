
import React from 'react'
import {MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn-static-lumi.artvibe.ai/88/88ec529bfd62c91170a7c2d1dee4fe49.webp"
                alt="Logo CEU"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">CEU Paraná</h3>
                <p className="text-gray-400 text-sm">Casa do Estudante Universitário</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footerDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ceuparana?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/ceupr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/funda%C3%A7%C3%A3o-casa-do-estudante-universit%C3%A1rio/?originalSubdomain=br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@ceunossacasa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footerContact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Rua Luiz Leão, 01</p>
                  <p className="text-gray-300 text-sm">Centro - Curitiba/PR</p>
                  <p className="text-gray-300 text-sm">CEP: 80030-010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sky-400" />
                <p className="text-gray-300 text-sm">(41) 3324-1984</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">comunicacao@ceupr.com.br</p>
                  <p className="text-gray-400 text-xs">{t.generalQuestionsFooter}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footerUsefulLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  {t.homePage}
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  {t.faq}
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CEU Paraná - Casa do Estudante Universitário. {t.allRightsReserved}.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-xs">
                {t.selectionProcess}: processoseletivo@ceupr.org.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
