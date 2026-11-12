/* Diğer ilaçlar: madde kullanım bozukluklarında kullanılan ilaçlar ve antipsikotiğe bağlı ekstrapiramidal belirtilerde kullanılan antikolinerjikler.
   Dozlar ve Türkiye ruhsatı ilgili KÜB'lere (NOKREV, SUBOXONE, AKİNETON, SORMODREN) dayanır; FDA bilgisi ayrıca belirtilir. */
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
      bas: 'Önerilmez: 18 yaş altında güvenlilik ve etkililik verisi yetersizdir.', artis: '—', hedef: '—', maks: '—',
      birim: 'mg/gün', adim: [],
      not: ['Ergen alkol kullanım bozukluğunda küçük çalışmalarda 50 mg/gün kullanılmıştır; kullanılacaksa endikasyon dışı onam, aile katılımı ve karaciğer işlev izlemiyle.']
    },
    eri: {
      bas: '25 mg/gün ile başlanabilir (bulantıyı azaltır); opioid kullanımı şüphesinde önce nalokson provokasyon testi', artis: '1–3 gün sonra 50 mg', hedef: '50 mg/gün tek doz', maks: '50 mg/gün (Türkiye KÜB\'ü); FDA opioid bağımlılığında haftalık 350 mg\'lık şemaya (ör. 100–100–150 mg) izin verir',
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
    id: 'buprenorfin', ad: 'Buprenorfin / nalokson', sinif: 'diger', altSinif: 'Opioid parsiyel agonisti (ikame tedavisi)', grup: 'bagimlilik',
    mek: 'Mü-opioid reseptöründe yüksek afiniteli parsiyel agonist, kappa antagonisti. Yoksunluğu ve isteği baskılar; tavan etkisi nedeniyle tek başına solunum depresyonu riski tam agonistlerden düşüktür (sedatiflerle birlikte değil). Dil altında çok az emilen nalokson, damar içi kötüye kullanımı caydırır.',
    t12: '24–42 saat (buprenorfin)', t12s: 36, etki: 'Dil altı: 30–60 dakika · tek dozun etkisi 24 saati aşar', form: 'Dil altı tablet 2 mg/0,5 mg ve 8 mg/2 mg (buprenorfin/nalokson)',
    onay: [], onayNot: 'FDA: 16 yaş altında güvenlilik belirlenmemiş · Türkiye: 15 yaş üstünde endike',
    onayEri: [['Opioid kullanım bozukluğu', 'indüksiyon ve idame']],
    ped: {
      bas: '15–17 yaş (Türkiye KÜB\'ü): erişkinle aynı; 1. gün 2 mg/0,5 mg ×2 (4 mg)', artis: '1. gün gerekirse iki kez tekrarlanabilir; sonra 2–4 mg basamaklarla', hedef: '8–16 mg/gün', maks: '24 mg/gün',
      birim: 'mg/gün (buprenorfin)', adim: [[0, 4], [1, 8], [3, 12], [7, 16]], bant: [8, 16], tavan: 24,
      not: ['15 yaş altında önerilmez.', 'Ergen opioid kullanım bozukluğunda psikososyal tedavi ve aile katılımıyla; kısa süreli arınma yerine idame tedavisi nüksü azaltır.', 'Genç ve ailesine nalokson ve aşırı doz eğitimi verin.']
    },
    eri: {
      bas: '2 mg/0,5 mg ×2 (4 mg) dil altı; yoksunluk bulguları başlayınca (COWS hafif–orta), kısa etkili opioidden ≥ 6 saat, metadondan ≥ 24 saat sonra', artis: '1. gün gerekirse 2–4 mg ek dozlar; sonraki günlerde 2–4 mg basamaklarla', hedef: '8–16 mg/gün (çoğu hasta 12–16 mg)', maks: '24 mg/gün',
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
    id: 'bornaprin', ad: 'Bornaprin', sinif: 'diger', altSinif: 'Antikolinerjik (antiparkinson)', grup: 'antikolinerjik',
    mek: 'Merkezi ve periferik etkili muskarinik antagonist. Antipsikotiklere bağlı parkinsonizm ve distonide, ayrıca aşırı terlemede (hiperhidroz) kullanılır.',
    t12: '~5 saat (metabolitleriyle terminal ~30 saat)', t12s: 5, etki: '1–2 saat', form: 'Tablet 4 mg (dörde bölünebilir)',
    onay: [], onayNot: 'Çocuklarda endike değil (Türkiye KÜB\'ü) · ABD\'de onaysız',
    onayEri: [['Parkinson sendromu', 'Türkiye/Avrupa'], ['İlaca bağlı ekstrapiramidal belirtiler', 'Türkiye/Avrupa'], ['Hiperhidroz', 'Türkiye/Avrupa']],
    ped: {
      bas: 'Çocuklarda endike değildir; çocuk ve ergende deneyim yetersizdir.', artis: '—', hedef: '—', maks: '—',
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
  }
  );
})();
