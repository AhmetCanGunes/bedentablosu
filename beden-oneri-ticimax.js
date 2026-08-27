/* === KADİRBÜYÜKKAYA BEDEN ÖNERİ (güvenli sürüm) === */
try {
/* KadirBüyükkaya — Beden Öneri (tek dosya) */
(function () {
  if (window.__bedenOneriYuklendi) return;
  window.__bedenOneriYuklendi = true;
  var BO_CSS = `  /* ===================================================================
     KADİRBÜYÜKKAYA BEDEN ÖNERİ WIDGET — Stiller
     Tüm sınıflar "bo-" ön ekiyle başlar (sitendeki stillerle çakışmaz).
  =================================================================== */
  :root {
    --bo-siyah:#111; --bo-metin:#1d1d1f; --bo-gri:#8a8a8e; --bo-acik-gri:#d8d8db;
    --bo-cizgi:#e6e6e8; --bo-arka:#fff; --bo-vurgu:#e8743b; --bo-secili:#111;
    --bo-hata:#c0362c; --bo-radius:6px;
  }
  /* --- Tetikleyici buton --- */
  .bo-tetik{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:11px;
    background:linear-gradient(135deg,#222,#000);color:#fff;border:none;cursor:pointer;
    font:600 15px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;letter-spacing:.01em;
    padding:15px 26px;border-radius:10px;box-shadow:0 6px 18px rgba(0,0,0,.18);
    transition:transform .15s ease,box-shadow .15s ease;}
  .bo-tetik:hover{transform:translateY(-2px);box-shadow:0 11px 26px rgba(0,0,0,.26);}
  .bo-tetik:active{transform:translateY(0);}
  .bo-tetik svg{width:20px;height:20px;flex:0 0 auto;}
  .bo-tetik-yazi{display:flex;flex-direction:column;align-items:flex-start;line-height:1.15;}
  .bo-tetik-alt{font-weight:500;font-size:11px;opacity:.72;margin-top:3px;letter-spacing:.02em;}
  /* parlama efekti (hover'da soldan sağa geçen ışık) */
  .bo-tetik::after{content:"";position:absolute;top:0;left:-60%;width:45%;height:100%;
    background:linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent);
    transform:skewX(-20deg);}
  .bo-tetik:hover::after{left:130%;transition:left .6s ease;}

  /* Dikkat çeken nazik nabız (isteğe bağlı: class ekle) */
  @keyframes bo-nabiz{0%,100%{box-shadow:0 6px 18px rgba(0,0,0,.18);}50%{box-shadow:0 6px 26px rgba(0,0,0,.30);}}
  .bo-tetik--nabiz{animation:bo-nabiz 2.2s ease-in-out infinite;}

  /* Stil çeşitleri */
  .bo-tetik--vurgu{background:linear-gradient(135deg,#f08a4b,#e8743b);box-shadow:0 6px 18px rgba(232,116,59,.38);}
  .bo-tetik--vurgu:hover{box-shadow:0 11px 26px rgba(232,116,59,.46);}
  .bo-tetik--pill{border-radius:999px;}
  .bo-tetik--ghost{background:#fff;color:#111;border:1.6px solid #111;box-shadow:none;}
  .bo-tetik--ghost:hover{background:#111;color:#fff;}
  .bo-tetik--ghost::after{display:none;}

  /* Link tarzı (beden seçeneklerinin yanına koymak için) */
  .bo-tetik-link{display:inline-flex;align-items:center;gap:7px;background:none;border:none;cursor:pointer;
    color:#111;font:600 14px/1 system-ui,sans-serif;text-decoration:underline;text-underline-offset:3px;padding:6px 0;}
  .bo-tetik-link svg{width:16px;height:16px;}
  .bo-tetik-link:hover{color:var(--bo-vurgu);}

  .bo-overlay{position:fixed;inset:0;z-index:9999;background:rgba(20,20,22,.55);display:none;
    align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .2s ease;}
  .bo-overlay.bo-acik{display:flex;opacity:1;}

  .bo-modal{background:var(--bo-arka);width:100%;max-width:540px;border-radius:10px;
    box-shadow:0 24px 60px rgba(0,0,0,.28);padding:30px 38px 34px;position:relative;
    font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:var(--bo-metin);
    max-height:92vh;overflow-y:auto;transform:translateY(8px);transition:transform .2s ease;}
  .bo-overlay.bo-acik .bo-modal{transform:translateY(0);}

  .bo-ust{display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:6px;}
  .bo-geri,.bo-kapat{position:absolute;top:50%;transform:translateY(-50%);background:none;border:none;
    cursor:pointer;color:var(--bo-metin);font:600 14px/1 system-ui,sans-serif;padding:6px;}
  .bo-geri{left:0;display:none;} .bo-kapat{right:0;font-size:22px;line-height:1;}
  .bo-geri.bo-gorunur{display:inline-block;}
  .bo-marka{text-align:center;}
  .bo-marka-ad{font:700 22px/1 system-ui,sans-serif;letter-spacing:-.02em;}
  .bo-marka-alt{font:600 14px/1 system-ui,sans-serif;margin-top:7px;color:var(--bo-metin);}
  .bo-marka-urun{font-size:12px;color:var(--bo-gri);margin-top:5px;}

  .bo-baslik{font-family:"Playfair Display",Georgia,"Times New Roman",serif;font-weight:600;
    font-size:30px;line-height:1.15;margin:26px 0 0;}
  .bo-baslik-cizgi{height:1px;background:var(--bo-cizgi);margin:18px 0 18px;}
  .bo-aciklama{color:var(--bo-gri);font-size:14px;line-height:1.5;margin:0 0 22px;}

  .bo-alan{margin-bottom:18px;}
  .bo-etiket{display:block;font-size:11px;font-weight:600;letter-spacing:.08em;color:var(--bo-gri);
    text-transform:uppercase;margin-bottom:8px;}
  .bo-input{width:100%;box-sizing:border-box;border:1px solid var(--bo-acik-gri);border-radius:var(--bo-radius);
    padding:15px 16px;font-size:16px;color:var(--bo-metin);background:#fff;outline:none;
    transition:border-color .15s ease;-moz-appearance:textfield;}
  .bo-input::-webkit-outer-spin-button,.bo-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
  .bo-input:focus{border-color:var(--bo-siyah);} .bo-input.bo-hatali{border-color:var(--bo-hata);}
  .bo-input::placeholder{color:var(--bo-acik-gri);}
  .bo-uyari{color:var(--bo-hata);font-size:12.5px;margin-top:6px;display:none;}
  .bo-uyari.bo-gorunur{display:block;}

  .bo-kartlar{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:22px;}
  .bo-kart{border:1px solid var(--bo-acik-gri);border-radius:var(--bo-radius);background:#fff;cursor:pointer;
    padding:14px 8px 16px;text-align:center;transition:border-color .15s ease,box-shadow .15s ease;
    display:flex;flex-direction:column;align-items:center;gap:10px;}
  .bo-kart:hover{border-color:#b9b9bd;}
  .bo-kart.bo-secili{border-color:var(--bo-secili);box-shadow:inset 0 0 0 1px var(--bo-secili);}
  .bo-kart svg{width:100%;height:96px;}
  .bo-kart-ic-etiket{font-size:10.5px;color:var(--bo-gri);}
  .bo-kart-ad{font-size:14px;font-weight:600;color:var(--bo-metin);}

  .bo-devam{width:100%;border:none;cursor:pointer;background:var(--bo-siyah);color:#fff;
    font:600 15px/1 system-ui,sans-serif;padding:18px;border-radius:var(--bo-radius);transition:opacity .15s ease;}
  .bo-devam:hover{opacity:.9;}
  .bo-devam:disabled{background:#c9c9cd;cursor:not-allowed;opacity:1;}

  .bo-sonuc{text-align:center;padding:6px 0 0;}
  .bo-sonuc-beden{font-family:"Playfair Display",Georgia,serif;font-weight:600;font-size:76px;line-height:1;
    margin:14px 0 6px;color:var(--bo-siyah);}
  .bo-sonuc-not{color:var(--bo-gri);font-size:14px;line-height:1.55;max-width:380px;margin:0 auto 12px;}
  .bo-sonuc-ikincil{font-size:13px;color:var(--bo-metin);background:#f4f4f5;border-radius:var(--bo-radius);
    padding:10px 14px;display:inline-block;margin-bottom:22px;}
  .bo-bastan{background:none;border:none;cursor:pointer;color:var(--bo-gri);
    font:600 13px/1 system-ui,sans-serif;margin-top:14px;text-decoration:underline;padding:6px;}
  .bo-bastan:hover{color:var(--bo-metin);}
  .bo-alt-imza{position:absolute;left:38px;bottom:14px;font-size:11px;color:#c4c4c8;}

  /* Beden tablosu linki */
  .bo-tablo-link{display:inline-flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;
    color:var(--bo-metin);font:600 13px/1 system-ui,sans-serif;text-decoration:underline;
    padding:6px;margin-top:2px;}
  .bo-tablo-link:hover{color:#000;}
  .bo-tablo-link svg{width:15px;height:15px;}

  /* Beden Öneri paneli (ana ekran) */
  .bo-tablo-katman{display:none;}
  .bo-tablo-katman.bo-acik{display:block;}
  /* Giriş uyarısı */
  .bo-intro{display:none;position:absolute;inset:0;background:#fff;border-radius:10px;z-index:10;
    align-items:center;justify-content:center;padding:34px;}
  .bo-intro.bo-acik{display:flex;}
  .bo-intro-kutu{text-align:center;max-width:400px;}
  .bo-intro-ikon{color:var(--bo-vurgu);margin-bottom:16px;}
  .bo-intro-ikon svg{width:40px;height:40px;}
  .bo-intro-metin{font-size:15px;line-height:1.6;color:var(--bo-metin);margin:0 0 24px;}
  .bo-intro .bo-devam{width:auto;padding:15px 40px;}
  .bo-modal.bo-panel-modu{max-width:660px;}
  .bo-modal.bo-panel-modu > .bo-ust,
  .bo-modal.bo-panel-modu > .bo-adim,
  .bo-modal.bo-panel-modu > .bo-alt-imza{display:none;}
  .bo-tablo-ustbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;}
  .bo-tablo-baslik{font:700 22px/1 system-ui,sans-serif;letter-spacing:.02em;margin:0;text-transform:uppercase;}
  .bo-tablo-kapat{background:none;border:none;cursor:pointer;font-size:24px;line-height:1;color:var(--bo-metin);padding:4px;}
  /* KOLEKSİYON / FİTLER seçicileri */
  .bo-tablo-secimler{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:18px;}
  .bo-tablo-secimler.bo-tek{grid-template-columns:1fr;}
  .bo-tablo-secim{display:block;border:1px solid var(--bo-metin);border-radius:2px;padding:10px 14px;position:relative;}
  .bo-tablo-secim > span{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--bo-metin);margin-bottom:4px;}
  .bo-tablo-secim select{width:100%;border:none;background:none;font:400 16px/1.2 system-ui,sans-serif;
    color:var(--bo-metin);outline:none;-webkit-appearance:none;appearance:none;cursor:pointer;padding-right:18px;}
  .bo-tablo-secim input{width:100%;box-sizing:border-box;border:none;background:none;
    font:400 16px/1.2 system-ui,sans-serif;color:var(--bo-metin);outline:none;-moz-appearance:textfield;}
  .bo-tablo-secim input::-webkit-outer-spin-button,.bo-tablo-secim input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}
  .bo-tablo-secim input::placeholder{color:var(--bo-acik-gri);}
  .bo-tablo-secim.bo-hatali{border-color:var(--bo-hata);}
  .bo-olcu-satir{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
  .bo-olcu-alan::after{display:none;}
  .bo-tablo-secim::after{content:"⌄";position:absolute;right:14px;top:50%;transform:translateY(-30%);color:var(--bo-metin);pointer-events:none;font-size:16px;}
  /* Öneri kısmı */
  .bo-tablo-oneri{background:#fff4ee;border:1px solid #f6d6c4;border-radius:var(--bo-radius);
    padding:12px 16px;margin-bottom:18px;font-size:14px;color:var(--bo-metin);}
  .bo-tablo-oneri b{color:var(--bo-vurgu);font-size:16px;}
  /* Tablo kutusu */
  .bo-tablo-kutu{border:1px solid var(--bo-cizgi);border-radius:8px;padding:16px;}
  .bo-tablo-fitad{font:700 16px/1 system-ui,sans-serif;margin:0 0 14px;text-align:center;}
  .bo-tablo-sar{overflow-x:auto;-webkit-overflow-scrolling:touch;}
  .bo-tablo{width:100%;border-collapse:collapse;font-size:13.5px;min-width:420px;}
  .bo-tablo th,.bo-tablo td{padding:12px 8px;text-align:center;border-bottom:1px solid var(--bo-cizgi);white-space:nowrap;}
  .bo-tablo thead th{background:#f5f5f6;font-weight:700;color:var(--bo-metin);}
  .bo-tablo td.bo-olcuad,.bo-tablo th:first-child{text-align:left;font-weight:700;color:var(--bo-metin);
    background:#fafafa;position:sticky;left:0;}
  .bo-tablo .bo-vsutun{background:#fff4ee;color:var(--bo-vurgu);font-weight:700;}
  .bo-tablo thead th.bo-vsutun{background:#fde4d6;}
  .bo-tablo-not{color:var(--bo-gri);font-size:12px;line-height:1.5;margin:14px 0 0;}
  @media (max-width:560px){ .bo-tablo-secimler{grid-template-columns:1fr;} }

  /* Stok uyarısı */
  .bo-stok{font-size:13.5px;line-height:1.5;background:#fff4ee;border:1px solid #f6d6c4;color:#9a4a1f;
    border-radius:var(--bo-radius);padding:12px 14px;margin:8px auto 16px;max-width:360px;}
  .bo-stok b{color:#7a3a18;}
  /* Sonuç altı linkler */
  .bo-sonuc-linkler{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:4px;}
  /* E-posta yakalama */
  .bo-eposta{max-width:360px;margin:16px auto 0;text-align:left;}
  .bo-eposta-baslik{font-size:13px;color:var(--bo-metin);margin:0 0 8px;}
  .bo-eposta-satir{display:flex;gap:8px;}
  .bo-eposta-satir .bo-input{padding:12px 14px;font-size:14px;}
  .bo-eposta-tesekkur{color:#2e7d32;font-size:13px;margin:8px 0 0;}
  /* Geri bildirim */
  .bo-geri-bildirim{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;
    margin-top:22px;font-size:13px;color:var(--bo-gri);}
  .bo-gb-btn{background:#fff;border:1px solid var(--bo-acik-gri);border-radius:8px;cursor:pointer;
    font-size:17px;line-height:1;padding:6px 11px;transition:border-color .15s ease,transform .1s ease;}
  .bo-gb-btn:hover{border-color:var(--bo-siyah);transform:translateY(-1px);}
  .bo-gb-btn.bo-secili{border-color:var(--bo-vurgu);background:#fff4ee;}
  .bo-gb-tesekkur{color:#2e7d32;}
  /* Dış sayfalarda kullanılacak "senin bedenin" rozeti */
  .bo-beden-rozet{display:inline-flex;align-items:center;gap:5px;background:#111;color:#fff;
    font:600 11px/1 system-ui,sans-serif;border-radius:20px;padding:5px 10px;}

  .bo-adim{display:none;} .bo-adim.bo-aktif{display:block;}

  /* Ürün tipi seçim ızgarası (ikon üstte, isim altta) */
  .bo-urun-liste{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin-bottom:6px;}
  .bo-urun-secim{flex:0 1 calc(33.333% - 8px);min-width:118px;
    display:flex;flex-direction:column;align-items:center;gap:10px;
    border:1px solid var(--bo-acik-gri);border-radius:var(--bo-radius);background:#fff;cursor:pointer;
    padding:18px 10px 16px;font:600 14px/1 system-ui,sans-serif;color:var(--bo-metin);
    transition:border-color .15s ease,box-shadow .15s ease;}
  .bo-urun-secim:hover{border-color:var(--bo-siyah);box-shadow:inset 0 0 0 1px var(--bo-siyah);}
  .bo-urun-ikon{width:64px;height:64px;}
  .bo-urun-ikon svg{width:100%;height:100%;}
  .bo-urun-isim{text-align:center;}

  @media (max-width:560px){
    .bo-overlay{padding:0;align-items:flex-end;}
    .bo-modal{padding:20px 16px 24px;border-radius:16px 16px 0 0;max-height:94vh;width:100%;}
    .bo-modal.bo-panel-modu{max-width:100%;}
    .bo-baslik{font-size:24px;} .bo-kartlar{gap:8px;}
    .bo-kart{padding:10px 4px 12px;} .bo-kart svg{height:80px;}
    .bo-alt-imza{left:20px;} .bo-sonuc-beden{font-size:64px;}
    /* Panel öğeleri */
    .bo-tablo-katman .bo-tablo-baslik,.bo-tablo-ustbar .bo-tablo-baslik{font-size:19px;}
    .bo-tablo-secimler{grid-template-columns:1fr;gap:10px;margin-bottom:14px;}
    .bo-olcu-satir{gap:10px;}
    .bo-tablo-secim{padding:9px 12px;}
    .bo-tablo-secim > span{font-size:10px;}
    .bo-tablo-secim select,.bo-tablo-secim input{font-size:16px;}
    .bo-tablo-oneri{font-size:13px;padding:11px 13px;}
    .bo-tablo-kutu{padding:12px;}
    .bo-tablo-fitad{font-size:15px;}
    .bo-tablo{min-width:340px;font-size:13px;}
    .bo-tablo th,.bo-tablo td{padding:10px 6px;}
    .bo-tablo-not{font-size:11.5px;}
    /* Giriş uyarısı */
    .bo-intro{padding:24px 18px;}
    .bo-intro-metin{font-size:14px;}
    .bo-intro .bo-devam{width:100%;}
  }
  @media (max-width:380px){
    .bo-olcu-satir{grid-template-columns:1fr;}
    .bo-tablo{min-width:300px;}
    .bo-tablo th,.bo-tablo td{padding:9px 5px;font-size:12.5px;}
  }`;
  var BO_HTML = `  <div class="bo-overlay" id="bo-overlay" role="dialog" aria-modal="true" aria-label="Beden Öneri">
    <div class="bo-modal">

      <!-- Giriş uyarısı (butona basınca ilk çıkar) -->
      <div class="bo-intro" id="bo-intro">
        <div class="bo-intro-kutu">
          <div class="bo-intro-ikon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </div>
          <p class="bo-intro-metin">Burada girilen değerlere göre verilen bilgiler tahminidir. Daha detaylı bilgi için lütfen Beden Tablosuna bakınız.</p>
          <button class="bo-devam" id="bo-intro-devam">Devam</button>
        </div>
      </div>


      <div class="bo-ust">
        <button class="bo-geri" id="bo-geri">← Geri</button>
        <div class="bo-marka">
          <span class="bo-marka-ad">KadirBüyükkaya</span>
          <div class="bo-marka-alt">Beden Önerisi</div>
          <div class="bo-marka-urun" id="bo-urun-ad"></div>
        </div>
        <button class="bo-kapat" id="bo-kapat" aria-label="Kapat">×</button>
      </div>

      <!-- ADIM: Ürün Tipi (tek butonla açıldığında ilk ekran) -->
      <div class="bo-adim bo-aktif" data-ad="urun">
        <h2 class="bo-baslik">Ürün Tipi</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Hangi ürün için beden önerisi istiyorsunuz?</p>
        <div class="bo-urun-liste" id="bo-urun-liste"><!-- JS ile doldurulur --></div>
      </div>

      <!-- ADIM: Alt tür (ör. pantolon çeşidi) -->
      <div class="bo-adim" data-ad="alt">
        <h2 class="bo-baslik" id="bo-alt-baslik">Pantolon Tipi</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Hangi model için beden önerisi istiyorsunuz?</p>
        <div class="bo-urun-liste" id="bo-alt-liste"><!-- JS ile doldurulur --></div>
      </div>

      <!-- ADIM: Ölçüler (her üründe var) -->
      <div class="bo-adim" data-ad="olculer">
        <h2 class="bo-baslik">Ölçüleriniz</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Size en uygun bedeni önerebilmemiz için lütfen aşağıdaki bilgileri giriniz.</p>
        <div class="bo-alan">
          <label class="bo-etiket" for="bo-boy">Boyunuz</label>
          <input class="bo-input" id="bo-boy" type="number" inputmode="numeric" placeholder="cm" min="120" max="220">
        </div>
        <div class="bo-alan">
          <label class="bo-etiket" for="bo-kilo">Kilonuz</label>
          <input class="bo-input" id="bo-kilo" type="number" inputmode="numeric" placeholder="kg" min="30" max="120">
          <div class="bo-uyari" id="bo-uyari-1">Lütfen geçerli bir boy (120–220 cm) ve kilo (30–120 kg) giriniz.</div>
        </div>
        <button class="bo-devam" id="bo-devam-olculer">Devam</button>
        <div style="text-align:center;margin-top:10px;">
          <button class="bo-tablo-link" data-tablo-ac>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v14H3z"/><path d="M3 10h18M9 5v14"/></svg>
            Beden tablosunu gör
          </button>
        </div>
      </div>

      <!-- ADIM: Omuz Yapısı (üst beden ürünlerinde) -->
      <div class="bo-adim" data-ad="omuz">
        <h2 class="bo-baslik">Omuz Yapınız</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Omuz yapınız için en uygun seçimi yapınız.</p>
        <div class="bo-kartlar" data-grup="omuz">
          <button class="bo-kart" data-deger="dar">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M40 16c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" fill="#ededee"/>
              <path d="M28 33c4 2 8 3 12 3s8-1 12-3c6 3 9 8 9 16v34H19V49c0-8 3-13 9-16z" fill="#ededee"/>
              <path d="M28 24c-4 1-7 3-9 6" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
              <path d="M52 24c4 1 7 3 9 6" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Daha Dar</span><span class="bo-kart-ad">Daha Dar</span>
          </button>
          <button class="bo-kart" data-deger="ortalama">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M40 16c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" fill="#ededee"/>
              <path d="M24 33c5 2 10 3 16 3s11-1 16-3c7 3 11 8 11 16v34H13V49c0-8 4-13 11-16z" fill="#ededee"/>
              <path d="M24 23c-6 1-10 4-13 8" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
              <path d="M56 23c6 1 10 4 13 8" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Ortalama/<br>Bilmiyorum</span><span class="bo-kart-ad">Ortalama</span>
          </button>
          <button class="bo-kart" data-deger="genis">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M40 16c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" fill="#ededee"/>
              <path d="M20 33c6 2 13 3 20 3s14-1 20-3c8 3 13 8 13 16v34H7V49c0-8 5-13 13-16z" fill="#ededee"/>
              <path d="M20 22c-8 1-13 5-16 10" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
              <path d="M60 22c8 1 13 5 16 10" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Daha Geniş</span><span class="bo-kart-ad">Daha Geniş</span>
          </button>
        </div>
        <button class="bo-devam bo-devam-ileri" disabled>Devam</button>
      </div>

      <!-- ADIM: Vücut Yapısı -->
      <div class="bo-adim" data-ad="vucut">
        <h2 class="bo-baslik">Vücut Yapınız</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Vücut yapınız için en uygun seçimi yapınız.</p>
        <div class="bo-kartlar" data-grup="vucut">
          <button class="bo-kart" data-deger="duz">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M34 14c10 0 18 4 18 20v44c0 4-3 6-9 6h-2c-6 0-9-2-9-6V34c0-12 1-20 2-20z" fill="#ededee"/>
              <path d="M26 36v26" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Daha Düz</span><span class="bo-kart-ad">Daha Düz</span>
          </button>
          <button class="bo-kart" data-deger="ortalama">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M34 14c11 0 19 5 19 21 0 8-1 16-1 23 0 4-3 6-9 6h-2c-6 0-9-2-9-6 0-7-1-15-1-23 0-13 2-21 3-21z" fill="#ededee"/>
              <path d="M25 38c-2 8-2 16 0 24" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Ortalama/<br>Bilmiyorum</span><span class="bo-kart-ad">Ortalama</span>
          </button>
          <button class="bo-kart" data-deger="yuvarlak">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M34 14c12 0 21 6 21 23 0 9-1 18-1 26 0 4-4 6-10 6h-2c-6 0-10-2-10-6 0-8-1-17-1-26 0-15 2-23 3-23z" fill="#ededee"/>
              <path d="M24 38c-4 8-4 16 0 24" stroke="var(--bo-vurgu)" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 5"/>
            </svg>
            <span class="bo-kart-ic-etiket">Daha Yuvarlak</span><span class="bo-kart-ad">Daha Yuvarlak</span>
          </button>
        </div>
        <button class="bo-devam bo-devam-ileri" disabled>Devam</button>
      </div>

      <!-- ADIM: Kalıp Tercihi (pantolonda) -->
      <div class="bo-adim" data-ad="kalip">
        <h2 class="bo-baslik">Kalıp Tercihiniz</h2>
        <div class="bo-baslik-cizgi"></div>
        <p class="bo-aciklama">Nasıl bir kalıp tercih edersiniz?</p>
        <div class="bo-kartlar" data-grup="kalip">
          <button class="bo-kart" data-deger="dar">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M28 14h24v8H28z" fill="#ededee"/>
              <path d="M28 23h11l-3 51h-6l-2-51z" fill="#ededee"/>
              <path d="M41 23h11l-2 51h-6l-3-51z" fill="#ededee"/>
            </svg>
            <span class="bo-kart-ic-etiket">Dar Kalıp</span><span class="bo-kart-ad">Dar</span>
          </button>
          <button class="bo-kart" data-deger="normal">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M26 14h28v8H26z" fill="#ededee"/>
              <path d="M26 23h13l-3 51h-8l-2-51z" fill="#ededee"/>
              <path d="M41 23h13l-2 51h-8l-3-51z" fill="#ededee"/>
            </svg>
            <span class="bo-kart-ic-etiket">Normal / Bilmiyorum</span><span class="bo-kart-ad">Normal</span>
          </button>
          <button class="bo-kart" data-deger="bol">
            <svg viewBox="0 0 80 90" fill="none">
              <path d="M23 14h34v8H23z" fill="#ededee"/>
              <path d="M23 23h16l-4 51h-9l-3-51z" fill="#ededee"/>
              <path d="M41 23h16l-3 51h-9l-4-51z" fill="#ededee"/>
            </svg>
            <span class="bo-kart-ic-etiket">Bol / Rahat</span><span class="bo-kart-ad">Bol</span>
          </button>
        </div>
        <button class="bo-devam bo-devam-ileri" disabled>Devam</button>
      </div>

      <!-- ADIM: Sonuç (her üründe var) -->
      <div class="bo-adim" data-ad="sonuc">
        <div class="bo-sonuc">
          <h2 class="bo-baslik" style="margin-bottom:0;">Önerilen Bedeniniz</h2>
          <div class="bo-sonuc-beden" id="bo-sonuc-beden">M</div>
          <p class="bo-sonuc-not" id="bo-sonuc-not"></p>
          <div class="bo-sonuc-ikincil" id="bo-sonuc-ikincil" style="display:none;"></div>

          <!-- Stok uyarısı (önerilen beden tükendiyse) -->
          <div class="bo-stok" id="bo-stok" style="display:none;"></div>

          <button class="bo-devam" id="bo-sonuc-sec" style="max-width:300px;margin:8px auto 0;">Bu Bedeni Sepete Ekle</button>

          <div class="bo-sonuc-linkler">
            <button class="bo-tablo-link" data-tablo-ac>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v14H3z"/><path d="M3 10h18M9 5v14"/></svg>
              Beden tablosu
            </button>
            <button class="bo-tablo-link" id="bo-kaydet-ac">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              Bedenini kaydet
            </button>
          </div>

          <!-- E-posta yakalama (kaydet linki veya 'gelince haber ver' ile açılır) -->
          <div class="bo-eposta" id="bo-eposta" style="display:none;">
            <p class="bo-eposta-baslik" id="bo-eposta-baslik">Bedenini kaydet, sana özel öneriler gönderelim.</p>
            <div class="bo-eposta-satir">
              <input class="bo-input" id="bo-eposta-input" type="email" inputmode="email" placeholder="E-posta adresiniz">
              <button class="bo-devam" id="bo-eposta-gonder" style="width:auto;padding:13px 18px;">Gönder</button>
            </div>
            <p class="bo-eposta-tesekkur" id="bo-eposta-tesekkur" style="display:none;">Teşekkürler, kaydedildi.</p>
          </div>

          <!-- Geri bildirim -->
          <div class="bo-geri-bildirim">
            <span>Bu öneri sana uygun mu?</span>
            <button class="bo-gb-btn" data-gb="olumlu" aria-label="Evet"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v11M2 13v6a2 2 0 002 2h13a2 2 0 002-1.7l1-6A2 2 0 0021 11h-6V6a2 2 0 00-3.4-1.4L7 10z"/></svg></button>
            <button class="bo-gb-btn" data-gb="olumsuz" aria-label="Hayır"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V3M22 11V5a2 2 0 00-2-2H7a2 2 0 00-2 1.7l-1 6A2 2 0 006 13h6v5a2 2 0 003.4 1.4L17 14z"/></svg></button>
            <span class="bo-gb-tesekkur" id="bo-gb-tesekkur" style="display:none;">Teşekkürler!</span>
          </div>

          <div><button class="bo-bastan" id="bo-bastan">Baştan başla</button></div>
        </div>
      </div>

      <!-- Beden Öneri paneli (butona basınca doğrudan açılır) -->
      <div class="bo-tablo-katman" id="bo-tablo-katman">
        <div class="bo-tablo-ustbar">
          <h3 class="bo-tablo-baslik">Beden Öneri</h3>
          <button class="bo-tablo-kapat" id="bo-tablo-geri" aria-label="Kapat">×</button>
        </div>
        <div class="bo-tablo-secimler" id="bo-secimler">
          <label class="bo-tablo-secim"><span>KOLEKSİYON</span><select id="bo-tablo-koleksiyon"></select></label>
          <label class="bo-tablo-secim" id="bo-fit-wrap"><span>FİTLER</span><select id="bo-tablo-fit"></select></label>
        </div>
        <div class="bo-olcu-satir">
          <label class="bo-tablo-secim bo-olcu-alan"><span>BOYUNUZ</span><input id="bo-t-boy" type="number" inputmode="numeric" placeholder="cm" min="120" max="220"></label>
          <label class="bo-tablo-secim bo-olcu-alan"><span>KİLONUZ</span><input id="bo-t-kilo" type="number" inputmode="numeric" placeholder="kg" min="30" max="120"></label>
        </div>
        <div class="bo-uyari" id="bo-t-uyari">Lütfen geçerli bir boy (120–220 cm) ve kilo (30–120 kg) giriniz.</div>
        <div class="bo-tablo-oneri" id="bo-tablo-oneri" style="display:none;"></div>
        <div style="text-align:center;">
          <button class="bo-tablo-link" id="bo-t-gorbtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18v14H3z"/><path d="M3 10h18M9 5v14"/></svg>
            Beden tablosunu gör
          </button>
        </div>
        <div class="bo-tablo-kutu" id="bo-tablo-kutu" style="display:none;">
          <div class="bo-tablo-fitad" id="bo-tablo-fitad"></div>
          <div class="bo-tablo-sar"><table class="bo-tablo" id="bo-tablo-el"></table></div>
        </div>
        <p class="bo-tablo-not">Ölçüler ürünün dikim ölçüleridir (cm). Göğüs / bel değerleri tam çevredir. Beden önerileri tahminidir.</p>
      </div>

      <div class="bo-alt-imza">KadirBüyükkaya</div>
    </div>
  </div>`;
  function kur() {
    var st=document.createElement('style');st.textContent=BO_CSS;document.head.appendChild(st);
    var wrap=document.createElement('div');wrap.innerHTML=BO_HTML.trim();
    while(wrap.firstChild)document.body.appendChild(wrap.firstChild);
/* =====================================================================
   KADİRBÜYÜKKAYA BEDEN ÖNERİ — Ayarlar & Mantık
   =====================================================================
   En çok düzenleyeceğin yer: aşağıdaki URUNLER nesnesi.
   Her ürün tipinin KENDİ beden listesi, KENDİ ölçü tablosu ve
   KENDİ soruları (adımları) var.
===================================================================== */

/* =====================================================================
   ÜRÜNLER — gerçek beden cetvellerinden dolduruldu.
   olcuTablosu: müşteriye gösterilen ölçüler (göğüs/bel = TAM çevre).
   tablo: boy/kilo -> beden eşikleri (gerçek ölçülerden türetildi;
          canlıdaki geri bildirimle ince ayar yapılabilir).
/* =====================================================================
   ÜRÜNLER — gerçek beden cetvellerinden dolduruldu.
   olcuTablosu: müşteriye gösterilen ölçüler (göğüs/bel = TAM çevre).
   tablo: boy/kilo -> beden eşikleri (gerçek ölçülerden türetildi).
/* =====================================================================
   ÜRÜNLER — gerçek beden cetvellerinden dolduruldu.
   Menü sırası buradaki sıralamayla aynıdır.
/* =====================================================================
   ÜRÜNLER — gerçek beden cetvellerinden.
   Menü sırası buradaki sıralamayla aynıdır.
   olcuTablosu[..][1] = birincil çevre (üst grupta Göğüs, pantolonda Bel),
   TAM çevre (cm). Öneri bu sütuna göre yapılır.
   pay = giysinin vücuttan fazlası (rahatlık payı, cm). Öneriyi buna göre eşler.
/* =====================================================================
   ÜRÜNLER — gerçek cetveller + gerçek kişilere göre kalibre öneri.
   Menü sırası buradaki sıralamayla aynıdır.
   oneri: boy/kilo -> beden formülü (iki referans kişiye göre ayarlandı).
     tip "num"  -> sonuç bir beden NUMARASI (en yakın mevcut numaraya yuvarlanır)
     tip "harf" -> sonuç bir INDEX (bedenler dizisindeki sıra)
     ham = w*kilo + h*(boy-176) + c
   olcuTablosu: müşteriye gösterilen ölçüler (göğüs/bel = TAM çevre).
===================================================================== */
const URUNLER = {

  /* -------- 1) TAKIM ELBİSE — 46-58 -------- */
  takim: {
    ad: "Takım Elbise", kalipKaydir: 0,
    adimlar: ["omuz", "vucut"],
    bedenler: ["46", "48", "50", "52", "54", "56", "58"],
    oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
    olcuTablosu: {
      basliklar: ["Beden", "Göğüs", "Bel", "Omuz", "Kol", "Arka Boy"],
      satirlar: [
        ["46", 100, 93, 44, 61.5, 73], ["48", 104, 99, 45, 62, 74],
        ["50", 108, 103, 46, 63, 75], ["52", 112, 107, 47, 64, 76],
        ["54", 116, 111, 48, 65, 77], ["56", 120, 115, 49, 66, 78],
        ["58", 124, 119, 50, 67, 79],
      ],
    },
  },

  /* -------- 2) CEKET — 46-58 -------- */
  ceket: {
    ad: "Ceket", kalipKaydir: 0,
    adimlar: ["omuz", "vucut"],
    bedenler: ["46", "48", "50", "52", "54", "56", "58"],
    oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
    olcuTablosu: {
      basliklar: ["Beden", "Göğüs", "Bel", "Omuz", "Kol", "Arka Boy"],
      satirlar: [
        ["46", 100, 93, 44, 61.5, 73], ["48", 104, 99, 45, 62, 74],
        ["50", 108, 103, 46, 63, 75], ["52", 112, 107, 47, 64, 76],
        ["54", 116, 111, 48, 65, 77], ["56", 120, 115, 49, 66, 78],
        ["58", 124, 119, 50, 67, 79],
      ],
    },
  },

  /* -------- 3) PANTOLON — çeşide göre ayrışır (hepsi 40-52) --------
     slimFit: true olan çeşitte önerinin yanında bir beden büyüğü de gösterilir. */
  pantolon: {
    ad: "Pantolon", adimlar: [],
    altTurler: {
      ciftpile: {
        ad: "Çift Pile Pantolon", kalipKaydir: 0, slimFit: false,
        bedenler: ["40", "42", "44", "46", "48", "50", "52"],
        oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
        olcuTablosu: {
          basliklar: ["Beden", "Bel", "Basen", "Paça", "İç Boy"],
          satirlar: [
            ["40", 85, 115, 34, 81], ["42", 88, 118, 35, 81], ["44", 91, 121, 36, 81],
            ["46", 94, 124, 37, 81], ["48", 97, 127, 38, 81], ["50", 100, 130, 39, 81],
            ["52", 103, 133, 40, 81],
          ],
        },
      },
      tekpile: {
        ad: "Tek Pile Pantolon", kalipKaydir: 0, slimFit: false,
        bedenler: ["40", "42", "44", "46", "48", "50", "52"],
        oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
        olcuTablosu: {
          basliklar: ["Beden", "Bel", "Basen", "Paça", "İç Boy"],
          satirlar: [
            ["40", 82, 112, 43, 83], ["42", 86, 116, 43.5, 83], ["44", 90, 120, 44.5, 83],
            ["46", 94, 124, 45, 83], ["48", 98, 128, 45.5, 83], ["50", 102, 132, 46, 83],
            ["52", 106, 136, 46.5, 83],
          ],
        },
      },
      klasik: {
        ad: "Klasik Pantolon", kalipKaydir: 0, slimFit: false,
        bedenler: ["40", "42", "44", "46", "48", "50", "52"],
        oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
        olcuTablosu: {
          basliklar: ["Beden", "Bel", "Basen", "Paça", "İç Boy"],
          satirlar: [
            ["40", 70, 86, 33.2, 84], ["42", 74, 90, 33.8, 84], ["44", 78, 94, 34.4, 84],
            ["46", 82, 98, 35, 84], ["48", 86, 102, 35.4, 84], ["50", 90, 106, 36, 84],
            ["52", 94, 110, 36.6, 84],
          ],
        },
      },
      jogger: {
        ad: "Jogger", kalipKaydir: 0, slimFit: false,
        bedenler: ["40", "42", "44", "46", "48", "50", "52"],
        oneri: { tip: "kilo", sinir: [74, 79, 84, 89, 99, 109, 999] },
        olcuTablosu: {
          basliklar: ["Beden", "Bel", "Basen", "Paça", "İç Boy"],
          satirlar: [
            ["40", 72, 94, 26, 80], ["42", 76, 98, 26.5, 80], ["44", 80, 102, 27, 80],
            ["46", 84, 106, 27.5, 80], ["48", 88, 110, 28, 80], ["50", 92, 114, 28.5, 80],
            ["52", 96, 118, 29, 80],
          ],
        },
      },
      jean: {
        ad: "Jean", kalipKaydir: 0, slimFit: false,
        bedenler: ["30/31", "32", "34", "36", "38"],
        oneri: { tip: "kilo", sinir: [74, 79, 89, 109, 999] },
        olcuTablosu: {
          basliklar: ["Beden", "Bel (cm)", "İç Boy"],
          satirlar: [
            ["30/31", 77, 82], ["32", 81, 82], ["34", 86, 83],
            ["36", 91, 83], ["38", 97, 84],
          ],
        },
      },
    },
  },

  /* -------- 4) GÖMLEK (FTPG Regular Fit) -------- */
  gomlek: {
    ad: "Gömlek", kalipKaydir: 0,
    adimlar: ["omuz", "vucut"],
    bedenler: ["XS", "S", "M", "L", "XL", "XXL"],
    oneri: { tip: "kilo", sinir: [64, 74, 79, 89, 109, 999] },
    olcuTablosu: {
      basliklar: ["Beden", "Göğüs", "Bel", "Omuz", "Kol", "Yaka"],
      satirlar: [
        ["XS", 91, 87, 41, 65.5, 36], ["S", 99, 95, 43, 66.5, 38], ["M", 107, 103, 45, 67.5, 40],
        ["L", 115, 111, 47, 68.5, 42], ["XL", 123, 119, 49, 69.5, 44], ["XXL", 131, 127, 51, 70.5, 46],
      ],
    },
  },

  /* -------- 5) TRİKO / TİŞÖRT (basic değil) -------- */
  triko: {
    ad: "Triko / Tişört", kalipKaydir: 0,
    adimlar: ["omuz", "vucut"],
    bedenler: ["M", "L", "XL", "XXL"],
    oneri: { tip: "kilo", sinir: [79, 89, 109, 999] },
    olcuTablosu: {
      basliklar: ["Beden", "Göğüs", "Boy", "Omuz", "Kol"],
      satirlar: [
        ["M", 104, 67.5, 40, 23], ["L", 108, 69, 42, 24],
        ["XL", 112, 70.5, 44, 25], ["XXL", 116, 72, 46, 26],
      ],
    },
  },

  /* -------- 6) BASIC TİŞÖRT -------- */
  tshirt: {
    ad: "Basic Tişört", kalipKaydir: 0,
    adimlar: ["omuz", "vucut"],
    bedenler: ["S", "M", "L", "XL", "XXL"],
    oneri: { tip: "kilo", sinir: [74, 79, 89, 109, 999] },
    olcuTablosu: {
      basliklar: ["Beden", "Göğüs", "Boy", "Omuz", "Kol"],
      satirlar: [
        ["S", 100, 69, 39, 22], ["M", 104, 71, 41, 23], ["L", 108, 73, 43, 24],
        ["XL", 112, 75, 45, 25], ["XXL", 116, 77, 47, 26],
      ],
    },
  },
};

const ETKI = {
  omuz:  { dar: -1, ortalama: 0, genis: +1 },
  vucut: { duz: -1, ortalama: 0, yuvarlak: +1 },
  kalip: { dar: -1, normal: 0, bol: +1 },   // kalıp tercihi: bol seçen +1 beden alır
};

/* Kullanıcı "Sepete Ekle" deyince ne olsun?
   beden: eklenecek beden, urunKey: ürün tipi, secenekler: ac()'e verilen opsiyonlar (urunId vb.)
   Burayı kendi sitenin sepete ekleme / beden seçme kodu ile değiştir. */
function BEDENI_SEC(beden, urunKey, secenekler) {
  // ÖRNEK: document.querySelector('[data-beden="'+beden+'"]')?.click();
  alert("Sepete eklenecek beden: " + beden + " (" + URUNLER[urunKey].ad + ")\n\nBu kısmı kendi sepete ekleme kodunla değiştir.");
}

/* "Bedenini kaydet" veya "gelince haber ver" formundan e-posta geldiğinde ne olsun?
   Burayı kendi e-posta / CRM servisine bağla (Mailchimp, Klaviyo, kendi API'n...). */
function EPOSTA_KAYDET(eposta, veri) {
  // ÖRNEK: fetch("/api/beden-kayit", {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({eposta, ...veri})});
  alert("E-posta kaydedildi: " + eposta + "\n\nBu kısmı kendi e-posta servisine bağla.");
}

/* Her önemli olay buradan raporlanır. Varsayılan olarak Google Tag Manager / GA4
   dataLayer'a yazar. İstersen kendi analitik çağrını ekle. */
function ANALITIK(olay, veri) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: "beden_" + olay }, veri || {}));
  } catch (e) {}
  // İncelemek için aç: console.log("[beden]", olay, veri);
}

/* Ölçü hatırlama deposu — tarayıcıda saklanır, site genelinde geçerli olur.
   (localStorage yoksa sessizce devre dışı kalır, hata vermez.) */
const Depo = {
  anahtar: "kb_beden_olculeri",
  oku() { try { return JSON.parse(localStorage.getItem(this.anahtar) || "null"); } catch (e) { return null; } },
  yaz(v) { try { localStorage.setItem(this.anahtar, JSON.stringify(v)); } catch (e) {} },
  temizle() { try { localStorage.removeItem(this.anahtar); } catch (e) {} },
};

/* Ürün tipi seçim ekranındaki ikonlar (key = URUNLER anahtarı).
   İstediğin gibi değiştirebilir, başka ürün için yenisini ekleyebilirsin. */
const URUN_IKONLARI = {
  // Gömlek: kısa açık kollar + sivri yaka + düğme sırası
  gomlek:   '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M28 14l8 7 8-7 8 2 10 8-5 10-7-4v25H22V30l-7 4-5-10 10-8z"/><path d="M36 21v34" stroke-dasharray="2 3" stroke-width="1.6"/></svg>',
  // Basic Tişört: kısa kollar + yuvarlak yaka
  tshirt:   '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M30 16c3-3 9-3 12 0l10 5-4 9-6-3v27H24V27l-6 3-4-9 10-5z"/><path d="M31 17c3 3 7 3 10 0" stroke-width="1.6"/></svg>',
  // Triko: uzun kollar + yuvarlak yaka + ribana etek
  triko:    '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M30 16c3-3 9-3 12 0l12 2 8 28-9 1-3-15v25H22V32l-3 15-9-1 8-28z"/><path d="M31 18c3 3 7 3 10 0" stroke-width="1.6"/><path d="M23 50h26" stroke-width="1.6"/></svg>',
  // Ceket: açık ön + yaka (reverler), ortası boş
  ceket:    '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 15l10 10-3 32H20V33l-6 5-5-11 8-10z"/><path d="M48 15l-10 10 3 32h11V33l6 5 5-11-8-10z"/></svg>',
  // Takım Elbise: ceket + ortada kravat
  takim:    '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 15l10 10-3 32H20V33l-6 5-5-11 8-10z"/><path d="M48 15l-10 10 3 32h11V33l6 5 5-11-8-10z"/><path d="M36 25l-3 5 3 22 3-22z" fill="#8e8e94" stroke="none"/></svg>',
  // Pantolon: bel + iki bacak
  pantolon: '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M24 14h24v6H24z"/><path d="M24 20h12l-2 40h-7l-3-40z"/><path d="M36 20h12l-3 40h-7l-2-40z"/></svg>',
};
const VARSAYILAN_IKON = '<svg viewBox="0 0 72 72" fill="#f0f0f1" stroke="#8e8e94" stroke-width="2" stroke-linejoin="round"><rect x="20" y="16" width="32" height="40" rx="4"/></svg>';
const bedenOneri = (function () {
  const overlay  = document.getElementById("bo-overlay");
  const geriBtn  = document.getElementById("bo-geri");
  const kapatBtn = document.getElementById("bo-kapat");

  let urunKey = null, urun = null;
  let sira = [];           // ör: ["olculer","omuz","vucut","sonuc"]
  let idx = 0;
  let sonBeden = null;     // en son önerilen beden (tabloda vurgulamak için)
  let secenekler = {};     // ac()'e verilen opsiyonlar (stok, kalipKaydir, urunId...)
  let epostaMeta = {};     // e-posta formuna bağlı ek bilgi
  let anaUrun = null;      // alt türü olan ana ürün (ör. pantolon)
  let aktifKol = null, aktifFit = "regular";  // tabloda seçili koleksiyon/fit
  const veri = { boy:null, kilo:null, omuz:null, vucut:null, kalip:null };

  function adimEl(ad){ return overlay.querySelector('.bo-adim[data-ad="'+ad+'"]'); }

  function git(i){
    idx = i;
    overlay.querySelectorAll(".bo-adim").forEach(a => a.classList.remove("bo-aktif"));
    adimEl(sira[i]).classList.add("bo-aktif");
    geriBtn.classList.toggle("bo-gorunur", i > 0 && sira[i] !== "sonuc");
    overlay.querySelector(".bo-modal").scrollTop = 0;
  }

  function ileri(){
    if (idx < sira.length - 1){
      idx++;
      if (sira[idx] === "sonuc") hesapla();
      git(idx);
    }
  }

  function ac(key, opts){
    secenekler = opts || {};
    aktifKol = (key && URUNLER[key]) ? key : null;
    aktifFit = null;
    overlay.querySelector(".bo-modal").classList.add("bo-panel-modu");
    overlay.classList.add("bo-acik");
    document.body.style.overflow = "hidden";
    ANALITIK("acildi", { urun: aktifKol || "panel" });
    tabloAc();
    document.getElementById("bo-intro").classList.add("bo-acik");
  }

  // Kayıtlı ölçüleri forma doldur (ölçü hatırlama)
  function olculeriYukle(){
    const k = Depo.oku();
    if (!k) return;
    if (k.boy)  document.getElementById("bo-boy").value = k.boy;
    if (k.kilo) document.getElementById("bo-kilo").value = k.kilo;
    ["omuz","vucut","kalip"].forEach(g => {
      if (!k[g]) return;
      const grup = overlay.querySelector('.bo-kartlar[data-grup="'+g+'"]');
      const kart = grup && grup.querySelector('.bo-kart[data-deger="'+k[g]+'"]');
      if (kart){
        kart.classList.add("bo-secili"); veri[g]=k[g];
        const devam = grup.parentElement.querySelector(".bo-devam-ileri");
        if (devam) devam.disabled = false;
      }
    });
  }

  // Ürün tipi listesini URUNLER'den otomatik oluştur
  (function urunListesiKur(){
    const liste = document.getElementById("bo-urun-liste");
    liste.innerHTML = "";
    Object.keys(URUNLER).forEach(key => {
      const b = document.createElement("button");
      b.className = "bo-urun-secim";
      const ikon = URUN_IKONLARI[key] || VARSAYILAN_IKON;
      b.innerHTML = '<span class="bo-urun-ikon">'+ikon+'</span>'
                  + '<span class="bo-urun-isim">'+URUNLER[key].ad+'</span>';
      b.addEventListener("click", () => {
        urunKey = key; urun = URUNLER[key]; anaUrun = null;
        aktifKol = key; aktifFit = urun.altTurler ? null : "regular";
        document.getElementById("bo-urun-ad").textContent = urun.ad;
        ANALITIK("urun_secildi", { urun: urunKey });
        if (urun.altTurler){
          anaUrun = urun;
          sira = ["urun", "alt", "olculer", ...urun.adimlar, "sonuc"];
          altListesiKur(anaUrun);
          git(1); // alt tür adımı
        } else {
          sira = ["urun", "olculer", ...urun.adimlar, "sonuc"];
          git(1); // ölçüler adımı
          setTimeout(() => document.getElementById("bo-boy").focus(), 150);
        }
      });
      liste.appendChild(b);
    });
  })();
  function kapat(){
    overlay.classList.remove("bo-acik");
    overlay.querySelector(".bo-modal").classList.remove("bo-panel-modu");
    document.getElementById("bo-tablo-katman").classList.remove("bo-acik");
    document.getElementById("bo-intro").classList.remove("bo-acik");
    document.body.style.overflow = "";
  }

  // Alt tür listesini (ör. pantolon çeşitleri) kur
  function altListesiKur(base){
    const liste = document.getElementById("bo-alt-liste");
    const baslik = document.getElementById("bo-alt-baslik");
    if (!base || !base.altTurler) return;
    baslik.textContent = base.ad + " Tipi";
    liste.innerHTML = "";
    Object.keys(base.altTurler).forEach(altKey => {
      const t = base.altTurler[altKey];
      const b = document.createElement("button");
      b.className = "bo-urun-secim";
      const ikon = URUN_IKONLARI[urunKey] || VARSAYILAN_IKON;
      b.innerHTML = '<span class="bo-urun-ikon">'+ikon+'</span>'
                  + '<span class="bo-urun-isim">'+t.ad+'</span>';
      b.addEventListener("click", () => altSecildi(altKey));
      liste.appendChild(b);
    });
  }

  // Alt tür seçilince: ana ürünle birleştir. Sadece-tablo ise doğrudan beden tablosunu aç.
  function altSecildi(altKey){
    const t = anaUrun.altTurler[altKey];
    urun = Object.assign({}, anaUrun, {
      ad: t.ad, bedenler: t.bedenler, oneri: t.oneri,
      olcuTablosu: t.olcuTablosu, kalipKaydir: t.kalipKaydir || 0,
      slimFit: t.slimFit || false, altTurler: undefined,
    });
    document.getElementById("bo-urun-ad").textContent = t.ad;
    aktifKol = urunKey; aktifFit = altKey;
    ANALITIK("alt_secildi", { urun: urunKey, tur: altKey });
    if (anaUrun.sadeceTablo){
      sonBeden = null;
      tabloAc();   // boy/kilo sorma, doğrudan beden tablosu
    } else {
      const oi = sira.indexOf("olculer");
      git(oi);
      setTimeout(() => document.getElementById("bo-boy").focus(), 150);
    }
  }

  function sifirla(){
    veri.boy=veri.kilo=veri.omuz=veri.vucut=veri.kalip=null;
    sonBeden = null;
    document.getElementById("bo-tablo-katman").classList.remove("bo-acik");
    document.getElementById("bo-boy").value="";
    document.getElementById("bo-kilo").value="";
    document.getElementById("bo-boy").classList.remove("bo-hatali");
    document.getElementById("bo-kilo").classList.remove("bo-hatali");
    document.getElementById("bo-uyari-1").classList.remove("bo-gorunur");
    overlay.querySelectorAll(".bo-kart").forEach(k=>k.classList.remove("bo-secili"));
    overlay.querySelectorAll(".bo-devam-ileri").forEach(b=>b.disabled=true);
    // sonuç ekranı ek bölümlerini sıfırla
    document.getElementById("bo-stok").style.display="none";
    document.getElementById("bo-eposta").style.display="none";
    document.getElementById("bo-eposta-input").value="";
    document.getElementById("bo-eposta-input").classList.remove("bo-hatali");
    document.getElementById("bo-eposta-tesekkur").style.display="none";
    overlay.querySelectorAll(".bo-gb-btn").forEach(x=>x.classList.remove("bo-secili"));
    document.getElementById("bo-gb-tesekkur").style.display="none";
    const sb = document.getElementById("bo-sonuc-sec"); sb.style.display=""; sb.textContent="Bu Bedeni Sepete Ekle";
    git(0);
  }

  // Ölçüler adımı: doğrulama
  document.getElementById("bo-devam-olculer").addEventListener("click", () => {
    const boy = parseInt(document.getElementById("bo-boy").value,10);
    const kilo= parseInt(document.getElementById("bo-kilo").value,10);
    const boyOk = boy>=120 && boy<=220, kiloOk = kilo>=30 && kilo<=120;
    document.getElementById("bo-boy").classList.toggle("bo-hatali", !boyOk);
    document.getElementById("bo-kilo").classList.toggle("bo-hatali", !kiloOk);
    document.getElementById("bo-uyari-1").classList.toggle("bo-gorunur", !(boyOk&&kiloOk));
    if (boyOk && kiloOk){ veri.boy=boy; veri.kilo=kilo; ileri(); }
  });

  // Kart seçimleri (omuz / vucut / kalip)
  overlay.querySelectorAll(".bo-kartlar").forEach(grup => {
    const ad = grup.dataset.grup;
    grup.querySelectorAll(".bo-kart").forEach(kart => {
      kart.addEventListener("click", () => {
        grup.querySelectorAll(".bo-kart").forEach(k=>k.classList.remove("bo-secili"));
        kart.classList.add("bo-secili");
        veri[ad] = kart.dataset.deger;
        const devam = grup.parentElement.querySelector(".bo-devam-ileri");
        if (devam) devam.disabled = false;
      });
    });
  });

  // Tüm "ileri" devam butonları
  overlay.querySelectorAll(".bo-devam-ileri").forEach(b => b.addEventListener("click", ileri));

  geriBtn.addEventListener("click", () => git(Math.max(0, idx-1)));
  kapatBtn.addEventListener("click", kapat);
  overlay.addEventListener("click", e => { if (e.target===overlay) kapat(); });
  document.addEventListener("keydown", e => { if (e.key==="Escape" && overlay.classList.contains("bo-acik")) kapat(); });
  document.getElementById("bo-bastan").addEventListener("click", sifirla);

  // --- Beden tablosu (KOLEKSİYON + FİTLER + öneri + devrik tablo) ---
  function altBirlestir(ana, alt){
    return Object.assign({}, ana, {
      ad: alt.ad, bedenler: alt.bedenler, oneri: alt.oneri,
      olcuTablosu: alt.olcuTablosu, kalipKaydir: alt.kalipKaydir || 0,
      slimFit: alt.slimFit || false, altTurler: undefined,
    });
  }
  // Tüm koleksiyonlar: her üst ürün bir KOLEKSİYON; pantolon çeşitleri FİTLER olur.
  function koleksiyonListesi(){
    return Object.keys(URUNLER).map(k => {
      const u = URUNLER[k];
      if (u.altTurler){
        return { key:k, ad:u.ad, fitler: Object.keys(u.altTurler).map(fk =>
          ({ key:fk, ad:u.altTurler[fk].ad, urun: altBirlestir(u, u.altTurler[fk]) })) };
      }
      return { key:k, ad:u.ad, fitler:[{ key:"regular", ad:"Regular Fit", urun:u }] };
    });
  }
  // Panelin kendi boy/kilo alanlarından ölçü (geçerliyse)
  function panelOlcu(){
    const boy = parseInt(document.getElementById("bo-t-boy").value, 10);
    const kilo = parseInt(document.getElementById("bo-t-kilo").value, 10);
    const boyOk = boy>=120 && boy<=220, kiloOk = kilo>=30 && kilo<=120;
    const bosMu = !document.getElementById("bo-t-boy").value && !document.getElementById("bo-t-kilo").value;
    return { boy, kilo, gecerli: boyOk && kiloOk, bosMu,
             boyDolu: !!document.getElementById("bo-t-boy").value,
             kiloDolu: !!document.getElementById("bo-t-kilo").value };
  }
  let elileTablo = false;   // "Beden tablosunu gör" ile açıldı mı

  // Bir koleksiyon-fit için öneri + devrik tabloyu çiz
  function tabloCiz(u, fitAd){
    document.getElementById("bo-tablo-fitad").textContent = "Beden Tablosu";
    const o = panelOlcu();
    const oneriKutu = document.getElementById("bo-tablo-oneri");
    const uyari = document.getElementById("bo-t-uyari");
    const kutu = document.getElementById("bo-tablo-kutu");
    const gorBtn = document.getElementById("bo-t-gorbtn");
    let vurgu = null;

    uyari.classList.toggle("bo-gorunur", (o.boyDolu && o.kiloDolu) && !o.gecerli);

    if (o.gecerli && u.oneri){
      let i = bedenIndex(u, o.boy, o.kilo).i;
      i = Math.max(0, Math.min(u.bedenler.length-1, i + (u.kalipKaydir||0)));
      vurgu = u.bedenler[i];
      Depo.yaz({ boy:o.boy, kilo:o.kilo });
      sonBeden = vurgu;
      let msg = "Ölçülerinize göre önerilen beden: <b>"+vurgu+"</b>";
      if (u.slimFit && i < u.bedenler.length-1)
        msg += " · Slim fit olduğu için bir beden büyüğü ("+u.bedenler[i+1]+") daha rahat olur.";
      oneriKutu.style.display = "block";
      oneriKutu.innerHTML = msg;
      ANALITIK("oneri", { urun:urunKey, beden:vurgu, boy:o.boy, kilo:o.kilo });
    } else {
      oneriKutu.style.display = "none";
    }

    // Tablo görünürlüğü: geçerli ölçü VEYA elle "gör" butonu
    const goster = o.gecerli || elileTablo;
    kutu.style.display = goster ? "block" : "none";
    gorBtn.style.display = goster ? "none" : "inline-flex";

    // Devrik tablo: satır = ölçü, sütun = beden
    const t = u.olcuTablosu;
    let html = "<thead><tr><th>BEDEN</th>";
    t.satirlar.forEach(r => { const s = String(r[0])===String(vurgu);
      html += "<th class='"+(s?"bo-vsutun":"")+"'>"+r[0]+"</th>"; });
    html += "</tr></thead><tbody>";
    for (let c=1;c<t.basliklar.length;c++){
      html += "<tr><td class='bo-olcuad'>"+t.basliklar[c]+"</td>";
      t.satirlar.forEach(r => { const s = String(r[0])===String(vurgu);
        html += "<td class='"+(s?"bo-vsutun":"")+"'>"+r[c]+"</td>"; });
      html += "</tr>";
    }
    document.getElementById("bo-tablo-el").innerHTML = html + "</tbody>";
  }

  function tabloAc(){
    elileTablo = false;
    const koleksiyonlar = koleksiyonListesi();
    const kolSel = document.getElementById("bo-tablo-koleksiyon");
    const fitSel = document.getElementById("bo-tablo-fit");
    kolSel.innerHTML = koleksiyonlar.map(k => "<option value='"+k.key+"'>"+k.ad+"</option>").join("");
    kolSel.value = (aktifKol && URUNLER[aktifKol]) ? aktifKol : koleksiyonlar[0].key;

    // Panel her açılışta boy/kilo boş başlar
    document.getElementById("bo-t-boy").value = "";
    document.getElementById("bo-t-kilo").value = "";

    function fitleriDoldur(kolKey, fitKey){
      const k = koleksiyonlar.find(x => x.key===kolKey) || koleksiyonlar[0];
      fitSel.innerHTML = k.fitler.map(f => "<option value='"+f.key+"'>"+f.ad+"</option>").join("");
      fitSel.value = (fitKey && k.fitler.some(f=>f.key===fitKey)) ? fitKey : k.fitler[0].key;
      // FİTLER yalnızca birden çok çeşit varsa (pantolon) görünür
      const cokFit = k.fitler.length > 1;
      document.getElementById("bo-fit-wrap").style.display = cokFit ? "" : "none";
      document.getElementById("bo-secimler").classList.toggle("bo-tek", !cokFit);
    }
    function guncelle(){
      const k = koleksiyonlar.find(x => x.key===kolSel.value) || koleksiyonlar[0];
      const f = k.fitler.find(x => x.key===fitSel.value) || k.fitler[0];
      urunKey = k.key; urun = f.urun;
      tabloCiz(f.urun, f.ad);
    }
    fitleriDoldur(kolSel.value, aktifFit);
    kolSel.onchange = () => { fitleriDoldur(kolSel.value); guncelle(); };
    fitSel.onchange = guncelle;
    document.getElementById("bo-t-boy").oninput = guncelle;
    document.getElementById("bo-t-kilo").oninput = guncelle;
    document.getElementById("bo-t-gorbtn").onclick = () => { elileTablo = true; guncelle(); };
    guncelle();
    document.getElementById("bo-tablo-katman").classList.add("bo-acik");
  }
  function tabloKapat(){ document.getElementById("bo-tablo-katman").classList.remove("bo-acik"); }

  overlay.querySelectorAll("[data-tablo-ac]").forEach(b => b.addEventListener("click", tabloAc));
  document.getElementById("bo-tablo-geri").addEventListener("click", kapat);
  document.getElementById("bo-intro-devam").addEventListener("click", () =>
    document.getElementById("bo-intro").classList.remove("bo-acik"));

  // HESAPLAMA
  // Boy + kilo -> beden. Her kategorinin kendi kalibre formülü (u.oneri) var.
  // ham = w*kilo + h*(boy-176) + c ; "num" -> en yakın beden numarası, "harf" -> index.
  function bedenIndex(u, boy, kilo){
    const o = u.oneri;
    // Gerçek beden cetveli: kiloya göre doğrudan tablo
    if (o.tip === "kilo"){
      let i = o.sinir.findIndex(function(s){ return kilo <= s; });
      if (i === -1) i = u.bedenler.length - 1;
      return { i: i, ham: kilo, merkezler: u.bedenler.map(function(_,k){ return k; }) };
    }
    const ham = o.w*kilo + o.h*(boy-176) + o.c;
    let merkezler, i;
    if (o.tip === "num"){
      merkezler = u.bedenler.map(Number);
      i = 0; let bd = Infinity;
      merkezler.forEach((n,k) => { const d = Math.abs(n-ham); if (d < bd){ bd = d; i = k; } });
    } else { // harf
      merkezler = u.bedenler.map((_,k) => k);
      i = Math.max(0, Math.min(u.bedenler.length-1, Math.round(ham)));
    }
    return { i, ham, merkezler };
  }

  function hesapla(){
    const { bedenler } = urun;
    const sonuc = bedenIndex(urun, veri.boy, veri.kilo);
    const ham = sonuc.ham, merkezler = sonuc.merkezler;
    let index = sonuc.i;

    let etki = (ETKI.omuz[veri.omuz]||0) + (ETKI.vucut[veri.vucut]||0) + (ETKI.kalip[veri.kalip]||0);
    etki = Math.max(-1, Math.min(1, etki));

    // Ürün/model bazında kalıp kaydırma (opts > kategori varsayılanı)
    const kaydir = (secenekler.kalipKaydir != null) ? secenekler.kalipKaydir : (urun.kalipKaydir || 0);

    index = Math.max(0, Math.min(bedenler.length-1, index + etki + kaydir));
    const beden = bedenler[index];
    sonBeden = beden;

    // Ölçüleri hatırla (ölçü hatırlama)
    Depo.yaz({ boy:veri.boy, kilo:veri.kilo, omuz:veri.omuz, vucut:veri.vucut, kalip:veri.kalip });

    document.getElementById("bo-sonuc-beden").textContent = beden;

    // --- Stok farkındalığı ---
    const stok = Array.isArray(secenekler.stok) ? secenekler.stok.map(String) : null;
    const stokKutu = document.getElementById("bo-stok");
    const secBtn = document.getElementById("bo-sonuc-sec");
    let satilacak = beden;

    if (stok && stok.length && !stok.includes(String(beden))){
      // en yakın mevcut bedeni bul
      let yakin = null, mesafe = 99;
      bedenler.forEach((b,i) => {
        if (stok.includes(String(b))){ const d = Math.abs(i-index); if (d<mesafe){ mesafe=d; yakin=b; } }
      });
      if (yakin){
        satilacak = yakin;
        stokKutu.style.display = "block";
        stokKutu.innerHTML = "Önerilen <b>"+beden+"</b> bedeni şu an stokta yok. Size en yakın mevcut beden <b>"+yakin+"</b>."
          + " <button class='bo-tablo-link' id='bo-haber-ver' style='margin-top:6px;'>"+beden+" bedeni gelince haber ver</button>";
        secBtn.style.display = ""; secBtn.textContent = yakin + " Bedenini Sepete Ekle";
        document.getElementById("bo-haber-ver").onclick = () =>
          epostaAc(beden+" bedeni stoğa girince size haber verelim.", { tip:"stok_bildirim", istenenBeden:beden });
      } else {
        stokKutu.style.display = "block";
        stokKutu.innerHTML = "Üzgünüz, şu an uygun bedende stok bulunmuyor.";
        secBtn.style.display = "none";
      }
      ANALITIK("stok_yok", { urun:urunKey, oneri:beden });
    } else {
      stokKutu.style.display = "none";
      secBtn.style.display = ""; secBtn.textContent = "Bu Bedeni Sepete Ekle";
    }

    secBtn.onclick = () => {
      BEDENI_SEC(satilacak, urunKey, secenekler);
      ANALITIK("sepete_eklendi", { urun:urunKey, beden:satilacak });
    };

    // Alternatif beden notu (slim fit +1, ya da iki beden sınırında)
    const kutu = document.getElementById("bo-sonuc-ikincil");
    const slim = (secenekler.slimFit != null) ? secenekler.slimFit : (urun.slimFit || false);
    let alt = null, altMesaj = null;

    if (slim && index < bedenler.length-1){
      alt = bedenler[index+1];
      altMesaj = "Slim fit kalıp olduğu için bir beden büyüğü (" + alt + ") daha rahat olur.";
    } else if (etki===0 && kaydir===0){
      // iki bedenin sınırına yakınsa nazik alternatif
      let j = -1;
      if (index>0 && index<bedenler.length-1)
        j = (Math.abs(ham-merkezler[index-1]) < Math.abs(ham-merkezler[index+1])) ? index-1 : index+1;
      else if (index>0) j = index-1;
      else if (index<bedenler.length-1) j = index+1;
      if (j >= 0){
        const dSec = Math.abs(ham - merkezler[index]);
        const dGap = Math.abs(merkezler[j] - merkezler[index]) || 1;
        if (dSec/dGap > 0.35){
          alt = bedenler[j];
          altMesaj = "Ölçüleriniz iki bedenin sınırında; " + alt + " bedenini de değerlendirebilirsiniz.";
        }
      }
    }
    if (alt){ kutu.style.display="inline-block"; kutu.textContent = altMesaj; }
    else kutu.style.display="none";

    document.getElementById("bo-sonuc-not").textContent =
      urun.ad + " için "+veri.boy+" cm / "+veri.kilo+" kg ve seçtiğiniz tercihlere göre size en uygun beden bu.";

    ANALITIK("oneri", { urun:urunKey, beden:beden, boy:veri.boy, kilo:veri.kilo });
  }

  // --- E-posta yakalama ---
  function epostaAc(baslik, meta){
    epostaMeta = meta || {};
    document.getElementById("bo-eposta-baslik").textContent = baslik || "Bedenini kaydet, sana özel öneriler gönderelim.";
    document.getElementById("bo-eposta").style.display = "block";
    document.getElementById("bo-eposta-tesekkur").style.display = "none";
    document.getElementById("bo-eposta-input").focus();
  }
  document.getElementById("bo-kaydet-ac").addEventListener("click", () =>
    epostaAc("Bedenini kaydet, sana özel öneriler ve indirimler gönderelim.", { tip:"kayit" }));
  document.getElementById("bo-eposta-gonder").addEventListener("click", () => {
    const inp = document.getElementById("bo-eposta-input");
    const mail = inp.value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)){ inp.classList.add("bo-hatali"); inp.focus(); return; }
    inp.classList.remove("bo-hatali");
    EPOSTA_KAYDET(mail, Object.assign({ urun:urunKey, beden:sonBeden, boy:veri.boy, kilo:veri.kilo }, epostaMeta));
    ANALITIK("eposta", Object.assign({ urun:urunKey }, epostaMeta));
    document.getElementById("bo-eposta-tesekkur").style.display = "block";
    inp.value = "";
  });

  // --- Geri bildirim ---
  overlay.querySelectorAll(".bo-gb-btn").forEach(b => b.addEventListener("click", () => {
    overlay.querySelectorAll(".bo-gb-btn").forEach(x=>x.classList.remove("bo-secili"));
    b.classList.add("bo-secili");
    document.getElementById("bo-gb-tesekkur").style.display = "inline";
    ANALITIK("geri_bildirim", { urun:urunKey, beden:sonBeden, sonuc:b.dataset.gb, boy:veri.boy, kilo:veri.kilo });
  }));

  // --- Dış sayfalarda kullanım için yardımcılar ---
  // Kayıtlı ölçülere göre bir kategori için bedeni döndürür (yoksa null)
  function kayitliBeden(key){
    if (!URUNLER[key]) return null;
    const u = URUNLER[key];
    if (u.altTurler) return null;   // alt tür seçimi gerektirir, rozet gösterilmez
    const k = Depo.oku(); if (!k || !k.boy || !k.kilo) return null;
    let idx = bedenIndex(u, k.boy, k.kilo).i;
    let e=(ETKI.omuz[k.omuz]||0)+(ETKI.vucut[k.vucut]||0)+(ETKI.kalip[k.kalip]||0); e=Math.max(-1,Math.min(1,e));
    idx = Math.max(0, Math.min(u.bedenler.length-1, idx + e + (u.kalipKaydir||0)));
    return u.bedenler[idx];
  }
  // Liste/ürün sayfalarında "Senin bedenin: X" rozetini yerleştirir
  function rozetYerlestir(selector, key){
    const b = kayitliBeden(key); if (!b) return;
    document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = '<span class="bo-beden-rozet">Senin bedenin: '+b+'</span>';
    });
  }

  return { ac, kapat, kayitliBeden, rozetYerlestir, olculeriUnut: () => Depo.temizle() };
})();
    window.bedenOneri = bedenOneri;
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',kur);else kur();
})();

} catch (e) { if (window.console) console.error("BedenOneri widget:", e); }

/* === Butonu "Sepete Ekle" satırının ÜSTÜne, ayrı tam-genişlik blok olarak koy === */
(function () {
  var n = 0;
  function sepetBul() {
    var sel = ['.SepeteEkle', '#SepeteEkle', 'a.SepeteEkle', '.btnSepeteEkle',
               '.sepeteEkle', '[onclick*="SepeteEkle"]', '[onclick*="sepeteEkle"]', '[onclick*="SepeteAt"]'];
    for (var i = 0; i < sel.length; i++) { var e = document.querySelector(sel[i]); if (e) return e; }
    var list = document.querySelectorAll('button, a, input[type="button"], input[type="submit"], .btn');
    for (var j = 0; j < list.length; j++) {
      var t = (list[j].textContent || list[j].value || '').trim().toLowerCase();
      if (t === 'sepete ekle') return list[j];
    }
    return null;
  }
  // "Sepete Ekle"yi içeren FLEX satırını (yatay dizili kapsayıcıyı) yukarı doğru bul
  function satirBul(el) {
    var cur = el;
    for (var k = 0; k < 6 && cur && cur.parentNode; k++) {
      var p = cur.parentNode;
      try {
        var disp = window.getComputedStyle(p).display;
        if (disp === 'flex' || disp === 'inline-flex') return cur; // bu satırın üstüne koyacağız
      } catch (e) {}
      cur = p;
    }
    return el.parentNode || el; // bulunamazsa en yakın kapsayıcı
  }
  function yap() {
    try {
      if (document.querySelector('.beden-oneri-btn')) return;
      var ref = sepetBul();
      if (!ref || !ref.parentNode) { if (n++ < 25) setTimeout(yap, 400); return; }

      // Butonu, tam genişlik kaplayan ayrı bir kapsayıcıya koy (flex satırına girmesin)
      var kutu = document.createElement('div');
      kutu.className = 'beden-oneri-kutu';
      kutu.style.width = '100%';
      kutu.style.flex = '0 0 100%';
      kutu.style.margin = '0 0 12px';

      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bo-tetik bo-tetik--ghost beden-oneri-btn';
      b.style.width = '100%';
      b.style.justifyContent = 'center';
      b.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:8px"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 7v3M10 7v4M14 7v3M18 7v4"/></svg>Hangi beden bana uyar?';
      b.onclick = function () { try { if (window.bedenOneri) window.bedenOneri.ac(); } catch (e) {} };
      kutu.appendChild(b);

      var satir = satirBul(ref);           // Sepete Ekle'nin bulunduğu yatay satır
      if (satir && satir.parentNode) {
        satir.parentNode.insertBefore(kutu, satir);   // o satırın ÜSTÜne
      } else {
        ref.parentNode.insertBefore(kutu, ref);
      }
    } catch (e) {}
  }
  yap();
})();
