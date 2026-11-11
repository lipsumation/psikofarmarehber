/* Psikofarmakoloji Rehberi — temel veri: sınıflar, izlem şablonları, profil etiketleri */
window.ILACLAR = [];

window.SINIFLAR = {
  ad:   { ad: 'Antidepresanlar',            renk: 'var(--s-ad)' },
  dehb: { ad: 'DEHB ilaçları',              renk: 'var(--s-dehb)' },
  ap:   { ad: 'Antipsikotikler',            renk: 'var(--s-ap)' },
  dd:   { ad: 'Duygudurum dengeleyiciler',  renk: 'var(--s-dd)' },
  anks: { ad: 'Anksiyolitik / uyku',        renk: 'var(--s-anks)' }
};

window.PROFIL_ETIKET = {
  sed: 'Sedasyon', kilo: 'Kilo artışı', gis: 'Bulantı / GİS', akt: 'Aktivasyon / uykusuzluk',
  eps: 'EPS / akatizi', prl: 'Prolaktin artışı', qt: 'QT uzaması', ach: 'Antikolinerjik',
  kv: 'KB / nabız etkisi', istah: 'İştah azalması', kes: 'Kesilme belirtisi riski'
};

/* İzlem matrisi sütunları. Hücre: 1 = önerilir, 2 = risk/belirti varsa, 0 = gerekmez, metin = özel sıklık */
window.IZLEM_SUTUN = ['Başlangıç', 'Titrasyon / 1. ay', '3. ay', '6. ay', 'Yıllık'];

window.IZLEM = {
  ssri: {
    ad: 'SSRI / yeni kuşak antidepresanlar',
    satir: [
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'İlk 4 hafta haftalık, sonraki 4 hafta 2 haftada bir, 12. haftada ve her doz değişiminde değerlendirin.'],
      ['Aktivasyon, ajitasyon, mani kayması', [1, 1, 1, 2, 2], 'Özellikle ilk 2–3 hafta ve doz artışlarından sonra; küçük çocuklarda daha sık.'],
      ['Belirti ölçeği (ör. ÇDÖ, SCARED, CY-BOCS)', [1, 1, 1, 1, 1], 'Yanıtı nesnel izlemek için başlangıç ve 4–6 haftada bir.'],
      ['Boy – kilo', [1, 0, 1, 1, 1], 'Uzun süreli kullanımda büyüme eğrisi.'],
      ['Kan basıncı / nabız', [1, 2, 2, 2, 2], ''],
      ['Sodyum', [2, 2, 0, 0, 0], 'Hiponatremi riski olanlarda (diüretik, düşük kilo, yeme bozukluğu).'],
      ['EKG (QTc)', [2, 2, 0, 0, 0], 'Sitalopram/essitalopram yüksek doz, kardiyak öykü, QT uzatan eş ilaç.'],
      ['Kanama / etkileşim sorgusu', [1, 2, 2, 2, 1], 'NSAİİ, antikoagülan, diğer serotonerjikler.']
    ]
  },
  snri: {
    ad: 'SNRI',
    satir: [
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'İlk 4 hafta haftalık, sonra 2 haftada bir; her doz değişiminde.'],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], 'Doz bağımlı KB artışı; her doz artışında ölçün.'],
      ['Boy – kilo', [1, 1, 1, 1, 1], 'İştah azalması ve kilo kaybı olabilir.'],
      ['Aktivasyon / mani kayması', [1, 1, 1, 2, 2], ''],
      ['Karaciğer işlev testleri', [2, 0, 2, 0, 2], 'Duloksetin: karaciğer hastalığı / alkol kullanımı varsa.'],
      ['Sodyum', [2, 2, 0, 0, 0], 'Risk grubunda.']
    ]
  },
  tca: {
    ad: 'Trisiklik antidepresanlar',
    satir: [
      ['EKG (PR, QRS, QTc)', [1, 'Her doz artışında', 2, 2, 1], 'PR > 200 ms, QRS > 120 ms veya QTc > 450 ms ise doz artırmayın / azaltın.'],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], 'Ortostatik hipotansiyon, taşikardi (istirahat nabzı > 130/dk dikkat).'],
      ['Kardiyak öykü ve aile öyküsü', [1, 0, 0, 0, 1], 'Ani ölüm, aritmi, senkop öyküsü.'],
      ['İntihar düşüncesi / aşırı doz riski', [1, 1, 1, 1, 1], 'Aşırı dozda öldürücü: sınırlı miktarda reçete, evde güvenli saklama.'],
      ['Plazma düzeyi', [0, 2, 2, 0, 0], 'Yanıtsızlık, toksisite şüphesi veya CYP2D6 inhibitörü eş kullanımı.'],
      ['Boy – kilo', [1, 0, 1, 1, 1], ''],
      ['Antikolinerjik etkiler', [0, 1, 1, 1, 1], 'Kabızlık, idrar retansiyonu, ağız kuruluğu, bulanık görme.']
    ]
  },
  mirtazapin: {
    ad: 'Mirtazapin',
    satir: [
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], ''],
      ['Kilo / BKİ', [1, 1, 1, 1, 1], 'İştah ve kilo artışı sık.'],
      ['Açlık lipid / glukoz', [2, 0, 2, 0, 2], 'Belirgin kilo artışı olursa.'],
      ['Tam kan sayımı', [2, 2, 0, 0, 0], 'Ateş, boğaz ağrısı, enfeksiyon belirtisinde (nadir agranülositoz).'],
      ['Sedasyon / gündüz uykululuğu', [0, 1, 1, 2, 2], '']
    ]
  },
  bupropion: {
    ad: 'Bupropion',
    satir: [
      ['Nöbet riski sorgusu', [1, 1, 2, 2, 1], 'Epilepsi, yeme bozukluğu, kafa travması, alkol/benzodiazepin kesilmesi.'],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], ''],
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], ''],
      ['Boy – kilo', [1, 1, 1, 1, 1], 'İştah azalması olabilir.'],
      ['Tik, uykusuzluk, ajitasyon', [0, 1, 1, 2, 2], '']
    ]
  },
  trazodon: {
    ad: 'Trazodon',
    satir: [
      ['Kan basıncı (ortostatik)', [1, 1, 2, 2, 2], ''],
      ['Priapizm eğitimi', [1, 1, 0, 0, 0], '4 saatten uzun süren ereksiyon acildir; aileyi ve genci bilgilendirin.'],
      ['Sabah sedasyonu', [0, 1, 1, 2, 2], ''],
      ['EKG (QTc)', [2, 0, 0, 0, 0], 'Kardiyak risk veya QT uzatan eş ilaç.'],
      ['İntihar düşüncesi / davranışı', [1, 1, 1, 1, 1], '']
    ]
  },
  stimulan: {
    ad: 'Psikostimulanlar',
    satir: [
      ['Kardiyak öykü ve muayene', [1, 0, 0, 0, 1], 'Senkop, egzersizle göğüs ağrısı, ailede < 40 yaş ani ölüm, yapısal kalp hastalığı.'],
      ['Kan basıncı / nabız', [1, 'Her doz artışında', 1, 1, 1], 'Yaşa göre persentile göre değerlendirin; 3–6 ayda bir.'],
      ['Boy', [1, 0, 0, 1, 1], '6 ayda bir büyüme eğrisine işleyin.'],
      ['Kilo', [1, 1, 1, 1, 1], '3–6 ayda bir; belirgin kayıpta doz/zamanlama/ilaç tatili düşünün.'],
      ['İştah ve uyku', [1, 1, 1, 1, 1], ''],
      ['Tik, irritabilite, duygudurum, psikotik belirti', [1, 1, 1, 1, 1], ''],
      ['EKG', [2, 0, 0, 0, 0], 'Rutin gerekmez; kardiyak risk/öykü varsa ve kardiyoloji görüşü ile.'],
      ['Kötüye kullanım / ilacı başkasına verme', [1, 0, 2, 2, 1], 'Özellikle ergenlerde.'],
      ['DEHB ölçeği (aile + öğretmen)', [1, 1, 1, 1, 1], 'Doz optimizasyonunda her basamakta.']
    ]
  },
  atomoksetin: {
    ad: 'Atomoksetin',
    satir: [
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'Kara kutu uyarısı: özellikle ilk aylar ve doz değişimleri.'],
      ['Kan basıncı / nabız', [1, 'Her doz artışında', 1, 1, 1], ''],
      ['Boy – kilo', [1, 1, 1, 1, 1], ''],
      ['Kardiyak öykü ve muayene', [1, 0, 0, 0, 1], ''],
      ['Karaciğer işlev testleri', [2, 2, 2, 2, 2], 'Rutin gerekmez; sarılık, koyu idrar, kaşıntı, karın ağrısı olursa bakın ve ilacı kesin.'],
      ['İrritabilite, duygudurum, uyku', [1, 1, 1, 1, 1], ''],
      ['DEHB ölçeği', [1, 1, 1, 1, 1], 'Tam etki 6–12 haftayı bulabilir.']
    ]
  },
  alfa2: {
    ad: 'Alfa-2 agonistler',
    satir: [
      ['Kan basıncı / nabız', [1, 'Haftalık (titrasyonda)', 1, 1, 1], 'Hipotansiyon ve bradikardi; ilk yıl 3 ayda bir, sonra 6 ayda bir.'],
      ['Kardiyak öykü ve muayene', [1, 0, 0, 0, 1], 'Senkop, bradikardi, AV blok öyküsü.'],
      ['EKG', [2, 0, 0, 0, 0], 'Kardiyak risk veya QT uzatan eş ilaç varsa.'],
      ['Sedasyon / somnolans', [0, 1, 1, 1, 1], 'İlk haftalarda belirgin; okul performansını sorun.'],
      ['Boy – kilo / BKİ', [1, 0, 1, 1, 1], 'Kilo artışı olabilir.'],
      ['Uyum (doz atlama)', [0, 1, 1, 1, 1], 'Ani kesilme rebound hipertansiyon yapar; aileyi uyarın.']
    ]
  },
  antipsikotik: {
    ad: 'Antipsikotikler',
    satir: [
      ['Kişisel / ailesel risk öyküsü', [1, 0, 0, 0, 1], 'Obezite, diyabet, dislipidemi, hipertansiyon, erken kardiyovasküler hastalık.'],
      ['Kilo, boy, BKİ (persentil / z-skor)', [1, 1, 1, 1, 1], 'Her vizitte. Başlangıca göre ≥ %7 kilo artışı veya BKİ z-skorunda ≥ 0,5 artış: müdahale edin.'],
      ['Bel çevresi', [1, 0, 1, 1, 1], ''],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], ''],
      ['Açlık glukoz veya HbA1c', [1, 0, 1, 1, 1], 'Sonrasında yılda bir; kilo artışı belirginse daha sık.'],
      ['Açlık lipid profili', [1, 0, 1, 1, 1], ''],
      ['Karaciğer işlev testleri', [1, 0, 2, 1, 1], ''],
      ['Prolaktin', [2, 0, 2, 0, 2], 'Belirti varsa (adet düzensizliği, galaktore, jinekomasti, cinsel işlev). Risperidon/paliperidonda eşik düşük tutun.'],
      ['EPS, akatizi, diskinezi (AIMS)', [1, 1, 1, 1, 1], 'Titrasyonda her vizit; sonra 6 ayda bir AIMS.'],
      ['EKG (QTc)', [2, 2, 0, 0, 2], 'Ziprasidon, haloperidol, kardiyak öykü veya QT uzatan kombinasyon.'],
      ['Tam kan sayımı', [1, 0, 0, 0, 2], '']
    ]
  },
  klozapin: {
    ad: 'Klozapin',
    satir: [
      ['Lökosit ve mutlak nötrofil sayısı', [1, 'Haftalık (ilk 18 hf)', 'En az 4 haftada bir', 'En az 4 haftada bir', 'En az 4 haftada bir'], 'Başlamak için lökosit ≥ 3500/mm³ ve nötrofil ≥ 2000/mm³. Kesildikten sonra 4 hafta daha izleyin.'],
      ['Troponin, CRP', [1, 'Haftalık (ilk 4 hf)', 2, 0, 0], 'Miyokardit ilk 4–8 haftada; ateş, taşikardi, göğüs ağrısı, dispne olursa hemen.'],
      ['Nabız, kan basıncı, ateş', [1, 'Her vizit / günlük (titrasyon)', 1, 1, 1], 'Titrasyonda ortostatik hipotansiyon ve taşikardi.'],
      ['EKG', [1, 2, 2, 0, 1], ''],
      ['Kilo, BKİ, bel çevresi', [1, 1, 1, 1, 1], 'Her vizit.'],
      ['Açlık glukoz / HbA1c, lipid', [1, 1, 1, 1, 1], ''],
      ['Bağırsak alışkanlığı', [1, 1, 1, 1, 1], 'Her vizitte sorun; kabızlık → ileus riski, erken laksatif.'],
      ['Karaciğer işlev testleri', [1, 0, 2, 1, 1], ''],
      ['Klozapin plazma düzeyi', [0, 2, 2, 2, 2], 'Yanıtsızlık, toksisite, sigara/ilaç değişikliği. Hedef genellikle 350–600 ng/mL.'],
      ['EEG', [2, 0, 0, 0, 0], 'Nöbet öyküsü veya yüksek doz/düzeyde.']
    ]
  },
  lityum: {
    ad: 'Lityum',
    satir: [
      ['Serum lityum düzeyi (12. saat)', [0, 'Her doz değişiminden 5–7 gün sonra', 1, 1, '3–6 ayda bir'], 'Son dozdan 12 saat sonra. Stabil olana dek haftalık; ilk yıl 3 ayda bir.'],
      ['Kreatinin, eGFR, üre', [1, 0, 1, 1, '6 ayda bir'], ''],
      ['TSH (± sT4)', [1, 0, 2, 1, '6 ayda bir'], 'Hipotiroidi sık; ergen kızlarda daha dikkatli.'],
      ['Kalsiyum', [1, 0, 0, 2, 1], 'Hiperparatiroidi.'],
      ['Elektrolitler', [1, 0, 2, 1, 1], ''],
      ['Tam kan, tam idrar tetkiki', [1, 0, 0, 0, 1], 'Lökositoz beklenir; idrar dansitesi (poliüri).'],
      ['EKG', [1, 0, 0, 0, 2], 'Çocuk/ergende başlangıçta önerilir; kardiyak riskte tekrar.'],
      ['Gebelik testi', [1, 2, 2, 2, 2], 'Çocuk doğurma potansiyeli olan ergenlerde.'],
      ['Kilo / BKİ', [1, 1, 1, 1, 1], ''],
      ['Toksisite belirtileri eğitimi', [1, 1, 1, 1, 1], 'Kusma, ishal, kaba tremor, ataksi, dizartri → ilacı durdur, düzey bak. Sıvı alımı, NSAİİ uyarısı.']
    ]
  },
  valproat: {
    ad: 'Valproat',
    satir: [
      ['Karaciğer işlev testleri', [1, 1, 1, 1, '6–12 ayda bir'], 'Hepatotoksisite riski ilk 6 ayda en yüksek.'],
      ['Tam kan (trombosit)', [1, 1, 1, 1, '6–12 ayda bir'], 'Doz bağımlı trombositopeni.'],
      ['Serum valproat düzeyi', [0, 1, 2, 2, 2], 'Kararlı durumda (3–5 gün), sabah dozundan önce. Hedef 50–100 µg/mL (akut manide 125\'e dek).'],
      ['Gebelik testi ve kontrasepsiyon', [1, 2, 2, 2, 1], 'Çocuk doğurma potansiyeli olanlarda başka seçenek yoksa; gebelik önleme programı.'],
      ['Kilo / BKİ', [1, 1, 1, 1, 1], ''],
      ['Adet düzeni, hirsutizm, akne', [1, 0, 1, 1, 1], 'Polikistik over sendromu bulguları.'],
      ['Amonyak', [0, 2, 2, 2, 2], 'Letarji, kusma, konfüzyon olursa (KCFT normal olsa da).'],
      ['Amilaz / lipaz', [0, 2, 2, 2, 2], 'Şiddetli karın ağrısı, kusma olursa (pankreatit).']
    ]
  },
  lamotrijin: {
    ad: 'Lamotrijin',
    satir: [
      ['Döküntü sorgusu ve eğitimi', [1, 'Her vizit (ilk 8 hf)', 1, 2, 2], 'Herhangi bir döküntüde ilacı kesip değerlendirin; ateş, mukoza tutulumu, lenfadenopati acildir.'],
      ['Eş ilaç gözden geçirme', [1, 1, 1, 1, 1], 'Valproat (doz yarıya), karbamazepin/östrojenli kontraseptif (düzey düşer).'],
      ['Doz atlama süresi', [0, 1, 1, 1, 1], '5 günden uzun ara verildiyse titrasyona baştan başlayın.'],
      ['Rutin laboratuvar', [2, 0, 0, 0, 0], 'Rutin kan tetkiki gerekmez; başlangıçta tam kan/KCFT bakılabilir.']
    ]
  },
  karbamazepin: {
    ad: 'Karbamazepin',
    satir: [
      ['Tam kan sayımı', [1, 1, 1, 1, '6–12 ayda bir'], 'İlk 2 ayda 2–4 haftada bir önerenler vardır; ateş/boğaz ağrısı/morarmada hemen.'],
      ['Karaciğer işlev testleri', [1, 1, 1, 1, '6–12 ayda bir'], ''],
      ['Sodyum', [1, 1, 1, 1, 1], 'Hiponatremi (SIADH).'],
      ['Serum düzeyi', [0, 1, 2, 2, 2], 'Hedef 4–12 µg/mL. Otoindüksiyon nedeniyle 3–5. haftada düzey düşer.'],
      ['HLA-B*1502', [2, 0, 0, 0, 0], 'Asya kökenli hastalarda başlamadan önce (SJS/TEN riski).'],
      ['Döküntü sorgusu', [1, 1, 1, 2, 2], ''],
      ['Gebelik testi ve kontrasepsiyon', [1, 2, 2, 2, 1], 'Hormonal kontraseptif etkinliğini azaltır; teratojendir.'],
      ['EKG', [2, 0, 0, 0, 0], 'İleti bozukluğu öyküsünde.']
    ]
  },
  benzo: {
    ad: 'Benzodiazepinler',
    satir: [
      ['Tedavi süresi ve gereklilik', [1, 1, 1, 1, 1], 'Mümkünse 2–4 hafta ile sınırlayın; her vizitte kesme planını gözden geçirin.'],
      ['Sedasyon, dikkat, bellek', [1, 1, 1, 1, 1], 'Okul performansı, araç/bisiklet kullanımı.'],
      ['Paradoksal disinhibisyon', [0, 1, 2, 2, 2], 'Çocuklarda ve nörogelişimsel bozuklukta daha sık.'],
      ['Tolerans / kötüye kullanım', [1, 1, 1, 1, 1], 'Madde kullanım öyküsü; doz artırma isteği.'],
      ['Solunum riski', [1, 0, 0, 0, 0], 'Uyku apnesi, opioid/alkol ile birlikte kullanım.']
    ]
  },
  melatonin: {
    ad: 'Melatonin',
    satir: [
      ['Uyku günlüğü (2 hafta)', [1, 1, 1, 1, 1], 'Uykuya dalma süresi, toplam uyku, uyanmalar.'],
      ['Uyku hijyeni değerlendirmesi', [1, 1, 1, 1, 1], 'Ekran, kafein, yatış saati düzeni; ilaçtan önce ve birlikte.'],
      ['Gündüz uykululuğu, baş ağrısı', [0, 1, 1, 2, 2], ''],
      ['Tedavi gerekliliğini gözden geçirme', [0, 0, 1, 1, 1], '3–6 ayda bir ilaçsız deneme düşünün.'],
      ['Puberte gelişimi', [1, 0, 0, 0, 1], 'Uzun süreli kullanımda yıllık izlem (veriler güven vericidir ancak sınırlıdır).']
    ]
  },
  hidroksizin: {
    ad: 'Hidroksizin',
    satir: [
      ['QT riski sorgusu / EKG', [2, 0, 0, 0, 0], 'Kardiyak öykü, QT uzatan eş ilaç, elektrolit bozukluğu varsa EKG.'],
      ['Sedasyon, okul performansı', [1, 1, 1, 0, 0], ''],
      ['Paradoksal ajitasyon', [0, 1, 0, 0, 0], 'Küçük çocuklarda.'],
      ['Tedavi süresi', [1, 1, 1, 0, 0], 'Kısa süreli kullanım; tolerans gelişir.']
    ]
  },
  buspiron: {
    ad: 'Buspiron',
    satir: [
      ['Belirti ölçeği', [1, 1, 1, 1, 1], 'Etki 2–4 haftada başlar.'],
      ['Baş dönmesi, bulantı, baş ağrısı', [0, 1, 1, 2, 2], ''],
      ['Eş ilaç gözden geçirme', [1, 1, 1, 1, 1], 'CYP3A4 inhibitörleri/indükleyicileri, greyfurt suyu, serotonerjikler.']
    ]
  }
};

/* Yardımcı: izlem şablonuna ilaca özgü satır ekle / satır değiştir */
window.izlemSatirlari = function (ilac) {
  var s = (window.IZLEM[ilac.izlem] || { satir: [] }).satir.slice();
  (ilac.izlemEk || []).forEach(function (r) {
    var i = s.findIndex(function (x) { return x[0] === r[0]; });
    if (i >= 0) s[i] = r; else s.push(r);
  });
  return s;
};
