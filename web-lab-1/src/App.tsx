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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans transition-colors duration-200">

      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isDarkMode={isDarkMode}
        onToggleDark={toggleDarkMode}
      />

      {currentPage === 'uikit' ? (
        <UIKit />
      ) : (
        <>
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
