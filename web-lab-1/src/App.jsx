import { useState, useEffect } from 'react'
import Portfolio from './pages/Portfolio'
import UIKit from './pages/UIKit'

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans transition-colors duration-200">

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-2xl leading-none flex items-center justify-center w-6 h-6" aria-hidden="true">&#9790;</span>
        <span className="hidden dark:flex text-2xl leading-none items-center justify-center w-6 h-6 text-yellow-500" aria-hidden="true">&#9728;</span>
      </button>

      {/* Navigation Switcher (Floating) */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-1.5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setCurrentPage('portfolio')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${currentPage === 'portfolio' ? 'bg-primary text-white shadow-sm scale-100' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 scale-95 hover:scale-100'}`}
        >
          Portfolio
        </button>
        <button
          onClick={() => setCurrentPage('uikit')}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${currentPage === 'uikit' ? 'bg-primary text-white shadow-sm scale-100' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 scale-95 hover:scale-100'}`}
        >
          UI Kit
        </button>
      </div>

      {currentPage === 'portfolio' ? <Portfolio /> : <UIKit />}

    </div>
  )
}

export default App