/* Psikofarmakoloji Rehberi — temel veri: sınıflar, izlem şablonları, profil etiketleri */
window.ILACLAR = [];

window.SINIFLAR = {
  ad:   { ad: 'Antidepresanlar',            renk: 'var(--s-ad)' },
  dehb: { ad: 'DEHB ilaçları',              renk: 'var(--s-dehb)' },
  ap:   { ad: 'Antipsikotikler',            renk: 'var(--s-ap)' },
  dd:   { ad: 'Duygudurum dengeleyiciler',  renk: 'var(--s-dd)' },
  anks: { ad: 'Anksiyolitik / uyku',        renk: 'var(--s-anks)' },
  diger: { ad: 'Diğer ilaçlar',             renk: 'var(--s-diger)' }
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
      { ped: ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'İlk 4 hafta haftalık, sonraki 4 hafta 2 haftada bir, 12. haftada ve her doz değişiminde değerlendirin.'],
        eri: ['İntihar düşüncesi / davranışı', [1, 1, 1, 1, 1], 'İlk haftalarda ve her doz değişiminde; 25 yaş altında daha sık temas.'] },
      { ped: ['Aktivasyon, ajitasyon, mani kayması', [1, 1, 1, 2, 2], 'Özellikle ilk 2–3 hafta ve doz artışlarından sonra; küçük çocuklarda daha sık.'],
        eri: ['Aktivasyon, ajitasyon, mani kayması', [1, 1, 1, 2, 2], 'Özellikle ilk 2–3 hafta ve doz artışlarından sonra. Başlamadan önce bipolarite öyküsünü sorgulayın.'] },
      { ped: ['Belirti ölçeği (ör. ÇDÖ, SCARED, CY-BOCS)', [1, 1, 1, 1, 1], 'Yanıtı nesnel izlemek için başlangıç ve 4–6 haftada bir.'],
        eri: ['Belirti ölçeği (ör. PHQ-9, GAD-7, Y-BOCS)', [1, 1, 1, 1, 1], 'Yanıtı nesnel izlemek için başlangıç ve 4–6 haftada bir.'] },
      { ped: ['Boy – kilo', [1, 0, 1, 1, 1], 'Uzun süreli kullanımda büyüme eğrisi.'],
        eri: ['Kilo / BKİ', [1, 0, 1, 1, 1], 'Uzun süreli kullanımda kilo artışı (özellikle paroksetin).'] },
      ['Kan basıncı / nabız', [1, 2, 2, 2, 2], ''],
      { ped: ['Sodyum', [2, 2, 0, 0, 0], 'Hiponatremi riski olanlarda (diüretik, düşük kilo, yeme bozukluğu).'],
        eri: ['Sodyum', [2, 2, 0, 0, 0], 'Risk grubunda ilk haftalarda: ≥ 65 yaş, diüretik kullanımı, düşük kilo, önceki hiponatremi.'] },
      { ped: ['EKG (QTc)', [2, 2, 0, 0, 0], 'Sitalopram/essitalopram yüksek doz, kardiyak öykü, QT uzatan eş ilaç.'],
        eri: ['EKG (QTc)', [2, 2, 0, 0, 0], 'Sitalopram/essitalopram yüksek doz veya ≥ 60 yaş, kardiyak öykü, QT uzatan eş ilaç.'] },
      ['Kanama / etkileşim sorgusu', [1, 2, 2, 2, 1], 'NSAİİ, antikoagülan, antiagregan, diğer serotonerjikler.'],
      { ped: null, eri: ['Cinsel işlev', [1, 0, 1, 1, 1], 'Başlangıçta sorgulayın; tedaviye bağlı cinsel işlev bozukluğu sık ve uyumu bozar.'] }
    ]
  },
  snri: {
    ad: 'SNRI',
    satir: [
      ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'İlk 4 hafta haftalık, sonra 2 haftada bir; her doz değişiminde.'],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], 'Doz bağımlı KB artışı; her doz artışında ölçün.'],
      { ped: ['Boy – kilo', [1, 1, 1, 1, 1], 'İştah azalması ve kilo kaybı olabilir.'],
        eri: ['Kilo', [1, 0, 1, 1, 1], 'İştah azalması ve kilo kaybı olabilir.'] },
      ['Aktivasyon / mani kayması', [1, 1, 1, 2, 2], ''],
      ['Karaciğer işlev testleri', [2, 0, 2, 0, 2], 'Duloksetin: karaciğer hastalığı / alkol kullanımı varsa.'],
      ['Sodyum', [2, 2, 0, 0, 0], 'Risk grubunda.'],
      { ped: null, eri: ['Cinsel işlev, idrar yapma güçlüğü', [1, 0, 1, 1, 1], ''] }
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
      { ped: ['Boy – kilo', [1, 0, 1, 1, 1], ''], eri: ['Kilo / BKİ', [1, 0, 1, 1, 1], ''] },
      { ped: ['Antikolinerjik etkiler', [0, 1, 1, 1, 1], 'Kabızlık, idrar retansiyonu, ağız kuruluğu, bulanık görme.'],
        eri: ['Antikolinerjik etkiler, düşme riski', [0, 1, 1, 1, 1], 'Kabızlık, idrar retansiyonu, bulanık görme; yaşlıda konfüzyon, ortostatik hipotansiyon ve düşme.'] }
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
      { ped: ['Boy – kilo', [1, 1, 1, 1, 1], 'İştah azalması olabilir.'], eri: ['Kilo', [1, 0, 1, 1, 1], 'İştah azalması olabilir.'] },
      { ped: ['Tik, uykusuzluk, ajitasyon', [0, 1, 1, 2, 2], ''], eri: ['Uykusuzluk, ajitasyon, anksiyete', [0, 1, 1, 2, 2], ''] }
    ]
  },
  trazodon: {
    ad: 'Trazodon',
    satir: [
      ['Kan basıncı (ortostatik)', [1, 1, 2, 2, 2], ''],
      { ped: ['Priapizm eğitimi', [1, 1, 0, 0, 0], '4 saatten uzun süren ereksiyon acildir; aileyi ve genci bilgilendirin.'],
        eri: ['Priapizm eğitimi', [1, 1, 0, 0, 0], '4 saatten uzun süren ereksiyon acildir; hastayı bilgilendirin.'] },
      ['Sabah sedasyonu', [0, 1, 1, 2, 2], ''],
      ['EKG (QTc)', [2, 0, 0, 0, 0], 'Kardiyak risk veya QT uzatan eş ilaç.'],
      ['İntihar düşüncesi / davranışı', [1, 1, 1, 1, 1], '']
    ]
  },
  stimulan: {
    ad: 'Psikostimulanlar',
    satir: [
      { ped: ['Kardiyak öykü ve muayene', [1, 0, 0, 0, 1], 'Senkop, egzersizle göğüs ağrısı, ailede < 40 yaş ani ölüm, yapısal kalp hastalığı.'],
        eri: ['Kardiyak öykü ve risk değerlendirmesi', [1, 0, 0, 0, 1], 'Senkop, göğüs ağrısı, aritmi, yapısal kalp hastalığı, ailede erken ani ölüm; hipertansiyon ve kardiyovasküler risk etkenleri.'] },
      { ped: ['Kan basıncı / nabız', [1, 'Her doz artışında', 1, 1, 1], 'Yaşa göre persentile göre değerlendirin; 3–6 ayda bir.'],
        eri: ['Kan basıncı / nabız', [1, 'Her doz artışında', 1, 1, 1], 'Her doz artışında ve 3–6 ayda bir; anlamlı artışta doz veya ilacı gözden geçirin.'] },
      { ped: ['Boy', [1, 0, 0, 1, 1], '6 ayda bir büyüme eğrisine işleyin.'], eri: null },
      { ped: ['Kilo', [1, 1, 1, 1, 1], '3–6 ayda bir; belirgin kayıpta doz/zamanlama/ilaç tatili düşünün.'],
        eri: ['Kilo', [1, 1, 1, 1, 1], '3–6 ayda bir; belirgin kayıpta doz veya zamanlamayı gözden geçirin.'] },
      ['İştah ve uyku', [1, 1, 1, 1, 1], ''],
      { ped: ['Tik, irritabilite, duygudurum, psikotik belirti', [1, 1, 1, 1, 1], ''],
        eri: ['Anksiyete, irritabilite, duygudurum, psikotik belirti', [1, 1, 1, 1, 1], ''] },
      ['EKG', [2, 0, 0, 0, 0], 'Rutin gerekmez; kardiyak risk/öykü varsa ve kardiyoloji görüşü ile.'],
      { ped: ['Kötüye kullanım / ilacı başkasına verme', [1, 0, 2, 2, 1], 'Özellikle ergenlerde.'],
        eri: ['Kötüye kullanım / ilacı başkasına verme', [1, 0, 2, 2, 1], 'Madde kullanım öyküsü; reçete takibi, erken reçete istemi.'] },
      { ped: ['DEHB ölçeği (aile + öğretmen)', [1, 1, 1, 1, 1], 'Doz optimizasyonunda her basamakta.'],
        eri: ['DEHB ölçeği (ör. ASRS; öz bildirim ± yakın bildirimi)', [1, 1, 1, 1, 1], 'Doz optimizasyonunda her basamakta.'] }
    ]
  },
  atomoksetin: {
    ad: 'Atomoksetin',
    satir: [
      { ped: ['İntihar düşüncesi / davranışı', [1, 'Haftalık (ilk 4 hf)', 1, 1, 1], 'Kara kutu uyarısı: özellikle ilk aylar ve doz değişimleri.'],
        eri: ['Duygudurum, intihar düşüncesi', [1, 1, 1, 1, 1], 'Kara kutu uyarısı çocuk ve ergenler içindir; erişkinde de ilk aylarda ve doz değişimlerinde sorgulayın.'] },
      ['Kan basıncı / nabız', [1, 'Her doz artışında', 1, 1, 1], ''],
      { ped: ['Boy – kilo', [1, 1, 1, 1, 1], ''], eri: ['Kilo', [1, 1, 1, 1, 1], ''] },
      { ped: null, eri: ['İdrar yapma güçlüğü, cinsel işlev', [0, 1, 1, 2, 2], 'Erişkinde idrar retansiyonu ve erektil işlev bozukluğu bildirilir; prostat büyümesinde dikkat.'] },
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
      { ped: ['Sedasyon / somnolans', [0, 1, 1, 1, 1], 'İlk haftalarda belirgin; okul performansını sorun.'],
        eri: ['Sedasyon / somnolans', [0, 1, 1, 1, 1], 'İlk haftalarda belirgin; gündüz işlevselliğini ve araç kullanımını sorun.'] },
      { ped: ['Boy – kilo / BKİ', [1, 0, 1, 1, 1], 'Kilo artışı olabilir.'], eri: ['Kilo / BKİ', [1, 0, 1, 1, 1], 'Kilo artışı olabilir.'] },
      { ped: ['Uyum (doz atlama)', [0, 1, 1, 1, 1], 'Ani kesilme rebound hipertansiyon yapar; aileyi uyarın.'],
        eri: ['Uyum (doz atlama)', [0, 1, 1, 1, 1], 'Ani kesilme rebound hipertansiyon yapar; hastayı uyarın.'] }
    ]
  },
  antipsikotik: {
    ad: 'Antipsikotikler',
    satir: [
      ['Kişisel / ailesel risk öyküsü', [1, 0, 0, 0, 1], 'Obezite, diyabet, dislipidemi, hipertansiyon, erken kardiyovasküler hastalık.'],
      { ped: ['Kilo, boy, BKİ (persentil / z-skor)', [1, 1, 1, 1, 1], 'Her vizitte. Başlangıca göre ≥ %7 kilo artışı veya BKİ z-skorunda ≥ 0,5 artış: müdahale edin.'],
        eri: ['Kilo, BKİ', [1, 'Aylık (ilk 3 ay)', 1, 1, 1], 'Sonra 3 ayda bir. Başlangıca göre ≥ %5 kilo artışı: yaşam tarzı müdahalesi, ilaç değişimi veya metformin değerlendirin.'] },
      ['Bel çevresi', [1, 0, 1, 1, 1], ''],
      ['Kan basıncı / nabız', [1, 1, 1, 1, 1], ''],
      { ped: ['Açlık glukoz veya HbA1c', [1, 0, 1, 1, 1], 'Sonrasında yılda bir; kilo artışı belirginse daha sık.'],
        eri: ['Açlık glukoz veya HbA1c', [1, 0, 1, 0, 1], '12. haftada ve sonra yılda bir; risk etkeni veya kilo artışı varsa daha sık.'] },
      { ped: ['Açlık lipid profili', [1, 0, 1, 1, 1], ''],
        eri: ['Açlık lipid profili', [1, 0, 1, 0, 1], '12. haftada ve sonra yılda bir.'] },
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
      { ped: ['TSH (± sT4)', [1, 0, 2, 1, '6 ayda bir'], 'Hipotiroidi sık; ergen kızlarda daha dikkatli.'],
        eri: ['TSH (± sT4)', [1, 0, 2, 1, '6 ayda bir'], 'Hipotiroidi sık; kadınlarda ve ileri yaşta daha sık.'] },
      ['Kalsiyum', [1, 0, 0, 2, 1], 'Hiperparatiroidi.'],
      ['Elektrolitler', [1, 0, 2, 1, 1], ''],
      ['Tam kan, tam idrar tetkiki', [1, 0, 0, 0, 1], 'Lökositoz beklenir; idrar dansitesi (poliüri).'],
      { ped: ['EKG', [1, 0, 0, 0, 2], 'Çocuk/ergende başlangıçta önerilir; kardiyak riskte tekrar.'],
        eri: ['EKG', [2, 0, 0, 0, 2], '≥ 40 yaş veya kardiyak risk varsa başlangıçta; kardiyak riskte tekrar.'] },
      { ped: ['Gebelik testi', [1, 2, 2, 2, 2], 'Çocuk doğurma potansiyeli olan ergenlerde.'],
        eri: ['Gebelik testi', [1, 2, 2, 2, 2], 'Çocuk doğurma potansiyeli olan kadınlarda.'] },
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
      { ped: ['Sedasyon, dikkat, bellek', [1, 1, 1, 1, 1], 'Okul performansı, araç/bisiklet kullanımı.'],
        eri: ['Sedasyon, dikkat, bellek', [1, 1, 1, 1, 1], 'Araç kullanımı ve iş güvenliği; yaşlıda bilişsel bozulma.'] },
      { ped: ['Paradoksal disinhibisyon', [0, 1, 2, 2, 2], 'Çocuklarda ve nörogelişimsel bozuklukta daha sık.'],
        eri: ['Düşme riski (≥ 65 yaş)', [1, 1, 1, 1, 1], 'Beers ölçütleri: yaşlılarda benzodiazepinlerden mümkünse kaçının.'] },
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
      { ped: ['Puberte gelişimi', [1, 0, 0, 0, 1], 'Uzun süreli kullanımda yıllık izlem (veriler güven vericidir ancak sınırlıdır).'], eri: null }
    ]
  },
  hidroksizin: {
    ad: 'Hidroksizin',
    satir: [
      ['QT riski sorgusu / EKG', [2, 0, 0, 0, 0], 'Kardiyak öykü, QT uzatan eş ilaç, elektrolit bozukluğu varsa EKG.'],
      { ped: ['Sedasyon, okul performansı', [1, 1, 1, 0, 0], ''], eri: ['Sedasyon, psikomotor performans', [1, 1, 1, 0, 0], 'Araç kullanımı.'] },
      { ped: ['Paradoksal ajitasyon', [0, 1, 0, 0, 0], 'Küçük çocuklarda.'],
        eri: ['Antikolinerjik etki, konfüzyon (yaşlı)', [1, 1, 0, 0, 0], 'Beers ölçütleri: yaşlılarda birinci kuşak antihistaminiklerden kaçının.'] },
      ['Tedavi süresi', [1, 1, 1, 0, 0], 'Kısa süreli kullanım; tolerans gelişir.']
    ]
  },
  naltrekson: {
    ad: 'Naltrekson',
    satir: [
      ['Opioid kullanımı / idrar testi', [1, 2, 2, 2, 2], 'Başlamadan önce 7–10 gün opioidsiz dönem ve negatif idrar testi; şüphede nalokson provokasyon testi.'],
      ['Karaciğer işlev testleri', [1, 1, 1, 1, 1], 'Başlangıçta ve tedavi süresince; ilk aylarda aylık, sonra 3–6 ayda bir. Üst sınırın 3 katını aşarsa tedaviyi gözden geçirin.'],
      ['Alkol tüketimi ve içme isteği', [1, 1, 1, 1, 1], 'İçme günleri ve miktarı (zaman çizelgesi); GGT, MCV izlenebilir.'],
      ['Duygudurum, intihar düşüncesi', [1, 1, 1, 1, 1], 'Bağımlılıkta intihar riski zaten yüksektir.'],
      ['Böbrek işlevi', [1, 0, 0, 0, 1], 'Ciddi böbrek yetmezliğinde kullanılmaz.'],
      ['Ağrı ve ameliyat planı', [1, 0, 0, 0, 1], 'Ağrıda opioid dışı analjezik; opioid gerektiren planlı ameliyattan 72 saat önce ilacı kesin. Hastaya acil durum kartı verin.']
    ]
  },
  buprenorfin: {
    ad: 'Buprenorfin / nalokson',
    satir: [
      ['Yoksunluk ölçeği (COWS)', [1, 'Her doz basamağında', 0, 0, 0], 'İndüksiyonu hafif–orta yoksunluk bulguları başlamadan yapmayın (tetiklenen yoksunluk).'],
      ['İdrar ilaç taraması', [1, 'Haftalık–2 haftada bir', 1, 1, 1], 'Buprenorfin varlığı (uyum) ve diğer maddeler.'],
      ['Karaciğer işlev testleri, hepatit B/C, HIV', [1, 0, 2, 2, 1], 'Başlangıçta; sonra belirti veya risk varsa.'],
      ['Sedasyon, solunum, eş sedatif kullanımı', [1, 1, 1, 1, 1], 'Benzodiazepin, alkol ve gabapentinoid kullanımını her vizitte sorun.'],
      ['Gebelik testi', [2, 0, 0, 0, 2], 'Çocuk doğurma potansiyeli olanlarda; gebelikte tedavi kesilmez, uzmanla planlanır.'],
      ['Nalokson ve güvenli saklama eğitimi', [1, 0, 1, 0, 1], 'Çocukların erişemeyeceği yerde saklama; aşırı doz belirtileri.'],
      ['EKG (QTc)', [2, 0, 0, 0, 0], 'QT uzatan eş ilaç veya kardiyak risk varsa.']
    ]
  },
  antikolinerjik: {
    ad: 'Antikolinerjikler (biperiden, triheksifenidil, bornaprin)',
    satir: [
      ['Ekstrapiramidal belirtiler (SAS, BARS, AIMS)', [1, 1, 1, 1, 1], 'Antikolinerjik gereksinimini her vizitte yeniden değerlendirin; geç diskinezide kesmeyi düşünün.'],
      ['Bilişsel işlev, konfüzyon', [1, 1, 1, 1, 1], 'Yaşlıda ve organik beyin hastalığında daha sık; bellek bozukluğunda kaçının.'],
      ['Göz içi basıncı', [2, 0, 2, 0, 2], 'Glokom öyküsü veya belirti varsa; dar açılı glokomda kontrendike.'],
      ['Kabızlık ve idrar yapma', [1, 1, 1, 1, 1], 'Prostat büyümesinde idrar retansiyonu riski.'],
      ['Nabız', [1, 1, 0, 0, 1], 'Taşikardi ve aritmide dikkatli kullanın.'],
      ['Tam kan, biyokimya', [1, 0, 2, 2, 1], 'Biperiden KÜB\'ü uzun süreli kullanımda düzenli izlem önerir.'],
      ['Kötüye kullanım', [1, 0, 2, 2, 1], 'Öforizan etki; reçete miktarını izleyin.']
    ]
  },
  nalmefen: {
    ad: 'Nalmefen',
    satir: [
      ['Alkol tüketimi (içme günleri ve miktarı)', [1, 1, 1, 1, 1], 'Başlamadan önce 2 hafta içme günlüğü; ilk 4 hafta en çok iyileşme, sonra ayda bir yanıt değerlendirmesi (Türkiye KÜB\'ü).'],
      ['Opioid kullanımı', [1, 1, 1, 1, 1], 'Opioid kullananlarda kontrendike; opioid analjezik gerekirse nalmefen 1 hafta önce kesilir.'],
      ['Yoksunluk öyküsü', [1, 0, 0, 0, 0], 'Yakın zamanda akut alkol yoksunluk sendromu (nöbet, halüsinasyon, deliryum tremens) varsa kullanılmaz.'],
      ['Karaciğer ve böbrek işlevi', [1, 0, 2, 2, 1], 'Ağır karaciğer yetmezliğinde ve eGFR < 30\'da kontrendike; GGT ve MCV alkol tüketimini izlemede yardımcıdır.'],
      ['Duygudurum, intihar düşüncesi, konfüzyon', [1, 1, 1, 1, 1], 'Konfüzyon ve halüsinasyon bildirilmiştir; bağımlılıkta intihar riski zaten yüksektir.'],
      ['Bulantı, baş dönmesi, uykusuzluk', [0, 1, 0, 0, 0], 'Çoğunlukla ilk haftalarda ve geçicidir.']
    ]
  },
  nalokson: {
    ad: 'Nalokson (acil kullanım)',
    satir: [
      ['Solunum sayısı, SpO2, bilinç düzeyi', [1, 'Her dozdan 2–3 dakika sonra', 0, 0, 0], 'Hedef yeterli solunumdur (≥ 10/dk), tam uyanıklık değil; yanıt yoksa doz 2–3 dakikada bir yinelenir.'],
      ['Yeniden sedasyon gözlemi', [0, 'Son dozdan sonra en az 2 saat', 0, 0, 0], 'Nalokson etkisi (30–90 dakika) çoğu opioidden kısadır; metadon ve uzun etkili opioidlerde daha uzun gözlem ya da infüzyon gerekir.'],
      ['Nabız, kan basıncı, ritim', [1, 'Gerekirse sürekli monitör', 0, 0, 0], 'Ani yoksunlukta taşikardi, hipertansiyon, aritmi; nadiren akciğer ödemi.'],
      ['Tetiklenen yoksunluk ve ajitasyon', [0, 'Uyandıktan sonra', 0, 0, 0], 'Opioid bağımlısında düşük dozla titre ederek ağır yoksunluktan kaçının.'],
      ['Eş maddeler, kan şekeri', [1, 0, 0, 0, 0], 'Benzodiazepin, alkol ve diğer sedatifler naloksona yanıt vermez; hipoglisemiyi dışlayın.'],
      ['Bağımlılık tedavisine yönlendirme', [0, 'Taburculuk öncesi', 0, 0, 0], 'Aşırı doz sonrası buprenorfin başlatma, aşırı doz eğitimi ve nalokson erişimi.']
    ]
  },
  propranolol: {
    ad: 'Propranolol',
    satir: [
      ['Nabız ve kan basıncı (ayakta dahil)', [1, 'Her doz artışında', 1, 1, 1], 'Nabız < 55/dk ya da sistolik KB < 90 mmHg ise dozu atlayın veya azaltın.'],
      ['Astım, KOAH, bronkospazm öyküsü', [1, 0, 0, 0, 0], 'Bronşiyal astım öyküsü ve KOAH\'ta kontrendike (Türkiye KÜB\'ü).'],
      ['Diyabet, hipoglisemi riski', [1, 0, 2, 2, 2], 'Hipoglisemi belirtilerini (taşikardi, titreme) maskeler; uzun açlıkta kullanılmaz.'],
      ['Akatizi şiddeti (BARS)', [1, 1, 1, 1, 1], 'Yanıt 1–2 haftada belirginleşir; yanıt yoksa antipsikotik dozu ya da seçimi yeniden değerlendirilir.'],
      ['EKG', [2, 0, 0, 0, 0], 'Bradikardi, ileti bozukluğu ya da kalp hastalığı öyküsünde.'],
      ['Yorgunluk, depresif belirti, kâbus', [1, 1, 1, 1, 1], 'Canlı rüya ve uykusuzluk bildirilir; akşam dozunu azaltmak yardımcı olabilir.']
    ]
  },
  metformin: {
    ad: 'Metformin (antipsikotiğe bağlı kilo artışı)',
    satir: [
      [{ ped: 'Kilo, BKİ persentili / z skoru, bel çevresi', eri: 'Kilo, BKİ, bel çevresi' }, [1, 1, 1, 1, 1], 'Yaşam tarzı müdahalesiyle birlikte; 3–4 ayda anlamlı etki yoksa gereksinimi yeniden değerlendirin.'],
      ['Açlık glukozu, HbA1c', [1, 0, 1, 1, 1], 'Antipsikotik metabolik izlemiyle birlikte.'],
      ['Lipid profili', [1, 0, 2, 0, 1], 'Antipsikotik metabolik izlemiyle birlikte.'],
      ['Böbrek işlevi (eGFR)', [1, 0, 0, 0, 1], 'Başlangıçta ve yılda bir; risk varsa 3–6 ayda bir. eGFR 30–44\'te en çok 1000 mg/gün, < 30\'da kontrendike (Türkiye KÜB\'ü).'],
      ['B12 vitamini', [0, 0, 0, 0, 1], 'Uzun süreli kullanımda; nöropati ya da anemi varsa daha erken.'],
      ['Bulantı, ishal', [1, 1, 0, 0, 0], 'Yemekle alın ve yavaş titre edin; uzatılmış salımlı form tolerabiliteyi artırabilir.'],
      ['Laktik asidoz risk durumları', [1, 0, 1, 1, 1], 'Dehidrasyon, ağır enfeksiyon, iyotlu kontrast ve ameliyatta ara verin; alkolizm ve karaciğer yetmezliğinde kullanılmaz.']
    ]
  },
  prazosin: {
    ad: 'Prazosin',
    satir: [
      ['Kan basıncı (oturma ve ayakta), nabız', [1, 'Her doz artışında', 1, 1, 1], 'İlk doz senkopu riski: ilk dozu yatarken verin; birkaç gün ara verildiyse 1 mg\'dan yeniden başlayın.'],
      ['Kâbus sıklığı ve şiddeti, uyku', [1, 1, 1, 1, 1], 'Kâbus günlüğü ya da CAPS kâbus maddesi; yeterli dozda 4–8 haftada yanıt yoksa kesin.'],
      ['Baş dönmesi, düşme riski', [1, 1, 1, 1, 1], 'Yaşlıda ve başka antihipertansif ya da alfa-1 bloke eden psikotrop kullanımında.'],
      ['Eş ilaçlar', [1, 1, 0, 0, 1], 'Antihipertansifler, PDE-5 inhibitörleri, trazodon, ketiapin, klozapin: ek hipotansiyon.']
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

/* Kitleye göre içerik: bir değer düz metin/dizi olabilir ya da { ped: ..., eri: ... } biçiminde iki sürüm taşıyabilir.
   Sürümlerden biri null ise o kitlede gösterilmez; eri sürümü yazılmamışsa çocuk-ergen sürümü kullanılır. */
window.kitleSec = function (x, kitle) {
  if (x && typeof x === 'object' && !Array.isArray(x) && ('ped' in x || 'eri' in x)) return (kitle in x) ? x[kitle] : x.ped;
  return x;
};
window.kitleDizi = function (d, kitle) {
  return (d || []).map(function (x) { return window.kitleSec(x, kitle); }).filter(function (x) { return x != null && x !== ''; });
};
/* satırın adı ve açıklaması da ayrıca iki sürümlü olabilir */
function izlemSatirCoz(r, kitle) { return [window.kitleSec(r[0], kitle), r[1], window.kitleSec(r[2], kitle) || '']; }
window.izlemSablon = function (k, kitle) {
  return window.kitleDizi((window.IZLEM[k] || { satir: [] }).satir, kitle).map(function (r) { return izlemSatirCoz(r, kitle); });
};

/* Yardımcı: izlem şablonuna ilaca özgü satır ekle / satır değiştir */
window.izlemSatirlari = function (ilac, kitle) {
  var s = window.izlemSablon(ilac.izlem, kitle);
  window.kitleDizi(ilac.izlemEk, kitle).map(function (r) { return izlemSatirCoz(r, kitle); }).forEach(function (r) {
    var i = s.findIndex(function (x) { return x[0] === r[0]; });
    if (i >= 0) s[i] = r; else s.push(r);
  });
  return s;
};
