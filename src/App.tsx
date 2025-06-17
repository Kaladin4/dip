import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
  Cpu,
  Lightbulb,
  GraduationCap,
  Search,
  Clock,
  Users,
  Award,
  Building,
  Info,
} from "lucide-react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import AcademicSection from "./components/AcademicSection";
import TechnologySection from "./components/TechnologySection";
import InnovationSection from "./components/InnovationSection";
import MethodologicalSection from "./components/MethodologicalSection";
import Gallery from "./components/Gallery";
import SearchSection from "./components/SearchSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "home", name: "Inicio", icon: Clock },
    { id: "academic", name: "Académico", icon: GraduationCap },
    { id: "gallery", name: "Galería", icon: Users },
    { id: "search", name: "Búsqueda", icon: Search },
    { id: "about", name: "Acerca de", icon: Info },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Timeline />;
      case "academic":
        return <AcademicSection />;
      case "gallery":
        return <Gallery />;
      case "search":
        return (
          <SearchSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        );
      case "about":
        return <AboutSection />;
      default:
        return <Timeline />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 bg-fixed">
      <Header
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
