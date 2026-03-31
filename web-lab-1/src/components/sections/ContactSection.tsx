import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
    return (
        <section id="iletisim" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    İletişim
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                    Benimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
                </p>

                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
