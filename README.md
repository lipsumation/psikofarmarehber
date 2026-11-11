# Psikofarmakoloji Rehberi

Psikiyatrik ilaçların başlanması, titrasyonu, sürdürümü, kesilmesi ve başka ilaca geçişi için hazırlanmış, hekimlere yönelik bir karar destek ve eğitim uygulaması. Çocuk ve ergenlerde kullanım bilgisi ayrı olarak öne çıkarılmıştır.

**Canlı sürüm:** https://lipsumation.github.io/psikofarmarehber/

> **Önemli uyarı:** Bu uygulama klinik değerlendirmenin, güncel Kısa Ürün Bilgisi'nin (KÜB) ve kılavuzların yerini tutmaz. İçerikteki dozlar genel literatür aralıklarıdır ve güncel KÜB ile tek tek karşılaştırılarak doğrulanmamıştır. Pediatrik onay bilgileri ağırlıklı olarak FDA etiketlerine dayanır; Türkiye'deki ruhsat ve endikasyon dışı kullanım koşulları ayrıca kontrol edilmelidir. Hastalar için tıbbi tavsiye niteliği taşımaz.

## İçerik

| Sayfa | Ne gösterir |
|---|---|
| **İlaçlar** | 55 ilaç (antidepresanlar, DEHB ilaçları, antipsikotikler, duygudurum düzenleyiciler, anksiyolitik/uyku ilaçları). Her ilaç için başlama ve titrasyon grafiği (çocuk-ergen ve erişkin ayrı), sürdürüm, kesme şeması, tetkik/izlem çizelgesi, yan etki profili, uyarılar, metabolizma ve eliminasyon (yıkım enzimleri, aktif metabolit, atılım yolu, organ yetmezliğinde doz). |
| **Metabolizma (CYP)** | Tüm ilaçların CYP ve UGT enzimleriyle ilişkisini gösteren harita (substrat, inhibitör, indükleyici). Enzim seçildiğinde o enzimin substratları, inhibitörleri, indükleyicileri ve rehber dışı etkenler (sigara, greyfurt suyu, antibiyotikler vb.) listelenir. Böbrekle değişmeden atılan ilaçlar ve organ yetmezliğinde doz çizelgesi. |
| **İlaç Değişimi** | İki ilaç seçildiğinde geçiş stratejisini (doğrudan, çapraz, yıkama aralıklı, örtüşmeli), haftalık zaman çizelgesini ve etkileşim uyarılarını (CYP inhibisyonu dahil) gösterir. |
| **Uzun Etkili (Depo)** | 8 uzun etkili enjektabl antipsikotik: başlama şeması, oral örtüşme süresi, oral dozdan dönüşüm tabloları, kaçırılan doz kuralları. |
| **Tetkik ve İzlem** | İlaç gruplarına göre başlangıç ve takip tetkikleri, ölçümler ve eşik değerler. |
| **Genel İlkeler** | Başlama akış şeması, pediatrik ilkeler, antidepresan tedavi evreleri, kesilme belirtileri, yarı ömür karşılaştırması, acil durumlar. |

Açık ve koyu tema desteklenir; sayfalar telefon ekranında da kullanılabilir.

## Çalıştırma

Kurulum ya da derleme adımı yoktur. `index.html` dosyasını tarayıcıda açmak yeterlidir.

Yerel sunucu ile çalıştırmak için:

```bash
python -m http.server 5173
```

Ardından tarayıcıda `http://localhost:5173` adresini açın.

## Dosya yapısı

```
index.html              Sayfa iskeleti
css/stil.css            Tüm stiller (açık/koyu tema)
js/veri-temel.js        Sınıflar ve izlem şablonları
js/veri-antidepresan.js Antidepresanlar
js/veri-dehb.js         DEHB ilaçları
js/veri-antipsikotik.js Antipsikotikler
js/veri-diger.js        Duygudurum düzenleyiciler, anksiyolitikler, uyku ilaçları
js/veri-metabolizma.js  Metabolizma, CYP rolleri ve eliminasyon
js/veri-depo.js         Uzun etkili enjektabl antipsikotikler
js/grafik.js            SVG grafikler (titrasyon, kesme, geçiş, depo)
js/degisim.js           İlaç değişimi kural motoru
js/app.js               Sayfalar ve yönlendirme
```

Uygulama dış kütüphane kullanmaz; yalnızca HTML, CSS ve JavaScript'ten oluşur.

## Yayın

Site `gh-pages` dalından GitHub Pages ile yayınlanır. `main` dalındaki bir değişikliğin siteye yansıması için iki dalın birlikte gönderilmesi gerekir:

```bash
git push origin main main:gh-pages
```

## Katkı ve düzeltme

Doz, izlem ya da geçiş bilgilerinde hata görürseniz kaynak belirterek bir [issue](https://github.com/lipsumation/psikofarmarehber/issues) açabilirsiniz.

## Lisans

Bu çalışma [Creative Commons Atıf-GayriTicari-AynıLisanslaPaylaş 4.0 Uluslararası (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr) lisansı ile sunulmaktadır. Tam metin [LICENSE](LICENSE) dosyasındadır.

- **Atıf:** Kaynak gösterilmeli, lisansa bağlantı verilmeli ve değişiklik yapıldıysa belirtilmelidir.
- **Gayriticari:** Ticari amaçla kullanılamaz.
- **Aynı lisansla paylaş:** Türetilen çalışmalar aynı lisansla paylaşılmalıdır.

© 2026 lipsumation
