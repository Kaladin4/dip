import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ChevronDown,
  Quote,
  Building,
} from "lucide-react";

const AcademicSection = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const academicAchievements = [
    {
      id: "fundacion",
      year: "1976",
      title: "Fundación del ISPJAE",
      subtitle: "Nacimiento de la Institución",
      description:
        "El Ministerio de Educación Superior independiza la Facultad de Tecnología de la Universidad de La Habana, creando el Instituto Superior Politécnico José Antonio Echeverría.",
      icon: Building,
      color: "from-blue-500 to-indigo-600",
      details: [
        "Establecimiento formal de la oferta docente (curso 1976-77)",
        "Integración de la carrera de Arquitectura en la Facultad de Construcciones",
        "Creación de estructura administrativa independiente",
        "Definición de la misión institucional en educación superior técnica",
      ],
      impact: "Nacimiento oficial de la CUJAE como institución independiente",
    },
    {
      id: "postgrado",
      year: "1976-1977",
      title: "Sistema de Postgrado",
      subtitle: "Desarrollo de la Educación Avanzada",
      description:
        "Implementación integral del sistema de estudios de postgrado, estableciendo las bases para la formación continua del personal docente y profesional.",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-600",
      details: [
        "Creación de programas de maestría en ingeniería",
        "Establecimiento de cursos de especialización",
        "Desarrollo de metodologías de enseñanza avanzada",
        "Formación de claustro de profesores especializados",
      ],
      impact: "Elevación significativa del nivel académico institucional",
    },
    {
      id: "facultades",
      year: "1977-1978",
      title: "Creación de Nuevas Facultades",
      subtitle: "Expansión Académica Especializada",
      description:
        "Se crean la Facultad de Ingeniería Azucarera y la Facultad de Ingeniería Energética para responder a demandas nacionales específicas.",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      details: [
        "Facultad de Ingeniería Azucarera (curso 1976-77)",
        "Facultad de Ingeniería Energética en el edificio del CIE",
        "Formación de ingenieros para industria azucarera",
        "Especialización en sistemas energéticos nacionales",
      ],
      impact: "Respuesta directa a necesidades industriales del país",
    },
    {
      id: "planes",
      year: "1977-1982",
      title: "Sistematización Curricular",
      subtitle: "Planes de Estudio Integrados",
      description:
        "Implementación del Plan A (1977-78) y posteriormente el Plan B (1982-83) en Arquitectura, orientados a una formación amplia e integrada.",
      icon: BookOpen,
      color: "from-teal-500 to-cyan-600",
      details: [
        "Plan A de Arquitectura con enfoque integral",
        "Plan B continuando la formación amplia",
        "Fortalecimiento de estudios de posgrado en ingenierías",
        "Sistematización de metodologías pedagógicas",
      ],
      impact: "Establecimiento de estándares curriculares modernos",
    },
    {
      id: "revista",
      year: "1980",
      title: "Revista Arquitectura y Urbanismo",
      subtitle: "Publicación Científica Especializada",
      description:
        "Lanzamiento de la revista cuatrimestral auspiciada por la Facultad de Arquitectura y reconocida por el CITMA.",
      icon: Award,
      color: "from-orange-500 to-red-600",
      details: [
        "Publicación cuatrimestral especializada",
        "Reconocimiento oficial del CITMA",
        "Difusión de investigación en diseño urbano",
        "Plataforma para resultados científicos",
      ],
      impact: "Posicionamiento en la comunidad científica nacional",
    },
  ];

  const testimonials = [
    {
      name: "DrC. Eugenio Carlos",
      role: "Profesor de Matemática e Ingeniería en CUJAE desde 1973 (Profesor Titular desde 1985)",
      quote:
        "Participé en el diseño y elaboración de los programas de estudio de Matemática para las carreras de Ingeniería Industrial, Informática, Eléctrica, Telecomunicaciones y Automática a partir de 1982.",
      year: "1982",
    },
    {
      name: "Ing. Luis Mercader del Río",
      role: "Docente de Telecomunicaciones y Electrónica",
      quote:
        "En 1977 publicamos 'Sistemas de comunicación y líneas de retransmisión de radio', apuntes fundamentales para la formación en radiocomunicación.",
      year: "1977",
    },
    {
      name: "Dr. Amado Ignacio García Simón",
      role: "Profesor Titular y de Mérito en Telecomunicaciones",
      quote:
        "La carrera de Telecomunicaciones y Electrónica (Tele) es muy poderosa, permite la comunicación con cualquier persona sin importar la distancia.",
      year: "1977",
    },
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full text-white mb-6">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Revolución <span className="text-emerald-600">Académica</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Desde la fundación del ISPJAE en 1976 hasta la consolidación de sus
          programas académicos, CUJAE experimentó una transformación sin
          precedentes en la educación superior técnica cubana.
        </p>
      </div>

      {/* Academic Achievements */}
      <div className="grid gap-8 mb-16">
        {academicAchievements.map((achievement) => {
          const Icon = achievement.icon;
          const isExpanded = expandedCard === achievement.id;

          return (
            <div
              key={achievement.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-500">
                        {achievement.year}
                      </span>
                      <button
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : achievement.id)
                        }
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                      >
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {achievement.title}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-600 mb-4">
                      {achievement.subtitle}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {achievement.description}
                    </p>

                    {isExpanded && (
                      <div className="mt-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-slate-800 mb-3">
                              Logros Específicos:
                            </h5>
                            <ul className="space-y-2">
                              {achievement.details.map((detail, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-600">
                                    {detail}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h5 className="font-semibold text-slate-800 mb-2">
                              Impacto:
                            </h5>
                            <p className="text-slate-600">
                              {achievement.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonials */}
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-black hover:shadow-xl transition-all">
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Testimonios de la Época</h2>
          <p className="text-black max-w-2xl mx-auto">
            Las voces de quienes vivieron la fundación y transformación
            académica de la CUJAE nos cuentan sobre los cambios que definieron
            una nueva era.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="text-black mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-black">
                  {testimonial.name}
                </div>
                <div className="text-sm text-black">{testimonial.role}</div>
                <div className="text-xs text-black mt-1">
                  {testimonial.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicSection;
