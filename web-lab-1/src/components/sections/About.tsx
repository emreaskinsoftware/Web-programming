const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript",
    "React", "Tailwind CSS", "Vite", "Git",
];

export default function About() {
    return (
        <section id="hakkimda" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                <figure className="shrink-0">
                    <img
                        src="https://via.placeholder.com/160"
                        alt="Emre Aşkın vesikalık fotoğrafı"
                        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
                    />
                </figure>

                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                        Hakkımda
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-center md:text-left">
                        Yazılım Mühendisliği 3. sınıf öğrencisiyim. Araştırma yapmayı
                        ve modern web teknolojileriyle kullanıcı dostu arayüzler
                        oluşturmayı severim. React ve TypeScript ile bileşen tabanlı
                        mimariler geliştiriyorum.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-center md:text-left text-gray-800 dark:text-gray-200">
                        Teknolojiler
                    </h3>
                    <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                        {skills.map(skill => (
                            <li
                                key={skill}
                                className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
