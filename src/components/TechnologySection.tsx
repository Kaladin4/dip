import React, { useState } from 'react';
import { Cpu, Satellite, Radio, Network, ChevronRight, TrendingUp, Globe, Building, Zap } from 'lucide-react';

const TechnologySection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const technologicalProjects = [
    {
      id: 'cie',
      year: '1977',
      title: 'Centro de Investigaciones Energéticas (CIE)',
      subtitle: 'Infraestructura Tecnológica Avanzada',
      description: 'Construcción del edificio del CIE en Miramar, pensado como laboratorio energético y primera sede de la Facultad de Energética.',
      icon: Building,
      color: 'from-emerald-500 to-green-600',
      achievements: [
        'Laboratorios de investigación en energía e hidráulica',
        'Apoyo a proyectos industriales nacionales',
        'Sede inicial de la Facultad de Energética',
        'Asignaturas de sistemas eléctricos y electrotecnia'
      ],
      impact: 'Base física para el desarrollo energético nacional',
      technical_specs: {
        location: 'Miramar, La Habana',
        purpose: 'Investigación energética',
        capacity: 'Múltiples laboratorios'
      }
    },
    {
      id: 'emtelcuba',
      year: '1977',
      title: 'EMTELCUBA',
      subtitle: 'Empresa de Telecomunicaciones de Cuba',
      description: 'Creación de la infraestructura nacional de telecomunicaciones con participación directa de CUJAE en el diseño y desarrollo de sistemas.',
      icon: Radio,
      color: 'from-purple-500 to-indigo-600',
      achievements: [
        'Diseño de redes telefónicas nacionales',
        'Desarrollo de sistemas de conmutación',
        'Formación de técnicos especializados',
        'Colaboración con organismos internacionales'
      ],
      impact: 'Transformación de las comunicaciones en Cuba',
      technical_specs: {
        coverage: 'Nacional',
        technology: 'Analógica/Digital',
        capacity: '1M+ conexiones'
      }
    },
    {
      id: 'telecomunicaciones',
      year: '1977-1979',
      title: 'Desarrollo Tecnológico',
      subtitle: 'Innovación en Comunicaciones',
      description: 'Investigación y desarrollo de tecnologías de comunicación avanzadas, incluyendo sistemas de transmisión y equipos especializados.',
      icon: Network,
      color: 'from-blue-500 to-cyan-600',
      achievements: [
        'Sistemas de transmisión por microondas',
        'Equipos de comunicación móvil',
        'Desarrollo de antenas especializadas',
        'Protocolos de comunicación propios'
      ],
      impact: 'Base tecnológica para el desarrollo futuro',
      technical_specs: {
        frequency: '1-10 GHz',
        range: '50+ km',
        efficiency: '95%+'
      }
    },
    {
      id: 'satelital',
      year: '1979',
      title: 'Sistemas Satelitales',
      subtitle: 'Comunicaciones Espaciales',
      description: 'Desarrollo de proyectos en comunicaciones satelitales, posicionando a Cuba en la vanguardia regional de tecnologías espaciales.',
      icon: Satellite,
      color: 'from-indigo-500 to-purple-600',
      achievements: [
        'Investigación en comunicación satelital',
        'Desarrollo de antenas especializadas',
        'Colaboración internacional en proyectos espaciales',
        'Formación de especialistas en tecnología satelital'
      ],
      impact: 'Posicionamiento regional en tecnologías espaciales',
      technical_specs: {
        frequency: 'C-Band/Ku-Band',
        coverage: 'Caribe/América',
        applications: 'Comunicaciones/TV'
      }
    },
    {
      id: 'energia',
      year: '1983-1986',
      title: 'Investigación Energética',
      subtitle: 'Energías Renovables y Eficiencia',
      description: 'Proyectos de investigación en energías renovables y ahorro energético, incluyendo optimización de compresores de gas.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      achievements: [
        'Proyectos de optimización de compresores de gas',
        'Investigación en eficiencia energética',
        'Desarrollo de tecnologías de ahorro',
        'Colaboración con industria nacional'
      ],
      impact: 'Pioneros en investigación energética sostenible',
      technical_specs: {
        focus: 'Eficiencia energética',
        period: '1983-1986',
        applications: 'Industria nacional'
      }
    }
  ];

  const comparativeData = [
    {
      country: 'Cuba (CUJAE)',
      telecom: '✓ Red Nacional',
      research: '✓ CIE/Laboratorios',
      education: '✓ Facultad Energética',
      innovation: '✓ Desarrollo Propio'
    },
    {
      country: 'México',
      telecom: '✓ Red Limitada',
      research: '○ Incipiente',
      education: '✓ Postgrado',
      innovation: '○ Dependiente'
    },
    {
      country: 'Argentina',
      telecom: '✓ Red Urbana',
      research: '✓ Desarrollada',
      education: '✓ Establecida',
      innovation: '○ Mixta'
    },
    {
      country: 'Brasil',
      telecom: '✓ Red Nacional',
      research: '✓ Avanzada',
      education: '✓ Consolidada',
      innovation: '✓ Fuerte'
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full text-white mb-6">
          <Cpu className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Avances <span className="text-purple-600">Tecnológicos</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          El período 1977-1983 marcó el inicio de una era tecnológica para Cuba, con CUJAE 
          liderando el desarrollo de infraestructura energética, telecomunicaciones y investigación aplicada.
        </p>
      </div>

      {/* Technology Projects */}
      <div className="space-y-8 mb-16">
        {technologicalProjects.map((project, index) => {
          const Icon = project.icon;
          const isSelected = selectedProject === project.id;
          
          return (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm font-medium text-slate-500">{project.year}</span>
                        <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                        <h4 className="text-lg font-medium text-slate-600">{project.subtitle}</h4>
                      </div>
                      <button
                        onClick={() => setSelectedProject(isSelected ? null : project.id)}
                        className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                      >
                        Ver detalles
                        <ChevronRight className={`w-4 h-4 ml-2 transition-transform duration-200 ${isSelected ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                    
                    {isSelected && (
                      <div className="space-y-6 mt-6 pt-6 border-t border-slate-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-slate-800 mb-3">Logros Principales:</h5>
                            <ul className="space-y-2">
                              {project.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-slate-600">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-slate-50 rounded-lg p-4">
                              <h5 className="font-semibold text-slate-800 mb-2">Impacto:</h5>
                              <p className="text-slate-600">{project.impact}</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
                              <h5 className="font-semibold text-slate-800 mb-3">Especificaciones:</h5>
                              <div className="space-y-2">
                                {Object.entries(project.technical_specs).map(([key, value]) => (
                                  <div key={key} className="flex justify-between">
                                    <span className="text-slate-600 capitalize">{key}:</span>
                                    <span className="font-medium text-slate-800">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
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

      {/* Comparative Analysis */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Comparación Regional - Desarrollo Tecnológico (1975-1984)
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 font-semibold text-slate-800">País/Institución</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Telecomunicaciones</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Investigación</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Educación</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Innovación</th>
              </tr>
            </thead>
            <tbody>
              {comparativeData.map((row, index) => (
                <tr key={index} className={`border-b border-slate-100 ${index === 0 ? 'bg-purple-50' : 'hover:bg-slate-50'}`}>
                  <td className="py-4 px-6 font-medium text-slate-800">{row.country}</td>
                  <td className="py-4 px-6 text-center">{row.telecom}</td>
                  <td className="py-4 px-6 text-center">{row.research}</td>
                  <td className="py-4 px-6 text-center">{row.education}</td>
                  <td className="py-4 px-6 text-center">{row.innovation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-sm text-slate-600">
          <p><strong>Leyenda:</strong> ✓ Desarrollado/Implementado, ○ En desarrollo/Limitado</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;