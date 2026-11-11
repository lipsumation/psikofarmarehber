/* Antidepresanlar */
(function () {
  var KUTU_AD = 'Kara kutu uyarısı: 25 yaş altında antidepresanlar intihar düşüncesi ve davranışı riskini artırabilir. Başlangıçta ve her doz değişiminde yakın izlem; aile ve genç bilgilendirilmelidir.';
  var SURDURUM_AD = [
    'Yanıt değerlendirmesi: yeterli dozda 4–6 hafta (OKB\'de 8–12 hafta) beklenir; 2–4 haftada hiç düzelme yoksa doz artırın.',
    'Remisyondan sonra depresyonda en az 6–12 ay, anksiyete bozuklukları ve OKB\'de en az 12 ay aynı dozda sürdürün.',
    'Yineleyen dönemler (≥ 2 epizod), ağır epizod veya kalıntı belirtide daha uzun sürdürüm düşünün.',
    'Kesme denemesini düşük stresli bir dönemde yapın (okul başlangıcı, sınav dönemi gibi zamanlardan kaçının).'
  ];

  window.ILACLAR.push(
  {
    id: 'fluoksetin', ad: 'Fluoksetin', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Seçici serotonin geri alım inhibitörü. Çocuk ve ergen depresyonunda kanıtı en güçlü antidepresan; aktif metaboliti norfluoksetin çok uzun yarı ömürlüdür.',
    t12: '4–6 gün (norfluoksetin 4–16 gün)', t12s: 120, etki: '2–4 hafta (tam yanıt 6–8 hf)', form: 'Kapsül 20 mg; solüsyon 20 mg/5 mL',
    onay: [['Depresyon', '≥ 8 yaş'], ['OKB', '≥ 7 yaş']],
    ped: {
      bas: '5–10 mg/gün (sabah)', artis: '1–2 hafta sonra 20 mg; sonrasında 2–4 haftada bir 10–20 mg', hedef: '20 mg/gün (10–40 mg)', maks: '60 mg/gün (OKB, ergen)',
      birim: 'mg/gün', adim: [[0, 10], [14, 20], [42, 30], [70, 40]], bant: [20, 40], tavan: 60,
      not: ['Düşük kilolu çocuklarda 5–10 mg ile başlayıp 10–20 mg\'da kalınabilir.', 'Anksiyete bozukluğunda aktivasyonu azaltmak için 5 mg ile başlayın.', 'Solüsyon formu küçük doz adımlarını kolaylaştırır.']
    },
    eri: {
      bas: '20 mg/gün (sabah)', artis: '3–4 hafta sonra gerekirse 20 mg artış', hedef: '20–40 mg/gün', maks: '80 mg/gün',
      birim: 'mg/gün', adim: [[0, 20], [28, 40], [56, 60]], bant: [20, 40], tavan: 80,
      not: ['Panik bozuklukta 10 mg ile başlayın.', 'OKB ve bulimiyada 60 mg\'a dek çıkılabilir.']
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 1, sure: '2–4 hafta (çoğu hastada kendiliğinden yavaş azalır)', adim: [[0, 100], [14, 50], [28, 0]],
      not: ['Uzun yarı ömür nedeniyle kesilme belirtileri nadirdir; 20 mg\'dan doğrudan kesilebilir.', '40 mg ve üzerinde önce 20 mg\'a inip 2 hafta sonra kesin.', 'Etkileşim potansiyeli kesildikten sonra 5 haftaya kadar sürer.'] },
    izlem: 'ssri', profil: { sed: 0, kilo: 0, gis: 2, akt: 3, qt: 1, kes: 1 },
    kutu: KUTU_AD,
    uyari: ['Aktivasyon, uykusuzluk, ajitasyon (özellikle ilk haftalar)', 'Davranışsal disinhibisyon ve mani/hipomani kayması', 'Serotonin sendromu', 'Hiponatremi, kanama eğiliminde artış', 'İştah azalması ve kilo kaybı (başlangıçta)'],
    etkilesim: ['Güçlü CYP2D6 inhibitörü: atomoksetin, aripiprazol, risperidon, TCA düzeylerini artırır', 'MAOİ ile kontrendike (fluoksetin kesildikten sonra 5 hafta bekleyin)', 'Pimozid, tiyoridazin ile kontrendike', 'NSAİİ / antikoagülanlar: kanama riski'],
    oz: ['sero', '2d6inh', 'uzun']
  },
  {
    id: 'sertralin', ad: 'Sertralin', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Seçici serotonin geri alım inhibitörü; hafif dopamin geri alım inhibisyonu. Pediatrik anksiyete ve OKB\'de güçlü kanıt, düşük etkileşim potansiyeli.',
    t12: '~26 saat (metabolit 62–104 saat)', t12s: 26, etki: '2–4 hafta (OKB 8–12 hf)', form: 'Tablet 25 / 50 / 100 mg; (oral konsantre 20 mg/mL)',
    onay: [['OKB', '≥ 6 yaş']],
    ped: {
      bas: '6–12 yaş: 12,5–25 mg/gün · 13–17 yaş: 25–50 mg/gün', artis: 'En az 1 hafta arayla 25–50 mg', hedef: '50–150 mg/gün', maks: '200 mg/gün',
      birim: 'mg/gün', adim: [[0, 25], [7, 50], [28, 100], [56, 150]], bant: [50, 150], tavan: 200,
      not: ['Anksiyetede 12,5 mg ile başlamak aktivasyonu azaltır.', 'GİS yan etkisini azaltmak için yemekle verin.', 'Küçük çocuklarda günde iki doza bölmek gerekebilir (hızlı metabolizma).']
    },
    eri: {
      bas: '50 mg/gün (panik/TSSB/SAB: 25 mg)', artis: 'En az 1 hafta arayla 25–50 mg', hedef: '50–200 mg/gün', maks: '200 mg/gün',
      birim: 'mg/gün', adim: [[0, 50], [14, 100], [42, 150], [70, 200]], bant: [50, 200], tavan: 200, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 2, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Her 1–2 haftada 25–50 mg azaltın.', 'Kesilme belirtisi olursa son tolere edilen doza dönüp daha yavaş azaltın.'] },
    izlem: 'ssri', profil: { sed: 0, kilo: 1, gis: 3, akt: 2, qt: 1, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['İshal, bulantı (SSRI\'lar içinde en sık)', 'Aktivasyon ve uykusuzluk', 'Mani/hipomani kayması', 'Serotonin sendromu, hiponatremi, kanama'],
    etkilesim: ['MAOİ ve pimozid ile kontrendike', 'Yüksek dozda orta düzey CYP2D6 inhibisyonu', 'NSAİİ / antikoagülanlar: kanama riski'],
    oz: ['sero']
  },
  {
    id: 'essitalopram', ad: 'Essitalopram', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Sitalopramın S-enantiyomeri; en seçici SSRI. Etkileşim potansiyeli düşüktür.',
    t12: '27–32 saat', t12s: 30, etki: '2–4 hafta', form: 'Tablet 5 / 10 / 20 mg; damla 20 mg/mL',
    onay: [['Depresyon', '≥ 12 yaş'], ['Yaygın anksiyete', '≥ 7 yaş']],
    ped: {
      bas: 'Çocuk: 2,5–5 mg/gün · Ergen: 5–10 mg/gün', artis: 'Çocuk: ≥ 2 hafta sonra 10 mg · Ergen: ≥ 3 hafta sonra 20 mg', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 5], [7, 10], [35, 15], [56, 20]], bant: [10, 20], tavan: 20,
      not: ['Damla formu 1 mg basamaklarla titrasyona olanak verir.', 'CYP2C19 zayıf metabolizörlerinde ve karaciğer yetmezliğinde maksimum 10 mg.']
    },
    eri: {
      bas: '10 mg/gün (panik: 5 mg)', artis: '≥ 1 hafta sonra 20 mg', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [21, 20]], bant: [10, 20], tavan: 20, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 25], [35, 0]],
      not: ['Her 1–2 haftada 5 mg azaltın.', 'Damla formu ile son basamaklar daha küçük tutulabilir.'] },
    izlem: 'ssri', profil: { sed: 1, kilo: 1, gis: 2, akt: 2, qt: 2, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Doza bağlı QT uzaması (sitaloprama göre daha az)', 'Aktivasyon, uykusuzluk veya somnolans', 'Mani/hipomani kayması', 'Serotonin sendromu, hiponatremi, kanama'],
    etkilesim: ['MAOİ ve pimozid ile kontrendike', 'QT uzatan ilaçlarla dikkat', 'Omeprazol/esomeprazol (CYP2C19 inhibitörü) düzeyi artırır'],
    oz: ['sero', 'qt']
  },
  {
    id: 'sitalopram', ad: 'Sitalopram', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Seçici serotonin geri alım inhibitörü. Pediatrik onayı yoktur; çocuk/ergende essitalopram genellikle tercih edilir.',
    t12: '~35 saat', t12s: 35, etki: '2–4 hafta', form: 'Tablet 20 / 40 mg',
    onay: [],
    ped: {
      bas: '10 mg/gün', artis: '1–2 hafta sonra 20 mg; gerekirse ≥ 4 hafta sonra artış', hedef: '20–40 mg/gün', maks: '40 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [14, 20], [56, 30], [84, 40]], bant: [20, 40], tavan: 40,
      not: ['Endikasyon dışı kullanım; aile onamı alınmalıdır.', 'Doz 40 mg\'ı geçmemelidir (QT).']
    },
    eri: {
      bas: '20 mg/gün', artis: '≥ 1 hafta sonra 40 mg', hedef: '20–40 mg/gün', maks: '40 mg/gün (> 60 yaş, karaciğer yetmezliği, CYP2C19 zayıf metabolizör: 20 mg)',
      birim: 'mg/gün', adim: [[0, 20], [21, 40]], bant: [20, 40], tavan: 40, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 25], [35, 0]], not: ['Her 1–2 haftada 10 mg azaltın.'] },
    izlem: 'ssri', izlemEk: [['EKG (QTc)', [2, 2, 0, 0, 2], 'Kardiyak öykü, hipokalemi/hipomagnezemi, QT uzatan eş ilaç veya 40 mg dozda düşünün.']],
    profil: { sed: 1, kilo: 1, gis: 2, akt: 1, qt: 3, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Doza bağlı QT uzaması: konjenital uzun QT, bradikardi, hipokalemide kaçının', 'Mani/hipomani kayması', 'Serotonin sendromu, hiponatremi, kanama'],
    etkilesim: ['MAOİ ve pimozid ile kontrendike', 'Diğer QT uzatan ilaçlarla birlikte kullanmaktan kaçının', 'CYP2C19 inhibitörleri (omeprazol, simetidin) ile maks. 20 mg'],
    oz: ['sero', 'qt']
  },
  {
    id: 'fluvoksamin', ad: 'Fluvoksamin', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Seçici serotonin geri alım inhibitörü; sigma-1 agonisti. Pediatrik OKB\'de onaylıdır; ilaç etkileşimleri belirgindir.',
    t12: '15–20 saat', t12s: 17, etki: '2–4 hafta (OKB 8–12 hf)', form: 'Tablet 50 / 100 mg',
    onay: [['OKB', '≥ 8 yaş']],
    ped: {
      bas: '25 mg/gün (gece)', artis: '4–7 günde bir 25 mg', hedef: '50–200 mg/gün', maks: '8–11 yaş: 200 mg/gün · 12–17 yaş: 300 mg/gün',
      birim: 'mg/gün', adim: [[0, 25], [7, 50], [14, 75], [21, 100], [35, 150]], bant: [50, 200], tavan: 300,
      not: ['50 mg üzerindeki günlük dozları ikiye bölün; büyük kısmı gece verin.', 'Kız çocuklarda daha düşük dozlar yeterli olabilir.']
    },
    eri: {
      bas: '50 mg/gün (gece)', artis: '4–7 günde bir 50 mg', hedef: '100–300 mg/gün', maks: '300 mg/gün',
      birim: 'mg/gün', adim: [[0, 50], [7, 100], [14, 150], [28, 200]], bant: [100, 300], tavan: 300, not: ['100 mg üzerini ikiye bölün.']
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 2, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]], not: ['Her 1–2 haftada 25–50 mg azaltın.', 'Kısa yarı ömür nedeniyle doz atlamalarında kesilme belirtileri görülebilir.'] },
    izlem: 'ssri', profil: { sed: 2, kilo: 1, gis: 3, akt: 1, qt: 1, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Bulantı, sedasyon', 'Mani/hipomani kayması', 'Serotonin sendromu, hiponatremi, kanama'],
    etkilesim: ['Güçlü CYP1A2 inhibitörü: klozapin, olanzapin, teofilin, kafein, melatonin düzeylerini belirgin artırır', 'Tizanidin, pimozid, MAOİ ile kontrendike', 'CYP2C19 ve CYP3A4 inhibisyonu: diazepam, alprazolam, karbamazepin düzeyleri artar', 'Varfarin etkisini artırır'],
    oz: ['sero', '1a2inh']
  },
  {
    id: 'paroksetin', ad: 'Paroksetin', sinif: 'ad', altSinif: 'SSRI', grup: 'ssri',
    mek: 'Güçlü serotonin geri alım inhibitörü; antikolinerjik etkisi vardır. Çocuk ve ergende etkinlik kanıtı zayıf, kesilme ve intihar sinyali belirgin olduğundan ilk seçenek değildir.',
    t12: '~21 saat (doğrusal olmayan kinetik)', t12s: 21, etki: '2–4 hafta', form: 'Tablet 20 mg (kontrollü salımlı 12,5 / 25 mg)',
    onay: [], onayNot: 'Çocuk ve ergende kullanımı önerilmez',
    ped: {
      bas: '10 mg/gün', artis: '≥ 1–2 hafta arayla 10 mg', hedef: '10–30 mg/gün', maks: '40 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [14, 20], [42, 30]], bant: [10, 30], tavan: 40,
      not: ['Çocuk/ergen depresyonunda plaseboya üstünlüğü gösterilememiştir; başka SSRI tercih edin.', 'Kullanılacaksa (ör. diğer SSRI\'lara yanıtsız sosyal anksiyete/OKB) düşük doz ve çok yavaş kesme planı ile.']
    },
    eri: {
      bas: '20 mg/gün (panik: 10 mg)', artis: '≥ 1 hafta arayla 10 mg', hedef: '20–40 mg/gün', maks: '50 mg/gün (OKB ve panik: 60 mg)',
      birim: 'mg/gün', adim: [[0, 20], [21, 30], [42, 40]], bant: [20, 40], tavan: 60, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 3, sure: '4–8 hafta veya daha uzun', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 12], [70, 0]],
      not: ['SSRI\'lar içinde kesilme belirtisi riski en yüksek ilaçtır.', 'Haftada en fazla 10 mg; son basamaklarda 5 mg adımlarla azaltın.', 'Tolere edilemezse fluoksetine geçip onu keserek köprüleme yapılabilir.'] },
    izlem: 'ssri', profil: { sed: 2, kilo: 2, gis: 2, akt: 1, ach: 2, qt: 0, kes: 3 },
    kutu: KUTU_AD,
    uyari: ['Belirgin kesilme sendromu', 'Kilo artışı, sedasyon, antikolinerjik etkiler', 'Cinsel yan etkiler', 'Gebelikte kardiyak malformasyon riski (ergenlerde gebelik sorgusu)'],
    etkilesim: ['Güçlü CYP2D6 inhibitörü: atomoksetin, aripiprazol, risperidon, TCA düzeylerini artırır', 'Tamoksifen etkinliğini azaltır', 'MAOİ, pimozid, tiyoridazin ile kontrendike'],
    oz: ['sero', '2d6inh']
  },
  {
    id: 'venlafaksin', ad: 'Venlafaksin XR', sinif: 'ad', altSinif: 'SNRI', grup: 'snri',
    mek: 'Serotonin ve (yüksek dozda) noradrenalin geri alım inhibitörü. Pediatrik onayı yoktur; SSRI\'lara yanıtsız ergenlerde ikinci–üçüncü basamak.',
    t12: '5 saat (aktif metabolit 11 saat)', t12s: 11, etki: '2–4 hafta', form: 'Uzatılmış salımlı kapsül 37,5 / 75 / 150 mg',
    onay: [],
    ped: {
      bas: '37,5 mg/gün (sabah, yemekle)', artis: '1–2 haftada bir 37,5 mg', hedef: '75–150 mg/gün', maks: '225 mg/gün (≥ 50 kg); 25–39 kg: 112,5 mg; 40–49 kg: 150 mg',
      birim: 'mg/gün', adim: [[0, 37.5], [7, 75], [28, 112.5], [42, 150]], bant: [75, 150], tavan: 225,
      not: ['Endikasyon dışı kullanım. Pediatrik çalışmalarda intihar düşüncesi ve düşmanca davranış sinyali diğer antidepresanlardan belirgindir.', 'Kilo kaybı ve boy uzamasında yavaşlama bildirilmiştir.']
    },
    eri: {
      bas: '37,5–75 mg/gün', artis: '≥ 4–7 günde bir 75 mg', hedef: '75–225 mg/gün', maks: '225 mg/gün (XR); ağır depresyonda 375 mg',
      birim: 'mg/gün', adim: [[0, 75], [14, 150], [28, 225]], bant: [75, 225], tavan: 225, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 3, sure: '4–8 hafta veya daha uzun', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
      not: ['Haftada veya iki haftada bir 37,5 mg azaltın; son basamak (37,5 → 0) en zor olandır.', 'Doz atlamalarında bile baş dönmesi, elektrik çarpması hissi, bulantı görülebilir.', 'Gerekirse fluoksetin ile köprüleme.'] },
    izlem: 'snri', profil: { sed: 1, kilo: 0, gis: 3, akt: 2, kv: 2, qt: 1, kes: 3 },
    kutu: KUTU_AD,
    uyari: ['Doza bağlı kan basıncı ve nabız artışı', 'Belirgin kesilme sendromu', 'Aşırı dozda SSRI\'lardan daha toksik', 'Mani/hipomani kayması, hiponatremi, kanama'],
    etkilesim: ['MAOİ ile kontrendike', 'CYP2D6 inhibitörleri (fluoksetin, paroksetin) düzeyi artırır', 'Diğer serotonerjiklerle serotonin sendromu'],
    oz: ['sero', '2d6sub']
  },
  {
    id: 'duloksetin', ad: 'Duloksetin', sinif: 'ad', altSinif: 'SNRI', grup: 'snri',
    mek: 'Serotonin ve noradrenalin geri alım inhibitörü. Pediatrik yaygın anksiyete bozukluğunda onaylı tek SNRI.',
    t12: '~12 saat', t12s: 12, etki: '2–4 hafta', form: 'Gastro-rezistan kapsül 30 / 60 mg',
    onay: [['Yaygın anksiyete', '≥ 7 yaş'], ['Fibromiyalji', '≥ 13 yaş']],
    ped: {
      bas: '30 mg/gün', artis: '≥ 2 hafta sonra 60 mg; sonrasında 30 mg basamaklarla', hedef: '30–60 mg/gün', maks: '120 mg/gün',
      birim: 'mg/gün', adim: [[0, 30], [14, 60], [56, 90]], bant: [30, 60], tavan: 120,
      not: ['Kapsül açılmamalı, çiğnenmemeli (enterik kaplı pelletler).', 'Bulantıyı azaltmak için yemekle verin.']
    },
    eri: {
      bas: '30–60 mg/gün', artis: '1–2 hafta sonra 60 mg', hedef: '60 mg/gün', maks: '120 mg/gün',
      birim: 'mg/gün', adim: [[0, 30], [14, 60], [56, 90], [84, 120]], bant: [60, 120], tavan: 120, not: ['60 mg üzerinin ek yararı sınırlıdır.']
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 3, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [14, 50], [28, 25], [42, 0]], not: ['30 mg basamaklarla, en az 2 haftada azaltın.', 'Kapsül bölünemediğinden son basamakta gün aşırı vermek yerine daha yavaş azaltım veya fluoksetin köprüsü düşünün.'] },
    izlem: 'snri', profil: { sed: 1, kilo: 0, gis: 3, akt: 2, kv: 2, kes: 3 },
    kutu: KUTU_AD,
    uyari: ['Hepatotoksisite: karaciğer hastalığı ve yoğun alkol kullanımında kaçının', 'Kan basıncı ve nabız artışı', 'Bulantı, iştah azalması, kilo kaybı', 'Mani/hipomani kayması, hiponatremi, kanama'],
    etkilesim: ['MAOİ ile kontrendike', 'Fluvoksamin, siprofloksasin (CYP1A2 inhibitörleri) ile kullanmayın', 'Orta düzey CYP2D6 inhibitörü: TCA, atomoksetin, aripiprazol düzeyi artabilir'],
    oz: ['sero', '2d6inh', '1a2sub']
  },
  {
    id: 'mirtazapin', ad: 'Mirtazapin', sinif: 'ad', altSinif: 'NaSSA', grup: 'addiger',
    mek: 'Alfa-2 antagonisti; 5-HT2, 5-HT3 ve H1 blokajı. Uykusuzluk ve iştahsızlığın eşlik ettiği depresyonda yararlıdır. Pediatrik onayı yoktur.',
    t12: '20–40 saat', t12s: 30, etki: 'Uyku/iştah: günler · duygudurum: 2–4 hafta', form: 'Tablet / ağızda dağılan tablet 15 / 30 / 45 mg',
    onay: [],
    ped: {
      bas: '7,5–15 mg/gün (gece)', artis: '1–2 haftada bir 7,5–15 mg', hedef: '15–30 mg/gün', maks: '45 mg/gün',
      birim: 'mg/gün', adim: [[0, 7.5], [7, 15], [28, 30]], bant: [15, 30], tavan: 45,
      not: ['Endikasyon dışı kullanım; pediatrik depresyon çalışmaları negatiftir.', 'Düşük dozlarda (7,5–15 mg) sedasyon daha belirgindir.']
    },
    eri: {
      bas: '15 mg/gün (gece)', artis: '1–2 haftada bir 15 mg', hedef: '15–45 mg/gün', maks: '45 mg/gün',
      birim: 'mg/gün', adim: [[0, 15], [14, 30], [42, 45]], bant: [15, 45], tavan: 45, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 0]], not: ['Ani kesmede uykusuzluk, bulantı, irritabilite, anksiyete görülebilir.'] },
    izlem: 'mirtazapin', profil: { sed: 3, kilo: 3, gis: 0, akt: 0, qt: 1, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Belirgin iştah ve kilo artışı', 'Sedasyon', 'Nadir: agranülositoz/nötropeni (ateş, boğaz ağrısında tam kan)', 'Kolesterol/trigliserid artışı'],
    etkilesim: ['MAOİ ile kontrendike', 'Alkol ve benzodiazepinlerle sedasyon artar', 'Karbamazepin düzeyini düşürür'],
    oz: ['sero']
  },
  {
    id: 'bupropion', ad: 'Bupropion XL', sinif: 'ad', altSinif: 'NDRI', grup: 'addiger',
    mek: 'Noradrenalin ve dopamin geri alım inhibitörü. Serotonerjik etkisi yoktur; DEHB\'de üçüncü basamak, eş tanılı depresyonda seçenek. Pediatrik onayı yoktur.',
    t12: '~21 saat', t12s: 21, etki: '2–4 hafta', form: 'Uzatılmış salımlı tablet 150 / 300 mg',
    onay: [],
    ped: {
      bas: 'Ergen: 150 mg/gün (sabah) · alternatif ~3 mg/kg/gün', artis: '≥ 1–2 hafta sonra 300 mg', hedef: '150–300 mg/gün (3–6 mg/kg/gün)', maks: '300 mg/gün veya 6 mg/kg/gün (hangisi düşükse)',
      birim: 'mg/gün', adim: [[0, 150], [14, 300]], bant: [150, 300], tavan: 300,
      not: ['Endikasyon dışı kullanım; genellikle ≥ 12 yaş / ≥ 40–50 kg.', 'Tablet bölünmez, ezilmez. Uykusuzluğu azaltmak için sabah verin.', 'Yeme bozukluğu ve nöbet öyküsünü mutlaka sorgulayın.']
    },
    eri: {
      bas: '150 mg/gün (sabah)', artis: '≥ 4 gün sonra 300 mg', hedef: '300 mg/gün', maks: '450 mg/gün',
      birim: 'mg/gün', adim: [[0, 150], [7, 300]], bant: [150, 300], tavan: 450, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 1, sure: '1–2 hafta', adim: [[0, 100], [10, 50], [20, 0]], not: ['300 mg\'dan 150 mg\'a inip 1–2 hafta sonra kesin.', 'Belirgin bir kesilme sendromu tanımlanmamıştır.'] },
    izlem: 'bupropion', profil: { sed: 0, kilo: 0, gis: 1, akt: 3, kv: 1, istah: 2, kes: 1 },
    kutu: KUTU_AD,
    uyari: ['Doza bağlı nöbet riski', 'Kontrendike: epilepsi, bulimiya/anoreksiya nervoza, alkol veya benzodiazepinin ani kesilmesi', 'Uykusuzluk, ajitasyon, tiklerde artış', 'Kan basıncı artışı'],
    etkilesim: ['CYP2D6 inhibitörü: atomoksetin, aripiprazol, risperidon, TCA düzeyini artırır', 'MAOİ ile kontrendike', 'Nöbet eşiğini düşüren ilaçlarla (klozapin, TCA, tramadol) dikkat'],
    oz: ['2d6inh', 'nobet']
  },
  {
    id: 'trazodon', ad: 'Trazodon', sinif: 'ad', altSinif: 'SARI', grup: 'addiger',
    mek: '5-HT2A antagonisti ve zayıf serotonin geri alım inhibitörü; H1 ve alfa-1 blokajı. Düşük dozda çoğunlukla uyku için endikasyon dışı kullanılır.',
    t12: '5–9 saat', t12s: 7, etki: 'Uyku: ilk doz · duygudurum: 2–4 hafta', form: 'Tablet 50 / 100 mg (uzatılmış salımlı 150 mg)',
    onay: [],
    ped: {
      bas: 'Uyku: 12,5–25 mg (yatmadan 30–60 dk önce)', artis: '5–7 günde bir 12,5–25 mg', hedef: 'Uyku: 25–100 mg/gece', maks: 'Uyku: 100–150 mg/gece · depresyon (ergen): 6 mg/kg/gün\'e dek',
      birim: 'mg/gece', adim: [[0, 25], [7, 50], [21, 75]], bant: [25, 100], tavan: 150,
      not: ['Endikasyon dışı kullanım; pediatrik uykusuzlukta kanıt sınırlıdır.', 'Erkek çocuk ve ergenlerde priapizm riski konusunda aile bilgilendirilmelidir.']
    },
    eri: {
      bas: 'Uyku: 25–50 mg/gece · depresyon: 150 mg/gün (bölünmüş)', artis: '3–4 günde bir 50 mg', hedef: 'Uyku: 50–100 mg · depresyon: 150–300 mg/gün', maks: '400 mg/gün (ayaktan)',
      birim: 'mg/gün', adim: [[0, 50], [7, 100], [14, 150], [28, 300]], bant: [150, 300], tavan: 400, not: []
    },
    surdurum: ['Uyku için kullanımda 3 ayda bir gerekliliği gözden geçirin; uyku hijyeni ve BDT-İ ile birlikte.', 'Depresyon tedavisinde remisyondan sonra 6–12 ay.'],
    kesme: { risk: 2, sure: '1–2 hafta (yüksek dozda 2–4 hafta)', adim: [[0, 100], [7, 50], [14, 0]], not: ['Düşük uyku dozlarında 1 haftada yarılayıp kesmek genellikle yeterlidir.', 'Ani kesmede rebound uykusuzluk ve anksiyete olabilir.'] },
    izlem: 'trazodon', profil: { sed: 3, kilo: 1, gis: 1, akt: 0, kv: 2, qt: 2, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Priapizm (nadir ama acil)', 'Ortostatik hipotansiyon, senkop', 'Sabah sersemliği', 'QT uzaması, aritmi'],
    etkilesim: ['CYP3A4 inhibitörleri (klaritromisin, ketokonazol) düzeyi artırır; karbamazepin düşürür', 'MAOİ ile kontrendike', 'Diğer sedatiflerle additif etki'],
    oz: ['sero', 'qt']
  },
  {
    id: 'vortioksetin', ad: 'Vortioksetin', sinif: 'ad', altSinif: 'Multimodal', grup: 'addiger',
    mek: 'Serotonin geri alım inhibitörü ve çoklu 5-HT reseptör modülatörü. Ergen depresyon çalışmalarında plaseboya üstünlük gösterilememiştir.',
    t12: '~66 saat', t12s: 66, etki: '2–4 hafta', form: 'Tablet 5 / 10 / 20 mg',
    onay: [], onayNot: 'Pediatrik etkinlik gösterilememiştir',
    ped: {
      bas: '5 mg/gün', artis: '1–2 hafta sonra 10 mg', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 5], [14, 10], [42, 20]], bant: [10, 20], tavan: 20,
      not: ['Endikasyon dışı kullanım; 12–17 yaş MDB çalışmaları negatiftir. Yalnızca diğer seçenekler tükendiğinde düşünün.']
    },
    eri: {
      bas: '10 mg/gün (duyarlı hastada 5 mg)', artis: '≥ 1–2 hafta sonra 20 mg', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [14, 20]], bant: [10, 20], tavan: 20, not: []
    },
    surdurum: SURDURUM_AD,
    kesme: { risk: 1, sure: '1 hafta', adim: [[0, 100], [7, 50], [14, 0]], not: ['10 mg ve altı doğrudan kesilebilir.', '15–20 mg dozunda 1 hafta 10 mg\'a inip sonra kesin.'] },
    izlem: 'ssri', profil: { sed: 0, kilo: 0, gis: 3, akt: 1, qt: 0, kes: 1 },
    kutu: KUTU_AD,
    uyari: ['Bulantı (doza bağlı, ilk 2 hafta)', 'Mani/hipomani kayması', 'Serotonin sendromu, hiponatremi, kanama'],
    etkilesim: ['Güçlü CYP2D6 inhibitörleri (fluoksetin, paroksetin, bupropion) ile dozu yarıya indirin', 'Güçlü indükleyiciler (karbamazepin, rifampisin) ile doz artışı gerekebilir', 'MAOİ ile kontrendike'],
    oz: ['sero', '2d6sub', 'uzun']
  },
  {
    id: 'klomipramin', ad: 'Klomipramin', sinif: 'ad', altSinif: 'Trisiklik', grup: 'tca',
    mek: 'Güçlü serotonin (ve metaboliti ile noradrenalin) geri alım inhibitörü trisiklik. OKB\'de SSRI\'lara yanıtsızlıkta kullanılır.',
    t12: '32 saat (metabolit ~69 saat)', t12s: 32, etki: 'OKB: 6–12 hafta', form: 'Draje 10 / 25 mg; SR tablet 75 mg',
    onay: [['OKB', '≥ 10 yaş']],
    ped: {
      bas: '25 mg/gün (gece, yemekle)', artis: 'İlk 2 haftada kademeli olarak 3 mg/kg/gün veya 100 mg/gün\'e (hangisi düşükse)', hedef: '2–3 mg/kg/gün (75–150 mg)', maks: '3 mg/kg/gün veya 200 mg/gün (hangisi düşükse)',
      birim: 'mg/gün', adim: [[0, 25], [4, 50], [9, 75], [14, 100], [42, 150]], bant: [75, 150], tavan: 200,
      not: ['Her doz artışından önce EKG ve nabız/KB.', 'Titrasyonda bölünmüş doz; sonra tek gece dozu.', 'Aşırı dozda öldürücüdür: aile ilacı güvenli saklamalı, sınırlı miktarda reçete edilmelidir.']
    },
    eri: {
      bas: '25 mg/gün', artis: 'İlk 2 haftada 100 mg/gün\'e; sonrasında kademeli', hedef: '100–250 mg/gün', maks: '250 mg/gün',
      birim: 'mg/gün', adim: [[0, 25], [4, 50], [9, 75], [14, 100], [35, 150], [56, 200]], bant: [100, 250], tavan: 250, not: []
    },
    surdurum: ['OKB\'de yanıt için yeterli dozda 10–12 hafta bekleyin.', 'Yanıt sonrası en az 12 ay sürdürün; etkin en düşük doza inin.', 'Sürdürümde yılda bir EKG.'],
    kesme: { risk: 3, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada 25 mg azaltın.', 'Ani kesmede kolinerjik rebound: bulantı, kusma, terleme, baş ağrısı, uykusuzluk, irritabilite.'] },
    izlem: 'tca', profil: { sed: 2, kilo: 2, gis: 2, akt: 1, ach: 3, kv: 2, qt: 2, kes: 3 },
    kutu: KUTU_AD,
    uyari: ['Kardiyak ileti bozukluğu, taşikardi, ortostatik hipotansiyon', 'Doza bağlı nöbet riski (250 mg üzeri)', 'Antikolinerjik etkiler, kilo artışı, terleme', 'Aşırı dozda öldürücü'],
    etkilesim: ['Fluoksetin, paroksetin, fluvoksamin, bupropion plazma düzeyini belirgin artırır', 'MAOİ ile kontrendike', 'Diğer serotonerjiklerle serotonin sendromu', 'QT uzatan ve antikolinerjik ilaçlarla additif etki'],
    oz: ['sero', '2d6sub', 'qt', 'nobet']
  },
  {
    id: 'imipramin', ad: 'İmipramin', sinif: 'ad', altSinif: 'Trisiklik', grup: 'tca',
    mek: 'Serotonin ve noradrenalin geri alım inhibitörü trisiklik. Çocuklarda temel kullanım alanı diğer tedavilere yanıtsız enürezis noktürnadır; pediatrik depresyonda etkisizdir.',
    t12: '11–25 saat', t12s: 18, etki: 'Enürezis: ilk hafta', form: 'Draje 10 / 25 mg',
    onay: [['Enürezis noktürna', '≥ 6 yaş']],
    ped: {
      bas: '25 mg (yatmadan 1 saat önce)', artis: '1 hafta sonra yanıt yoksa 25 mg artış', hedef: '6–11 yaş: 25–50 mg · ≥ 12 yaş: 25–75 mg', maks: '2,5 mg/kg/gün (6–11 yaş: 50 mg · ≥ 12 yaş: 75 mg)',
      birim: 'mg/gece', adim: [[0, 25], [7, 50]], bant: [25, 50], tavan: 75,
      not: ['Enüreziste alarm tedavisi ve desmopressinden sonra üçüncü basamak.', 'Başlamadan önce EKG ve kardiyak öykü.', 'Aşırı dozda öldürücü: evde güvenli saklama zorunludur.']
    },
    eri: {
      bas: '25–75 mg/gün', artis: '3–7 günde bir 25–50 mg', hedef: '150–200 mg/gün', maks: '300 mg/gün (yatan hasta)',
      birim: 'mg/gün', adim: [[0, 50], [7, 100], [14, 150], [28, 200]], bant: [150, 200], tavan: 300, not: []
    },
    surdurum: ['Enüreziste 3 ay sonra ilaçsız dönem deneyin; uzun süreli kullanımdan kaçının.', 'Yanıt yoksa 1 ay içinde kesin.'],
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 0]], not: ['Ani kesme enürezis nüksünü ve kolinerjik rebound riskini artırır; kademeli azaltın.'] },
    izlem: 'tca', profil: { sed: 2, kilo: 2, gis: 1, akt: 1, ach: 3, kv: 2, qt: 2, kes: 2 },
    kutu: KUTU_AD,
    uyari: ['Kardiyak ileti bozukluğu, taşikardi', 'Antikolinerjik etkiler', 'Nöbet eşiğini düşürür', 'Aşırı dozda öldürücü'],
    etkilesim: ['CYP2D6 inhibitörleri (fluoksetin, paroksetin, bupropion) düzeyi artırır', 'MAOİ ile kontrendike', 'Metilfenidat TCA düzeyini artırabilir'],
    oz: ['sero', '2d6sub', 'qt', 'nobet']
  }
  );
})();
