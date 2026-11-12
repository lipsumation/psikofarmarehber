/* Antipsikotikler */
(function () {
  var SURDURUM_AP = [
    'Etkin en düşük dozu hedefleyin; her vizitte kilo/BKİ ve hareket bozukluğu değerlendirin.',
    { ped: 'İrritabilite/davranış endikasyonunda 6–12 ay stabil dönemden sonra kademeli azaltım ve kesme denemesi yapın.', eri: 'Şizofrenide sürdürüm tedavisini kesmek nüks riskini belirgin artırır; kesme kararını ortak karar ve yakın izlemle verin.' },
    'İlk psikotik epizoddan sonra en az 12–24 ay; yineleyen epizodlarda daha uzun sürdürüm.',
    'Metabolik yan etkide önce yaşam tarzı müdahalesi; yetersizse metabolik riski düşük ilaca geçiş veya metformin eklenmesi düşünün.'
  ];
  var KUTU_AP = { ped: 'Çocuk ve ergenler antipsikotiklerin metabolik yan etkilerine (kilo artışı, dislipidemi, insülin direnci), sedasyona ve prolaktin artışına erişkinlerden daha duyarlıdır. Endikasyonu, hedef belirtiyi ve kesme planını baştan belirleyin.', eri: 'Kara kutu uyarısı: demansı olan yaşlı hastalarda antipsikotikler ölüm ve inme riskini artırır. Bu hastalarda yalnızca ağır ve inatçı saldırganlıkta, kısa süreli ve risk–yarar değerlendirmesiyle kullanın (Türkiye\'de bu amaçla yalnızca bazı preparatlar ruhsatlıdır; ilgili KÜB\'e bakın). Tüm hastalarda metabolik izlem (kilo, glukoz, lipid) ve hareket bozukluğu değerlendirmesi gerekir.' };

  window.ILACLAR.push(
  {
    id: 'risperidon', ad: 'Risperidon', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: 'Güçlü D2 ve 5-HT2A antagonisti. Otizmde irritabilite, davranım sorunları ve tik bozukluklarında en çok deneyim olan antipsikotik. Aktif metaboliti paliperidondur.',
    t12: '3 saat (aktif metabolit ~21 saat)', t12s: 21, etki: 'İrritabilite: 1–2 hafta · psikoz: 2–6 hafta', form: 'Tablet 1 / 2 / 3 / 4 mg; oral solüsyon 1 mg/mL; ağızda dağılan tablet',
    onay: [['Otizmde irritabilite', '5–16 yaş'], ['Bipolar mani', '≥ 10 yaş'], ['Şizofreni', '≥ 13 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar I mani / karma dönem']],
    endikasyon: [
      ['Otizmde irritabilite, < 20 kg', '0,25 mg/gün', '0,5 mg/gün', '≥ 4 gün sonra 0,5 mg; sonra ≥ 2 haftada bir 0,25 mg'],
      ['Otizmde irritabilite, ≥ 20 kg', '0,5 mg/gün', '1 mg/gün (0,5–3 mg)', '≥ 4 gün sonra 1 mg; sonra ≥ 2 haftada bir 0,5 mg'],
      ['Davranım bozukluğu / agresyon', '0,25–0,5 mg/gün', '0,5–1,5 mg/gün', 'Haftada bir 0,25–0,5 mg'],
      ['Tik bozukluğu', '0,25–0,5 mg/gün', '1–3 mg/gün', 'Haftada bir 0,25–0,5 mg'],
      ['Bipolar mani (10–17 yaş)', '0,5 mg/gün', '1–2,5 mg/gün', 'Günde 0,5–1 mg artış; maks. 6 mg'],
      ['Şizofreni (13–17 yaş)', '0,5 mg/gün', '3 mg/gün', 'Günde 0,5–1 mg artış; maks. 6 mg']
    ],
    ped: {
      bas: '< 20 kg: 0,25 mg/gün · ≥ 20 kg: 0,5 mg/gün', artis: '≥ 4 gün sonra iki katına; sonrasında ≥ 2 haftada bir 0,25–0,5 mg', hedef: 'İrritabilite: 0,5–3 mg/gün · psikoz/mani: 1–3 mg/gün', maks: '6 mg/gün (3 mg üzerinde ek yarar sınırlı, EPS artar)',
      birim: 'mg/gün', adim: [[0, 0.5], [4, 1], [18, 1.5], [32, 2]], bant: [0.5, 3], tavan: 6,
      not: ['Grafik ≥ 20 kg otizmde irritabilite şemasını gösterir.', 'Tek doz (gece) veya ikiye bölünmüş; somnolans varsa gece verin.', '15 kg altındaki çocuklarda dikkatli kullanın.', 'Solüsyon formu 0,25 mg basamaklarla titrasyonu kolaylaştırır.']
    },
    eri: {
      bas: '1–2 mg/gün', artis: 'Günde 1–2 mg (≥ 24 saat arayla)', hedef: '4–6 mg/gün', maks: '16 mg/gün (pratikte 8 mg)',
      birim: 'mg/gün', adim: [[0, 2], [2, 4], [14, 6]], bant: [4, 6], tavan: 8, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta (uzun kullanımda daha yavaş)', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
      not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede kesilme diskinezisi, rebound irritabilite ve uykusuzluk görülebilir.', 'Azaltım sırasında davranış belirtilerinin geçici artışını nüksten ayırt edin.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [2, 0, 1, 2, 2], 'Risperidon prolaktini en çok artıran atipiktir; 3. ayda veya belirti varsa bakın (adet düzensizliği, galaktore, jinekomasti).']],
    profil: { sed: 2, kilo: 2, eps: 2, prl: 3, qt: 1, ach: 0, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Hiperprolaktinemi (jinekomasti, galaktore, amenore)', 'Kilo artışı, iştah artışı, metabolik sendrom', 'EPS, akatizi, geç diskinezi', 'Somnolans, siyalore, enürezis', 'Nöroleptik malign sendrom'],
    etkilesim: ['CYP2D6 inhibitörleri (fluoksetin, paroksetin) düzeyi artırır: dozu azaltın', 'Karbamazepin düzeyi düşürür', 'QT uzatan ilaçlarla dikkat'],
    oz: ['2d6sub', 'd2']
  },
  {
    id: 'aripiprazol', ad: 'Aripiprazol', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik (D2 parsiyel agonist)', grup: 'ap',
    mek: 'D2 ve 5-HT1A parsiyel agonisti, 5-HT2A antagonisti. Metabolik ve prolaktin profili elverişlidir; akatizi ve aktivasyon daha sıktır.',
    t12: '~75 saat (metabolit 94 saat)', t12s: 75, etki: '1–2 hafta (kararlı durum 2 hafta)', form: 'Tablet 5 / 10 / 15 / 30 mg; oral solüsyon 1 mg/mL',
    onay: [['Otizmde irritabilite', '6–17 yaş'], ['Tourette', '6–18 yaş'], ['Bipolar mani', '≥ 10 yaş'], ['Şizofreni', '≥ 13 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar I (akut mani ve sürdürüm)'], ['Majör depresyonda ek tedavi']],
    endikasyon: [
      ['Otizmde irritabilite', '2 mg/gün', '5–10 mg/gün', '1 hafta sonra 5 mg; ≥ 1 hafta arayla 5 mg; maks. 15 mg'],
      ['Tourette, < 50 kg', '2 mg/gün', '5 mg/gün', '2 gün sonra 5 mg; maks. 10 mg'],
      ['Tourette, ≥ 50 kg', '2 mg/gün', '10 mg/gün', '2 gün sonra 5 mg, 8. günde 10 mg; maks. 20 mg'],
      ['Bipolar mani / şizofreni (ergen)', '2 mg/gün', '10 mg/gün', '2 gün sonra 5 mg, 2 gün sonra 10 mg; maks. 30 mg']
    ],
    ped: {
      bas: '2 mg/gün (duyarlı çocukta 1 mg)', artis: '1 hafta sonra 5 mg; sonrasında ≥ 1 hafta arayla 5 mg', hedef: 'İrritabilite/tik: 5–10 mg/gün · psikoz/mani: 10 mg/gün', maks: 'İrritabilite: 15 mg · Tourette: 10–20 mg · psikoz/mani: 30 mg/gün',
      birim: 'mg/gün', adim: [[0, 2], [7, 5], [21, 10]], bant: [5, 10], tavan: 15,
      not: ['Grafik otizmde irritabilite şemasını gösterir.', 'Sabah verin (uykusuzluk/aktivasyon); sedasyon yaparsa akşama alın.', 'Uzun yarı ömür nedeniyle doz değişiminin tam etkisi 2 haftada görülür: hızlı artırmayın.']
    },
    eri: {
      bas: '10–15 mg/gün', artis: '≥ 2 hafta arayla', hedef: '10–15 mg/gün', maks: '30 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [14, 15], [28, 20]], bant: [10, 15], tavan: 30,
      not: ['Majör depresyonda ek tedavi: 2–5 mg/gün ile başlayın, haftalık aralarla artırın; en çok 15 mg/gün.']
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 1, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 0]],
      not: ['Uzun yarı ömür kendiliğinden yavaş azalma sağlar; yine de 2–4 haftada kademeli kesin.', 'Kesilme diskinezisi ve belirti nüksü açısından 4–8 hafta izleyin.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [0, 0, 2, 0, 0], 'Prolaktini düşürür; rutin gerekmez.'], ['Dürtü kontrol sorgusu', [1, 1, 1, 1, 1], 'Kumar, aşırı yeme, alışveriş, hiperseksüalite.']],
    profil: { sed: 1, kilo: 1, eps: 2, prl: 0, qt: 0, akt: 2, gis: 2, kes: 1 },
    kutu: KUTU_AP,
    uyari: ['Akatizi, huzursuzluk, uykusuzluk', 'Bulantı, kusma (başlangıçta)', 'Kilo artışı (çocuklarda erişkinden belirgin)', 'Dürtü kontrol bozuklukları (patolojik kumar vb.)', 'EPS, geç diskinezi, nöroleptik malign sendrom'],
    etkilesim: ['Güçlü CYP2D6 (fluoksetin, paroksetin) veya CYP3A4 inhibitörleri: dozu yarıya indirin', 'Karbamazepin: doz iki katına çıkarılabilir', 'Diğer antipsikotiklere eklendiğinde parsiyel agonizm nedeniyle geçici kötüleşme olabilir'],
    oz: ['2d6sub', 'd2p', 'uzun']
  },
  {
    id: 'olanzapin', ad: 'Olanzapin', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: { ped: 'D2, 5-HT2A, H1 ve M1 antagonisti. Etkin ancak metabolik yan etkisi en belirgin antipsikotiklerden; ergenlerde ilk seçenek olarak önerilmez.', eri: 'D2, 5-HT2A, H1 ve M1 antagonisti. Etkinliği güçlü, ancak kilo artışı ve metabolik yan etkisi en belirgin antipsikotiklerdendir; yakın metabolik izlem gerekir.' },
    t12: '~30 saat (21–54)', t12s: 30, etki: '1–2 hafta', form: 'Tablet / ağızda dağılan tablet 2,5 / 5 / 10 / 15 / 20 mg',
    onay: [['Şizofreni', '≥ 13 yaş'], ['Bipolar mani', '≥ 13 yaş'], ['Bipolar depresyon (fluoksetin ile)', '≥ 10 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar I (akut mani ve sürdürüm)'], ['Bipolar depresyon', 'fluoksetin ile'], ['Dirençli depresyon', 'fluoksetin ile']],
    ped: {
      bas: '2,5–5 mg/gün (gece)', artis: '≥ 1 hafta arayla 2,5–5 mg', hedef: '10 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 2.5], [4, 5], [11, 7.5], [18, 10]], bant: [5, 10], tavan: 20,
      not: ['Ergenlerde kilo artışı ve dislipidemi erişkinlerden belirgindir; başka seçenekler denendikten sonra kullanın.', 'Başlangıçtan itibaren beslenme ve fiziksel aktivite danışmanlığı verin.']
    },
    eri: {
      bas: '5–10 mg/gün', artis: '≥ 1 hafta arayla 5 mg', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [7, 15], [21, 20]], bant: [10, 20], tavan: 20, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
      not: ['Ani kesmede kolinerjik rebound (bulantı, kusma, terleme, uykusuzluk) ve rebound psikoz.', 'Her 1–2 haftada 2,5–5 mg azaltın.'] },
    izlem: 'antipsikotik', profil: { sed: 3, kilo: 3, eps: 1, prl: 1, qt: 1, ach: 2, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Belirgin kilo artışı, hiperglisemi, dislipidemi', 'Sedasyon', 'Karaciğer enzimlerinde artış', 'Antikolinerjik etkiler, ortostatik hipotansiyon', 'DRESS (nadir)'],
    etkilesim: ['Fluvoksamin, siprofloksasin (CYP1A2 inhibitörleri) düzeyi artırır', 'Sigara ve karbamazepin düzeyi düşürür; sigarayı bırakınca doz azaltın', 'Parenteral benzodiazepinle birlikte kullanmayın (IM form)'],
    oz: ['1a2sub', 'd2', 'antikol']
  },
  {
    id: 'ketiapin', ad: 'Ketiapin', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: 'Düşük afiniteli D2 ve 5-HT2A antagonisti; güçlü H1 ve alfa-1 blokajı. Metaboliti norketiapin noradrenalin geri alımını inhibe eder. EPS ve prolaktin etkisi düşüktür.',
    t12: '~7 saat (norketiapin 12 saat)', t12s: 7, etki: '1–2 hafta', form: 'Tablet 25 / 100 / 200 / 300 mg; uzatılmış salımlı (XR) 50–400 mg',
    onay: [['Bipolar mani', '≥ 10 yaş'], ['Şizofreni', '≥ 13 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar mani'], ['Bipolar depresyon'], ['Bipolar sürdürüm', 'lityum/valproata ek'], ['Majör depresyonda ek tedavi', 'uzatılmış salımlı form']],
    endikasyon: [
      ['Bipolar mani (10–17 yaş)', '50 mg/gün', '400–600 mg/gün', '1. gün 50, 2. gün 100, 3. gün 200, 4. gün 300, 5. gün 400 mg'],
      ['Şizofreni (13–17 yaş)', '50 mg/gün', '400–800 mg/gün', 'Aynı şema; sonrasında günde en fazla 100 mg artış'],
      ['Pratikte yavaş titrasyon', '12,5–25 mg/gün', 'Yanıta göre', '2–3 günde bir 25–50 mg; sedasyon ve hipotansiyona göre']
    ],
    ped: {
      bas: '25 mg ×2 (1. gün toplam 50 mg)', artis: '2. gün 100, 3. gün 200, 4. gün 300, 5. gün 400 mg; sonrasında günde ≤ 100 mg', hedef: 'Mani: 400–600 mg/gün · şizofreni: 400–800 mg/gün', maks: 'Mani: 600 mg/gün · şizofreni: 800 mg/gün',
      birim: 'mg/gün', adim: [[0, 50], [1, 100], [2, 200], [3, 300], [4, 400]], bant: [400, 600], tavan: 800,
      not: ['Kısa etkili form günde 2–3 doza bölünür.', 'Ayaktan hastalarda ve küçük çocuklarda daha yavaş titrasyon tercih edilir.', 'Uyku için düşük doz (endikasyon dışı) kullanımı metabolik riskler nedeniyle önerilmez.']
    },
    eri: {
      bas: '50 mg/gün (bölünmüş)', artis: '2. gün 100, 3. gün 200, 4. gün 300 mg', hedef: 'Şizofreni: 300–750 mg · mani: 400–800 mg · bipolar depresyon: 300 mg', maks: '800 mg/gün',
      birim: 'mg/gün', adim: [[0, 50], [1, 100], [2, 200], [3, 300], [7, 400]], bant: [300, 750], tavan: 800, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Ani kesmede uykusuzluk, bulantı, kusma, baş dönmesi, irritabilite.', 'Rebound uykusuzluk en sık yakınmadır; son basamakları yavaşlatın.'] },
    izlem: 'antipsikotik', izlemEk: [['TSH / sT4', [2, 0, 2, 0, 2], 'Doza bağlı T4 düşüşü; belirti veya tiroid öyküsü varsa.'], ['Kan basıncı / nabız', [1, 1, 1, 1, 1], { ped: 'Çocuk/ergende KB artışı; titrasyonda ortostatik hipotansiyon.', eri: 'Titrasyonda ortostatik hipotansiyon; yaşlıda düşme riski.' }]],
    profil: { sed: 3, kilo: 2, eps: 0, prl: 0, qt: 2, ach: 1, kv: 2, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Sedasyon, baş dönmesi, ortostatik hipotansiyon', 'Kilo artışı, lipid ve glukoz artışı', { ped: 'Çocuk ve ergenlerde kan basıncı artışı', eri: null }, 'QT uzaması', { ped: 'Kötüye kullanım potansiyeli (ergenlerde dikkat)', eri: 'Kötüye kullanım potansiyeli (madde kullanım öyküsünde dikkat)' }],
    etkilesim: ['Güçlü CYP3A4 inhibitörleri (ketokonazol, klaritromisin): dozu altıda birine indirin', 'Karbamazepin, fenitoin düzeyi belirgin düşürür', 'Diğer QT uzatan ve sedatif ilaçlarla dikkat'],
    oz: ['qt', 'd2', 'antikol']
  },
  {
    id: 'klozapin', ad: 'Klozapin', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: { ped: 'Çoklu reseptör antagonisti (D4, 5-HT2A, M1, H1, alfa-1); düşük D2 işgali. Tedaviye dirençli şizofrenide en etkili ilaç. Pediatrik onayı yoktur; en az iki antipsikotiğe yanıtsız erken başlangıçlı şizofrenide kullanılır.', eri: 'Çoklu reseptör antagonisti (D4, 5-HT2A, M1, H1, alfa-1); düşük D2 işgali. Tedaviye dirençli şizofrenide (en az iki yeterli antipsikotik denemesine yanıtsızlık) en etkili ilaçtır; intihar davranışını da azaltır.' },
    t12: '~12 saat (4–66)', t12s: 12, etki: '2–8 hafta; tam yanıt 6 aya dek', form: 'Tablet 25 / 100 mg',
    onay: [], onayNot: 'Dirençli şizofrenide endikasyon dışı (genellikle ≥ 12 yaş)',
    onayEri: [['Dirençli şizofreni'], ['Şizofreni/şizoaffektifte intihar davranışını azaltma']],
    ped: {
      bas: '6,25–12,5 mg/gün', artis: '3–5 günde bir 12,5–25 mg (tolere edildikçe)', hedef: '150–400 mg/gün (plazma düzeyi ≥ 350 ng/mL)', maks: '600 mg/gün',
      birim: 'mg/gün', adim: [[0, 12.5], [3, 25], [7, 50], [11, 75], [15, 100], [21, 150], [28, 200], [42, 300]], bant: [150, 400], tavan: 600,
      not: ['Başlamadan önce: lökosit ≥ 3500/mm³, nötrofil ≥ 2000/mm³, EKG, troponin/CRP, metabolik değerler.', 'Titrasyon boyunca nabız, KB, ateş günlük/sık izlenir; mümkünse yatarak başlayın.', 'Çocuk ve ergenlerde nötropeni, akatizi ve nöbet sıklığı erişkinlerden yüksektir.', '48 saatten uzun ara verilirse 12,5 mg\'dan yeniden titre edin.']
    },
    eri: {
      bas: '12,5 mg ×1–2 (1. gün)', artis: '2. gün 25–50 mg; sonra günde 25–50 mg artışla 2–3 haftada 300 mg', hedef: '300–450 mg/gün', maks: '900 mg/gün',
      birim: 'mg/gün', adim: [[0, 12.5], [1, 25], [3, 50], [5, 100], [8, 150], [11, 200], [14, 250], [18, 300]], bant: [300, 450], tavan: 900, not: []
    },
    surdurum: ['Yanıt değerlendirmesi için yeterli plazma düzeyinde en az 3–6 ay bekleyin.', 'Hematolojik izlemi tedavi boyunca kesintisiz sürdürün.', 'Sigara kullanımındaki değişiklik düzeyi belirgin etkiler: bırakınca dozu %30–50 azaltmak gerekebilir.', 'Kabızlığı her vizitte sorgulayın; gerekirse düzenli laksatif.'],
    kesme: { risk: 3, sure: 'Acil durum dışında en az 1–2 hafta; tercihen daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Ani kesmede rebound psikoz, kolinerjik rebound (terleme, baş ağrısı, bulantı, ishal), katatoni.', 'Agranülositoz veya miyokardit nedeniyle acil kesmede yakın psikiyatrik izlem; kolinerjik rebound için antikolinerjik düşünün.', 'Kesildikten sonra 4 hafta daha hemogram izleyin.'] },
    izlem: 'klozapin', profil: { sed: 3, kilo: 3, eps: 0, prl: 0, qt: 2, ach: 3, kv: 3, kes: 3 },
    kutu: 'Ağır nötropeni/agranülositoz, miyokardit/kardiyomiyopati, nöbet, ortostatik hipotansiyon ve solunum/kalp durması riski. Hematolojik izlem zorunludur. Lökosit < 3000/mm³ veya nötrofil < 1500/mm³ ise ilacı derhal kesin.',
    uyari: ['Agranülositoz (ilk 18 hafta en riskli)', 'Miyokardit (ilk 4–8 hafta): ateş, taşikardi, göğüs ağrısı, dispne', 'Doza bağlı nöbet', 'Kabızlık, ileus, bağırsak tıkanması', 'Siyalore, taşikardi, sedasyon, enürezis', 'Belirgin kilo artışı ve metabolik sendrom'],
    etkilesim: ['Karbamazepin ve diğer kemik iliği baskılayıcılarla kullanmayın', 'Fluvoksamin, siprofloksasin düzeyi 5–10 kat artırabilir', 'Sigara düzeyi düşürür', 'Benzodiazepinlerle solunum depresyonu/kollaps riski (başlangıçta)'],
    oz: ['1a2sub', 'qt', 'nobet', 'antikol', 'kloz']
  },
  {
    id: 'haloperidol', ad: 'Haloperidol', sinif: 'ap', altSinif: 'Birinci kuşak antipsikotik', grup: 'ap',
    mek: 'Yüksek potensli D2 antagonisti. Akut ajitasyon, psikoz ve dirençli tik bozukluklarında; EPS riski yüksektir.',
    t12: '12–36 saat', t12s: 20, etki: 'Ajitasyon: saatler · psikoz: 1–2 hafta', form: 'Tablet 5 / 10 / 20 mg; damla 2 mg/mL (1 damla = 0,1 mg); ampul 5 mg',
    onay: [['Psikoz, Tourette, ağır davranış sorunları', '≥ 3 yaş']],
    onayEri: [['Şizofreni'], ['Tourette bozukluğu']],
    ped: {
      bas: '3–12 yaş (15–40 kg): 0,25–0,5 mg/gün (2–3 doza bölünmüş)', artis: '5–7 günde bir 0,25–0,5 mg', hedef: 'Tik/davranış: 0,05–0,075 mg/kg/gün · psikoz: 0,05–0,15 mg/kg/gün', maks: 'Çocuk: 0,15 mg/kg/gün · ergen: genellikle ≤ 6–10 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.5], [7, 1], [14, 1.5], [21, 2]], bant: [1, 3], tavan: 6,
      not: ['Damla formu küçük doz adımlarına olanak verir.', 'Genç erkeklerde akut distoni riski yüksektir; aileyi bilgilendirin, biperiden bulundurmayı düşünün.', '3 yaş altında kullanılmaz.']
    },
    eri: {
      bas: '0,5–5 mg ×2–3', artis: 'Yanıta göre', hedef: '5–10 mg/gün', maks: '20 mg/gün (oral)',
      birim: 'mg/gün', adim: [[0, 2], [3, 5], [10, 10]], bant: [5, 10], tavan: 20, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Kesilme diskinezisi ve rebound belirtiler açısından izleyin.', 'Antikolinerjik kullanılıyorsa antipsikotik kesildikten 1–2 hafta sonra kesin.'] },
    izlem: 'antipsikotik', izlemEk: [['EKG (QTc)', [1, 2, 0, 0, 1], 'Başlangıçta önerilir; yüksek doz ve parenteral kullanımda tekrarlayın.'], ['EPS, akatizi, diskinezi (AIMS)', [1, 'Her vizit', 1, 1, 1], 'Akut distoni ilk günlerde; AIMS 3–6 ayda bir.']],
    profil: { sed: 1, kilo: 1, eps: 3, prl: 3, qt: 2, ach: 0, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Akut distoni, parkinsonizm, akatizi', 'Geç diskinezi (uzun süreli kullanım)', 'Nöroleptik malign sendrom', 'QT uzaması, torsades de pointes (özellikle IV/yüksek doz)', 'Hiperprolaktinemi'],
    etkilesim: ['CYP2D6/3A4 inhibitörleri (fluoksetin, paroksetin) düzeyi artırır', 'Karbamazepin düzeyi yarıya düşürür', 'Lityum ile nörotoksisite bildirilmiştir', 'Diğer QT uzatan ilaçlarla kaçının'],
    oz: ['qt', 'd2', '2d6sub']
  },
  {
    id: 'paliperidon', ad: 'Paliperidon', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: 'Risperidonun aktif metaboliti (9-hidroksirisperidon); OROS uzatılmış salım. Karaciğer metabolizması minimaldir, böbrekle atılır.',
    t12: '~23 saat', t12s: 23, etki: '1–2 hafta', form: 'Uzatılmış salımlı tablet 3 / 6 / 9 mg',
    onay: [['Şizofreni', '≥ 12 yaş']],
    onayEri: [['Şizofreni'], ['Şizoaffektif bozukluk']],
    ped: {
      bas: '3 mg/gün (sabah)', artis: '≥ 5 gün arayla 3 mg', hedef: '3–6 mg/gün', maks: '< 51 kg: 6 mg/gün · ≥ 51 kg: 12 mg/gün',
      birim: 'mg/gün', adim: [[0, 3], [7, 6], [21, 9]], bant: [3, 6], tavan: 12,
      not: ['Başlangıç titrasyonu gerekmez. Tablet bütün yutulmalıdır.', 'Böbrek yetmezliğinde doz azaltın.']
    },
    eri: {
      bas: '6 mg/gün (sabah)', artis: '≥ 5 gün arayla 3 mg', hedef: '3–12 mg/gün', maks: '12 mg/gün',
      birim: 'mg/gün', adim: [[0, 6], [7, 9], [14, 12]], bant: [6, 12], tavan: 12, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 66], [28, 33], [42, 0]], not: ['3 mg basamaklarla azaltın.', 'Kesilme diskinezisi ve nüks açısından izleyin.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [2, 0, 1, 2, 2], 'Belirgin prolaktin artışı yapar; 3. ayda veya belirti varsa.'], ['Böbrek işlevi', [1, 0, 0, 0, 2], 'Doz ayarı için.']],
    profil: { sed: 1, kilo: 2, eps: 2, prl: 3, qt: 1, ach: 0, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Hiperprolaktinemi', 'EPS, akatizi, distoni', 'Kilo artışı', 'Taşikardi, somnolans', 'QT uzaması'],
    etkilesim: ['Karbamazepin düzeyi düşürür', 'Risperidon ile birlikte kullanılmaz (aynı etkin madde)', 'Valproat düzeyi artırabilir'],
    oz: ['d2', 'qt']
  },
  {
    id: 'ziprasidon', ad: 'Ziprasidon', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: { ped: 'D2 ve 5-HT2A antagonisti; 5-HT1A agonizmi. Kilo ve metabolik açıdan nötrdür; QT uzaması izlem gerektirir. FDA pediatrik onayı yoktur.', eri: 'D2 ve 5-HT2A antagonisti; 5-HT1A agonizmi. Kilo ve metabolik açıdan nötrdür; QT uzaması izlem gerektirir. Emilim için yemekle alınmalıdır.' },
    t12: '~7 saat', t12s: 7, etki: '1–2 hafta', form: 'Kapsül 20 / 40 / 60 / 80 mg',
    onay: [], onayNot: 'Bazı Avrupa ülkelerinde bipolar mani 10–17 yaş onaylı',
    onayEri: [['Şizofreni'], ['Bipolar I mani / karma dönem'], ['Bipolar sürdürüm', 'lityum/valproata ek']],
    ped: {
      bas: '20 mg/gün (yemekle)', artis: '2–3 günde bir 20 mg; günde 2 doza bölünür', hedef: '< 45 kg: 60–80 mg/gün · ≥ 45 kg: 80–160 mg/gün', maks: '< 45 kg: 80 mg/gün · ≥ 45 kg: 160 mg/gün',
      birim: 'mg/gün', adim: [[0, 20], [3, 40], [7, 60], [10, 80], [14, 120]], bant: [80, 160], tavan: 160,
      not: ['En az 500 kcal\'lik öğünle alınmalıdır; aç karna emilim yarıya düşer.', 'Başlamadan önce EKG, potasyum ve magnezyum.', 'Endikasyon dışı kullanım.']
    },
    eri: {
      bas: '20–40 mg ×2 (yemekle)', artis: '≥ 2 gün arayla', hedef: '80–160 mg/gün', maks: '160 mg/gün',
      birim: 'mg/gün', adim: [[0, 40], [2, 80], [7, 120], [14, 160]], bant: [80, 160], tavan: 160, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]], not: ['Kademeli azaltın; rebound belirtiler ve kesilme diskinezisi açısından izleyin.'] },
    izlem: 'antipsikotik', izlemEk: [['EKG (QTc)', [1, 1, 0, 0, 1], 'Başlangıçta, hedef doza ulaşınca ve yılda bir. QTc > 500 ms ise kesin.'], ['Potasyum, magnezyum', [1, 2, 0, 0, 2], 'Kusma/ishal, diüretik kullanımı, yeme bozukluğunda.']],
    profil: { sed: 1, kilo: 0, eps: 2, prl: 1, qt: 3, ach: 0, akt: 2, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Doza bağlı QT uzaması: konjenital uzun QT, yeni MI, dekompanse kalp yetmezliğinde kontrendike', 'Akatizi, aktivasyon, uykusuzluk veya somnolans', 'EPS, distoni', 'DRESS ve ağır deri reaksiyonları (nadir)'],
    etkilesim: ['Diğer QT uzatan ilaçlarla kontrendike', 'Karbamazepin düzeyi düşürür; ketokonazol artırır'],
    oz: ['qt', 'd2']
  },
  {
    id: 'lurasidon', ad: 'Lurasidon', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: { ped: 'D2, 5-HT2A ve 5-HT7 antagonisti; 5-HT1A parsiyel agonisti. Pediatrik bipolar depresyonda onaylı; metabolik profili elverişlidir.', eri: 'D2, 5-HT2A ve 5-HT7 antagonisti; 5-HT1A parsiyel agonisti. Bipolar depresyonda onaylı; metabolik profili elverişlidir. Emilim için en az 350 kcal\'lik yemekle alınmalıdır.' },
    t12: '~18 saat', t12s: 18, etki: '1–3 hafta', form: 'Tablet 20 / 40 / 80 mg',
    onay: [['Bipolar depresyon', '≥ 10 yaş'], ['Şizofreni', '≥ 13 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar depresyon']],
    ped: {
      bas: 'Bipolar depresyon: 20 mg/gün · şizofreni: 40 mg/gün', artis: '≥ 1 hafta arayla 20 mg', hedef: '20–40 mg/gün (bipolar depresyon) · 40–80 mg/gün (şizofreni)', maks: '80 mg/gün',
      birim: 'mg/gün', adim: [[0, 20], [7, 40], [21, 60]], bant: [20, 40], tavan: 80,
      not: ['En az 350 kcal\'lik öğünle (genellikle akşam yemeği) alınmalıdır.', 'Akatizi ve bulantı doza bağlıdır; yavaş artırın.']
    },
    eri: {
      bas: 'Şizofreni: 40 mg/gün · bipolar depresyon: 20 mg/gün', artis: '≥ 1 hafta arayla', hedef: '40–80 mg/gün', maks: 'Şizofreni: 160 mg · bipolar depresyon: 120 mg/gün',
      birim: 'mg/gün', adim: [[0, 40], [7, 80], [21, 120]], bant: [40, 80], tavan: 160, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 0]], not: ['Kademeli azaltın; nüks ve kesilme belirtileri açısından izleyin.'] },
    izlem: 'antipsikotik', profil: { sed: 2, kilo: 1, eps: 2, prl: 1, qt: 0, gis: 2, akt: 1, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Akatizi, somnolans', 'Bulantı, kusma', 'EPS', 'Prolaktin artışı (hafif–orta)'],
    etkilesim: ['Güçlü CYP3A4 inhibitörleri (ketokonazol, klaritromisin, ritonavir) ve indükleyicileri (karbamazepin, rifampisin) ile kontrendike', 'Orta düzey inhibitörlerle (diltiazem, eritromisin) dozu yarıya indirin', 'Greyfurt suyundan kaçının'],
    oz: ['d2']
  },
  {
    id: 'amisulpirid', ad: 'Amisülpirid', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik (benzamid)', grup: 'ap',
    mek: 'Seçici D2/D3 antagonisti. Düşük dozda presinaptik etkiyle negatif belirtilere, yüksek dozda pozitif belirtilere etkilidir. Karaciğerde metabolize olmaz, böbrekle atılır; prolaktini belirgin artırır.',
    t12: '~12 saat', t12s: 12, etki: '1–2 hafta; tam etki 4–6 hafta', form: 'Tablet 200 / 400 mg; oral solüsyon 100 mg/mL',
    onay: [], onayNot: 'Pediatrik onay yok · 15 yaş altında kontrendike, 15–18 yaşta önerilmez',
    onayEri: [['Şizofreni', 'Avrupa; ABD\'de bu endikasyonda onaysız']],
    ped: {
      bas: '50–100 mg/gün (≥ 15 yaş)', artis: '3–7 günde bir 50–100 mg', hedef: '200–600 mg/gün', maks: '800 mg/gün',
      birim: 'mg/gün', adim: [[0, 100], [5, 200], [12, 400]], bant: [200, 600], tavan: 800,
      not: ['Endikasyon dışı kullanım; ergenlerde veri sınırlıdır.', '400 mg üzerindeki dozlar ikiye bölünür.', 'Başlamadan önce böbrek işlevine ve EKG\'ye bakın.', 'Ergenlerde prolaktin artışı sık ve belirgindir: adet düzensizliği, galaktore, jinekomasti sorgulayın.']
    },
    eri: {
      bas: 'Akut psikoz: 400 mg/gün · negatif belirti: 50–100 mg/gün', artis: '3–7 günde bir 200 mg', hedef: 'Akut: 400–800 mg/gün · negatif belirti: 50–300 mg/gün', maks: '1200 mg/gün',
      birim: 'mg/gün', adim: [[0, 400], [4, 600], [10, 800]], bant: [400, 800], tavan: 1200, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede kesilme diskinezisi, bulantı, uykusuzluk ve nüks riski.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [1, 0, 1, 2, 2], 'Prolaktini en çok artıran antipsikotiklerdendir; başlangıçta ve 3. ayda bakın.'], ['Böbrek işlevi', [1, 0, 0, 0, 2], 'Doz kreatinin klirensine göre ayarlanır.'], ['EKG (QTc)', [1, 2, 0, 0, 2], 'Doza bağlı QT uzaması; başlangıçta önerilir.']],
    profil: { sed: 1, kilo: 1, eps: 2, prl: 3, qt: 2, ach: 0, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Belirgin hiperprolaktinemi (amenore, galaktore, jinekomasti, cinsel işlev bozukluğu)', 'Doza bağlı EPS ve akatizi', 'Doza bağlı QT uzaması', 'Uykusuzluk, anksiyete, ajitasyon', 'Nöroleptik malign sendrom'],
    etkilesim: ['QT uzatan ilaçlarla additif etki', 'Levodopa ve dopamin agonistleriyle karşılıklı antagonizma', 'CYP üzerinden etkileşimi yoktur', 'Lityum böbrek atılımıyla yarışabilir'],
    oz: ['d2', 'qt']
  },
  {
    id: 'klorpromazin', ad: 'Klorpromazin', sinif: 'ap', altSinif: 'Birinci kuşak antipsikotik (düşük potens)', grup: 'ap',
    mek: 'D2 antagonisti; güçlü antihistaminik, antikolinerjik ve alfa-1 bloke edici etkilidir. Sedasyonu belirgindir; akut ajitasyon ve ağır davranış sorunlarında kısa süreli kullanılır.',
    t12: '~30 saat (8–35 saat)', t12s: 30, etki: 'Sedasyon: 30–60 dakika · psikoz: 2–6 hafta', form: 'Tablet 25 / 100 mg; ampul 25 mg',
    onay: [['Ağır davranış sorunları', '1–12 yaş'], ['Psikoz', 'Ergen (erişkin dozu)']],
    onayEri: [['Şizofreni'], ['Bipolar mani'], ['Bulantı ve kusma'], ['İnatçı hıçkırık']],
    ped: {
      bas: '0,5 mg/kg/doz, 4–6 saatte bir (pratikte 10–25 mg ×2–3)', artis: '3–4 günde bir 10–25 mg/gün', hedef: 'Çocuk: 50–100 mg/gün · ergen psikoz: 100–400 mg/gün', maks: '5 yaş altı 40 mg/gün, 5–12 yaş 75 mg/gün (ağır yatan olguda 200 mg/gün\'e dek)',
      birim: 'mg/gün', adim: [[0, 25], [4, 50], [8, 75], [14, 100]], bant: [50, 100], tavan: 200,
      not: ['Altı aydan küçük bebeklerde kullanılmaz.', 'Günümüzde çocuklarda ilk seçenek değildir; sedasyon, hipotansiyon ve antikolinerjik etkiler sınırlayıcıdır.', 'İlk dozlardan sonra ortostatik hipotansiyon açısından kan basıncını ölçün.', 'Güneş koruyucu önerin (fotosensitivite).']
    },
    eri: {
      bas: '25 mg ×3', artis: '3–4 günde bir 25–50 mg/gün', hedef: '200–600 mg/gün', maks: '800–1000 mg/gün',
      birim: 'mg/gün', adim: [[0, 75], [4, 150], [8, 300], [14, 400]], bant: [200, 600], tavan: 800, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede kolinerjik rebound (bulantı, kusma, terleme, uykusuzluk) ve kesilme diskinezisi görülür.'] },
    izlem: 'antipsikotik', izlemEk: [['EKG (QTc)', [1, 2, 0, 0, 2], 'Başlangıçta önerilir; yüksek doz ve parenteral kullanımda tekrarlayın.'], ['Kan basıncı / nabız', [1, 'Her vizit', 1, 1, 1], 'Ortostatik hipotansiyon ve taşikardi.']],
    profil: { sed: 3, kilo: 2, eps: 2, prl: 2, qt: 2, ach: 3, kv: 3, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Belirgin sedasyon', 'Ortostatik hipotansiyon, taşikardi', 'Antikolinerjik etkiler (ağız kuruluğu, kabızlık, idrar retansiyonu)', 'Fotosensitivite, deride pigmentasyon', 'Nöbet eşiğinde düşme', 'Kolestatik sarılık, nadiren agranülositoz', 'EPS, geç diskinezi, nöroleptik malign sendrom'],
    etkilesim: ['Sedatifler ve alkolle additif sedasyon', 'Antihipertansiflerle additif hipotansiyon', 'QT uzatan ilaçlarla additif etki', 'CYP2D6 inhibitörüdür: trisiklik düzeyini artırabilir', 'Lityum ile nörotoksisite bildirilmiştir'],
    oz: ['d2', 'qt', 'nobet', 'antikol', '2d6sub']
  },
  {
    id: 'asenapin', ad: 'Asenapin', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik', grup: 'ap',
    mek: 'D2 ve 5-HT2A antagonisti; birçok serotonin reseptörüne bağlanır. Yalnızca dilaltı emilir: yutulursa biyoyararlanımı %2\'nin altına düşer. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: '~24 saat', t12s: 24, etki: 'Mani: 1 hafta · psikoz: 2–6 hafta', form: 'Dilaltı tablet 2,5 / 5 / 10 mg',
    onay: [['Bipolar mani / karma dönem', '≥ 10 yaş']],
    onayEri: [['Şizofreni'], ['Bipolar I mani / karma dönem']],
    ped: {
      bas: '2,5 mg ×2 dilaltı', artis: '3 gün sonra 5 mg ×2; 3 gün sonra gerekirse 10 mg ×2', hedef: '5–10 mg ×2', maks: '10 mg ×2 (20 mg/gün)',
      birim: 'mg/gün', adim: [[0, 5], [3, 10], [6, 20]], bant: [10, 20], tavan: 20,
      not: ['Tablet dil altında eritilir; çiğnenmez, yutulmaz. Sonraki 10 dakika yemek ve içmek yasaktır.', 'Titrasyon atlanırsa çocuklarda distoni riski artar.', 'Ağızda uyuşma ve tat bozukluğu sıktır; uyumu düşürür.', 'Pediatrik çalışmalarda 3 haftada belirgin kilo artışı görülmüştür.']
    },
    eri: {
      bas: 'Mani: 5–10 mg ×2 · şizofreni: 5 mg ×2', artis: '1 hafta sonra gerekirse 10 mg ×2', hedef: '10–20 mg/gün', maks: '20 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [7, 20]], bant: [10, 20], tavan: 20, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede rebound uykusuzluk ve belirti alevlenmesi olabilir.'] },
    izlem: 'antipsikotik', profil: { sed: 2, kilo: 2, eps: 2, prl: 1, qt: 1, ach: 0, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Somnolans, baş dönmesi', 'Ağızda uyuşma, tat bozukluğu', 'Kilo artışı ve metabolik değişiklikler', 'Akatizi, distoni', 'Ağır aşırı duyarlılık reaksiyonları (anjiyoödem) bildirilmiştir'],
    etkilesim: ['Fluvoksamin (CYP1A2) düzeyi artırır', 'Paroksetin düzeyini yaklaşık 2 kat artırır (CYP2D6 inhibisyonu)', 'Antihipertansiflerle additif hipotansiyon'],
    oz: ['d2', '1a2sub']
  },
  {
    id: 'brekspiprazol', ad: 'Brekspiprazol', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik (parsiyel agonist)', grup: 'ap',
    mek: 'D2 ve 5-HT1A parsiyel agonisti, 5-HT2A antagonisti. Aripiprazole göre içsel etkinliği daha düşüktür; akatizi ve uykusuzluk daha az, kilo artışı biraz daha fazladır. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: '~91 saat', t12s: 91, etki: '2–6 hafta', form: 'Tablet 0,25 / 0,5 / 1 / 2 / 3 / 4 mg',
    onay: [['Şizofreni', '≥ 13 yaş']],
    onayEri: [['Şizofreni'], ['Majör depresyonda ek tedavi'], ['Alzheimer demansına bağlı ajitasyon']],
    ped: {
      bas: '0,5 mg/gün (1–4. gün)', artis: '5–7. gün 1 mg; 8. günden itibaren 2 mg; sonra haftada 1 mg', hedef: '2–4 mg/gün', maks: '4 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.5], [4, 1], [7, 2], [14, 3]], bant: [2, 4], tavan: 4,
      not: ['Günde tek doz, yemekten bağımsız.', 'Kararlı duruma 10–12 günde ulaşır: doz değişikliğinin etkisini en az 2 hafta bekleyin.', 'Güçlü CYP2D6 veya CYP3A4 inhibitörü kullananlarda dozu yarıya indirin.']
    },
    eri: {
      bas: 'Şizofreni: 1 mg/gün · depresyonda ek tedavi: 0,5–1 mg/gün', artis: 'Şizofreni: 5. gün 2 mg, 8. gün 4 mg · depresyon: haftada bir', hedef: 'Şizofreni: 2–4 mg/gün · depresyon: 2 mg/gün', maks: 'Şizofreni: 4 mg/gün · depresyon: 3 mg/gün',
      birim: 'mg/gün', adim: [[0, 1], [4, 2], [7, 4]], bant: [2, 4], tavan: 4, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 1, sure: '2–4 hafta', adim: [[0, 100], [14, 50], [28, 0]], not: ['Uzun yarı ömür nedeniyle düzey haftalar içinde kendiliğinden düşer; 2–4 haftada azaltmak yeterlidir.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [0, 0, 2, 0, 0], 'Prolaktini belirgin artırmaz; rutin gerekmez.'], ['Dürtü kontrol sorgusu', [1, 1, 1, 1, 1], 'Kumar, aşırı yeme, alışveriş, hiperseksüalite.']],
    profil: { sed: 1, kilo: 2, eps: 1, prl: 0, qt: 0, akt: 2, kes: 1 },
    kutu: KUTU_AP,
    uyari: ['Akatizi, huzursuzluk', 'Kilo artışı', 'Baş ağrısı, somnolans', 'Dürtü kontrol bozuklukları (kumar, aşırı yeme)', 'Nöroleptik malign sendrom, geç diskinezi'],
    etkilesim: ['Güçlü CYP2D6 inhibitörleri (fluoksetin, paroksetin, bupropion) veya güçlü CYP3A4 inhibitörleri (klaritromisin, ketokonazol): dozu yarıya indirin', 'İkisi birlikte: dozu dörtte bire indirin', 'Güçlü CYP3A4 indükleyicileri (karbamazepin, rifampisin): dozu 1–2 haftada iki katına çıkarın'],
    oz: ['2d6sub', 'd2p', 'uzun']
  },
  {
    id: 'kariprazin', ad: 'Kariprazin', sinif: 'ap', altSinif: 'İkinci kuşak antipsikotik (parsiyel agonist)', grup: 'ap',
    mek: 'D3 seçiciliği yüksek D3/D2 parsiyel agonisti. Negatif belirtilere ve bipolar depresyona etkilidir. Aktif metaboliti haftalarca dolaşımda kalır: etki ve yan etkiler geç ortaya çıkar, geç geçer. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: '2–4 gün (aktif metabolit 1–3 hafta)', t12s: 168, etki: '2–6 hafta', form: 'Kapsül 1,5 / 3 / 4,5 / 6 mg',
    onay: [], onayNot: 'Pediatrik onay yok · endikasyon dışı',
    onayEri: [['Şizofreni'], ['Bipolar I mani / karma dönem'], ['Bipolar I depresyon'], ['Majör depresyonda ek tedavi']],
    ped: {
      bas: '1,5 mg/gün (ergen)', artis: '1–2 haftada bir 1,5 mg', hedef: '1,5–4,5 mg/gün', maks: '6 mg/gün',
      birim: 'mg/gün', adim: [[0, 1.5], [10, 3], [24, 4.5]], bant: [1.5, 4.5], tavan: 6,
      not: ['Endikasyon dışı kullanım; ergenlerde veri sınırlıdır.', 'Aktif metabolit haftalar içinde birikir: yan etkiler (özellikle akatizi) doz değişikliğinden haftalar sonra ortaya çıkabilir, bu nedenle yavaş titre edin.', 'Çocuk doğurma potansiyeli olan ergenlerde ilaç kesildikten sonra en az 10 hafta etkin kontrasepsiyon önerilir.']
    },
    eri: {
      bas: '1,5 mg/gün', artis: 'Şizofreni/mani: 2. gün 3 mg, sonra 1,5–3 mg basamaklarla · bipolar depresyon: 15. gün 3 mg', hedef: 'Şizofreni: 1,5–6 mg/gün · mani: 3–6 mg/gün · bipolar depresyon: 1,5–3 mg/gün', maks: '6 mg/gün',
      birim: 'mg/gün', adim: [[0, 1.5], [1, 3], [7, 4.5], [14, 6]], bant: [1.5, 6], tavan: 6, not: []
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 1, sure: 'Kademeli azaltım çoğu kez gerekmez', adim: [[0, 100], [14, 50], [28, 0]], not: ['Aktif metabolitin yarı ömrü 1–3 hafta olduğu için düzey kendiliğinden yavaşça düşer.', 'İlaç kesildikten sonra etki ve etkileşimler haftalarca sürer.'] },
    izlem: 'antipsikotik', izlemEk: [['Prolaktin', [0, 0, 2, 0, 0], 'Prolaktini artırmaz; rutin gerekmez.'], ['EPS, akatizi, diskinezi (AIMS)', [1, 'Her vizit', 1, 1, 1], 'Akatizi sık ve geç başlangıçlı olabilir.']],
    profil: { sed: 1, kilo: 1, eps: 2, prl: 0, qt: 0, akt: 3, gis: 1, kes: 1 },
    kutu: KUTU_AP,
    uyari: ['Akatizi, huzursuzluk, uykusuzluk', 'EPS', 'Bulantı, kusma', 'Geç ortaya çıkan yan etkiler (uzun yarı ömür)', 'Gebelikte kullanılmaz; kesildikten sonra 10 hafta kontrasepsiyon'],
    etkilesim: ['Güçlü CYP3A4 inhibitörleri (klaritromisin, ketokonazol, ritonavir): dozu yarıya indirin', 'CYP3A4 indükleyicileri (karbamazepin, rifampisin): birlikte kullanım önerilmez', 'Greyfurt suyundan kaçının'],
    oz: ['d2p', 'uzun']
  },
  {
    id: 'pimozid', ad: 'Pimozid', sinif: 'ap', altSinif: 'Birinci kuşak antipsikotik (yüksek potens)', grup: 'ap',
    mek: 'Seçici D2 antagonisti. Tourette bozukluğunda diğer tedavilere yanıtsız, ağır tiklerde kullanılır. QT aralığını uzatır ve ilaç etkileşimlerine çok duyarlıdır; bu nedenle ikinci basamak bir seçenektir.',
    t12: '~55 saat (çocukta ~66 saat)', t12s: 55, etki: '1–3 hafta', form: 'Tablet 1 / 2 / 4 mg',
    onay: [['Tourette bozukluğu (diğer tedavilere yanıtsız)', '≥ 12 yaş']],
    onayEri: [['Tourette bozukluğu', 'diğer tedavilere yanıtsız']],
    ped: {
      bas: '0,05 mg/kg gece (0,5–1 mg)', artis: 'Haftada bir 0,5–1 mg (en erken 3 günde bir)', hedef: '2–4 mg/gün', maks: '0,2 mg/kg/gün veya 10 mg/gün (hangisi düşükse)',
      birim: 'mg/gün', adim: [[0, 1], [7, 2], [14, 3], [21, 4]], bant: [2, 4], tavan: 10,
      not: ['Başlamadan önce EKG, potasyum ve magnezyum bakın; QTc 450 ms üzerindeyse başlamayın.', '0,05 mg/kg/gün üzerine çıkmadan önce CYP2D6 genotipi önerilir: yavaş metabolizörlerde bu doz aşılmaz ve doz en erken 14 günde bir artırılır.', 'Her doz artışından sonra EKG tekrarlayın; QTc 470 ms\'yi (çocuk) aşarsa veya başlangıca göre %25 uzarsa dozu azaltın.', 'Greyfurt suyu yasaktır.']
    },
    eri: {
      bas: '1–2 mg/gün', artis: 'Gün aşırı veya haftada bir 1–2 mg', hedef: '2–6 mg/gün', maks: '10 mg/gün (yavaş metabolizörde 4 mg/gün)',
      birim: 'mg/gün', adim: [[0, 2], [7, 4], [14, 6]], bant: [2, 6], tavan: 10, not: []
    },
    surdurum: SURDURUM_AP.concat(['Tiklerde 6–12 ay iyilikten sonra kademeli azaltım deneyin; tikler dalgalı seyirlidir.']),
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede kesilme diskinezisi ve tiklerde rebound artış görülür.'] },
    izlem: 'antipsikotik', izlemEk: [['EKG (QTc)', [1, 'Her doz artışı', 1, 1, 1], 'Başlangıçta, her doz artışından sonra ve yılda en az bir kez.'], ['Potasyum / magnezyum', [1, 0, 2, 0, 1], 'Düşük değerler QT riskini artırır; kusma, ishal veya diüretik kullanımında tekrarlayın.']],
    profil: { sed: 1, kilo: 1, eps: 3, prl: 2, qt: 3, ach: 1, kes: 2 },
    kutu: 'QT uzaması ve ani kardiyak ölüm bildirilmiştir: EKG izlemi zorunludur. Makrolid antibiyotikler, azol antifungaller, proteaz inhibitörleri ve birçok SSRI ile birlikte kullanılmaz.',
    uyari: ['QT uzaması, torsades de pointes', 'EPS, akatizi, akut distoni, geç diskinezi', { ped: 'Sedasyon, okul performansında düşme', eri: 'Sedasyon' }, 'Hiperprolaktinemi', 'Nöroleptik malign sendrom'],
    etkilesim: ['Güçlü CYP3A4 inhibitörleri (klaritromisin, eritromisin, azol antifungaller, proteaz inhibitörleri) ile kontrendike', 'Paroksetin, fluoksetin (güçlü CYP2D6 inhibitörleri) ile kontrendike', 'Sertralin, sitalopram, essitalopram ile kontrendike', 'QT uzatan tüm ilaçlarla kontrendike', 'Greyfurt suyu düzeyi artırır'],
    oz: ['d2', 'qt', '2d6sub']
  },
  {
    id: 'zuklopentiksol', ad: 'Zuklopentiksol', sinif: 'ap', altSinif: 'Birinci kuşak antipsikotik (tiyoksanten)', grup: 'ap',
    mek: 'D1 ve D2 antagonisti (tiyoksanten); 5-HT2, H1 ve alfa-1 blokajı. Sedatif etkisi belirgindir; ajitasyon, düşmanlık ve saldırganlığın eşlik ettiği psikozda tercih edilir. Uzun etkili dekanoat (depo) ve kısa etkili asetat formları da vardır.',
    t12: '~20 saat (oral)', t12s: 20, etki: 'Sedasyon: saatler · antipsikotik: 1–2 hafta', form: 'Film tablet 2 / 10 / 25 mg; oral damla 20 mg/mL (1 damla = 1 mg); asetat 50 mg/mL ve dekanoat 200 mg/mL ampul',
    onay: [], onayNot: 'ABD\'de onaysız · Türkiye ve Avrupa\'da çocuklarda önerilmez',
    onayEri: [['Akut ve kronik şizofreni, diğer psikozlar', 'Türkiye/Avrupa; ABD\'de onaysız'], ['Mani', 'Türkiye/Avrupa'], ['Mental retardasyonda ajitasyon ve davranış bozuklukları', 'Türkiye/Avrupa']],
    ped: {
      bas: 'Önerilmez: çocuklarda klinik deneyim yoktur (Türkiye KÜB\'ü).', artis: '—', hedef: '—', maks: '—',
      birim: 'mg/gün', adim: [],
      not: ['Ergende ajitasyonlu psikozda başka seçenekler (ör. risperidon, aripiprazol) önceliklidir.']
    },
    eri: {
      bas: 'Akut psikoz, şiddetli ajitasyon, mani: 10–20 mg/gün (orta–şiddetli tabloda 20 mg)', artis: '2–3 günde bir 10–20 mg', hedef: 'Akut: 10–50 mg/gün (gerekirse 75 mg ve üzeri) · kronik idame: 20–40 mg/gün', maks: '150 mg/gün; tek seferde en çok 40 mg',
      birim: 'mg/gün', adim: [[0, 20], [3, 30], [6, 40], [9, 50]], bant: [20, 50], tavan: 150,
      not: ['İdame dozu genellikle tek doz olarak yatmadan önce verilir.', 'Mental retardasyonda ajitasyon: 6–20 mg/gün, gerekirse 25–40 mg.', 'Yaşlıda doz aralığının alt sınırı.', 'Uzun süreli tedavide uyum sorunu varsa dekanoat (depo) formuna geçilebilir.']
    },
    surdurum: SURDURUM_AP,
    kesme: { risk: 2, sure: '2–4 hafta veya daha uzun', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Kesilme diskinezisi, rebound psikoz ve kolinerjik rebound açısından izleyin.', 'Antikolinerjik kullanılıyorsa antipsikotik kesildikten 1–2 hafta sonra kesin.'] },
    izlem: 'antipsikotik', izlemEk: [['EPS, akatizi, diskinezi (AIMS)', [1, 'Her vizit', 1, 1, 1], 'Ekstrapiramidal yan etkiler sıktır; AIMS 3–6 ayda bir.']],
    profil: { sed: 3, kilo: 2, eps: 3, prl: 3, qt: 1, ach: 1, kes: 2 },
    kutu: KUTU_AP,
    uyari: ['Belirgin sedasyon', 'Akut distoni, parkinsonizm, akatizi; geç diskinezi', 'Hiperprolaktinemi', 'Ortostatik hipotansiyon', 'Nöroleptik malign sendrom', 'QT uzaması (doza bağlı)'],
    etkilesim: ['CYP2D6 inhibitörleri (fluoksetin, paroksetin) düzeyi artırır', 'Alkol ve diğer sedatiflerle additif sedasyon', 'Levodopa ve dopamin agonistlerinin etkisini azaltır', 'QT uzatan ilaçlarla dikkat'],
    oz: ['d2', '2d6sub', 'antikol']
  }
  );
})();
