# CSS Kararları

## 1. Breakpoint Seçimi
* **Neden 640px ve 1024px seçtim?**
Endüstri standartlarını (Tailwind/Bootstrap) baz alarak, 640px'i modern tabletler, 1024px'i ise standart masaüstü ekranlar için mantıklı kırılma noktaları olarak belirledim. Bu sayede en yaygın cihaz çözünürlüklerini kapsayabildim.
* **İçeriğim bu noktalarda nasıl değişiyor?**
Mobilde tamamen dikey yığın (alt alta) şeklinde duran elemanlar, 640px'te (tablet) yatay düzene geçip yan yana hizalanıyor. 1024px'te (masaüstü) ise ana içerik maksimum genişliğe (`max-width: 1200px`) sabitlenerek sayfa ortalanıyor ve ferah bir görünüm elde ediliyor.

## 2. Layout Tercihleri
* **Header için neden Flexbox seçtim?**
Header içindeki logo ve navigasyon menüsünü yatay eksende aralarına esnek boşluk bırakarak (`justify-content: space-between`) hizalamak için en pratik ve modern yöntem Flexbox'tı.
* **Proje kartları için neden Grid seçtim?**
Kartları sergilerken hem satır hem de sütun bazlı (iki boyutlu) katı bir düzene ihtiyaç duyduğum için CSS Grid kullandım. Bu sayede kart yükseklikleri ve aralarındaki boşluklar kusursuz bir simetriye kavuştu.
* **auto-fit mi auto-fill mi kullandım, neden?**
Proje kartlarında `auto-fit` özelliğini tercih ettim. Böylece ekran genişledikçe sağda boşluk kalmıyor; var olan kartlar esneyerek satırdaki tüm boş alanı otomatik olarak dolduruyor ve daha dengeli bir görünüm sunuyor.

## 3. Design Tokens
* **Hangi renk paletini seçtim ve neden?**
Kullanıcıya güven veren ve göz yormayan profesyonel mavi tonlarını (`primary: #1E3A8A`) ana renk olarak seçtim. Kontrastı ve erişilebilirliği (a11y) yüksek tutmak için arka planlarda temiz beyaz ve açık gri yüzey renkleri (`surface`) kullandım.
* **Spacing (Boşluk) skalasını nasıl belirledim?**
Tasarımda tutarlılığı sağlamak için 4'ün katlarına dayanan (4px, 8px, 16px, 24px...) standart bir `rem` tabanlı boşluk sistemi (`--space-*`) oluşturdum. Bu sayede sayfanın her yerinde orantılı bir ritim yakaladım.
* **Fluid typography için clamp değerlerini nasıl ayarladım?**
Yazı boyutlarının ekran büyüdükçe organik olarak büyümesi için `clamp(minimum, esnek-deger, maksimum)` fonksiyonunu kullandım. Bu sayede her bir başlık veya metin için medya sorgusu (media query) yazma zahmetinden kurtularak akıcı bir tipografi elde ettim.

## 4. Responsive Stratejiler
* **Mobile-first yaklaşımını nasıl uyguladım?**
CSS kodlarını yazarken varsayılan olarak mobil cihazları (0-639px) hedef aldım ve karmaşık olmayan tek sütunlu yapıları ana kural olarak belirledim. Daha sonra sadece ekran büyüdüğünde değişmesi gereken özellikleri `@media (min-width)` blokları içine ekledim.
* **Hangi elemanlar breakpoint'lerde değişiyor?**
Özellikle Header navigasyon linkleri, Hakkımda bölümündeki profil fotoğrafı/metin yerleşimi ve iletişim formundaki gönder butonu mobilde tam ekran genişliği (%100) kaplarken, tablet ve masaüstünde kendi doğal boyutlarına dönüyor.
* **Görsel boyutlarını nasıl yönettim?**
Görsellerin hiçbir koşulda kendi taşıyıcı alanından (container) taşmaması için global olarak `max-width: 100%` ve `height: auto` kuralını uyguladım. Vesikalık fotoğrafımın mobilde ezilmeden tam yuvarlak kalabilmesi için `aspect-ratio: 1` ve `object-fit: cover` özelliklerinden faydalandım.