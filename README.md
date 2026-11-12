# Psikofarmakoloji Rehberi

Psikiyatrik ilaçların başlanması, titrasyonu, sürdürümü, kesilmesi ve başka ilaca geçişi için hazırlanmış, hekimlere yönelik bir karar destek ve eğitim uygulaması. Çocuk-ergen ve erişkin psikiyatrisi için iki ayrı görünümü vardır.

**Canlı sürüm:** https://lipsumation.github.io/psikofarmarehber/

> **Önemli uyarı:** Bu uygulama klinik değerlendirmenin, güncel Kısa Ürün Bilgisi'nin (KÜB) ve kılavuzların yerini tutmaz. İçerikteki dozlar genel literatür aralıklarıdır ve güncel KÜB ile tek tek karşılaştırılarak doğrulanmamıştır. Pediatrik ve erişkin onay bilgileri ağırlıklı olarak FDA etiketlerine (belirtilenlerde Avrupa onayına) dayanır; Türkiye'deki ruhsat ve endikasyon dışı kullanım koşulları ayrıca kontrol edilmelidir. Hastalar için tıbbi tavsiye niteliği taşımaz.

## İçerik

| Sayfa | Ne gösterir |
|---|---|
| **İlaçlar** | 60 ilaç (antidepresanlar, DEHB ilaçları, antipsikotikler, duygudurum düzenleyiciler, anksiyolitik/uyku ilaçları ve "Diğer ilaçlar": bağımlılık tedavisinde naltrekson ve buprenorfin/nalokson, antikolinerjik biperiden ve bornaprin). Her ilaç için onay durumu (çocuk-ergende onay yaşları, erişkinde onaylı endikasyonlar), başlama ve titrasyon grafiği (çocuk-ergen ve erişkin ayrı), sürdürüm, kesme şeması, tetkik/izlem çizelgesi, yan etki profili, uyarılar, metabolizma ve eliminasyon (yıkım enzimleri, aktif metabolit, atılım yolu, organ yetmezliğinde doz). |
| **Metabolizma (CYP)** | Tüm ilaçların CYP ve UGT enzimleriyle ilişkisini gösteren harita (substrat, inhibitör, indükleyici). Enzim seçildiğinde o enzimin substratları, inhibitörleri, indükleyicileri ve rehber dışı etkenler (sigara, greyfurt suyu, antibiyotikler vb.) listelenir. Böbrekle değişmeden atılan ilaçlar ve organ yetmezliğinde doz çizelgesi. |
| **İlaç Değişimi** | İki ilaç seçildiğinde geçiş stratejisini (doğrudan, çapraz, yıkama aralıklı, örtüşmeli), haftalık zaman çizelgesini ve etkileşim uyarılarını (CYP inhibisyonu dahil) gösterir. "Diğer ilaçlar" sınıfı bu araca dahil değildir; bu ilaçların sayfalarında geçişe ilişkin kısa not bulunur. |
| **Uzun Etkili (Depo)** | 8 uzun etkili enjektabl antipsikotik: başlama şeması, oral örtüşme süresi, oral dozdan dönüşüm tabloları, kaçırılan doz kuralları. |
| **Tetkik ve İzlem** | İlaç gruplarına göre başlangıç ve takip tetkikleri, ölçümler ve eşik değerler. |
| **Genel İlkeler** | Başlama akış şeması, pediatrik ilkeler, antidepresan tedavi evreleri, kesilme belirtileri, yarı ömür karşılaştırması, acil durumlar. |

Açık ve koyu tema desteklenir; sayfalar telefon ekranında da kullanılabilir.

## Çocuk-ergen ve erişkin görünümü

İlk açılışta hasta grubu (çocuk-ergen ya da erişkin) ve tasarım seçilir. Hasta grubu sonradan marka adının altındaki seçiciden değiştirilebilir; seçim tarayıcıda saklanır. Bağlantıya `?kitle=eri` ya da `?kitle=ped` eklenerek belirli görünüm paylaşılabilir (ör. `?kitle=eri&tasarim=bauhaus`).

| | Çocuk-ergen | Erişkin |
|---|---|---|
| **İlaç kartı ve sayfası** | Çocuk/ergen başlangıç dozu, FDA onay yaşları | Erişkin başlangıç dozu, onaylı endikasyonlar (çocuk-ergen onayı kısa satır olarak) |
| **Doz sekmesi** | Önce çocuk/ergen şeması | Önce erişkin şeması (diğeri her zaman bir tık uzakta) |
| **Tetkik ve izlem** | Boy, büyüme eğrisi, aile/öğretmen ölçekleri | Kilo/BKİ, metabolik izlem aralıkları, cinsel işlev, düşme riski, erişkin ölçekleri |
| **Uyarılar** | Pediatrik kara kutu ve çocuklara özgü riskler | Erişkin kara kutu uyarıları (ör. demansta antipsikotik), ileri yaş notları |
| **Genel İlkeler** | Pediatrik başlama akışı ve ilkeler | Erişkin başlama akışı; ileri yaş, gebelik/emzirme, eş hastalık ve çoklu ilaç ilkeleri |

Veri dosyalarında bir metin `{ ped: '…', eri: '…' }` biçiminde iki sürüm taşıyabilir; `eri: null` o öğeyi erişkin görünümünde gizler. Sürümü yazılmamış metinler iki görünümde de aynıdır.

## Tasarımlar

Üst bardaki tasarım düğmesinden (tema düğmesinin solunda) dört görünüm arasında geçilebilir. Seçim tarayıcıda saklanır; her tasarımın açık ve koyu teması vardır. Bağlantıya `?tasarim=` eklenerek belirli bir tasarım paylaşılabilir (ör. `?tasarim=bauhaus`).

| Tasarım | Özellik |
|---|---|
| **Klasik** | Varsayılan görünüm: sade, yumuşak kartlar. |
| **Bauhaus** | Neobrütalist: kırmızı, sarı, mavi ana renkler, kalın siyah kontur, sert gölge, keskin köşe, geometrik yazı (Jost). İlaç sınıfları renk ve biçimle ayrılır: ● antidepresan · ▲ DEHB · ■ antipsikotik · ◗ duygudurum · ◆ anksiyolitik · ◜ diğer ilaçlar (turuncu çeyrek daire). |
| **İsviçre** | Uluslararası tipografik stil: beyaz zemin, ızgara, ince çizgiler, tek kırmızı vurgu, büyük rakamlar (Inter). |
| **Farmakope** | Editoryal: basılı başvuru kitabı hissi, serif yazı (Source Serif 4), kâğıt zemin, bordo vurgu, kitap tipi tablolar. |

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
css/stil.css            Temel stiller (açık/koyu tema, klasik tasarım)
css/tasarim-*.css       Alternatif tasarımlar (bauhaus, isvicre, farmakope)
fonts/                  Tasarımların yerel yazı tipleri ve OFL lisansları
js/veri-temel.js        Sınıflar ve izlem şablonları
js/veri-antidepresan.js Antidepresanlar
js/veri-dehb.js         DEHB ilaçları
js/veri-antipsikotik.js Antipsikotikler
js/veri-diger.js        Duygudurum düzenleyiciler, anksiyolitikler, uyku ilaçları
js/veri-yardimci.js     Diğer ilaçlar (bağımlılık tedavisi, antikolinerjikler)
js/veri-metabolizma.js  Metabolizma, CYP rolleri ve eliminasyon
js/veri-depo.js         Uzun etkili enjektabl antipsikotikler
js/veri-turkiye.js      Türkiye ruhsatı (KÜB özetleri)
js/grafik.js            SVG grafikler (titrasyon, kesme, geçiş, depo)
js/degisim.js           İlaç değişimi kural motoru
js/app.js               Sayfalar ve yönlendirme
```

Uygulama dış kütüphane kullanmaz; yalnızca HTML, CSS ve JavaScript'ten oluşur. Alternatif tasarımların yazı tipleri (Jost, Inter, Source Serif 4 — SIL Open Font License 1.1) `fonts/` klasöründen yüklenir ve yalnızca o tasarım seçildiğinde indirilir.

## Yayın

Site `gh-pages` dalından GitHub Pages ile yayınlanır. `main` dalındaki bir değişikliğin siteye yansıması için iki dalın birlikte gönderilmesi gerekir:

```bash
git push origin main main:gh-pages
```

## Türkiye KÜB karşılaştırması

Rehberin onay bilgileri FDA etiketine dayanır; Türkiye ruhsatı ise her ilaç sayfasında ayrıca gösterilir ("Türkiye ruhsatı · KÜB" kutusu): Türkiye'deki endikasyonlar ve yaş sınırları, KÜB'deki doz ve organ yetmezliği bilgisi, FDA'dan önemli farklar ve KÜB bağlantısı. Türkiye'de ruhsatlı ürünü olmayan 7 ilaç listede "TR'de ruhsatsız" olarak işaretlidir. Bu bilgiler `js/veri-turkiye.js` dosyasındadır.

Rehberdeki endikasyon ve doz bilgileri, her ilaç için Türkiye'de ruhsatlı bir ürünün güncel KÜB'ü (TİTCK KÜB/KT veritabanı) ile karşılaştırılmıştır. İlaç bazında farklar, KÜB bağlantıları ve alıntılar [docs/kub-karsilastirma.md](docs/kub-karsilastirma.md) dosyasında; ham veri [docs/kub-karsilastirma.json](docs/kub-karsilastirma.json) dosyasındadır.

## Katkı ve düzeltme

Doz, izlem ya da geçiş bilgilerinde hata görürseniz kaynak belirterek bir [issue](https://github.com/lipsumation/psikofarmarehber/issues) açabilirsiniz.

## Lisans

Bu çalışma [Creative Commons Atıf-GayriTicari-AynıLisanslaPaylaş 4.0 Uluslararası (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr) lisansı ile sunulmaktadır. Tam metin [LICENSE](LICENSE) dosyasındadır.

- **Atıf:** Kaynak gösterilmeli, lisansa bağlantı verilmeli ve değişiklik yapıldıysa belirtilmelidir.
- **Gayriticari:** Ticari amaçla kullanılamaz.
- **Aynı lisansla paylaş:** Türetilen çalışmalar aynı lisansla paylaşılmalıdır.

© 2026 lipsumation
