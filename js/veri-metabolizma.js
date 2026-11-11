/* Psikofarmakoloji Rehberi — metabolizma ve eliminasyon verisi
   sub: substrat (2 = ana yol, 1 = küçük yol)
   inh: inhibitör (3 = güçlü, 2 = orta, 1 = zayıf)
   ind: indükleyici (3 = güçlü, 2 = orta, 1 = zayıf)
   atilim: [idrar %, dışkı %] (toplam geri kazanım, çoğu metabolit olarak)
   fe: idrarla DEĞİŞMEDEN atılan yaklaşık oran (%) */
(function () {
  window.CYP_SIRA = ['1A2', '2B6', '2C9', '2C19', '2D6', '3A4', 'UGT'];
  window.CYP_AD = function (e) { return e === 'UGT' ? 'UGT' : 'CYP' + e; };

  window.CYP_BILGI = {
    '1A2': {
      not: 'Sigara dumanı (nikotin değil, polisiklik hidrokarbonlar) enzimi indükler; sigara bırakıldığında 1–2 hafta içinde substrat düzeyleri yükselir. Ağır enfeksiyon ve inflamasyon enzimi baskılar. Kafein de bu enzimle yıkılır.',
      disInh: ['Siprofloksasin', 'Östrojen içeren kontraseptifler (zayıf–orta)', 'Kafein (yarışmalı)'],
      disInd: ['Sigara', 'Rifampisin', 'Omeprazol (zayıf)', 'Kömürde pişmiş et, lahanagiller']
    },
    '2B6': {
      not: 'Genetik çeşitlilik gösterir. Rehberdeki başlıca substratları bupropion ve sertralindir.',
      disInh: ['Klopidogrel', 'Tiklopidin'],
      disInd: ['Rifampisin', 'Efavirenz', 'Ritonavir']
    },
    '2C9': {
      not: 'Psikotrop ilaçların yıkımındaki payı sınırlıdır. İnhibisyonu daha çok eşlik eden ilaçları etkiler: fenitoin ve varfarin düzeyi artabilir.',
      disInh: ['Flukonazol', 'Amiodaron'],
      disInd: ['Rifampisin']
    },
    '2C19': {
      not: 'Genetik çeşitlilik gösterir: yavaş metabolizörlerde (Avrupa kökenlilerde yaklaşık %2–5, Doğu Asya kökenlilerde %15–20) sitalopram ve essitalopram düzeyi artar; ultra hızlı metabolizörlerde yanıtsızlık görülebilir.',
      disInh: ['Omeprazol, esomeprazol', 'Flukonazol, vorikonazol'],
      disInd: ['Rifampisin', 'Sarı kantaron']
    },
    '2D6': {
      not: 'İndüklenemez; aktiviteyi genotip belirler. Yavaş metabolizör sıklığı Avrupa kökenlilerde yaklaşık %5–10\'dur. Güçlü bir inhibitör kullanan hasta işlevsel olarak yavaş metabolizör gibi davranır (fenokonversiyon).',
      disInh: ['Kinidin', 'Terbinafin'],
      disInd: ['Bilinen klinik indükleyicisi yok (gebelikte aktivite artar)']
    },
    '3A4': {
      not: 'En çok ilacı yıkan enzimdir; bağırsak duvarında da bulunur (greyfurt suyu etkisi buradandır). İndüksiyon 1–2 haftada oturur, indükleyici kesildikten 2–4 hafta sonra kalkar.',
      disInh: ['Klaritromisin, eritromisin', 'İtrakonazol, ketokonazol', 'Ritonavir', 'Diltiazem, verapamil', 'Greyfurt suyu'],
      disInd: ['Rifampisin', 'Fenitoin, fenobarbital', 'Sarı kantaron']
    },
    'UGT': {
      not: 'Faz II glukuronidasyon enzimleri. Karaciğer hastalığında CYP yollarına göre daha iyi korunur. Östrojen içeren kontraseptifler ve gebelik UGT1A4\'ü indükler: lamotrijin düzeyi yaklaşık yarıya iner.',
      disInh: ['Probenesid'],
      disInd: ['Östrojen içeren kontraseptifler', 'Rifampisin', 'Fenitoin, fenobarbital', 'Gebelik']
    }
  };

  window.METAB = {
    /* ───────── Antidepresanlar ───────── */
    fluoksetin: {
      ozet: 'Karaciğerde yoğun metabolize olur; CYP2D6 ve CYP2C9 ile N-demetilasyonla aktif metaboliti norfluoksetine dönüşür. Kendi yıkımını inhibe ettiği için kinetiği doğrusal değildir: doz arttıkça düzey orantısız yükselir.',
      sub: { '2D6': 2, '2C9': 2, '2C19': 1, '3A4': 1 }, inh: { '2D6': 3, '2C19': 3, '2C9': 1, '3A4': 1 }, ind: {},
      aktif: 'Norfluoksetin: ana ilaçla benzer etkinlikte, yarı ömrü 4–16 gün.',
      atilim: [80, 15], fe: 3, feYazi: '%5\'in altında',
      bobrek: 'Doz ayarı genellikle gerekmez.',
      karaciger: 'Sirozda yarı ömür belirgin uzar: dozu azaltın veya gün aşırı verin.',
      etkiler: ['CYP2D6 substratlarının düzeyini belirgin artırır: atomoksetin, risperidon, aripiprazol, haloperidol, trisiklikler, vortioksetin, metoprolol. Kodein ve tramadol etkisizleşebilir.', 'CYP2C19 ve CYP2C9 inhibisyonu: diazepam, fenitoin, klomipramin ve imipramin düzeyi artar.', 'Norfluoksetin CYP3A4\'ü zayıf inhibe eder: karbamazepin, alprazolam düzeyi artabilir.', 'Enzim inhibisyonu ilaç kesildikten sonra yaklaşık 5 hafta sürer.'],
      gen: 'CYP2D6 yavaş metabolizörlerde fluoksetin yüksek, norfluoksetin düşüktür; toplam aktif madde benzer kaldığı için rutin doz ayarı önerilmez.',
      cocuk: '6–12 yaşta aynı dozda fluoksetin düzeyi ergenlerin yaklaşık 2 katı, norfluoksetin 1,5 katıdır (düşük vücut ağırlığı); düşük kilolu çocukta düşük dozda kalınır.'
    },
    sertralin: {
      ozet: 'Karaciğerde yoğun ilk geçiş metabolizmasına uğrar; N-demetilasyon birden çok enzimle yürür (en büyük pay CYP2B6 ve CYP2C19). Tek bir enzime bağımlı olmadığı için etkileşim riski görece düşüktür.',
      sub: { '2B6': 2, '2C19': 2, '2C9': 1, '2D6': 1, '3A4': 1 }, inh: { '2D6': 1 }, ind: {},
      diger: 'MAO ile deaminasyon, glukuronidasyon',
      aktif: 'Desmetilsertralin: klinik etkiye katkısı çok az, yarı ömrü 62–104 saat.',
      atilim: [45, 45], fe: 0.2, feYazi: '%1\'in altında',
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Hafif bozuklukta dozu yarıya indirin; orta–ağır bozuklukta önerilmez.',
      etkiler: ['CYP2D6 inhibisyonu doza bağlıdır: 50–100 mg\'da zayıf, 150–200 mg\'da orta düzeye çıkabilir (trisiklik, atomoksetin düzeyi artabilir).'],
      gen: 'CYP2C19 yavaş metabolizörlerde düzey yaklaşık 1,5 kat artar: düşük başlangıç ve yavaş titrasyon düşünülür.',
      cocuk: 'Çocuklarda kg başına klirens erişkinden biraz yüksektir; yine de düşük vücut ağırlığı nedeniyle düşük dozla başlanır.'
    },
    essitalopram: {
      ozet: 'Karaciğerde CYP2C19 ve CYP3A4 ile (daha az CYP2D6) N-demetilasyona uğrar. Enzim inhibisyonu zayıftır; SSRI\'lar içinde etkileşim potansiyeli en düşük olanlardandır.',
      sub: { '2C19': 2, '3A4': 2, '2D6': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: 'S-desmetilsitalopram: zayıf etkili, klinik katkısı az.',
      atilim: null, atilimYazi: 'Başlıca karaciğer metabolizmasıyla temizlenir; metabolitler idrarla atılır.', fe: 8,
      bobrek: 'Hafif–orta bozuklukta ayar gerekmez; ağır bozuklukta (kreatinin klirensi < 20–30 mL/dk) dikkatli kullanın.',
      karaciger: 'Klirens azalır: en fazla 10 mg/gün.',
      artiran: ['Omeprazol, esomeprazol, simetidin (CYP2C19): düzey yaklaşık %50 artar', 'Fluvoksamin, fluoksetin (CYP2C19)'],
      etkiler: ['CYP2D6\'yı zayıf inhibe eder: metoprolol ve desipramin düzeyi hafif artabilir.'],
      gen: 'CYP2C19 yavaş metabolizörlerde düzey yaklaşık 2 kat: en fazla 10 mg/gün. Ultra hızlı metabolizörlerde yanıtsızlık olabilir.',
      cocuk: 'Ergenlerde eğri altı alan erişkinden yaklaşık %19 düşüktür; doz ayarı gerekmez.'
    },
    sitalopram: {
      ozet: 'Karaciğerde CYP2C19 ve CYP3A4 ile (daha az CYP2D6) demetile olur. Düzey arttıkça QT uzaması arttığı için metabolizmayı yavaşlatan her durum doz sınırını düşürür.',
      sub: { '2C19': 2, '3A4': 2, '2D6': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: 'Desmetilsitalopram ve didesmetilsitalopram: zayıf etkili.',
      atilim: null, atilimYazi: 'Başlıca karaciğer metabolizmasıyla temizlenir; küçük bir bölümü değişmeden idrarla atılır.', fe: 12, feYazi: 'yaklaşık %10–15',
      bobrek: 'Hafif–orta bozuklukta ayar gerekmez; ağır bozuklukta dikkatli kullanın.',
      karaciger: 'En fazla 20 mg/gün.',
      artiran: ['Omeprazol, esomeprazol, simetidin (CYP2C19): en fazla 20 mg/gün', 'Fluvoksamin, fluoksetin (CYP2C19)'],
      etkiler: ['CYP2D6\'yı zayıf inhibe eder.'],
      gen: 'CYP2C19 yavaş metabolizörlerde düzey ve QT uzaması riski artar: en fazla 20 mg/gün.'
    },
    fluvoksamin: {
      ozet: 'Karaciğerde başlıca CYP2D6 ile (daha az CYP1A2) oksidatif demetilasyona uğrar; aktif metaboliti yoktur. Asıl önemi, birden çok enzimi güçlü biçimde inhibe etmesidir.',
      sub: { '2D6': 2, '1A2': 1 }, inh: { '1A2': 3, '2C19': 3, '3A4': 2, '2C9': 1, '2D6': 1 }, ind: {},
      aktif: null,
      atilim: [94, 0], fe: 3, feYazi: '%4\'ün altında',
      bobrek: 'Düşük dozla başlayın, yavaş artırın.',
      karaciger: 'Klirens yaklaşık %30 azalır: düşük dozla başlayın, yavaş artırın.',
      dusuren: ['Sigara: düzey yaklaşık %25 düşer'],
      etkiler: ['CYP1A2 (güçlü): klozapin düzeyi 5–10 kat, olanzapin 2 kat, duloksetin 5–6 kat, melatonin 12–17 kat artar; teofilin, tizanidin ve kafein düzeyi de yükselir.', 'CYP2C19 (güçlü): sitalopram, essitalopram, klomipramin, imipramin, diazepam düzeyi artar.', 'CYP3A4 (orta): alprazolam, buspiron, ketiapin, karbamazepin düzeyi artabilir.', 'CYP2C9: varfarin ve fenitoin etkisi artabilir.'],
      cocuk: '6–11 yaşta kararlı durum düzeyi ergenlerin 2–3 katıdır, kız çocuklarda daha da yüksektir; bu nedenle 11 yaş altında üst doz sınırı daha düşüktür.'
    },
    paroksetin: {
      ozet: 'Karaciğerde başlıca CYP2D6 ile yıkılır ve aynı enzimi güçlü, kalıcı biçimde inhibe eder. Enzim doyduğu için kinetiği doğrusal değildir: doz iki katına çıkınca düzey iki kattan fazla artar.',
      sub: { '2D6': 2 }, inh: { '2D6': 3, '2B6': 1 }, ind: {},
      aktif: null,
      atilim: [64, 36], fe: 2,
      bobrek: 'Kreatinin klirensi < 30 mL/dk: 10 mg ile başlayın, en fazla 40 mg/gün.',
      karaciger: 'Ağır bozuklukta 10 mg ile başlayın, en fazla 40 mg/gün.',
      etkiler: ['CYP2D6 substratlarının düzeyini belirgin artırır: atomoksetin (6–8 kat), risperidon, aripiprazol, trisiklikler, vortioksetin, metoprolol.', 'Tamoksifenin aktif metabolitine dönüşümünü engeller; kodein ve tramadol etkisizleşebilir.'],
      gen: 'CYP2D6 ultra hızlı metabolizörlerde düzey çok düşük kalabilir; yavaş metabolizörlerde düşük başlangıç dozu düşünülür.'
    },
    venlafaksin: {
      ozet: 'Karaciğerde CYP2D6 ile aktif metaboliti O-desmetilvenlafaksine (desvenlafaksin) dönüşür; küçük bir bölümü CYP3A4 ile demetile olur. Ana ilaç ve metabolit birlikte etkiyi oluşturur.',
      sub: { '2D6': 2, '3A4': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: 'O-desmetilvenlafaksin (desvenlafaksin): ana ilaçla eşdeğer etkinlikte, yarı ömrü yaklaşık 11 saat.',
      atilim: [87, 2], fe: 5,
      bobrek: 'Glomerüler filtrasyon hızı 10–70 mL/dk: dozu %25–50 azaltın; hemodiyalizde %50 azaltın.',
      karaciger: 'Hafif–orta bozuklukta dozu %50 azaltın.',
      artiran: ['Güçlü CYP3A4 inhibitörleri (klaritromisin, ketokonazol): özellikle CYP2D6 yavaş metabolizörlerde düzey artar'],
      gen: 'CYP2D6 yavaş metabolizörlerde venlafaksin/metabolit oranı değişir; toplam aktif madde benzer kalır, ancak yan etki (bulantı, kardiyovasküler) artabilir.'
    },
    duloksetin: {
      ozet: 'Karaciğerde CYP1A2 ve CYP2D6 ile yoğun metabolize olur; metabolitleri etkisizdir. Aynı zamanda orta düzeyde CYP2D6 inhibitörüdür.',
      sub: { '1A2': 2, '2D6': 2 }, inh: { '2D6': 2 }, ind: {},
      aktif: null,
      atilim: [70, 20], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Kreatinin klirensi < 30 mL/dk: kullanmaktan kaçının.',
      karaciger: 'Karaciğer yetmezliğinde ve yoğun alkol kullanımında kullanılmaz.',
      artiran: ['Fluvoksamin, siprofloksasin (CYP1A2): düzey 5–6 kat artar, birlikte kullanmayın', 'Paroksetin, fluoksetin (CYP2D6): düzey yaklaşık %60 artar'],
      dusuren: ['Sigara: düzey yaklaşık %30 düşer'],
      etkiler: ['CYP2D6 (orta): trisiklik, atomoksetin, risperidon, metoprolol düzeyi artabilir.']
    },
    mirtazapin: {
      ozet: 'Karaciğerde üç enzimle yıkılır: CYP2D6 ve CYP1A2 (hidroksilasyon), CYP3A4 (demetilasyon ve N-oksidasyon). Enzim inhibisyonu yapmaz.',
      sub: { '2D6': 2, '3A4': 2, '1A2': 1 }, inh: {}, ind: {},
      aktif: 'Desmetilmirtazapin: zayıf etkili, klinik katkısı az.',
      atilim: [75, 15], fe: 4, feYazi: '%5\'in altında',
      bobrek: 'Orta–ağır bozuklukta klirens %30–50 azalır: düşük dozla başlayın.',
      karaciger: 'Klirens yaklaşık %30 azalır: düşük dozla başlayın.',
      artiran: ['Güçlü CYP3A4 inhibitörleri (ketokonazol), simetidin: düzey %40–60 artar'],
      dusuren: ['Karbamazepin, fenitoin: düzey yaklaşık %50–60 düşer']
    },
    bupropion: {
      ozet: 'Karaciğerde CYP2B6 ile aktif metaboliti hidroksibupropiona dönüşür; ayrıca karbonil redüktazlarla treo- ve eritrohidrobupropion oluşur. Metabolit düzeyleri ana ilaçtan yüksektir. Kendisi ve metabolitleri güçlü CYP2D6 inhibitörüdür.',
      sub: { '2B6': 2 }, inh: { '2D6': 3 }, ind: {},
      diger: 'Karbonil redüktaz',
      aktif: 'Hidroksibupropion (yarı ömrü yaklaşık 20 saat), treohidrobupropion ve eritrohidrobupropion (yaklaşık 33–37 saat).',
      atilim: [87, 10], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Metabolitler birikir: dozu ve/veya doz sıklığını azaltın.',
      karaciger: 'Hafif–orta bozuklukta dozu azaltın; ağır sirozda en düşük dozu gün aşırı verin.',
      dusuren: ['Karbamazepin, fenitoin, fenobarbital, ritonavir, efavirenz (CYP2B6 indüksiyonu)'],
      artiran: ['Klopidogrel, tiklopidin (CYP2B6)'],
      etkiler: ['CYP2D6 (güçlü): atomoksetin, vortioksetin, trisiklikler, risperidon, aripiprazol, haloperidol, metoprolol düzeyi belirgin artar.', 'Tamoksifenin etkinliğini azaltabilir.']
    },
    trazodon: {
      ozet: 'Karaciğerde CYP3A4 ile aktif metaboliti m-klorofenilpiperazine (mCPP) dönüşür; mCPP ise CYP2D6 ile yıkılır. Enzim inhibisyonu yapmaz.',
      sub: { '3A4': 2, '2D6': 1 }, inh: {}, ind: {},
      aktif: 'mCPP: serotonin reseptör agonisti; anksiyete ve baş ağrısına katkıda bulunabilir.',
      atilim: [72, 21], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Ağır bozuklukta dikkatli kullanın.',
      karaciger: 'Dikkatli kullanın; düşük dozla başlayın.',
      artiran: ['Ritonavir, ketokonazol, itrakonazol, klaritromisin (CYP3A4): dozu azaltın'],
      dusuren: ['Karbamazepin: düzey yaklaşık %75 düşer']
    },
    vortioksetin: {
      ozet: 'Karaciğerde başlıca CYP2D6 ile oksidasyona, ardından glukuronidasyona uğrar; birçok enzimin küçük katkısı vardır. Metabolitleri etkisizdir, enzim inhibisyonu veya indüksiyonu yapmaz.',
      sub: { '2D6': 2, '3A4': 1, '2C19': 1, '2C9': 1, '2B6': 1 }, inh: {}, ind: {},
      aktif: null,
      atilim: [59, 26], fe: 0.5, feYazi: 'ihmal edilebilir',
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Hafif–orta bozuklukta ayar gerekmez; ağır bozuklukta dikkatli kullanın.',
      artiran: ['Bupropion, fluoksetin, paroksetin (güçlü CYP2D6 inhibitörleri): dozu yarıya indirin'],
      dusuren: ['Rifampisin, karbamazepin, fenitoin (14 günden uzun birlikte kullanım): doz artırımı gerekebilir'],
      gen: 'CYP2D6 yavaş metabolizörlerde düzey yaklaşık 2 kat: en fazla 10 mg/gün.'
    },
    klomipramin: {
      ozet: 'Karaciğerde CYP2C19 (ayrıca CYP3A4 ve CYP1A2) ile aktif metaboliti desmetilklomipramine demetile olur; hem ana ilaç hem metabolit CYP2D6 ile hidroksillenir. Terapötik aralığı dardır.',
      sub: { '2C19': 2, '2D6': 2, '3A4': 1, '1A2': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: 'Desmetilklomipramin: noradrenerjik etkisi baskın, yarı ömrü yaklaşık 70 saat; düzeyi ana ilaçtan yüksektir.',
      atilim: [60, 32], fe: 1, feYazi: '%2\'nin altında',
      bobrek: 'Dikkatli kullanın.',
      karaciger: 'Düşük dozla başlayın; düzey ve EKG izleyin.',
      artiran: ['Fluoksetin, paroksetin, bupropion (CYP2D6): düzey katlanır, kardiyotoksisite riski', 'Fluvoksamin (CYP2C19, CYP1A2): klomipramin yükselir, desmetil metaboliti düşer'],
      dusuren: ['Karbamazepin, fenitoin, rifampisin', 'Sigara'],
      gen: 'CYP2D6 veya CYP2C19 yavaş metabolizörlerde düzey belirgin artar: dozu yaklaşık %50 azaltıp düzey izleyin.'
    },
    imipramin: {
      ozet: 'Karaciğerde CYP2C19 (ayrıca CYP1A2 ve CYP3A4) ile aktif metaboliti desipramine demetile olur; ana ilaç ve metabolit CYP2D6 ile hidroksillenir. Terapötik aralığı dardır.',
      sub: { '2C19': 2, '2D6': 2, '1A2': 1, '3A4': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: 'Desipramin: noradrenerjik etkisi baskın, yarı ömrü 12–36 saat.',
      atilim: [80, 20], fe: 3, feYazi: '%5\'in altında',
      bobrek: 'Dikkatli kullanın.',
      karaciger: 'Düşük dozla başlayın; düzey ve EKG izleyin.',
      artiran: ['Fluoksetin, paroksetin, bupropion (CYP2D6): düzey 2–4 kat artar', 'Fluvoksamin (CYP2C19, CYP1A2)', 'Metilfenidat ile düzey artışı bildirilmiştir'],
      dusuren: ['Karbamazepin, fenitoin, fenobarbital', 'Sigara'],
      gen: 'CYP2D6 veya CYP2C19 yavaş metabolizörlerde düzey belirgin artar: dozu yaklaşık %50 azaltıp düzey izleyin.'
    },

    /* ───────── DEHB ilaçları ───────── */
    metilfenidat: {
      ozet: 'CYP enzimleriyle değil, karaciğerdeki karboksilesteraz 1 (CES1) ile hızla etkisiz ritalinik aside hidrolize olur. Bu nedenle CYP üzerinden etkileşimi azdır.',
      sub: {}, inh: {}, ind: {},
      diger: 'Karboksilesteraz 1 (CES1)',
      aktif: null,
      atilim: [90, 3], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Doz ayarı gerekmez (etkisiz metabolit idrarla atılır).',
      karaciger: 'Resmi doz ayarı yok; klinik yanıta göre titre edin.',
      etkiler: ['Trisiklik antidepresan, fenitoin, fenobarbital ve varfarin düzeylerinde artış bildirilmiştir; birlikte kullanımda izleyin.', 'Alkolle birlikte alındığında CES1 üzerinden etilfenidat oluşur; bazı uzun salımlı formlarda alkol salımı hızlandırır.'],
      cocuk: 'Çocuklarda yarı ömür yaklaşık 2,5 saat, erişkinde 3,5 saattir.'
    },
    lisdeksamfetamin: {
      ozet: 'Ön ilaçtır: emildikten sonra eritrositlerdeki peptidazlarla d-amfetamin ve lizine ayrılır; bu dönüşüm CYP\'den bağımsızdır. d-amfetaminin bir bölümü karaciğerde (kısmen CYP2D6) yıkılır, önemli bir bölümü değişmeden idrarla atılır.',
      sub: { '2D6': 1 }, inh: {}, ind: {},
      diger: 'Eritrosit peptidazları (ön ilaç aktivasyonu)',
      aktif: 'd-amfetamin: etkiden sorumlu madde, yarı ömrü yaklaşık 10–12 saat.',
      atilim: [96, 0], fe: 40, feYazi: 'yaklaşık %30–40 (d-amfetamin; idrar pH\'sına bağlı)',
      bobrek: 'Ağır bozuklukta (glomerüler filtrasyon hızı 15–30 mL/dk) en fazla 50 mg/gün; son dönem böbrek yetmezliğinde en fazla 30 mg/gün.',
      karaciger: 'Doz ayarı gerekmez.',
      artiran: ['İdrarı alkalileştirenler (sodyum bikarbonat, asetazolamid): atılım azalır, etki uzar'],
      dusuren: ['İdrarı asitleştirenler (yüksek doz C vitamini, amonyum klorür): atılım hızlanır'],
      cocuk: 'd-amfetamin yarı ömrü çocuklarda yaklaşık 9 saat, ergen ve erişkinde 10–13 saattir.'
    },
    atomoksetin: {
      ozet: 'Karaciğerde başlıca CYP2D6 ile 4-hidroksiatomoksetine dönüşür ve glukuronidlenerek atılır. Metabolizması CYP2D6 genotipine çok bağımlıdır: yavaş metabolizörlerde maruziyet yaklaşık 10 kat, yarı ömür 5 saatten 20–24 saate çıkar.',
      sub: { '2D6': 2, '2C19': 1 }, inh: {}, ind: {},
      aktif: '4-hidroksiatomoksetin: ana ilaçla eşdeğer etkili, ancak hızla glukuronidlendiği için plazma düzeyi çok düşüktür.',
      atilim: [80, 17], fe: 2, feYazi: '%3\'ün altında',
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Orta bozuklukta (Child-Pugh B) dozu yarıya, ağır bozuklukta (Child-Pugh C) dörtte bire indirin.',
      artiran: ['Fluoksetin, paroksetin, bupropion (güçlü CYP2D6 inhibitörleri): 0,5 mg/kg/gün ile başlayın, 4 hafta sonra yanıt yoksa ve tolere ediliyorsa artırın'],
      gen: 'CYP2D6 yavaş metabolizörlerde (Avrupa kökenlilerde yaklaşık %7): 0,5 mg/kg/gün ile başlayın, hedef doza ancak 4 hafta sonra çıkın; nabız ve kan basıncı artışı daha belirgindir.',
      cocuk: 'Çocuk ve ergende kg\'a göre düzeltilmiş farmakokinetik erişkine benzer; bireyler arası fark CYP2D6 fenotipinden kaynaklanır.'
    },
    guanfasin: {
      ozet: 'Yaklaşık yarısı karaciğerde CYP3A4 ile yıkılır, kalanı değişmeden idrarla atılır. CYP3A4 inhibitör ve indükleyicileri düzeyi belirgin değiştirir.',
      sub: { '3A4': 2 }, inh: {}, ind: {},
      aktif: null,
      atilim: null, atilimYazi: 'Başlıca idrarla atılır (değişmemiş ilaç ve metabolitler).', fe: 40, feYazi: 'yaklaşık %30–50',
      bobrek: 'Ağır bozuklukta dozu azaltmak gerekebilir.',
      karaciger: 'Belirgin bozuklukta dozu azaltmak gerekebilir.',
      artiran: ['Ketokonazol, itrakonazol, klaritromisin, ritonavir (güçlü CYP3A4 inhibitörleri): düzey yaklaşık 3 kat, dozu yarıya indirin', 'Greyfurt suyu'],
      dusuren: ['Rifampisin, karbamazepin, fenitoin, sarı kantaron: düzey yaklaşık %70 düşer, doz iki katına kadar artırılabilir'],
      etkiler: ['Valproat düzeyini artırabildiği bildirilmiştir; birlikte kullanımda valproat düzeyini izleyin.'],
      cocuk: 'Maruziyet vücut ağırlığıyla ters orantılıdır: aynı dozda çocuklarda ergenlerden yüksektir; hedef doz mg/kg üzerinden belirlenir.'
    },
    klonidin: {
      ozet: 'Yaklaşık yarısı karaciğerde (başlıca CYP2D6) etkisiz metabolitlere yıkılır, yarısı değişmeden idrarla atılır. CYP üzerinden etkileşimi klinikte önemsizdir.',
      sub: { '2D6': 1 }, inh: {}, ind: {},
      aktif: null,
      atilim: null, atilimYazi: 'Başlıca idrarla atılır; küçük bir bölümü dışkıyla.', fe: 50, feYazi: 'yaklaşık %40–60',
      bobrek: 'Yarı ömür 40 saate dek uzar: düşük dozla başlayın, yavaş artırın.',
      karaciger: 'Doz ayarı genellikle gerekmez.'
    },

    /* ───────── Antipsikotikler ───────── */
    risperidon: {
      ozet: 'Karaciğerde CYP2D6 ile aktif metaboliti 9-hidroksirisperidona (paliperidon) dönüşür. Ana ilaç ile metabolitin toplamı (aktif fraksiyon) genotipten az etkilenir; ancak inhibitör ve indükleyiciler toplamı değiştirir.',
      sub: { '2D6': 2, '3A4': 1 }, inh: { '2D6': 1 }, ind: {},
      aktif: '9-hidroksirisperidon (paliperidon): ana ilaçla eşdeğer etkili, yarı ömrü yaklaşık 21–24 saat; böbrekle atılır.',
      atilim: [70, 14], fe: 35, feYazi: 'aktif fraksiyon olarak yaklaşık %35–45',
      bobrek: 'Ağır bozuklukta aktif fraksiyonun klirensi %60 azalır: düşük dozla başlayın, yavaş artırın.',
      karaciger: 'Ağır bozuklukta serbest fraksiyon artar: düşük dozla başlayın, yavaş artırın.',
      artiran: ['Fluoksetin, paroksetin (CYP2D6): aktif fraksiyon %40–75 artar, risperidon dozunu azaltın'],
      dusuren: ['Karbamazepin, fenitoin, rifampisin: aktif fraksiyon yaklaşık %50 düşer'],
      cocuk: 'Çocuklarda aktif fraksiyonun farmakokinetiği kg\'a göre düzeltildiğinde erişkine benzer.'
    },
    aripiprazol: {
      ozet: 'Karaciğerde CYP2D6 ve CYP3A4 ile yıkılır; aktif metaboliti dehidroaripiprazol oluşur. Enzim inhibisyonu yapmaz. Her iki yolun inhibitör ve indükleyicilerinde doz ayarı gerekir.',
      sub: { '2D6': 2, '3A4': 2 }, inh: {}, ind: {},
      aktif: 'Dehidroaripiprazol: ana ilaçla benzer etkili, yarı ömrü yaklaşık 94 saat; toplam maruziyetin %40 kadarını oluşturur.',
      atilim: [25, 55], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Doz ayarı gerekmez.',
      artiran: ['Fluoksetin, paroksetin, bupropion (güçlü CYP2D6 inhibitörleri) veya ketokonazol, klaritromisin (güçlü CYP3A4 inhibitörleri): dozu yarıya indirin', 'İkisi birlikte: dozu dörtte bire indirin'],
      dusuren: ['Karbamazepin, rifampisin (güçlü CYP3A4 indükleyicileri): dozu 1–2 haftada iki katına çıkarın'],
      gen: 'CYP2D6 yavaş metabolizörlerde yarı ömür 75 saatten 146 saate uzar: dozu yarıya indirin.',
      cocuk: '10–17 yaşta kg\'a göre düzeltilmiş farmakokinetik erişkine benzer.'
    },
    olanzapin: {
      ozet: 'Karaciğerde iki ana yolla yıkılır: doğrudan glukuronidasyon (UGT1A4) ve CYP1A2 ile oksidasyon; CYP2D6\'nın payı küçüktür. Metabolitleri etkisizdir.',
      sub: { '1A2': 2, 'UGT': 2, '2D6': 1 }, inh: {}, ind: {},
      aktif: null,
      atilim: [57, 30], fe: 7,
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Orta bozuklukta düşük dozla başlayın.',
      artiran: ['Fluvoksamin (CYP1A2): düzey yaklaşık 2 kat', 'Siprofloksasin', 'Sigarayı bırakma: düzey 1–2 haftada yükselir'],
      dusuren: ['Sigara: klirens yaklaşık %40 artar', 'Karbamazepin: klirens yaklaşık %50 artar', 'Rifampisin'],
      not: ['Kadınlarda klirens erkeklerden yaklaşık %30 düşüktür.'],
      cocuk: 'Ergenlerde ortalama maruziyet erişkinden yaklaşık %27 yüksektir (düşük vücut ağırlığı ve daha az sigara kullanımı).'
    },
    ketiapin: {
      ozet: 'Karaciğerde başlıca CYP3A4 ile yoğun metabolize olur; aktif metaboliti norketiapin oluşur ve CYP2D6 ile yıkılır. CYP3A4 inhibitör ve indükleyicileri düzeyi çok belirgin değiştirir.',
      sub: { '3A4': 2, '2D6': 1 }, inh: {}, ind: {},
      aktif: 'Norketiapin (N-desalkilketiapin): noradrenalin geri alım inhibisyonu ve antidepresan etkiden sorumlu, yarı ömrü yaklaşık 12 saat.',
      atilim: [73, 20], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Doz ayarı gerekmez.',
      karaciger: 'Klirens yaklaşık %30 azalır: 25 mg ile başlayın, 25–50 mg/gün basamaklarla artırın.',
      artiran: ['Ketokonazol, itrakonazol, klaritromisin, ritonavir (güçlü CYP3A4 inhibitörleri): düzey 5–8 kat, dozu altıda bire indirin', 'Greyfurt suyu'],
      dusuren: ['Karbamazepin, fenitoin, rifampisin: düzey %80\'e dek düşer; 5 kata kadar doz artırımı gerekebilir, indükleyici kesilince 7–14 günde eski doza inin'],
      cocuk: '10–17 yaşta kg\'a göre düzeltildiğinde ketiapin düzeyi erişkinden yaklaşık %40 düşük, norketiapin %45 yüksektir.'
    },
    klozapin: {
      ozet: 'Karaciğerde başlıca CYP1A2 ile (daha az CYP3A4, CYP2C19 ve CYP2D6) yıkılır. Düzeyi sigara, kafein, enfeksiyon ve CYP1A2 inhibitörleriyle büyük oranda değişir; terapötik aralığı dardır.',
      sub: { '1A2': 2, '3A4': 1, '2C19': 1, '2D6': 1 }, inh: {}, ind: {},
      aktif: 'Norklozapin (N-desmetilklozapin): kısmen aktif. Klozapin N-oksit etkisizdir.',
      atilim: [50, 30], fe: 0.5, feYazi: 'eser miktarda',
      bobrek: 'Ağır bozuklukta dikkatli kullanın.',
      karaciger: 'Belirgin bozuklukta dozu azaltın; karaciğer işlev testlerini izleyin.',
      artiran: ['Fluvoksamin, siprofloksasin (güçlü CYP1A2 inhibitörleri): düzey 5–10 kat, dozu üçte bire indirin', 'Sigarayı bırakma: 1–2 haftada düzey 1,5–2 kat artar, dozu azaltın', 'Ağır enfeksiyon, inflamasyon (CRP yüksekliği): toksisite riski', 'Kafein, östrojen içeren kontraseptifler'],
      dusuren: ['Sigara: düzey yaklaşık %50 düşer', 'Karbamazepin (ayrıca kemik iliği baskılanması nedeniyle birlikte kullanılmaz), fenitoin, rifampisin'],
      gen: 'CYP2D6 yavaş metabolizörlerde doz azaltımı gerekebilir.',
      not: ['Sigara, kafein veya eşlik eden ilaç değiştiğinde ve enfeksiyon sırasında plazma düzeyi bakın.']
    },
    haloperidol: {
      ozet: 'Karaciğerde üç yolla yıkılır: glukuronidasyon (en büyük pay), CYP3A4 ve CYP2D6 ile oksidasyon, karbonil redüktaz ile indirgenme (indirgenmiş haloperidol yeniden ana ilaca dönebilir).',
      sub: { '3A4': 2, '2D6': 2, 'UGT': 2 }, inh: { '2D6': 2 }, ind: {},
      diger: 'Karbonil redüktaz',
      aktif: 'İndirgenmiş haloperidol: zayıf etkili; ana ilaca geri dönüşebilir.',
      atilim: null, atilimYazi: 'Metabolitler idrar ve safra yoluyla atılır.', fe: 1,
      bobrek: 'Doz ayarı genellikle gerekmez.',
      karaciger: 'Düşük dozla başlayın, dikkatli artırın.',
      artiran: ['Fluoksetin, paroksetin (CYP2D6), ketokonazol, itrakonazol, ritonavir (CYP3A4): düzey %20–40 artar, QT ve ekstrapiramidal yan etki izleyin'],
      dusuren: ['Karbamazepin, fenitoin, rifampisin: düzey yaklaşık %50 düşer', 'Sigara'],
      etkiler: ['CYP2D6 (orta): trisiklik antidepresan düzeyi artabilir.'],
      gen: 'CYP2D6 yavaş metabolizörlerde düzey ve ekstrapiramidal yan etki riski artar: düşük dozla başlayın.'
    },
    paliperidon: {
      ozet: 'Karaciğerde çok az metabolize olur; CYP enzimlerinin katkısı klinik olarak önemsizdir. Yaklaşık %60\'ı değişmeden böbrekle atılır. Bu nedenle doz karaciğere değil böbrek işlevine göre ayarlanır.',
      sub: {}, inh: {}, ind: {},
      diger: 'Böbrekle değişmeden atılım; P-glikoprotein substratı',
      aktif: null,
      atilim: [80, 11], fe: 59,
      bobrek: 'Kreatinin klirensi 50–80 mL/dk: en fazla 6 mg/gün; 10–50 mL/dk: en fazla 3 mg/gün; < 10 mL/dk: önerilmez.',
      karaciger: 'Hafif–orta bozuklukta doz ayarı gerekmez.',
      artiran: ['Valproat: düzey yaklaşık %50 artabilir'],
      dusuren: ['Karbamazepin (böbrek atılımını ve P-glikoproteini indükler): düzey yaklaşık %37 düşer']
    },
    ziprasidon: {
      ozet: 'Karaciğerde yoğun metabolize olur: yaklaşık üçte ikisi aldehit oksidaz ile indirgenir, üçte biri CYP3A4 ile oksitlenir. Aldehit oksidazın bilinen klinik inhibitörü veya indükleyicisi yoktur; bu nedenle etkileşimleri sınırlıdır.',
      sub: { '3A4': 1 }, inh: {}, ind: {},
      diger: 'Aldehit oksidaz (ana yol)',
      aktif: null,
      atilim: [20, 66], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Oral formda doz ayarı gerekmez.',
      karaciger: 'Hafif–orta bozuklukta maruziyet %20–30 artar: dikkatli kullanın.',
      artiran: ['Ketokonazol (CYP3A4): düzey yaklaşık %35–40 artar'],
      dusuren: ['Karbamazepin: düzey yaklaşık %35 düşer'],
      not: ['Emilim yemekle iki katına çıkar: en az 500 kcal\'lik öğünle alınmalıdır.']
    },
    lurasidon: {
      ozet: 'Karaciğerde neredeyse yalnızca CYP3A4 ile yıkılır. Bu nedenle güçlü CYP3A4 inhibitörleri ve indükleyicileriyle birlikte kullanımı kontrendikedir.',
      sub: { '3A4': 2 }, inh: {}, ind: {},
      aktif: 'İki aktif metabolit (ID-14283, ID-14326): toplam etkiye katkıları sınırlı.',
      atilim: [9, 80], fe: 0.5, feYazi: 'eser miktarda',
      bobrek: 'Orta–ağır bozuklukta 20 mg ile başlayın, en fazla 80 mg/gün.',
      karaciger: 'Orta bozuklukta en fazla 80 mg/gün; ağır bozuklukta en fazla 40 mg/gün.',
      artiran: ['Ketokonazol, klaritromisin, ritonavir (güçlü CYP3A4 inhibitörleri): düzey 9 kata dek artar, kontrendike', 'Diltiazem, eritromisin, flukonazol (orta inhibitörler): dozu yarıya indirin, en fazla 80 mg/gün', 'Greyfurt suyu: kaçının'],
      dusuren: ['Rifampisin, karbamazepin, fenitoin, sarı kantaron (güçlü indükleyiciler): düzey %80\'den fazla düşer, kontrendike'],
      not: ['Emilim yemekle 2–3 katına çıkar: en az 350 kcal\'lik öğünle alınmalıdır.']
    },

    /* ───────── Duygudurum düzenleyiciler ───────── */
    lityum: {
      ozet: 'Metabolize olmaz ve plazma proteinlerine bağlanmaz; tamamına yakını değişmeden böbrekle atılır. Glomerülden süzülür ve proksimal tübülde sodyumla birlikte yaklaşık %80\'i geri emilir. Bu nedenle düzeyi böbrek işlevi, sodyum ve sıvı dengesi belirler; CYP etkileşimi yoktur.',
      sub: {}, inh: {}, ind: {},
      diger: 'Metabolize olmaz; böbrekle değişmeden atılır',
      aktif: null,
      atilim: [97, 1], fe: 95, feYazi: '%95\'in üzerinde',
      bobrek: 'Klirens glomerüler filtrasyon hızıyla orantılıdır: hafif–orta bozuklukta dozu azaltıp sık düzey bakın; ağır bozuklukta kaçının.',
      karaciger: 'Doz ayarı gerekmez.',
      artiran: ['Steroid olmayan antiinflamatuvarlar (ibuprofen, naproksen, diklofenak)', 'ACE inhibitörleri, anjiyotensin reseptör blokerleri', 'Tiyazid diüretikler', 'Dehidratasyon, kusma, ishal, ateş, tuz kısıtlaması'],
      dusuren: ['Kafein, teofilin', 'Ozmotik diüretikler, asetazolamid', 'Yüksek sodyum alımı'],
      cocuk: 'Çocuklarda böbrek klirensi yüksek, yarı ömür kısadır (yaklaşık 18 saat): kg başına daha yüksek doz ve bölünmüş doz gerekebilir.'
    },
    valproat: {
      ozet: 'Karaciğerde üç yolla yıkılır: glukuronidasyon (%30–50), mitokondriyal beta-oksidasyon (yaklaşık %40) ve CYP ile oksidasyon (yaklaşık %10; CYP2C9, CYP2A6, CYP2B6). CYP yolunda oluşan 4-en-valproat hepatotoksisiteden sorumlu tutulur. Kendisi enzim inhibitörüdür.',
      sub: { 'UGT': 2, '2C9': 1, '2B6': 1 }, inh: { 'UGT': 2, '2C9': 1 }, ind: {},
      diger: 'Mitokondriyal beta-oksidasyon',
      aktif: 'Aktif metabolitlerin klinik katkısı az; 4-en-valproat toksik metabolittir.',
      atilim: null, atilimYazi: 'Metabolitler (başlıca glukuronid) idrarla atılır.', fe: 2, feYazi: '%3\'ün altında',
      bobrek: 'Doz ayarı genellikle gerekmez; proteine bağlanma azaldığı için serbest düzey toplam düzeyden yüksek olabilir.',
      karaciger: 'Karaciğer hastalığında kontrendikedir.',
      artiran: ['Asetilsalisilik asit (proteinden ayırır, metabolizmayı yavaşlatır)', 'Felbamat'],
      dusuren: ['Karbapenem antibiyotikler (meropenem, imipenem): düzey saatler içinde %60–100 düşer, birlikte kullanmayın', 'Karbamazepin, fenitoin, fenobarbital, rifampisin', 'Östrojen içeren kontraseptifler'],
      etkiler: ['Lamotrijinin glukuronidasyonunu inhibe eder: lamotrijin yarı ömrü yaklaşık 2 katına çıkar, lamotrijin dozu yarıya indirilir.', 'Lorazepam klirensini azaltır: lorazepam dozu %50 azaltılır.', 'Epoksit hidrolazı inhibe eder: karbamazepin-epoksit düzeyi artar (nörotoksisite).', 'Fenobarbital ve rufinamid düzeyini artırır; fenitoini proteinden ayırır.'],
      not: ['Proteine bağlanması doygunluk gösterir: yüksek dozda ve hipoalbüminemide serbest (etkin) düzey orantısız artar.'],
      cocuk: 'İki yaş altında ve çoklu antiepileptik kullanımında toksik metabolit oluşumu ve ölümcül hepatotoksisite riski en yüksektir. Çocuklarda kg başına klirens erişkinden yüksektir.'
    },
    lamotrijin: {
      ozet: 'CYP enzimleriyle değil, karaciğerde glukuronidasyonla (başlıca UGT1A4) etkisiz glukuronide dönüşür. Düzeyi glukuronidasyonu inhibe eden valproatla yaklaşık 2 katına çıkar, indükleyicilerle yarıya iner; titrasyon şeması buna göre seçilir.',
      sub: { 'UGT': 2 }, inh: {}, ind: {},
      aktif: null,
      atilim: [94, 2], fe: 10,
      bobrek: 'Ağır bozuklukta idame dozunu azaltın.',
      karaciger: 'Orta bozuklukta dozu yaklaşık %25, asitli ağır bozuklukta %50 azaltın.',
      artiran: ['Valproat: yarı ömür 25 saatten yaklaşık 60–70 saate uzar; başlangıç ve idame dozu yarıya indirilir'],
      dusuren: ['Karbamazepin, fenitoin, fenobarbital, primidon, rifampisin: düzey yaklaşık %40–50 düşer', 'Östrojen içeren kontraseptifler: düzey yaklaşık %50 düşer; hapsız haftada düzey yükselir', 'Gebelik: klirens giderek artar, doğumdan sonra hızla eski haline döner'],
      not: ['İndükleyici veya östrojenli kontraseptif kesildiğinde lamotrijin düzeyi yükselir: dozu azaltmak gerekebilir.'],
      cocuk: 'Çocuklarda (özellikle 30 kg altında) kg başına klirens erişkinden yüksektir; idame dozu kg başına daha yüksek olabilir.'
    },
    karbamazepin: {
      ozet: 'Karaciğerde CYP3A4 ile aktif metaboliti karbamazepin-10,11-epokside dönüşür; epoksit, epoksit hidrolaz ile etkisiz diole yıkılır. Güçlü enzim indükleyicidir ve kendi metabolizmasını da indükler (oto-indüksiyon): ilk 3–5 haftada yarı ömür 25–65 saatten 12–17 saate iner, doz artırımı gerekir.',
      sub: { '3A4': 2 }, inh: {}, ind: { '3A4': 3, '2B6': 3, '1A2': 2, '2C19': 2, 'UGT': 2, '2C9': 1 },
      diger: 'Epoksit hidrolaz',
      aktif: 'Karbamazepin-10,11-epoksit: antiepileptik etkili ve nörotoksisiteye katkıda bulunur.',
      atilim: [72, 28], fe: 3,
      bobrek: 'Doz ayarı genellikle gerekmez.',
      karaciger: 'Ağır karaciğer hastalığında kaçının; karaciğer işlev testlerini izleyin.',
      artiran: ['Klaritromisin, eritromisin, flukonazol, ketokonazol, diltiazem, verapamil (CYP3A4): toksisite', 'Fluoksetin, fluvoksamin', 'Greyfurt suyu', 'Valproat: epoksit düzeyi artar'],
      dusuren: ['Fenitoin, fenobarbital, rifampisin', 'Kendi oto-indüksiyonu (ilk 3–5 hafta)'],
      etkiler: ['Birçok ilacın düzeyini düşürür: aripiprazol, ketiapin, risperidon, haloperidol, klozapin, olanzapin, lurasidon, lamotrijin, valproat, sertralin, bupropion, mirtazapin, trazodon, klonazepam, guanfasin.', 'Hormonal kontraseptiflerin etkinliğini azaltır; varfarin etkisini azaltır.', 'İndüksiyon kesildikten 2–4 hafta sonra kalkar: eşlik eden ilaçların dozu yeniden ayarlanmalıdır.'],
      cocuk: 'Çocuklarda klirens hızlı, epoksit/ana ilaç oranı yüksektir; günde 3–4 doza bölmek gerekebilir.'
    },

    /* ───────── Anksiyolitik ve uyku ilaçları ───────── */
    melatonin: {
      ozet: 'Karaciğerde başlıca CYP1A2 ile 6-hidroksimelatonine dönüşür, sülfat ve glukuronid konjugatı olarak atılır. İlk geçiş metabolizması yoğundur (biyoyararlanım yaklaşık %15) ve bireyler arası fark büyüktür.',
      sub: { '1A2': 2, '2C19': 1 }, inh: {}, ind: {},
      aktif: null,
      atilim: [90, 0], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Dikkatli kullanın.',
      karaciger: 'Klirens belirgin azalır: karaciğer yetmezliğinde önerilmez.',
      artiran: ['Fluvoksamin: düzey 12–17 kat artar, birlikte kullanmayın', 'Östrojen içeren kontraseptifler, simetidin, siprofloksasin', 'Kafein'],
      dusuren: ['Sigara', 'Karbamazepin, rifampisin'],
      cocuk: 'Bazı çocuklarda (özellikle otizm spektrum bozukluğunda) yavaş CYP1A2 metabolizması nedeniyle etkinin haftalar içinde kaybolduğu bildirilmiştir; bu durumda doz artırmak yerine azaltmak yanıtı geri getirebilir.'
    },
    hidroksizin: {
      ozet: 'Karaciğerde alkol dehidrogenaz ile aktif metaboliti setirizine dönüşür; ayrıca CYP3A4/3A5 ile yıkılır. Setirizin böbrekle atılır.',
      sub: { '3A4': 1 }, inh: { '2D6': 1 }, ind: {},
      diger: 'Alkol dehidrogenaz (setirizine dönüşüm)',
      aktif: 'Setirizin: antihistaminik etkili, sedasyonu az; böbrekle atılır.',
      atilim: null, atilimYazi: 'Metabolitler başlıca idrarla atılır (setirizin).', fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Orta–ağır bozuklukta dozu yarıya indirin (setirizin birikir).',
      karaciger: 'Günlük dozu üçte bir azaltın.',
      artiran: ['Güçlü CYP3A4 inhibitörleri ve alkol dehidrogenaz inhibitörleri: düzey ve QT uzaması riski artabilir']
    },
    klonazepam: {
      ozet: 'Karaciğerde CYP3A4 ile nitro grubu indirgenerek etkisiz 7-aminoklonazepama dönüşür, ardından asetillenir. Aktif metaboliti yoktur.',
      sub: { '3A4': 2 }, inh: {}, ind: {},
      diger: 'N-asetiltransferaz 2 (ikinci basamak)',
      aktif: null,
      atilim: [60, 20], fe: 1, feYazi: '%2\'nin altında',
      bobrek: 'Doz ayarı genellikle gerekmez; metabolit birikebilir.',
      karaciger: 'Ağır karaciğer yetmezliğinde kontrendike; hafif–orta bozuklukta dozu azaltın.',
      artiran: ['Ketokonazol, itrakonazol, klaritromisin, ritonavir (CYP3A4): sedasyon artabilir'],
      dusuren: ['Karbamazepin, fenitoin, fenobarbital: düzey yaklaşık %30 düşer']
    },
    lorazepam: {
      ozet: 'CYP enzimlerine uğramadan doğrudan glukuronidasyonla (UGT2B15, UGT2B7) etkisiz lorazepam glukuronide dönüşür. Glukuronidasyon karaciğer hastalığında ve ileri yaşta görece korunduğu için bu durumlarda tercih edilen benzodiazepinlerdendir.',
      sub: { 'UGT': 2 }, inh: {}, ind: {},
      aktif: null,
      atilim: [88, 7], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Doz ayarı genellikle gerekmez; etkisiz glukuronid birikebilir.',
      karaciger: 'Hafif–orta bozuklukta ayar genellikle gerekmez; ağır yetmezlikte dikkatli kullanın (ensefalopati riski).',
      artiran: ['Valproat: klirens yaklaşık %40 azalır, dozu %50 azaltın', 'Probenesid: dozu %50 azaltın'],
      dusuren: ['Östrojen içeren kontraseptifler: klirens artar', 'Rifampisin']
    },
    buspiron: {
      ozet: 'Bağırsak duvarı ve karaciğerde CYP3A4 ile çok yoğun ilk geçiş metabolizmasına uğrar (biyoyararlanım yaklaşık %4). Bu nedenle CYP3A4 inhibitörleri düzeyi kat kat artırır, indükleyiciler ise ilacı etkisizleştirir.',
      sub: { '3A4': 2 }, inh: {}, ind: {},
      aktif: '1-pirimidinilpiperazin (1-PP): alfa-2 antagonisti; plazma düzeyi ana ilaçtan yüksektir.',
      atilim: [45, 28], fe: 0.5, feYazi: '%1\'in altında',
      bobrek: 'Ağır bozuklukta önerilmez.',
      karaciger: 'Ağır bozuklukta önerilmez; hafif–orta bozuklukta dozu azaltın.',
      artiran: ['İtrakonazol (yaklaşık 19 kat), eritromisin (6 kat), diltiazem ve verapamil (3–5 kat): 2,5 mg ile başlayın', 'Greyfurt suyu: 4–9 kat', 'Fluvoksamin: 2–3 kat'],
      dusuren: ['Rifampisin: düzey yaklaşık %90 düşer', 'Karbamazepin, fenitoin'],
      not: ['Yemekle alındığında biyoyararlanım artar: her zaman aynı biçimde (aç ya da tok) alınmalıdır.']
    }
  };

  window.ILACLAR.forEach(function (i) { i.metab = window.METAB[i.id] || null; });
})();
