import React, { useState, useMemo, useCallback } from "react";
import {
  Search,
  Calendar,
  Filter,
  BookOpen,
  Cpu,
  Lightbulb,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Building,
  Radio,
  Satellite,
  Database,
  FileText,
  Zap,
} from "lucide-react";
import {
  searchHistoricalEvents,
  getCategories,
  getTypes,
  getYearRange,
  type SearchFilters,
  type HistoricalEvent,
} from "../data/historicalEvents";

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: searchQuery,
    dateFrom: "",
    dateTo: "",
    category: "all",
    type: "all",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [isSearching, setIsSearching] = useState(false);

  // Get filter options
  const categories = useMemo(() => getCategories(), []);
  const types = useMemo(() => getTypes(), []);
  const yearRange = useMemo(() => getYearRange(), []);

  // Perform search with debouncing
  const searchResults = useMemo(() => {
    setIsSearching(true);
    const results = searchHistoricalEvents(filters, currentPage, pageSize);
    setIsSearching(false);
    return results;
  }, [filters, currentPage, pageSize]);

  // Update search query when prop changes
  React.useEffect(() => {
    if (searchQuery !== filters.query) {
      setFilters((prev) => ({ ...prev, query: searchQuery }));
      setCurrentPage(1);
    }
  }, [searchQuery, filters.query]);

  // Handle search input change
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value);
      setFilters((prev) => ({ ...prev, query: value }));
      setCurrentPage(1);
    },
    [setSearchQuery]
  );

  // Handle filter changes
  const handleFilterChange = useCallback(
    (key: keyof SearchFilters, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setCurrentPage(1);
    },
    []
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    const clearedFilters: SearchFilters = {
      query: "",
      dateFrom: "",
      dateTo: "",
      category: "all",
      type: "all",
    };
    setFilters(clearedFilters);
    setSearchQuery("");
    setCurrentPage(1);
  }, [setSearchQuery]);

  // Handle pagination
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Get icon component by name
  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      Building,
      BookOpen,
      Users,
      Award,
      Cpu,
      Satellite,
      Radio,
      Database,
      FileText,
      Lightbulb,
      Zap,
    };
    return icons[iconName] || Award;
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Académico":
        return "from-emerald-500 to-teal-600";
      case "Tecnología":
        return "from-purple-500 to-indigo-600";
      case "Innovación":
        return "from-indigo-500 to-blue-600";
      case "Metodológico":
        return "from-teal-500 to-cyan-600";
      case "Investigación":
        return "from-orange-500 to-red-600";
      case "Institucional":
        return "from-blue-500 to-indigo-600";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return dateString;
  };

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full text-white mb-6">
          <Search className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Búsqueda <span className="text-blue-600">Avanzada</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Explora los eventos, logros y transformaciones de CUJAE durante
          1975-1984 utilizando nuestro sistema de búsqueda avanzada con filtros
          especializados.
        </p>
      </div>

      {/* Advanced Search Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="space-y-6">
          {/* Main Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar eventos, personas, tecnologías, programas..."
              value={filters.query}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Resultados de Búsqueda
            {isSearching && (
              <span className="text-blue-600 ml-2">Buscando...</span>
            )}
          </h2>
          <span className="text-slate-600">
            {searchResults.totalCount} resultado
            {searchResults.totalCount !== 1 ? "s" : ""} encontrado
            {searchResults.totalCount !== 1 ? "s" : ""}
            {searchResults.totalPages > 1 &&
              ` (Página ${currentPage} de ${searchResults.totalPages})`}
          </span>
        </div>

        {searchResults.totalCount === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              No se encontraron resultados
            </h3>
            <p className="text-slate-500 mb-4">
              Intenta con otros términos de búsqueda o ajusta los filtros.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Limpiar todos los filtros
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {searchResults.events.map((event) => {
              const IconComponent = getIconComponent(event.icon);
              const colorClass = getCategoryColor(event.category);

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div
                        className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${colorClass} rounded-xl flex items-center justify-center text-white`}
                      >
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-bold text-slate-800">
                              {event.title}
                            </h3>
                            <span className="text-sm font-medium text-slate-500">
                              (
                              {event.date ? formatDate(event.date) : event.year}
                              )
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} text-white`}
                            >
                              {event.category}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                              {event.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-4">
                          {event.description}
                        </p>

                        <div className="bg-slate-50 rounded-lg p-4 mb-4">
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {event.details}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {event.keywords.slice(0, 8).map((keyword, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs cursor-pointer hover:bg-slate-200 transition-colors duration-200"
                              onClick={() => handleSearchChange(keyword)}
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {searchResults.totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="flex space-x-1">
              {Array.from(
                { length: Math.min(5, searchResults.totalPages) },
                (_, i) => {
                  const page = i + 1;
                  const isActive = page === currentPage;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                }
              )}

              {searchResults.totalPages > 5 && (
                <>
                  <span className="px-2 py-2 text-slate-500">...</span>
                  <button
                    onClick={() => handlePageChange(searchResults.totalPages)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      currentPage === searchResults.totalPages
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {searchResults.totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === searchResults.totalPages}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
