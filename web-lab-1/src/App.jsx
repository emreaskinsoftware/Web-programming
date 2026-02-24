import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // Şimdilik kullanılmıyor ama ileride lazım olabilir

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      
      <header>
        <h1>Emre Aşkın</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          
          <figure>
            <img src="profil.jpg" alt="Emre Aşkın'ın vesikalik fotografi" />
            <figcaption>Emre Aşkın</figcaption>
          </figure>
          
          <p>Yazılım Mühendisliği 3. sınıf öğrencisiyim. Araştırma yapmayı ve web uygulamaları geliştirmeyi severim.</p>
          
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React & Vite</li>
            <li>Python (PyTorch, BERT)</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* PROJELERİM BÖLÜMÜ */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          {/* Proje 1 */}
          <article className="project-card">
            <h3>BERT ile Smishing Tespiti</h3>
            <p>SMS üzerinden yapılan oltalama (phishing) saldırılarını tespit etmek için geliştirdiğim Doğal Dil İşleme (NLP) modeli.</p>
            <p><strong>Teknolojiler:</strong> Python, PyTorch, Transformers, BERT</p>
          </article>

          {/* Proje 2 */}
          <article className="project-card">
            <h3>Kişisel Portföy Web Sitesi</h3>
            <p>Erişilebilirlik (a11y) kurallarına uygun, modern ve duyarlı (responsive) kişisel web sitem.</p>
            <p><strong>Teknolojiler:</strong> React, Vite, CSS3, Semantik HTML</p>
          </article>
        </section>

        {/* İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Telefon: 123456789</p>
          
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength="2" aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message" rows="5" required minLength="10" aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
              
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Emre Aşkın. Tüm hakları saklıdır.</p>
        <p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    </>
  )
}

export default App