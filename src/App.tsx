import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Barcode, ExternalLink, Menu, X, Github } from 'lucide-react';
import GS1Parser from './components/GS1Parser';
import RedirectHandler from './components/RedirectHandler';
import HomePage from './components/HomePage';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Barcode className="h-7 w-7 text-blue-600" />
                  <h1 className="ml-2 text-lg sm:text-xl font-bold text-gray-900 truncate">GS1 Digital Link Parser</h1>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-blue-600 focus:outline-none"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
              
              {/* Desktop navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                <Link to="/webUI" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Parser Tool
                </Link>
                {/* GitHub link - now positioned after Parser Tool */}
                <a 
                  href="https://github.com/lucassad/gs1-digital-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Github size={20} className="mr-2" />
                  <span>GitHub - lucassad</span>
                </a>
              </nav>
            </div>
          </div>
          
          {/* Mobile navigation menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/webUI" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Parser Tool
                </Link>
                <a 
                  href="https://github.com/lucassad/gs1-digital-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setMenuOpen(false)}
                >
                  <Github size={18} className="mr-2" />
                  GitHub - lucassad
                </a>
              </div>
            </div>
          )}
        </header>

        <main className="py-6 sm:py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/webUI" element={<GS1Parser />} />
            <Route path="/gtin/:gtin/*" element={<RedirectHandler />} />
            <Route path="/:shortcode/:value/*" element={<RedirectHandler />} />
            <Route path="/:ai/:value/*" element={<RedirectHandler />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-center text-gray-500 text-sm mb-2 sm:mb-0">
                GS1 Digital Link Parser - Built with the GS1 Digital Link Toolkit
              </p>
              <a 
                href="https://github.com/gs1/GS1DigitalLinkToolkit.js/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 hover:text-blue-600 text-sm"
              >
                <Github size={16} className="mr-1" />
                GS1 Digital Link Toolkit on GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;