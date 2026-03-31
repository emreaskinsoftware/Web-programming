import { useState } from "react";

type Page = "portfolio" | "uikit";

interface HeaderProps {
    currentPage: Page;
    onPageChange: (page: Page) => void;
    isDarkMode: boolean;
    onToggleDark: () => void;
}

const navLinks = [
    { href: "#hero", label: "Ana Sayfa" },
    { href: "#hakkimda", label: "Hakkımda" },
    { href: "#projeler", label: "Projeler" },
    { href: "#iletisim", label: "İletişim" },
];

export default function Header({ currentPage, onPageChange, isDarkMode, onToggleDark }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* Logo */}
                <a
                    href="#hero"
                    onClick={() => onPageChange("portfolio")}
                    className="text-xl font-bold text-blue-600 dark:text-blue-400 shrink-0"
                >
                    Emre Aşkın
                </a>

                {/* Desktop: portfolio nav linkleri */}
                {currentPage === "portfolio" && (
                    <ul className="hidden md:flex gap-6 flex-1">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Desktop: sağ taraf kontrolleri */}
                <div className="hidden md:flex items-center gap-2 shrink-0">
                    {/* Portfolyo / UI Kit switcher */}
                    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1">
                        <button
                            onClick={() => onPageChange("portfolio")}
                            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                                currentPage === "portfolio"
                                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                            }`}
                        >
                            Portfolyo
                        </button>
                        <button
                            onClick={() => onPageChange("uikit")}
                            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                                currentPage === "uikit"
                                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                            }`}
                        >
                            UI Kit
                        </button>
                    </div>

                    {/* Dark mode toggle */}
                    <button
                        onClick={onToggleDark}
                        aria-label="Tema değiştir"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors text-lg"
                    >
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>
                </div>

                {/* Mobil: dark mode + hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={onToggleDark}
                        aria-label="Tema değiştir"
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                    >
                        {isDarkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Menüyü aç/kapat"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <span className="block text-xl leading-none text-gray-600 dark:text-gray-300">✕</span>
                        ) : (
                            <span className="flex flex-col gap-1.5">
                                <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
                                <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
                                <span className="block w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobil dropdown menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    {/* Sayfa switcher */}
                    <div className="flex gap-2 px-4 pt-3 pb-2">
                        <button
                            onClick={() => { onPageChange("portfolio"); setMenuOpen(false); }}
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                                currentPage === "portfolio"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            }`}
                        >
                            Portfolyo
                        </button>
                        <button
                            onClick={() => { onPageChange("uikit"); setMenuOpen(false); }}
                            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                                currentPage === "uikit"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                            }`}
                        >
                            UI Kit
                        </button>
                    </div>

                    {/* Portfolyo nav linkleri */}
                    {currentPage === "portfolio" && (
                        <ul className="px-4 pb-4 border-t border-gray-100 dark:border-gray-800 pt-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </header>
    );
}
