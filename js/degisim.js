/* Psikofarmakoloji Rehberi — ilaç değişimi (switch) kural motoru */
(function () {
  var STRATEJI = {
    dogrudan: { ad: 'Doğrudan geçiş', acik: 'Eski ilaç kesilir, ertesi gün yeni ilaç başlanır.' },
    capraz:   { ad: 'Çapraz geçiş', acik: 'Eski ilaç kademeli azaltılırken yeni ilaç kademeli artırılır.' },
    yikama:   { ad: 'Azalt – kes – bekle – başla', acik: 'Eski ilaç kesilir, arınma süresi beklenir, sonra yenisi başlanır.' },
    ortusme:  { ad: 'Ekle – örtüştür – azalt', acik: 'Yeni ilaç etkin doza getirilir, sonra eski ilaç azaltılır.' }
  };

  function inis(bas, sure, n) {
    if (!sure) return [[bas, 0]];
    var d = [];
    for (var i = 0; i < n; i++) d.push([Math.round(bas + i * sure / (n - 1)), Math.round(100 - 100 * (i + 1) / n)]);
    return d;
  }
  function cikis(bas, sure, n) {
    if (!sure) return [[bas, 100]];
    var d = [];
    for (var i = 0; i < n; i++) d.push([Math.round(bas + i * sure / (n - 1)), Math.round(100 * (i + 1) / n)]);
    return d;
  }
  /* p: azalt (eski ilacın azaltım süresi, gün), bekle (arınma), titr (yeni ilacın titrasyon süresi), ortus (örtüşme platosu) */
  function egriler(tur, p) {
    var t0 = 7, A = [[0, 100]], B = [[0, 0]], bosluk = null, bitA;
    if (tur === 'dogrudan') {
      A = A.concat([[t0, 0]]); B = B.concat(cikis(t0, p.titr, 3));
    } else if (tur === 'capraz') {
      A = A.concat(inis(t0, p.azalt, 4)); B = B.concat(cikis(t0, p.azalt, 4));
    } else if (tur === 'yikama') {
      A = A.concat(inis(t0, p.azalt, 3)); bitA = t0 + (p.azalt || 0);
      if (p.bekle) bosluk = [bitA, bitA + p.bekle];
      B = B.concat(cikis(bitA + (p.bekle || 0), p.titr, 3));
    } else {
      B = B.concat(cikis(t0, p.titr, 3));
      A = A.concat(inis(t0 + (p.titr || 0) + (p.ortus || 0), p.azalt, 3));
    }
    return { egriA: A, egriB: B, bosluk: bosluk };
  }

  var K = 'ped'; // planla() çağrısında ayarlanan hasta grubu
  function var_(i, o) { return (i.oz || []).indexOf(o) >= 0; }

  function kural(a, b) {
    var ag = a.grup, bg = b.grup;
    /* ───── DEHB ───── */
    if (ag === 'stimulan' && bg === 'stimulan') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1 gün (ardından 2–3 hafta doz optimizasyonu)',
      adim: [a.ad + ' son dozunu verin; ertesi sabah ' + b.ad + ' başlangıç dozuyla başlayın. Arınma süresi gerekmez.',
        'İki stimulan arasında kesin bir doz eşdeğerliği yoktur: yeni ilacı düşük dozdan başlayıp haftalık aralıklarla etkinlik ve yan etkiye göre titre edin.',
        'Her basamakta kan basıncı, nabız, iştah, uyku ve DEHB ölçeğini (' + (K === 'eri' ? 'öz bildirim ± yakın bildirimi' : 'aile ve öğretmen') + ') değerlendirin.'],
      uyari: ['İki stimulanı birlikte kullanmayın.'] };
    if (ag === 'stimulan' && bg === 'nonstim') return { tur: 'ortusme', p: { titr: 14, ortus: 21, azalt: 0 }, sure: '4–6 hafta',
      adim: [b.ad + ' başlangıç dozuyla (' + b[K].bas + ') ekleyin; 1–2 hafta içinde hedef doza (' + b[K].hedef + ') çıkın.',
        a.ad + ' tedavisini bu sırada aynı dozda sürdürün: ' + b.ad + ' etkisi haftalar içinde belirginleşir (' + b.etki + ').',
        'Hedef dozda 2–4 hafta geçtikten sonra stimulanı kesin (kademeli azaltım gerekmez; isterseniz bir hafta yarı doz verin).',
        'Örtüşme döneminde kan basıncı ve nabzı her vizitte ölçün.'],
      uyari: ['Örtüşme döneminde additif kardiyovasküler etki (KB, nabız artışı) ve iştah azalması olabilir.', 'Stimulanın hemen kesilmesi gerekiyorsa (ağır yan etki) doğrudan geçiş yapılabilir; ' + (K === 'eri' ? 'hastayı' : 'aileyi') + ' etkinin gecikeceği konusunda bilgilendirin.'] };
    if (ag === 'nonstim' && bg === 'nonstim') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1 gün (ardından 2–4 hafta titrasyon)',
      adim: [a.ad + ' kademeli azaltım gerektirmez: son dozu verin ve ertesi gün ' + b.ad + ' başlangıç dozuyla başlayın.',
        b.ad + ' dozunu kendi şemasına göre titre edin; etkinin oturması haftalar alır.',
        'Geçiş boyunca kan basıncı, nabız ve duygudurum/intihar düşüncesini izleyin.'],
      uyari: ['İki noradrenerjik ilacı tam dozda birlikte kullanmayın (kan basıncı ve nabız artışı).'] };
    if (ag === 'nonstim' && bg === 'stimulan') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1 gün (ardından 2–3 hafta doz optimizasyonu)',
      adim: [a.ad + ' kademeli azaltım gerektirmez: son dozu verin ve ertesi gün ' + b.ad + ' başlangıç dozuyla başlayın.',
        'Stimulanı haftalık aralıklarla titre edin.',
        'Kısmi yanıt nedeniyle geçiliyorsa ' + a.ad + ' tedavisini kesmeden stimulan eklemek (kombinasyon) de bir seçenektir; bu durumda KB ve nabzı yakından izleyin.'],
      uyari: [] };
    if ((ag === 'stimulan' || ag === 'nonstim') && bg === 'alfa2') return { tur: 'ortusme', p: { titr: 21, ortus: 14, azalt: 0 }, sure: '4–6 hafta',
      adim: [b.ad + ' başlangıç dozuyla ekleyin; haftada bir basamak artırarak hedef doza ulaşın.',
        'Bu sırada ' + a.ad + ' tedavisini aynı dozda sürdürün.',
        'Hedef dozda 1–2 hafta sonra etkinlik yeterliyse ' + a.ad + ' tedavisini kesin (kademeli azaltım gerekmez).',
        'Kısmi yanıtta kombinasyon olarak sürdürmek onaylı bir seçenektir.'],
      uyari: ['Titrasyon boyunca kan basıncı, nabız ve sedasyonu haftalık izleyin.'] };
    if (ag === 'alfa2' && bg === 'alfa2') return { tur: 'yikama', p: { azalt: 14, bekle: 0, titr: 21 }, sure: '4–6 hafta',
      adim: [a.ad + ' dozunu 3–7 günde bir basamak azaltarak kesin (kan basıncı ve nabız izlemiyle).',
        'Kesildikten sonraki gün ' + b.ad + ' başlangıç dozuyla başlayın; haftalık titre edin.',
        'İki alfa-2 agonisti tam dozda birlikte kullanmayın.'],
      uyari: ['Ani kesme rebound hipertansiyon ve taşikardi yapar.', 'Örtüşme durumunda additif hipotansiyon, bradikardi ve sedasyon.'] };
    if (ag === 'alfa2') return { tur: 'capraz', p: { azalt: 21 }, sure: '2–4 hafta',
      adim: [b.ad + ' başlangıç dozuyla başlayın.',
        a.ad + ' dozunu 3–7 günde bir basamak (guanfasin 1 mg, klonidin 0,05–0,1 mg) azaltın.',
        'Azaltım boyunca ve kesildikten sonraki hafta kan basıncı ve nabzı ölçün.',
        'Yeni ilacı kendi şemasına göre titre edin.'],
      uyari: ['Alfa-2 agonist asla aniden kesilmemelidir (rebound hipertansiyon).'] };

    /* ───── Antidepresanlar ───── */
    if (a.sinif === 'ad' && b.sinif === 'ad') {
      if (a.id === 'fluoksetin' && bg === 'tca') return { tur: 'yikama', p: { azalt: 0, bekle: 14, titr: 28 }, sure: '4–6 hafta',
        adim: ['Fluoksetini kesin (40 mg üzerindeyse önce 20 mg\'a inin).',
          'İdeal olarak 2 hafta bekleyin; bekleme mümkün değilse trisikliği çok düşük dozla başlayın.',
          b.ad + ' en düşük dozla başlayın ve normalden yavaş titre edin; başlangıç ve doz artışlarında EKG çekin.',
          'Fluoksetinin CYP2D6 inhibisyonu kesildikten sonra 5 haftaya dek sürer: trisiklik düzeyi beklenenden yüksek olur.'],
        uyari: ['Trisiklik toksisitesi (QRS genişlemesi, taşikardi, nöbet) ve serotonin sendromu riski.'] };
      if (a.id === 'fluoksetin' && var_(b, 'sero')) return { tur: 'yikama', p: { azalt: 0, bekle: 7, titr: 14 }, sure: '2–4 hafta',
        adim: ['Fluoksetini kesin (20 mg\'dan doğrudan; 40 mg ve üzerindeyse önce 20 mg\'a inip 1–2 hafta bekleyin).',
          '4–7 gün ilaçsız bekleyin: uzun yarı ömür nedeniyle fluoksetin haftalarca dolaşımda kalır.',
          b.ad + ' düşük dozla başlayın ve yavaş titre edin.',
          'İlk 2–4 hafta serotonerjik belirtileri (tremor, huzursuzluk, terleme, ishal, klonus) izleyin.'],
        uyari: ['Fluoksetin ve norfluoksetin kesildikten sonra 5 haftaya dek etkileşim yapabilir.'] };
      if (a.id === 'fluoksetin') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1–2 hafta',
        adim: ['Fluoksetini kesin.', b.ad + ' başlangıç dozuyla başlayın ve kendi şemasına göre titre edin.', 'Fluoksetinin etkisi haftalar içinde yavaşça azalır; kesilme belirtisi beklenmez.'],
        uyari: [] };
      if (b.id === 'fluoksetin' && (ag === 'ssri' || ag === 'snri')) return { tur: 'dogrudan', p: { titr: 14 }, sure: '1–2 hafta',
        adim: [a.ad + ' düşük–orta dozdaysa kesin ve ertesi gün fluoksetin 10 mg ile başlayın; yüksek dozdaysa önce 1–2 haftada yarıya indirin.',
          '1–2 hafta sonra fluoksetini 20 mg\'a çıkarın.',
          'Fluoksetinin uzun yarı ömrü önceki ilacın kesilme belirtilerini büyük ölçüde örter.'],
        uyari: [] };
      if (a.id === 'fluvoksamin' && b.id === 'agomelatin') return { tur: 'yikama', p: { azalt: 14, bekle: 7, titr: 14 }, sure: '3–5 hafta',
        adim: ['Fluvoksamini 1–2 haftada kademeli azaltıp kesin.', 'Yaklaşık 1 hafta bekleyin: fluvoksamin vücuttan temizlenmeden agomelatin başlanmaz.',
          'Karaciğer enzimlerine bakın; ardından agomelatini 25 mg gece dozuyla başlayın.'],
        uyari: ['Fluvoksamin agomelatin düzeyini yaklaşık 60 kat artırır: birlikte kullanım kontrendikedir, çapraz geçiş yapılmaz.'] };
      if (a.kesme.risk === 0 && bg !== 'tca') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1–2 hafta',
        adim: [a.ad + ' kesilme belirtisi yapmaz: kademeli azaltım gerekmeden kesin.', b.ad + ' ertesi gün başlangıç dozuyla başlayın ve kendi şemasına göre titre edin.'],
        uyari: [] };
      if (ag === 'tca' && bg === 'tca') return { tur: 'capraz', p: { azalt: 21 }, sure: '2–4 hafta',
        adim: [a.ad + ' dozunu haftada %25 azaltırken ' + b.ad + ' dozunu düşük dozdan kademeli artırın.', 'Toplam trisiklik yükünü aşmamaya dikkat edin; EKG ile izleyin.'],
        uyari: ['Additif antikolinerjik ve kardiyak etki.'] };
      if (a.id === 'klomipramin') return { tur: 'yikama', p: { azalt: 21, bekle: 7, titr: 14 }, sure: '5–7 hafta',
        adim: ['Klomipramini 3–4 haftada kademeli azaltıp kesin.', 'Yaklaşık 1 hafta bekleyin.', b.ad + ' düşük dozla başlayın ve yavaş titre edin.',
          'Klomipramin güçlü serotonerjiktir; diğer serotonerjik antidepresanlarla tam dozda birlikte kullanmayın.'],
        uyari: ['Serotonin sendromu riski.', 'Kolinerjik rebound: bulantı, terleme, uykusuzluk.'] };
      if (ag === 'tca') return { tur: 'capraz', p: { azalt: 21 }, sure: '3–4 hafta',
        adim: [a.ad + ' dozunu önce yarıya indirin.', b.ad + ' başlangıç dozuyla ekleyin.', 'Trisikliği sonraki 2–3 haftada kademeli azaltıp kesin; yeni ilacı kendi şemasına göre titre edin.'],
        uyari: ['Yeni ilaç CYP2D6 inhibitörü ise (fluoksetin, paroksetin, bupropion, duloksetin) trisiklik düzeyi yükselir: örtüşmeyi kısa tutun, EKG çekin.'] };
      if (b.id === 'klomipramin' && var_(a, 'sero')) return { tur: 'yikama', p: { azalt: 14, bekle: 7, titr: 28 }, sure: '5–7 hafta',
        adim: [a.ad + ' tedavisini 2 haftada kademeli azaltıp kesin.', 'Yaklaşık 1 hafta bekleyin (paroksetin ve fluvoksaminden sonra da klomipramin düzeyi bir süre yüksek seyredebilir).',
          'Klomipramini 25 mg ile başlayın; EKG ve nabız/KB eşliğinde yavaş titre edin.'],
        uyari: ['Klomipramin + SSRI/SNRI birlikteliğinde serotonin sendromu ve klomipramin toksisitesi riski yüksektir.'] };
      if (bg === 'tca') return { tur: 'capraz', p: { azalt: 21 }, sure: '3–4 hafta',
        adim: [a.ad + ' dozunu kademeli azaltın.', b.ad + ' çok düşük dozla (10–25 mg) başlayın ve yavaş artırın.', 'Başlangıçta ve her doz artışında EKG, nabız ve kan basıncı.'],
        uyari: ['Eski ilaç CYP2D6 inhibitörü ise trisiklik düzeyi beklenenden yüksek olur; mümkünse önce kesip sonra başlayın.'] };
      if (ag === 'ssri' && bg === 'ssri') {
        if (a.id === 'paroksetin') return { tur: 'capraz', p: { azalt: 14 }, sure: '2–3 hafta',
          adim: ['Paroksetini haftada 10 mg azaltın (kesilme belirtisi riski yüksek).', b.ad + ' düşük dozla ekleyin ve paroksetin azaldıkça artırın.', 'Kesilme belirtisi olursa azaltımı yavaşlatın.'],
          uyari: ['Paroksetin CYP2D6 inhibitörüdür; örtüşmede serotonerjik yan etkiler artabilir.'] };
        return { tur: 'dogrudan', p: { titr: 7 }, sure: '1–2 hafta',
          adim: [a.ad + ' düşük–orta dozdaysa kesin ve ertesi gün ' + b.ad + ' eşdeğer düşük dozla başlayın.',
            'Yüksek dozdaysa önce 1–2 haftada yarıya indirin, sonra geçin (kısa çapraz geçiş).',
            'Yeni ilacı 1–2 hafta sonra hedef doza çıkarın.',
            'Yaklaşık eşdeğerler: fluoksetin 20 mg ≈ sertralin 50 mg ≈ essitalopram 10 mg ≈ sitalopram 20 mg ≈ paroksetin 20 mg ≈ fluvoksamin 100 mg.'],
          uyari: ['Geçişin ilk haftasında geçici kesilme belirtileri veya serotonerjik yan etkiler görülebilir.'] };
      }
      if (ag === 'ssri' && bg === 'snri') return { tur: 'capraz', p: { azalt: 14 }, sure: '2–3 hafta',
        adim: [a.ad + ' dozunu 1–2 haftada kademeli azaltın.', b.ad + ' en düşük dozla (venlafaksin 37,5 mg / duloksetin 30 mg / desvenlafaksin 25–50 mg) başlayın.', 'Eski ilaç kesildikten sonra yeni ilacı hedef doza titre edin.', 'Düşük dozlu SSRI\'dan doğrudan geçiş de yapılabilir.'],
        uyari: ['Kan basıncı ve nabzı izleyin.'] };
      if (ag === 'snri') return { tur: 'capraz', p: { azalt: 21 }, sure: '3–4 hafta',
        adim: [a.ad + ' dozunu 1–2 haftada bir basamak (venlafaksin 37,5 mg / duloksetin 30 mg / desvenlafaksin 25 mg) azaltın.', b.ad + ' düşük dozla ekleyin.', 'SNRI kesildikten sonra yeni ilacı hedef doza çıkarın.', 'Kesilme belirtileri şiddetliyse azaltımı yavaşlatın.'],
        uyari: ['SNRI kesilme belirtileri (baş dönmesi, elektrik çarpması hissi, bulantı, irritabilite) sıktır.'] };
      return { tur: 'capraz', p: { azalt: 21 }, sure: '2–4 hafta',
        adim: [a.ad + ' dozunu haftada yaklaşık %25 azaltın.', b.ad + ' başlangıç dozuyla ekleyin ve eski ilaç azaldıkça artırın.', 'Eski ilaç kesildikten sonra yeni ilacı hedef doza titre edin.'],
        uyari: [] };
    }

    /* ───── Antipsikotikler ───── */
    if (ag === 'ap' && bg === 'ap') {
      var cift = [a.id, b.id].sort().join('+');
      if (cift === 'paliperidon+risperidon') return { tur: 'dogrudan', p: { titr: 0 }, sure: '1 gün',
        adim: [a.ad + ' son dozunu verin; ertesi gün ' + b.ad + ' ile devam edin (paliperidon risperidonun aktif metabolitidir).',
          'Yaklaşık eşdeğerlik: risperidon 3–4 mg/gün ≈ paliperidon 6 mg/gün; klinik yanıta göre ayarlayın.'],
        uyari: ['İkisini birlikte kullanmayın.'] };
      if (a.id === 'klozapin') return { tur: 'ortusme', p: { titr: 14, ortus: 7, azalt: 42 }, sure: '8–12 hafta',
        adim: [b.ad + ' başlangıç dozuyla ekleyin ve etkin doza titre edin.', 'Klozapini çok yavaş azaltın (haftada 25–50 mg; toplam en az 4–8 hafta).',
          'Rebound psikoz ve kolinerjik rebound (terleme, bulantı, ishal, uykusuzluk) açısından haftalık görün.', 'Klozapin kesildikten sonra 4 hafta daha hemogram izleyin.'],
        uyari: ['Klozapinden başka antipsikotiğe geçişte nüks riski yüksektir: geçiş gerekçesini gözden geçirin.', 'Agranülositoz/miyokardit nedeniyle acil kesmede kademeli azaltım yapılamaz; yakın izlem ve gerekirse antikolinerjik.'] };
      if (b.id === 'klozapin') return { tur: 'ortusme', p: { titr: 28, ortus: 0, azalt: 21 }, sure: '6–8 hafta',
        adim: ['Başlangıç tetkiklerini tamamlayın (hemogram, EKG, troponin/CRP, metabolik).', 'Klozapini 12,5 mg ile başlayıp kademeli titre edin; bu sırada ' + a.ad + ' dozunu koruyun.',
          'Klozapin etkin doza (genellikle ≥ 150–200 mg/gün) yaklaşınca ' + a.ad + ' dozunu 2–4 haftada azaltıp kesin.', 'Haftalık hemogram ve titrasyon boyunca nabız, KB, ateş izlemi.'],
        uyari: ['Örtüşme döneminde sedasyon, ortostatik hipotansiyon, QT uzaması ve nöbet eşiği düşmesi additiftir.', 'Eski ilaç uzun etkili depo ise bir sonraki enjeksiyon gününde klozapine başlanır.'] };
      if (var_(b, 'd2p')) return { tur: 'ortusme', p: { titr: 7, ortus: 14, azalt: 28 }, sure: '6–8 hafta',
        adim: [b.id === 'aripiprazol' && K === 'ped' ? 'Aripiprazolü 2 mg (ergende 2–5 mg) ile ekleyin; 1–2 haftada hedef doza çıkın.' : b.ad + ' başlangıç dozuyla (' + b[K].bas + ') ekleyin ve kendi şemasına göre hedef doza çıkın.',
          a.ad + ' dozunu en az 2 hafta değiştirmeyin (' + b.ad + ' uzun yarı ömürlüdür; kararlı duruma ' + (b.id === 'aripiprazol' ? '2 haftada' : 'haftalar içinde') + ' ulaşır).',
          'Sonra ' + a.ad + ' dozunu 2–4 haftada (her 1–2 haftada %25–50) azaltıp kesin.', 'Akatizi, uykusuzluk ve ajitasyon açısından izleyin.'],
        uyari: [b.ad + ' parsiyel agonisttir: güçlü D2 blokörlerinden (risperidon, haloperidol) hızlı geçişte geçici ajitasyon, uykusuzluk veya psikotik alevlenme olabilir.', 'Prolaktin düşer; adetler ve fertilite geri dönebilir (' + (K === 'eri' ? 'kontrasepsiyon danışmanlığı verin' : 'ergenlerde kontrasepsiyon danışmanlığı') + ').'] };
      if (var_(a, 'antikol')) return { tur: 'capraz', p: { azalt: 28 }, sure: '4–6 hafta',
        adim: [b.ad + ' başlangıç dozuyla ekleyin ve kademeli artırın.', a.ad + ' dozunu her hafta %25 azaltın (yavaş azaltım rebound uykusuzluğu ve kolinerjik reboundu önler).',
          'Uyku bozulursa azaltımı yavaşlatın; kısa süreli uyku desteği düşünün.', 'Kilo, iştah ve EPS açısından yeniden değerlendirin.'],
        uyari: ['Sedatif/antikolinerjik bir ilaçtan daha az sedatif bir ilaca geçişte rebound uykusuzluk, ajitasyon, bulantı sıktır.'] };
      return { tur: 'capraz', p: { azalt: 21 }, sure: '2–4 hafta',
        adim: [b.ad + ' başlangıç dozuyla ekleyin.', a.ad + ' dozunu her hafta %25 azaltırken ' + b.ad + ' dozunu kademeli artırın.',
          'Eski ilaç kesildikten sonra yeni ilacı hedef doza optimize edin.', 'EPS, akatizi, uyku ve belirti alevlenmesini her vizitte değerlendirin.'],
        uyari: a.id === 'haloperidol' ? ['Antikolinerjik (biperiden) kullanılıyorsa haloperidol kesildikten 1–2 hafta sonra kesin.'] : [] };
    }

    /* ───── Duygudurum dengeleyiciler ───── */
    if (ag === 'dd' && bg === 'dd') {
      if (a.id === 'valproat' && b.id === 'lamotrijin') return { tur: 'ortusme', p: { titr: 35, ortus: 7, azalt: 21 }, sure: '9–12 hafta',
        adim: ['Lamotrijini VALPROATLI şemayla başlayın: 1–2. hafta 25 mg gün aşırı, 3–4. hafta 25 mg/gün, 5. hafta 50 mg/gün, 6. hafta 100 mg/gün.',
          'Lamotrijin 100 mg/gün\'e ulaşınca valproatı 2–4 haftada kademeli azaltın (haftada en fazla 500 mg).',
          'Valproat kesildikten sonra lamotrijini haftada 50 mg artırarak 200 mg/gün\'e çıkarın (valproatın inhibisyonu kalkınca düzey yarıya düşer).',
          'Geçiş boyunca her vizitte döküntü sorgulayın.'],
        uyari: ['Valproat lamotrijin düzeyini 2 kat artırır: standart titrasyon şeması kullanılırsa SJS/TEN riski belirgin artar.'] };
      if (a.id === 'lamotrijin' && b.id === 'valproat') return { tur: 'ortusme', p: { titr: 14, ortus: 7, azalt: 14 }, sure: '4–6 hafta',
        adim: ['Valproat başlanır başlanmaz lamotrijin dozunu yarıya indirin.', 'Valproatı düzey 50–100 µg/mL olacak şekilde titre edin.', 'Sonra lamotrijini 2 haftada (haftada ~%50) azaltıp kesin.'],
        uyari: ['Valproat eklendiğinde lamotrijin düzeyi 2 kat artar: doz azaltılmazsa toksisite ve döküntü riski.', 'Çocuk doğurma potansiyeli olanlarda valproat için gebelik önleme koşulları.'] };
      if (a.id === 'karbamazepin' && b.id === 'lamotrijin') return { tur: 'ortusme', p: { titr: 42, ortus: 7, azalt: 28 }, sure: '10–14 hafta',
        adim: ['Lamotrijini İNDÜKLEYİCİLİ şemayla başlayın: 1–2. hafta 50 mg/gün, 3–4. hafta 100 mg/gün, sonra haftada 100 mg artışla 300–400 mg/gün.',
          'Sonra karbamazepini 4 haftada kademeli azaltıp kesin.',
          'Karbamazepin kesildikten sonraki 2–4 haftada indüksiyon kalkar ve lamotrijin düzeyi yükselir: dozu kademeli olarak 200 mg/gün\'e indirin.'],
        uyari: ['Karbamazepin lamotrijin düzeyini yaklaşık %40–50 düşürür.', 'Birlikte kullanımda baş dönmesi, diplopi, ataksi artabilir.'] };
      if (a.id === 'lamotrijin' && b.id === 'karbamazepin') return { tur: 'ortusme', p: { titr: 21, ortus: 7, azalt: 14 }, sure: '5–7 hafta',
        adim: ['Karbamazepini başlangıç dozuyla ekleyip haftalık titre edin.', 'Karbamazepin hedef doza ulaşınca lamotrijini 2 haftada azaltıp kesin.', 'Karbamazepin indüksiyonu lamotrijin düzeyini düşürür; örtüşmede nörotoksisite belirtilerini izleyin.'],
        uyari: ['Her iki ilaç da döküntü yapabilir: yeni döküntüde ikisini de değerlendirin.'] };
      if (a.id === 'karbamazepin' && b.id === 'okskarbazepin') return { tur: 'dogrudan', p: { titr: 14 }, sure: '1 gün (ardından 2–4 hafta doz ayarı)',
        adim: ['Karbamazepini kesin ve ertesi gün okskarbazepine geçin: karbamazepin 200 mg ≈ okskarbazepin 300 mg.', 'Yüksek dozda (karbamazepin > 800 mg/gün) geçişi 1–2 haftaya yayın ve daha düşük oranla başlayın.',
          'Karbamazepinin enzim indüksiyonu 2–4 haftada kalkar: eşlik eden ilaçların (antipsikotik, lamotrijin, valproat) düzeyi yükselebilir.', 'İlk 3 ayda sodyum bakın.'],
        uyari: ['Karbamazepine bağlı döküntüsü olanların yaklaşık %25–30\'unda okskarbazepinle de döküntü gelişir.', 'Hiponatremi okskarbazepinle daha sıktır.'] };
      if (a.id === 'okskarbazepin' && b.id === 'karbamazepin') return { tur: 'dogrudan', p: { titr: 21 }, sure: '1 gün (ardından 3–5 hafta doz ayarı)',
        adim: ['Okskarbazepini kesin ve ertesi gün karbamazepine geçin: okskarbazepin 300 mg ≈ karbamazepin 200 mg.', 'Karbamazepinin oto-indüksiyonu nedeniyle ilk 3–5 haftada düzey düşer: düzey bakarak dozu artırın.',
          'Eşlik eden ilaçların düzeyi karbamazepin indüksiyonuyla düşer: dozlarını gözden geçirin.'],
        uyari: ['Asya kökenli hastalarda karbamazepin öncesi HLA-B*1502 bakın.'] };
      if (a.id === 'lityum') return { tur: 'ortusme', p: { titr: b.id === 'lamotrijin' ? 42 : 14, ortus: 14, azalt: 28 }, sure: b.id === 'lamotrijin' ? '12–14 hafta' : '8–10 hafta',
        adim: [b.ad + ' başlangıç dozuyla ekleyin ve etkin doza/düzeye titre edin.', 'Yeni ilaç etkin dozda en az 2 hafta sürdükten sonra lityumu azaltmaya başlayın.',
          'Lityumu en az 4 haftada (tercihen 3 aya dek) kademeli azaltıp kesin.', 'Kesme sonrası ilk 3 ay nüks ve intihar riski açısından sık görün.'],
        uyari: ['Lityumun hızlı kesilmesi erken manik nüks riskini belirgin artırır.'] };
      if (b.id === 'lityum') return { tur: 'ortusme', p: { titr: 14, ortus: 7, azalt: 28 }, sure: '6–8 hafta',
        adim: ['Başlangıç tetkiklerini tamamlayın (böbrek işlevi, TSH, kalsiyum, EKG, gebelik testi).', 'Lityumu başlayın; 5–7 günde bir düzey bakarak 0,6–1,0 mEq/L\'ye titre edin.',
          'Düzey terapötik aralıkta kararlı olunca ' + a.ad + ' dozunu 4 haftada kademeli azaltıp kesin.'],
        uyari: a.id === 'karbamazepin' ? ['Karbamazepin + lityum birlikteliğinde nörotoksisite bildirilmiştir; örtüşmede tremor, ataksi, konfüzyon izleyin.'] : [] };
      return { tur: 'ortusme', p: { titr: 21, ortus: 7, azalt: 28 }, sure: '8–10 hafta',
        adim: [b.ad + ' başlangıç dozuyla ekleyin ve serum düzeyi eşliğinde titre edin.', 'Yeni ilaç terapötik düzeye ulaşınca ' + a.ad + ' dozunu 4 haftada kademeli azaltın.', 'Örtüşme döneminde her iki ilacın düzeyini kontrol edin.'],
        uyari: [a.id, b.id].sort().join('+') === 'karbamazepin+valproat' ? ['Valproat karbamazepinin aktif epoksit metabolitini artırır (toksisite); karbamazepin valproat düzeyini düşürür.'] : [] };
    }

    /* ───── Benzodiazepinler ───── */
    if (ag === 'benzo' && bg === 'benzo') return { tur: 'dogrudan', p: { titr: 0 }, sure: '1–7 gün',
      adim: ['Eşdeğer dozu hesaplayın: diazepam 10 mg ≈ lorazepam 1 mg ≈ klonazepam 0,5 mg ≈ alprazolam 0,5 mg.', 'Doğrudan veya günlük dozları birer birer değiştirerek 3–7 günde geçin.',
        'Amaç kesmekse: uzun etkili benzodiazepine geçtikten sonra her 1–2 haftada %10–25 azaltın.'],
      uyari: ['Eşdeğerlikler yaklaşıktır; aşırı sedasyon veya yoksunluk belirtilerine göre ayarlayın.'] };
    if (ag === 'benzo') return { tur: 'ortusme', p: { titr: 14, ortus: 14, azalt: 42 }, sure: '8–12 hafta',
      adim: [b.ad + ' başlayın ve hedef doza titre edin.', 'Yeni ilacın etkisi başlayana dek (SSRI/buspiron için 2–4 hafta) benzodiazepini aynı dozda sürdürün.',
        'Sonra benzodiazepini her 1–2 haftada %10–25 azaltarak kesin.', 'Uyku, anksiyete ve yoksunluk belirtilerini (tremor, terleme, irritabilite) izleyin.'],
      uyari: ['Yeni ilaç benzodiazepin yoksunluğunu önlemez: ani kesmede nöbet riski vardır.'] };

    /* ───── Kısa etkili / kesilme riski olmayan ilaçlardan ───── */
    if (a.kesme.risk === 0) return { tur: 'dogrudan', p: { titr: 14 }, sure: '1 gün',
      adim: [a.ad + ' kademeli azaltım gerektirmez: kesin.', b.ad + ' başlangıç dozuyla başlayın ve kendi şemasına göre titre edin.'],
      uyari: [] };

    /* ───── Farklı sınıflar arası genel kural ───── */
    return { tur: 'ortusme', p: { titr: 21, ortus: 7, azalt: a.kesme.risk >= 2 ? 28 : 14 }, sure: a.kesme.risk >= 2 ? '6–10 hafta' : '4–6 hafta', genel: true,
      adim: ['Geçiş gerekçesini ve hedef belirtiyi netleştirin: farklı sınıflar arasında genellikle "değişim" değil, endikasyona göre yeni tedavi planı söz konusudur.',
        b.ad + ' kendi başlangıç ve titrasyon şemasıyla başlayın.',
        'Yeni ilaç etkin doza ulaşınca ' + a.ad + ' tedavisini kendi kesme şemasına göre (' + a.kesme.sure + ') azaltın.',
        'Her seferinde tek değişiklik yapın; yan etkinin hangi ilaca ait olduğunu ayırt edebilmek için basamakları üst üste bindirmeyin.'],
      uyari: [] };
  }

  /* x'in orta/güçlü inhibe ettiği ve y'nin ana yıkım yolu olan CYP enzimleri (UGT izoforma özgü olduğu için dışarıda) */
  function inhibeEttigi(x, y) {
    var s = { enzim: [], guclu: false };
    if (!x.metab || !y.metab) return s;
    ['1A2', '2B6', '2C9', '2C19', '2D6', '3A4'].forEach(function (e) {
      var g = x.metab.inh[e] || 0;
      if (g >= 2 && y.metab.sub[e] === 2) { s.enzim.push('CYP' + e); if (g === 3) s.guclu = true; }
    });
    return s;
  }

  /* Farmakolojik özelliklere göre otomatik uyarılar */
  function otomatikUyari(a, b, tur) {
    var u = [], ortus = tur !== 'yikama';
    if (var_(a, 'sero') && var_(b, 'sero')) u.push('İki serotonerjik ilaç: geçiş döneminde serotonin sendromu belirtilerini (ajitasyon, tremor, klonus, hiperrefleksi, terleme, ishal, ateş) izleyin.');
    // CYP: bir ilaç, diğerinin ana yıkım enzimini orta/güçlü düzeyde inhibe ediyorsa
    var eA = inhibeEttigi(a, b), eB = inhibeEttigi(b, a);
    if (eA.enzim.length) u.push(a.ad + ' ' + eA.enzim.join(' ve ') + ' inhibitörüdür' + (eA.guclu ? ' (güçlü)' : '') + ': ' + b.ad + ' başlıca bu yolla yıkılır, düzeyi beklenenden yüksek olur; düşük dozla başlayıp yavaş artırın' + (a.id === 'fluoksetin' ? ' (etki fluoksetin kesildikten sonra 5 haftaya dek sürer).' : '.') + (eA.guclu && eA.enzim.indexOf('CYP1A2') >= 0 ? ' Artış çok belirgindir: birlikte kullanmaktan kaçının veya dozu belirgin azaltın.' : ''));
    if (eB.enzim.length && (ortus || eB.enzim.indexOf('CYP1A2') >= 0)) u.push(b.ad + ' ' + eB.enzim.join(' ve ') + ' inhibitörüdür' + (eB.guclu ? ' (güçlü)' : '') + ': örtüşme döneminde ' + a.ad + ' düzeyi yükselir; eski ilacın dozunu daha hızlı azaltmak veya düzey izlemek gerekebilir.');
    if ((a.id === 'valproat' && b.id === 'lorazepam') || (b.id === 'valproat' && a.id === 'lorazepam' && ortus)) u.push('Valproat lorazepamın glukuronidasyonunu yavaşlatır: lorazepam dozunu yaklaşık %50 azaltın.');
    if (var_(a, 'induk')) u.push('Karbamazepin kesildikten 2–4 hafta sonra enzim indüksiyonu kalkar: ' + b.ad + ' ve diğer ilaçların düzeyi yükselebilir, doz azaltımı gerekebilir.');
    if (var_(b, 'induk')) u.push('Karbamazepin enzim indükleyicidir: örtüşmede ' + a.ad + ' ve diğer ilaçların (hormonal kontraseptif dahil) düzeyi düşer.');
    if ((var_(a, 'kloz') && var_(b, 'cbz')) || (var_(b, 'kloz') && var_(a, 'cbz'))) u.push('Klozapin ile karbamazepin birlikte kullanılmamalıdır (kemik iliği baskılanması): örtüşme yapmayın.');
    if (var_(a, 'qt') && var_(b, 'qt') && ortus) u.push('Her iki ilaç da QT aralığını uzatabilir: örtüşme döneminde EKG çekin, elektrolitleri kontrol edin.');
    if (var_(a, 'nobet') && var_(b, 'nobet') && ortus) u.push('Her iki ilaç da nöbet eşiğini düşürür: örtüşmeyi kısa tutun, dozları düşük tutun.');
    if (var_(a, 'antikol') && var_(b, 'antikol') && ortus) u.push('Additif antikolinerjik ve sedatif etki: kabızlık, idrar retansiyonu, konfüzyon açısından izleyin.');
    if (var_(a, 'uzun')) u.push(a.ad + ' uzun yarı ömürlüdür: kesildikten sonra haftalarca etkisi ve etkileşimleri sürer.');
    if ((var_(a, 'vpa') && var_(b, 'ltg')) || (var_(a, 'ltg') && var_(b, 'vpa'))) { /* kuralda ele alındı */ }
    if (var_(a, 'stim') && var_(b, 'sero') && b.sinif === 'ad') u.push('Stimulan + serotonerjik antidepresan birlikteliğinde nabız, KB ve aktivasyonu izleyin.');
    return u;
  }

  window.Degisim = {
    STRATEJI: STRATEJI,
    /* kitle: 'ped' (varsayılan) veya 'eri' — adımlarda hangi yaş grubunun dozunun yazılacağını belirler */
    planla: function (a, b, kitle) {
      K = kitle === 'eri' ? 'eri' : 'ped';
      var k = kural(a, b), e = egriler(k.tur, k.p);
      return {
        tur: k.tur, strateji: STRATEJI[k.tur], sure: k.sure, adim: k.adim, genel: !!k.genel,
        uyari: (k.uyari || []).concat(otomatikUyari(a, b, k.tur)),
        egriA: e.egriA, egriB: e.egriB, bosluk: e.bosluk
      };
    }
  };
})();
