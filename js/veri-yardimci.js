/* Diğer ilaçlar: madde kullanım bozukluklarında kullanılan ilaçlar (naltrekson, nalmefen, buprenorfin/nalokson, nalokson),
   antipsikotik yan etkilerinin yönetiminde kullanılan ilaçlar (biperiden, triheksifenidil, bornaprin, propranolol, metformin) ve prazosin.
   Türkiye ruhsatı ilgili KÜB'lere (NOKREV, SELİNCRO, SUBOXONE, AKİNETON, SORMODREN, DİDERAL, DIAFORMIN) dayanır; FDA bilgisi ayrıca belirtilir. */
(function () {
  var SURDURUM_ANTIKOL = [
    'Antipsikotiğe bağlı ekstrapiramidal belirtide antikolinerjiği süresiz sürdürmeyin: 2–3 ay sonra azaltıp kesmeyi deneyin.',
    'Önce antipsikotik dozunu azaltmayı ya da ekstrapiramidal riski düşük bir ilaca geçmeyi değerlendirin.',
    'Rutin koruyucu (profilaktik) kullanım önerilmez; akut distoni riski yüksek hastada (genç erkek, yüksek potensli antipsikotik başlangıcı) kısa süreli düşünülebilir.',
    'Bilişsel etkileri, kabızlığı ve idrar yapmayı her vizitte sorun; kötüye kullanım açısından dikkatli olun.'
  ];
  var KESME_ANTIKOL = { risk: 2, sure: '1–2 hafta (kademeli)', adim: [[0, 100], [4, 50], [8, 25], [12, 0]],
    not: ['Ani kesme kolinerjik rebound (bulantı, terleme, uykusuzluk, huzursuzluk) ve ekstrapiramidal belirtilerin geri dönmesine yol açabilir.', 'Antipsikotik de kesiliyorsa antikolinerjiği antipsikotikten 1–2 hafta sonra kesin.'] };

  window.ILACLAR.push(
  {
    id: 'naltrekson', ad: 'Naltrekson', sinif: 'diger', altSinif: 'Opioid antagonisti', grup: 'bagimlilik',
    mek: 'Mü-opioid reseptör antagonisti (kappa ve delta reseptörlerinde daha zayıf). Alkolün ödüllendirici etkisini ve içme isteğini azaltır; opioidlerin etkisini bloke ederek opioid bağımlılığında arınma sonrası nüksü önlemeye yardım eder. Bağımlılık yapmaz.',
    t12: '~4 saat (aktif metabolit 6-beta-naltreksol ~13 saat)', t12s: 4, etki: 'Opioid blokajı: 1 saat içinde, ~24 saat sürer · alkolde içme isteği: haftalar', form: 'Film tablet 50 mg',
    onay: [], onayNot: 'Pediatrik onay yok · 18 yaş altında önerilmez',
    onayEri: [['Alkol kullanım bozukluğu'], ['Opioid kullanım bozukluğu', 'arınma sonrası nüks önleme']],
    ped: {
      bas: 'Önerilmez: 18 yaş altında güvenlilik ve etkililik verisi yetersizdir.', kart: 'Önerilmez (18 yaş altı)', artis: '—', hedef: '—', maks: '—',
      birim: 'mg/gün', adim: [],
      not: ['Ergen alkol kullanım bozukluğunda küçük çalışmalarda 50 mg/gün kullanılmıştır; kullanılacaksa endikasyon dışı onam, aile katılımı ve karaciğer işlev izlemiyle.']
    },
    eri: {
      bas: '25 mg/gün ile başlanabilir (bulantıyı azaltır); opioid kullanımı şüphesinde önce nalokson provokasyon testi', kart: '25 mg/gün → 50 mg/gün', artis: '1–3 gün sonra 50 mg', hedef: '50 mg/gün tek doz', maks: '50 mg/gün (Türkiye KÜB\'ü); FDA opioid bağımlılığında haftalık 350 mg\'lık şemaya (ör. 100–100–150 mg) izin verir',
      birim: 'mg/gün', adim: [[0, 25], [3, 50]], bant: [50, 50], tavan: 50,
      not: ['Opioid kullanıcısında başlamadan önce 7–10 gün opioidsiz dönem ve negatif idrar testi gerekir; aksi halde ani ve ağır yoksunluk tetiklenir.', 'Alkolde içmeyi bırakmış ya da azaltmış hastada başlanır; en az 3 aylık başlangıç dönemi, gerekirse uzun süreli.', 'Hastaya acil durum kartı verin: opioid analjezikler etkisiz kalır ya da çok yüksek doz gerekir.']
    },
    surdurum: ['Alkol kullanım bozukluğunda en az 3 ay, yanıt varsa 6–12 ay ve daha uzun sürdürün; psikososyal tedaviyle birlikte.', 'Uyumu artırmak için gözetimli alım (aile, eczane) düşünün.', 'Karaciğer işlev testlerini başlangıçta, ilk aylarda aylık, sonra 3–6 ayda bir izleyin.', 'Opioid bağımlılığında tedaviyi bırakan hastayı azalmış tolerans ve aşırı doz riski konusunda uyarın; nalokson bulundurmasını önerin.'],
    kesme: { risk: 0, sure: 'Doğrudan kesilebilir', adim: [[0, 100], [1, 0]],
      not: ['Kesilme sendromu yapmaz.', 'Kesildikten sonra opioid toleransı düşüktür: önceki dozlarda opioid kullanımı ölümcül aşırı doza yol açabilir.'] },
    izlem: 'naltrekson', profil: { sed: 1, gis: 2, akt: 1, kes: 0 },
    kutu: 'Opioid kullanan hastada başlanırsa ani ve ağır yoksunluk tetikler. Naltrekson bırakıldıktan sonra ya da blokajı aşmak için yüksek doz opioid kullanıldığında ölümcül aşırı doz riski vardır.',
    uyari: ['Bulantı, baş ağrısı, baş dönmesi, yorgunluk (ilk haftalarda)', 'Uykusuzluk, anksiyete', 'Karaciğer enzim yükselmesi (özellikle yüksek dozda); akut hepatit ve ciddi karaciğer yetmezliğinde kontrendike', 'Opioid analjeziklerin etkisiz kalması', 'Depresyon ve intihar düşüncesi bildirilmiştir'],
    etkilesim: ['Opioid içeren ağrı kesici, öksürük ve ishal ilaçları etkisiz kalır; opioid bağımlısında yoksunluk tetikler', 'Buprenorfin ve metadonla birlikte kullanılmaz', 'Hepatotoksik ilaçlarla (ör. disülfiram) birlikte dikkat', 'Tiyoridazinle letarji ve uykululuk bildirilmiştir'],
    gecisNotu: 'Bağımlılık tedavisinde ilaç seçimi ve geçiş ayrı ilkelere dayanır: opioid agonist tedavisinden (buprenorfin, metadon) naltreksona geçişte önce 7–10 günlük opioidsiz dönem gerekir. Değişim planlayıcıda bu sınıf için şema tanımlı değildir.',
    oz: []
  },
  {
    id: 'nalmefen', ad: 'Nalmefen', sinif: 'diger', altSinif: 'Opioid modülatörü', grup: 'bagimlilik',
    mek: 'Mü ve delta opioid reseptör antagonisti, kappa reseptöründe parsiyel agonist. Alkolün ödüllendirici etkisini azaltarak içilen miktarı düşürür; tam yoksunluk yerine içmeyi azaltma hedefiyle, gerektiğinde alınır.',
    t12: '~12,5 saat', t12s: 12.5, etki: 'Doruk düzey 1,5 saatte (içmeden önce alınır) · tüketimde azalma ilk 4 haftada belirginleşir', form: 'Film tablet 18 mg (bölünmez)',
    onay: [['Opioid aşırı dozu · burun spreyi/enjeksiyon (ABD)', '≥ 12 yaş']], onayNot: 'Oral nalmefen ABD\'de onaysız · Türkiye\'de 18 yaş altında değerlendirilmemiş',
    onayEri: [['Alkol tüketimini azaltma', 'oral · Türkiye/Avrupa'], ['Opioid aşırı dozu', 'burun spreyi, enjeksiyon · ABD']],
    ped: {
      bas: 'Önerilmez: 18 yaş altında etkililik ve güvenlilik değerlendirilmemiştir.', kart: 'Önerilmez (18 yaş altı)', artis: '—', hedef: '—', maks: '—',
      birim: 'mg', adim: [],
      not: ['Ergen alkol kullanım bozukluğunda veri yoktur; psikososyal tedavi esastır.']
    },
    eri: {
      bas: '18 mg gerektiğinde: içme riski olan günlerde, beklenen içmeden 1–2 saat önce tek tablet', kart: '18 mg gerektiğinde', artis: 'Titrasyon yapılmaz', hedef: 'İçme riski olan günlerde 18 mg', maks: '18 mg/gün (günde bir tablet)',
      birim: 'mg', adim: [], semaNot: 'Gerektiğinde kullanılır: içme riski olan günlerde tek tablet alınır, doz titrasyonu yapılmaz.',
      not: ['İlk görüşmeden sonra hasta 2 hafta içme günlüğü tutar; yüksek içme risk düzeyi sürerse başlanır (Türkiye KÜB\'ü).', 'Yalnız fiziksel yoksunluğu olmayan ve acil arınma gerektirmeyen hastada; tedaviye uyum ve tüketimi azaltmaya odaklı psikososyal destekle birlikte.', 'Hasta tableti almadan içmeye başladıysa en kısa sürede alır.', 'Tablet bütün yutulur; bölünmez (ciltle temasta hassasiyet yapabilir).']
    },
    surdurum: ['Yanıtı ve gereksinimi ayda bir değerlendirin: içme günleri, içilen miktar, işlevsellik, uyum.', 'Randomize çalışmalarda veri 6–12 aylıktır; 1 yıldan uzun kullanımda dikkatli olun (Türkiye KÜB\'ü).', 'İçmeyi tamamen bırakmayı hedefleyen hastada naltrekson değerlendirilir.'],
    kesme: { risk: 0, sure: 'Doğrudan kesilebilir', adim: [[0, 100], [1, 0]],
      not: ['Kesilme sendromu yapmaz.', 'Opioid analjezik gerekecekse (ör. planlı ameliyat) 1 hafta önce kesin.'] },
    izlem: 'nalmefen', profil: { sed: 1, gis: 3, akt: 2, kes: 0 },
    uyari: ['Bulantı, baş dönmesi, uykusuzluk, baş ağrısı (çoğunlukla ilk haftalarda)', 'Konfüzyon; seyrek olarak halüsinasyon ve dissosiyasyon', 'Opioid kullananlarda yoksunluk tetikler; opioid analjeziklerin etkisini azaltır', 'Yakın zamanda akut alkol yoksunluk sendromu öyküsünde, ağır karaciğer ve böbrek yetmezliğinde kontrendike'],
    etkilesim: ['Opioid agonistleri (analjezikler, metadon, buprenorfin) ile kontrendike', 'Güçlü UGT2B7 inhibitörleri (diklofenak, flukonazol, medroksiprogesteron asetat) düzeyi artırabilir', 'UGT indükleyicileri (deksametazon, fenobarbital, rifampisin) düzeyi azaltabilir', 'Opioid içeren öksürük ve ishal ilaçlarının etkisi azalır'],
    gecisNotu: 'Nalmefen ile naltrekson birlikte kullanılmaz; ikisi de opioid antagonistidir. Opioid agonist tedavisi (buprenorfin, metadon) alan hastada kontrendikedir. Değişim planlayıcıda bu sınıf için şema tanımlı değildir.',
    oz: []
  },
  {
    id: 'buprenorfin', ad: 'Buprenorfin / nalokson', sinif: 'diger', altSinif: 'Opioid parsiyel agonisti (ikame tedavisi)', grup: 'bagimlilik',
    mek: 'Mü-opioid reseptöründe yüksek afiniteli parsiyel agonist, kappa antagonisti. Yoksunluğu ve isteği baskılar; tavan etkisi nedeniyle tek başına solunum depresyonu riski tam agonistlerden düşüktür (sedatiflerle birlikte değil). Dil altında çok az emilen nalokson, damar içi kötüye kullanımı caydırır.',
    t12: '24–42 saat (buprenorfin)', t12s: 36, etki: 'Dil altı: 30–60 dakika · tek dozun etkisi 24 saati aşar', form: 'Dil altı tablet 2 mg/0,5 mg ve 8 mg/2 mg (buprenorfin/nalokson)',
    onay: [], onayNot: 'FDA: 16 yaş altında güvenlilik belirlenmemiş · Türkiye: 15 yaş üstünde endike',
    onayEri: [['Opioid kullanım bozukluğu', 'indüksiyon ve idame']],
    ped: {
      bas: '15–17 yaş (Türkiye KÜB\'ü): erişkinle aynı; 1. gün 2 mg/0,5 mg ×2 (4 mg)', kart: '15–17 yaş: 2 mg/0,5 mg ×2 dil altı', artis: '1. gün gerekirse iki kez tekrarlanabilir; sonra 2–4 mg basamaklarla', hedef: '8–16 mg/gün', maks: '24 mg/gün',
      birim: 'mg/gün (buprenorfin)', adim: [[0, 4], [1, 8], [3, 12], [7, 16]], bant: [8, 16], tavan: 24,
      not: ['15 yaş altında önerilmez.', 'Ergen opioid kullanım bozukluğunda psikososyal tedavi ve aile katılımıyla; kısa süreli arınma yerine idame tedavisi nüksü azaltır.', 'Genç ve ailesine nalokson ve aşırı doz eğitimi verin.']
    },
    eri: {
      bas: '2 mg/0,5 mg ×2 (4 mg) dil altı; yoksunluk bulguları başlayınca (COWS hafif–orta), kısa etkili opioidden ≥ 6 saat, metadondan ≥ 24 saat sonra', kart: '2 mg/0,5 mg ×2 dil altı (yoksunluk başlayınca)', artis: '1. gün gerekirse 2–4 mg ek dozlar; sonraki günlerde 2–4 mg basamaklarla', hedef: '8–16 mg/gün (çoğu hasta 12–16 mg)', maks: '24 mg/gün',
      birim: 'mg/gün (buprenorfin)', adim: [[0, 4], [1, 8], [2, 12], [7, 16]], bant: [12, 16], tavan: 24,
      not: ['Metadondan geçişte önce metadon dozu en çok 30 mg/gün\'e azaltılır (Türkiye KÜB\'ü).', 'Stabil hastada gün aşırı (iki günlük doz) ya da haftada 3 kez uygulanabilir; tek seferde en çok 24 mg.', 'Tablet tamamen eriyene dek dil altında tutulur; yutulursa etkisizdir.', 'Hafif–orta karaciğer yetmezliğinde düşük başlangıç dozu; şiddetli yetmezlikte kontrendike.']
    },
    surdurum: ['İdame tedavisi uzun süreli planlanır; kısa süreli arınmaya göre nüks ve ölüm riski belirgin düşüktür.', 'Başlangıçta gözetimli alım; stabil hastada eve verilen doz miktarı kademeli artırılır.', 'Her vizitte madde kullanımı (idrar testi), yan etki, ruh durumu ve ilacın başkasına verilmesi değerlendirilir.', 'Hasta ve yakınlarına nalokson ve aşırı doz eğitimi verin.'],
    kesme: { risk: 3, sure: 'Aylar (hasta istekliyse, stabil dönemde)', adim: [[0, 100], [28, 75], [56, 50], [84, 25], [112, 0]],
      not: ['Hasta kabul ederse stabil dönemde 2–4 haftada bir %10–25 azaltın; yoksunluk veya istek artarsa önceki doza dönün.', 'Kesildikten sonra tolerans azalır: nüks halinde aşırı doz riski yüksektir.'] },
    izlem: 'buprenorfin', profil: { sed: 2, gis: 2, qt: 1, kes: 3 },
    kutu: 'Benzodiazepin, alkol ve diğer santral sinir sistemi depresanlarıyla birlikte ölümcül solunum depresyonu riski. Kötüye kullanım ve başkasına verilme potansiyeli; çocuklarda kazara alım ölümcül olabilir: güvenli saklama zorunludur.',
    uyari: ['Kabızlık, bulantı, baş ağrısı, terleme, uykusuzluk', 'Yoksunluk başlamadan alınan ilk dozla tetiklenen yoksunluk', 'Karaciğer enzim yükselmesi, hepatit', 'Sedasyon, ortostatik hipotansiyon', 'Gebelikte yenidoğanda opioid yoksunluğu gelişebilir; tedavi kesilmez, uzmanla planlanır'],
    etkilesim: ['Benzodiazepin, alkol, gabapentinoid ve diğer opioidlerle solunum depresyonu', 'Naltrekson ve nalmefenle birlikte kullanılmaz (Türkiye KÜB\'ü: kontrendike)', 'CYP3A4 inhibitörleri (ketokonazol, ritonavir, klaritromisin) düzeyi artırır; indükleyiciler (rifampisin, karbamazepin) yoksunluk yaptırabilir', 'Serotonerjik ilaçlarla serotonin sendromu bildirilmiştir'],
    gecisNotu: 'Opioid agonist tedavisinde geçişler (metadon ↔ buprenorfin, buprenorfin → naltrekson) özel indüksiyon kuralları gerektirir; değişim planlayıcıda bu sınıf için şema tanımlı değildir. Metadondan geçişte metadon ≤ 30 mg/gün\'e indirilir ve son dozdan ≥ 24 saat sonra, yoksunluk başlayınca buprenorfine geçilir.',
    oz: []
  },
  {
    id: 'nalokson', ad: 'Nalokson', sinif: 'diger', altSinif: 'Opioid antagonisti (acil)', grup: 'bagimlilik',
    mek: 'Kısa etkili, yarışmalı mü-opioid reseptör antagonisti. Opioide bağlı solunum depresyonunu ve sedasyonu dakikalar içinde geri döndürür; opioid yokluğunda belirgin etkisi yoktur. Ağızdan alındığında etkisizdir.',
    t12: '30–90 dakika (yenidoğanda ~3 saat)', t12s: 1, etki: 'IV 1–2 dakika · IM, SC ve burun birkaç dakika · etki süresi 30–90 dakika', form: 'Enjeksiyon 0,4 mg/mL; burun spreyi 4 mg (ABD)',
    onay: [['Opioid aşırı dozu, opioide bağlı solunum depresyonu', 'tüm yaşlar']], onayNot: 'Türkiye\'de ruhsatlı ürünü yok',
    onayEri: [['Opioid aşırı dozu'], ['Ameliyat sonrası opioid etkisinin geri döndürülmesi', 'enjeksiyon']],
    ped: {
      bas: 'Opioid aşırı dozu: 0,01 mg/kg IV, IM ya da SC; yanıt yetersizse 0,1 mg/kg · burun spreyi 4 mg (ABD, tüm yaşlar)', kart: '0,01 mg/kg IV, IM ya da SC', artis: '2–3 dakikada bir yinelenir', hedef: 'Yeterli solunum', maks: 'Doz başına en çok 2 mg; toplam 10 mg\'a yanıt yoksa tanıyı gözden geçirin',
      birim: 'mg', adim: [], semaNot: 'Acil kullanılan bir ilaçtır: titrasyon şeması yerine yanıta göre 2–3 dakikada bir yinelenen dozlarla uygulanır.',
      not: ['Opioid kullanım bozukluğu olan ergende ağır yoksunluktan kaçınmak için küçük dozlarla titre edin.', 'Opioid bağımlısı annenin yenidoğanında ani yoksunluk ve nöbet riski vardır.', 'Çocukta kazara opioid (ör. buprenorfin, metadon) alımında yeniden sedasyon sıktır: uzun süre gözlem gerekir.']
    },
    eri: {
      bas: '0,4–2 mg IV, IM ya da SC; opioid bağımlısında 0,04–0,1 mg IV ile başlayıp titre edin · burun spreyi 4 mg (ABD)', kart: '0,4–2 mg IV, IM ya da SC', artis: '2–3 dakikada bir yinelenir', hedef: 'Yeterli solunum (≥ 10/dk), tam uyanıklık değil', maks: 'Toplam 10 mg\'a yanıt yoksa tanıyı gözden geçirin',
      birim: 'mg', adim: [], semaNot: 'Acil kullanılan bir ilaçtır: titrasyon şeması yerine yanıta göre 2–3 dakikada bir yinelenen dozlarla uygulanır.',
      not: ['Metadon ve uzun etkili opioidlerde yeniden sedasyon riski: yinelenen dozlar ya da infüzyon (saatte, başlangıçta etkili dozun yaklaşık üçte ikisi) gerekebilir.', 'Burun spreyinde her doz yeni cihazla, sırayla öteki burun deliğine verilir.', 'Opioid kullanım bozukluğu olan hasta ve yakınlarına aşırı doz belirtileri ve nalokson kullanımı öğretilir.']
    },
    surdurum: ['Acil kullanım içindir; sürdürüm tedavisi yoktur.', 'Aşırı doz sonrası hastayı bağımlılık tedavisine (buprenorfin/nalokson idamesi) yönlendirin.', 'Eve nalokson erişimi aşırı doz ölümlerini azaltır; Türkiye\'de ruhsatlı ürünü yoktur.'],
    kesme: { risk: 0, sure: 'Kesme gerekmez (acil kullanım)', adim: [[0, 100], [1, 0]],
      not: ['Son dozdan sonra en az 2 saat, metadon ve uzun etkili opioidlerde daha uzun gözlem.'] },
    izlem: 'nalokson', profil: { gis: 1, kv: 2, kes: 0 },
    uyari: ['Opioid bağımlısında ani ve ağır yoksunluk: ajitasyon, kusma, ishal, taşikardi, terleme', 'Taşikardi, hipertansiyon, aritmi; nadiren akciğer ödemi', 'Etki süresi kısadır: opioid etkisi geri dönebilir', 'Buprenorfin zehirlenmesinde daha yüksek dozlar ve infüzyon gerekebilir'],
    etkilesim: ['Tüm opioid agonistlerinin etkisini (analjezi dahil) geri döndürür', 'Buprenorfinin reseptöre bağlanmasını güç bozar', 'Benzodiazepin, alkol, gabapentinoid ve diğer sedatiflerin etkisini geri döndürmez'],
    gecisNotu: 'Acil kullanılan bir ilaçtır; değişim planlayıcıda şema tanımlı değildir. Aşırı doz sonrası hasta uyanıp yoksunluk belirtileri geliştiğinde buprenorfin/nalokson başlatılabilir.',
    oz: []
  },
  {
    id: 'biperiden', ad: 'Biperiden', sinif: 'diger', altSinif: 'Antikolinerjik (antiparkinson)', grup: 'antikolinerjik',
    mek: 'Merkezi etkili muskarinik (özellikle M1) antagonist. Antipsikotiklere bağlı akut distoni ve parkinsonizmi hızla düzeltir; akatizide etkisi sınırlıdır (propranolol genellikle tercih edilir) ve geç diskineziyi kötüleştirebilir.',
    t12: '18–24 saat (yaşlıda daha uzun)', t12s: 20, etki: 'IM/IV: 10–30 dakika · oral: yaklaşık 1 saat', form: 'Tablet 2 mg; ampul 5 mg/mL (IM/IV)',
    onay: [], onayNot: 'ABD\'de piyasada yok · Türkiye\'de 3–15 yaşta ilaca bağlı ekstrapiramidal belirtiler için doz verilir',
    onayEri: [['Parkinson sendromu', 'Türkiye/Avrupa'], ['İlaca bağlı ekstrapiramidal belirtiler', 'akut distoni, parkinsonizm · Türkiye/Avrupa']],
    ped: {
      bas: '3–15 yaş: ½–1 tablet (1–2 mg) ×1–3/gün', artis: 'Yanıt ve yan etkiye göre', hedef: '1–6 mg/gün', maks: '6 mg/gün (oral)',
      birim: 'mg/gün', adim: [[0, 1], [2, 2], [5, 4]], bant: [2, 4], tavan: 6,
      not: ['Akut distonide yavaş IV tek doz: 1 yaşa dek 1 mg, 6 yaşa dek 2 mg, 10 yaşa dek 3 mg (ampul KÜB\'ü); gerekirse 30 dakika sonra tekrarlanır.', 'Çocuklarda deneyim çoğunlukla ilaca bağlı distoninin kısa süreli tedavisiyle sınırlıdır.']
    },
    eri: {
      bas: '1 mg ×2/gün (½ tablet ×2)', artis: 'Günde 2 mg artış (yanıt ve yan etkiye göre)', hedef: 'İlaca bağlı EPS: 1–2 mg ×1–4/gün · Parkinson sendromu: 3–16 mg/gün', maks: '16 mg/gün (oral) · parenteral 10–20 mg/gün',
      birim: 'mg/gün', adim: [[0, 2], [2, 4], [4, 6]], bant: [2, 6], tavan: 16,
      not: ['Akut distoni: 2,5–5 mg IM ya da yavaş IV; gerekirse 30 dakika sonra tekrarlanır.', 'Yemek sırasında veya sonrasında alınması mide-bağırsak yan etkilerini azaltır.', 'Yaşlıda deliryum ve bilişsel bozulma riski: mümkünse kaçının, gerekirse en düşük doz ve kısa süre.']
    },
    surdurum: SURDURUM_ANTIKOL,
    kesme: KESME_ANTIKOL,
    izlem: 'antikolinerjik', profil: { sed: 1, ach: 3, kes: 2 },
    uyari: ['Ağız kuruluğu, kabızlık, bulanık görme, idrar retansiyonu', 'Konfüzyon, bellek bozukluğu, deliryum (özellikle yaşlıda)', 'Taşikardi', 'Dar açılı glokom, mekanik bağırsak tıkanıklığı ve megakolonda kontrendike', 'Öforizan etki: kötüye kullanım potansiyeli', 'Geç diskineziyi kötüleştirebilir'],
    etkilesim: ['Diğer antikolinerjiklerle (trisiklikler, düşük potensli antipsikotikler, antihistaminikler) additif antikolinerjik yük', 'Alkolün etkisini artırır', 'Kinidinle AV iletiye etki artabilir', 'Levodopa ile diskinezi artabilir; metoklopramidin mide-bağırsak etkilerini azaltır'],
    gecisNotu: 'Antikolinerjiklerde "geçiş" yerine gereksinim yeniden değerlendirilir: ekstrapiramidal belirtide önce antipsikotik dozu ya da seçimi gözden geçirilir. Biperiden ile bornaprin arasında geçişte biri kademeli azaltılırken diğeri düşük dozdan başlatılabilir.',
    oz: ['antikol']
  },
  {
    id: 'triheksifenidil', ad: 'Triheksifenidil', sinif: 'diger', altSinif: 'Antikolinerjik (antiparkinson)', grup: 'antikolinerjik',
    mek: 'Merkezi etkili muskarinik (M1 ağırlıklı) antagonist. Antipsikotiklere bağlı parkinsonizm ve akut distoniyi düzeltir; akatizide etkisi sınırlıdır ve geç diskineziyi kötüleştirebilir. Öforizan etkisi nedeniyle kötüye kullanılabilir.',
    t12: '3–4 saat (terminal eliminasyon ~33 saate dek)', t12s: 4, etki: '1 saat içinde · etki süresi 6–12 saat', form: 'Tablet 2 / 5 mg; oral çözelti (ABD)',
    onay: [], onayNot: 'Pediatrik güvenlilik ve etkililik belirlenmemiş (FDA) · Türkiye\'de ruhsatlı ürünü yok',
    onayEri: [['Parkinsonizm', 'ek tedavi'], ['İlaca bağlı ekstrapiramidal belirtiler']],
    ped: {
      bas: 'Psikiyatride önerilen pediatrik doz yok; ilaca bağlı akut distonide çocukta biperiden tercih edilir.', kart: 'Pediatrik doz yok; biperiden tercih edilir', artis: '—', hedef: '—', maks: '—',
      birim: 'mg/gün', adim: [],
      not: ['Çocuk nörolojisinde distoni tedavisinde uzman gözetiminde kullanılır.', 'Çocuklar santral antikolinerjik yan etkilere (konfüzyon, ajitasyon, halüsinasyon) daha duyarlıdır.']
    },
    eri: {
      bas: '1 mg/gün', artis: '3–5 günde bir 1–2 mg', hedef: 'İlaca bağlı EPS: 5–15 mg/gün (FDA); çoğu hastada 2 mg ×2–3 yeterli', maks: '15 mg/gün (EPS)',
      birim: 'mg/gün', adim: [[0, 1], [3, 2], [6, 4], [10, 6]], bant: [4, 10], tavan: 15,
      not: ['Günde 2–3 doza bölünerek, yemekle alınır.', 'Ekstrapiramidal belirtiler birkaç günde kontrol altına alınırsa doz azaltılabilir.', 'Yaşlıda konfüzyon ve deliryum riski: mümkünse kaçının.', 'Türkiye\'de ruhsatlı ürünü olmadığından biperiden kullanılır.']
    },
    surdurum: SURDURUM_ANTIKOL,
    kesme: KESME_ANTIKOL,
    izlem: 'antikolinerjik', profil: { sed: 1, akt: 1, ach: 3, kes: 2 },
    uyari: ['Ağız kuruluğu, bulanık görme, kabızlık, idrar retansiyonu', 'Konfüzyon, bellek bozukluğu, halüsinasyon (özellikle yaşlıda ve yüksek dozda)', 'Taşikardi', 'Öforizan etki: kötüye kullanım potansiyeli', 'Dar açılı glokomda kontrendike; terleme azalmasına bağlı sıcak çarpması riski', 'Geç diskineziyi kötüleştirebilir'],
    etkilesim: ['Diğer antikolinerjiklerle (trisiklikler, klozapin, düşük potensli antipsikotikler, antihistaminikler) additif antikolinerjik yük', 'Alkol ve sedatiflerle santral yan etkiler artar', 'Mide boşalmasını yavaşlatarak bazı ilaçların emilimini değiştirebilir'],
    gecisNotu: 'Antikolinerjiklerde "geçiş" yerine gereksinim yeniden değerlendirilir: ekstrapiramidal belirtide önce antipsikotik dozu ya da seçimi gözden geçirilir. Türkiye\'de triheksifenidil ruhsatlı olmadığından biperiden kullanılır.',
    oz: ['antikol']
  },
  {
    id: 'bornaprin', ad: 'Bornaprin', sinif: 'diger', altSinif: 'Antikolinerjik (antiparkinson)', grup: 'antikolinerjik',
    mek: 'Merkezi ve periferik etkili muskarinik antagonist. Antipsikotiklere bağlı parkinsonizm ve distonide, ayrıca aşırı terlemede (hiperhidroz) kullanılır.',
    t12: '~5 saat (metabolitleriyle terminal ~30 saat)', t12s: 5, etki: '1–2 saat', form: 'Tablet 4 mg (dörde bölünebilir)',
    onay: [], onayNot: 'Çocuklarda endike değil (Türkiye KÜB\'ü) · ABD\'de onaysız',
    onayEri: [['Parkinson sendromu', 'Türkiye/Avrupa'], ['İlaca bağlı ekstrapiramidal belirtiler', 'Türkiye/Avrupa'], ['Hiperhidroz', 'Türkiye/Avrupa']],
    ped: {
      bas: 'Çocuklarda endike değildir; çocuk ve ergende deneyim yetersizdir.', kart: 'Çocuklarda endike değil', artis: '—', hedef: '—', maks: '—',
      birim: 'mg/gün', adim: [],
      not: ['İlaca bağlı akut distonide çocukta biperiden tercih edilir.']
    },
    eri: {
      bas: '2 mg/gün (½ tablet)', artis: 'Yanıta göre kademeli', hedef: '6–12 mg/gün, 2–3 doza bölünmüş', maks: '12 mg/gün',
      birim: 'mg/gün', adim: [[0, 2], [3, 4], [7, 6], [14, 8]], bant: [6, 12], tavan: 12,
      not: ['Hiperhidrozda idame 4–8 mg/gün.', 'Yemek sırasında veya sonrasında alın.', 'Yaşlıda dozu dikkatle ayarlayın; bellek bozukluğunda kontrendike.']
    },
    surdurum: SURDURUM_ANTIKOL,
    kesme: KESME_ANTIKOL,
    izlem: 'antikolinerjik', profil: { sed: 1, ach: 3, kes: 2 },
    uyari: ['Ağız kuruluğu, kabızlık, bulanık görme, idrar retansiyonu', 'Konfüzyon, bellek bozukluğu', 'Taşikardi', 'Dar açılı glokom, mekanik bağırsak darlığı, megakolon, ileus ve bellek bozukluğunda kontrendike'],
    etkilesim: ['Diğer antikolinerjiklerle additif santral ve periferik yan etkiler', 'Alkolün etkisini artırır', 'Kinidinle AV iletiye etki artabilir', 'Levodopa ile diskinezi artabilir; nöroleptiğe bağlı geç diskinezi şiddetlenebilir'],
    gecisNotu: 'Antikolinerjiklerde "geçiş" yerine gereksinim yeniden değerlendirilir: ekstrapiramidal belirtide önce antipsikotik dozu ya da seçimi gözden geçirilir.',
    oz: ['antikol']
  },
  {
    id: 'propranolol', ad: 'Propranolol', sinif: 'diger', altSinif: 'Seçici olmayan beta-bloker', grup: 'yanetki',
    mek: 'Beta-1 ve beta-2 adrenerjik reseptör antagonisti; lipofilik olduğundan beyne geçer. Psikiyatride antipsikotiğe bağlı akatizide ilk seçeneklerdendir; performans anksiyetesinin bedensel belirtilerini (taşikardi, titreme) ve lityuma bağlı tremoru da azaltır.',
    t12: '3–6 saat', t12s: 4, etki: 'Akatizide 1–3 gün · performans anksiyetesinde 30–60 dakika', form: 'Tablet 40 mg (Türkiye); tablet 10–80 mg ve uzatılmış salımlı kapsül (ABD)',
    onay: [], onayNot: 'Psikiyatrik endikasyonda pediatrik onay yok (oral çözelti infantil hemanjiyomda onaylı)',
    onayEri: [['Hipertansiyon'], ['Angina, aritmi, miyokard infarktüsü sonrası'], ['Migren profilaksisi'], ['Esansiyel tremor']],
    ped: {
      bas: 'Ergen akatizi: 10 mg ×1–2', artis: '3–7 günde bir 10 mg/gün', hedef: '20–40 mg/gün (2–3 doza bölünmüş)', maks: 'Kiloya göre en çok 2 mg/kg/gün; ergende genellikle ≤ 80 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [4, 20], [10, 30]], bant: [20, 40], tavan: 80,
      not: ['Endikasyon dışı kullanım; ergende akatizi verisi küçük çalışmalara ve erişkin deneyimine dayanır.', 'Astım öyküsünü mutlaka sorun: bronşiyal astımda kontrendike.', 'Lityuma bağlı tremorda 10–20 mg ×2 yeterli olabilir.']
    },
    eri: {
      bas: 'Akatizi: 10 mg ×2–3', artis: '2–3 günde bir 10–20 mg/gün', hedef: '30–80 mg/gün (bölünmüş)', maks: 'Akatizide genellikle ≤ 120 mg/gün · Türkiye KÜB\'ü anksiyetede 80–160 mg/gün',
      birim: 'mg/gün', adim: [[0, 20], [3, 30], [7, 60], [14, 80]], bant: [30, 80], tavan: 160,
      not: ['Performans anksiyetesi: 10–40 mg tek doz, olaydan 30–60 dakika önce (önceden denenmiş olmalı; endikasyon dışı).', 'Lityuma bağlı tremor: 20–80 mg/gün.', 'Türkiye KÜB\'ü anksiyete ve anksiyeteye bağlı taşikardide 40 mg ×2–3 ile başlar, haftalık artışla 80–160 mg/gün.', 'Nabız < 55/dk ya da sistolik KB < 90 mmHg ise dozu atlayın.']
    },
    surdurum: ['Akatizi düzeldikten sonra antipsikotik dozu sabitse birkaç hafta–ay sürdürüp azaltmayı deneyin.', 'Yanıt 1–2 haftada değerlendirilir; yanıt yoksa antipsikotik dozunu azaltma, ilaç değişikliği ya da diğer seçenekler (ör. düşük doz mirtazapin) düşünülür.', 'Nabız ve kan basıncını her vizitte ölçün.'],
    kesme: { risk: 2, sure: '1–2 hafta (kademeli)', adim: [[0, 100], [4, 50], [8, 25], [12, 0]],
      not: ['Ani kesme rebound taşikardi ve hipertansiyona, kalp hastalığında angina ya da infarktüse yol açabilir.', 'Klonidinle birlikte kullanılıyorsa önce propranolol, birkaç gün sonra klonidin azaltılır.'] },
    izlem: 'propranolol', profil: { sed: 1, akt: 1, kv: 3, kes: 2 },
    uyari: ['Bradikardi, hipotansiyon, baş dönmesi', 'Yorgunluk, soğuk el-ayak, canlı rüya ya da kâbus, uykusuzluk', 'Bronkospazm: bronşiyal astım öyküsü ve KOAH\'ta kontrendike (Türkiye KÜB\'ü)', 'Hipoglisemi belirtilerini maskeler; uzun açlıkta ve diyabette dikkat', 'Aşırı dozda ölümcül olabilir (bradikardi, nöbet, aritmi): intihar riski olan hastada reçete miktarını sınırlayın'],
    etkilesim: ['Fluvoksamin (CYP1A2) ve fluoksetin, paroksetin (CYP2D6) düzeyi artırır', 'Klorpromazinle karşılıklı düzey artışı; tiyoridazinle kontrendike', 'Verapamil ve diltiazemle bradikardi, AV blok', 'Klonidin kesilirken rebound hipertansiyonu artırır', 'Rizatriptan düzeyini artırır; sigara propranolol düzeyini düşürür'],
    gecisNotu: 'Akatizide başka seçeneğe geçişte (ör. düşük doz mirtazapin) propranolol 1–2 haftada azaltılır. Değişim planlayıcıda bu sınıf için şema tanımlı değildir.',
    oz: []
  },
  {
    id: 'metformin', ad: 'Metformin', sinif: 'diger', altSinif: 'Biguanid (antipsikotiğe bağlı kilo artışı)', grup: 'yanetki',
    mek: 'Karaciğerde glukoz üretimini azaltır, insülin duyarlılığını artırır; iştahı ve kilo artışını azaltır. Psikiyatride antipsikotiğe bağlı kilo artışını ve insülin direncini önlemede ya da azaltmada, yaşam tarzı müdahalesine ek olarak kullanılır.',
    t12: '~6 saat (plazma)', t12s: 6, etki: 'Kilo üzerinde 8–16 hafta', form: 'Film tablet 500 / 850 / 1000 mg; uzatılmış salımlı tablet',
    onay: [['Tip 2 diabetes mellitus', '≥ 10 yaş']], onayNot: 'Antipsikotiğe bağlı kilo artışında endikasyon dışı',
    onayEri: [['Tip 2 diabetes mellitus']],
    ped: {
      bas: '10 yaş ve üstü: 500 mg ×1, akşam yemeğiyle', artis: 'Haftada bir 500 mg', hedef: '1000–2000 mg/gün (850 mg ×2 ya da 1000 mg ×2)', maks: '2000 mg/gün (Türkiye KÜB\'ü ve FDA)',
      birim: 'mg/gün', adim: [[0, 500], [7, 1000], [14, 1500], [21, 2000]], bant: [1000, 2000], tavan: 2000,
      not: ['Endikasyon dışı kullanım: antipsikotik başlarken risk yüksekse (hızlı kilo artışı, aile öyküsü, prediyabet) ya da kilo artışı gelişince, yaşam tarzı müdahalesiyle birlikte.', 'Çocuk ve ergen çalışmalarında plaseboya göre BKİ artışı sınırlanmıştır; etki orta düzeydedir.', 'Bulantı ve ishal yavaş titrasyonla azalır; tabletler yemekle alınır.']
    },
    eri: {
      bas: '500 mg ×1, akşam yemeğiyle', artis: 'Haftada bir 500 mg', hedef: '1500–2000 mg/gün (bölünmüş)', maks: 'Kilo artışında 2000 mg/gün · Türkiye KÜB\'ü diyabette 3 g/gün',
      birim: 'mg/gün', adim: [[0, 500], [7, 1000], [14, 1500], [21, 2000]], bant: [1500, 2000], tavan: 3000,
      not: ['Endikasyon dışı kullanım; antipsikotiğe bağlı kilo artışında erişkin meta-analizlerinde ortalama yaklaşık 3 kg azalma.', 'Klozapin ve olanzapin kullananlarda kanıt daha güçlüdür.', 'eGFR 30–44\'te en çok 1000 mg/gün; < 30\'da kontrendike (Türkiye KÜB\'ü).']
    },
    surdurum: ['3–4 ay sonunda kilo ve metabolik değerlerde anlamlı yanıt yoksa kesmeyi düşünün.', 'Antipsikotik sürdükçe ve yanıt varsa sürdürülebilir; böbrek işlevi yılda bir, B12 uzun süreli kullanımda izlenir.', 'Kusma, ishal ya da dehidrasyonla seyreden akut hastalıkta ilaca ara verilir; hastayı bilgilendirin.'],
    kesme: { risk: 0, sure: 'Doğrudan kesilebilir', adim: [[0, 100], [1, 0]],
      not: ['Kesilme sendromu yapmaz.', 'Diyabet tanısı varsa kesmeden önce kan şekeri kontrolü planlanır.'] },
    izlem: 'metformin', profil: { kilo: 0, gis: 3, istah: 1, kes: 0 },
    kutu: 'Laktik asidoz: nadir ama ölümcül olabilir. Risk etkenleri böbrek yetmezliği, iyotlu kontrast, ameliyat, hipoksi, aşırı alkol, karaciğer yetmezliği ve ileri yaştır.',
    uyari: ['Bulantı, ishal, karın ağrısı, metalik tat (başlangıçta sık)', 'B12 vitamini eksikliği (uzun süreli)', 'Tek başına hipoglisemi yapmaz; insülin ya da sülfonilüreyle birlikte risk artar', 'Alkolizm, akut alkol intoksikasyonu ve karaciğer yetmezliğinde kontrendike (Türkiye KÜB\'ü)'],
    etkilesim: ['İyotlu kontrast: işlemden önce ara verin, 48 saat sonra böbrek işlevi kontrol edilerek yeniden başlayın', 'Alkol laktik asidoz riskini artırır', 'Topiramat ve diğer karbonik anhidraz inhibitörleri metabolik asidoz riskini artırır', 'OCT2/MATE inhibitörleri (simetidin, dolutegravir) metformin düzeyini artırır', 'Antipsikotikler ve kortikosteroidler kan şekerini yükseltir'],
    gecisNotu: 'Antipsikotiğe bağlı kilo artışında metformin, antipsikotik değişimi (metabolik riski düşük ilaca geçiş) ile birlikte ya da onun yerine değerlendirilir. Değişim planlayıcıda bu sınıf için şema tanımlı değildir.',
    oz: []
  },
  {
    id: 'prazosin', ad: 'Prazosin', sinif: 'diger', altSinif: 'Alfa-1 adrenerjik antagonist', grup: 'travma',
    mek: 'Beyne geçen alfa-1 adrenerjik reseptör antagonisti. Uyku sırasında artmış noradrenerjik etkinliği azaltarak travma sonrası stres bozukluğuna eşlik eden kâbusları ve uyku bölünmesini azaltabilir.',
    t12: '2–3 saat', t12s: 2.5, etki: 'Kâbuslarda yeterli dozda 1–2 hafta', form: 'Kapsül 1 / 2 / 5 mg (ABD)',
    onay: [], onayNot: 'Pediatrik onay yok · Türkiye\'de ruhsatlı ürünü yok',
    onayEri: [['Hipertansiyon']],
    ped: {
      bas: 'Ergen: 0,5–1 mg yatarken', artis: '3–7 günde bir 0,5–1 mg, ortostatik KB izlemiyle', hedef: 'Yanıta göre bireysel', maks: 'Standart üst sınır belirlenmemiştir',
      birim: 'mg/gün', adim: [],
      not: ['Endikasyon dışı kullanım; çocuk ve ergende kanıt olgu serileriyle sınırlıdır.', 'Travmaya odaklı psikoterapi ilk basamak tedavidir.', 'İlk doz senkopu riski: ilk dozu yatarken verin; gece kalkarken dikkat.']
    },
    eri: {
      bas: '1 mg yatarken', artis: '3–7 günde bir 1–2 mg', hedef: '3–15 mg/gün (yatarken; gerekirse gündüz ek doz)', maks: '20 mg/gün (araştırmalarda erkekte 20, kadında 12 mg)',
      birim: 'mg/gün', adim: [[0, 1], [3, 2], [7, 4], [14, 6], [21, 10]], bant: [3, 15], tavan: 20,
      not: ['Endikasyon dışı kullanım. Kanıt çelişkilidir: erken randomize çalışmalar olumluyken büyük çok merkezli çalışma (2018) plaseboya üstünlük gösterememiştir.', 'Yeterli dozda 4–8 haftada yanıt yoksa kesin.', 'Birkaç gün ara verildiyse 1 mg\'dan yeniden titre edin.']
    },
    surdurum: ['Yanıt veren hastada kâbuslar ilaç kesilince sıklıkla geri döner; gereksinimi 6–12 ayda bir yeniden değerlendirin.', 'Travmaya odaklı psikoterapiyle birlikte kullanın.', 'Kan basıncını her vizitte ölçün.'],
    kesme: { risk: 1, sure: '1–2 hafta (kademeli)', adim: [[0, 100], [7, 50], [14, 0]],
      not: ['Belirgin kesilme sendromu yoktur; kâbuslar geri dönebilir.', 'Ara verildikten sonra yeniden başlarken ilk doz senkopu riski nedeniyle 1 mg\'dan başlayın.'] },
    izlem: 'prazosin', profil: { sed: 1, gis: 1, kv: 3, kes: 1 },
    uyari: ['İlk doz senkopu ve ortostatik hipotansiyon', 'Baş dönmesi, baş ağrısı, halsizlik, çarpıntı', 'Burun tıkanıklığı', 'Priapizm (nadir)', 'Katarakt ameliyatında gevşek iris sendromu: cerrahı bilgilendirin'],
    etkilesim: ['Antihipertansifler ve PDE-5 inhibitörleriyle (sildenafil vb.) ek hipotansiyon', 'Trazodon, ketiapin, klozapin, risperidon gibi alfa-1 bloke eden psikotroplarla ortostatik hipotansiyon artar', 'Beta-blokerlerle ilk doz hipotansiyonu artabilir', 'Alkol hipotansiyonu artırır'],
    gecisNotu: 'Kâbuslarda başka seçeneğe (ör. imgeleme provası tedavisi) geçerken prazosin 1–2 haftada azaltılır. Değişim planlayıcıda bu sınıf için şema tanımlı değildir.',
    oz: []
  }
  );
})();
