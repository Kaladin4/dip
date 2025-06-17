import React from "react";
import { Info, Users, Code, Heart, Star, Award, Link } from "lucide-react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
};
export function getReadableUrlText(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname.replace("www.", ""); // Remove 'www.' for cleaner display
  } catch {
    return url; // Fallback to the full URL if parsing fails
  }
}
export function AppLink({
  href,
  children,
  className = "",
  isExternal = false,
}: LinkProps) {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`text-blue-600 hover:text-blue-700 hover:underline transition-colors ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}

const AboutSection = () => {
  const teamMembers = [
    {
      name: "David Alfonso Hernández",
      role: "Desarrollador Frontend",
      specialization: "Arquitectura de Software",
      icon: Award,
    },
    {
      name: "Damián Romero Álvarez",
      role: "Líder de Proyecto",
      specialization: "Interfaz de Usuario",
      icon: Code,
    },
    {
      name: "Francisco Daniel Garófalo Jerez",
      role: "Desarrollador Backend",
      specialization: "Sistemas y Bases de Datos",
      icon: Code,
    },
    {
      name: "Yoan Alberto Paz Reyes",
      role: "Diseñador UX/UI",
      specialization: "Experiencia de Usuario",
      icon: Star,
    },
    {
      name: "Lael Antonio Canitrot Cruz",
      role: "Investigador Histórico",
      specialization: "Contenido y Documentación",
      icon: Users,
    },
    {
      name: "Alberto Ramón Nogueira Ferrer",
      role: "Especialista en QA",
      specialization: "Calidad y Pruebas",
      icon: Award,
    },
  ];

  const projectStats = [
    {
      label: "Años de Historia Documentados",
      value: "10",
      color: "text-blue-600",
    },
    {
      label: "Eventos Históricos Registrados",
      value: "50+",
      color: "text-emerald-600",
    },
    { label: "Secciones Interactivas", value: "7", color: "text-purple-600" },
    {
      label: "Horas de Investigación",
      value: "500+",
      color: "text-orange-600",
    },
  ];
  const fuentesConsultadas = [
    "https://bohemia.cu/alma-cujae-60-anos-de-historia/?utm_source=chatgpt.com",
    "https://www.cubainformacion.tv/cuba/20141127/59858/59858-ser-de-la-cujae-con-juventud-y-experiencia?utm_source=chatgpt.com",
    "https://cujae.edu.cu/universidad/historia-de-la-cujae",
    "https://www.ecured.cu/Revista_Arquitectura_y_Urbanismo",
    "https://www.ecured.cu/Desarrollo_de_la_computaci%C3%B3n_en_Cuba",
  ];
  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full text-white mb-6">
          <Info className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Acerca de <span className="text-blue-600">Nosotros</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Conoce al equipo de desarrollo que hizo posible este sitio web
          histórico interactivo, dedicado a preservar y compartir el legado de
          CUJAE durante una década transformadora.
        </p>
      </div>

      {/* Project Mission */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Preservar y compartir la rica historia de la Universidad Tecnológica
            de La Habana "José Antonio Echeverría" durante el período 1975-1984,
            una década que marcó la transformación de la educación superior
            técnica en Cuba. A través de tecnología moderna y diseño
            interactivo, hacemos accesible este importante legado histórico para
            las generaciones presentes y futuras.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">
            Fuentes Consultadas
          </h2>
          <div className="space-y-4">
            {fuentesConsultadas.map((fuente, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3"
              >
                <Link className="w-6 h-6 text-blue-500" />{" "}
                {/* Adjust logo size as needed */}
                <AppLink
                  href={fuente}
                  isExternal
                  className="text-lg text-slate-600 hover:text-blue-600 hover:underline"
                >
                  {getReadableUrlText(fuente)}
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Team */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Equipo de Desarrollo
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un grupo multidisciplinario de profesionales comprometidos con la
            excelencia en el desarrollo web y la preservación histórica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {member.specialization}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact and Acknowledgments */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Agradecimientos
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Agradecemos a la Universidad Tecnológica de La Habana "José Antonio
            Echeverría" por proporcionar el contexto histórico y la inspiración
            para este proyecto. También reconocemos a todos los profesores,
            estudiantes y personal que contribuyeron a hacer de CUJAE una
            institución de excelencia durante el período 1975-1984.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-slate-600">
            <Heart className="w-5 h-5 text-red-500" />
            <span>
              Desarrollado con dedicación para preservar la historia de la CUJAE
            </span>
            <Heart className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
