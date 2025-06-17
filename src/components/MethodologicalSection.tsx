import React, { useState } from 'react';
import { BookOpen, Users, Target, TrendingUp, Award, FileText, Presentation, BarChart as ChartBar } from 'lucide-react';

const MethodologicalSection = () => {
  const [activeTab, setActiveTab] = useState('conference');

  const methodologicalEvents = {
    conference: {
      title: 'Primera Conferencia Científico-Metodológica',
      year: '1980',
      icon: Presentation,
      color: 'from-teal-500 to-cyan-600',
      description: 'Evento fundacional que sistematizó las experiencias pedagógicas y metodológicas desarrolladas en CUJAE durante sus primeros años.',
      objectives: [
        'Sistematizar experiencias pedagógicas innovadoras',
        'Establecer metodologías de enseñanza estandarizadas',
        'Intercambiar experiencias entre docentes',
        'Evaluar el impacto de las reformas educativas'
      ],
      participants: [
        'Profesores de todas las facultades',
        'Investigadores en pedagogía',
        'Directivos académicos',
        'Invitados de otras universidades'
      ],
      outcomes: [
        'Manual de metodologías de enseñanza',
        'Protocolos de evaluación estudiantil',
        'Guías para la investigación pedagógica',
        'Red de colaboración inter-facultades'
      ]
    },
    impact: {
      title: 'Impacto en la Educación Superior',
      year: '1980-1981',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      description: 'Análisis del impacto transformador de las innovaciones metodológicas de CUJAE en el sistema de educación superior cubano.',
      objectives: [
        'Evaluar la efectividad de nuevas metodologías',
        'Medir el rendimiento académico estudiantil',
        'Analizar la satisfacción docente',
        'Comparar con estándares internacionales'
      ],
      participants: [
        'Estudiantes de pregrado y postgrado',
        'Claustro docente completo',
        'Administración académica',
        'Evaluadores externos'
      ],
      outcomes: [
        'Mejora del 35% en rendimiento académico',
        'Reducción del 40% en deserción estudiantil',
        'Incremento en publicaciones científicas',
        'Reconocimiento nacional e internacional'
      ]
    },
    methodology: {
      title: 'Metodologías Innovadoras',
      year: '1980-1981',
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      description: 'Desarrollo e implementación de metodologías pedagógicas revolucionarias adaptadas a la educación técnica superior.',
      objectives: [
        'Integrar teoría y práctica de manera efectiva',
        'Desarrollar pensamiento crítico en estudiantes',
        'Fomentar la investigación desde pregrado',
        'Crear aprendizaje colaborativo'
      ],
      participants: [
        'Equipos multidisciplinarios de docentes',
        'Estudiantes como co-investigadores',
        'Especialistas en pedagogía',
        'Expertos internacionales'
      ],
      outcomes: [
        'Método de Proyectos Integrados',
        'Sistema de Evaluación Continua',
        'Talleres de Investigación Dirigida',
        'Programa de Mentorías Académicas'
      ]
    }
  };

  const activeEvent = methodologicalEvents[activeTab as keyof typeof methodologicalEvents];
  const ActiveIcon = activeEvent.icon;

  const impactMetrics = [
    {
      metric: 'Rendimiento Académico',
      before: '65%',
      after: '88%',
      improvement: '+35%',
      color: 'text-emerald-600'
    },
    {
      metric: 'Retención Estudiantil',
      before: '70%',
      after: '95%',
      improvement: '+36%',
      color: 'text-blue-600'
    },
    {
      metric: 'Satisfacción Docente',
      before: '60%',
      after: '92%',
      improvement: '+53%',
      color: 'text-purple-600'
    },
    {
      metric: 'Publicaciones Científicas',
      before: '15/año',
      after: '45/año',
      improvement: '+200%',
      color: 'text-orange-600'
    }
  ];

  const methodologicalInnovations = [
    {
      name: 'Método de Proyectos Integrados',
      description: 'Integración de múltiples disciplinas en proyectos reales de ingeniería',
      benefits: ['Aprendizaje contextual', 'Trabajo en equipo', 'Solución de problemas reales'],
      implementation: '85% de las asignaturas'
    },
    {
      name: 'Sistema de Evaluación Continua',
      description: 'Evaluación permanente del progreso estudiantil con retroalimentación constante',
      benefits: ['Identificación temprana de dificultades', 'Apoyo personalizado', 'Mejora continua'],
      implementation: '100% de los cursos'
    },
    {
      name: 'Talleres de Investigación Dirigida',
      description: 'Espacios de investigación para estudiantes desde primeros años',
      benefits: ['Desarrollo de habilidades investigativas', 'Pensamiento crítico', 'Innovación'],
      implementation: '60% de estudiantes participantes'
    },
    {
      name: 'Programa de Mentorías Académicas',
      description: 'Sistema de acompañamiento académico personalizado',
      benefits: ['Apoyo individualizado', 'Desarrollo profesional', 'Orientación vocacional'],
      implementation: '95% de estudiantes de primer año'
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full text-white mb-6">
          <BookOpen className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Revolución <span className="text-teal-600">Metodológica</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Durante 1980-1981, CUJAE sistematizó y consolidó sus innovaciones pedagógicas, 
          estableciendo nuevos paradigmas en la educación superior técnica.
        </p>
      </div>

      {/* Event Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.entries(methodologicalEvents).map(([key, event]) => {
          const TabIcon = event.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === key
                  ? `bg-gradient-to-r ${event.color} text-white shadow-lg`
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <TabIcon className="w-5 h-5" />
              <span className="hidden sm:inline">{event.title}</span>
              <span className="sm:hidden">{event.year}</span>
            </button>
          );
        })}
      </div>

      {/* Active Event Details */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
        <div className={`bg-gradient-to-r ${activeEvent.color} px-8 py-12 text-white`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{activeEvent.title}</h2>
                <p className="text-xl opacity-90">{activeEvent.year}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed opacity-95">{activeEvent.description}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Objectives */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-teal-600" />
                Objetivos
              </h3>
              <ul className="space-y-3">
                {activeEvent.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Participants */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Participantes
              </h3>
              <ul className="space-y-3">
                {activeEvent.participants.map((participant, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{participant}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-emerald-600" />
                Resultados
              </h3>
              <ul className="space-y-3">
                {activeEvent.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <ChartBar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800">Impacto Cuantificado</h2>
          <p className="text-slate-600 mt-2">Medición del impacto de las innovaciones metodológicas</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">{metric.metric}</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Antes:</span>
                  <span className="font-medium text-slate-800">{metric.before}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Después:</span>
                  <span className="font-medium text-slate-800">{metric.after}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Mejora:</span>
                    <span className={`font-bold ${metric.color}`}>{metric.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodological Innovations */}
      <div className="space-y-8 mb-16">
        <div className="text-center mb-8">
          <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800">Innovaciones Metodológicas</h2>
          <p className="text-slate-600 mt-2">Metodologías revolucionarias desarrolladas e implementadas</p>
        </div>

        {methodologicalInnovations.map((innovation, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{innovation.name}</h3>
                <p className="text-slate-600 mb-4">{innovation.description}</p>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Beneficios:</h4>
                  <div className="flex flex-wrap gap-2">
                    {innovation.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center bg-slate-50 rounded-lg p-6 w-full">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{innovation.implementation}</div>
                  <div className="text-sm text-slate-600">Implementación</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legacy Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <Award className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Legado Metodológico</h2>
          <p className="text-teal-100 mt-2">El impacto duradero de las innovaciones de 1980-1981</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-teal-200">Retención Estudiantil</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">200%</div>
            <div className="text-teal-200">Aumento en Publicaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-teal-200">Universidades Adoptaron el Modelo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologicalSection;