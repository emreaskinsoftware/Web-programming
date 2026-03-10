import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Portfolio() {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-2 z-50"
            >
                Ana icerige atla
            </a>

            <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <h1 className="text-xl font-bold text-primary dark:text-blue-400">
                        Emre Aşkın
                    </h1>
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap gap-2">
                            <li>
                                <a
                                    href="#hakkimda"
                                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Hakkımda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projeler"
                                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    Projeler
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#iletisim"
                                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main id="main-content">
                {/* ===== HAKKIMDA BÖLÜMÜ ===== */}
                <section id="hakkimda" className="py-16 px-4">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                        <figure className="shrink-0">
                            <img
                                src="https://via.placeholder.com/160"
                                alt="Emre Aşkın vesikalik fotografi"
                                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                            />
                        </figure>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                                Hakkımda
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-center md:text-left">
                                Yazılım Mühendisliği 3. sınıf öğrencisiyim. Araştırma yapmayı ve modern web teknolojileriyle kullanıcı dostu arayüzler oluşturmayı severim.
                            </p>

                            <h3 className="font-semibold text-lg mb-3 text-center md:text-left text-gray-800 dark:text-gray-200">
                                Kullandığım Teknolojiler
                            </h3>
                            <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">HTML5</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">CSS3</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">JavaScript</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">React</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">TypeScript</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">Tailwind CSS</li>
                                <li className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">Git</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== PROJELERİM BÖLÜMÜ ===== */}
                <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                            Projelerim
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Proje 1 */}
                            <Card
                                variant="elevated"
                                title="BERT ile Smishing Tespiti"
                                image="https://via.placeholder.com/600x300"
                                imageAlt="BERT Projesi"
                                footer={
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Python</span>
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">PyTorch</span>
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">BERT</span>
                                    </div>
                                }
                            >
                                <p className="min-h-[3rem]">SMS üzerinden yapılan oltalama (phishing) saldırılarını tespit etmek için geliştirdiğim Doğal Dil İşleme (NLP) modeli.</p>
                            </Card>

                            {/* Proje 2 */}
                            <Card
                                variant="elevated"
                                title="Kişisel Portföy Web Sitesi"
                                image="https://via.placeholder.com/600x300"
                                imageAlt="Portföy Projesi"
                                footer={
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">React</span>
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Tailwind CSS</span>
                                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">Vite</span>
                                    </div>
                                }
                            >
                                <p className="min-h-[3rem]">Tailwind CSS kullanılarak utility-first yaklaşımla geliştirilen, erişilebilir ve modern tasarıma sahip kişisel web sitem.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* ===== İLETİŞİM BÖLÜMÜ ===== */}
                <section id="iletisim" className="py-16 px-4">
                    <div className="max-w-lg mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                            İletişim
                        </h2>

                        <form className="space-y-4 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700" onSubmit={(e) => e.preventDefault()}>
                            <Input
                                id="name"
                                label="Ad Soyad"
                                placeholder="İsminizi giriniz"
                                required
                            />
                            <Input
                                id="email"
                                label="E-posta"
                                type="email"
                                placeholder="ornek@email.com"
                                required
                            />

                            <div className="space-y-1">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Konu
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                >
                                    <option value="">-- Seçiniz --</option>
                                    <option value="is">İş Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Öneri</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    required
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors"
                                    placeholder="Mesajınızı buraya yazın..."
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <Button variant="primary" size="lg" type="submit" className="w-full">
                                    Gönder
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-8 px-4 text-gray-500 dark:text-gray-400 text-sm">
                <p className="mb-2">&copy; 2025 Emre Aşkın. Tüm hakları saklıdır.</p>
                <div className="flex justify-center gap-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-blue-400 transition-colors">GitHub</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-blue-400 transition-colors">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}
