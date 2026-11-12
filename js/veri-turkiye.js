/* Türkiye ruhsat bilgisi: her etkin madde için Türkiye'de ruhsatlı bir ürünün KÜB'ünden özet (TİTCK KÜB/KT veritabanı).
   Rehberin FDA'ya dayanan onay bilgisine ek olarak gösterilir. Ayrıntı ve kaynak alıntıları: docs/kub-karsilastirma.md
   ruhsatsiz: true → TİTCK veritabanında KÜB kaydı yok. fark: FDA ile Türkiye KÜB'ü arasındaki önemli farklar (eri / ped). */
window.TR_KUB = {
 "fluoksetin": {
  "urun": "PROZAC 20 MG KAPSÜL",
  "firma": "LILLY İLAÇ TİCARET LİMİTED ŞİRKETİ",
  "tarih": "21/12/2021",
  "url": "https://titck.gov.tr/storage/Archive/2021/kubKtAttachments/kb_4ab07df8-3a8a-41a2-85ea-48ef264f1b4d.pdf",
  "eriskin": [
   "Depresyon",
   "OKB",
   "Bulimiya nervoza",
   "PMDB"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanımı önerilmez.",
  "doz": {
   "eri": {
    "bas": "20 mg/gün (bulimiya: 60 mg/gün; PMDB: sürekli ya da luteal faz 20 mg)",
    "maks": "60 mg/gün (depresyon, OKB); yaşlıda genelde ≤ 40 mg, en fazla 60 mg; 80 mg üzeri sistematik değerlendirilmemiş"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Özel doz ayarı gerekmez.",
   "karaciger": "Doz ya da doz sıklığı azaltılmalı (ör. gün aşırı 20 mg)."
  },
  "fark": {
   "eri": [
    "Panik bozukluk ve olanzapinle kombinasyon endikasyonları Türkiye'de yok.",
    "Maksimum doz 60 mg/gün, yaşlıda genelde 40 mg/gün aşılmamalı (FDA'da 80 mg)."
   ],
   "ped": [
    "18 yaş altında kullanımı önerilmez (FDA: depresyon ≥ 8 yaş, OKB ≥ 7 yaş)."
   ]
  }
 },
 "sertralin": {
  "urun": "LUSTRAL 50 MG ÇENTIKLI FILM KAPLI TABLET",
  "firma": "VİATRİS İLAÇLARI LTD. ŞTİ.",
  "tarih": "19/01/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/LUSTRAL50mgentiklifilmkapltabletkub_20_01_2025.pdf",
  "eriskin": [
   "Depresyon (nüks önleme dahil)",
   "OKB",
   "Panik bozukluk (agorafobili/agorafobisiz)",
   "TSSB",
   "Sosyal anksiyete",
   "PMDB"
  ],
  "pediatrik": [
   "OKB · ≥ 6 yaş"
  ],
  "pedNot": "OKB (6–17 yaş) dışında 18 yaş altında kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "50 mg/gün (depresyon, OKB, PMDB); panik, TSSB, sosyal fobi: 25 mg/gün, 1 hafta sonra 50 mg",
    "maks": "200 mg/gün (PMDB: sürekli 150 mg, luteal faz 100 mg)"
   },
   "ped": {
    "bas": "6–12 yaş 25 mg/gün; 13–17 yaş 50 mg/gün",
    "maks": "200 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez.",
   "karaciger": "Dikkatli; daha düşük doz veya seyrek doz aralığı; ciddi karaciğer hastalığında kullanılmamalı."
  },
  "fark": {
   "eri": [],
   "ped": []
  }
 },
 "essitalopram": {
  "urun": "CIPRALEX 10 MG FILM KAPLI TABLET",
  "firma": "LUNDBECK İLAÇ TİC. LTD. ŞTİ.",
  "tarih": "19/07/2024",
  "url": "https://titck.gov.tr/storage/Archive/2023/kubKtAttachments/10kub_8bdb22b3-3328-4af6-95a5-c79f26746f2c.pdf",
  "eriskin": [
   "Majör depresyon",
   "Panik bozukluk (agorafobili/agorafobisiz)",
   "Sosyal anksiyete",
   "Yaygın anksiyete",
   "OKB"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "10 mg/gün (panik: ilk hafta 5 mg)",
    "maks": "20 mg/gün; > 65 yaş ve CYP2C19 zayıf metabolizörde 10 mg/gün (başlangıç 5 mg)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Hafif–orta: ayar gerekmez; ciddi (CLCR ≤ 30 mL/dk): dikkatli.",
   "karaciger": "Hafif–orta: ilk 2 hafta 5 mg, sonra en fazla 10 mg/gün; ciddi: özellikle dikkatli titrasyon."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: panik bozukluk, sosyal anksiyete, OKB."
   ],
   "ped": [
    "18 yaş altında kullanılmamalıdır (FDA: depresyon ≥ 12 yaş, yaygın anksiyete ≥ 7 yaş)."
   ]
  }
 },
 "sitalopram": {
  "urun": "CIPRAM 20 MG FILM KAPLI TABLET",
  "firma": "LUNDBECK İLAÇ TİC.LTD.ŞTİ.",
  "tarih": "30/03/2023",
  "url": "https://titck.gov.tr/storage/Archive/2023/kubKtAttachments/CIPRAM20mgfilmkapltabletKB_4a9a812b-4833-4d33-8942-f1573f50be6b.pdf",
  "eriskin": [
   "Depresyon (relaps/rekürens önleme dahil)",
   "Panik bozukluk (agorafobili/agorafobisiz)",
   "OKB"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "20 mg/gün (panik: ilk hafta 10 mg)",
    "maks": "40 mg/gün; yaşlı (> 65), CYP2C19 zayıf metabolizör, hafif–orta karaciğer yetmezliği: 20 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Hafif–orta: ayar gerekmez; şiddetli (CrCl < 20 mL/dk): dikkatli.",
   "karaciger": "Hafif–orta: ilk 2 hafta 10 mg, en fazla 20 mg/gün; şiddetli: çok dikkatli titrasyon."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: panik bozukluk, OKB."
   ],
   "ped": []
  }
 },
 "fluvoksamin": {
  "urun": "FAVERIN 100 MG FILM KAPLI TABLET",
  "firma": "Abbott Laboratuarları İth. İhr. ve Tic. Ltd. Şti",
  "tarih": "10/09/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/ONAYLIKB_e6b8a83f-3574-4a71-8fcf-53043e209762.pdf",
  "eriskin": [
   "Majör depresyon",
   "OKB"
  ],
  "pediatrik": [
   "OKB · > 8 yaş"
  ],
  "pedNot": "Majör depresyonda 18 yaş altında kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "Depresyon: 50–100 mg/gün akşam (önerilen 100 mg); OKB: 50 mg/gün",
    "maks": "300 mg/gün (150 mg üzeri 2–3 doza bölünür)"
   },
   "ped": {
    "bas": "25 mg/gün; 4–7 günde bir 25 mg artış",
    "maks": "200 mg/gün (çocuklarda); 50 mg üzeri ikiye bölünür"
   }
  },
  "organ": {
   "bobrek": "Düşük dozla başla, yakından izle.",
   "karaciger": "Düşük dozla başla, yakından izle."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: majör depresif bozukluk (önerilen doz 100 mg/gün, maksimum 300 mg)."
   ],
   "ped": [
    "OKB'de 8 yaş üstü çocuk ve ergende veri 200 mg/gün'e kadar sınırlı; çocuklarda maksimum 200 mg/gün (FDA'da ergende 300 mg)."
   ]
  }
 },
 "paroksetin": {
  "urun": "SEROXAT 20 MG FILM TABLET",
  "firma": "NOVARTİS",
  "tarih": "19/01/2015",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/0993127771286.pdf",
  "eriskin": [
   "Depresyon (nüks önleme dahil)",
   "OKB",
   "Panik bozukluk (agorafobili/agorafobisiz)",
   "Sosyal anksiyete",
   "Yaygın anksiyete",
   "TSSB"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında endike değildir.",
  "doz": {
   "eri": {
    "bas": "20 mg/gün (OKB 20 mg → hedef 40 mg; panik 10 mg → hedef 40 mg)",
    "maks": "50 mg/gün (OKB ve panik: 60 mg/gün); yaşlıda 40 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Şiddetli (CrCl < 30 mL/dk): önerilen doz 20 mg/gün; artış gerekirse aralığın alt sınırına kadar.",
   "karaciger": "Karaciğer bozukluğunda önerilen doz 20 mg/gün; artış gerekirse aralığın alt sınırına kadar."
  },
  "fark": {
   "eri": [
    "Şiddetli böbrek yetmezliğinde (KrKl < 30 mL/dk) 20 mg/gün, artış doz aralığının alt sınırına kadar (FDA: 10 mg ile başla, maks 40 mg).",
    "Karaciğer bozukluğunda derece ayrımı olmadan 20 mg/gün, artış doz aralığının alt sınırına kadar (FDA: ağırda 10 mg ile başla)."
   ],
   "ped": []
  }
 },
 "venlafaksin": {
  "urun": "EFEXOR XR 37,5 MG MIKROPELLET KAPSÜL",
  "firma": "PFİZER İLAÇLARI LTD. ŞTİ.",
  "tarih": "06/11/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/UYGUNKBEFEXOR375mg_a2c6032d-a123-4190-b4a7-b13a861b4982.pdf",
  "eriskin": [
   "Majör depresyon (nüks/yeni epizod önleme dahil)",
   "Yaygın anksiyete",
   "Sosyal anksiyete",
   "Panik bozukluk (agorafobili/agorafobisiz)"
  ],
  "pediatrik": [],
  "pedNot": "Çocuk ve ergenlerde önerilmez; majör depresyonda kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "75 mg/gün (panik: 7 gün 37,5 mg, sonra 75 mg)",
    "maks": "Majör depresyon 375 mg/gün; yaygın anksiyete, sosyal fobi, panik 225 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "GFR 30–70: ayar gerekmez, dikkatli; GFR < 30 veya hemodiyaliz: doz %50 azaltılır.",
   "karaciger": "Hafif–orta: toplam doz %50 azaltılır (bazen daha fazla); şiddetli: %50'den fazla azaltılır, yarar-risk değerlendirilir."
  },
  "fark": {
   "eri": [
    "XR ile majör depresyonda maksimum 375 mg/gün, diğer endikasyonlarda 225 mg/gün (FDA'da XR için 225 mg).",
    "Doz artışları yaklaşık 2 haftada bir; şiddet gerektirirse en az 4 gün arayla (FDA'da en az 4 gün arayla).",
    "GFR 30–70 mL/dk'da doz ayarı gerekmez; GFR < 30 mL/dk veya hemodiyalizde doz %50 azaltılır.",
    "Şiddetli karaciğer yetmezliğinde doz %50'den fazla azaltılır ve dikkatli kullanılır."
   ],
   "ped": []
  }
 },
 "duloksetin": {
  "urun": "CYMBALTA 30 MG GASTRO-REZISTAN SERT KAPSÜL",
  "firma": "LILLY İLAÇ TİCARET LİMİTED ŞİRKETİ",
  "tarih": "11/03/2021",
  "url": "https://titck.gov.tr/storage/Archive/2021/kubKtAttachments/TTCKONAYLIKBCYMBALTA30MG_3e75efea-934f-4e81-9869-f0e0dc40c91c.pdf",
  "eriskin": [
   "Majör depresyon",
   "Yaygın anksiyete",
   "Diyabetik periferik nöropatik ağrı",
   "Fibromiyalji",
   "Kronik kas-iskelet ağrısı",
   "Kronik bel ağrısı",
   "Osteoartrite bağlı kronik ağrı"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalıdır (7–17 yaş yaygın anksiyetede güvenlilik/etkililik belirlenmemiş).",
  "doz": {
   "eri": {
    "bas": "Majör depresyon 60 mg/gün; yaygın anksiyete 30 mg/gün (eşlik eden depresyonda 60 mg); fibromiyalji/kronik ağrı 1 hafta 30 mg olabilir",
    "maks": "120 mg/gün (depresyonda 60 mg üzerinin ek yararı gösterilmemiş; fibromiyalji ve kronik ağrıda 60 mg üzeri yararsız)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl 30–80: ayar gerekmez; CrCl < 30: kullanılmamalı (kontrendike).",
   "karaciger": "Karaciğer yetmezliğine yol açan her karaciğer hastalığında kullanılmamalı."
  },
  "fark": {
   "eri": [],
   "ped": [
    "18 yaş altında kullanılmamalıdır (FDA: yaygın anksiyete ≥ 7 yaş, fibromiyalji ≥ 13 yaş)."
   ]
  }
 },
 "mirtazapin": {
  "urun": "REMERON 30 MG FILM KAPLI TABLET",
  "firma": "ORGANON TURKEY İLAÇLARI LİMİTED ŞİRKETİ",
  "tarih": "30/03/2022",
  "url": "https://titck.gov.tr/storage/Archive/2022/kubKtAttachments/yaynlanacakremeron30mgtablet_cd9ab414-6ba4-4164-805a-2ad114870cd9.pdf",
  "eriskin": [
   "Majör depresyon"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "15 veya 30 mg/gün (tercihen gece)",
    "maks": "45 mg/gün (etkin aralık 15–45 mg)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl < 40 mL/dk'da klirens azalabilir; reçetede göz önüne alınmalı (sayısal doz önerisi yok).",
   "karaciger": "Klirens azalabilir; özellikle şiddetli yetmezlikte dikkat (sayısal doz önerisi yok)."
  },
  "fark": {
   "eri": [],
   "ped": []
  }
 },
 "bupropion": {
  "urun": "BUPRAPAN 450 MG UZATıLMIŞ SALıMLı TABLET",
  "firma": "LİBA LABORATUARLARI A.Ş.",
  "tarih": "15/02/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/BUPRAPAN450mguzatlmsalmltabletkub_d10cee99-6cf5-4f9d-b334-14a7568bd7bc.pdf",
  "eriskin": [
   "Majör depresif atak"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalı (güvenlilik/etkililik belirlenmemiş). Not: incelenen KÜB bir muadile (450 mg XL) aittir.",
  "doz": {
   "eri": {
    "bas": "150 mg/gün (tek doz)",
    "maks": "450 mg/gün (4 hafta sonra yanıt yoksa 300 mg; ≥ 2 hafta 300 mg sonrası 450 mg)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "150 mg/gün (tek doz)",
   "karaciger": "Hafif–orta: 150 mg/gün; şiddetli siroz: kontrendike"
  },
  "fark": {
   "eri": [
    "Mevsimsel depresyonun önlenmesi endikasyonu yok; yalnız majör depresif ataklarda endike.",
    "150 mg ile 4 hafta yanıt yoksa 300 mg'a, 2 hafta sonra gerekirse 450 mg'a çıkılır (FDA: 4. günde 300 mg).",
    "Böbrek yetmezliğinde önerilen doz günde bir kez 150 mg.",
    "Hafif–orta karaciğer yetmezliğinde 150 mg/gün; şiddetli karaciğer sirozunda kontrendike (FDA: gün aşırı düşük doz)."
   ],
   "ped": [
    "18 yaş altında kullanılmamalıdır."
   ]
  }
 },
 "trazodon": {
  "urun": "DESYREL XL 150 MG UZATILMIŞ SALIMLI FILM KAPLI TABLET",
  "firma": "ANGELİNİ İLAÇ SAN. VE TİC. A.Ş.",
  "tarih": "30/04/2023",
  "url": "https://titck.gov.tr/storage/Archive/2023/kubKtAttachments/DESYRELXL150mgUzatlmSalmlFilmKaplTabletKUB_063814ad-5ed1-43bc-a4fe-f6d30f9d38cd.pdf",
  "eriskin": [
   "Depresif bozukluklar (anksiyete eşlik etsin ya da etmesin)"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş ve altında kontrendike (güvenlilik verisi yok).",
  "doz": {
   "eri": {
    "bas": "XL: 75–150 mg/gün (akşam tek doz); yaşlı/zayıf: 75 mg",
    "maks": "XL: 300 mg/gün (3 günde bir 75 mg artış)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Genellikle ayar gerekmez; şiddetli yetmezlikte dikkat",
   "karaciger": "Dikkat (özellikle şiddetli); periyodik karaciğer fonksiyon izlemi düşünülebilir"
  },
  "fark": {
   "eri": [
    "XL formda başlangıç 75–150 mg akşam tek doz, 3 günde bir 75 mg artış, maksimum 300 mg/gün (FDA IR: maks 400 mg)."
   ],
   "ped": [
    "18 yaş ve altında kontrendikedir (FDA'da pediatrik kontrendikasyon yok)."
   ]
  }
 },
 "vortioksetin": {
  "urun": "FONKSERA 15 MG FILM KAPLı TABLET",
  "firma": "LUNDBECK İLAÇ TİC. LTD. ŞTİ.",
  "tarih": "30/09/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/FONKSERA15MGKBONAY_0d54f904-39ff-4ac2-a534-fca3f0bbab5a.pdf",
  "eriskin": [
   "Majör depresif epizot"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında MDB'de kullanılmamalı (etkililik belirlenmemiş).",
  "doz": {
   "eri": {
    "bas": "10 mg/gün (≥ 65 yaş: 5 mg)",
    "maks": "20 mg/gün (en az 5 mg/gün)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez (veri sınırlı, dikkat)",
   "karaciger": "Doz ayarı gerekmez (veri sınırlı, dikkat)"
  },
  "fark": {
   "eri": [],
   "ped": [
    "Majör depresif bozuklukta 18 yaş altında kullanılmamalıdır."
   ]
  }
 },
 "klomipramin": {
  "urun": "ANAFRANİL-SR 75 MG BÖLÜNEBİLİR TABLET",
  "firma": "TEOFARMA",
  "tarih": "04/07/2020",
  "url": "https://titck.gov.tr/storage/Archive/2020/kubKtAttachments/KBANAFRANL75MG_e06b97d0-73ed-4a93-b461-0e9c9bec37e3.pdf",
  "eriskin": [
   "Depresyon",
   "OKB",
   "Fobiler",
   "Panik atak / agorafobi",
   "Narkolepsiye eşlik eden katapleksi (psikiyatri dışı)",
   "Kronik ağrılı durumlar (psikiyatri dışı)"
  ],
  "pediatrik": [
   "OKB · 10–17 yaş"
  ],
  "pedNot": "OKB dışındaki endikasyonlarda 18 yaş altında önerilmez; 10 yaş altında deneyim yok.",
  "doz": {
   "eri": {
    "bas": "Depresyon/OKB/fobi: 25 mg × 2–3/gün ya da SR 75 mg × 1; panik: 10 mg/gün; yaşlı: 10 mg",
    "maks": "250 mg/gün (ağır vakalar); panik 150 mg/gün; katapleksi 75 mg/gün"
   },
   "ped": {
    "bas": "OKB: 25 mg/gün",
    "maks": "İlk 2 hafta 3 mg/kg veya 100 mg; sonra 3 mg/kg veya 200 mg/gün (hangisi düşükse)"
   }
  },
  "organ": {
   "bobrek": "Dikkatli kullanın",
   "karaciger": "Dikkat; periyodik karaciğer enzim izlemi; şiddetli karaciğer hastalığında kontrendike (4.3)"
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: depresyon, fobiler, panik atak (panikte 10 mg/gün ile başlanır, gerekirse 150 mg'a kadar).",
    "Şiddetli karaciğer hastalığında kontrendikedir."
   ],
   "ped": []
  }
 },
 "imipramin": {
  "urun": "TOFRANIL 25MG DRAJE",
  "firma": "ASSOS İLAÇ,KİMYA,GIDA ÜRÜNLERİ ÜRETİM VE TİC.A.Ş.",
  "tarih": "03/11/2017",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/8bYvlvSZm8xs1.pdf",
  "eriskin": [
   "Depresyon (bipolar depresif faz, reaktif, maskelenmiş, nörotik, involüsyonel, şizofrenide ve organik hastalıklarda depresyon)"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kontrendike; enürezis endikasyonu yok.",
  "doz": {
   "eri": {
    "bas": "Ayaktan: 25 mg × 1–3/gün; hastanede 25 mg × 3; yaşlı: 10 mg",
    "maks": "Ayaktan 150–200 mg/gün; hastanede ağır vakalarda 300 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "İleri bozuklukta dikkat; doz düşürülmeli",
   "karaciger": "İleri bozuklukta dikkat; doz düşürülmeli"
  },
  "fark": {
   "eri": [],
   "ped": [
    "Enürezis endikasyonu yok; 18 yaş altında kontrendikedir (FDA: enürezis ≥ 6 yaş)."
   ]
  }
 },
 "amitriptilin": {
  "urun": "LAROXYL 10 MG FILM KAPLı TABLET",
  "firma": "DEVA HOLDING A.Ş.",
  "tarih": "19/06/2020",
  "url": "https://titck.gov.tr/storage/Archive/2020/kubKtAttachments/TTCKKBLAROXYL10MG_d02515ea-bda5-4a38-aa3f-873b7d33ee04.pdf",
  "eriskin": [
   "Depresyon (özellikle endojen)"
  ],
  "pediatrik": [
   "Depresyon · adolesan (≥ 12 yaş) dozu tanımlı"
  ],
  "pedNot": "12 yaş altında önerilmez.",
  "doz": {
   "eri": {
    "bas": "10 veya 25 mg × 3/gün (30–75 mg/gün); yaşlı/hafif: 10 mg × 3",
    "maks": "Nadiren > 150 mg/gün; hastanede 300 mg/gün'e dek"
   },
   "ped": {
    "bas": "Adolesan: 25–50 mg/gün (bölünmüş ya da akşam tek doz)",
    "maks": "Ayrı maks verilmemiş; önerilen aralık 25–50 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Özel doz ayarı gerekmez",
   "karaciger": "Dikkat; ciddi karaciğer hastalığında kontrendike (4.3)"
  },
  "fark": {
   "eri": [
    "Ciddi karaciğer hastalığında kontrendikedir."
   ],
   "ped": [
    "Ergenlerde önerilen doz 25–50 mg/gün, bölünmüş veya akşam tek doz.",
    "12 yaş altında kullanımı önerilmez."
   ]
  }
 },
 "desvenlafaksin": {
  "ruhsatsiz": true
 },
 "agomelatin": {
  "urun": "VALDOXAN 25 MG FİLM KAPLI TABLET",
  "firma": "SERVİER İLAÇ VE ARAŞTIRMA A.Ş.",
  "tarih": "03/06/2021",
  "url": "https://titck.gov.tr/storage/Archive/2021/kubKtAttachments/TTCKONAYLIKBVALDOXAN25TB_d215d021-bc5a-40a3-9ad2-d7e184461d7a.pdf",
  "eriskin": [
   "Majör depresif hastalık"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmaz.",
  "doz": {
   "eri": {
    "bas": "25 mg/gün (yatmadan önce)",
    "maks": "50 mg/gün (2 hafta sonra yanıt yoksa; karaciğer testi izlemiyle)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Orta–ciddi yetmezlikte tedbirli (klinik veri sınırlı)",
   "karaciger": "Kontrendike"
  },
  "fark": {
   "eri": [
    "75 yaş ve üzerinde etkililik gösterilmediğinden kullanılmamalıdır."
   ],
   "ped": [
    "18 yaş altında kullanılmaz."
   ]
  }
 },
 "tianeptin": {
  "urun": "STABLON 12,5 MG KAPLI TABLET",
  "firma": "SERVIER İLAÇ VE ARAŞTIRMA A.Ş.",
  "tarih": "22/04/2020",
  "url": "https://titck.gov.tr/storage/Archive/2020/kubKtAttachments/TTCKOnaylKBSTABLON_f45ac40e-2f41-4090-b06d-4a805d3d48ec.pdf",
  "eriskin": [
   "Majör depresyon"
  ],
  "pediatrik": [],
  "pedNot": "15 yaş altında kontrendike; 15–17 yaşta etkililik ve güvenlilik verisi yok.",
  "doz": {
   "eri": {
    "bas": "12,5 mg × 3/gün (yemeklerden önce)",
    "maks": "37,5 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Şiddetli (KrKl < 19 ml/dk): 2 tablet/gün",
   "karaciger": "Şiddetli siroz (Child-Pugh C): 2 tablet/gün; kronik alkoliklerde hafif–orta sirozda ayar gerekmez"
  },
  "fark": {
   "eri": [
    "65 yaş üstünde yaşa bağlı doz ayarı gerekmez; yalnız 55 kg altı yaşlılarda günde 2 tablet ile sınırlanır."
   ],
   "ped": [
    "15 yaş altında kontrendikedir; 18 yaş altında etkililik ve güvenlilik verisi yoktur."
   ]
  }
 },
 "metilfenidat": {
  "urun": "CONCERTA 54 MG KONTROLLÜ SALIM TABLETİ",
  "firma": "JOHNSON AND JOHNSON SIHHİ MAL. SAN. VE TİC. LTD. ŞTİ.",
  "tarih": "28/10/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/1311kubtemiz2_e853ac1f-a573-4f30-9094-ba3937969703.pdf",
  "eriskin": [
   "DEHB (18–65 yaş)"
  ],
  "pediatrik": [
   "DEHB · 6–17 yaş"
  ],
  "pedNot": "6 yaş altında kullanılmamalı. 65 yaş üstünde (yaşlılarda) kullanılmamalı. Diğer önlemler tek başına yetersiz kaldığında, kapsamlı tedavi programının parçası olarak ve DEHB'de uzman hekimce başlatılır.",
  "doz": {
   "eri": {
    "bas": "18 mg/gün sabah (önceden metilfenidat alanlarda dönüşüm tablosu: 18/36/54/72 mg); haftalık 18 mg artış",
    "maks": "72 mg/gün"
   },
   "ped": {
    "bas": "18 mg/gün sabah; haftalık 18 mg artış",
    "maks": "54 mg/gün (6–12 ve 13–17 yaş)"
   }
  },
  "organ": {
   "bobrek": "Çalışılmamış; renal klirens önemsiz olduğundan etkinin küçük olması beklenir, doz ayarlaması gerekebilir.",
   "karaciger": "Çalışılmamış; deneyim yok."
  },
  "fark": {
   "eri": [
    "Erişkin kullanımı 18–65 yaşla sınırlı; yaşlılarda kullanılmamalıdır.",
    "OROS formda metilfenidat almamış erişkinde de başlangıç 18 mg/gün (FDA'da 18 veya 36 mg)."
   ],
   "ped": [
    "OROS formda 13–17 yaşta da maksimum doz 54 mg/gün (FDA'da 72 mg)."
   ]
  }
 },
 "lisdeksamfetamin": {
  "ruhsatsiz": true
 },
 "atomoksetin": {
  "urun": "STRATTERA 4 MG/ML ORAL ÇÖZELTİ",
  "firma": "LİLLY İLAÇ",
  "tarih": "28/11/2016",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/w2tPoY3DlYQMR.pdf",
  "eriskin": [
   "DEHB (çocukluk çağı semptomları doğrulanmış erişkin)"
  ],
  "pediatrik": [
   "DEHB · ≥ 6 yaş"
  ],
  "pedNot": "6 yaş altında kullanılmamalı. Kapsamlı tedavi programının parçası olarak, uzman hekimce başlatılır.",
  "doz": {
   "eri": {
    "bas": "40 mg/gün; en az 7 gün sonra artış",
    "maks": "100 mg/gün (idame 80–100 mg)"
   },
   "ped": {
    "bas": "≤ 70 kg: ~0,5 mg/kg/gün; > 70 kg: 40 mg/gün; en az 7 gün sonra artış",
    "maks": "≤ 70 kg: idame ~1,2 mg/kg/gün (üstü ek yarar yok; > 1,8 mg/kg güvenliliği değerlendirilmemiş); > 70 kg: 100 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez (son dönem böbrek hastalığı dahil); SDBH'de hipertansiyonu artırabilir.",
   "karaciger": "Child-Pugh B: başlangıç ve hedef doz %50; Child-Pugh C: %25."
  },
  "fark": {
   "eri": [
    "Başlangıç dozu artırmadan önce en az 7 gün sürdürülmelidir (FDA'da en az 3 gün)."
   ],
   "ped": [
    "Başlangıç dozu artırmadan önce en az 7 gün sürdürülmelidir (FDA'da en az 3 gün).",
    "70 kg altında idame yaklaşık 1,2 mg/kg/gün; daha yüksek doz ek yarar göstermemiştir (FDA'da maks 1,4 mg/kg/gün)."
   ]
  }
 },
 "guanfasin": {
  "urun": "ARİSLOW ER 1 MG UZATILMIŞ SALIMLI TABLET",
  "firma": "ALİ RAİF İLAÇ SAN. AŞ.",
  "tarih": "11/10/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/ARSLOWER1mguzatlmsalmltabletkub_e3066703-f8b7-4e74-b980-df74b97e4b22.pdf",
  "eriskin": [],
  "pediatrik": [
   "DEHB · 6–17 yaş (uyarıcılar uygun değil, tolere edilemiyor veya etkisizse)"
  ],
  "pedNot": "6 yaş altında güvenlilik/etkililik belirlenmemiş. Erişkin ve yaşlı DEHB hastalarında kullanılmamalı. Ergenlerde vücut ağırlığı en az 34 kg olmalı; yalnızca tableti yutabilen çocuklarda.",
  "doz": {
   "eri": {
    "bas": "Endikasyon yok; erişkinde kullanılmamalı",
    "maks": ""
   },
   "ped": {
    "bas": "1 mg/gün; haftada ≤ 1 mg artış; idame 0,05–0,12 mg/kg/gün",
    "maks": "6–12 yaş (≥ 25 kg): 4 mg/gün · 13–17 yaş: 34–41,4 kg 4 mg, 41,5–49,4 kg 5 mg, 49,5–58,4 kg 6 mg, ≥ 58,5 kg 7 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Şiddetli bozukluk (GFR 15–29), son evre (GFR < 15) veya diyalizde doz azaltılması gerekebilir.",
   "karaciger": "Farklı derecelerde bozuklukta doz azaltılması gerekebilir."
  },
  "fark": {
   "eri": [
    "Erişkin ve yaşlı DEHB hastalarında kullanılmamalıdır."
   ],
   "ped": [
    "DEHB'de 6–17 yaşta yalnız uyarıcılar uygun değilse, tolere edilemiyorsa veya etkisizse endike (FDA'da birinci basamak)."
   ]
  }
 },
 "klonidin": {
  "ruhsatsiz": true
 },
 "deksmetilfenidat": {
  "ruhsatsiz": true
 },
 "amfetamin": {
  "ruhsatsiz": true
 },
 "viloksazin": {
  "ruhsatsiz": true
 },
 "modafinil": {
  "urun": "MODIODAL 100 MG TABLET",
  "firma": "TEVA İLAÇLARI SAN. VE TİC. A.Ş.",
  "tarih": "30/05/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/ek3modiodalkubtemiz_62a5846a-04af-42df-8e59-403262b0d556.pdf",
  "eriskin": [
   "Narkolepside aşırı uykululuk",
   "Vardiyalı çalışma uyku bozukluğunda aşırı uykululuk",
   "Obstrüktif uyku apnesinde birincil tedaviye rağmen süren aşırı uykululuk"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında kullanılmamalı.",
  "doz": {
   "eri": {
    "bas": "200 mg/gün (≥ 65 yaş: 100 mg); vardiyalıda vardiyadan ~1 saat önce",
    "maks": "400 mg/gün (tek ya da bölünmüş)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Veri yetersiz",
   "karaciger": "Ağır yetmezlikte doz yarıya"
  },
  "fark": {
   "eri": [],
   "ped": [
    "18 yaş altında kullanılmamalıdır."
   ]
  }
 },
 "risperidon": {
  "urun": "RISPERDAL QUICKLET 1 MG AĞIZDA ÇÖZÜNÜR TABLET",
  "firma": "JOHNSON AND JOHNSON SIHHİ MAL. SAN. VE TİC. LTD. ŞTİ.",
  "tarih": "23/09/2014",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/ddc0002a36308.pdf",
  "eriskin": [
   "Şizofreni ve diğer psikotik durumlar (akut ve idame)",
   "Bipolar bozuklukta manik epizod"
  ],
  "pediatrik": [
   "Davranım ve diğer yıkıcı davranış bozuklukları (agresyon ön planda) · 5–18 yaş",
   "Otistik bozukluğa bağlı huzursuzluk/irritabilite · çocuk ve ergen (5 yaş altında yeterli deneyim yok)"
  ],
  "pedNot": "18 yaş altında şizofrenide veri yetersizliği nedeniyle önerilmez (aynı ifade bipolar mani başlığı altında da yer alır); pediyatrik bipolar onayı yok. 5 yaş altında yeterli deneyim yok. KÜB taranmış (OCR) bir PDF'den; kritik değerler PDF görüntüsünden doğrulandı.",
  "doz": {
   "eri": {
    "bas": "Şizofreni: 2 mg/gün (2. gün 4 mg; optimal 4–6 mg) · Bipolar mani: 2–3 mg/gün, günde 1 mg artış",
    "maks": "16 mg/gün (10 mg üzeri ek yarar yok; mani 1–6 mg). Not: metin dosyasında OCR hatasıyla '36 mg' görünüyor, PDF'de 16 mg."
   },
   "ped": {
    "bas": "Davranım bozukluğu: < 50 kg 0,25 mg/gün, ≥ 50 kg 0,5 mg/gün (en erken gün aşırı artış) · Otizm: < 20 kg 0,25 mg/gün, ≥ 20 kg 0,5 mg/gün (4. gün artış)",
    "maks": "Davranım: optimum < 50 kg 0,5 mg (0,25–0,75), ≥ 50 kg 1 mg (0,5–1,5) · Otizm (çalışılan en yüksek): < 20 kg 1,5 mg, ≥ 20 kg 2,5 mg, > 45 kg 3,5 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Başlangıç ve idame dozları yarıya düşürülmeli, titrasyon daha yavaş.",
   "karaciger": "Başlangıç ve idame dozları yarıya düşürülmeli, titrasyon daha yavaş."
  },
  "fark": {
   "eri": [
    "Böbrek ve karaciğer bozukluğunda dereceden bağımsız olarak dozlar yarıya indirilir, titrasyon yavaşlatılır (FDA: ağırda 0,5 mg × 2)."
   ],
   "ped": [
    "Şizofreni ve bipolar manide pediatrik endikasyon yok; 18 yaş altı şizofrenide önerilmez (FDA: mani ≥ 10, şizofreni ≥ 13 yaş).",
    "Türkiye'de ek endikasyon: 5–18 yaşta agresif veya yıkıcı davranışların öne çıktığı davranım bozuklukları.",
    "Davranım bozukluğunda < 50 kg 0,25 mg, ≥ 50 kg 0,5 mg ile başlanır; optimum 0,5 / 1 mg/gün, artış en erken gün aşırı.",
    "Otizmde çalışılan en yüksek doz < 20 kg 1,5 mg, ≥ 20 kg 2,5 mg, > 45 kg 3,5 mg/gün (FDA ergen şizofreni/mani: 6 mg)."
   ]
  }
 },
 "aripiprazol": {
  "urun": "MADEPZOL 20 MG TABLET",
  "firma": "NOBEL SAĞLIK ÜRÜNLERİ LTD. ŞTİ.",
  "tarih": "04/12/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/MADEPZOL20mgtabletkub_11_12_2025.pdf",
  "eriskin": [
   "Şizofreni (akut ve idame)",
   "Bipolar I akut manik epizod ve nüks önleme",
   "Antidepresana dirençli majör depresyonda ek tedavi"
  ],
  "pediatrik": [
   "Şizofreni · 13–17 yaş",
   "Otistik bozuklukla ilişkili irritabilite · 6–17 yaş",
   "Tourette · 6–18 yaş"
  ],
  "pedNot": "6 yaş altında önerilmez. Bipolar mani yalnızca erişkinde endike.",
  "doz": {
   "eri": {
    "bas": "Şizofreni 10–15 mg/gün · Bipolar mani 15–30 mg/gün · MDB eki 5 mg/gün",
    "maks": "30 mg/gün (MDB ekinde 15 mg/gün)"
   },
   "ped": {
    "bas": "2 mg/gün (şizofreni: 2 gün 2 mg → 2 gün 5 mg → 10 mg; otizm: ≥ 1 hafta arayla; Tourette: 2 gün sonra 5 mg)",
    "maks": "Şizofreni 30 mg · Otizm irritabilite 15 mg · Tourette < 50 kg 10 mg, ≥ 50 kg 20 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez.",
   "karaciger": "Hafif-orta: ayar gerekmez; şiddetli: veri yetersiz, dikkatli dozlama, 30 mg dikkatle."
  },
  "fark": {
   "eri": [
    "Majör depresyonda ek tedavide başlangıç 5 mg/gün, doz aralığı 5–15 mg, maksimum 15 mg/gün (FDA: başlangıç 2–5 mg)."
   ],
   "ped": [
    "Bipolar I mani yalnız erişkinde endike; pediatrik bipolar endikasyonu yok (FDA: ≥ 10 yaş)."
   ]
  }
 },
 "olanzapin": {
  "urun": "ZYPREXA 5 MG FILM KAPLI TABLET",
  "firma": "BMED İLAÇ DANIŞMANLIK SAĞLIK ÜRÜN VE HİZMETLERİ TİC. LTD. ŞTİ.",
  "tarih": "11/07/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/zprexa5ek1kubbmed5mg_31_07_2025.pdf",
  "eriskin": [
   "Şizofreni (akut ve idame)",
   "Bipolar orta-ağır manik dönem",
   "Bipolar bozuklukta nüks önleme"
  ],
  "pediatrik": [
   "Şizofreni · 13–17 yaş",
   "Bipolar manik/mikst dönem · 13–17 yaş"
  ],
  "pedNot": "13 yaş altında kullanılmaz. 13–17 yaşta veri kısıtlı; kilo artışı, lipid ve prolaktin riskleri nedeniyle çoğu vakada önce diğer ilaçlar düşünülmeli.",
  "doz": {
   "eri": {
    "bas": "Şizofreni 10 mg/gün · Mani 15 mg (monoterapi) / 10 mg (kombinasyon) · Nüks önleme 10 mg",
    "maks": "20 mg/gün (aralık 5–20 mg)"
   },
   "ped": {
    "bas": "2,5–5 mg/gün (hedef 10 mg/gün)",
    "maks": "20 mg/gün (üzeri değerlendirilmemiş)"
   }
  },
  "organ": {
   "bobrek": "Daha düşük başlangıç dozu (5 mg) düşünülmeli.",
   "karaciger": "Orta bozuklukta (Child-Pugh A/B) başlangıç 5 mg, dikkatli artış."
  },
  "fark": {
   "eri": [
    "Fluoksetinle kombinasyon endikasyonları (bipolar depresyon, dirençli depresyon) Türkiye'de yok.",
    "Böbrek yetmezliğinde daha düşük başlangıç dozu (5 mg) düşünülmelidir."
   ],
   "ped": [
    "13 yaş altında kullanılmaz; fluoksetinle bipolar depresyon endikasyonu yok (FDA: ≥ 10 yaş)."
   ]
  }
 },
 "ketiapin": {
  "urun": "SEROQUEL 300 MG FILM KAPLI TABLET",
  "firma": "LİVA İLAÇ PAZARLAMA SAN. VE TİC. A.Ş.",
  "tarih": "04/12/2025",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/seroquel300Ek2_05_01_2026.2_KUB",
  "eriskin": [
   "Şizofreni",
   "Bipolar orta-ileri mani",
   "Bipolar depresyon (majör depresif atak)",
   "Bipolar nüks önleme (ketiapine yanıt vermiş hastalarda)"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında yeterli veri olmadığından kullanımı önerilmez.",
  "doz": {
   "eri": {
    "bas": "Şizofreni ve bipolar depresyon: 1. gün 50 mg (100–200–300 mg) · Mani: 1. gün 100 mg (200–300–400 mg)",
    "maks": "Şizofreni 750 mg/gün · Mani ve nüks önleme 800 mg/gün · Bipolar depresyon 300 mg (600 mg'a kadar)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez.",
   "karaciger": "25 mg/gün ile başla; günde 25–50 mg artır."
  },
  "fark": {
   "eri": [
    "Ketiapine yanıt vermiş bipolar hastalarda nüks önleme, ek tedavi şartı olmadan endike (FDA: lityum/valproata ek)."
   ],
   "ped": [
    "18 yaş altında kullanımı önerilmez (FDA: bipolar mani ≥ 10 yaş, şizofreni ≥ 13 yaş)."
   ]
  }
 },
 "klozapin": {
  "urun": "LEPONEX 25 MG TABLET",
  "firma": "NOVARTİS ÜRÜNLERİ",
  "tarih": "24/04/2017",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/JoU99ykZVpBuN.pdf",
  "eriskin": [
   "Tedaviye dirençli (veya klasik antipsikotiklere intoleran) şizofreni",
   "Şizofreni/şizoaffektif bozuklukta nükseden intihar davranışı riskinin azaltılması",
   "Parkinson hastalığında psikoz (standart tedavi başarısızsa)"
  ],
  "pediatrik": [],
  "pedNot": "Pediyatrik çalışma yok; 16 yaş altında güvenlilik/etkililik belirlenmediğinden kullanılmamalı.",
  "doz": {
   "eri": {
    "bas": "1. gün 12,5 mg ×1–2; 2. gün 25 mg ×1–2; 2–3 haftada 300 mg (Parkinson psikozu: akşam 12,5 mg)",
    "maks": "900 mg/gün (Parkinson psikozu: genelde ≤ 50 mg, asla > 100 mg/gün)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Hafif-orta: 1. gün tek doz 12,5 mg, yavaş artış; şiddetli böbrek yetmezliğinde kontrendike (4.3).",
   "karaciger": "Dikkat ve düzenli karaciğer testleri; aktif/ilerleyici karaciğer hastalığı ve hepatik yetmezlikte kontrendike (4.3)."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: Parkinson hastalığına bağlı psikoz (akşam 12,5 mg ile başlanır, maksimum 100 mg/gün).",
    "Şiddetli böbrek yetmezliğinde kontrendike; hafif–orta yetmezlikte ilk gün 12,5 mg tek doz ile başlanıp yavaş artırılır.",
    "Aktif veya ilerleyici karaciğer hastalığı ve karaciğer yetmezliğinde kontrendikedir."
   ],
   "ped": [
    "16 yaş altında kullanılmamalıdır."
   ]
  }
 },
 "haloperidol": {
  "urun": "NORODOL 2 MG / ML ORAL DAMLA",
  "firma": "ALİ RAİF İLAÇ SANAYİ A.Ş.",
  "tarih": "02/10/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/TTCKOnaylKBNORODOLDAMLA_ec2d5eb6-8f7c-49e3-939f-854016551982.pdf",
  "eriskin": [
   "Şizofreni ve şizoaffektif bozukluk",
   "Akut deliryum (non-farmakolojik tedavi başarısızsa)",
   "Bipolar I orta-şiddetli manik atak",
   "Psikotik bozukluk/bipolar maniye bağlı akut psikomotor ajitasyon",
   "Orta-şiddetli Alzheimer ve vasküler demansta inatçı saldırganlık ve psikotik semptomlar",
   "Tourette dahil tik bozuklukları (şiddetli, diğer tedaviler başarısızsa)",
   "Huntington hastalığında kore (psikiyatri dışı)"
  ],
  "pediatrik": [
   "Şizofreni · 13–17 yaş (diğer tedaviler başarısız/tolere edilemiyorsa)",
   "Otizm/yaygın gelişimsel bozuklukta inatçı şiddetli saldırganlık · 6–17 yaş",
   "Tourette dahil tik bozuklukları · 10–17 yaş (4.2 doz önerisi 12–17 yaş)"
  ],
  "pedNot": "Endikasyondaki yaşların altında güvenlilik/etkililik belirlenmemiş; 3 yaş altı için veri yok.",
  "doz": {
   "eri": {
    "bas": "Şizofreni 2–10 mg/gün (ilk atak 2–4 mg) · Mani 2–10 mg · Deliryum 1–10 mg · Demans ve tik 0,5–5 mg/gün",
    "maks": "Şizofreni 20 mg/gün · Mani 15 mg/gün · Deliryum 10 mg/gün · Ajitasyon 20 mg/gün · Yaşlı 5 mg/gün"
   },
   "ped": {
    "bas": "0,5 mg/gün'den (2–3 doza bölünmüş)",
    "maks": "Şizofreni 13–17: 5 mg/gün (öneri 0,5–3) · Otizm saldırganlık 6–11: 3 mg, 12–17: 5 mg · Tik 12–17: 3 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Doz ayarı önerilmez, dikkat; şiddetli bozuklukta daha düşük başlangıç, küçük artış, uzun aralık gerekebilir.",
   "karaciger": "Başlangıç dozu yarıya; daha küçük artışlar ve daha uzun aralıklar."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: şizoaffektif bozukluk, bipolar I mani, akut psikomotor ajitasyon, akut deliryum.",
    "Maksimum doz manide 15 mg/gün, deliryumda 10 mg/gün, akut ajitasyonda 20 mg/gün.",
    "Orta–şiddetli Alzheimer/vasküler demansta inatçı saldırganlık ve psikozda 0,5–5 mg/gün ile ruhsatlı; mortalite uyarısı geçerli."
   ],
   "ped": [
    "Şizofreni 13–17, otizm/YGB'de saldırganlık 6–17, tik bozukluğu 10–17 yaşta, yalnız diğer tedaviler başarısızsa (FDA: ≥ 3 yaş).",
    "Ergen şizofrenide 0,5–3 mg/gün (maks 5 mg); otizmde 6–11 yaş 0,5–3 mg, 12–17 yaş 0,5–5 mg/gün; tikte 0,5–3 mg/gün."
   ]
  }
 },
 "paliperidon": {
  "urun": "İNVEGA 9 MG UZATILMIŞ SALIMLI TABLET",
  "firma": "JOHNSON AND JOHNSON SIHHİ MAL. SAN. VE TİC. LTD. ŞTİ.",
  "tarih": "21/09/2022",
  "url": "https://titck.gov.tr/storage/Archive/2022/kubKtAttachments/INVEGA9mgKUB_03569eb5-11ee-468c-a429-864f6c87b15a.pdf",
  "eriskin": [
   "Şizofreni",
   "Şizoaffektif bozukluk (monoterapi veya antidepresan/duygudurum düzenleyici ile kombine)"
  ],
  "pediatrik": [
   "Şizofreni · ≥ 15 yaş"
  ],
  "pedNot": "Şizofrenide 12–14 yaşta güvenlilik/etkililik belirlenmemiş, pozoloji önerisi yok; şizoaffektif bozuklukta 12–17 yaşta incelenmemiş; 12 yaş altında kullanımı yok.",
  "doz": {
   "eri": {
    "bas": "6 mg/gün (sabah), titrasyon gerekmez",
    "maks": "12 mg/gün (şizofrenide 3–12, şizoaffektifte 6–12 mg/gün aralığı)"
   },
   "ped": {
    "bas": "3 mg/gün (sabah, ≥ 15 yaş)",
    "maks": "< 51 kg: 6 mg/gün · ≥ 51 kg: 12 mg/gün"
   }
  },
  "organ": {
   "bobrek": "CrCl 50–80: başlangıç 3 mg/gün, en fazla 6 mg/gün; CrCl 10–50: başlangıç 3 mg gün aşırı, en fazla 3 mg/gün; < 10: önerilmez.",
   "karaciger": "Hafif–orta: doz ayarı gerekmez; ağır: çalışılmamış, dikkat."
  },
  "fark": {
   "eri": [
    "KrKl 50–80 mL/dk'da başlangıç 3 mg/gün; 10–50 mL/dk'da 3 mg gün aşırı, sonra 3 mg/gün (FDA'da 10–50 için 1,5 mg/gün)."
   ],
   "ped": [
    "Ergen şizofrenisinde doz yalnız 15 yaş ve üzeri için verilir; 12–14 yaşta güvenlilik ve etkililik belirlenmemiş (FDA: ≥ 12 yaş)."
   ]
  }
 },
 "ziprasidon": {
  "urun": "ZELDOX 60 MG KAPSÜL",
  "firma": "PFIZER İLAÇLARI LTD. ŞTİ.",
  "tarih": "29/06/2022",
  "url": "https://titck.gov.tr/storage/Archive/2022/kubKtAttachments/Zeldox60KB_21842cef-7015-4164-9b89-31a0663bc042.pdf",
  "eriskin": [
   "Şizofreni ve ilişkili psikozlar",
   "Bipolar mani / karma epizod (kısa süreli tedavi)"
  ],
  "pediatrik": [
   "Bipolar mani / karma epizod (kısa süreli tedavi) · 10–17 yaş"
  ],
  "pedNot": "4.1'de 10–17 yaş mani endikasyonu var; ancak 4.2'de '18 yaşın altındaki çocuklarda etkililiği ve güvenliliği kanıtlanmamıştır' deniyor ve pediatrik doz verilmiyor (KÜB içi tutarsızlık). Şizofrenide çocuk/ergende etkililik belirlenmemiş; pediatrik şizofreni çalışması etkisizlik nedeniyle sonlandırılmış. Bipolar idamede yeterli kanıt yok.",
  "doz": {
   "eri": {
    "bas": "40 mg ×2 (yemekle; şizofreni ve akut mani)",
    "maks": "160 mg/gün (80 mg ×2)"
   },
   "ped": {
    "bas": "4.2'de yok (5.1'deki çalışmada 1. gün 20 mg)",
    "maks": "4.2'de yok (çalışmada ≥ 45 kg: 80–160 mg/gün · < 45 kg: 40–80 mg/gün)"
   }
  },
  "organ": {
   "bobrek": "Doz ayarı gerekmez.",
   "karaciger": "Daha düşük dozlar düşünülmeli; ağır yetmezlikte deneyim yok."
  },
  "fark": {
   "eri": [
    "Bipolar idame tedavisinde yeterli kanıt yok; manide yalnız kısa süreli tedavi (FDA: lityum/valproata ek idame onaylı).",
    "Şizofreni ve akut manide başlangıç dozu 40 mg × 2, yemekle (FDA'da şizofrenide 20 mg × 2)."
   ],
   "ped": [
    "10–17 yaşta maninin kısa süreli tedavisinde endike, ancak 18 yaş altında etkililik ve güvenlilik kanıtlanmamış (FDA'da onay yok)."
   ]
  }
 },
 "lurasidon": {
  "urun": "FERADON 40 MG FİLM KAPLI TABLET (muadil)",
  "firma": "NOBEL İLAÇ SAN. VE TİC. A.Ş.",
  "tarih": "26/03/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/Feradon40mgOnaylKB_07_04_2026.pdf",
  "eriskin": [
   "Şizofreni",
   "Bipolar I depresyon (monoterapi)",
   "Bipolar I depresyon (lityum/valproata ek)"
  ],
  "pediatrik": [
   "Şizofreni · 13–17 yaş",
   "Bipolar I depresyon (monoterapi) · 10–17 yaş"
  ],
  "pedNot": "Bipolar manide etkililiğe dair yeterli veri yok (KÜB 4.1).",
  "doz": {
   "eri": {
    "bas": "Şizofreni 40 mg/gün · bipolar depresyon 20 mg/gün (titrasyon gerekmez)",
    "maks": "Şizofreni 160 mg/gün · bipolar depresyon 120 mg/gün"
   },
   "ped": {
    "bas": "Şizofreni (13–17) 40 mg/gün · bipolar depresyon (10–17) 20 mg/gün",
    "maks": "80 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Hafif: ayar yok; CrCl < 50 (orta, ağır, son evre): başlangıç 20 mg, en fazla 80 mg/gün; son evrede fayda riskten ağır basmadıkça kullanılmamalı.",
   "karaciger": "Hafif: ayar yok; orta (Child-Pugh B): başlangıç 20 mg, en fazla 80 mg/gün; ağır (C): başlangıç 20 mg, en fazla 40 mg/gün."
  },
  "fark": {
   "eri": [
    "Son evre böbrek yetmezliğinde (KrKl < 15 mL/dk) yarar riskten ağır basmadıkça kullanılmamalıdır."
   ],
   "ped": []
  }
 },
 "amisulpirid": {
  "urun": "SOLIAN 200 MG TABLET",
  "firma": "LİLYUM İLAÇ VE KİMYA SAN. TİC. A.Ş.",
  "tarih": "28/03/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/Solian200mgTabletEk1311kubtemiz_07_05_2026.pdf",
  "eriskin": [
   "Psikozlar, özellikle akut/kronik şizofrenik bozukluklar (pozitif ve/veya negatif belirtiler)"
  ],
  "pediatrik": [],
  "pedNot": "15–18 yaşta önerilmez (etkililik/güvenlilik belirlenmemiş); 15 yaş altında kontrendike.",
  "doz": {
   "eri": {
    "bas": "Baskın negatif belirti: 50–300 mg/gün (optimum ~100) · akut psikotik/karma epizod: 400–800 mg/gün",
    "maks": "1200 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl 30–60: doz yarıya; 10–30: üçte bire; < 10: klinik deneyim yok, özel dikkat.",
   "karaciger": "Doz azaltımı gerekmez."
  },
  "fark": {
   "eri": [
    "KrKl < 10 mL/dk'da klinik deneyim yok, özel dikkat gerekir; kontrendikasyon değildir."
   ],
   "ped": []
  }
 },
 "klorpromazin": {
  "urun": "LARGACTİL 100 MG KAPLI TABLET",
  "firma": "LİLYUM İLAÇ VE KİMYA SANAYİ TİCARET ANONİM ŞİRKETİ",
  "tarih": "30/06/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/Ek1311kubtemiz_11_08_2026.pdf",
  "eriskin": [
   "Akut psikotik bozukluklar",
   "Kronik psikotik bozukluklar (şizofreni, kronik sanrılı/paranoid durumlar)"
  ],
  "pediatrik": [
   "Ajitasyon ve agresiflikle seyreden şiddetli davranış bozuklukları · > 6 yaş"
  ],
  "pedNot": "Tablet formu 6 yaş altında önerilmez; 1 yaş altında kontrendike (ani bebek ölümü sendromu). Ergende psikoz için ayrı pediatrik endikasyon yok.",
  "doz": {
   "eri": {
    "bas": "Düşük dozla başlanıp kademeli artırılır (aralık 25–300 mg/gün, 2–3'e bölünmüş)",
    "maks": "300 mg/gün; istisnai durumlarda 600 mg/gün"
   },
   "ped": {
    "bas": "1–5 mg/kg/gün, 2–3'e bölünmüş (> 6 yaş)",
    "maks": "5 mg/kg/gün"
   }
  },
  "organ": {
   "bobrek": "Şiddetli yetmezlikte birikim riski: yakın takip.",
   "karaciger": "Şiddetli yetmezlikte birikim riski: yakın takip (4.4'te ciddi hepatotoksisite uyarısı)."
  },
  "fark": {
   "eri": [
    "Erişkin dozu 25–300 mg/gün, istisnai durumlarda en fazla 600 mg/gün (FDA'da 1000 mg/gün'e kadar).",
    "Tablette yalnız akut ve kronik psikotik bozukluklarda endike; bipolar mani, bulantı-kusma ve hıçkırık endikasyonu yok.",
    "Kronik psikotik bozukluk endikasyonu şizofreni dışı kronik sanrılı durumları da kapsar."
   ],
   "ped": [
    "Çocukta yalnız 6 yaş üstünde ajitasyon ve agresiflikli şiddetli davranış bozukluklarında endike (FDA: 1–12 yaş).",
    "1 yaş altında kontrendikedir (FDA'da 6 ay altında kullanılmaz).",
    "6 yaş üstü çocukta 1–5 mg/kg/gün, 2–3 doza bölünmüş; sabit mg üst sınırı yok (FDA: 5–12 yaş maks 75 mg/gün)."
   ]
  }
 },
 "asenapin": {
  "ruhsatsiz": true
 },
 "brekspiprazol": {
  "urun": "REXULTI 4 MG FILM KAPLI TABLET",
  "firma": "ABDİ İBRAHİM OTSUKA İLAÇ SAN. VE TİC. A.Ş.",
  "tarih": "13/12/2024",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/REXULT4KB_09_01_2025.pdf",
  "eriskin": [
   "Şizofreni"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında güvenlilik ve etkililik kanıtlanmamış; veri yok.",
  "doz": {
   "eri": {
    "bas": "1 mg/gün (1–4. gün); 5–7. gün 2 mg, 8. gün 4 mg",
    "maks": "4 mg/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Orta–şiddetli: en fazla 3 mg/gün.",
   "karaciger": "Orta–şiddetli (Child-Pugh ≥ 7): en fazla 3 mg/gün."
  },
  "fark": {
   "eri": [
    "Yalnız erişkin şizofrenide endike; majör depresyonda ek tedavi ve Alzheimer ajitasyonu endikasyonları yok."
   ],
   "ped": [
    "Pediatrik endikasyon yok; 18 yaş altında güvenlilik ve etkililik kanıtlanmamış (FDA: şizofreni ≥ 13 yaş)."
   ]
  }
 },
 "kariprazin": {
  "urun": "KAPRAZDİ 1,5 MG SERT KAPSÜL (muadil)",
  "firma": "DEVA HOLDİNG ANONİM ŞİRKETİ",
  "tarih": "20/03/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/UYGUNKBKAPRAZD15_20_03_2025.pdf",
  "eriskin": [
   "Şizofreni",
   "Bipolar I depresyon"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında güvenlilik/etkililik belirlenmemiş; veri yok.",
  "doz": {
   "eri": {
    "bas": "1,5 mg/gün",
    "maks": "Şizofreni 6 mg/gün (1,5 mg artışlarla) · bipolar depresyon 3 mg/gün (15. günde 3 mg'a çıkılabilir)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl 30–89: ayar yok; < 30: önerilmez.",
   "karaciger": "Child-Pugh 5–9: ayar yok; ağır (10–15): önerilmez."
  },
  "fark": {
   "eri": [
    "Yalnız şizofreni ve bipolar I depresyonda endike; bipolar mani/karma dönem ve majör depresyonda ek tedavi endikasyonu yok."
   ],
   "ped": []
  }
 },
 "pimozid": {
  "urun": "NÖROFREN 2 MG TABLET (muadil)",
  "firma": "SANOFİ",
  "tarih": "23/02/2017",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/R08fKTLWSc7JW.pdf",
  "eriskin": [
   "Kronik şizofreni (uzun süreli idame; ajitasyonun baskın olmadığı hastalarda başlangıç tedavisi)",
   "Diğer psikozlar: paranoid durumlar, monosemptomatik hipokondriyak psikoz (4.2 doz bölümünde)",
   "Tourette bozukluğu (standart tedaviye yanıtsız motor/vokal tikler)"
  ],
  "pediatrik": [
   "Endikasyon ayrımı yapılmadan · > 12 yaş"
  ],
  "pedNot": "12 yaş altında yeterli çalışma yok, önerilmez.",
  "doz": {
   "eri": {
    "bas": "Kronik şizofreni 2–4 mg/gün · diğer psikozlar 4 mg/gün",
    "maks": "Şizofreni 20 mg/gün · diğer psikozlar 16 mg/gün (Tourette için ayrı erişkin doz yok)"
   },
   "ped": {
    "bas": "0,05 mg/kg/gün tek doz (> 12 yaş)",
    "maks": "0,2 mg/kg/gün, en fazla 10 mg/gün (3 günlük aralarla artış)"
   }
  },
  "organ": {
   "bobrek": "Dikkatli kullanılmalı.",
   "karaciger": "Dikkatli kullanılmalı."
  },
  "fark": {
   "eri": [
    "Ana endikasyon kronik şizofreni; diğer psikozlar (paranoid durumlar, monosemptomatik hipokondriyak psikoz) ve Tourette'te de endike.",
    "Maksimum doz şizofrenide 20 mg/gün, diğer psikozlarda 16 mg/gün (FDA'da Tourette için 10 mg/gün)."
   ],
   "ped": []
  }
 },
 "lityum": {
  "urun": "LITHURIL 300MG KAPSÜL",
  "firma": "KOÇAK FARMA İLAÇ VE KİMYA SANAYİ A.Ş.",
  "tarih": "01/11/2012",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/fe0aa77783730.pdf",
  "eriskin": [
   "Bipolar bozukluk / mani (tedavi ve profilaksi)",
   "Rekürent / unipolar depresyon (idame)",
   "Şizoaffektif bozukluk (akut ve idame)",
   "Küme (demet) baş ağrısı, kısa süreli (psikiyatri dışı)",
   "Nötropenide enfeksiyon insidansını azaltma (psikiyatri dışı)"
  ],
  "pediatrik": [],
  "pedNot": "12 yaş altında etkililik/güvenlilik bilinmediğinden kullanılmamalı; 12–17 yaş için ayrı doz verilmemiş.",
  "doz": {
   "eri": {
    "bas": "Ayrı başlangıç dozu yok; akut mani 1200–1800 mg/gün (3–4'e bölünmüş), idame 900–1200 mg/gün, unipolar/şizoaffektif 600–1800 mg/gün; yaşlıda başlangıç 300 mg ×1–2",
    "maks": "Serum düzeyi akut 0,8–1,2 · idame 0,6–1,0 mEq/L; maks idame 2,4 g/gün"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl 10–50: normal dozun %50–75'i; < 10: %25–50'si; diyaliz edilebilir. 4.3: ciddi böbrek hastalığında kontrendike.",
   "karaciger": "Bilgi yok."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: unipolar depresyonun idame tedavisi, şizoaffektif bozukluğun akut ve idame tedavisi.",
    "KrKl 10–50 mL/dk'da normal dozun %50–75'i, < 10 mL/dk'da %25–50'si önerilir; ciddi böbrek hastalığı kontrendikasyondur."
   ],
   "ped": [
    "12 yaş altında kullanılmamalıdır (FDA: ≥ 7 yaş)."
   ]
  }
 },
 "valproat": {
  "urun": "DEPAKİN CHRONO BT 500 MG UZUN ETKILI FILM TABLET",
  "firma": "Sanofi Sağlık Ürünleri Ltd. Şti.",
  "tarih": "06/11/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/Ekek4kubtemiz_352ee8fd-ebbe-4227-bb6d-cf9e6ca76155.pdf",
  "eriskin": [
   "Bipolar bozuklukta manik epizod (lityum kontrendike/tolere edilemiyorsa); yanıt verenlerde devam tedavisi düşünülebilir",
   "Epilepsi: jeneralize (absans, miyoklonik, tonik-klonik) ve parsiyel/sekonder jeneralize nöbetler (psikiyatri dışı)"
  ],
  "pediatrik": [
   "Epilepsi (psikiyatri dışı) · yaş sınırı yok; 500 mg ER tablet 6 yaş altına uygun değil"
  ],
  "pedNot": "Manide 18 yaş altında güvenlilik/etkililik değerlendirilmemiş. Kız çocukları ve doğurganlık çağındaki kadınlarda diğer tedaviler etkisiz/tolere edilemez değilse kullanılmamalı (Gebelik Önleme Programı); bipolar bozuklukta gebelikte kontrendike.",
  "doz": {
   "eri": {
    "bas": "Mani: 750 mg/gün veya 20 mg/kg/gün; hızla en düşük etkili doza çıkılır",
    "maks": "Belirtilmemiş; ortalama 1000–2000 mg/gün, > 45 mg/kg/gün dozlarda yakın izlem"
   },
   "ped": {
    "bas": "Mani: 18 yaş altında değerlendirilmemiş (epilepsi: 5–10 mg/kg/gün)",
    "maks": "Mani için yok (epilepsi ortalaması: çocuk 30, ergen 25 mg/kg/gün)"
   }
  },
  "organ": {
   "bobrek": "Doz azaltımı gerekebilir; hemodiyalizde doz artırımı gerekebilir (diyaliz edilebilir); hipoproteinemide serbest düzey artışı dikkate alınmalı.",
   "karaciger": "4.3: akut/kronik hepatit, kişisel/ailesel karaciğer hastalığı öyküsü, ağır karaciğer bozukluğunda kontrendike; salisilatlarla birlikte kullanılmamalı."
  },
  "fark": {
   "eri": [
    "Manide yalnız lityumun kontrendike olduğu veya tolere edilemediği durumlarda endike; migren profilaksisi endikasyonu yok.",
    "Manide üst doz tanımlanmamış; ortalama 1000–2000 mg/gün, 45 mg/kg/gün üzerinde yakın izlem (FDA: maks 60 mg/kg/gün).",
    "Böbrek yetmezliğinde doz azaltımı, hemodiyalizde doz artırımı gerekebilir."
   ],
   "ped": []
  }
 },
 "lamotrijin": {
  "urun": "LAMICTAL DC 100 MG ÇÖZÜNÜR/ÇIĞNEME TABLETI",
  "firma": "GLAXOSMİTHKLİNE İLAÇLARI SAN. VE TİC. A.Ş.",
  "tarih": "03/06/2022",
  "url": "https://titck.gov.tr/storage/Archive/2022/kubKtAttachments/Lamictal100KB_06b30164-c964-4d3e-a257-e4980f0965a9.pdf",
  "eriskin": [
   "Bipolar bozuklukta duygudurum ataklarının (özellikle depresif) önlenmesi · ≥ 18 yaş",
   "Epilepsi: parsiyel ve jeneralize (tonik-klonik, Lennox-Gastaut) nöbetler · ek tedavi veya monoterapi"
  ],
  "pediatrik": [
   "Epilepsi ek tedavi · 2–12 yaş",
   "Tipik absans nöbetinde monoterapi · 2–12 yaş",
   "Epilepsi ek tedavi veya monoterapi · ≥ 12 yaş"
  ],
  "pedNot": "Bipolar bozuklukta 18 yaş altında endike değil ve önerilmez (etkinlik gösterilemedi, intihar eğilimi bildirimleri arttı). 2 yaş altında önerilmez.",
  "doz": {
   "eri": {
    "bas": "Bipolar: 25 mg/gün (valproat ile 25 mg gün aşırı; indükleyici ile 50 mg/gün)",
    "maks": "Hedef 200 mg/gün (çalışmalarda 100–400 mg); valproat ile hedef 100 mg, klinik yanıta göre en fazla 200 mg/gün; indükleyici ile 6. hf 300 mg, gerekirse 7. hf 400 mg/gün"
   },
   "ped": {
    "bas": "Bipolar: < 18 yaş önerilmez. Epilepsi: ≥ 12 yaş erişkin şeması; 2–12 yaş kiloya göre (ör. 0,3 mg/kg/gün; valproat ile 0,15 mg/kg/gün)",
    "maks": "Epilepsi 2–12 yaş: idame en fazla 200 mg/gün (indükleyici ile 400 mg/gün)"
   }
  },
  "organ": {
   "bobrek": "Dikkatli kullanın; belirgin bozuklukta azaltılmış idame dozu yeterli olabilir; son dönemde başlangıç dozu eşzamanlı ilaçlara göre belirlenir.",
   "karaciger": "Başlangıç, artış ve idame dozları Child-Pugh B'de ~%50, Child-Pugh C'de ~%75 azaltılır."
  },
  "fark": {
   "eri": [
    "Karaciğer bozukluğunda doz Child-Pugh B'de yaklaşık %50, C'de %75 azaltılır (FDA: orta %25, asitli ağır %50).",
    "Valproatla hedef 100 mg/gün, gerekirse en fazla 200 mg/gün; monoterapide hedef 200 mg/gün (çalışmalarda 100–400 mg)."
   ],
   "ped": [
    "Bipolar bozuklukta 18 yaş altında endike değildir ve kullanımı önerilmez."
   ]
  }
 },
 "karbamazepin": {
  "urun": "TEGRETOL 200 MG TABLET",
  "firma": "NOVARTİS SAĞLIK GIDA VE TARIM ÜRÜNLERİ SAN. VE TİC. A.Ş.",
  "tarih": "24/11/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/onaylkbtb_01_12_2025.pdf",
  "eriskin": [
   "Lityuma yanıt vermeyen hastalarda manik depresif psikozun (bipolar bozukluk) profilaksisi",
   "Epilepsi: jeneralize tonik-klonik ve parsiyel nöbetler",
   "Trigeminal nevralji"
  ],
  "pediatrik": [
   "Epilepsi · çocuk ve ergen (yaş sınırı yok; tablet < 5 yaşta önerilmez)"
  ],
  "pedNot": "Psikiyatrik endikasyonda pediatrik doz verilmemiş; çocuk dozu yalnızca epilepsi için.",
  "doz": {
   "eri": {
    "bas": "Bipolar profilaksi: 400 mg/gün (bölünmüş); epilepsi: 100–200 mg günde 1–2 kez",
    "maks": "Bipolar: 1600 mg/gün (olağan 400–600 mg/gün); epilepsi: genellikle 800–1200, bazen 1600–2000 mg/gün; trigeminal nevralji: 1200 mg/gün"
   },
   "ped": {
    "bas": "Epilepsi: kademeli artış; idame 10–20 mg/kg/gün (5–10 yaş 400–600, 10–15 yaş 600–1000, > 15 yaş 800–1200 mg/gün)",
    "maks": "≤ 6 yaş 35 mg/kg/gün; 6–15 yaş 1000 mg/gün; > 15 yaş 1200 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Farmakokinetik veri yok; doz önerisi verilmemiş.",
   "karaciger": "Farmakokinetik veri yok; doz önerisi verilmemiş (hepatik porfiri öyküsünde kontrendike)."
  },
  "fark": {
   "eri": [
    "Akut mani endikasyonu yok; yalnız lityuma yanıtsız hastalarda manik depresif psikoz profilaksisi (FDA: akut mani/karma).",
    "Bipolar profilakside olağan doz 400–600 mg/gün, en fazla 1600 mg/gün; 4–12 µg/mL düzeyi yalnız epilepsi için verilir."
   ],
   "ped": []
  }
 },
 "okskarbazepin": {
  "urun": "TRILEPTAL 300 MG FILM KAPLI TABLET",
  "firma": "NOVARTIS SAĞLIK GIDA VE TARIM ÜRÜNLERI SAN.VE TIC.A.Ş.",
  "tarih": "27/05/2024",
  "url": "https://titck.gov.tr/storage/Archive/2024/kubKtAttachments/TRLEPTAL300mgfilmkapltabletKUB_37994d2e-aba8-480c-bd98-1bd0c5c800bd.pdf",
  "eriskin": [
   "Epilepsi: kısmi nöbetler (ikincil yaygınlaşan dahil) ve yaygın tonik-klonik nöbetler · monoterapi veya ek tedavi"
  ],
  "pediatrik": [
   "Epilepsi (aynı nöbet tipleri) · ≥ 6 yaş"
  ],
  "pedNot": "6 yaş altında önerilmez. Psikiyatrik endikasyon yok.",
  "doz": {
   "eri": {
    "bas": "600 mg/gün (2 doza bölünmüş)",
    "maks": "2400 mg/gün (haftada en fazla 600 mg/gün artış)"
   },
   "ped": {
    "bas": "8–10 mg/kg/gün (2 doza bölünmüş)",
    "maks": "46 mg/kg/gün (haftada en fazla 10 mg/kg/gün artış; ortalama idame 30 mg/kg/gün)"
   }
  },
  "organ": {
   "bobrek": "CrCl < 30 mL/dk: normal başlangıç dozunun yarısı (300 mg/gün), yavaş artırın.",
   "karaciger": "Hafif–orta: doz ayarı gerekmez; şiddetli: deneyim yok, dikkatli."
  },
  "fark": {
   "eri": [],
   "ped": [
    "Epilepside 6 yaş altında önerilmez (FDA: epilepsi ≥ 4 yaş)."
   ]
  }
 },
 "melatonin": {
  "urun": "MELOGEN 1 MG/ML ORAL ÇÖZELTİ",
  "firma": "GENSU PHARMA İLAÇ SAN. VE TİC. A.Ş.",
  "tarih": "10/09/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/uygunkb_116bcf3a-8dbb-4580-81b4-1e48ad222f47.pdf",
  "eriskin": [
   "Jet lag'e bağlı sirkadiyen ritim uyku bozukluğu · kısa süreli"
  ],
  "pediatrik": [
   "Otizm spektrum bozukluğu ve/veya Smith-Magenis sendromunda, uyku hijyeni yetersizse gecikmiş uyku başlangıçlı uykusuzluk · 2–18 yaş"
  ],
  "pedNot": "0–2 yaşta kullanımı yok. En az 6 ayda bir yeniden değerlendirme.",
  "doz": {
   "eri": {
    "bas": "Jet lag: 3 mg/gün, yatma saatinde, 5 gün",
    "maks": "6 mg/gün (3 mg yetersizse); saat 20.00'den önce veya 04.00'ten sonra alınmaz"
   },
   "ped": {
    "bas": "2 mg (2 mL), yatmadan 30–60 dk önce",
    "maks": "Sabit 2 mg/gün; doz artırımı tanımlanmamış"
   }
  },
  "organ": {
   "bobrek": "Araştırılmamış; dikkatli kullanın.",
   "karaciger": "Klirens azalır; kullanımı önerilmez."
  },
  "fark": {
   "eri": [
    "Oral çözelti erişkinde yalnız jet lag'e bağlı sirkadiyen ritim uyku bozukluğunda ruhsatlı; 55 yaş üstü uykusuzluk endikasyonu yok.",
    "Jet lag'de 5 gün boyunca 3 mg/gün, yetersizse 6 mg/gün; yatma saatinde alınır."
   ],
   "ped": [
    "2–18 yaşta otizm spektrum bozukluğu ve/veya Smith-Magenis sendromunda gecikmiş uyku başlangıçlı uykusuzlukta ruhsatlı (oral çözelti).",
    "Çocukta doz sabit 2 mg/gün, yatmadan 30–60 dk önce; en az 6 ayda bir yeniden değerlendirilir."
   ]
  }
 },
 "hidroksizin": {
  "urun": "ATARAX 25 MG FİLM KAPLI TABLET",
  "firma": "AVİXA İLAÇ SAN. VE TİC. A.Ş.",
  "tarih": "28/11/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/yaynlanacakatarax25Ek21312kub_25_12_2025.pdf",
  "eriskin": [
   "Anksiyetenin semptomatik tedavisi · ≥ 18 yaş",
   "Kaşıntının semptomatik tedavisi"
  ],
  "pediatrik": [
   "Kaşıntı · ≥ 12 ay (film tablet ≥ 6 yaş)"
  ],
  "pedNot": "Anksiyete endikasyonu yalnız ≥ 18 yaş. 12 aydan küçüklerde veri yok.",
  "doz": {
   "eri": {
    "bas": "Anksiyete: 50 mg/gün, üçe bölünmüş (12,5 – 12,5 – 25 mg)",
    "maks": "100 mg/gün (yaşlıda 50 mg/gün)"
   },
   "ped": {
    "bas": "Kaşıntı: 1–2 mg/kg/gün, bölünmüş",
    "maks": "≤ 40 kg: 2 mg/kg/gün; > 40 kg: 100 mg/gün"
   }
  },
  "organ": {
   "bobrek": "GFR 30–<60: dozun %50'si; < 30: %25; diyalizdeki son dönem: %25, haftada 3 kez",
   "karaciger": "Günlük dozu %33 azaltın."
  },
  "fark": {
   "eri": [
    "Premedikasyonda sedasyon endikasyonu yok; yalnız anksiyete ve kaşıntıda endike.",
    "GFR 30–<60 mL/dk'da dozun %50'si, < 30 mL/dk'da ve diyalizde %25'i verilir (diyalizde haftada 3 kez)."
   ],
   "ped": [
    "Anksiyete endikasyonu 18 yaş ve üzerinde; çocukta yalnız 12 ay üzeri kaşıntıda endike (FDA: çocukta anksiyete ve sedasyon da)."
   ]
  }
 },
 "klonazepam": {
  "urun": "RIVOTRIL 2 MG TABLET",
  "firma": "DEVA HOLDING A.Ş.",
  "tarih": "28/02/2013",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/d299c65055855.pdf",
  "eriskin": [
   "Epilepsi: absans, Lennox-Gastaut, miyoklonik ve atonik nöbetler (1. basamak); infantil spazm (2. basamak); tonik-klonik ve parsiyel nöbetler (3. basamak)"
  ],
  "pediatrik": [
   "Epilepsi · yenidoğandan itibaren (yaşa göre doz)"
  ],
  "pedNot": "Psikiyatrik endikasyon yok.",
  "doz": {
   "eri": {
    "bas": "Epilepsi: ≤ 1 mg/gün (3'e bölünmüş); 3 günde bir 0,5 mg artış; idame genellikle 3–6 mg/gün",
    "maks": "20 mg/gün"
   },
   "ped": {
    "bas": "0–5 yaş 0,25 mg/gün; 5–12 yaş ≤ 0,5 mg/gün",
    "maks": "İdame: 0–1 yaş 0,5–1; 1–5 yaş 1–3; 5–12 yaş 3–6 mg/gün"
   }
  },
  "organ": {
   "bobrek": "Farmakokinetiğe göre doz ayarı gerekmez.",
   "karaciger": "Ağır yetmezlikte kontrendike; diğerlerinde veri yok."
  },
  "fark": {
   "eri": [
    "Panik bozukluk endikasyonu yok; yalnız epilepside endike (erişkinde başlangıç ≤ 1 mg/gün, maksimum 20 mg/gün)."
   ],
   "ped": []
  }
 },
 "lorazepam": {
  "urun": "ATIVAN EXPIDET 1 MG TABLET",
  "firma": "PFİZER PFE İLAÇLARI A.Ş.",
  "tarih": "26/02/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/ATIVAN1mgKB_26_02_2025.pdf",
  "eriskin": [
   "Somatik ve psikiyatrik belirtilerle ilişkili anksiyete, gerginlik ve kaygı · kısa süreli",
   "Uykusuzluk · kısa süreli",
   "Ameliyat öncesi anksiyete (4.2'de doz verilmiş)"
  ],
  "pediatrik": [],
  "pedNot": "12 yaş altında güvenlilik ve etkinlik saptanmamış; kullanımı tavsiye edilmez.",
  "doz": {
   "eri": {
    "bas": "Anksiyete: 1 mg ×2–3 (2–3 mg/gün); uykusuzluk: 1–2 mg yatarken",
    "maks": "Ağır vakada ve psikiyatride 2,5 mg ×3–4 (10 mg/gün); anksiyetede azaltma dahil genellikle ≤ 8–12 hafta, uykusuzlukta ≤ 4 hafta"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Yanıta göre dikkatli ayar; daha düşük doz yeterli olabilir.",
   "karaciger": "Şiddetli yetmezlik ve/veya ensefalopatide kullanılmaz; diğerlerinde düşük doz, sık kontrol."
  },
  "fark": {
   "eri": [
    "Türkiye'de ek endikasyon: uykusuzluk (yatarken 1–2 mg, gerekirse 2,5 mg; azaltma dahil en fazla 4 hafta).",
    "Şiddetli karaciğer yetmezliği ve/veya ensefalopatide kullanılmamalıdır."
   ],
   "ped": []
  }
 },
 "buspiron": {
  "urun": "BUSPON 5 MG KAPSÜL",
  "firma": "DEVA HOLDING A.Ş.",
  "tarih": "03/05/2012",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/f6cce59971969.pdf",
  "eriskin": [
   "Jeneralize anksiyetenin semptomatik tedavisi"
  ],
  "pediatrik": [],
  "pedNot": "18 yaşından küçüklerde kullanılmamalıdır.",
  "doz": {
   "eri": {
    "bas": "5 mg günde 2–3 kez (10–15 mg/gün)",
    "maks": "45 mg/gün (optimum 15–30 mg/gün)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Doz azaltılmalı; CrCl ≤ 20 mL/dk veya kreatinin > 200 µmol/L'de kontrendike (4.3).",
   "karaciger": "Doz azaltılmalı (4.2); 4.3'te karaciğer fonksiyon bozukluğu kontrendikasyonlar arasında."
  },
  "fark": {
   "eri": [
    "Maksimum doz 45 mg/gün (FDA'da 60 mg)."
   ],
   "ped": [
    "18 yaş altında kullanılmamalıdır."
   ]
  }
 },
 "diazepam": {
  "urun": "NERVİUM 5 MG TABLET",
  "firma": "SABA İLAÇ SANAYİ VE TİCARET A.Ş.",
  "tarih": "08/09/2014",
  "url": "https://titck.gov.tr/storage/kubKtAttachments/6fdbc7c785078.pdf",
  "eriskin": [
   "Nörotik anksiyetenin kısa süreli semptomatik tedavisi",
   "Akut alkol yoksunluğunda ajitasyon, tremor, deliryum tremens ve halüsinasyonlar",
   "Lokal patolojiye bağlı refleks kas spazmı; üst motor nöron spastisitesi",
   "Bazı epilepsi türleri",
   "Tetanozda kas spazmı",
   "Oral ve ameliyat öncesi premedikasyon"
  ],
  "pediatrik": [
   "Serebral spastisiteye bağlı gerginlik ve sinirlilik · çocuk (yaş sınırı belirtilmemiş; < 6 ay kontrendike)"
  ],
  "pedNot": "6 aydan küçüklerde kontrendike; 4.2'de çocuk dozu verilmemiş.",
  "doz": {
   "eri": {
    "bas": "En düşük etkili doz; anksiyete 5–30 mg/gün, 2–3 doza bölünmüş",
    "maks": "Anksiyete 30 mg/gün (aralığın üst sınırı); alkol yoksunluğu 5–20 mg/gün; sedatif-hipnotik 5–15 mg yatarken; yaşlıda erişkin dozunun yarısı"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Metabolitler böbrekten atılır; toksisite riski nedeniyle dikkatli kullanın.",
   "karaciger": "Ciddi karaciğer yetmezliğinde kontrendike."
  },
  "fark": {
   "eri": [
    "Anksiyolitik doz 5–30 mg/gün, 2–3 doza bölünmüş (FDA'da en fazla 40 mg/gün)."
   ],
   "ped": []
  }
 },
 "alprazolam": {
  "urun": "XANAX 0.5 MG TABLET",
  "firma": "PFİZER İLAÇLARI LTD. ŞTİ.",
  "tarih": "23/06/2026",
  "url": "https://titck.gov.tr/storage/Archive/2026/kubKtAttachments/1311kub_23_06_2026.pdf",
  "eriskin": [
   "Anksiyetenin kısa süreli semptomatik tedavisi (yalnız şiddetli, engelleyici durumlarda)"
  ],
  "pediatrik": [],
  "pedNot": "18 yaş altında etkinlik ve güvenlilik kanıtlanmamış; çocuklarda kullanımı tavsiye edilmez.",
  "doz": {
   "eri": {
    "bas": "0,25–0,5 mg günde 3 kez",
    "maks": "Olağan 0,5–3 mg/gün (bölünmüş); açık tavan yok; en fazla 2–4 hafta"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "Dikkatli kullanın.",
   "karaciger": "Şiddetli yetmezlikte kontrendike; diğerlerinde dikkatli."
  },
  "fark": {
   "eri": [
    "Panik bozukluk endikasyonu yok; yalnız erişkinde anksiyetenin kısa süreli semptomatik tedavisinde endike.",
    "Şiddetli karaciğer yetmezliğinde kontrendikedir (FDA'da düşük dozla başlanır)."
   ],
   "ped": [
    "18 yaş altında kullanımı tavsiye edilmez."
   ]
  }
 },
 "pregabalin": {
  "urun": "LYRICA 150 MG KAPSÜL",
  "firma": "VİATRİS İLAÇLARI LİMİTED ŞİRKETİ",
  "tarih": "24/11/2025",
  "url": "https://titck.gov.tr/storage/Archive/2025/kubKtAttachments/LYRCA150KBTEMZ_25_11_2025.pdf",
  "eriskin": [
   "Yaygın anksiyete bozukluğu",
   "Periferik nöropatik ağrı",
   "Parsiyel nöbetlerde ek tedavi (epilepsi)",
   "Fibromiyalji"
  ],
  "pediatrik": [],
  "pedNot": "12 yaş altında ve 12–17 yaşta güvenlilik ve etkinlik belirlenmemiş; pozoloji önerisi yok.",
  "doz": {
   "eri": {
    "bas": "YAB: 150 mg/gün (2–3 doza bölünmüş)",
    "maks": "600 mg/gün (haftalık 300 → 450 → 600 mg)"
   },
   "ped": null
  },
  "organ": {
   "bobrek": "CrCl ≥ 60: 150–600; 30–<60: 75–300; 15–<30: 25–50 (maks 150); < 15: 25–75 mg/gün; hemodiyaliz sonrası 25–100 mg ek doz",
   "karaciger": "Doz ayarı gerekmez."
  },
  "fark": {
   "eri": [],
   "ped": []
  }
 }
};
