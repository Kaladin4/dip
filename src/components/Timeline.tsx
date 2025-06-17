import React, { useState } from "react";
import {
  Calendar,
  ChevronRight,
  Award,
  Users,
  Lightbulb,
  BookOpen,
  FileText,
  Building,
  Cpu,
  GraduationCap,
} from "lucide-react";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const timelineEvents = [
    {
      id: "aporte-academico-1975",
      year: 1975,
      title: "Aporte académico al diseño de las Asambleas del Poder Popular",
      category: "Académico",
      description:
        "Tras el I Congreso del PCC, el Centro de Estudios del Consejo de Ministros (CECM) colaboró con universidades como la CUJAE para convertir resoluciones partidistas en leyes.",
      icon: FileText,
      color: "from-emerald-500 to-emerald-600",
      details:
        "Docentes investigadores de la CUJAE fueron asignados al CECM durante 2-3 días semanales. Este equipo conjunto redactó decretos y leyes fundamentales para la organización estatal y el Poder Popular, contribuyendo significativamente al marco legal del nuevo sistema de gobierno popular en Cuba.",
    },
    {
      id: "fundacion-ispjae-1976",
      year: 1976,
      title:
        "Fundación del Instituto Superior Politécnico José Antonio Echeverría (ISPJAE)",
      category: "Institucional",
      description:
        "El 29 de julio de 1976, el Ministerio de Educación Superior establece el ISPJAE como parte de la iniciativa para crear una red nacional de Centros de Educación Superior.",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      details:
        "Establecido por el Ministerio de Educación Superior (MES) independizando la antigua Facultad de Tecnología de la Universidad de La Habana. Esta fundación fue motivada por el aumento en la matrícula universitaria y la necesidad de mejorar el sistema educativo superior nacional. Se estableció formalmente la oferta docente (curso 1976-77) y se integró la carrera de Arquitectura en la Facultad de Construcciones.",
    },
    {
      id: "sistema-postgrado-1976",
      year: 1976,
      title: "Sistema de Postgrado",
      category: "Académico",
      description:
        "Desarrollo e implementación del sistema de estudios de postgrado.",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      details:
        "Creación de programas de maestría y especialización para elevar la calificación del personal docente.",
    },
    {
      id: "nuevas-facultades-1977",
      year: 1977,
      title: "Creación de Nuevas Facultades",
      category: "Académico",
      description:
        "Se crean la Facultad de Ingeniería Azucarera y la Facultad de Ingeniería Energética para responder a demandas nacionales.",
      icon: GraduationCap,
      color: "from-emerald-500 to-emerald-600",
      details:
        "La Facultad de Ingeniería Azucarera (curso 1976-77) tenía antecedentes en una filial de 1972 en el central Camilo Cienfuegos. La Facultad de Ingeniería Energética se alojó en el edificio del Centro de Investigaciones Energéticas (CIE) construido en 1977.",
    },
    {
      id: "construccion-cie-1977",
      year: 1977,
      title: "Construcción del CIE",
      category: "Tecnología",
      description:
        "Se construye el edificio del Centro de Investigaciones Energéticas (CIE) en Miramar.",
      icon: Building,
      color: "from-purple-500 to-purple-600",
      details:
        "Pensado originalmente como laboratorio energético, se convirtió en la primera sede de la Facultad de Energética. Se instalaron laboratorios de investigación en energía e hidráulica para apoyar proyectos industriales.",
    },
    {
      id: "emtelcuba-1977",
      year: 1977,
      title: "EMTELCUBA",
      category: "Tecnología",
      description: "Creación de la Empresa de Telecomunicaciones de Cuba.",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      details:
        "Desarrollo de infraestructura nacional de telecomunicaciones con participación de CUJAE.",
    },
    {
      id: "plan-a-arquitectura-1977",
      year: 1977,
      title: "Plan A de Arquitectura",
      category: "Académico",
      description:
        "Se implementa el Plan A en la carrera de Arquitectura, orientado a una formación amplia e integrada.",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      details:
        "Sistematización de los planes de estudio con enfoque en formación integral. También se fortaleció la organización de estudios de posgrado en las ingenierías.",
    },
    {
      id: "jornada-arquitectura-1978",
      year: 1978,
      title: "I Jornada Científica de Arquitectura",
      category: "Investigación",
      description:
        "Se celebra la I Jornada Científica de Arquitectura y Urbanismo de la CUJAE.",
      icon: Award,
      color: "from-orange-500 to-orange-600",
      details:
        "Primer evento científico especializado en arquitectura. Ese mismo año la carrera de Arquitectura se separa definitivamente de la Facultad de Construcciones, retomando autonomía académica.",
    },
    {
      id: "cid-300-1979",
      year: 1979,
      title: "CID 300/10",
      category: "Innovación",
      description: "Implementación del sistema de computación CID 300/10.",
      icon: Cpu,
      color: "from-indigo-500 to-indigo-600",
      details:
        "Introducción de la primera computadora de fabricación nacional en el ámbito académico. La CUJAE formó ingenieros que colaboraron en el avance de la industria informática cubana.",
    },
    {
      id: "sistemas-satelitales-1979",
      year: 1979,
      title: "Sistemas Satelitales",
      category: "Tecnología",
      description: "Desarrollo de proyectos en comunicaciones satelitales.",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      details:
        "Investigación y desarrollo en tecnologías de comunicación satelital para Cuba.",
    },
    {
      id: "revista-arquitectura-1980",
      year: 1980,
      title: "Revista Arquitectura y Urbanismo",
      category: "Académico",
      description:
        "Lanzamiento de la revista Arquitectura y Urbanismo como publicación cuatrimestral.",
      icon: FileText,
      color: "from-emerald-500 to-emerald-600",
      details:
        "Publicación auspiciada por la Facultad de Arquitectura de la CUJAE y reconocida por el CITMA. Esta revista difundió resultados de investigación en diseño urbano y construcción, reflejando los esfuerzos de la universidad en el ámbito científico.",
    },
    {
      id: "conferencia-metodologica-1980",
      year: 1980,
      title: "Conferencia Científico-Metodológica",
      category: "Metodológico",
      description: "Primera Conferencia Científico-Metodológica institucional.",
      icon: BookOpen,
      color: "from-teal-500 to-teal-600",
      details: "Sistematización de experiencias pedagógicas y metodológicas.",
    },
    {
      id: "impacto-educativo-1981",
      year: 1981,
      title: "Impacto Educativo",
      category: "Metodológico",
      description: "Evaluación del impacto en la educación superior cubana.",
      icon: Award,
      color: "from-teal-500 to-teal-600",
      details:
        "Análisis de resultados y proyección hacia el futuro de la educación superior técnica.",
    },
    {
      id: "plan-b-arquitectura-1982",
      year: 1982,
      title: "Plan B de Arquitectura",
      category: "Académico",
      description:
        "Se implementa el Plan B en la carrera de Arquitectura, continuando con el enfoque de formación integral.",
      icon: BookOpen,
      color: "from-emerald-500 to-emerald-600",
      details:
        "Evolución curricular que mantuvo la orientación hacia una formación amplia e integrada en arquitectura.",
    },
    {
      id: "investigacion-energetica-1983",
      year: 1983,
      title: "Investigación en Energías Renovables",
      category: "Innovación",
      description:
        "Avance en investigación de energías renovables y ahorro energético con participación de especialistas del ISPJAE.",
      icon: Lightbulb,
      color: "from-indigo-500 to-indigo-600",
      details:
        "Proyectos de optimización de compresores de gas (1983-86) y otras investigaciones en eficiencia energética que posicionaron a la CUJAE en la vanguardia tecnológica nacional.",
    },
  ];

  const categories = [
    "Todos",
    "Académico",
    "Tecnología",
    "Innovación",
    "Metodológico",
    "Institucional",
    "Investigación",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredEvents =
    selectedCategory === "Todos"
      ? timelineEvents
      : timelineEvents.filter((event) => event.category === selectedCategory);

  const handleDetailsClick = (eventId: string, year: number) => {
    if (selectedEventId === eventId) {
      setSelectedEventId(null);
      setSelectedYear(null);
    } else {
      setSelectedEventId(eventId);
      setSelectedYear(year);
    }
  };

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full text-white mb-6">
          <Calendar className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          CUJAE: Una Década de{" "}
          <span className="text-blue-600">Transformación</span>
        </h1>
        <div className="space-y-10 text-pretty">
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubre los momentos históricos que definieron la evolución de la
            Universidad Tecnológica de La Habana durante el período 1975-1984,
            una época de innovación y crecimiento sin precedentes.
          </p>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">
              Contexto Histórico
            </h1>
            <p className="text-lg text-slate-600 max-w-6xl mx-auto leading-relaxed">
              Durante 1975–1984, en un contexto de rigidez política y
              planificación económica, la CUJAE —Instituto Superior Politécnico
              José Antonio Echeverría — consolidó su rol como motor del
              desarrollo técnico nacional . Sirvió como centro rector de las
              ingenierías y la arquitectura, creó facultades especializadas
              (como Ingeniería Azucarera) y puso en marcha laboratorios
              avanzados en hidráulica, microelectrónica, óptica e ingeniería
              nuclear, formando profesionales capaces de abordar los desafíos
              productivos del país . Además, impulsó una intensa actividad
              científica y editorial, divulgando investigaciones esenciales para
              modernizar la industria y sentar las bases tecnológicas de las
              futuras innovaciones cubanas.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 rounded-full"></div>

        <div className="space-y-12">
          {filteredEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;
            const isExpanded = selectedEventId === event.id;

            return (
              <div key={event.id} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200`}
                    onClick={() => handleDetailsClick(event.id, event.year)}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Event Card */}
                <div
                  className={`flex ${
                    isLeft ? "justify-start pr-1/2" : "justify-end pl-1/2"
                  }`}
                >
                  <div
                    className={`w-full max-w-md ${isLeft ? "mr-8" : "ml-8"}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-slate-800">
                          {event.year}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.color} text-white`}
                        >
                          {event.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 mb-4">{event.description}</p>

                      <button
                        onClick={() => handleDetailsClick(event.id, event.year)}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      >
                        Ver detalles
                        <ChevronRight
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-slate-700">{event.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
