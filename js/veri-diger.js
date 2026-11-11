/* Duygudurum dengeleyiciler ve anksiyolitik / uyku ilaçları */
(function () {
  var SURDURUM_DD = [
    'Akut epizod sonrası en az 12–24 ay sürdürüm; yineleyen veya ağır epizodlarda daha uzun.',
    'Kesme kararını stabil dönemde, aile ile birlikte ve nüks belirtileri eğitimi vererek alın.',
    'Çocuk doğurma potansiyeli olan ergenlerde gebelik planı ve kontrasepsiyonu her yıl gözden geçirin.'
  ];

  window.ILACLAR.push(
  {
    id: 'lityum', ad: 'Lityum', sinif: 'dd', altSinif: 'Duygudurum dengeleyici', grup: 'dd',
    mek: 'İnositol monofosfataz ve GSK-3 inhibisyonu dahil çoklu hücre içi etki. Bipolar bozuklukta akut mani ve sürdürümde altın standart; intihar riskini azaltır. Terapötik aralığı dardır.',
    t12: '18–24 saat (çocukta daha kısa)', t12s: 20, etki: 'Antimanik: 1–2 hafta', form: 'Lityum karbonat tablet / kapsül 300 mg (uzatılmış salımlı formlar)',
    onay: [['Bipolar I (akut mani ve sürdürüm)', '≥ 7 yaş']],
    ped: {
      bas: '20–30 kg: 300 mg ×2 · > 30 kg: 300 mg ×3', artis: '20–30 kg: haftada 300 mg · > 30 kg: 3 günde bir 300 mg (serum düzeyine göre)', hedef: 'Akut: 0,8–1,2 mEq/L · sürdürüm: 0,6–1,0 mEq/L', maks: 'Serum düzeyi 1,2 mEq/L\'yi geçmemeli',
      birim: 'mg/gün', adim: [[0, 900], [3, 1200], [8, 1500]], bant: [900, 1500], tavan: 1800,
      not: ['Grafik > 30 kg için örnek şemadır; doz her zaman serum düzeyi ile belirlenir.', 'Düzey: son dozdan 12 saat sonra, her doz değişiminden 5–7 gün sonra.', 'Çocuklarda böbrek klirensi yüksek olduğundan kg başına doz gereksinimi erişkinden fazladır.', 'Aileye sıvı alımı, tuz kısıtlamama, ateş/kusma/ishalde ilacı durdurup başvurma eğitimi verin.']
    },
    eri: {
      bas: '300 mg ×2–3', artis: '5–7 günde bir 300 mg (düzeye göre)', hedef: 'Akut: 0,8–1,2 mEq/L · sürdürüm: 0,6–0,8 mEq/L', maks: 'Serum düzeyi 1,2 mEq/L',
      birim: 'mg/gün', adim: [[0, 600], [5, 900], [12, 1200]], bant: [900, 1200], tavan: 1800, not: ['Sürdürümde tek gece dozu böbrek açısından avantajlı olabilir.']
    },
    surdurum: SURDURUM_DD.concat(['Stabil dönemde 3–6 ayda bir lityum düzeyi; 6 ayda bir böbrek işlevi ve TSH.', 'Dehidratasyon, ateşli hastalık, yeni ilaç (NSAİİ, ACE inhibitörü, diüretik) başlandığında düzey bakın.']),
    kesme: { risk: 3, sure: 'En az 4 hafta; tercihen 3 ay', adim: [[0, 100], [21, 75], [42, 50], [63, 25], [84, 0]],
      not: ['Hızlı kesme (< 2 hafta) erken manik nüks ve intihar riskini belirgin artırır.', 'Toksisite veya ağır yan etki dışında ani kesmeyin.', 'Kesme sonrası ilk 3 ay nüks açısından yakın izleyin.'] },
    izlem: 'lityum', profil: { sed: 1, kilo: 2, gis: 2, eps: 0, kes: 3 },
    kutu: 'Lityum toksisitesi terapötik düzeylere yakın dozlarda gelişebilir. Düzey ölçümü yapılamayan koşullarda başlanmamalıdır.',
    uyari: ['Toksisite (> 1,5 mEq/L): kaba tremor, ataksi, dizartri, kusma, ishal, konfüzyon, nöbet', 'Poliüri, polidipsi, enürezis; uzun dönemde böbrek işlevinde azalma', 'Hipotiroidi, guatr, hiperparatiroidi', 'Akne, psoriazis alevlenmesi, kilo artışı, ince tremor', 'Gebelikte kardiyak malformasyon (Ebstein) riski'],
    etkilesim: ['NSAİİ (ibuprofen vb.), ACE inhibitörleri, ARB, tiyazid diüretikler düzeyi artırır', 'Dehidratasyon ve düşük sodyum alımı düzeyi artırır', 'Kafein ve teofilin düzeyi düşürür', 'Haloperidol/antipsikotiklerle nörotoksisite, serotonerjiklerle serotonin sendromu bildirilmiştir'],
    oz: ['lityum']
  },
  {
    id: 'valproat', ad: 'Valproat', sinif: 'dd', altSinif: 'Duygudurum dengeleyici / antiepileptik', grup: 'dd',
    mek: 'GABA düzeyini artırır, sodyum kanallarını bloke eder, histon deasetilazı inhibe eder. Akut manide etkilidir; pediatrik psikiyatrik onayı yoktur.',
    t12: '9–16 saat', t12s: 12, etki: 'Antimanik: 5–10 gün', form: 'Enterik tablet 250 / 500 mg; uzatılmış salımlı tablet 500 mg; şurup / solüsyon',
    onay: [], onayNot: 'Psikiyatrik endikasyonda pediatrik onay yok (epilepside onaylı)',
    ped: {
      bas: '10–15 mg/kg/gün (2 doza bölünmüş)', artis: 'Haftada 5–10 mg/kg/gün', hedef: 'Serum düzeyi 50–100 µg/mL (akut manide 85–125)', maks: '60 mg/kg/gün',
      birim: 'mg/kg/gün', adim: [[0, 15], [7, 20], [14, 25], [21, 30]], bant: [20, 30], tavan: 60,
      not: ['Çocuk doğurma potansiyeli olan kız ergenlerde, diğer tedaviler etkisiz/tolere edilemez olmadıkça kullanmayın; kullanılacaksa gebelik önleme programı uygulayın.', 'Erkek hastalarda da babalık öncesi maruziyetle nörogelişimsel risk uyarısı bulunmaktadır; aileyi bilgilendirin.', '2 yaş altı ve mitokondriyal hastalık (POLG) şüphesinde kontrendikedir.', 'GİS yan etkisi için yemekle ve enterik/uzatılmış salımlı form ile verin.']
    },
    eri: {
      bas: '750 mg/gün (bölünmüş) veya 20 mg/kg/gün', artis: '2–3 günde bir 250–500 mg', hedef: 'Serum düzeyi 50–125 µg/mL (1000–2000 mg/gün)', maks: '60 mg/kg/gün',
      birim: 'mg/gün', adim: [[0, 750], [3, 1000], [7, 1250], [14, 1500]], bant: [1000, 2000], tavan: 2500, not: []
    },
    surdurum: SURDURUM_DD.concat(['Stabil dönemde 6–12 ayda bir KCFT, tam kan ve gerektiğinde düzey.', 'Kız ergenlerde adet düzeni, kilo ve hirsutizmi her vizitte sorun.']),
    kesme: { risk: 2, sure: 'En az 4 hafta', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Haftada dozun yaklaşık %25\'i kadar azaltın.', 'Epilepsi eş tanısında nöroloji ile birlikte ve çok daha yavaş (aylar içinde).', 'Ani kesmede duygudurum nüksü ve nöbet riski.'] },
    izlem: 'valproat', profil: { sed: 2, kilo: 3, gis: 2, eps: 0, kes: 2 },
    kutu: 'Kara kutu uyarıları: hepatotoksisite (özellikle < 2 yaş ve mitokondriyal hastalık), pankreatit ve teratojenite (nöral tüp defekti, nörogelişimsel bozukluk).',
    uyari: ['Kilo artışı, iştah artışı', 'Tremor, sedasyon, saç dökülmesi', 'Trombositopeni (doza bağlı)', 'Hiperamonyemik ensefalopati', 'Polikistik over sendromu, adet düzensizliği'],
    etkilesim: ['Lamotrijin düzeyini yaklaşık 2 kat artırır: lamotrijin dozunu yarıya indirin (SJS riski)', 'Karbapenem antibiyotikler valproat düzeyini hızla düşürür: birlikte kullanmayın', 'Aspirin serbest valproat düzeyini artırır', 'Karbamazepin, fenitoin düzeyi düşürür; topiramat ile hiperamonyemi'],
    oz: ['vpa']
  },
  {
    id: 'lamotrijin', ad: 'Lamotrijin', sinif: 'dd', altSinif: 'Duygudurum dengeleyici / antiepileptik', grup: 'dd',
    mek: 'Sodyum kanal blokajı ile glutamat salınımını azaltır. Bipolar depresyonun önlenmesinde etkilidir; akut manide etkisizdir. Metabolik ve bilişsel profili elverişlidir.',
    t12: '25–33 saat (valproat ile ~70, indükleyici ile ~13 saat)', t12s: 29, etki: 'Hedef doza ulaşım 6 hafta; etki haftalar–aylar', form: 'Tablet / çiğneme–suda dağılan tablet 25 / 50 / 100 / 200 mg',
    onay: [], onayNot: 'Bipolar sürdürüm ≥ 18 yaş; epilepside ≥ 2 yaş',
    endikasyon: [
      ['Monoterapi (≥ 12 yaş)', '25 mg/gün', '200 mg/gün', '1–2. hf 25 mg · 3–4. hf 50 mg · 5. hf 100 mg · 6. hf 200 mg'],
      ['Valproat ile birlikte', '25 mg gün aşırı', '100 mg/gün', '1–2. hf 25 mg gün aşırı · 3–4. hf 25 mg · 5. hf 50 mg · 6. hf 100 mg'],
      ['Karbamazepin / indükleyici ile', '50 mg/gün', '300–400 mg/gün', '1–2. hf 50 mg · 3–4. hf 100 mg · 5. hf 200 mg · 6. hf 300 mg (bölünmüş)']
    ],
    ped: {
      bas: '≥ 12 yaş: 25 mg/gün (valproat ile: 25 mg gün aşırı)', artis: '2 haftada bir iki katına; 5. haftadan sonra haftada bir', hedef: '100–200 mg/gün (valproat ile 100 mg)', maks: '200 mg/gün (indükleyici ile 400 mg)',
      birim: 'mg/gün', adim: [[0, 25], [14, 50], [28, 100], [35, 200]], bant: [100, 200], tavan: 200,
      not: ['Titrasyon şeması asla hızlandırılmaz: döküntü riski başlangıç dozu ve artış hızı ile doğrudan ilişkilidir.', '12 yaş altında döküntü riski daha yüksektir; kiloya göre epilepsi şemaları (ör. monoterapi 0,3 mg/kg/gün) kullanılır.', 'İlk 8 haftada yeni ilaç, yiyecek, kozmetik başlanmaması önerilir (döküntü ayırıcı tanısı).', '5 günden uzun ara verildiyse baştan titre edin.']
    },
    eri: {
      bas: '25 mg/gün', artis: '1–2. hf 25 mg · 3–4. hf 50 mg · 5. hf 100 mg · 6. hf 200 mg', hedef: '200 mg/gün', maks: '200 mg/gün (indükleyici ile 400 mg; valproat ile 100 mg)',
      birim: 'mg/gün', adim: [[0, 25], [14, 50], [28, 100], [35, 200]], bant: [100, 200], tavan: 200, not: []
    },
    surdurum: SURDURUM_DD.concat(['Östrojenli kontraseptif başlanması/kesilmesinde doz ayarı gerekir (düzey ~%50 düşer / yükselir).', 'Valproat eklenirse dozu yarıya indirin; valproat kesilirse 2 hafta içinde kademeli iki katına çıkarın.']),
    kesme: { risk: 2, sure: 'En az 2 hafta', adim: [[0, 100], [7, 50], [14, 25], [21, 0]],
      not: ['Haftada yaklaşık %50 azaltın.', 'Döküntü geliştiğinde kademeli azaltım yapmadan hemen kesin ve yeniden başlamayın.', 'Epilepsi eş tanısında daha yavaş azaltın.'] },
    izlem: 'lamotrijin', profil: { sed: 0, kilo: 0, gis: 1, akt: 1, kes: 2 },
    kutu: 'Kara kutu uyarısı: Stevens-Johnson sendromu / toksik epidermal nekroliz dahil yaşamı tehdit eden döküntüler. Risk çocuklarda, hızlı titrasyonda ve valproat ile birlikte kullanımda artar; çoğu ilk 2–8 haftada görülür.',
    uyari: ['Döküntü (%5–10 benign; ağır döküntü nadir ama acil)', 'Baş ağrısı, baş dönmesi, diplopi, ataksi', 'Uykusuzluk, canlı rüyalar', 'Aseptik menenjit, hemofagositik lenfohistiyositoz (çok nadir)'],
    etkilesim: ['Valproat düzeyi 2 kat artırır', 'Karbamazepin, fenitoin, fenobarbital, rifampisin düzeyi düşürür', 'Östrojen içeren kontraseptifler düzeyi ~%50 düşürür', 'Sertralin düzeyi hafif artırabilir'],
    oz: ['ltg']
  },
  {
    id: 'karbamazepin', ad: 'Karbamazepin', sinif: 'dd', altSinif: 'Duygudurum dengeleyici / antiepileptik', grup: 'dd',
    mek: 'Sodyum kanal blokeri. Güçlü enzim indükleyicisi olduğundan etkileşimleri fazladır; pediatrik bipolar bozuklukta kanıtı zayıftır, ikinci–üçüncü basamak.',
    t12: 'Başlangıç 25–65 saat; otoindüksiyon sonrası 12–17 saat', t12s: 15, etki: 'Antimanik: 1–2 hafta', form: 'Tablet 200 / 400 mg; kontrollü salımlı tablet 200 / 400 mg; süspansiyon 100 mg/5 mL',
    onay: [], onayNot: 'Psikiyatrik endikasyonda pediatrik onay yok (epilepside onaylı)',
    ped: {
      bas: '6–12 yaş: 100 mg ×2 · > 12 yaş: 200 mg ×2', artis: 'Haftada bir 100 mg (6–12 yaş) / 200 mg (> 12 yaş)', hedef: '6–12 yaş: 400–800 mg/gün · > 12 yaş: 800–1200 mg/gün (düzey 4–12 µg/mL)', maks: '6–12 yaş: 1000 mg · 13–15 yaş: 1000 mg · > 15 yaş: 1200 mg/gün',
      birim: 'mg/gün', adim: [[0, 200], [7, 300], [14, 400], [21, 600]], bant: [400, 800], tavan: 1000,
      not: ['Grafik 6–12 yaş için örnek şemadır.', 'Otoindüksiyon nedeniyle 3–5. haftada düzey düşer; doz artışı gerekebilir.', 'Yavaş titrasyon baş dönmesi, diplopi ve döküntü riskini azaltır.']
    },
    eri: {
      bas: '200 mg ×2', artis: 'Haftada bir 200 mg', hedef: '800–1200 mg/gün (düzey 4–12 µg/mL)', maks: '1600 mg/gün',
      birim: 'mg/gün', adim: [[0, 400], [7, 600], [14, 800], [28, 1000]], bant: [800, 1200], tavan: 1600, not: []
    },
    surdurum: SURDURUM_DD.concat(['Hormonal kontrasepsiyon etkinliği azalır: alternatif yöntem önerin.', 'Yeni ilaç eklenirken etkileşimi mutlaka kontrol edin.']),
    kesme: { risk: 2, sure: 'En az 4 hafta', adim: [[0, 100], [7, 75], [14, 50], [21, 25], [28, 0]],
      not: ['Haftada dozun %25\'i kadar azaltın.', 'Kesildikten sonra enzim indüksiyonu 2–4 haftada geriler: birlikte kullanılan ilaçların düzeyi yükselir, doz ayarı gerekebilir.'] },
    izlem: 'karbamazepin', profil: { sed: 2, kilo: 1, gis: 2, ach: 1, kes: 2 },
    kutu: 'Kara kutu uyarıları: ağır deri reaksiyonları (SJS/TEN; HLA-B*1502 taşıyıcılarında) ile aplastik anemi ve agranülositoz.',
    uyari: ['Baş dönmesi, diplopi, ataksi, sedasyon', 'Hiponatremi (SIADH)', 'Lökopeni (çoğunlukla benign), nadiren agranülositoz', 'Karaciğer enzim artışı, döküntü, DRESS', 'Teratojenite (nöral tüp defekti)'],
    etkilesim: ['Güçlü CYP3A4 indükleyicisi: hormonal kontraseptif, antipsikotikler, lamotrijin, valproat, metilfenidat ve birçok ilacın düzeyini düşürür', 'Klozapin ile birlikte kullanılmaz (kemik iliği)', 'Eritromisin, klaritromisin, fluoksetin, fluvoksamin, valproat karbamazepin toksisitesine yol açabilir', 'MAOİ ile kontrendike'],
    oz: ['induk', 'cbz']
  },
  {
    id: 'okskarbazepin', ad: 'Okskarbazepin', sinif: 'dd', altSinif: 'Duygudurum dengeleyici (antiepileptik)', grup: 'dd',
    mek: 'Karbamazepinin keto türevi; voltaja bağlı sodyum kanallarını bloke eder. Enzim indüksiyonu ve kan tablosu üzerine etkisi karbamazepinden az, hiponatremi riski daha fazladır. Pediatrik bipolar manide plaseboya üstünlük gösterilememiştir; karbamazepini tolere edemeyenlerde düşünülür.',
    t12: 'Ön ilaç 2 saat; aktif metabolit ~9 saat', t12s: 9, etki: '1–2 hafta', form: 'Tablet 150 / 300 / 600 mg; oral süspansiyon 60 mg/mL',
    onay: [], onayNot: 'Psikiyatrik endikasyonda pediatrik onay yok (epilepside ≥ 4 yaş onaylı)',
    ped: {
      bas: '8–10 mg/kg/gün, ikiye bölünmüş (en fazla 600 mg/gün)', artis: 'Haftada bir 5–10 mg/kg/gün (150–300 mg)', hedef: '20–30 mg/kg/gün (900–1800 mg/gün)', maks: 'Kiloya göre 900–2100 mg/gün',
      birim: 'mg/gün', adim: [[0, 300], [7, 600], [14, 900], [21, 1200]], bant: [900, 1800], tavan: 2100,
      not: ['Grafik yaklaşık 30–40 kg bir çocuk içindir; doz kiloya göre hesaplanır.', 'Günde iki doza bölünür; yemekten bağımsızdır.', 'Karbamazepinden geçişte 200 mg karbamazepin yaklaşık 300 mg okskarbazepine karşılık gelir.', 'Asya kökenli hastalarda başlamadan önce HLA-B*1502 bakın.', 'Hormonal kontraseptif etkinliğini azaltır: ergenlerde ek yöntem önerin.']
    },
    eri: {
      bas: '300 mg ×2', artis: 'Haftada bir 300–600 mg/gün', hedef: '1200–2400 mg/gün', maks: '2400 mg/gün',
      birim: 'mg/gün', adim: [[0, 600], [7, 900], [14, 1200], [28, 1800]], bant: [1200, 2400], tavan: 2400, not: []
    },
    surdurum: SURDURUM_DD.concat(['İlk 3 ayda ve belirti olduğunda sodyum bakın.', 'Hormonal kontrasepsiyon etkinliği azalır: alternatif yöntem danışmanlığı verin.']),
    kesme: { risk: 2, sure: '4–8 hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]], not: ['Her 1–2 haftada dozun %25\'i kadar azaltın.', 'Ani kesmede nöbet (epilepsi öyküsü olmasa da) ve duygudurum nüksü riski.'] },
    izlem: 'karbamazepin', izlemEk: [['Sodyum', [1, 1, 1, 2, 1], 'Hiponatremi karbamazepinden sıktır: ilk 3 ayda ve bulantı, baş ağrısı, uyuşukluk, konfüzyon olduğunda.'], ['Serum düzeyi', [0, 0, 0, 0, 0], 'Rutin düzey izlemi gerekmez.'], ['Tam kan sayımı', [1, 0, 2, 0, 2], 'Kan tablosu etkisi karbamazepinden azdır; başlangıçta ve belirti varsa.']],
    profil: { sed: 2, kilo: 1, gis: 2, ach: 0, kes: 2 },
    kutu: 'Ağır deri reaksiyonları (Stevens-Johnson sendromu, toksik epidermal nekroliz) ve klinik olarak anlamlı hiponatremi bildirilmiştir. Karbamazepine aşırı duyarlılığı olanların dörtte birinde çapraz reaksiyon görülür.',
    uyari: ['Hiponatremi (çoğu ilk 3 ayda)', 'Baş dönmesi, çift görme, ataksi, uyuklama', 'Döküntü; karbamazepinle çapraz duyarlılık', 'Bulantı, kusma', 'Antiepileptik sınıf uyarısı: intihar düşüncesi'],
    etkilesim: ['Hormonal kontraseptif etkinliğini azaltır', 'Karbamazepin, fenitoin, fenobarbital aktif metabolit düzeyini %30–40 düşürür', 'Yüksek dozda fenitoin düzeyini artırır (CYP2C19 inhibisyonu)', 'Lamotrijin düzeyini hafif düşürebilir', 'Diüretikler ve SSRI\'larla hiponatremi riski artar'],
    oz: []
  },
  {
    id: 'melatonin', ad: 'Melatonin', sinif: 'anks', altSinif: 'Uyku düzenleyici', grup: 'diger',
    mek: 'MT1/MT2 reseptör agonisti; uykuya dalmayı kolaylaştırır ve sirkadiyen fazı öne çeker. Otizm ve DEHB\'de uykuya dalma güçlüğünde davranışsal önlemlerden sonra ilk seçenek.',
    t12: '30–60 dakika (uzatılmış salımlı formda etki 8–10 saat)', t12s: 0.8, etki: '30–60 dakika; faz kaydırma 1–2 hafta', form: 'Tablet 1 / 3 / 5 mg; damla; uzatılmış salımlı mini tablet 1 / 5 mg',
    onay: [['Otizmde uykusuzluk (uzatılmış salımlı form, Avrupa)', '2–18 yaş']],
    ped: {
      bas: '0,5–1 mg (yatmadan 30–60 dk önce)', artis: '1–2 haftada bir 0,5–1 mg', hedef: '1–5 mg/gece', maks: '10 mg/gece',
      birim: 'mg/gece', adim: [[0, 1], [14, 2], [28, 3], [42, 5]], bant: [1, 5], tavan: 10,
      not: ['Önce uyku hijyeni: düzenli yatış saati, ekran kısıtlaması, kafeinin kesilmesi.', 'Gecikmiş uyku fazında düşük doz (0,5–1 mg) hedef uyku saatinden 3–5 saat önce verilebilir.', 'Uzatılmış salımlı pediatrik form: 2 mg ile başlanır, yanıta göre 5 mg ve en fazla 10 mg.', 'Yüksek doz her zaman daha etkili değildir; yanıt yoksa dozu artırmak yerine zamanlamayı ve tanıyı gözden geçirin.']
    },
    eri: {
      bas: '1–2 mg (yatmadan 1–2 saat önce)', artis: 'Gerekirse 1–2 haftada', hedef: '2–5 mg/gece', maks: '10 mg/gece',
      birim: 'mg/gece', adim: [[0, 2], [14, 3], [28, 5]], bant: [2, 5], tavan: 10, not: []
    },
    surdurum: ['3–6 ayda bir gerekliliği gözden geçirin; uyku düzeni oturduysa ilaçsız dönem deneyin (tercihen tatil döneminde).', 'Uzun süreli (2 yıla dek) kullanım verileri büyüme ve puberte açısından güven vericidir; yine de yıllık izleyin.'],
    kesme: { risk: 0, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Doğrudan kesilebilir; bağımlılık veya kesilme sendromu yapmaz.', 'Uyku sorunu yinelerse aynı dozla yeniden başlanabilir.'] },
    izlem: 'melatonin', profil: { sed: 1, kilo: 0, gis: 0, akt: 0, kes: 0 },
    uyari: ['Sabah sersemliği, baş ağrısı', 'Canlı rüyalar, nadiren enürezis', 'Takviye ürünlerde içerik ve doz tutarsızlığı olabilir; ilaç formunu tercih edin'],
    etkilesim: ['Fluvoksamin melatonin düzeyini çok belirgin artırır (CYP1A2)', 'Östrojen, siprofloksasin düzeyi artırır; sigara ve karbamazepin düşürür', 'Diğer sedatiflerle additif etki'],
    oz: ['1a2sub']
  },
  {
    id: 'hidroksizin', ad: 'Hidroksizin', sinif: 'anks', altSinif: 'Antihistaminik anksiyolitik', grup: 'diger',
    mek: 'Birinci kuşak H1 antagonisti; sedatif ve anksiyolitik etki. Bağımlılık potansiyeli yoktur; kısa süreli anksiyete ve uyku sorunlarında kullanılır.',
    t12: 'Çocukta ~7 saat; erişkinde ~20 saat', t12s: 10, etki: '15–30 dakika', form: 'Tablet 25 mg; şurup 10 mg/5 mL',
    onay: [['Anksiyete, sedasyon, kaşıntı', 'Çocuklarda onaylı']],
    ped: {
      bas: '0,5 mg/kg/doz (genellikle 10–12,5 mg, gece)', artis: 'Gerekirse günde 2–3 doza', hedef: '1–2 mg/kg/gün (bölünmüş)', maks: '≤ 40 kg: 2 mg/kg/gün · > 40 kg: 100 mg/gün',
      birim: 'mg/gün', adim: [[0, 12.5], [3, 25], [7, 50]], bant: [25, 50], tavan: 100,
      not: ['Mümkün olan en düşük dozda ve en kısa süreyle kullanın (QT uyarısı).', 'Tolerans 1–2 haftada gelişebilir; uzun süreli anksiyete tedavisi için uygun değildir.', 'Küçük çocuklarda paradoksal ajitasyon görülebilir.']
    },
    eri: {
      bas: '25 mg (gece) veya 12,5–25 mg ×2–3', artis: 'Yanıta göre', hedef: '50–100 mg/gün (bölünmüş)', maks: '100 mg/gün',
      birim: 'mg/gün', adim: [[0, 25], [3, 50], [7, 75]], bant: [50, 100], tavan: 100, not: []
    },
    surdurum: ['Kısa süreli (günler–birkaç hafta) kullanım için uygundur.', 'Süregelen anksiyetede SSRI ve psikoterapi planlayın.'],
    kesme: { risk: 0, sure: 'Kademeli azaltım gerekmez', adim: [[0, 100], [7, 0]], not: ['Doğrudan kesilebilir; uzun süreli düzenli kullanımda birkaç günde azaltmak rebound uykusuzluğu önler.'] },
    izlem: 'hidroksizin', profil: { sed: 3, kilo: 1, ach: 2, qt: 2, kes: 0 },
    uyari: ['Sedasyon, dikkat ve okul performansında azalma', 'QT uzaması: uzun QT sendromu ve risk faktörlerinde kontrendike', 'Ağız kuruluğu, kabızlık, idrar retansiyonu', 'Paradoksal ajitasyon'],
    etkilesim: ['QT uzatan ilaçlarla (sitalopram, ziprasidon, makrolidler) birlikte kullanmayın', 'Alkol ve diğer sedatiflerle additif etki', 'Antikolinerjik yükü artırır'],
    oz: ['qt', 'antikol']
  },
  {
    id: 'klonazepam', ad: 'Klonazepam', sinif: 'anks', altSinif: 'Benzodiazepin (uzun etkili)', grup: 'benzo',
    mek: 'GABA-A reseptörü pozitif allosterik modülatörü. Çocuk ve ergenlerde anksiyetede kanıtı zayıftır; ağır anksiyete/panikte SSRI etkisi başlayana dek kısa süreli köprü veya katatonide kullanılır.',
    t12: '30–40 saat', t12s: 35, etki: '20–60 dakika', form: 'Tablet 0,5 / 2 mg; damla 2,5 mg/mL',
    onay: [], onayNot: 'Psikiyatrik endikasyonda pediatrik onay yok (epilepside onaylı)',
    ped: {
      bas: '0,25 mg (gece) veya 0,01 mg/kg/gün', artis: '3–7 günde bir 0,25 mg', hedef: '0,25–1 mg/gün (2 doza bölünmüş)', maks: 'Anksiyetede genellikle ≤ 2 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.25], [4, 0.5], [10, 1]], bant: [0.25, 1], tavan: 2,
      not: ['Kullanım süresini baştan sınırlayın (ideal olarak 2–4 hafta) ve kesme planını aileyle paylaşın.', 'Paradoksal disinhibisyon, irritabilite ve agresyon çocuklarda sık görülür.', 'Madde kullanım öyküsü olan ergenlerde kaçının.']
    },
    eri: {
      bas: '0,25 mg ×2', artis: '3 gün sonra 1 mg/gün; gerekirse 3 günde bir 0,25–0,5 mg', hedef: '1–2 mg/gün', maks: '4 mg/gün (panik)',
      birim: 'mg/gün', adim: [[0, 0.5], [3, 1], [10, 2]], bant: [1, 2], tavan: 4, not: []
    },
    surdurum: ['Düzenli kullanım 2–4 haftayı geçtiyse fiziksel bağımlılık gelişebilir; sürdürüm tedavisi olarak önerilmez.', 'Her vizitte doz, süre ve azaltım planını gözden geçirin.'],
    kesme: { risk: 3, sure: 'Kullanım süresine göre haftalar–aylar', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 12], [70, 0]],
      not: ['Her 1–2 haftada dozun %10–25\'i kadar azaltın; son basamakları daha küçük tutun.', 'Ani kesme nöbet, rebound anksiyete, uykusuzluk, tremor ve deliryuma yol açabilir.', '4 haftadan kısa kullanımda 1–2 haftalık azaltım yeterlidir.'] },
    izlem: 'benzo', profil: { sed: 3, kilo: 0, gis: 0, akt: 0, kes: 3 },
    kutu: 'Kötüye kullanım, bağımlılık ve kesilme reaksiyonları; opioidlerle birlikte kullanımda solunum depresyonu ve ölüm riski.',
    uyari: ['Sedasyon, ataksi, bilişsel yavaşlama', 'Paradoksal disinhibisyon', 'Tolerans ve bağımlılık', 'Siyalore (küçük çocuklar)'],
    etkilesim: ['Opioid, alkol ve diğer sedatiflerle solunum depresyonu', 'CYP3A4 inhibitörleri düzeyi artırır; karbamazepin düşürür', 'Klozapin başlangıcında birlikte kullanımda dikkat'],
    oz: ['benzo']
  },
  {
    id: 'lorazepam', ad: 'Lorazepam', sinif: 'anks', altSinif: 'Benzodiazepin (orta etkili)', grup: 'benzo',
    mek: 'GABA-A reseptörü pozitif allosterik modülatörü; aktif metaboliti yoktur, glukuronidasyonla atılır. Akut ajitasyon ve katatonide ilk seçenek benzodiazepin.',
    t12: '10–20 saat', t12s: 14, etki: 'Oral 30–60 dk; dilaltı/IM daha hızlı', form: 'Tablet 1 / 2,5 mg',
    onay: [], onayNot: 'Anksiyetede ≥ 12 yaş (FDA)',
    ped: {
      bas: 'Anksiyete: 0,25–0,5 mg ×1–2 · akut ajitasyon: 0,05–0,1 mg/kg/doz', artis: 'Yanıta göre 2–3 günde bir', hedef: 'Anksiyete: 0,5–2 mg/gün (bölünmüş) · katatoni: 3–8 mg/gün', maks: 'Akut ajitasyon: 2 mg/doz · anksiyete: genellikle ≤ 4 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.5], [3, 1], [7, 2]], bant: [0.5, 2], tavan: 4,
      not: ['Katatonide 1–2 mg deneme dozu ile yanıt değerlendirilir; yanıt varsa günde 3 doza bölünerek hızla titre edilir (uzman gözetiminde daha yüksek dozlar).', 'Kullanım süresini 2–4 hafta ile sınırlayın.', 'Paradoksal disinhibisyon açısından ilk dozları gözlem altında verin.']
    },
    eri: {
      bas: '0,5–1 mg ×2–3', artis: 'Yanıta göre', hedef: '2–6 mg/gün (bölünmüş)', maks: '10 mg/gün',
      birim: 'mg/gün', adim: [[0, 1], [3, 2], [7, 3]], bant: [2, 6], tavan: 10, not: []
    },
    surdurum: ['Sürdürüm tedavisi olarak önerilmez; altta yatan bozukluğun asıl tedavisini planlayın.', 'Katatonide belirtiler düzeldikten sonra haftalar içinde yavaş azaltın; erken kesmede nüks sıktır.'],
    kesme: { risk: 3, sure: 'Kullanım süresine göre haftalar–aylar', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 0]],
      not: ['Her 1–2 haftada dozun %10–25\'i kadar azaltın.', 'Kısa yarı ömür nedeniyle doz araları kesilme belirtisi yapabilir; gerekirse eşdeğer dozda uzun etkili benzodiazepine geçip azaltın.', 'Ani kesmede nöbet riski.'] },
    izlem: 'benzo', profil: { sed: 3, kilo: 0, gis: 0, akt: 0, kes: 3 },
    kutu: 'Kötüye kullanım, bağımlılık ve kesilme reaksiyonları; opioidlerle birlikte kullanımda solunum depresyonu ve ölüm riski.',
    uyari: ['Sedasyon, ataksi, anterograd amnezi', 'Paradoksal disinhibisyon', 'Solunum depresyonu (parenteral/yüksek doz)', 'Tolerans ve bağımlılık'],
    etkilesim: ['Opioid, alkol ve diğer sedatiflerle solunum depresyonu', 'Valproat lorazepam düzeyini artırır (dozu yarıya indirin)', 'Parenteral olanzapin ile birlikte kullanmayın'],
    oz: ['benzo']
  },
  {
    id: 'buspiron', ad: 'Buspiron', sinif: 'anks', altSinif: 'Azapiron anksiyolitik', grup: 'diger',
    mek: '5-HT1A parsiyel agonisti. Sedasyon ve bağımlılık yapmaz; pediatrik yaygın anksiyete çalışmalarında plaseboya üstünlük gösterilememiştir, SSRI\'lara ek veya alternatif olarak kullanılır.',
    t12: '2–3 saat', t12s: 2.5, etki: '2–4 hafta', form: 'Tablet 5 / 10 mg',
    onay: [], onayNot: 'Pediatrik etkinlik gösterilememiştir',
    ped: {
      bas: 'Çocuk: 2,5–5 mg ×2 · ergen: 5 mg ×2', artis: 'Haftada bir 5–10 mg/gün', hedef: '15–30 mg/gün (2–3 doza bölünmüş)', maks: '60 mg/gün',
      birim: 'mg/gün', adim: [[0, 10], [7, 15], [14, 20], [28, 30]], bant: [15, 30], tavan: 60,
      not: ['Endikasyon dışı kullanım. Gerektiğinde değil düzenli kullanılmalıdır.', 'Yemekle veya aç, ancak her zaman aynı şekilde alınmalı (emilim değişir).', 'Benzodiazepin yoksunluğunu önlemez: benzodiazepinden geçişte örtüşme gerekir.']
    },
    eri: {
      bas: '7,5 mg ×2', artis: '2–3 günde bir 5 mg/gün', hedef: '20–30 mg/gün', maks: '60 mg/gün',
      birim: 'mg/gün', adim: [[0, 15], [3, 20], [7, 30]], bant: [20, 30], tavan: 60, not: []
    },
    surdurum: ['Yeterli dozda 4–6 hafta sonunda yanıt yoksa kesin.', 'Yanıt varsa 6–12 ay sürdürüp kesmeyi deneyin.'],
    kesme: { risk: 0, sure: 'Kademeli azaltım genellikle gerekmez', adim: [[0, 100], [7, 50], [14, 0]], not: ['Kesilme sendromu tanımlanmamıştır; 1–2 haftada azaltmak yeterlidir.'] },
    izlem: 'buspiron', profil: { sed: 1, kilo: 0, gis: 2, akt: 1, kes: 0 },
    uyari: ['Baş dönmesi, bulantı, baş ağrısı', 'Huzursuzluk, uykusuzluk', 'Serotonerjiklerle birlikte serotonin sendromu (nadir)'],
    etkilesim: ['MAOİ ile kontrendike', 'Güçlü CYP3A4 inhibitörleri (eritromisin, itrakonazol, greyfurt suyu) düzeyi belirgin artırır', 'Karbamazepin, rifampisin düzeyi düşürür'],
    oz: ['sero']
  },
  {
    id: 'diazepam', ad: 'Diazepam', sinif: 'anks', altSinif: 'Benzodiazepin (uzun etkili)', grup: 'benzo',
    mek: 'GABA-A reseptörü pozitif allosterik modülatörü. Hızlı başlangıçlı ve uzun etkilidir; aktif metabolitleri günlerce dolaşımda kalır. Uzun yarı ömrü nedeniyle diğer benzodiazepinlerden çıkışta ara basamak olarak kullanılır.',
    t12: '20–50 saat (aktif metabolit 36–200 saat)', t12s: 48, etki: 'Oral 15–60 dakika', form: 'Tablet 2 / 5 / 10 mg; ampul 10 mg; rektal tüp 5 / 10 mg',
    onay: [['Anksiyete, kas spazmı, nöbette ek tedavi', '≥ 6 ay']],
    ped: {
      bas: '1–2,5 mg ×2–3 (0,1–0,3 mg/kg/gün, bölünmüş)', artis: 'Yanıta göre 3–4 günde bir kademeli', hedef: 'Çocuk: 2–10 mg/gün · ergen: 4–20 mg/gün (bölünmüş)', maks: '0,8 mg/kg/gün; ergende 30 mg/gün',
      birim: 'mg/gün', adim: [[0, 3], [4, 6], [8, 10]], bant: [3, 10], tavan: 30,
      not: ['Altı aydan küçük bebeklerde oral form kullanılmaz.', 'Kullanım süresini 2–4 hafta ile sınırlayın.', 'Aktif metabolitler birikir: sedasyon ilk hafta boyunca artabilir, dozu erken artırmayın.', 'Paradoksal disinhibisyon (ajitasyon, saldırganlık) çocuklarda ve gelişimsel bozukluklarda daha sıktır.']
    },
    eri: {
      bas: '2–5 mg ×2–3', artis: '3–4 günde bir', hedef: '5–30 mg/gün (bölünmüş)', maks: '40 mg/gün',
      birim: 'mg/gün', adim: [[0, 6], [4, 15], [8, 30]], bant: [6, 30], tavan: 40, not: []
    },
    surdurum: ['Kullanımı 2–4 hafta ile sınırlayın; daha uzun kullanım gerekiyorsa gerekçeyi yazın ve çıkış planını baştan yapın.', 'Asıl tedavi (SSRI, psikoterapi) etkisini gösterene dek köprü olarak kullanın.'],
    kesme: { risk: 3, sure: 'Kullanım süresine göre 4–12+ hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 10], [70, 0]],
      not: ['Her 1–2 haftada dozun %10–25\'i kadar azaltın; son basamakları daha yavaş inin.', 'Uzun yarı ömür azaltımı kolaylaştırır: kesilme belirtileri geç (5–10. gün) başlar ve daha hafif seyreder.', 'Ani kesmede nöbet riski.'] },
    izlem: 'benzo', profil: { sed: 3, kilo: 0, gis: 0, akt: 0, kes: 3 },
    kutu: 'Kötüye kullanım, bağımlılık ve kesilme reaksiyonları; opioidlerle birlikte kullanımda solunum depresyonu ve ölüm riski.',
    uyari: ['Sedasyon, ataksi, anterograd amnezi', 'Paradoksal disinhibisyon', 'Birikime bağlı gündüz uyuklaması, okul performansında düşme', 'Tolerans ve bağımlılık', 'Solunum depresyonu (parenteral/yüksek doz)'],
    etkilesim: ['Opioid, alkol ve diğer sedatiflerle solunum depresyonu', 'Fluvoksamin, fluoksetin, omeprazol (CYP2C19) düzeyi artırır', 'Güçlü CYP3A4 inhibitörleri düzeyi artırır', 'Karbamazepin, fenitoin, rifampisin düzeyi düşürür'],
    oz: ['benzo', 'uzun']
  },
  {
    id: 'alprazolam', ad: 'Alprazolam', sinif: 'anks', altSinif: 'Benzodiazepin (kısa–orta etkili)', grup: 'benzo',
    mek: 'GABA-A reseptörü pozitif allosterik modülatörü; panik bozuklukta etkilidir. Hızlı başlangıç ve kısa etki süresi nedeniyle doz arası rebound anksiyete ve bağımlılık riski diğer benzodiazepinlerden yüksektir.',
    t12: '11 saat (6–27 saat)', t12s: 11, etki: '15–60 dakika', form: 'Tablet 0,25 / 0,5 / 1 mg',
    onay: [], onayNot: 'Pediatrik onay yok · endikasyon dışı',
    ped: {
      bas: '0,125–0,25 mg ×2–3 (ergen)', artis: '3–4 günde bir 0,125–0,25 mg', hedef: '0,5–1,5 mg/gün (bölünmüş)', maks: '2 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.5], [4, 0.75], [8, 1]], bant: [0.5, 1.5], tavan: 2,
      not: ['Endikasyon dışı kullanım; çocuk ve ergende ilk seçenek değildir, yalnızca kısa süreli (2–4 hafta) kullanın.', 'Doz aralarında rebound anksiyete olursa daha uzun etkili bir benzodiazepine geçin.', 'Madde kullanım öyküsü olan gençte kullanmayın.']
    },
    eri: {
      bas: '0,25–0,5 mg ×3', artis: '3–4 günde bir en fazla 1 mg/gün', hedef: 'Anksiyete: 0,75–4 mg/gün · panik: 4–6 mg/gün', maks: 'Anksiyete: 4 mg/gün',
      birim: 'mg/gün', adim: [[0, 0.75], [4, 1.5], [8, 3]], bant: [0.75, 4], tavan: 4, not: []
    },
    surdurum: ['Kullanımı 2–4 hafta ile sınırlayın; daha uzun kullanım gerekiyorsa gerekçeyi yazın ve çıkış planını baştan yapın.', 'Asıl tedavi (SSRI, psikoterapi) etkisini gösterene dek köprü olarak kullanın.'],
    kesme: { risk: 3, sure: 'Kullanım süresine göre 6–12+ hafta', adim: [[0, 100], [14, 75], [28, 50], [42, 25], [56, 10], [70, 0]],
      not: ['Günlük dozu 3 günde bir en fazla 0,5 mg azaltın; uzun kullanımda her 1–2 haftada %10–25.', 'Kesilme belirtileri şiddetliyse eşdeğer dozda diazepam veya klonazepama geçip onu azaltın.', 'Ani kesmede nöbet riski; kısa yarı ömür nedeniyle belirtiler 1–2 gün içinde başlar.'] },
    izlem: 'benzo', profil: { sed: 2, kilo: 0, gis: 0, akt: 0, kes: 3 },
    kutu: 'Kötüye kullanım, bağımlılık ve kesilme reaksiyonları; opioidlerle birlikte kullanımda solunum depresyonu ve ölüm riski.',
    uyari: ['Sedasyon, dikkat ve bellek bozukluğu', 'Doz arası rebound anksiyete', 'Paradoksal disinhibisyon', 'Tolerans ve bağımlılık (diğer benzodiazepinlerden yüksek)'],
    etkilesim: ['Ketokonazol, itrakonazol ile kontrendike (düzey 3–4 kat)', 'Fluvoksamin düzeyi 2 kat artırır: dozu yarıya indirin', 'Klaritromisin, eritromisin, greyfurt suyu düzeyi artırır', 'Karbamazepin düzeyi düşürür', 'Opioid, alkol ve sedatiflerle solunum depresyonu'],
    oz: ['benzo']
  },
  {
    id: 'pregabalin', ad: 'Pregabalin', sinif: 'anks', altSinif: 'Alfa-2-delta ligandı', grup: 'diger',
    mek: 'Voltaja bağlı kalsiyum kanallarının alfa-2-delta alt birimine bağlanır; uyarıcı nörotransmitter salınımını azaltır. Erişkinde yaygın anksiyete bozukluğunda etkilidir, etkisi ilk haftada başlar. Metabolize olmaz, böbrekle atılır. Kötüye kullanım potansiyeli vardır.',
    t12: '~6 saat', t12s: 6, etki: '1 hafta', form: 'Kapsül 25 / 75 / 150 / 300 mg; oral solüsyon 20 mg/mL',
    onay: [], onayNot: 'Anksiyetede pediatrik onay yok · endikasyon dışı',
    ped: {
      bas: '25–50 mg ×2 (ergen)', artis: 'Haftada bir 50–75 mg/gün', hedef: '150–300 mg/gün (2–3 doza bölünmüş)', maks: '300 mg/gün',
      birim: 'mg/gün', adim: [[0, 75], [7, 150], [14, 225], [21, 300]], bant: [150, 300], tavan: 300,
      not: ['Endikasyon dışı kullanım; çocuk ve ergen anksiyetesinde kontrollü çalışma yoktur.', 'Madde kullanım öyküsünü sorgulayın; kötüye kullanım ergenlerde bildirilmiştir.', 'Sedasyon ve baş dönmesi ilk haftalarda belirgindir: okul ve araç kullanımı konusunda uyarın.']
    },
    eri: {
      bas: '75 mg ×2', artis: 'Haftada bir 150 mg/gün', hedef: '300–450 mg/gün', maks: '600 mg/gün',
      birim: 'mg/gün', adim: [[0, 150], [7, 300], [14, 450], [21, 600]], bant: [300, 450], tavan: 600, not: []
    },
    surdurum: ['Yeterli dozda 4–6 hafta sonunda yanıt yoksa kademeli keserek başka seçeneğe geçin.', 'Her vizitte doz artırma eğilimi ve kötüye kullanım belirtilerini sorgulayın.'],
    kesme: { risk: 2, sure: 'En az 1–2 hafta (uzun kullanımda daha yavaş)', adim: [[0, 100], [7, 50], [14, 0]],
      not: ['En az bir haftada kademeli azaltın.', 'Ani kesmede uykusuzluk, bulantı, baş ağrısı, anksiyete, terleme; yüksek dozda nöbet bildirilmiştir.'] },
    izlem: 'benzo', izlemEk: [['Böbrek işlevi', [1, 0, 0, 0, 2], 'Doz kreatinin klirensine göre ayarlanır.'], ['Kilo / ödem', [1, 1, 1, 1, 1], 'Kilo artışı ve periferik ödem.'], ['İntihar düşüncesi', [1, 1, 1, 1, 1], 'Antiepileptik sınıf uyarısı.']],
    profil: { sed: 2, kilo: 2, gis: 1, akt: 0, kes: 2 },
    kutu: 'Kötüye kullanım ve bağımlılık bildirilmiştir; opioidlerle birlikte kullanımda solunum depresyonu riski.',
    uyari: ['Baş dönmesi, somnolans', 'Kilo artışı, periferik ödem', 'Bulanık görme, dikkat bozukluğu', 'Kötüye kullanım, bağımlılık', 'İntihar düşüncesi (antiepileptik sınıf uyarısı)'],
    etkilesim: ['Opioid, benzodiazepin ve alkolle additif sedasyon ve solunum depresyonu', 'CYP üzerinden etkileşimi yoktur', 'Tiyazolidindionlarla ödem artar'],
    oz: []
  }
  );
})();
