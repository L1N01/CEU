
import React from 'react'
import {MapPin, Phone, Mail, Facebook, Instagram, Linkedin} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://github.com/user-attachments/assets/d8e8a5c5-5f34-4c3e-9b13-0b8b7b3ff6a4"
                alt="Logo CEU"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">CEU Paraná</h3>
                <p className="text-gray-400 text-sm">Casa do Estudante Universitário</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Oferecendo moradia estudantil de qualidade há mais de 50 anos, 
              proporcionando um ambiente seguro e acolhedor para estudantes universitários.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
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
                  <p className="text-gray-400 text-xs">Questões gerais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Conheça a CEU
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">
                  Contate Nós
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CEU Paraná - Casa do Estudante Universitário. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-xs">
                Processo Seletivo: processoseletivo@ceupr.org.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
