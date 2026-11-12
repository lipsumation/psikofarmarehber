/* DEHB ilaçları */
(function () {
  var SURDURUM_DEHB = [
    { ped: 'Doz optimizasyonu: her basamakta aile ve öğretmen ölçeği ile etkinlik ve yan etkiyi birlikte değerlendirin.', eri: 'Doz optimizasyonu: her basamakta öz bildirim ölçeği (± yakın bildirimi) ile etkinlik ve yan etkiyi birlikte değerlendirin.' },
    { ped: 'Stabil dönemde 3–6 ayda bir boy, kilo, kan basıncı ve nabız.', eri: 'Stabil dönemde 3–6 ayda bir kilo, kan basıncı ve nabız.' },
    'Yılda en az bir kez tedavi gerekliliğini gözden geçirin; uygun hastada gözetimli ilaçsız dönem deneyin.',
    { ped: 'Büyüme yavaşlaması veya belirgin iştah kaybında doz azaltımı, zamanlama değişikliği veya hafta sonu/tatil arası düşünün.', eri: 'Belirgin iştah veya kilo kaybında doz azaltımı ya da zamanlama değişikliği düşünün.' }
  ];

  window.ILACLAR.push(
  {
    id: 'metilfenidat', ad: 'Metilfenidat', sinif: 'dehb', altSinif: 'Psikostimulan', grup: 'stimulan',
    mek: { ped: 'Dopamin ve noradrenalin geri alım inhibitörü. Okul çağı çocuk ve ergenlerde DEHB\'nin ilk basamak ilaç tedavisi; etki aynı gün başlar.', eri: 'Dopamin ve noradrenalin geri alım inhibitörü. Erişkin DEHB\'de de ilk basamak ilaç tedavilerindendir; etki aynı gün başlar. Uzun etkili formların kötüye kullanım riski daha düşüktür.' },
    t12: '2–4 saat (etki süresi forma göre 3–12 saat)', t12s: 3, etki: '30–60 dakika; doz optimizasyonu 2–4 hafta', form: 'Kısa etkili tablet 10 mg · değiştirilmiş salımlı kapsül 10 / 20 / 30 / 40 mg · OROS tablet 18 / 27 / 36 / 54 mg',
    onay: [['DEHB', '≥ 6 yaş']],
    onayEri: [['DEHB', 'erişkinde onaylı formlar, ör. OROS'], ['Narkolepsi', 'kısa etkili form']],
    sureGrafik: [
      { ad: 'Kısa etkili (IR)', saat: 4, not: 'Günde 2–3 doz' },
      { ad: 'Değiştirilmiş salımlı (MR) kapsül', saat: 8, not: 'Sabah tek doz; kapsül açılıp yiyeceğe serpilebilir' },
      { ad: 'OROS tablet', saat: 12, not: 'Sabah tek doz; bütün yutulmalı' }
    ],
    ped: {
      bas: 'OROS: 18 mg sabah · MR: 10 mg sabah · IR: 5 mg ×1–2', artis: 'Haftada bir: OROS 18 mg (9 mg ara basamak 27 mg ile), MR 10 mg, IR 5–10 mg', hedef: '0,3–1 mg/kg/gün (IR eşdeğeri); yanıta göre',
      maks: 'OROS: 54 mg (6–12 yaş), 72 mg (≥ 13 yaş) · IR/MR: 60 mg/gün',
      birim: 'mg/gün (OROS)', adim: [[0, 18], [7, 27], [14, 36], [21, 54]], bant: [18, 54], tavan: 72,
      not: [
        'Okul öncesi (4–5 yaş): endikasyon dışı; önce ebeveyn eğitimi. Gerekirse IR 2,5 mg ile başlayıp çok yavaş titre edin; yan etki duyarlılığı yüksektir.',
        'Eşdeğerlik: OROS 18 mg ≈ IR 5 mg ×3; OROS 36 mg ≈ IR 10 mg ×3.',
        'Son dozu saat 16–17\'den sonra vermeyin (uykusuzluk). İştah için ilacı kahvaltıyla/sonrasında verin.',
        'Etki bitiminde rebound irritabilite olursa uzun etkili forma geçin veya öğleden sonra küçük IR dozu ekleyin.'
      ]
    },
    eri: {
      bas: 'OROS: 18–36 mg sabah · MR: 10–20 mg', artis: 'Haftada bir 18 mg (OROS)', hedef: '36–72 mg/gün (OROS)', maks: '72 mg/gün (OROS); IR/MR 60–80 mg/gün',
      birim: 'mg/gün (OROS)', adim: [[0, 18], [7, 36], [14, 54], [21, 72]], bant: [36, 72], tavan: 72, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]],
      not: ['Doğrudan kesilebilir; yüksek dozda uzun süreli kullanım sonrası birkaç gün yorgunluk, iştah artışı, disfori görülebilir.', { ped: 'İlaçsız dönem denemesini okul döneminin sakin bir zamanında, öğretmen geri bildirimi alarak yapın.', eri: 'İlaçsız dönem denemesini iş veya akademik yükün görece az olduğu bir dönemde, yakınlarından geri bildirim alarak yapın.' }] },
    izlem: 'stimulan', profil: { sed: 0, kilo: 0, gis: 1, akt: 3, kv: 2, istah: 3, kes: 1 },
    kutu: { ped: 'Kötüye kullanım ve bağımlılık potansiyeli: madde kullanım öyküsünü sorgulayın; ergenlerde ilacın başkasına verilmesi açısından uyarın.', eri: 'Kötüye kullanım, yanlış kullanım ve bağımlılık potansiyeli: madde kullanım öyküsünü sorgulayın; ilacın başkasına verilmesine karşı uyarın, reçete miktarını takip edin.' },
    uyari: [{ ped: 'İştah azalması, kilo kaybı, büyüme hızında hafif yavaşlama', eri: 'İştah azalması, kilo kaybı' }, 'Uykuya dalma güçlüğü', 'Kan basıncı ve nabız artışı; yapısal kalp hastalığı/aritmide kaçının', 'Tik, irritabilite, anksiyete, nadiren psikotik/manik belirtiler', 'Priapizm, periferik vaskülopati (Raynaud) – nadir'],
    etkilesim: ['MAOİ ile kontrendike (14 gün ara)', 'TCA, SSRI, antiepileptik (fenitoin, fenobarbital) ve varfarin düzeylerini artırabilir', 'Klonidin/guanfasin ile birlikte kullanımda KB ve nabız izlenmeli'],
    oz: ['stim']
  },
  {
    id: 'lisdeksamfetamin', ad: 'Lisdeksamfetamin', sinif: 'dehb', altSinif: 'Psikostimulan (ön ilaç)', grup: 'stimulan',
    mek: 'Kanda d-amfetamine dönüşen ön ilaç; dopamin ve noradrenalin salınımını artırır. Etki süresi 12–14 saattir. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: 'Ön ilaç < 1 saat; d-amfetamin 10–12 saat', t12s: 11, etki: '1–2 saat', form: 'Kapsül 20 / 30 / 40 / 50 / 60 / 70 mg',
    onay: [['DEHB', '≥ 6 yaş']],
    onayEri: [['DEHB'], ['Tıkınırcasına yeme bozukluğu', 'orta–ağır']],
    ped: {
      bas: '20–30 mg sabah', artis: 'Haftada bir 10–20 mg', hedef: '30–50 mg/gün', maks: '70 mg/gün',
      birim: 'mg/gün', adim: [[0, 30], [7, 40], [14, 50], [21, 60]], bant: [30, 50], tavan: 70,
      not: ['Genellikle metilfenidata yetersiz yanıt veya intolerans sonrası ikinci basamak.', 'Kapsül açılıp suya/yoğurda karıştırılabilir.', 'İştah ve uyku üzerine etkisi metilfenidata göre daha uzun sürebilir.']
    },
    eri: {
      bas: '30 mg sabah', artis: 'Haftada bir 10–20 mg', hedef: '30–70 mg/gün', maks: '70 mg/gün',
      birim: 'mg/gün', adim: [[0, 30], [7, 50], [14, 70]], bant: [30, 70], tavan: 70, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım genellikle gerekmez', adim: [[0, 100], [7, 0]], not: ['Uzun süreli yüksek dozdan sonra birkaç günlük yorgunluk, uyku artışı, disfori olabilir; gerekirse 1–2 haftada azaltın.'] },
    izlem: 'stimulan', profil: { sed: 0, kilo: 0, gis: 1, akt: 3, kv: 2, istah: 3, kes: 1 },
    kutu: 'Kötüye kullanım ve bağımlılık potansiyeli yüksektir; madde kullanım öyküsünü sorgulayın.',
    uyari: [{ ped: 'İştah azalması, kilo kaybı, büyüme yavaşlaması', eri: 'İştah azalması, kilo kaybı' }, 'Uykusuzluk, irritabilite', 'Kan basıncı ve nabız artışı; ciddi kardiyak hastalıkta kontrendike', 'Psikotik/manik belirtiler, tik'],
    etkilesim: ['MAOİ ile kontrendike', 'Serotonerjik ilaçlarla serotonin sendromu riski', 'İdrarı asitleştiren/alkalileştiren ajanlar düzeyi değiştirir', 'CYP2D6 inhibitörleri amfetamin maruziyetini artırabilir'],
    oz: ['stim', 'sero']
  },
  {
    id: 'atomoksetin', ad: 'Atomoksetin', sinif: 'dehb', altSinif: 'Noradrenalin geri alım inhibitörü', grup: 'nonstim',
    mek: 'Seçici presinaptik noradrenalin geri alım inhibitörü. Kötüye kullanım potansiyeli yoktur; tik, anksiyete veya madde kullanımı eş tanısında tercih edilebilir. 24 saat etki sağlar.',
    t12: '~5 saat (CYP2D6 zayıf metabolizör: ~21 saat)', t12s: 5, etki: '2–4 hafta; tam etki 6–12 hafta', form: 'Kapsül 10 / 18 / 25 / 40 / 60 / 80 mg; oral solüsyon 4 mg/mL',
    onay: [['DEHB', '≥ 6 yaş']],
    onayEri: [['DEHB']],
    ped: {
      bas: '≤ 70 kg: 0,5 mg/kg/gün · > 70 kg: 40 mg/gün', artis: 'En az 3 gün (pratikte 1–2 hafta) sonra hedef doza', hedef: '≤ 70 kg: 1,2 mg/kg/gün · > 70 kg: 80 mg/gün', maks: '1,4 mg/kg/gün veya 100 mg/gün (hangisi düşükse)',
      birim: 'mg/kg/gün', adim: [[0, 0.5], [7, 0.8], [14, 1.2]], bant: [1.2, 1.4], tavan: 1.4,
      not: [
        'Tek sabah dozu veya sabah–akşamüstü ikiye bölünmüş; bulantı/sedasyonda akşam verin ya da bölün.',
        'Güçlü CYP2D6 inhibitörü (fluoksetin, paroksetin) kullananlarda 0,5 mg/kg ile başlayın; 4 hafta sonra yanıt yoksa 1,2 mg/kg\'a çıkın.',
        'Kapsül açılmaz (göz tahrişi). Aileyi etkinin haftalar içinde geleceği konusunda bilgilendirin.'
      ]
    },
    eri: {
      bas: '40 mg/gün', artis: '≥ 3 gün sonra 80 mg; 2–4 hafta sonra gerekirse 100 mg', hedef: '80 mg/gün', maks: '100 mg/gün',
      birim: 'mg/gün', adim: [[0, 40], [7, 80], [35, 100]], bant: [80, 100], tavan: 100, not: []
    },
    surdurum: SURDURUM_DEHB.concat(['Yeterli dozda 6–8 hafta sonunda yanıt yoksa ilacı değiştirin.']),
    kesme: { risk: 1, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Doğrudan kesilebilir; kesilme sendromu tanımlanmamıştır.', 'Belirtilerin geri dönüşü günler–haftalar içinde yavaş olur.'] },
    izlem: 'atomoksetin', profil: { sed: 2, kilo: 0, gis: 2, akt: 1, kv: 2, istah: 2, kes: 0 },
    kutu: { ped: 'Kara kutu uyarısı: çocuk ve ergenlerde intihar düşüncesinde artış. Özellikle ilk aylarda ve doz değişimlerinde yakın izleyin.', eri: 'Kara kutu uyarısı (çocuk ve ergenler): intihar düşüncesinde artış. Erişkin çalışmalarında bu sinyal gösterilmemiştir; yine de ilk aylarda duygudurum değişikliklerini izleyin.' },
    uyari: ['Nadir ağır karaciğer hasarı: sarılık, koyu idrar, kaşıntı, sağ üst kadran ağrısında ilacı kesin ve yeniden başlamayın', 'Kan basıncı ve nabız artışı', 'Bulantı, karın ağrısı, iştah azalması, somnolans', 'İrritabilite, duygudurum dalgalanması; nadiren psikotik/manik belirtiler', 'İdrar retansiyonu, priapizm (nadir)'],
    etkilesim: ['Güçlü CYP2D6 inhibitörleri (fluoksetin, paroksetin, bupropion) düzeyi 6–8 kat artırabilir', 'MAOİ ile kontrendike', 'Salbutamol ve diğer beta-2 agonistlerle kardiyovasküler etki artar', 'Dar açılı glokom ve feokromositomada kontrendike'],
    oz: ['2d6sub']
  },
  {
    id: 'guanfasin', ad: 'Guanfasin XR', sinif: 'dehb', altSinif: 'Alfa-2A agonisti', grup: 'alfa2',
    mek: 'Seçici alfa-2A adrenerjik agonist; prefrontal noradrenerjik iletimi güçlendirir. Stimulanlara yanıtsızlık/intoleransta veya ek tedavi olarak; tik, uyku sorunu ve emosyonel düzensizlik eş tanısında yararlı.',
    t12: '~17 saat', t12s: 17, etki: '1–3 hafta', form: 'Uzatılmış salımlı tablet 1 / 2 / 3 / 4 mg',
    onay: [['DEHB', '6–17 yaş']],
    onayEri: [], onayEriNot: 'Erişkin DEHB\'de onay yok · endikasyon dışı (anlık salımlı form hipertansiyonda onaylı)',
    ped: {
      bas: '1 mg/gün (sabah veya akşam)', artis: 'Haftada en fazla 1 mg', hedef: '0,05–0,12 mg/kg/gün', maks: '6–12 yaş: 4 mg/gün · 13–17 yaş: 7 mg/gün (kiloya göre)',
      birim: 'mg/gün', adim: [[0, 1], [7, 2], [14, 3], [21, 4]], bant: [2, 4], tavan: 7,
      not: ['Tablet bütün yutulmalı; ezilmez, çiğnenmez. Yüksek yağlı öğünle alınmamalı (emilim artar).', 'Sedasyon belirginse akşam dozuna geçin.', 'Doz atlanmamalı: iki veya daha fazla ardışık doz atlandıysa yeniden titrasyon düşünün.']
    },
    eri: {
      bas: '1 mg/gün', artis: 'Haftada 1 mg', hedef: '2–4 mg/gün', maks: '7 mg/gün',
      birim: 'mg/gün', adim: [[0, 1], [7, 2], [14, 3], [21, 4]], bant: [2, 4], tavan: 7, not: ['Erişkin DEHB\'de kullanımı çoğu ülkede endikasyon dışıdır.']
    },
    surdurum: SURDURUM_DEHB.concat(['İlk yıl 3 ayda bir, sonrasında 6 ayda bir KB, nabız, somnolans ve kilo değerlendirin.']),
    kesme: { risk: 3, sure: 'Her 3–7 günde en fazla 1 mg azaltın', adim: [[0, 100], [5, 75], [10, 50], [15, 25], [20, 0]],
      not: ['Ani kesme rebound hipertansiyon ve taşikardiye yol açabilir; hipertansif ensefalopati bildirilmiştir.', 'Azaltım sırasında ve kestikten sonra kan basıncı ve nabzı ölçün.', { ped: 'Aileyi ilacın ani bırakılmaması konusunda yazılı/sözlü uyarın.', eri: 'Hastayı ilacın ani bırakılmaması konusunda yazılı/sözlü uyarın.' }] },
    izlem: 'alfa2', profil: { sed: 3, kilo: 1, gis: 1, akt: 0, kv: 3, qt: 1, kes: 3 },
    uyari: ['Somnolans ve sedasyon (özellikle ilk haftalar)', 'Hipotansiyon, bradikardi, senkop', 'Kilo artışı', 'Ani kesmede rebound hipertansiyon'],
    etkilesim: ['Güçlü CYP3A4 inhibitörleri (ketokonazol, klaritromisin): dozu yarıya indirin', 'CYP3A4 indükleyicileri (karbamazepin, rifampisin): doz artışı gerekebilir', 'Valproat düzeyini artırabilir', 'Diğer antihipertansif ve sedatiflerle additif etki'],
    oz: ['alfa2']
  },
  {
    id: 'klonidin', ad: 'Klonidin', sinif: 'dehb', altSinif: 'Alfa-2 agonisti', grup: 'alfa2',
    mek: 'Seçici olmayan alfa-2 adrenerjik agonist. DEHB, tik bozuklukları, uykuya dalma güçlüğü ve aşırı uyarılmışlıkta kullanılır. Türkiye\'de erişimi sınırlı olabilir; temin koşullarını kontrol ediniz.',
    t12: '6–20 saat (çocukta daha kısa)', t12s: 12, etki: 'Sedasyon: aynı gün · DEHB: 2–4 hafta', form: 'Tablet 0,1 mg (bazı ülkelerde uzatılmış salımlı 0,1 mg)',
    onay: [['DEHB (uzatılmış salımlı form)', '6–17 yaş']],
    onayEri: [], onayEriNot: 'Psikiyatrik endikasyonda erişkin onayı yok (hipertansiyonda onaylı)',
    ped: {
      bas: '0,05 mg (gece)', artis: '3–7 günde bir 0,05 mg; günde 2–4 doza bölünür', hedef: '0,1–0,3 mg/gün (3–5 µg/kg/gün)', maks: '27–40 kg: 0,2 mg · 40–45 kg: 0,3 mg · > 45 kg: 0,4 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.05], [7, 0.1], [14, 0.15], [21, 0.2]], bant: [0.1, 0.3], tavan: 0.4,
      not: ['Kısa etkili form sedasyon ve KB dalgalanması nedeniyle bölünmüş dozda verilir.', 'Uyku için tek gece dozu 0,05–0,1 mg.', 'Aşırı dozda bradikardi, hipotansiyon, solunum depresyonu: evde güvenli saklama.']
    },
    eri: {
      bas: '0,1 mg (gece)', artis: 'Haftada 0,1 mg', hedef: '0,2–0,4 mg/gün', maks: '0,4 mg/gün (DEHB)',
      birim: 'mg/gün', adim: [[0, 0.1], [7, 0.2], [14, 0.3]], bant: [0.2, 0.4], tavan: 0.4, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 3, sure: 'Her 3–7 günde en fazla 0,05–0,1 mg azaltın', adim: [[0, 100], [5, 75], [10, 50], [15, 25], [20, 0]],
      not: ['Ani kesme rebound hipertansiyon, taşikardi, ajitasyon ve baş ağrısı yapar (guanfasinden daha belirgin).', 'Azaltım boyunca kan basıncı ve nabız izleyin.', 'Beta bloker kullananlarda önce beta blokeri kesin.'] },
    izlem: 'alfa2', profil: { sed: 3, kilo: 0, gis: 1, akt: 0, kv: 3, qt: 0, kes: 3 },
    uyari: ['Belirgin sedasyon', 'Hipotansiyon, bradikardi, senkop', 'Ağız kuruluğu, kabızlık', 'Depresif duygudurum (nadir)'],
    etkilesim: ['Diğer antihipertansifler, beta blokerler, digoksin: bradikardi/AV blok', 'Sedatifler ve alkolle additif etki', 'TCA\'lar antihipertansif etkiyi azaltabilir'],
    ozel: [{
      baslik: 'Opioid yoksunluğunda kullanım', etiket: 'endikasyon dışı', onaysiz: true,
      uyari: { ped: 'Ergen için yerleşik bir şema yoktur: erişkin şeması düşük dozlarla (0,05–0,1 mg) ve kiloya göre uyarlanır. 15 yaş üstünde buprenorfin/nalokson tercih edilir.', eri: null },
      giris: 'Otonomik yoksunluk belirtilerini (terleme, taşikardi, huzursuzluk, burun akıntısı, kramp, ishal) azaltır; istek, kas ağrısı ve uykusuzluk üzerine etkisi sınırlıdır. Opioid agonist tedavisi (buprenorfin/nalokson) yoksunlukta ve nüksü önlemede daha etkilidir; klonidin agonist tedavi istenmediğinde ya da naltrekson öncesi arınmada kullanılır.',
      tablo: { bas: ['Basamak', 'Doz', 'Not'], satir: [
        ['Test dozu', '0,1 mg ağızdan', 'Kan basıncı ve nabız 1 saat sonra ölçülür.'],
        ['Yoksunluk dönemi', '0,1–0,2 mg, 4–6 saatte bir, belirtilere göre (genellikle 3–5 gün; metadonda daha uzun)', 'Günde en çok 1,2 mg. Her dozdan önce ölçüm: sistolik KB < 90 mmHg ya da nabız < 55/dk ise dozu atlayın.'],
        ['Azaltma', 'Günlük doz 2–4 günde azaltılarak kesilir', 'Ani kesme rebound hipertansiyon ve ajitasyon yapar.']
      ] },
      not: ['Eşlik eden belirtiler için kısa süreli semptomatik ilaçlar: ishalde loperamid, ağrıda parasetamol ya da NSAİİ, bulantıda antiemetik, uykusuzlukta kısa süreli hipnotik.', 'Yoksunluk şiddetini klinik ölçekle (COWS) izleyin.', 'Türkiye\'de ruhsatlı oral klonidin ürünü yoktur; ABD\'de bu amaçla onaylı alfa-2 agonist lofeksidindir.'],
      ilgili: ['buprenorfin', 'naltrekson', 'nalokson']
    }],
    oz: ['alfa2']
  },
  {
    id: 'deksmetilfenidat', ad: 'Deksmetilfenidat', sinif: 'dehb', altSinif: 'Psikostimulan', grup: 'stimulan',
    mek: 'Metilfenidatın etkin d-treo enantiyomeri; dopamin ve noradrenalin geri alım inhibitörü. Metilfenidatın yarı dozunda eşdeğer etki sağlar. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: '2–3 saat (uzun salımlı formda etki 10–12 saat)', t12s: 2.5, etki: '30–60 dakika; doz optimizasyonu 2–4 hafta', form: 'Kısa etkili tablet 2,5 / 5 / 10 mg · uzun salımlı kapsül 5–40 mg',
    onay: [['DEHB', '≥ 6 yaş']],
    onayEri: [['DEHB']],
    sureGrafik: [
      { ad: 'Kısa etkili (IR)', saat: 5, not: 'Günde 2 doz, en az 4 saat arayla' },
      { ad: 'Uzun salımlı (XR) kapsül', saat: 11, not: 'Sabah tek doz; kapsül açılıp yiyeceğe serpilebilir' }
    ],
    ped: {
      bas: 'XR: 5 mg sabah · IR: 2,5 mg ×2', artis: 'Haftada bir 5 mg (XR) veya 2,5–5 mg (IR)', hedef: '10–20 mg/gün', maks: 'XR: 30 mg/gün · IR: 20 mg/gün',
      birim: 'mg/gün (XR)', adim: [[0, 5], [7, 10], [14, 15], [21, 20]], bant: [10, 20], tavan: 30,
      not: ['Metilfenidattan geçişte başlangıç dozu, kullanılan metilfenidat dozunun yarısıdır.', 'Yan etki profili metilfenidatla aynıdır; iştah ve uyku için aynı önlemler geçerlidir.', 'Okul öncesi yaşta veri yoktur.']
    },
    eri: {
      bas: 'XR: 10 mg sabah', artis: 'Haftada bir 10 mg', hedef: '20–40 mg/gün', maks: '40 mg/gün (XR)',
      birim: 'mg/gün (XR)', adim: [[0, 10], [7, 20], [14, 30], [21, 40]], bant: [20, 40], tavan: 40, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Doğrudan kesilebilir; uzun süreli yüksek dozdan sonra birkaç gün yorgunluk ve iştah artışı olabilir.'] },
    izlem: 'stimulan', profil: { sed: 0, kilo: 0, gis: 1, akt: 3, kv: 2, istah: 3, kes: 1 },
    kutu: { ped: 'Kötüye kullanım ve bağımlılık potansiyeli: madde kullanım öyküsünü sorgulayın; ergenlerde ilacın başkasına verilmesi açısından uyarın.', eri: 'Kötüye kullanım, yanlış kullanım ve bağımlılık potansiyeli: madde kullanım öyküsünü sorgulayın; ilacın başkasına verilmesine karşı uyarın, reçete miktarını takip edin.' },
    uyari: [{ ped: 'İştah azalması, kilo kaybı, büyüme hızında hafif yavaşlama', eri: 'İştah azalması, kilo kaybı' }, 'Uykuya dalma güçlüğü', 'Kan basıncı ve nabız artışı; yapısal kalp hastalığı/aritmide kaçının', 'Tik, irritabilite, anksiyete, nadiren psikotik/manik belirtiler'],
    etkilesim: ['MAOİ ile kontrendike (14 gün ara)', 'Metilfenidat ile birlikte kullanılmaz (aynı etkin madde)', 'Klonidin/guanfasin ile birlikte kullanımda KB ve nabız izlenmeli'],
    oz: ['stim']
  },
  {
    id: 'amfetamin', ad: 'Amfetamin (karışık tuzlar)', sinif: 'dehb', altSinif: 'Psikostimulan', grup: 'stimulan',
    mek: 'd- ve l-amfetamin tuzlarının karışımı; dopamin ve noradrenalin salınımını artırır, geri alımını engeller. Türkiye\'de ruhsatlı değildir; yurt dışından gelen hastalarda karşılaşılır.',
    t12: 'Çocukta 9 saat; ergen ve erişkinde 10–13 saat', t12s: 10, etki: '30–60 dakika', form: 'Kısa etkili tablet 5–30 mg · uzun salımlı kapsül 5–30 mg',
    onay: [['DEHB (kısa etkili form)', '≥ 3 yaş'], ['DEHB (uzun salımlı form)', '≥ 6 yaş']],
    onayEri: [['DEHB'], ['Narkolepsi', 'kısa etkili form']],
    sureGrafik: [
      { ad: 'Kısa etkili (IR)', saat: 5, not: 'Günde 1–3 doz, 4–6 saat arayla' },
      { ad: 'Uzun salımlı (XR) kapsül', saat: 11, not: 'Sabah tek doz; kapsül açılıp yiyeceğe serpilebilir' }
    ],
    ped: {
      bas: '3–5 yaş: IR 2,5 mg/gün · ≥ 6 yaş: IR 5 mg ×1–2 veya XR 5–10 mg sabah', artis: 'Haftada bir 2,5 mg (3–5 yaş) veya 5–10 mg (≥ 6 yaş)', hedef: '10–30 mg/gün', maks: 'XR: 30 mg/gün (6–12 yaş), 20 mg/gün (13–17 yaş için önerilen) · IR: 40 mg/gün',
      birim: 'mg/gün (XR)', adim: [[0, 10], [7, 15], [14, 20], [21, 30]], bant: [10, 30], tavan: 30,
      not: ['İştah ve uyku üzerine etkisi metilfenidattan daha belirgin ve uzun olabilir.', 'Asitli içecekler (meyve suyu, C vitamini) emilimi azaltır: ilaçtan bir saat önce ve sonra vermeyin.', 'Lisdeksamfetaminden veya lisdeksamfetamine geçişte kesin bir doz eşdeğerliği yoktur; düşük dozdan başlayın.']
    },
    eri: {
      bas: 'XR: 20 mg sabah', artis: 'Haftada bir 10 mg', hedef: '20–40 mg/gün', maks: '60 mg/gün',
      birim: 'mg/gün (XR)', adim: [[0, 20], [7, 30], [14, 40]], bant: [20, 40], tavan: 60, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım genellikle gerekmez', adim: [[0, 100], [7, 0]], not: ['Uzun süreli yüksek dozdan sonra birkaç günlük yorgunluk, uyku artışı, disfori olabilir; gerekirse 1–2 haftada azaltın.'] },
    izlem: 'stimulan', profil: { sed: 0, kilo: 0, gis: 1, akt: 3, kv: 2, istah: 3, kes: 1 },
    kutu: 'Kötüye kullanım ve bağımlılık potansiyeli yüksektir; madde kullanım öyküsünü sorgulayın.',
    uyari: [{ ped: 'İştah azalması, kilo kaybı, büyüme yavaşlaması', eri: 'İştah azalması, kilo kaybı' }, 'Uykusuzluk, irritabilite', 'Kan basıncı ve nabız artışı; ciddi kardiyak hastalıkta kontrendike', 'Psikotik/manik belirtiler, tik'],
    etkilesim: ['MAOİ ile kontrendike', 'Serotonerjik ilaçlarla serotonin sendromu riski', 'İdrarı asitleştiren/alkalileştiren ajanlar düzeyi değiştirir', 'CYP2D6 inhibitörleri amfetamin maruziyetini artırabilir'],
    oz: ['stim', 'sero']
  },
  {
    id: 'viloksazin', ad: 'Viloksazin', sinif: 'dehb', altSinif: 'Noradrenalin geri alım inhibitörü', grup: 'nonstim',
    mek: 'Seçici noradrenalin geri alım inhibitörü; serotonerjik etkisi de vardır. Stimulan değildir, kötüye kullanım potansiyeli yoktur. Güçlü CYP1A2 inhibitörüdür. Türkiye\'de ruhsat ve erişim durumunu güncel olarak kontrol ediniz.',
    t12: '~7 saat', t12s: 7, etki: '1–2 hafta; tam etki 4–6 hafta', form: 'Uzun salımlı kapsül 100 / 150 / 200 mg',
    onay: [['DEHB', '≥ 6 yaş']],
    onayEri: [['DEHB']],
    ped: {
      bas: '6–11 yaş: 100 mg/gün · 12–17 yaş: 200 mg/gün', artis: 'Haftada bir 100 mg (6–11 yaş) veya 200 mg (12–17 yaş)', hedef: '200–400 mg/gün', maks: '400 mg/gün',
      birim: 'mg/gün', adim: [[0, 100], [7, 200], [14, 300], [21, 400]], bant: [200, 400], tavan: 400,
      not: ['Grafik 6–11 yaş şemasını gösterir; 12–17 yaşta 200 mg ile başlanıp bir hafta sonra 400 mg\'a çıkılabilir.', 'Günde tek doz; kapsül açılıp elma püresine serpilebilir, çiğnenmez.', 'Somnolans olursa akşam verin.']
    },
    eri: {
      bas: '200 mg/gün', artis: 'Haftada bir 200 mg', hedef: '200–600 mg/gün', maks: '600 mg/gün',
      birim: 'mg/gün', adim: [[0, 200], [7, 400], [14, 600]], bant: [200, 600], tavan: 600, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Kesilme sendromu tanımlanmamıştır; doğrudan kesilebilir.'] },
    izlem: 'atomoksetin', profil: { sed: 2, kilo: 0, gis: 2, akt: 1, kv: 2, istah: 2, kes: 1 },
    kutu: { ped: 'Kara kutu uyarısı: çocuk ve ergenlerde intihar düşüncesi ve davranışı riskinde artış. Başlangıçta ve doz değişimlerinde yakın izlem.', eri: 'Kara kutu uyarısı: intihar düşüncesi ve davranışında artış (çocuk ve erişkin çalışmalarında). Başlangıçta ve doz değişimlerinde yakın izlem.' },
    uyari: ['Somnolans, yorgunluk', 'İştah azalması, bulantı, kusma', 'Kan basıncı ve nabız artışı', 'İrritabilite, uykusuzluk', 'Manik/hipomanik kayma: bipolar bozukluk açısından tarayın'],
    etkilesim: ['MAOİ ile kontrendike (14 gün ara)', 'Güçlü CYP1A2 inhibitörüdür: duloksetin, tizanidin, teofilin ile kontrendike; klozapin, olanzapin, melatonin düzeyini artırır', 'Kafein etkisini uzatır'],
    oz: ['1a2inh', '2d6sub']
  },
  {
    id: 'modafinil', ad: 'Modafinil', sinif: 'dehb', altSinif: 'Uyanıklığı artırıcı ajan', grup: 'stimulan',
    mek: { ped: 'Dopamin taşıyıcısını zayıf inhibe eder; uyanıklığı artırır. Narkolepside onaylıdır; DEHB\'de etkinlik çalışmaları olmakla birlikte ciddi deri reaksiyonları nedeniyle pediatrik onay verilmemiştir. Diğer seçenekler denendikten sonra düşünülür.', eri: 'Dopamin taşıyıcısını zayıf inhibe eder; uyanıklığı artırır. Narkolepsi, uyku apnesinde kalıntı uykululuk ve vardiyalı çalışma uyku bozukluğunda onaylıdır; DEHB\'de endikasyon dışıdır ve kanıtı tutarsızdır.' },
    t12: '~15 saat', t12s: 15, etki: '1–2 saat; DEHB\'de tam etki 2–4 hafta', form: 'Tablet 100 / 200 mg',
    onay: [], onayNot: 'Pediatrik onay yok · endikasyon dışı (deri reaksiyonu riski)',
    onayEri: [['Narkolepsi'], ['Obstrüktif uyku apnesinde kalıntı uykululuk'], ['Vardiyalı çalışma uyku bozukluğu']],
    ped: {
      bas: '50–100 mg sabah', artis: 'Haftada bir 50–100 mg', hedef: '< 30 kg: 200–300 mg/gün · ≥ 30 kg: 300–400 mg/gün', maks: '400 mg/gün',
      birim: 'mg/gün', adim: [[0, 100], [7, 200], [14, 300], [21, 400]], bant: [200, 400], tavan: 400,
      not: ['Endikasyon dışı kullanım: aileyi ciddi döküntü riski konusunda bilgilendirin; ilk haftalarda döküntü, ateş, ağız içi yara olursa ilacı kesin.', 'Sabah tek doz; geç verilirse uykusuzluk yapar.', 'Hormonal kontraseptif etkinliğini azaltır: ergenlerde ek yöntem önerin.']
    },
    eri: {
      bas: '100–200 mg sabah', artis: 'Haftada bir 100 mg', hedef: '200–400 mg/gün', maks: '400 mg/gün',
      birim: 'mg/gün', adim: [[0, 100], [7, 200], [14, 400]], bant: [200, 400], tavan: 400, not: []
    },
    surdurum: SURDURUM_DEHB,
    kesme: { risk: 1, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Doğrudan kesilebilir; birkaç gün uyuklama ve yorgunluk olabilir.'] },
    izlem: 'stimulan', izlemEk: [['Döküntü sorgusu', [1, 'Her vizit', 1, 2, 2], 'Ciddi deri reaksiyonları çoğunlukla ilk 1–5 haftada görülür.']],
    profil: { sed: 0, kilo: 0, gis: 2, akt: 2, kv: 1, istah: 2, kes: 1 },
    kutu: { ped: 'Stevens-Johnson sendromu dahil ciddi deri ve aşırı duyarlılık reaksiyonları çocuklarda bildirilmiştir. Döküntüde ilacı hemen kesin.', eri: 'Stevens-Johnson sendromu dahil ciddi deri ve aşırı duyarlılık reaksiyonları bildirilmiştir (çocuklarda daha sık). Döküntüde ilacı hemen kesin.' },
    uyari: ['Baş ağrısı, bulantı, iştah azalması', 'Uykusuzluk, anksiyete, irritabilite', 'Nadiren psikotik/manik belirtiler', 'Kan basıncı ve nabız artışı (stimulanlardan az)'],
    etkilesim: ['Hormonal kontraseptif etkinliğini azaltır (kesildikten sonra 1 ay daha)', 'CYP3A4 indükleyicisidir: ketiapin, aripiprazol, midazolam düzeyini düşürebilir', 'CYP2C19 inhibitörüdür: diazepam, fenitoin, klomipramin düzeyini artırabilir'],
    oz: ['stim']
  }
  );
})();
