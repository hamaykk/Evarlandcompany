> Hama:
<!doctype html>
<html lang="ku">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>سەیرکردنی PDF — پەڕەی سەرەکی</title>
  <style>
    :root{
      --bg:#f6f7fb;
      --card:#ffffff;
      --accent:#0b63d6;
      --muted:#667085;
      --maxw:980px;
    }
    html,body{height:100%;margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;}
    body{background:linear-gradient(180deg,var(--bg),#eef2f9);display:flex;align-items:flex-start;justify-content:center;padding:28px;}
    .container{width:100%;max-width:var(--maxw);background:var(--card);box-shadow:0 10px 30px rgba(12,20,40,0.08);border-radius:10px;overflow:hidden;}
    header{padding:18px 22px;border-bottom:1px solid #eef3fb;display:flex;align-items:center;gap:14px;}
    header h1{margin:0;font-size:16px;color:#0d1b2a;}
    .actions{margin-left:auto;display:flex;gap:10px;align-items:center;}
    .btn{border:0;padding:8px 12px;border-radius:8px;font-weight:600;cursor:pointer;background:var(--accent);color:white;text-decoration:none;}
    .secondary{background:transparent;color:var(--accent);border:1px solid #d6e6ff;padding:7px 10px;}
    .viewer{height:72vh; min-height:420px;}
    iframe.pdfframe{width:100%;height:100%;border:0;background:#ddd;}
    .below{padding:18px 22px;background:linear-gradient(180deg,#fff,#fbfdff);display:flex;flex-wrap:wrap;gap:18px;align-items:flex-start;border-top:1px solid #f0f5fb;}
    .contact, .notes{flex:1 1 280px; min-width:260px;}
    .contact h2{margin:0 0 8px 0;font-size:14px;}
    .contact p{margin:6px 0;color:var(--muted);font-size:14px;}
    .field{display:flex;flex-direction:column;gap:6px;margin-bottom:10px;}
    .input{padding:10px;border-radius:8px;border:1px solid #e6eef9;background:#fbfdff;font-size:14px;}
    .sendrow{display:flex;gap:10px;align-items:center;}
    .small{font-size:13px;color:var(--muted);}
    footer{padding:14px 22px;background:#fbfdff;border-top:1px solid #f0f5fb;text-align:center;color:var(--muted);font-size:13px;}
    @media (max-width:600px){
      header{padding:12px;}
      .below{padding:12px;}
      .viewer{height:60vh;}
    }
  </style>
</head>
<body>
  <div class="container" role="main">
    <header>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><rect width="24" height="24" rx="6" fill="#eef6ff"/><path d="M7 8h10M7 12h6" stroke="#0b63d6" stroke-width="1.6" stroke-linecap="round"/></svg>
      <h1>سەیرکردنی «Local C&C V2.pdf»</h1>
      <div class="actions">
        <!-- ڕێگەی دابەزاندن -->
        <a class="btn" href="Local C&C V2.pdf" download>داگرتن</a>
        <!-- کرتە بکە بۆ کرتەی نوێ -->
        <a class="secondary" href="Local C&C V2.pdf" target="_blank" rel="noopener">بە تابی نوێ بکە</a>
      </div>
    </header>

    <div class="viewer" aria-label="PDF viewer">
      <!-- ئەگەر براوسەر پشتیوانی نەکرد iframe یەک fallback link ـەکەیش هەیە -->
      <iframe class="pdfframe" src="Local C&amp;C V2.pdf#toolbar=1&navpanes=0&view=FitH" title="PDF Viewer — Local C&C V2.pdf">
        <!-- fallback -->
        لێرەدا ئامادە دەبێت بە کرتەکردن بۆ دواگرتنی PDF: <a href="Local C&C V2.pdf">داگرتنی Local C&C V2.pdf</a>
      </iframe>
    </div>

    <div class="below">
      <div class="contact">
        <h2>پەیوەندی</h2>
        <p class="small">ئەم خاڵانە تۆ دەتوانیت گۆڕیان بکەیت — ئەمانە نمونەن کە وەردەگریت.</p>

        <div class="field">
          <label class="small">ناوی کۆمپانیا / ناو:</label>
          <input class="input" type="text" id="org" value="ناوی کۆمپانیا" />
        </div>

        <div class="field">
          <label class="small">تەلەفۆن:</label>
          <input class="input" type="tel" id="phone" value="+964-7xx-xxxxxxx" />
        </div>

        <div class="field">
          <label class="small">ئیمەیڵ:</label>
          <input class="input" type="email" id="email" value="info@example.com" />
        </div>

        <div class="field">
          <label class="small">ناونیشان:</label>

> Hama:
<input class="input" type="text" id="addr" value="هەولێر / بەرەو" />
        </div>

        <div class="sendrow">
          <!-- دەتوانیت فرمێک بکەیت کە mailto ـەکە بنێرێت -->
          <a id="mailtoBtn" class="btn" href="mailto:info@example.com?subject=پەیوەندی%20لە%20وێبسایت">ناردنی ئیمەیڵ</a>
          <button class="secondary" onclick="copyContact()" title="کۆپی زانیاری">کۆپی زانیاری</button>
        </div>
      </div>

      <div class="notes">
        <h2>تێبینی</h2>
        <p class="small">فایل PDF ــەکە لەناوی <strong>Local C&amp;C V2.pdf</strong> لە هەمان فولدەر بێت. من ئەم فایلە بەکارهێناوە لە دروستکردنی پێشاندانی وێبسایت.  [oai_citation:1‡Local C&C V2.pdf](file-service://file-6n4gZPUdc9GyQt185ipLrx)</p>
        <p class="small">ئەگەر دەتەوێت من دەتوانم فۆڕمەی پەیام (contact form) بەکارهێنانی PHP یان Google Forms ڕێکبخەم بۆ وەرگرتنی پەیامەکان — بێ پێویستی بە پایگە.</p>
      </div>
    </div>

    <footer>© ئەم وێبسایتە دروست کراوە بۆ نیشاندانی PDF و زانیاری پەیوەندی — ئەگەر پێویستت بە گۆڕانکاری زیاتر هەیە، بڵێن.</footer>
  </div>

  <script>
    // سەرەتایەک: نوێکردنەوەی mailto link بەپێی خانەکان
    function updateMailto() {
      const email = document.getElementById('email').value || 'info@example.com';
      const org = encodeURIComponent(document.getElementById('org').value || '');
      const subject = encodeURIComponent('پەیوەندی - ' + (org || 'وێبسایت'));
      const body = encodeURIComponent('ناو: ' + document.getElementById('org').value + '\\nتەلەفۆن: ' + document.getElementById('phone').value + '\\nناونیشان: ' + document.getElementById('addr').value + '\\n\\nپەیام: ');
      document.getElementById('mailtoBtn').href = mailto:${email}?subject=${subject}&body=${body};
    }
    // copy contact
    function copyContact(){
      const txt = Name: ${document.getElementById('org').value}\nPhone: ${document.getElementById('phone').value}\nEmail: ${document.getElementById('email').value}\nAddress: ${document.getElementById('addr').value};
      navigator.clipboard?.writeText(txt).then(()=> {
        alert('زانیاری کۆپی کرا.');
      }, ()=> {
        alert('کێشە لە کۆپی کردنی زانیاری — تکایە دەستکاری بکە و پەیوەندی بکە بە دەست.');
      });
    }

    // event listeners بۆ نوێکردن mailto هەموو کاتێک خانەیەک گۆڕدرا
    ['org','phone','email','addr'].forEach(id=>{
      document.getElementById(id).addEventListener('input', updateMailto);
    });
    updateMailto();
  </script>
</body>
</html>
