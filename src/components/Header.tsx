import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface HeaderProps {
  sections: Array<{ id: string; name: string; icon: React.ComponentType<any> }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// ... existing imports ...

// ... existing imports ...
const Header: React.FC<HeaderProps> = ({
  sections,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
}) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm transition-all duration-300 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-23 h-23 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Isotipo.png"
                alt="CUJAE Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">
                Historia CUJAE
              </h1>
              <p className="text-sm text-slate-500">1975-1984</p>
            </div>
          </div>
          {/* Navigation Items */}
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{section.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
