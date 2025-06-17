import React from "react";
import { Building2, Calendar, Mail, MapPin, QrCode } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Historia CUJAE</h3>
                <p className="text-sm text-slate-400">1975-1984</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Sitio web interactivo dedicado a preservar y compartir la historia
              de la transformación de CUJAE durante una de las décadas más
              importantes de su desarrollo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Secciones</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#academic"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Logros Académicos
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Avances Tecnológicos
                </a>
              </li>
              <li>
                <a
                  href="#innovation"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Era de Innovación
                </a>
              </li>
              <li>
                <a
                  href="#methodology"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Revolución Metodológica
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Galería Histórica
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Información</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">Período: 1975-1984</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">La Habana, Cuba</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">info@cujae-historia.cu</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6">Acceso Rápido</h3>
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 inline-block mb-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.cujaehistoria.com&bgcolor=ffffff&color=1e293b&margin=10"
                  alt="QR Code para www.cujaehistoria.com"
                  className="w-30 h-30"
                />
              </div>
              <div className="flex items-center justify-center space-x-2 text-slate-300">
                <QrCode className="w-4 h-4" />
                <span className="text-sm">Escanea para visitar</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                www.cujaehistoria.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Historia CUJAE . Preservando el legado de una década
              transformadora.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">
                Universidad Tecnológica de La Habana "José Antonio Echeverría"
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
