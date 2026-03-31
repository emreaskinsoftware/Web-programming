import { useState, type FormEvent } from "react";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const initialFormData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function validate(data: ContactFormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
        errors.name = "Ad soyad zorunludur.";
    } else if (data.name.trim().length < 2) {
        errors.name = "Ad soyad en az 2 karakter olmalıdır.";
    }

    if (!data.email.trim()) {
        errors.email = "E-posta zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Geçerli bir e-posta adresi giriniz.";
    }

    if (!data.subject) {
        errors.subject = "Konu zorunludur.";
    }

    if (!data.message.trim()) {
        errors.message = "Mesaj zorunludur.";
    } else if (data.message.trim().length < 10) {
        errors.message = "Mesaj en az 10 karakter olmalıdır.";
    }

    return errors;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    function handleChange(field: keyof ContactFormData, value: string) {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const newErrors = validate(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            // Simüle edilmiş API çağrısı
            await new Promise<void>(resolve => setTimeout(resolve, 1000));
            console.log("Form verisi:", formData);
            setSubmitSuccess(true);
            setFormData(initialFormData);
        } catch {
            alert("Gönderim başarısız. Tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (submitSuccess) {
        return (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <p className="text-green-800 dark:text-green-300 font-medium">
                    ✓ Mesajınız başarıyla gönderildi!
                </p>
                <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 text-sm text-green-600 dark:text-green-400 underline"
                >
                    Yeni mesaj gönder
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Ad Soyad */}
            <div>
                <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ad Soyad
                </label>
                <input
                    id="cf-name"
                    type="text"
                    value={formData.name}
                    onChange={e => handleChange("name", e.target.value)}
                    placeholder="Adınız Soyadınız"
                    className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
                )}
            </div>

            {/* E-posta */}
            <div>
                <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    E-posta
                </label>
                <input
                    id="cf-email"
                    type="email"
                    value={formData.email}
                    onChange={e => handleChange("email", e.target.value)}
                    placeholder="ornek@mail.com"
                    className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
                )}
            </div>

            {/* Konu */}
            <div>
                <label htmlFor="cf-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Konu
                </label>
                <select
                    id="cf-subject"
                    value={formData.subject}
                    onChange={e => handleChange("subject", e.target.value)}
                    className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                >
                    <option value="">Konu seçiniz...</option>
                    <option value="genel">Genel</option>
                    <option value="is-teklifi">İş Teklifi</option>
                    <option value="destek">Teknik Destek</option>
                    <option value="oneri">Öneri</option>
                    <option value="isbirligi">İş Birliği</option>
                </select>
                {errors.subject && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{errors.subject}</p>
                )}
            </div>

            {/* Mesaj */}
            <div>
                <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mesaj
                </label>
                <textarea
                    id="cf-message"
                    rows={5}
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    placeholder="Mesajınızı yazınız..."
                    className={`w-full border rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition-colors ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"}`}
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>
                )}
            </div>

            {/* Gönder butonu */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
            </button>
        </form>
    );
}
