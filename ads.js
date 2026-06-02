(function () {
  if (window.adsLoaded) return;
  window.adsLoaded = true;

  const path = window.location.pathname;

  // -----------------------------
  // RAID PAGES (HIGH EARNING)
  // -----------------------------
  if (path.includes("/raids/")) {

    // After title ad (300x250)
    const ad1 = document.createElement("div");
    ad1.innerHTML = `
      <div style="margin:15px 0; text-align:center;">
        <script>
          atOptions = {
            'key' : '0876037113957a982591d9b44df13267',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/0876037113957a982591d9b44df13267/invoke.js"></script>
      </div>
    `;
    document.body.appendChild(ad1);

    // Footer ad (728x90)
    const ad2 = document.createElement("div");
    ad2.innerHTML = `
      <div style="margin:20px auto; text-align:center;">
        <script>
          atOptions = {
            'key' : '8d41df8e84cff1ed8324de1c82591191',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/8d41df8e84cff1ed8324de1c82591191/invoke.js"></script>
      </div>
    `;
    document.body.appendChild(ad2);

    // Social bar (optional but high revenue)
    const sb = document.createElement("script");
    sb.src = "https://pl26325102.effectivecpmnetwork.com/62/8b/c1/628bc17080aadd318aa1decc35bf6e8b.js";
    document.body.appendChild(sb);
  }

  // -----------------------------
  // GUIDE PAGES (SEO SAFE)
  // -----------------------------
  else if (path.includes("/guides/")) {

    // Only ONE ad (safe for SEO)
    const ad = document.createElement("div");
    ad.innerHTML = `
      <div style="margin:20px auto; text-align:center;">
        <script>
          atOptions = {
            'key' : '0876037113957a982591d9b44df13267',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/0876037113957a982591d9b44df13267/invoke.js"></script>
      </div>
    `;
    document.body.appendChild(ad);
  }

  // -----------------------------
  // DEFAULT PAGES
  // -----------------------------
  else {
    const ad = document.createElement("div");
    ad.innerHTML = `
      <div style="margin:20px auto; text-align:center;">
        <script>
          atOptions = {
            'key' : '0876037113957a982591d9b44df13267',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        </script>
        <script src="https://www.highperformanceformat.com/0876037113957a982591d9b44df13267/invoke.js"></script>
      </div>
    `;
    document.body.appendChild(ad);
  }

})();