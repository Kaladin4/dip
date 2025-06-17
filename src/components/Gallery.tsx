import React, { useState } from "react";
import {
  Image,
  Calendar,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Inauguración del CID 300/10",
      year: "1979",
      category: "innovation",
      description:
        "Momento histórico de la instalación de la primera computadora nacional en CUJAE.",
      imageUrl:
        "https://tecnohistoriacubana.wordpress.com/wp-content/uploads/2024/11/silna-999-10.jpg?w=640",
      details:
        "La instalación del CID 300/10 marcó el inicio de la era de la informática en Cuba.",
    },
    {
      id: 3,
      title: "Laboratorios de Telecomunicaciones",
      year: "1977",
      category: "technology",
      description:
        "Modernos laboratorios para el desarrollo de EMTELCUBA y sistemas de comunicación.",
      imageUrl:
        "https://www.juventudrebelde.cu/thumbs/425x/crc/images/medias/2010/11/10146-fotografia-g.jpg",
      details:
        "Equipamiento de vanguardia para la formación en telecomunicaciones.",
    },
    {
      id: 4,
      title: "Estudiantes de Postgrado",
      year: "1976",
      category: "academic",
      description:
        "Primera generación de estudiantes del sistema de postgrado implementado.",
      imageUrl:
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
      details:
        "Programa pionero que elevó la calificación del personal docente y profesional.",
    },
    {
      id: 6,
      title: "Conferencia Científico-Metodológica",
      year: "1980",
      category: "methodology",
      description:
        "Sistematización de experiencias pedagógicas y metodológicas innovadoras.",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjo7mf-1bPzvhi-OmIUG88NWHtOjdt2zEwYcjSxCCmTjpoQsh9scqTw7XX8uQmY7gzZNjcLvN1mIR1GfY-SSvnRaYivp5STolBKWWQKTfYQMiYWOz_c2M44LqwZSBXgHIPGiLyMQveM66Au/s1600/Arquitectura-Cuba.jpg",
      details:
        "Evento que estableció nuevos paradigmas en la educación superior técnica.",
    },
    {
      id: 7,
      title: "Aula de Ciencias Básicas",
      year: "1977",
      category: "academic",
      description:
        "Modernización de la enseñanza de matemáticas, física y química.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmi726NYU26S4PFKKjlQl-UnygnNnpujUw7g&s",
      details:
        "Nuevos métodos pedagógicos que revolucionaron la enseñanza de ciencias básicas.",
    },
    {
      id: 8,
      title: "Graduación de Doctores",
      year: "1979",
      category: "academic",
      description:
        "Primeros doctores cubanos en ciencias técnicas formados en el país.",
      imageUrl:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      details: "Hito histórico en la formación de alto nivel en Cuba.",
    },
    {
      id: 9,
      title: "Centro de Cómputo",
      year: "1979",
      category: "technology",
      description:
        "Instalaciones del primer centro de cómputo con equipamiento nacional.",
      imageUrl:
        "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
      details:
        "Espacio dedicado al desarrollo de software y aplicaciones nacionales.",
    },
    {
      id: 10,
      title: "Evaluación de Impacto Educativo",
      year: "1981",
      category: "methodology",
      description:
        "Análisis de resultados y proyección hacia el futuro de la educación superior.",
      imageUrl:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      details:
        "Evaluación integral de los logros alcanzados en la década transformadora.",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full text-white mb-6">
          <Image className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Galería <span className="text-purple-600">Histórica</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Una colección visual de los momentos más significativos que definieron
          la transformación de CUJAE durante la década 1975-1984.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => openLightbox(item.imageUrl)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-800">
                  {item.year}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => openLightbox(item.imageUrl)}
                  className="w-full bg-white/90 backdrop-blur-sm text-slate-800 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200"
                >
                  Ver imagen completa
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
                  {item.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.category === "academic"
                      ? "bg-emerald-100 text-emerald-800"
                      : item.category === "technology"
                      ? "bg-purple-100 text-purple-800"
                      : item.category === "innovation"
                      ? "bg-indigo-100 text-indigo-800"
                      : "bg-teal-100 text-teal-800"
                  }`}
                ></span>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="text-sm text-slate-500 border-t border-slate-100 pt-4">
                {item.details}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
