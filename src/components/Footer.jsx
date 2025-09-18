import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logoImage from '../assets/LogoVConTechsemfundogrande.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logoImage}
                alt="VConTech Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A VConTech é uma empresa especializada em consultoria e implementação de software
              para todas as plataformas: Web, Mobile e Desktop. Entregamos soluções tecnológicas
              modernas e escaláveis.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong>CNPJ:</strong> 62.370.008/0001-05
              </p>
              <p className="text-sm text-gray-400">
                <strong>Razão Social:</strong> VCONTECH INOVA SIMPLES (I.S.)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <a href="tel:+5511939572807" className="text-gray-300 hover:text-white transition-colors">
                    (11) 93957-2807
                  </a>
                  <br />
                  <a href="tel:+5511911644730" className="text-gray-300 hover:text-white transition-colors">
                    (11) 91164-4730
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:vcontechdevoficial@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  vcontechdevoficial@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-300">
                  <p>Rua Doutora Aparecida Fernandes</p>
                  <p>de Jesus Domingues, 191</p>
                  <p>Jardim Petrópolis - Cotia/SP</p>
                  <p>CEP: 06700-453</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ExternalLink className="h-4 w-4 text-primary" />
                <a
                  href="https://vcontechoficial.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  www.vcontechodevoficial.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} VConTech. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvendo soluções tecnológicas inovadoras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

