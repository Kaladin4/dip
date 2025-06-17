import React, { useState } from 'react';
import { Lightbulb, Computer, Satellite, Zap, Globe, BarChart3, Cpu, Database, Award } from 'lucide-react';

const InnovationSection = () => {
  const [selectedInnovation, setSelectedInnovation] = useState<string>('cid300');

  const innovations = [
    {
      id: 'cid300',
      title: 'CID 300/10',
      subtitle: 'Primera Computadora Nacional',
      year: '1979',
      description: 'Implementación del primer sistema de computación de fabricación nacional en el ámbito académico, revolucionando la enseñanza y investigación.',
      icon: Computer,
      color: 'from-indigo-500 to-purple-600',
      specifications: {
        processor: 'CID-300',
        memory: '10KB RAM',
        storage: 'Cinta magnética',
        language: 'ASSEMBLER/BASIC'
      },
      impact: [
        'Primera experiencia nacional con computadoras',
        'Formación de programadores cubanos',
        'Base para el desarrollo de software nacional',
        'Impulso a la investigación computacional'
      ],
      applications: [
        'Cálculos de ingeniería',
        'Simulaciones científicas',
        'Enseñanza de programación',
        'Procesamiento de datos académicos'
      ]
    },
    {
      id: 'informatica',
      title: 'Desarrollo de la Informática',
      subtitle: 'Revolución Digital Cubana',
      year: '1979',
      description: 'Inicio sistemático del desarrollo de la informática en Cuba, estableciendo las bases para la era digital nacional.',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      specifications: {
        focus: 'Software nacional',
        training: '100+ programadores',
        projects: '15+ aplicaciones',
        scope: 'Nacional'
      },
      impact: [
        'Desarrollo de capacidades nacionales',
        'Reducción de dependencia tecnológica',
        'Formación de recursos humanos especializados',
        'Establecimiento de industria del software'
      ],
      applications: [
        'Sistemas administrativos',
        'Software educativo',
        'Aplicaciones industriales',
        'Sistemas de control'
      ]
    },
    {
      id: 'satelital',
      title: 'Sistemas Satelitales',
      subtitle: 'Comunicaciones Avanzadas',
      year: '1979',
      description: 'Investigación y desarrollo en tecnologías de comunicación satelital, posicionando a Cuba en la vanguardia regional.',
      icon: Satellite,
      color: 'from-emerald-500 to-teal-600',
      specifications: {
        frequency: 'C-Band/Ku-Band',
        coverage: 'Caribe/América',
        technology: 'Analógica/Digital',
        capacity: '1000+ canales'
      },
      impact: [
        'Comunicaciones internacionales mejoradas',
        'Independencia en telecomunicaciones',
        'Desarrollo de tecnología espacial',
        'Cooperación internacional fortalecida'
      ],
      applications: [
        'Televisión satelital',
        'Comunicaciones telefónicas',
        'Transmisión de datos',
        'Meteorología'
      ]
    },
    {
      id: 'energia',
      title: 'Investigación Energética',
      subtitle: 'Energías Renovables y Eficiencia',
      year: '1983',
      description: 'Proyectos pioneros en energías renovables y ahorro energético, incluyendo optimización de compresores de gas y sistemas de eficiencia.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      specifications: {
        focus: 'Eficiencia energética',
        period: '1983-1986',
        scope: 'Nacional',
        technology: 'Optimización'
      },
      impact: [
        'Pioneros en investigación energética sostenible',
        'Desarrollo de tecnologías de ahorro',
        'Colaboración con industria nacional',
        'Base para futuras investigaciones renovables'
      ],
      applications: [
        'Optimización de compresores de gas',
        'Sistemas de ahorro energético',
        'Investigación en eficiencia industrial',
        'Desarrollo de tecnologías limpias'
      ]
    }
  ];

  const globalComparison = [
    {
      country: 'Cuba (CUJAE)',
      computer: 'CID 300/10 (1979)',
      software: 'Nacional',
      satellite: 'En desarrollo',
      energy: 'Investigación avanzada',
      ranking: 'Pionero regional'
    },
    {
      country: 'Estados Unidos',
      computer: 'Apple II (1977)',
      software: 'Comercial',
      satellite: 'Avanzado',
      energy: 'Investigación inicial',
      ranking: 'Líder mundial'
    },
    {
      country: 'Reino Unido',
      computer: 'BBC Micro (1981)',
      software: 'Educativo',
      satellite: 'Desarrollado',
      energy: 'Investigación básica',
      ranking: 'Avanzado'
    },
    {
      country: 'Japón',
      computer: 'Sharp MZ-80 (1978)',
      software: 'Industrial',
      satellite: 'En crecimiento',
      energy: 'Eficiencia industrial',
      ranking: 'Emergente'
    },
    {
      country: 'URSS',
      computer: 'Agat (1984)',
      software: 'Estatal',
      satellite: 'Líder',
      energy: 'Investigación nuclear',
      ranking: 'Superpotencia'
    }
  ];

  const selectedData = innovations.find(item => item.id === selectedInnovation);
  const Icon = selectedData?.icon || Computer;

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full text-white mb-6">
          <Lightbulb className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Era de la <span className="text-indigo-600">Innovación</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          1979-1983 marcó el inicio de la revolución digital y energética en Cuba, con CUJAE liderando 
          el desarrollo de la informática nacional, las comunicaciones satelitales y la investigación en energías renovables.
        </p>
      </div>

      {/* Innovation Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {innovations.map((innovation) => {
          const InnovationIcon = innovation.icon;
          return (
            <button
              key={innovation.id}
              onClick={() => setSelectedInnovation(innovation.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedInnovation === innovation.id
                  ? `bg-gradient-to-r ${innovation.color} text-white shadow-lg`
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <InnovationIcon className="w-5 h-5" />
              <span>{innovation.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Innovation Details */}
      {selectedData && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className={`bg-gradient-to-r ${selectedData.color} px-8 py-12 text-white`}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedData.title}</h2>
                  <p className="text-xl opacity-90">{selectedData.subtitle}</p>
                  <p className="text-sm opacity-75 mt-1">{selectedData.year}</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed opacity-95">{selectedData.description}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {/* Specifications */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Cpu className="w-5 h-5 mr-2 text-indigo-600" />
                  Especificaciones
                </h3>
                <div className="space-y-3">
                  {Object.entries(selectedData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600 capitalize">{key}:</span>
                      <span className="font-medium text-slate-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-emerald-600" />
                  Impacto
                </h3>
                <ul className="space-y-3">
                  {selectedData.impact.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  Aplicaciones
                </h3>
                <ul className="space-y-3">
                  {selectedData.applications.map((app, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Comparison */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <div className="text-center mb-8">
          <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800">Comparación Mundial - Tecnología (1979-1983)</h2>
          <p className="text-slate-600 mt-2">Posicionamiento de Cuba en el contexto tecnológico global</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-4 px-6 font-semibold text-slate-800">País</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Computadora</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Software</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Satélites</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Energía</th>
                <th className="text-center py-4 px-6 font-semibold text-slate-800">Posición</th>
              </tr>
            </thead>
            <tbody>
              {globalComparison.map((row, index) => (
                <tr key={index} className={`border-b border-slate-100 ${index === 0 ? 'bg-indigo-50' : 'hover:bg-slate-50'}`}>
                  <td className="py-4 px-6 font-medium text-slate-800">{row.country}</td>
                  <td className="py-4 px-6 text-center text-slate-600">{row.computer}</td>
                  <td className="py-4 px-6 text-center text-slate-600">{row.software}</td>
                  <td className="py-4 px-6 text-center text-slate-600">{row.satellite}</td>
                  <td className="py-4 px-6 text-center text-slate-600">{row.energy}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {row.ranking}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Innovation Timeline */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-8">Cronología de Innovaciones 1979-1983</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Computer className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1979</h3>
            <p className="text-indigo-100">Instalación del CID 300/10 y desarrollo informático</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Satellite className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1979-1980</h3>
            <p className="text-indigo-100">Desarrollo de sistemas satelitales y comunicaciones</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1980-1982</h3>
            <p className="text-indigo-100">Consolidación de la industria del software nacional</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1983-1986</h3>
            <p className="text-indigo-100">Investigación en energías renovables y eficiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;