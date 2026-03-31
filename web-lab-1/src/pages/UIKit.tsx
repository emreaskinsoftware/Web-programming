import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                UI Kit
            </h1>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                    Buttons
                </h2>

                {/* Varyant 1: Primary vb. */}
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>

                {/* Varyant 2: Boyutlar */}
                <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>

                {/* Disabled durumu */}
                <div className="flex flex-wrap items-end gap-3">
                    <Button variant="primary" disabled>Disabled Primary</Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                    Inputs
                </h2>
                {/* Varyant 3: Normal */}
                <Input id="ui-name" label="Normal Input" placeholder="Bir seyler yazin..." />

                {/* Varyant 4: Hatali */}
                <Input id="ui-err" label="Hatali Input" error="Bu alan zorunludur" defaultValue="Yanlis verii" />

                {/* Varyant 5: Help text */}
                <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" placeholder="ornek@mail.com" />

                {/* Varyant 6: Disabled */}
                <Input id="ui-dis" label="Disabled" disabled value="Duzenlenemez" />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                    Cards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Varyant 7: Elevated */}
                    <Card variant="elevated" title="Elevated Card">
                        <p>Golge ile yukseltilmis kart.</p>
                    </Card>

                    {/* Varyant 8: Outlined */}
                    <Card variant="outlined" title="Outlined Card">
                        <p>Cerceveli kart.</p>
                    </Card>

                    {/* Varyant 9: Filled */}
                    <Card variant="filled" title="Filled Card">
                        <p>Dolgulu arka plan.</p>
                    </Card>

                    {/* Varyant: Resimli ve Footerli */}
                    <Card
                        variant="elevated"
                        title="Image & Footer Card"
                        image="https://via.placeholder.com/400x200"
                        footer={<Button size="sm">Detaylar</Button>}
                    >
                        <p>Gorsel ve footer iceren detayli kart ornegi.</p>
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
                    Alerts
                </h2>

                {/* Varyant 10: Info */}
                <Alert variant="info" title="Bilgi">
                    Bilgilendirme mesaji.
                </Alert>

                {/* Varyant 11: Success */}
                <Alert variant="success" title="Basarili">
                    Islem basariyla tamamlandi.
                </Alert>

                {/* Varyant 12: Warning */}
                <Alert variant="warning" title="Uyari">
                    Dikkat edilmesi gereken durum. Lutfen kontrol edin.
                </Alert>

                {/* Varyant 13: Error & Dismissible */}
                <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Kapatildi')}>
                    Bir hata olustu. Sunucuya baglanilamadi.
                </Alert>
            </section>
        </div>
    );
}
