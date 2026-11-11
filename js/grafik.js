/* Psikofarmakoloji Rehberi — SVG grafik bileşenleri */
(function () {
  function fmt(n) {
    var s = (Math.round(n * 100) / 100).toString();
    return s.replace('.', ',');
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  /* Geçen süre etiketi: gün → "Başlangıç", "4 gün", "2 hf" */
  function sureEtiket(g, gunluk) {
    if (gunluk) return (g + 1) + '. gün';
    if (g === 0) return 'Başlangıç';
    if (g % 7 === 0) return (g / 7) + ' hf';
    return g + ' gün';
  }
  function sureUzun(g, gunluk) {
    if (gunluk) return (g + 1) + '. gün';
    if (g === 0) return 'Başlangıç';
    if (g % 7 === 0) return (g / 7) + '. haftanın sonunda';
    return g + '. günden sonra';
  }

  /* "Güzel" eksen adımları */
  function adimlar(maks, hedefSayi) {
    var ham = maks / hedefSayi, us = Math.pow(10, Math.floor(Math.log10(ham))), k = ham / us;
    var adim = (k < 1.5 ? 1 : k < 3 ? 2 : k < 7 ? 5 : 10) * us, d = [];
    for (var v = 0; v <= maks + 1e-9; v += adim) d.push(Math.round(v * 1000) / 1000);
    return d;
  }

  /* ── Titrasyon basamak grafiği ── */
  function titrasyon(d, renk) {
    var W = 560, H = 250, L = 46, R = 18, T = 20, B = 40;
    var ad = d.adim, son = ad[ad.length - 1][0];
    var gunluk = son <= 6;
    var span = Math.max(son * 1.22, son + (gunluk ? 1 : 7), 7 * (gunluk ? 0 : 1) || 2);
    var enYuksek = Math.max.apply(null, ad.map(function (a) { return a[1]; }));
    var tavan = d.tavan && d.tavan <= enYuksek * 3.2 ? d.tavan : null;
    var yMaks = Math.max(enYuksek, tavan || 0, d.bant ? Math.min(d.bant[1], enYuksek * 3.2) : 0) * 1.14;
    var x = function (g) { return L + (g / span) * (W - L - R); };
    var y = function (v) { return H - B - (v / yMaks) * (H - T - B); };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Titrasyon şeması">';

    // ızgara + y ekseni
    adimlar(yMaks / 1.05, 4).forEach(function (v) {
      s += '<line class="g-cizgi" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '"/>';
      s += '<text class="g-eksen" x="' + (L - 7) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + fmt(v) + '</text>';
    });
    // hedef bandı
    if (d.bant) {
      var b1 = Math.min(d.bant[1], yMaks), b0 = d.bant[0];
      s += '<rect x="' + L + '" y="' + y(b1) + '" width="' + (W - L - R) + '" height="' + Math.max(3, y(b0) - y(b1)) + '" fill="' + renk + '" opacity=".13" rx="3"/>';
    }
    // maksimum doz
    if (tavan) {
      s += '<line x1="' + L + '" x2="' + (W - R) + '" y1="' + y(tavan) + '" y2="' + y(tavan) + '" stroke="var(--kritik)" stroke-width="1.5" stroke-dasharray="5 4"/>';
      s += '<text class="g-ikincil" x="' + (L + 6) + '" y="' + (y(tavan) - 5) + '">Maksimum ' + fmt(tavan) + '</text>';
    }
    s += '<line class="g-taban" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0) + '" y2="' + y(0) + '"/>';

    // basamak çizgisi
    var yol = 'M' + x(ad[0][0]) + ' ' + y(ad[0][1]);
    for (var i = 1; i < ad.length; i++) yol += ' H' + x(ad[i][0]) + ' V' + y(ad[i][1]);
    yol += ' H' + x(span);
    s += '<path d="' + yol + '" fill="none" stroke="' + renk + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';

    // noktalar + etiketler
    var sonX = -99;
    ad.forEach(function (a, i) {
      var px = x(a[0]), py = y(a[1]);
      var ip = '<b>' + fmt(a[1]) + ' ' + esc(d.birim) + '</b>' + sureUzun(a[0], gunluk);
      s += '<circle cx="' + px + '" cy="' + py + '" r="5" fill="' + renk + '" stroke="var(--yuzey)" stroke-width="2"/>';
      s += '<circle class="g-nokta" cx="' + px + '" cy="' + py + '" r="14" fill="transparent" data-ipucu="' + esc(ip) + '"/>';
      s += '<text class="g-etiket" x="' + (px + 5) + '" y="' + (py - 9) + '">' + fmt(a[1]) + '</text>';
      if (px - sonX >= 44 || i === 0) {
        s += '<line class="g-taban" x1="' + px + '" x2="' + px + '" y1="' + y(0) + '" y2="' + (y(0) + 5) + '"/>';
        s += '<text class="g-eksen" x="' + px + '" y="' + (y(0) + 18) + '" text-anchor="' + (i === 0 ? 'start' : 'middle') + '">' + sureEtiket(a[0], gunluk) + '</text>';
        sonX = px;
      }
    });
    s += '<text class="g-eksen" x="' + (W - R) + '" y="' + (H - 6) + '" text-anchor="end">Başlangıçtan itibaren geçen süre →</text>';
    s += '</svg>';
    return s;
  }

  /* ── Kesme (azaltım) grafiği ── */
  function kesme(k, renk) {
    var W = 560, H = 200, L = 46, R = 18, T = 18, B = 40;
    var ad = k.adim, son = ad[ad.length - 1][0], span = son + Math.max(5, son * 0.15);
    var x = function (g) { return L + (g / span) * (W - L - R); };
    var y = function (v) { return H - B - (v / 112) * (H - T - B); };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Doz azaltım şeması">';
    [0, 25, 50, 75, 100].forEach(function (v) {
      s += '<line class="g-cizgi" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '"/>';
      s += '<text class="g-eksen" x="' + (L - 7) + '" y="' + (y(v) + 4) + '" text-anchor="end">%' + v + '</text>';
    });
    s += '<line class="g-taban" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(0) + '" y2="' + y(0) + '"/>';
    // dolgu alanı + çizgi
    var yol = 'M' + x(0) + ' ' + y(ad[0][1]);
    for (var i = 1; i < ad.length; i++) yol += ' H' + x(ad[i][0]) + ' V' + y(ad[i][1]);
    yol += ' H' + x(span);
    s += '<path d="' + yol + ' V' + y(0) + ' H' + x(0) + ' Z" fill="' + renk + '" opacity=".12"/>';
    s += '<path d="' + yol + '" fill="none" stroke="' + renk + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>';
    var sonX = -99;
    ad.forEach(function (a, i) {
      var px = x(a[0]), py = y(a[1]);
      var et = a[1] === 0 ? 'Kes' : '%' + a[1];
      var ip = '<b>' + (a[1] === 0 ? 'İlaç kesilir' : 'Dozun %' + a[1] + '\'i') + '</b>' + sureUzun(a[0], false);
      s += '<circle cx="' + px + '" cy="' + py + '" r="5" fill="' + renk + '" stroke="var(--yuzey)" stroke-width="2"/>';
      s += '<circle class="g-nokta" cx="' + px + '" cy="' + py + '" r="14" fill="transparent" data-ipucu="' + esc(ip) + '"/>';
      s += '<text class="g-etiket" x="' + (px + 6) + '" y="' + (py - 8) + '">' + et + '</text>';
      if (px - sonX >= 44 || i === 0) {
        s += '<line class="g-taban" x1="' + px + '" x2="' + px + '" y1="' + y(0) + '" y2="' + (y(0) + 5) + '"/>';
        s += '<text class="g-eksen" x="' + px + '" y="' + (y(0) + 18) + '" text-anchor="' + (i === 0 ? 'start' : 'middle') + '">' + sureEtiket(a[0], false) + '</text>';
        sonX = px;
      }
    });
    s += '<text class="g-eksen" x="' + (W - R) + '" y="' + (H - 6) + '" text-anchor="end">Azaltıma başladıktan sonra geçen süre →</text>';
    s += '</svg>';
    return s;
  }

  /* ── İlaç değişimi: iki panelli doz şeridi ── */
  function degisim(plan, adA, adB) {
    var W = 720, PH = 86, BOS = 30, L = 14, R = 14, T = 26, B = 34;
    var H = T + PH * 2 + BOS + B;
    var tum = plan.egriA.concat(plan.egriB);
    var son = Math.max.apply(null, tum.map(function (p) { return p[0]; }));
    var span = son + 10;
    var x = function (g) { return L + (g / span) * (W - L - R); };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="İlaç değişim şeması">';

    // haftalık dikey ızgara
    for (var g = 0; g <= span; g += 7) {
      s += '<line class="g-cizgi" x1="' + x(g) + '" x2="' + x(g) + '" y1="' + T + '" y2="' + (H - B) + '"/>';
      s += '<text class="g-eksen" x="' + x(g) + '" y="' + (H - B + 16) + '" text-anchor="middle">' + (g === 0 ? 'Bugün' : (g / 7) + '. hf') + '</text>';
    }
    // ilaçsız aralık
    if (plan.bosluk && plan.bosluk[1] > plan.bosluk[0]) {
      var bx = x(plan.bosluk[0]), bw = x(plan.bosluk[1]) - bx;
      s += '<rect x="' + bx + '" y="' + T + '" width="' + bw + '" height="' + (H - T - B) + '" fill="var(--uyari)" opacity=".16"/>';
      s += '<text class="g-ikincil" x="' + (bx + bw / 2) + '" y="' + (T + PH + BOS / 2 + 4) + '" text-anchor="middle" style="font-weight:650">İlaçsız aralık</text>';
    }

    function panel(egri, y0, renk, ad, ust) {
      var y = function (v) { return y0 + PH - (v / 100) * (PH - 10); };
      var yol = 'M' + x(0) + ' ' + y(egri[0][1]);
      for (var i = 1; i < egri.length; i++) yol += ' H' + x(egri[i][0]) + ' V' + y(egri[i][1]);
      yol += ' H' + x(span);
      var o = '<line class="g-taban" x1="' + L + '" x2="' + (W - R) + '" y1="' + (y0 + PH) + '" y2="' + (y0 + PH) + '"/>';
      o += '<path d="' + yol + ' V' + (y0 + PH) + ' H' + x(0) + ' Z" fill="' + renk + '" opacity=".2"/>';
      o += '<path d="' + yol + '" fill="none" stroke="' + renk + '" stroke-width="2.5" stroke-linejoin="round"/>';
      egri.forEach(function (p, i) {
        if (i === 0) return;
        var ip = esc('<b>' + ad + ': ' + (p[1] === 0 ? 'kesilir' : 'dozun %' + Math.round(p[1]) + '\'i') + '</b>' + (p[0] % 7 === 0 ? (p[0] / 7) + '. hafta' : p[0] + '. gün'));
        o += '<circle cx="' + x(p[0]) + '" cy="' + y(p[1]) + '" r="4.5" fill="' + renk + '" stroke="var(--yuzey)" stroke-width="2"/>';
        o += '<circle class="g-nokta" cx="' + x(p[0]) + '" cy="' + y(p[1]) + '" r="13" fill="transparent" data-ipucu="' + ip + '"/>';
      });
      o += '<text class="g-etiket" x="' + (L + 2) + '" y="' + (y0 - 6) + '">' + esc(ust) + '</text>';
      return o;
    }
    s += panel(plan.egriA, T, 'var(--murekkep-2)', adA, 'Eski ilaç · ' + adA);
    s += panel(plan.egriB, T + PH + BOS, 'var(--s-ad)', adB, 'Yeni ilaç · ' + adB);
    s += '</svg>';
    return s;
  }

  /* ── Strateji mini simgesi ── */
  function stratejiSimge(tur) {
    var a = { dogrudan: 'M4 12 H30 V34 H60', capraz: 'M4 12 H16 V19 H30 V27 H44 V34 H60', yikama: 'M4 12 H14 V23 H24 V34 H60', ortusme: 'M4 12 H38 V23 H48 V34 H60' }[tur];
    var b = { dogrudan: 'M4 34 H30 V12 H60', capraz: 'M4 34 H16 V27 H30 V19 H44 V12 H60', yikama: 'M4 34 H38 V23 H48 V12 H60', ortusme: 'M4 34 H10 V23 H20 V12 H60' }[tur];
    return '<svg viewBox="0 0 64 44" width="64" height="44" aria-hidden="true">' +
      '<line class="g-taban" x1="4" x2="60" y1="38" y2="38"/>' +
      '<path d="' + a + '" fill="none" stroke="var(--murekkep-2)" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<path d="' + b + '" fill="none" stroke="var(--s-ad)" stroke-width="2.2" stroke-linejoin="round" transform="translate(0,2)"/></svg>';
  }

  /* ── Yarı ömür cetveli (logaritmik) ── */
  function cetvel(saat) {
    var mn = Math.log(0.5), mx = Math.log(240);
    var p = function (h) { return Math.max(0, Math.min(100, (Math.log(h) - mn) / (mx - mn) * 100)); };
    var c = [[1, '1 sa'], [6, '6 sa'], [24, '1 gün'], [168, '7 gün']];
    var s = '<div class="cetvel"><div class="ray"></div>';
    c.forEach(function (t) { s += '<span class="cent" style="left:' + p(t[0]) + '%">' + t[1] + '</span>'; });
    s += '<div class="im" style="left:' + p(saat) + '%"></div></div>';
    return s;
  }

  /* ── Depo antipsikotik başlama zaman çizelgesi ── */
  function depo(d, renk) {
    var W = 720, H = 168, L = 16, R = 16, span = d.sureGun || 91;
    var yE = 66, yO = 112, oh = 20;
    var x = function (g) { return L + (g / span) * (W - L - R); };
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Depo başlama zaman çizelgesi">';
    var adim = span > 100 ? 28 : 14;
    for (var g = 0; g <= span; g += 7) {
      var ana = g % adim === 0;
      s += '<line class="g-cizgi" x1="' + x(g) + '" x2="' + x(g) + '" y1="' + (ana ? 44 : 60) + '" y2="' + (H - 26) + '"' + (ana ? '' : ' opacity=".5"') + '/>';
      if (ana) s += '<text class="g-eksen" x="' + x(g) + '" y="' + (H - 10) + '" text-anchor="' + (g === 0 ? 'start' : 'middle') + '">' + (g === 0 ? '1. gün' : (g / 7) + '. hf') + '</text>';
    }
    // enjeksiyon satırı
    s += '<text class="g-ikincil" x="' + (W - R) + '" y="14" text-anchor="end" style="font-weight:650">Enjeksiyonlar</text>';
    s += '<line class="g-taban" x1="' + L + '" x2="' + (W - R) + '" y1="' + yE + '" y2="' + yE + '"/>';
    var sonEtiketX = -999, ust = false;
    d.enj.forEach(function (e) {
      var px = x(e[0]);
      s += '<line x1="' + px + '" x2="' + px + '" y1="' + (yE - 14) + '" y2="' + yE + '" stroke="' + renk + '" stroke-width="2.5" stroke-linecap="round"/>';
      s += '<circle cx="' + px + '" cy="' + yE + '" r="6.5" fill="' + renk + '" stroke="var(--yuzey)" stroke-width="2"/>';
      var ip = '<b>' + (e[0] === 0 ? '1. gün' : (e[0] + 1) + '. gün') + '</b>' + (e[1] || 'Sürdürüm dozu');
      s += '<circle class="g-nokta" cx="' + px + '" cy="' + yE + '" r="15" fill="transparent" data-ipucu="' + esc(ip) + '"/>';
      if (e[1]) {
        ust = (px - sonEtiketX < 96) ? !ust : false;
        s += '<text class="g-etiket" x="' + px + '" y="' + (ust ? 26 : 42) + '" text-anchor="' + (e[0] === 0 ? 'start' : 'middle') + '">' + esc(e[1]) + '</text>';
        sonEtiketX = px;
      }
    });
    // oral ek tedavi satırı
    if (d.oralGun) {
      var x0 = x(0), x1 = x(d.oralGun);
      if (d.oralAzalt) s += '<path d="M' + x0 + ' ' + yO + ' L' + x1 + ' ' + (yO + oh) + ' L' + x0 + ' ' + (yO + oh) + ' Z" fill="var(--murekkep-2)" opacity=".38"/>';
      else s += '<rect x="' + x0 + '" y="' + yO + '" width="' + (x1 - x0) + '" height="' + oh + '" rx="4" fill="var(--murekkep-2)" opacity=".38"/>';
      s += '<text class="g-ikincil" x="' + (x1 + 8) + '" y="' + (yO + 14) + '">' + esc(d.oralEtiket) + '</text>';
    } else {
      s += '<line x1="' + x(0) + '" x2="' + (x(0) + 18) + '" y1="' + (yO + 10) + '" y2="' + (yO + 10) + '" stroke="var(--eksen)" stroke-width="2" stroke-dasharray="3 3"/>';
      s += '<text class="g-ikincil" x="' + (x(0) + 26) + '" y="' + (yO + 14) + '">' + esc(d.oralEtiket) + '</text>';
    }
    s += '</svg>';
    return s;
  }

  window.Grafik = { depo: depo, titrasyon: titrasyon, kesme: kesme, degisim: degisim, stratejiSimge: stratejiSimge, cetvel: cetvel, fmt: fmt };
})();
