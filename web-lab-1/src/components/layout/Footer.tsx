export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
            <div className="max-w-6xl mx-auto text-center text-gray-500 dark:text-gray-400 text-sm">
                <p className="mb-3">&copy; {new Date().getFullYear()} Emre Aşkın. Tüm hakları saklıdır.</p>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
