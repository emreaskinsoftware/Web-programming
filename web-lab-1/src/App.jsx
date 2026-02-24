import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          Yazılım Mühendisliği 3. sınıf öğrencisiyim. Araştırma yapmayı ve web uygulamaları geliştirmeyi severim.
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          BERT ile Smishing tespiti
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          123456789
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Emre Aşkın. Tüm hakları saklıdır.</p>
      </footer>
    </>
     )
    
}

export default App
