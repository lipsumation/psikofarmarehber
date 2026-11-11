/* Psikofarmakoloji Rehberi — uygulama */
(function () {
  var $ = function (s, k) { return (k || document).querySelector(s); };
  var icerik = $('#icerik');
  var ILAC = {};
  window.ILACLAR.forEach(function (i) { ILAC[i.id] = i; });
  var SINIF_SIRA = ['ad', 'dehb', 'ap', 'dd', 'anks'];
  var G = window.Grafik;

  var durum = { arama: '', sinif: 'hepsi', onayli: false, yas: 'ped', izlem: 'antipsikotik' };

  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function renk(i) { return window.SINIFLAR[i.sinif].renk; }
  function liste(d) { return '<ul class="notlar">' + d.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }

  var SIMGE = {
    ara: '<svg viewBox="0 0 24 24" width="17" height="17"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16.5 16.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    uyari: '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 3 2 20h20L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v5M12 17.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    bilgi: '<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    ok: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    geri: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    basla: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>',
    artir: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 19h5v-5h5V9h5V4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    surdur: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 12h18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="7" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="17" cy="12" r="2" fill="currentColor"/></svg>',
    azalt: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M3 5h5v5h5v5h5v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cocuk: '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="7" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 21v-3a6 6 0 0 1 12 0v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    terazi: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 4v16M6 20h12M5 8h14M5 8l-3 6a3 3 0 0 0 6 0L5 8zM19 8l-3 6a3 3 0 0 0 6 0l-3-6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    kalp: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.500-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    belge: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6M9 16h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/></svg>',
    tek: '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10.500 9 12.500 8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    olc: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M4 19V5M4 19h16M8 15l4-5 3 3 4-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    saat: '<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    el: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21a8 8 0 0 0 8-8V7M4 13a8 8 0 0 0 8 8M4 13V9M8 12V5M12 12V4M16 12V5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };

  /* ───────────── izlem matrisi ───────────── */
  function hucre(v) {
    if (typeof v === 'string') return '<span class="hucre-yazi">' + esc(v) + '</span>';
    if (v === 1) return '<span class="isaret dolu" title="Önerilir"></span>';
    if (v === 2) return '<span class="isaret halka" title="Risk / belirti varsa"></span>';
    return '<span class="isaret yok"></span>';
  }
  function matris(satirlar, r) {
    var h = '<div class="matris-sar" style="--sinif:' + r + '"><table class="matris"><thead><tr><th>Parametre</th>';
    window.IZLEM_SUTUN.forEach(function (s) { h += '<th>' + s + '</th>'; });
    h += '<th style="text-align:left">Açıklama</th></tr></thead><tbody>';
    satirlar.forEach(function (s) {
      h += '<tr><td>' + esc(s[0]) + '</td>' + s[1].map(function (v) { return '<td>' + hucre(v) + '</td>'; }).join('') + '<td class="aciklama">' + esc(s[2] || '') + '</td></tr>';
    });
    h += '</tbody></table></div>';
    h += '<div class="matris-lejant" style="--sinif:' + r + '"><span><i class="isaret dolu"></i> Önerilir</span><span><i class="isaret halka"></i> Risk veya belirti varsa</span><span><i class="isaret yok"></i> Rutin gerekmez</span></div>';
    return h;
  }

  function olcer(risk) {
    var ad = ['Yok / çok düşük', 'Düşük', 'Orta', 'Yüksek'][risk];
    var r = risk >= 3 ? 'var(--kritik)' : risk === 2 ? 'var(--uyari)' : 'var(--iyi)';
    var h = '<div class="olcer" style="--renk:' + r + '">';
    for (var i = 1; i <= 3; i++) h += '<i class="' + (i <= risk ? 'dolu' : '') + '"></i>';
    return h + '</div><div class="deger">' + ad + '</div>';
  }

  function onayRozet(i, kisa) {
    if (i.onay && i.onay.length) {
      if (kisa) return '<span class="etiket onay">✓ ' + esc(i.onay[0][0]) + ' · ' + esc(i.onay[0][1]) + (i.onay.length > 1 ? ' +' + (i.onay.length - 1) : '') + '</span>';
      return i.onay.map(function (o) { return '<span class="etiket onay">✓ ' + esc(o[0]) + ' · ' + esc(o[1]) + '</span>'; }).join('');
    }
    return '<span class="etiket onaysiz">' + esc(i.onayNot || 'Pediatrik onay yok · endikasyon dışı') + '</span>';
  }

  /* ───────────── SAYFA: ilaç listesi ───────────── */
  function sayfaIlaclar() {
    var h = '<section class="kart kahraman">' +
      '<div><h1>Psikofarmakoloji Rehberi</h1>' +
      '<p>Psikiyatrik ilaçlarda başlama, titrasyon, sürdürüm, kesme ve ilaç değişimi için görsel karar desteği. ' +
      'Çocuk ve ergen dozları, onay yaşları ve izlem tetkikleri her ilaçta ayrıca gösterilir.</p>' +
      '<p class="kucuk">' + window.ILACLAR.length + ' ilaç · 5 sınıf · ' + window.DEPOLAR.length + ' uzun etkili enjektabl · titrasyon ve kesme grafikleri · izlem matrisleri · değişim planlayıcı</p></div>' +
      '<div class="dongu">' +
      [['basla', 'Başlama', 'Başlangıç tetkiki, onam, düşük doz'], ['artir', 'Titrasyon', 'Basamaklı artış, hedef doz'], ['surdur', 'Sürdürüm', 'İzlem, etkin en düşük doz'], ['azalt', 'Kesme / değişim', 'Kademeli azaltım, geçiş']]
        .map(function (a) { return '<div class="dongu-adim"><div class="dongu-simge">' + SIMGE[a[0]] + '</div><b>' + a[1] + '</b><span>' + a[2] + '</span></div>'; }).join('') +
      '</div></section>';

    h += '<div class="arac-cubugu"><div class="arama">' + SIMGE.ara +
      '<input id="arama" type="search" placeholder="İlaç adı, sınıf veya endikasyon ara (ör. sertralin, OKB, SSRI)" value="' + esc(durum.arama) + '" autocomplete="off"></div>' +
      '<div class="cipler" id="cipler"></div></div><div id="ilacListe"></div>';
    icerik.innerHTML = h;
    cipleriCiz(); listeyiCiz();
    $('#arama').addEventListener('input', function (e) { durum.arama = e.target.value; listeyiCiz(); });
  }
  function cipleriCiz() {
    var h = '<button class="cip ' + (durum.sinif === 'hepsi' ? 'aktif' : '') + '" data-sinif="hepsi">Tümü</button>';
    SINIF_SIRA.forEach(function (k) {
      h += '<button class="cip ' + (durum.sinif === k ? 'aktif' : '') + '" data-sinif="' + k + '" style="--sinif:' + window.SINIFLAR[k].renk + '"><i class="nokta"></i>' + window.SINIFLAR[k].ad + '</button>';
    });
    h += '<button class="cip ' + (durum.onayli ? 'aktif' : '') + '" data-onayli="1">✓ Pediatrik onaylı</button>';
    var c = $('#cipler'); c.innerHTML = h;
    c.onclick = function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      if (b.dataset.onayli) durum.onayli = !durum.onayli; else durum.sinif = b.dataset.sinif;
      cipleriCiz(); listeyiCiz();
    };
  }
  function eslesir(i) {
    if (durum.sinif !== 'hepsi' && i.sinif !== durum.sinif) return false;
    if (durum.onayli && !(i.onay && i.onay.length)) return false;
    var q = durum.arama.trim().toLocaleLowerCase('tr');
    if (!q) return true;
    var metin = [i.ad, i.altSinif, window.SINIFLAR[i.sinif].ad, (i.onay || []).map(function (o) { return o[0]; }).join(' '), i.mek].join(' ').toLocaleLowerCase('tr');
    return q.split(/\s+/).every(function (p) { return metin.indexOf(p) >= 0; });
  }
  function listeyiCiz() {
    var h = '', toplam = 0;
    SINIF_SIRA.forEach(function (k) {
      var grup = window.ILACLAR.filter(function (i) { return i.sinif === k && eslesir(i); });
      if (!grup.length) return;
      toplam += grup.length;
      h += '<div class="grup-baslik" style="--sinif:' + window.SINIFLAR[k].renk + '"><i class="nokta"></i>' + window.SINIFLAR[k].ad + ' <span class="sayi">' + grup.length + '</span></div><div class="ilac-izgara">';
      grup.forEach(function (i) {
        h += '<a class="kart ilac-kart" href="#/ilac/' + i.id + '" style="--sinif:' + renk(i) + '">' +
          '<h3>' + esc(i.ad) + '</h3><div class="alt-sinif">' + esc(i.altSinif) + '</div>' +
          '<div class="satir"><span>Çocuk/ergen başlangıç</span><span>' + esc(i.ped.bas) + '</span></div>' +
          '<div class="satir"><span>Yarı ömür</span><span>' + esc(i.t12.split(' (')[0]) + '</span></div>' +
          onayRozet(i, true) + '</a>';
      });
      h += '</div>';
    });
    if (!toplam) h = '<div class="kart bos">Aramanızla eşleşen ilaç bulunamadı.</div>';
    $('#ilacListe').innerHTML = h;
  }

  /* ───────────── SAYFA: ilaç ayrıntısı ───────────── */
  function dozBolumu(i) {
    var d = i[durum.yas], r = renk(i);
    var h = '<div class="izgara-2"><div>' +
      '<div class="doz-kutular">' +
      '<div class="kutu vurgulu"><div class="ad">Başlangıç dozu</div><div class="deger">' + esc(d.bas) + '</div></div>' +
      '<div class="kutu"><div class="ad">Artış hızı</div><div class="deger">' + esc(d.artis) + '</div></div>' +
      '<div class="kutu"><div class="ad">Hedef doz</div><div class="deger">' + esc(d.hedef) + '</div></div>' +
      '<div class="kutu"><div class="ad">Maksimum</div><div class="deger">' + esc(d.maks) + '</div></div>' +
      '</div>' + (d.not && d.not.length ? liste(d.not) : '') + '</div>';
    h += '<div><div class="grafik-kutu"><div class="grafik-baslik">Titrasyon şeması · ' + (durum.yas === 'ped' ? 'çocuk / ergen' : 'erişkin') + '</div>' +
      '<div class="grafik-alt">Doz (' + esc(d.birim) + ') · örnek basamaklar; yanıt ve tolerabiliteye göre bireyselleştirilir</div>' +
      G.titrasyon(d, r) +
      '<div class="lejant"><span><i style="--renk:' + r + '"></i>Doz basamakları</span><span><i class="bant" style="--renk:' + r + '"></i>Hedef aralık</span>' +
      '<span><i class="kesik" style="--renk:var(--kritik)"></i>Maksimum doz</span></div></div></div></div>';

    if (durum.yas === 'ped' && i.endikasyon) {
      h += '<div class="alt-b">Endikasyona / duruma göre doz</div><div class="matris-sar"><table class="matris"><thead><tr><th>Durum</th><th>Başlangıç</th><th>Hedef</th><th style="text-align:left">Titrasyon</th></tr></thead><tbody>' +
        i.endikasyon.map(function (e) { return '<tr><td>' + esc(e[0]) + '</td><td>' + esc(e[1]) + '</td><td>' + esc(e[2]) + '</td><td class="aciklama" style="width:36%">' + esc(e[3]) + '</td></tr>'; }).join('') +
        '</tbody></table></div>';
    }
    if (i.sureGrafik) {
      h += '<div class="alt-b">Formülasyona göre etki süresi</div><div class="yo-liste" style="--sinif:' + r + ';grid-template-columns:230px 1fr 250px">';
      i.sureGrafik.forEach(function (s) {
        h += '<div><b>' + esc(s.ad) + '</b></div><div class="cubuk-ray"><div class="cubuk" style="width:' + (s.saat / 12 * 100) + '%" data-ipucu="' + esc('<b>' + s.ad + '</b>Yaklaşık ' + s.saat + ' saat etki') + '"></div></div>' +
          '<div class="deger">~' + s.saat + ' saat · ' + esc(s.not) + '</div>';
      });
      h += '</div>';
    }
    return h;
  }

  function sayfaIlac(id) {
    var i = ILAC[id];
    if (!i) { icerik.innerHTML = '<div class="kart bos">İlaç bulunamadı. <a href="#/">Listeye dön</a></div>'; return; }
    var r = renk(i), S = window.SINIFLAR[i.sinif];
    var h = '<a class="geri" href="#/">' + SIMGE.geri + ' Tüm ilaçlar</a>';

    h += '<section class="kart ilac-bas" style="--sinif:' + r + '">' +
      '<div class="ust-satir"><h1>' + esc(i.ad) + '</h1><span class="etiket"><i class="nokta"></i>' + S.ad + '</span><span class="etiket">' + esc(i.altSinif) + '</span></div>' +
      '<p class="mek">' + esc(i.mek) + '</p>' +
      '<div class="alt-b" style="margin-top:0">Çocuk ve ergende onay durumu (FDA)</div><div class="onaylar">' + onayRozet(i, false) + '</div>' +
      '<div class="kutular">' +
      '<div class="kutu"><div class="ad">Yarı ömür</div><div class="deger">' + esc(i.t12) + '</div>' + G.cetvel(i.t12s) + '</div>' +
      '<div class="kutu"><div class="ad">Etki başlangıcı</div><div class="deger">' + esc(i.etki) + '</div></div>' +
      '<div class="kutu"><div class="ad">Formlar</div><div class="deger" style="font-size:13.5px;font-weight:550">' + esc(i.form) + '</div></div>' +
      '<div class="kutu"><div class="ad">Kesilme belirtisi riski</div>' + olcer(i.kesme.risk) + '</div>' +
      '</div></section>';

    h += '<nav class="kart yol" style="--sinif:' + r + '">' +
      [['baslama', 'Başlama'], ['surdurum', 'Sürdürüm'], ['kesme', 'Kesme'], ['izlem', 'Tetkik / izlem'], ['guvenlik', 'Güvenlik'], ['gecis', 'Değişim']]
        .map(function (a, n) { return '<a href="#' + a[0] + '" data-kaydir="' + a[0] + '"><span class="no">' + (n + 1) + '</span>' + a[1] + '</a>'; }).join('') + '</nav>';

    // 1 Başlama
    h += '<section class="kart bolum" id="baslama" style="--sinif:' + r + '"><h2><span class="no">1</span>Başlama ve titrasyon</h2>' +
      '<div class="alt-baslik">Başlangıç dozu, artış hızı ve hedef doz. Önce 4. bölümdeki başlangıç tetkiklerini tamamlayın.</div>' +
      '<div class="sekmeler" id="yasSekme"><button data-yas="ped" class="' + (durum.yas === 'ped' ? 'aktif' : '') + '">Çocuk / ergen</button><button data-yas="eri" class="' + (durum.yas === 'eri' ? 'aktif' : '') + '">Erişkin</button></div>' +
      '<div id="dozAlan">' + dozBolumu(i) + '</div></section>';

    // 2 Sürdürüm
    h += '<section class="kart bolum" id="surdurum" style="--sinif:' + r + '"><h2><span class="no">2</span>Sürdürüm</h2>' +
      '<div class="alt-baslik">Yanıt değerlendirmesi, tedavi süresi ve stabil dönemde dikkat edilecekler.</div>' + liste(i.surdurum) + '</section>';

    // 3 Kesme
    h += '<section class="kart bolum" id="kesme" style="--sinif:' + r + '"><h2><span class="no">3</span>Kesme</h2>' +
      '<div class="alt-baslik">Kademeli azaltım şeması ve kesilme döneminde dikkat edilecekler.</div>' +
      '<div class="izgara-2"><div><div class="doz-kutular">' +
      '<div class="kutu"><div class="ad">Kesilme belirtisi riski</div>' + olcer(i.kesme.risk) + '</div>' +
      '<div class="kutu vurgulu"><div class="ad">Önerilen azaltım süresi</div><div class="deger">' + esc(i.kesme.sure) + '</div></div></div>' + liste(i.kesme.not) + '</div>' +
      '<div><div class="grafik-kutu"><div class="grafik-baslik">Örnek azaltım şeması</div><div class="grafik-alt">Kullanılan dozun yüzdesi · belirti olursa bir önceki basamağa dönüp yavaşlatın</div>' +
      G.kesme(i.kesme, r) + '</div></div></div></section>';

    // 4 İzlem
    h += '<section class="kart bolum" id="izlem" style="--sinif:' + r + '"><h2><span class="no">4</span>Tetkik ve izlem</h2>' +
      '<div class="alt-baslik">Başlangıçta ve takipte yapılacak tetkik, ölçüm ve değerlendirmeler.</div>' + matris(window.izlemSatirlari(i), r) + '</section>';

    // 5 Güvenlik
    h += '<section class="kart bolum" id="guvenlik" style="--sinif:' + r + '"><h2><span class="no">5</span>Yan etki profili ve uyarılar</h2>' +
      '<div class="alt-baslik">Göreli yan etki yükü (0–3), önemli uyarılar ve ilaç etkileşimleri.</div>';
    if (i.kutu) h += '<div class="cagri kritik">' + SIMGE.uyari + '<div>' + esc(i.kutu) + '</div></div>';
    h += '<div class="profil">' + Object.keys(i.profil).map(function (k) {
      var v = i.profil[k], p = '';
      for (var n = 1; n <= 3; n++) p += '<i class="' + (n <= v ? 'd' + v : '') + '"></i>';
      return '<div class="profil-satir" data-ipucu="' + esc('<b>' + window.PROFIL_ETIKET[k] + '</b>' + ['Yok / ihmal edilebilir', 'Hafif', 'Orta', 'Belirgin'][v]) + '"><span>' + window.PROFIL_ETIKET[k] + '</span><span class="pipler">' + p + '</span></div>';
    }).join('') + '</div>';
    h += '<div class="iki-sutun"><div><h3>Önemli yan etkiler ve uyarılar</h3>' + liste(i.uyari) + '</div><div><h3>İlaç etkileşimleri</h3>' + liste(i.etkilesim) + '</div></div></section>';

    // 6 Değişim
    h += '<section class="kart bolum" id="gecis" style="--sinif:' + r + '"><h2><span class="no">6</span>Başka ilaca geçiş</h2>' +
      '<div class="alt-baslik">' + esc(i.ad) + ' tedavisinden başka bir ilaca geçiş planı oluşturun.</div>' +
      window.DEPOLAR.filter(function (d) { return d.oral === i.id; }).map(function (d) {
        return '<div class="cagri bilgi">' + SIMGE.bilgi + '<div><b>Uzun etkili enjektabl formu var:</b> <a href="#/depo/' + d.id + '">' + esc(d.ad) + '</a> · ' + esc(d.aralik.toLocaleLowerCase('tr')) + ' · oral formdan geçiş şeması ve doz dönüşümü için tıklayın.</div></div>';
      }).join('') +
      '<div class="secici" style="grid-template-columns:1fr auto"><div><label for="hedefIlac">Geçilecek ilaç</label>' + ilacSecimi('hedefIlac', '', i.id, i.sinif) + '</div>' +
      '<button class="cip aktif" id="gecisDugme" style="height:44px">Geçiş planını göster →</button></div></section>';

    icerik.innerHTML = h;

    $('#yasSekme').onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      durum.yas = b.dataset.yas;
      Array.prototype.forEach.call(this.children, function (c) { c.classList.toggle('aktif', c === b); });
      $('#dozAlan').innerHTML = dozBolumu(i);
    };
    $('#gecisDugme').onclick = function () { var v = $('#hedefIlac').value; if (v) location.hash = '#/degisim/' + i.id + '/' + v; };
    Array.prototype.forEach.call(icerik.querySelectorAll('[data-kaydir]'), function (a) {
      a.onclick = function (e) { e.preventDefault(); $('#' + a.dataset.kaydir).scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    });
  }

  /* ───────────── SAYFA: ilaç değişimi ───────────── */
  function ilacSecimi(id, secili, haric, onceSinif) {
    var sira = SINIF_SIRA.slice();
    if (onceSinif) { sira.splice(sira.indexOf(onceSinif), 1); sira.unshift(onceSinif); }
    var h = '<select id="' + id + '"><option value="">Seçiniz…</option>';
    sira.forEach(function (k) {
      h += '<optgroup label="' + window.SINIFLAR[k].ad + '">';
      window.ILACLAR.filter(function (i) { return i.sinif === k && i.id !== haric; }).forEach(function (i) {
        h += '<option value="' + i.id + '"' + (i.id === secili ? ' selected' : '') + '>' + esc(i.ad) + '</option>';
      });
      h += '</optgroup>';
    });
    return h + '</select>';
  }

  function sayfaDegisim(aId, bId) {
    var h = '<section class="kart bolum"><h2>İlaç değişimi planlayıcı</h2>' +
      '<div class="alt-baslik">Kullanılan ve geçilecek ilacı seçin; uygun geçiş stratejisi, zaman çizelgesi ve dikkat edilecek noktalar gösterilir.</div>' +
      '<div class="secici"><div><label for="ilacA">Kullanılan ilaç</label>' + ilacSecimi('ilacA', aId) + '</div>' +
      '<div class="ok">' + SIMGE.ok + '</div><div><label for="ilacB">Geçilecek ilaç</label>' + ilacSecimi('ilacB', bId) + '</div></div></section>' +
      '<div id="degisimSonuc"></div>';
    icerik.innerHTML = h;
    function guncelle() {
      var a = $('#ilacA').value, b = $('#ilacB').value;
      history.replaceState(null, '', '#/degisim' + (a ? '/' + a + (b ? '/' + b : '') : ''));
      degisimSonuc(ILAC[a], ILAC[b]);
    }
    $('#ilacA').onchange = guncelle; $('#ilacB').onchange = guncelle;
    degisimSonuc(ILAC[aId], ILAC[bId]);
  }

  function stratejiKartlari(secili) {
    var S = window.Degisim.STRATEJI;
    return '<div class="strateji-izgara">' + Object.keys(S).map(function (k) {
      return '<div class="strateji-mini ' + (k === secili ? 'secili' : '') + '">' + G.stratejiSimge(k) + '<b>' + S[k].ad + '</b><span>' + S[k].acik + '</span></div>';
    }).join('') + '</div>';
  }

  function degisimSonuc(a, b) {
    var el = $('#degisimSonuc');
    if (!a || !b) {
      el.innerHTML = '<section class="kart bolum"><h2>Dört temel geçiş stratejisi</h2><div class="alt-baslik">Gri çizgi eski ilacı, mavi çizgi yeni ilacı gösterir.</div>' + stratejiKartlari(null) +
        '<div class="cagri bilgi">' + SIMGE.bilgi + '<div>Strateji seçimini belirleyenler: eski ilacın yarı ömrü ve kesilme riski, iki ilacın farmakodinamik/farmakokinetik etkileşimi, hastalığın ağırlığı ve nüks riski. Çocuk ve ergende geçişler genellikle daha yavaş yapılır.</div></div></section>';
      return;
    }
    if (a.id === b.id) { el.innerHTML = '<div class="kart bos">Aynı ilacı seçtiniz. Farklı bir ilaç seçin.</div>'; return; }
    var p = window.Degisim.planla(a, b);
    var bazal = window.izlemSatirlari(b).filter(function (s) { return s[1][0] === 1 || typeof s[1][0] === 'string'; }).map(function (s) { return s[0]; });

    var h = '<section class="kart bolum"><div class="strateji-bas"><h2>' + p.strateji.ad + '</h2><span class="etiket">Toplam süre: ' + esc(p.sure) + '</span>' +
      (p.genel ? '<span class="etiket onaysiz">Farklı sınıflar · genel kural</span>' : '') + '</div>' +
      '<div class="alt-baslik">' + esc(a.ad) + ' → ' + esc(b.ad) + ' · ' + p.strateji.acik + '</div>' +
      '<div class="grafik-kutu"><div class="grafik-baslik">Geçiş zaman çizelgesi</div><div class="grafik-alt">Her şerit ilgili ilacın dozunu (hedef/kullanılan dozun yüzdesi olarak) gösterir · şematik</div>' +
      G.degisim(p, a.ad, b.ad) + '</div></section>';

    h += '<section class="kart bolum"><div class="izgara-2"><div><h2 style="margin-bottom:14px">Adım adım</h2><ol class="adimlar">' +
      p.adim.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol></div><div>' +
      '<h2 style="margin-bottom:10px">Dikkat edilecekler</h2>' +
      (p.uyari.length ? p.uyari.map(function (u) { return '<div class="cagri uyari">' + SIMGE.uyari + '<div>' + esc(u) + '</div></div>'; }).join('') : '<div class="cagri bilgi">' + SIMGE.bilgi + '<div>Bu ilaç çifti için özgül bir etkileşim uyarısı tanımlı değil; genel izlem kurallarını uygulayın.</div></div>') +
      '<div class="cagri bilgi">' + SIMGE.cocuk + '<div><b>Çocuk ve ergende:</b> geçişi erişkine göre daha yavaş yapın, her vizitte tek değişiklik uygulayın ve aileye yazılı doz takvimi verin. Geçiş döneminde haftalık temas kurun.</div></div>' +
      '</div></div></section>';

    h += '<section class="kart bolum"><h2 style="margin-bottom:14px">İki ilacın özeti</h2><div class="iki-sutun">' +
      '<div><h3 style="margin-top:0">Eski ilaç · ' + esc(a.ad) + '</h3><div class="doz-kutular">' +
      '<div class="kutu"><div class="ad">Kesilme riski</div>' + olcer(a.kesme.risk) + '</div>' +
      '<div class="kutu"><div class="ad">Tek başına kesme süresi</div><div class="deger">' + esc(a.kesme.sure) + '</div></div>' +
      '<div class="kutu" style="grid-column:1/-1"><div class="ad">Yarı ömür</div><div class="deger">' + esc(a.t12) + '</div></div></div>' +
      '<p class="kucuk" style="margin-top:8px"><a href="#/ilac/' + a.id + '">' + esc(a.ad) + ' sayfasını aç →</a></p></div>' +
      '<div><h3 style="margin-top:0">Yeni ilaç · ' + esc(b.ad) + '</h3><div class="doz-kutular">' +
      '<div class="kutu vurgulu" style="--sinif:' + renk(b) + '"><div class="ad">Çocuk/ergen başlangıç</div><div class="deger">' + esc(b.ped.bas) + '</div></div>' +
      '<div class="kutu"><div class="ad">Artış hızı</div><div class="deger">' + esc(b.ped.artis) + '</div></div>' +
      '<div class="kutu" style="grid-column:1/-1"><div class="ad">Başlamadan önce</div><div class="deger" style="font-size:13.5px;font-weight:550">' + esc(bazal.join(' · ')) + '</div></div></div>' +
      '<p class="kucuk" style="margin-top:8px"><a href="#/ilac/' + b.id + '">' + esc(b.ad) + ' sayfasını aç →</a></p></div></div></section>';

    h += '<section class="kart bolum"><h2 style="margin-bottom:12px">Diğer stratejilerle karşılaştırma</h2>' + stratejiKartlari(p.tur) + '</section>';
    el.innerHTML = h;
  }

  /* ───────────── SAYFA: uzun etkili enjektabl (depo) ───────────── */
  function sayfaDepo() {
    var r = 'var(--s-ap)', D = window.DEPOLAR;
    var h = '<section class="kart bolum" style="--sinif:' + r + '"><h2>Uzun etkili enjektabl (depo) antipsikotikler</h2>' +
      '<div class="alt-baslik">Oral tedaviden depo forma geçiş: tolerabilite testi, başlama şeması, oral örtüşme süresi ve doz dönüşümü.</div>' +
      '<div class="cagri uyari">' + SIMGE.cocuk + '<div><b>Çocuk ve ergende:</b> depo antipsikotiklerin hiçbiri 18 yaş altında onaylı değildir; veriler olgu serileriyle sınırlıdır. ' +
      'Yalnızca psikotik bozukluk veya bipolar bozukluğu olan, tedavi uyumsuzluğu nedeniyle yineleyen nüksleri bulunan büyük ergenlerde, oral formla etkinlik ve tolerabilite gösterildikten sonra, ' +
      'endikasyon dışı kullanım onamıyla ve erişkin aralığının alt dozlarıyla düşünülmelidir.</div></div>';

    // karşılaştırma: oral örtüşme süresi
    h += '<div class="alt-b">Oral ek tedavi (örtüşme) süresi ve uygulama aralığı</div><div class="yo-liste depo-ozet" style="--sinif:' + r + '">';
    D.forEach(function (d) {
      h += '<div><a href="#/depo/' + d.id + '" data-depo="' + d.id + '">' + esc(d.ad) + '</a></div><div class="cubuk-ray">' +
        (d.oralGun ? '<div class="cubuk" style="width:' + (d.oralGun / 28 * 100) + '%" data-ipucu="' + esc('<b>' + d.ad + '</b>' + d.oralEtiket) + '"></div>' : '') +
        '</div><div class="deger">' + (d.oralGun ? d.oralGun + ' gün oral' : 'Oral gerekmez') + ' · ' + esc(d.aralik.toLocaleLowerCase('tr')) + '</div>';
    });
    h += '</div><p class="kucuk" style="margin-top:8px">Çubuk: ilk enjeksiyondan sonra oral antipsikotiğin sürdürülmesi gereken süre (0–4 hafta ölçeği).</p></section>';

    // genel akış
    h += '<section class="kart bolum"><h2>Oral tedaviden depoya geçiş akışı</h2><div class="alt-baslik">Tüm depo antipsikotikler için ortak basamaklar.</div><div class="akis">' +
      dugum('Endikasyon ve hasta tercihi', 'Uyumsuzluk öyküsü, yineleyen nüks, hastanın/ailenin isteği; depo "son çare" olarak sunulmamalı') + OK +
      dugum('Aynı etkin maddenin oral formuyla tolerabilite', 'Hiç kullanmamışsa önce oral form (genellikle en az 1–2 hafta) veya test dozu') + OK +
      dugum('Başlangıç değerlendirmesi', 'Kilo/BKİ, bel çevresi, KB, açlık glukoz ve lipid, prolaktin, EKG, hareket bozukluğu muayenesi') + OK +
      dugum('Depo dozunu belirle', 'Stabil olunan oral doza göre dönüşüm tablosu; ergende ve antipsikotiğe yeni hastada alt doz') + OK +
      dugum('Oral ek tedavi gerekiyor mu?', 'Preparata göre 0–4 hafta', 'karar') +
      '<div class="akis-dal"><div class="akis-kol"><span class="dal-etiket">Gerekmez</span>' +
      dugum('İlk enjeksiyon günü oral ilacı kes', 'Paliperidon palmitat, olanzapin pamoat', 'son') + '</div>' +
      '<div class="akis-kol"><span class="dal-etiket">Gerekir</span>' +
      dugum('Oral ilacı belirtilen süre sürdür, sonra kes', 'Risperidon 3 hafta · aripiprazol 14 gün · dekanoatlar azaltarak', 'dikkat') + '</div></div>' + OK +
      dugum('İzlem', 'Her enjeksiyonda yan etki ve belirti değerlendirmesi; metabolik izlem oral form ile aynı; kararlı duruma dek doz değiştirmeyin', 'son') +
      '</div></section>';

    // her preparat
    D.forEach(function (d) {
      var oralAd = d.oral && ILAC[d.oral] ? ILAC[d.oral].ad : null;
      h += '<section class="kart bolum" id="depo-' + d.id + '" style="--sinif:' + r + '">' +
        '<div class="strateji-bas"><h2>' + esc(d.ad) + '</h2><span class="etiket"><i class="nokta"></i>' + esc(d.kusak) + '</span><span class="etiket">' + esc(d.aralik) + '</span>' +
        (oralAd ? '<a class="etiket" href="#/ilac/' + d.oral + '">Oral ' + esc(oralAd) + ' sayfası →</a>' : '') + '</div>' +
        '<div class="alt-baslik">' + esc(d.test) + '</div>' +
        '<div class="kutular" style="margin-bottom:14px">' +
        '<div class="kutu vurgulu"><div class="ad">Başlama</div><div class="deger">' + esc(d.baslama) + '</div></div>' +
        '<div class="kutu"><div class="ad">Sürdürüm dozu</div><div class="deger">' + esc(d.surdurum) + '</div><div class="not">Maksimum: ' + esc(d.maks) + '</div></div>' +
        '<div class="kutu"><div class="ad">Oral ek tedavi</div><div class="deger">' + (d.oralGun ? d.oralGun + ' gün' + (d.oralAzalt ? ' (azaltarak)' : '') : 'Gerekmez') + '</div></div>' +
        '<div class="kutu"><div class="ad">Enjeksiyon yeri</div><div class="deger">' + esc(d.yer) + '</div></div></div>' +
        '<div class="grafik-kutu"><div class="grafik-baslik">Başlama zaman çizelgesi</div><div class="grafik-alt">' + esc(d.kararli) + '</div>' + G.depo(d, r) +
        '<div class="lejant"><span><i style="--renk:' + r + ';height:10px;width:10px;border-radius:50%"></i>Enjeksiyon</span><span><i class="bant" style="--renk:var(--murekkep-2);opacity:.45"></i>Oral ek tedavi</span></div></div>' +
        '<div class="izgara-2" style="margin-top:16px"><div><div class="alt-b" style="margin-top:0">Doz dönüşümü</div><table class="matris" style="min-width:0"><thead><tr><th>Önceki tedavi / durum</th><th style="text-align:left">Depo dozu</th></tr></thead><tbody>' +
        d.donusum.map(function (x) { return '<tr><td style="width:55%">' + esc(x[0]) + '</td><td style="text-align:left;font-weight:650">' + esc(x[1]) + '</td></tr>'; }).join('') + '</tbody></table></div>' +
        '<div><div class="alt-b" style="margin-top:0">Dikkat edilecekler</div>' + liste(d.dikkat) +
        '<div class="cagri bilgi">' + SIMGE.saat + '<div><b>Doz gecikirse:</b> ' + esc(d.kacirma) + '</div></div></div></div></section>';
    });

    // depo → depo, depo → oral
    h += '<section class="kart bolum"><h2>Depodan depoya ve depodan orale geçiş</h2><div class="alt-baslik">Genel kurallar; preparata özgü ayrıntılar için ilgili karta bakın.</div><div class="ilke-izgara">' +
      [
        ['Depo → başka depo', 'Yeni depoyu, eski deponun sıradaki enjeksiyon gününde ve onun yerine uygulayın. Eski depo haftalarca etkin düzey sağladığından yükleme dozu ve oral örtüşme çoğunlukla gerekmez (paliperidon palmitatta yükleme şeması atlanır).'],
        ['Depo → oral', 'Oral ilacı sıradaki enjeksiyonun yapılacağı gün düşük dozla başlayın; depo düzeyi düştükçe (haftalar–aylar) oral dozu kademeli artırın. Erken tam doz vermek additif yan etkiye yol açar.'],
        ['Risperidon depo → paliperidon aylık', 'Sıradaki enjeksiyon yerine: 25 mg / 2 hf → 50 mg / ay · 37,5 mg → 75 mg / ay · 50 mg → 100 mg / ay. Yükleme dozu uygulanmaz.'],
        ['Paliperidon aylık → 3 aylık', 'En az 4 ay stabil aylık tedaviden sonra, sıradaki enjeksiyon yerine aylık dozun 3,5 katı.'],
        ['Depoyu kesme', 'Kademeli azaltım kendiliğinden olur: doz atlanarak kesilebilir. Kesilme diskinezisi ve nüks açısından en az 3–6 ay (3 aylık formda 1 yıla dek) izleyin.'],
        ['Yan etki gelişirse', 'İlaç haftalarca vücuttan atılamaz: EPS için antikolinerjik, akatizi için beta bloker gibi belirtiye yönelik tedavi; sonraki dozu azaltın veya aralığı uzatın.']
      ].map(function (x) { return '<div class="ilke"><b>' + x[0] + '</b><p>' + x[1] + '</p></div>'; }).join('') + '</div></section>';

    icerik.innerHTML = h;
  }

  /* ───────────── SAYFA: tetkik ve izlem ───────────── */
  var IZLEM_SINIF = { ssri: 'ad', snri: 'ad', tca: 'ad', mirtazapin: 'ad', bupropion: 'ad', trazodon: 'ad', stimulan: 'dehb', atomoksetin: 'dehb', alfa2: 'dehb',
    antipsikotik: 'ap', klozapin: 'ap', lityum: 'dd', valproat: 'dd', lamotrijin: 'dd', karbamazepin: 'dd', benzo: 'anks', melatonin: 'anks', hidroksizin: 'anks', buspiron: 'anks' };

  function sayfaIzlem() {
    var h = '<section class="kart bolum"><h2>Tetkik ve izlem çizelgeleri</h2>' +
      '<div class="alt-baslik">İlaç grubunu seçin: başlangıçta ve takipte hangi tetkik ve ölçümlerin ne zaman yapılacağını gösterir.</div>' +
      '<div class="cipler" id="izlemCip" style="margin-bottom:18px">' +
      Object.keys(window.IZLEM).map(function (k) {
        return '<button class="cip ' + (durum.izlem === k ? 'aktif' : '') + '" data-k="' + k + '" style="--sinif:' + window.SINIFLAR[IZLEM_SINIF[k]].renk + '"><i class="nokta"></i>' + window.IZLEM[k].ad + '</button>';
      }).join('') + '</div><div id="izlemAlan"></div></section>';

    h += '<section class="kart bolum"><h2>Eşik değerler ve eylem noktaları</h2><div class="alt-baslik">İzlemde sık kullanılan sınır değerler. Laboratuvar referans aralıklarını ve yaşa göre normları ayrıca dikkate alın.</div><div class="esikler">' +
      [
        ['Kilo artışı (antipsikotik)', '≥ %7 veya BKİ z-skoru +0,5', 'Yaşam tarzı müdahalesi; ilaç değişimi veya metformin değerlendirin.'],
        ['Açlık glukozu', '100–125 · ≥ 126 mg/dL', 'Bozulmuş açlık glukozu · diyabet. HbA1c: 5,7–6,4 prediyabet, ≥ 6,5 diyabet.'],
        ['QTc', '> 450–460 ms · > 500 ms', 'Sınırda: risk faktörlerini düzelt, tekrar çek. > 500 ms veya başlangıca göre +60 ms: ilacı azalt/kes, kardiyoloji.'],
        ['TCA için EKG sınırları', 'PR > 200 · QRS > 120 ms', 'Veya QTc > 450 ms, istirahat nabzı > 130/dk: doz artırmayın, azaltın.'],
        ['Kan basıncı (çocuk)', '≥ 95. persentil', 'Yaş, cinsiyet ve boya göre; iki ayrı ölçümde: doz azalt veya ilacı gözden geçir.'],
        ['Nötrofil (klozapin)', '< 1500/mm³', 'Veya lökosit < 3000/mm³: ilacı derhal kes, günlük hemogram, hematoloji. 1500–2000: haftada iki kez izlem.'],
        ['Lityum düzeyi', '0,6–1,0 · 0,8–1,2 mEq/L', 'Sürdürüm · akut mani. > 1,5: toksik, ilacı durdur. > 2,0–2,5: acil, diyaliz değerlendir.'],
        ['Valproat düzeyi', '50–100 µg/mL', 'Akut manide 125\'e dek. Trombosit < 100.000/mm³: doz azalt.'],
        ['Karbamazepin düzeyi', '4–12 µg/mL', 'Sodyum < 130 mEq/L veya belirtili hiponatremi: ilacı gözden geçir.'],
        ['Karaciğer enzimleri', '> 3 × üst sınır', 'İlacı kesmeyi/azaltmayı değerlendir; belirti (sarılık, kusma, halsizlik) varsa hemen kes.'],
        ['Prolaktin', 'Belirtili artış veya > 100 ng/mL', 'Doz azalt, prolaktin koruyucu ilaca geç (aripiprazol); çok yüksek değerde hipofiz değerlendirmesi.'],
        ['Büyüme (stimulan)', 'Boy persentilinde ≥ 2 ana eğri düşüş', 'Doz azaltımı, ilaç tatili veya ilaç değişimi; gerekirse pediatrik endokrin.']
      ].map(function (e) { return '<div class="esik"><div class="ad">' + e[0] + '</div><div class="deger">' + e[1] + '</div><div class="not">' + e[2] + '</div></div>'; }).join('') +
      '</div></section>';
    icerik.innerHTML = h;
    izlemCiz();
    $('#izlemCip').onclick = function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      durum.izlem = b.dataset.k;
      Array.prototype.forEach.call(this.children, function (c) { c.classList.toggle('aktif', c === b); });
      izlemCiz();
    };
  }
  function izlemCiz() {
    var k = durum.izlem, r = window.SINIFLAR[IZLEM_SINIF[k]].renk;
    var ilaclar = window.ILACLAR.filter(function (i) { return i.izlem === k; });
    $('#izlemAlan').innerHTML = '<p class="kucuk" style="margin-bottom:10px">Bu çizelgeyi kullanan ilaçlar: ' +
      ilaclar.map(function (i) { return '<a href="#/ilac/' + i.id + '">' + esc(i.ad) + '</a>'; }).join(' · ') +
      '. İlaca özgü ek satırlar ilaç sayfasında gösterilir.</p>' + matris(window.IZLEM[k].satir, r);
  }

  /* ───────────── SAYFA: genel ilkeler ───────────── */
  function dugum(b, s, tur) { return '<div class="akis-dugum ' + (tur || '') + '"><b>' + b + '</b>' + (s ? '<span>' + s + '</span>' : '') + '</div>'; }
  var OK = '<div class="akis-ok"></div>';

  function sayfaIlkeler() {
    var h = '<section class="kart bolum"><h2>Çocuk ve ergende ilaç başlama akışı</h2><div class="alt-baslik">Tanıdan sürdürüme kadar karar basamakları.</div><div class="akis">' +
      dugum('Tanı, işlevsellik kaybı ve hedef belirtiler', 'Eş tanılar, tıbbi nedenler, aile öyküsü, daha önceki tedaviler') + OK +
      dugum('Psikososyal müdahale değerlendirmesi', 'Psikoeğitim, ebeveyn eğitimi, BDT, okul düzenlemeleri: tek başına yeterli mi, ilaçla birlikte mi?') + OK +
      dugum('İlaç gerekli mi?', 'Orta–ağır şiddet, işlev kaybı, psikososyal müdahaleye yetersiz yanıt', 'karar') + OK +
      dugum('Başlangıç değerlendirmesi', 'Boy, kilo, BKİ, kan basıncı, nabız, kardiyak öykü, ilaca özgü tetkikler, başlangıç ölçeği') + OK +
      dugum('Bilgilendirme ve onam', 'Beklenen yarar, etki başlangıç süresi, yan etkiler, kara kutu uyarıları, endikasyon dışı kullanım; çocuğun rızası') + OK +
      dugum('Düşük dozla başla, basamaklı artır', 'Her vizitte tek değişiklik; yan etkiyi ve yanıtı ölçerek ilerle') + OK +
      dugum('Yeterli doz ve sürede yanıt var mı?', 'Antidepresan 4–8 hf · stimulan 1–2 hf · atomoksetin 6–8 hf · antipsikotik 2–6 hf', 'karar') +
      '<div class="akis-dal"><div class="akis-kol"><span class="dal-etiket">Evet</span>' +
      dugum('Sürdürüm', 'Etkin en düşük doz, düzenli izlem, 6–12 ay stabil dönem', 'son') + OK + dugum('Kesmeyi planla', 'Düşük stresli dönemde, kademeli azaltım, nüks izlemi', 'son') + '</div>' +
      '<div class="akis-kol"><span class="dal-etiket">Hayır / kısmi</span>' +
      dugum('Yeniden değerlendir', 'Tanı doğru mu? Uyum? Doz ve süre yeterli mi? Eş tanı, stresör, madde kullanımı?', 'dikkat') + OK + dugum('Dozu optimize et → ilacı değiştir → güçlendir', 'Değişim planlayıcıyı kullanın', 'dikkat') + '</div></div>' +
      '</div></section>';

    h += '<section class="kart bolum"><h2>Pediatrik psikofarmakolojinin temel ilkeleri</h2><div class="alt-baslik">Çocuklar küçük erişkinler değildir.</div><div class="ilke-izgara">' +
      [
        ['artir', 'Düşük başla, yavaş artır, hedefe ulaş', 'Düşük başlangıç tolerabiliteyi artırır; ancak yetersiz dozda kalmak yanıtsızlığın en sık nedenlerindendir.'],
        ['saat', 'Farmakokinetik farklıdır', 'Çocuklarda kg başına karaciğer klirensi yüksek, yarı ömür kısadır: kg başına daha yüksek doz veya bölünmüş doz gerekebilir. Ergenlikte erişkine yaklaşır.'],
        ['el', 'İlaç tek başına değil', 'Çoğu bozuklukta ilaç; psikoeğitim, psikoterapi ve okul/aile müdahaleleriyle birlikte en etkilidir.'],
        ['belge', 'Onay ve endikasyon dışı kullanım', 'Pek çok ilaç çocukta endikasyon dışıdır. Ebeveynin aydınlatılmış onamı ve çocuğun rızası kayıt altına alınmalı; gerekli başvurular yapılmalıdır.'],
        ['tek', 'Her seferinde tek değişiklik', 'Doz ve ilaç değişikliklerini üst üste bindirmeyin; etkiyi ve yan etkiyi hangi değişikliğe bağlayacağınızı bilin.'],
        ['olc', 'Ölçerek izleyin', 'Başlangıçta ve takipte standart ölçek, büyüme eğrisi (boy/kilo persentili) ve yapılandırılmış yan etki sorgusu kullanın.'],
        ['kalp', 'Yan etki duyarlılığı yüksektir', 'SSRI ile aktivasyon, antipsikotikle kilo artışı/metabolik etki ve distoni, benzodiazepinle disinhibisyon çocuklarda daha sıktır.'],
        ['azalt', 'Kesmeyi baştan konuşun', 'Tedavi süresini ve kesme ölçütlerini ilk görüşmede belirleyin; aileyi ilacı kendi başına aniden kesmemesi konusunda uyarın.']
      ].map(function (x) { return '<div class="ilke"><div class="simge">' + SIMGE[x[0]] + '</div><b>' + x[1] + '</b><p>' + x[2] + '</p></div>'; }).join('') + '</div></section>';

    h += '<section class="kart bolum"><h2>Antidepresan tedavisinin evreleri</h2><div class="alt-baslik">Depresyon ve anksiyete bozukluklarında tedavi süresi.</div>' +
      '<div class="zaman-seridi"><div><b>Akut evre</b>6–12 hafta · yanıt ve remisyon</div><div><b>Devam evresi</b>Remisyondan sonra 6–12 ay · aynı dozda</div><div><b>Kesme</b>2–8+ hafta · kademeli</div></div>' +
      '<ul class="notlar"><li>İlk 4 hafta haftalık temas: intihar düşüncesi, aktivasyon ve yan etki sorgusu.</li><li>4. haftada hiç yanıt yoksa dozu artırın; yeterli dozda 8 haftada yanıt yoksa ilacı değiştirin.</li>' +
      '<li>İkinci SSRI\'a geçerken BDT eklenmesi yanıtı artırır (dirençli ergen depresyonu).</li><li>Kesme sonrası ilk 2–3 ay nüks açısından izleyin.</li></ul></section>';

    h += '<section class="kart bolum"><h2>Kesilme belirtilerini tanıma</h2><div class="alt-baslik">Antidepresan kesilme sendromu: ilacı azalttıktan 1–4 gün sonra başlar, genellikle 1–3 haftada geçer.</div><div class="harf-izgara">' +
      [['G', 'Grip benzeri', 'Halsizlik, kas ağrısı, terleme, baş ağrısı'], ['U', 'Uyku bozukluğu', 'Uykusuzluk, canlı rüyalar, kâbus'], ['B', 'Bulantı', 'Bulantı, kusma, ishal'],
        ['D', 'Denge sorunu', 'Baş dönmesi, sersemlik, vertigo'], ['D', 'Duyusal belirtiler', 'Elektrik çarpması hissi, parestezi'], ['A', 'Aşırı uyarılmışlık', 'Anksiyete, irritabilite, ajitasyon']]
        .map(function (x) { return '<div class="harf"><div class="h">' + x[0] + '</div><b>' + x[1] + '</b><span>' + x[2] + '</span></div>'; }).join('') + '</div>' +
      '<div class="cagri bilgi">' + SIMGE.bilgi + '<div><b>Kesilme mi, nüks mü?</b> Kesilme belirtileri erken başlar, bedensel belirtiler ön plandadır ve ilaç yeniden verildiğinde 24–48 saatte düzelir. Nüks genellikle haftalar sonra, özgün hastalık belirtileriyle ve yavaş gelişir.</div></div></section>';

    h += '<section class="kart bolum"><h2>Yarı ömür karşılaştırması</h2><div class="alt-baslik">Uzun yarı ömür: kesilme belirtisi daha az, ancak arınma ve etkileşim süresi daha uzun. Logaritmik ölçek.</div>' + yariOmurGrafik() + '</section>';

    h += '<section class="kart bolum"><h2>Acil durumları tanıma</h2><div class="alt-baslik">Aileye ve gence öğretilmesi gereken alarm belirtileri ve ilk yaklaşım.</div><div class="ilke-izgara">' +
      [
        ['Serotonin sendromu', 'Ajitasyon, tremor, klonus (spontan, uyarılabilir, oküler), hiperrefleksi, terleme, ishal, ateş, midriyazis. Saatler içinde gelişir.', 'Serotonerjik ilaçları kesin; destek tedavisi, benzodiazepin; ağır olguda siproheptadin ve acil servis.'],
        ['Nöroleptik malign sendrom', 'Kas rijiditesi, yüksek ateş, bilinç değişikliği, otonom dengesizlik; CK ve lökosit yüksekliği. Günler içinde gelişir.', 'Antipsikotiği kesin; acil yatış, hidrasyon, soğutma, yoğun bakım değerlendirmesi.'],
        ['Akut distoni', 'Boyun, çene, dil kasılması, okülojirik kriz; nadiren laringospazm. İlk günlerde, genç erkeklerde sık.', 'Biperiden 0,04 mg/kg IM/IV veya difenhidramin 1 mg/kg (maks. 50 mg); dakikalar içinde düzelir, sonrasında doz/ilaç gözden geçirilir.'],
        ['Lityum toksisitesi', 'Kusma, ishal, kaba tremor, ataksi, dizartri, uyuşukluk, konfüzyon, nöbet.', 'İlacı durdurun; acil lityum düzeyi, böbrek işlevi, elektrolit; hidrasyon; ağır olguda hemodiyaliz.'],
        ['Ağır deri reaksiyonu', 'Ateş ve halsizlikle birlikte yaygın döküntü, mukoza tutulumu (ağız, göz, genital), deride soyulma, lenfadenopati. Lamotrijin, karbamazepin.', 'İlacı hemen kesin ve yeniden başlamayın; acil dermatoloji/pediatri değerlendirmesi.'],
        ['Agranülositoz', 'Ateş, boğaz ağrısı, ağız içi yaralar, enfeksiyon bulguları. Klozapin, karbamazepin; nadiren mirtazapin.', 'Acil hemogram; nötrofil < 1500/mm³ ise ilacı kesin, hematoloji.'],
        ['Aktivasyon ve mani kayması', 'Uykusuzluk, huzursuzluk, dürtüsellik, irritabilite (aktivasyon); uyku gereksiniminde azalma, öfori, hızlı konuşma (mani). SSRI/SNRI başlangıcında.', 'Dozu azaltın veya kesin; intihar riskini değerlendirin; mani bulgularında bipolar bozukluk açısından yeniden değerlendirin.'],
        ['Priapizm', '4 saatten uzun süren ağrılı ereksiyon. Trazodon, antipsikotikler, nadiren atomoksetin ve stimulanlar.', 'Acil üroloji başvurusu; ilacı kesin.']
      ].map(function (x) { return '<div class="ilke acil"><b>' + x[0] + '</b><p>' + x[1] + '</p><div class="ilk-adim"><b style="display:inline">İlk adım:</b> ' + x[2] + '</div></div>'; }).join('') + '</div></section>';

    icerik.innerHTML = h;
  }

  function yariOmurGrafik() {
    var mn = Math.log(0.5), mx = Math.log(240);
    var p = function (s) { return Math.max(0, Math.min(100, (Math.log(s) - mn) / (mx - mn) * 100)); };
    var sirali = window.ILACLAR.slice().sort(function (a, b) { return b.t12s - a.t12s; });
    var h = '<div class="lejant" style="margin-bottom:10px">' + SINIF_SIRA.map(function (k) { return '<span><i style="--renk:' + window.SINIFLAR[k].renk + ';height:9px;width:9px;border-radius:50%"></i>' + window.SINIFLAR[k].ad + '</span>'; }).join('') + '</div>';
    h += '<div class="yo-liste"><div></div><div class="yo-eksen">' + [[1, '1 sa'], [6, '6 sa'], [24, '1 gün'], [72, '3 gün'], [168, '7 gün']].map(function (t) { return '<span style="left:' + p(t[0]) + '%">' + t[1] + '</span>'; }).join('') + '</div><div></div>';
    sirali.forEach(function (i) {
      var d = i.t12s >= 48 ? G.fmt(Math.round(i.t12s / 24 * 10) / 10) + ' gün' : G.fmt(i.t12s) + ' saat';
      h += '<div><a href="#/ilac/' + i.id + '">' + esc(i.ad) + '</a></div><div class="yo-ray"><i class="yo-nokta" style="left:' + p(i.t12s) + '%;--sinif:' + renk(i) + '" data-ipucu="' + esc('<b>' + i.ad + '</b>' + i.t12) + '"></i></div><div class="deger">~' + d + '</div>';
    });
    return h + '</div>';
  }

  /* ───────────── yönlendirici ───────────── */
  function yonlendir() {
    var p = location.hash.replace(/^#\/?/, '').split('/');
    var sayfa = 'ilaclar';
    if (p[0] === 'ilac') { sayfaIlac(p[1]); }
    else if (p[0] === 'degisim') { sayfa = 'degisim'; sayfaDegisim(p[1], p[2]); }
    else if (p[0] === 'izlem') { sayfa = 'izlem'; sayfaIzlem(); }
    else if (p[0] === 'ilkeler') { sayfa = 'ilkeler'; sayfaIlkeler(); }
    else if (p[0] === 'depo') { sayfa = 'depo'; sayfaDepo(); }
    else sayfaIlaclar();
    Array.prototype.forEach.call(document.querySelectorAll('#gezinti a'), function (a) { a.classList.toggle('aktif', a.dataset.sayfa === sayfa); });
    var hedef = p[0] === 'depo' && p[1] ? document.getElementById('depo-' + p[1]) : null;
    if (hedef) hedef.scrollIntoView({ behavior: 'auto', block: 'start' }); else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', yonlendir);

  /* ───────────── ipucu (tooltip) ───────────── */
  var ipucu = $('#ipucu');
  document.addEventListener('mousemove', function (e) {
    var el = e.target.closest ? e.target.closest('[data-ipucu]') : null;
    if (!el) { ipucu.hidden = true; return; }
    ipucu.innerHTML = el.getAttribute('data-ipucu');
    ipucu.hidden = false;
    var w = ipucu.offsetWidth, x = Math.min(window.innerWidth - w - 8, e.clientX + 14), y = e.clientY + 16;
    if (y + ipucu.offsetHeight > window.innerHeight - 8) y = e.clientY - ipucu.offsetHeight - 10;
    ipucu.style.left = Math.max(8, x) + 'px'; ipucu.style.top = y + 'px';
  });

  /* ───────────── tema ───────────── */
  var kok = document.documentElement;
  try { var kayitli = localStorage.getItem('pr-tema'); if (kayitli) kok.setAttribute('data-theme', kayitli); } catch (e) {}
  $('#temaDugme').onclick = function () {
    var simdi = kok.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var yeni = simdi === 'dark' ? 'light' : 'dark';
    kok.setAttribute('data-theme', yeni);
    try { localStorage.setItem('pr-tema', yeni); } catch (e) {}
  };

  yonlendir();
})();
