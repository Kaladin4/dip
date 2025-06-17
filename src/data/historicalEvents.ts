export interface HistoricalEvent {
  id: string;
  year: number;
  date?: string; // DD/MM/YYYY format
  title: string;
  category: string;
  type: string;
  description: string;
  details: string;
  keywords: string[];
  icon: string;
  color: string;
  images?: string[];
  videos?: string[];
  documents?: string[];
  section: string;
}

export const historicalEventsDatabase: HistoricalEvent[] = [
  {
    id: 'aporte-academico-poder-popular-1975',
    year: 1975,
    date: '15/12/1975',
    title: 'Aporte académico al diseño de las Asambleas del Poder Popular',
    category: 'Académico',
    type: 'Colaboración',
    description: 'Tras el I Congreso del PCC, el Centro de Estudios del Consejo de Ministros (CECM) colaboró con universidades como la CUJAE para convertir resoluciones partidistas en leyes.',
    details: 'Docentes investigadores de la CUJAE fueron asignados al CECM durante 2-3 días semanales. Este equipo conjunto redactó decretos y leyes fundamentales para la organización estatal y el Poder Popular, contribuyendo significativamente al marco legal del nuevo sistema de gobierno popular en Cuba.',
    keywords: ['poder popular', 'CECM', 'leyes', 'decretos', 'PCC', 'congreso', 'organización estatal', 'docentes', 'investigadores'],
    icon: 'FileText',
    color: 'from-emerald-500 to-emerald-600',
    images: ['https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'academic'
  },
  {
    id: 'fundacion-ispjae-1976',
    year: 1976,
    date: '29/07/1976',
    title: 'Fundación del Instituto Superior Politécnico José Antonio Echeverría (ISPJAE)',
    category: 'Institucional',
    type: 'Fundación',
    description: 'Establecido por el Ministerio de Educación Superior (MES) como parte de la iniciativa para crear una red nacional de Centros de Educación Superior.',
    details: 'El ISPJAE fue fundado el 29 de julio de 1976 por decisión del Ministerio de Educación Superior, independizando la antigua Facultad de Tecnología de la Universidad de La Habana. Esta fundación fue motivada por el aumento en la matrícula universitaria y la necesidad de mejorar el sistema educativo superior nacional. Se estableció formalmente la oferta docente (curso 1976-77) y se integró la carrera de Arquitectura en la Facultad de Construcciones, marcando el nacimiento oficial de la CUJAE como institución independiente.',
    keywords: ['fundación', 'ISPJAE', 'CUJAE', 'ministerio', 'educación', 'superior', 'independencia', 'institución', 'MES', 'red nacional'],
    icon: 'Building',
    color: 'from-blue-500 to-blue-600',
    images: ['https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'academic'
  },
  {
    id: 'sistema-postgrado-1976',
    year: 1976,
    date: '15/10/1976',
    title: 'Sistema de Postgrado',
    category: 'Académico',
    type: 'Programa',
    description: 'Desarrollo e implementación del sistema de estudios de postgrado, estableciendo las bases para la formación continua del personal docente.',
    details: 'Creación de programas de maestría en ingeniería, establecimiento de cursos de especialización, desarrollo de metodologías de enseñanza avanzada y formación de claustro de profesores especializados.',
    keywords: ['postgrado', 'maestría', 'especialización', 'formación', 'docente', 'profesores', 'metodología'],
    icon: 'GraduationCap',
    color: 'from-emerald-500 to-emerald-600',
    images: ['https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'academic'
  },
  {
    id: 'nuevas-facultades-1977',
    year: 1977,
    date: '01/09/1977',
    title: 'Creación de Nuevas Facultades',
    category: 'Académico',
    type: 'Expansión',
    description: 'Se crean la Facultad de Ingeniería Azucarera y la Facultad de Ingeniería Energética para responder a demandas nacionales.',
    details: 'La Facultad de Ingeniería Azucarera (curso 1976-77) tenía antecedentes en una filial de 1972 en el central Camilo Cienfuegos. La Facultad de Ingeniería Energética se alojó en el edificio del Centro de Investigaciones Energéticas (CIE) construido en 1977.',
    keywords: ['facultades', 'ingeniería', 'azucarera', 'energética', 'especialización', 'industria', 'nacional'],
    icon: 'Users',
    color: 'from-emerald-500 to-emerald-600',
    images: ['https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'academic'
  },
  {
    id: 'construccion-cie-1977',
    year: 1977,
    date: '15/06/1977',
    title: 'Construcción del CIE',
    category: 'Tecnología',
    type: 'Infraestructura',
    description: 'Se construye el edificio del Centro de Investigaciones Energéticas (CIE) en Miramar.',
    details: 'Pensado originalmente como laboratorio energético, se convirtió en la primera sede de la Facultad de Energética. Se instalaron laboratorios de investigación en energía e hidráulica para apoyar proyectos industriales.',
    keywords: ['CIE', 'centro', 'investigaciones', 'energéticas', 'laboratorios', 'miramar', 'infraestructura'],
    icon: 'Building',
    color: 'from-purple-500 to-purple-600',
    images: ['https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'technology'
  },
  {
    id: 'emtelcuba-1977',
    year: 1977,
    date: '20/03/1977',
    title: 'EMTELCUBA',
    category: 'Tecnología',
    type: 'Empresa',
    description: 'Creación de la Empresa de Telecomunicaciones de Cuba con participación directa de CUJAE.',
    details: 'Desarrollo de infraestructura nacional de telecomunicaciones con participación de CUJAE en el diseño y desarrollo de sistemas de comunicación avanzados.',
    keywords: ['EMTELCUBA', 'telecomunicaciones', 'empresa', 'comunicaciones', 'infraestructura', 'nacional'],
    icon: 'Radio',
    color: 'from-purple-500 to-purple-600',
    images: ['https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'technology'
  },
  {
    id: 'plan-a-arquitectura-1977',
    year: 1977,
    date: '01/09/1977',
    title: 'Plan A de Arquitectura',
    category: 'Académico',
    type: 'Currículo',
    description: 'Se implementa el Plan A en la carrera de Arquitectura, orientado a una formación amplia e integrada.',
    details: 'Sistematización de los planes de estudio con enfoque en formación integral. También se fortaleció la organización de estudios de posgrado en las ingenierías.',
    keywords: ['plan A', 'arquitectura', 'currículo', 'formación', 'integral', 'sistematización'],
    icon: 'BookOpen',
    color: 'from-emerald-500 to-emerald-600',
    section: 'academic'
  },
  {
    id: 'jornada-arquitectura-1978',
    year: 1978,
    date: '15/05/1978',
    title: 'I Jornada Científica de Arquitectura',
    category: 'Investigación',
    type: 'Evento',
    description: 'Se celebra la I Jornada Científica de Arquitectura y Urbanismo de la CUJAE.',
    details: 'Primer evento científico especializado en arquitectura. Ese mismo año la carrera de Arquitectura se separa definitivamente de la Facultad de Construcciones, retomando autonomía académica.',
    keywords: ['jornada', 'científica', 'arquitectura', 'urbanismo', 'evento', 'autonomía', 'separación'],
    icon: 'Award',
    color: 'from-orange-500 to-orange-600',
    images: ['https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'technology'
  },
  {
    id: 'primera-conferencia-1978',
    year: 1978,
    date: '10/11/1978',
    title: 'Primera Conferencia Científica',
    category: 'Investigación',
    type: 'Conferencia',
    description: 'Realización de la primera conferencia científica institucional con presentación de resultados de investigación.',
    details: 'Presentación de primeros resultados de investigación científica a nivel institucional con participación de investigadores nacionales e internacionales.',
    keywords: ['conferencia', 'científica', 'investigación', 'resultados', 'institucional', 'nacional'],
    icon: 'Award',
    color: 'from-orange-500 to-orange-600',
    images: ['https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'technology'
  },
  {
    id: 'cid-300-1979',
    year: 1979,
    date: '25/03/1979',
    title: 'CID 300/10',
    category: 'Innovación',
    type: 'Computadora',
    description: 'Implementación del primer sistema de computación de fabricación nacional en el ámbito académico.',
    details: 'Introducción de la primera computadora de fabricación nacional en el ámbito académico. La CUJAE formó ingenieros que colaboraron en el avance de la industria informática cubana.',
    keywords: ['CID', '300/10', 'computadora', 'nacional', 'informática', 'tecnología', 'fabricación'],
    icon: 'Computer',
    color: 'from-indigo-500 to-indigo-600',
    images: ['https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'innovation'
  },
  {
    id: 'sistemas-satelitales-1979',
    year: 1979,
    date: '15/07/1979',
    title: 'Sistemas Satelitales',
    category: 'Tecnología',
    type: 'Investigación',
    description: 'Desarrollo de proyectos en comunicaciones satelitales y tecnologías espaciales.',
    details: 'Investigación y desarrollo en tecnologías de comunicación satelital para Cuba, posicionando al país en la vanguardia regional de comunicaciones espaciales.',
    keywords: ['satélite', 'comunicaciones', 'espacial', 'investigación', 'desarrollo', 'tecnología'],
    icon: 'Satellite',
    color: 'from-purple-500 to-purple-600',
    images: ['https://images.pexels.com/photos/23893/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800'],
    section: 'innovation'
  },
  {
    id: 'desarrollo-informatica-1979',
    year: 1979,
    date: '10/09/1979',
    title: 'Desarrollo de la Informática',
    category: 'Innovación',
    type: 'Programa',
    description: 'Inicio sistemático del desarrollo de la informática en Cuba, estableciendo las bases para la era digital.',
    details: 'Desarrollo de capacidades nacionales en informática, formación de programadores cubanos y establecimiento de la industria del software nacional.',
    keywords: ['informática', 'software', 'programación', 'digital', 'desarrollo', 'nacional', 'programadores'],
    icon: 'Database',
    color: 'from-blue-500 to-cyan-600',
    section: 'innovation'
  },
  {
    id: 'revista-arquitectura-1980',
    year: 1980,
    date: '01/01/1980',
    title: 'Revista Arquitectura y Urbanismo',
    category: 'Académico',
    type: 'Publicación',
    description: 'Lanzamiento de la revista Arquitectura y Urbanismo como publicación cuatrimestral.',
    details: 'Publicación auspiciada por la Facultad de Arquitectura de la CUJAE y reconocida por el CITMA. Esta revista difundió resultados de investigación en diseño urbano y construcción, reflejando los esfuerzos de la universidad en el ámbito científico.',
    keywords: ['revista', 'arquitectura', 'urbanismo', 'publicación', 'CITMA', 'investigación', 'científica'],
    icon: 'FileText',
    color: 'from-emerald-500 to-emerald-600',
    images: ['https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'academic'
  },
  {
    id: 'conferencia-metodologica-1980',
    year: 1980,
    date: '20/10/1980',
    title: 'Conferencia Científico-Metodológica',
    category: 'Metodológico',
    type: 'Evento',
    description: 'Primera Conferencia Científico-Metodológica institucional para sistematizar experiencias pedagógicas.',
    details: 'Sistematización de experiencias pedagógicas y metodológicas desarrolladas en CUJAE, estableciendo nuevos paradigmas en la educación superior técnica.',
    keywords: ['conferencia', 'metodológica', 'pedagogía', 'experiencias', 'sistematización', 'educación'],
    icon: 'BookOpen',
    color: 'from-teal-500 to-teal-600',
    images: ['https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800'],
    section: 'methodological'
  },
  {
    id: 'impacto-educativo-1981',
    year: 1981,
    date: '15/06/1981',
    title: 'Impacto en Educación Superior',
    category: 'Metodológico',
    type: 'Evaluación',
    description: 'Evaluación del impacto transformador de las innovaciones metodológicas en la educación superior cubana.',
    details: 'Análisis de resultados y proyección hacia el futuro de la educación superior técnica, consolidando los avances metodológicos logrados.',
    keywords: ['impacto', 'evaluación', 'educación', 'superior', 'transformación', 'metodológicas'],
    icon: 'Award',
    color: 'from-teal-500 to-teal-600',
    section: 'methodological'
  },
  {
    id: 'plan-b-arquitectura-1982',
    year: 1982,
    date: '01/09/1982',
    title: 'Plan B de Arquitectura',
    category: 'Académico',
    type: 'Currículo',
    description: 'Se implementa el Plan B en la carrera de Arquitectura, continuando con el enfoque de formación integral.',
    details: 'Evolución curricular que mantuvo la orientación hacia una formación amplia e integrada en arquitectura, perfeccionando los métodos pedagógicos.',
    keywords: ['plan B', 'arquitectura', 'currículo', 'formación', 'integral', 'evolución'],
    icon: 'BookOpen',
    color: 'from-emerald-500 to-emerald-600',
    section: 'academic'
  },
  {
    id: 'investigacion-energetica-1983',
    year: 1983,
    date: '10/04/1983',
    title: 'Investigación en Energías Renovables',
    category: 'Innovación',
    type: 'Investigación',
    description: 'Avance en investigación de energías renovables y ahorro energético con participación de especialistas del ISPJAE.',
    details: 'Proyectos de optimización de compresores de gas (1983-86) y otras investigaciones en eficiencia energética que posicionaron a la CUJAE en la vanguardia tecnológica nacional.',
    keywords: ['energías', 'renovables', 'ahorro', 'energético', 'optimización', 'compresores', 'eficiencia'],
    icon: 'Lightbulb',
    color: 'from-indigo-500 to-indigo-600',
    section: 'innovation'
  },
  {
    id: 'consolidacion-1984',
    year: 1984,
    date: '31/12/1984',
    title: 'Consolidación Institucional',
    category: 'Institucional',
    type: 'Evaluación',
    description: 'Consolidación de los avances logrados en la década transformadora.',
    details: 'Evaluación integral de los logros y establecimiento de bases para el futuro desarrollo. El campus consolidado cubría todas las disciplinas de ingeniería y arquitectura con más de 40 edificios en 398,000 m².',
    keywords: ['consolidación', 'avances', 'década', 'evaluación', 'campus', 'futuro', 'desarrollo'],
    icon: 'Award',
    color: 'from-amber-500 to-amber-600',
    section: 'academic'
  }
];

// Search cache for performance optimization
const searchCache = new Map<string, HistoricalEvent[]>();
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

export interface SearchFilters {
  query: string;
  dateFrom?: string;
  dateTo?: string;
  category?: string;
  type?: string;
}

export interface SearchResult {
  events: HistoricalEvent[];
  totalCount: number;
  page: number;
  totalPages: number;
}

// Sanitize search input
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>\"'%;()&+]/g, '').trim();
};

// Validate date range
const validateDateRange = (dateFrom?: string, dateTo?: string): boolean => {
  if (!dateFrom || !dateTo) return true;
  
  const from = new Date(dateFrom.split('/').reverse().join('-'));
  const to = new Date(dateTo.split('/').reverse().join('-'));
  
  return from <= to;
};

// Search function with caching and optimization
export const searchHistoricalEvents = (
  filters: SearchFilters,
  page: number = 1,
  pageSize: number = 10
): SearchResult => {
  // Create cache key
  const cacheKey = JSON.stringify({ ...filters, page, pageSize });
  
  // Check cache
  if (searchCache.has(cacheKey)) {
    const cached = searchCache.get(cacheKey);
    if (cached) return cached as unknown as SearchResult;
  }

  // Sanitize inputs
  const sanitizedQuery = sanitizeInput(filters.query);
  
  // Validate date range
  if (!validateDateRange(filters.dateFrom, filters.dateTo)) {
    return {
      events: [],
      totalCount: 0,
      page: 1,
      totalPages: 0
    };
  }

  // Filter events
  let filteredEvents = historicalEventsDatabase.filter(event => {
    // Text search
    if (sanitizedQuery) {
      const searchText = sanitizedQuery.toLowerCase();
      const matchesText = 
        event.title.toLowerCase().includes(searchText) ||
        event.description.toLowerCase().includes(searchText) ||
        event.details.toLowerCase().includes(searchText) ||
        event.keywords.some(keyword => keyword.toLowerCase().includes(searchText));
      
      if (!matchesText) return false;
    }

    // Date range filter
    if (filters.dateFrom) {
      const eventDate = new Date(event.year, 0, 1);
      const fromDate = new Date(filters.dateFrom.split('/').reverse().join('-'));
      if (eventDate < fromDate) return false;
    }

    if (filters.dateTo) {
      const eventDate = new Date(event.year, 11, 31);
      const toDate = new Date(filters.dateTo.split('/').reverse().join('-'));
      if (eventDate > toDate) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (event.category !== filters.category) return false;
    }

    // Type filter
    if (filters.type && filters.type !== 'all') {
      if (event.type !== filters.type) return false;
    }

    return true;
  });

  // Sort chronologically (oldest to newest)
  filteredEvents.sort((a, b) => a.year - b.year);

  // Limit results to 50 per page maximum
  const maxPageSize = Math.min(pageSize, 50);
  const totalCount = filteredEvents.length;
  const totalPages = Math.ceil(totalCount / maxPageSize);
  const startIndex = (page - 1) * maxPageSize;
  const endIndex = startIndex + maxPageSize;
  
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  const result: SearchResult = {
    events: paginatedEvents,
    totalCount,
    page,
    totalPages
  };

  // Cache result
  searchCache.set(cacheKey, result as any);
  
  // Clear cache after expiry
  setTimeout(() => {
    searchCache.delete(cacheKey);
  }, CACHE_EXPIRY);

  return result;
};

// Get all unique categories
export const getCategories = (): string[] => {
  const categories = [...new Set(historicalEventsDatabase.map(event => event.category))];
  return ['all', ...categories.sort()];
};

// Get all unique types
export const getTypes = (): string[] => {
  const types = [...new Set(historicalEventsDatabase.map(event => event.type))];
  return ['all', ...types.sort()];
};

// Get year range
export const getYearRange = (): { min: number; max: number } => {
  const years = historicalEventsDatabase.map(event => event.year);
  return {
    min: Math.min(...years),
    max: Math.max(...years)
  };
};