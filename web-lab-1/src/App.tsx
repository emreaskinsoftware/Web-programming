import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import ProjectList from './components/sections/ProjectList'
import ContactSection from './components/sections/ContactSection'
import UIKit from './pages/UIKit'

type Page = 'portfolio' | 'uikit';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('portfolio');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems: { key: Page; label: string }[] = [
    { key: 'portfolio', label: 'Portfolyo' },
    { key: 'uikit', label: 'UI Kit' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans transition-colors duration-200">

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-xl hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden text-2xl leading-none flex items-center justify-center w-6 h-6" aria-hidden="true">&#9790;</span>
        <span className="hidden dark:flex text-2xl leading-none items-center justify-center w-6 h-6 text-yellow-500" aria-hidden="true">&#9728;</span>
      </button>

      {/* Page Switcher (Floating) */}
      <div className="fixed top-4 right-20 sm:top-6 sm:right-24 z-50 flex gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-1.5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        {navItems.map(item => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${currentPage === item.key ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {currentPage === 'uikit' ? (
        <UIKit />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <ProjectList />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}

    </div>
  )
}

export default App
