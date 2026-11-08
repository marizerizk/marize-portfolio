/* Marize Rizk — Creative Portfolio
   Plain JavaScript, no libraries. All content below comes from Marize's portfolio. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var BASE = "assets/video/";

  /* =========================================================
     DATA
     ========================================================= */
  var ICONS = {
    social: '<svg viewBox="0 0 48 48"><rect x="13" y="4" width="22" height="40" rx="5"/><path d="M21 9h6M24 33s-6-3.6-6-7.6a3.3 3.3 0 0 1 6-1.9 3.3 3.3 0 0 1 6 1.9c0 4-6 7.6-6 7.6Z"/></svg>',
    campaign: '<svg viewBox="0 0 48 48"><path d="M8 20v8l22 10V10L8 20Z"/><path d="M30 16a8 8 0 0 1 0 16M14 29l3 11h5l-2-9M38 14l4-3M38 34l4 3M40 24h5"/></svg>',
    event: '<svg viewBox="0 0 48 48"><path d="M6 16h8l4-6h12l4 6h8v24H6z"/><circle cx="24" cy="27" r="7"/><path d="M38 21h.01"/></svg>',
    pr: '<svg viewBox="0 0 48 48"><path d="M8 8h28v32H12a4 4 0 0 1-4-4V8Z"/><path d="M36 16h4v20a4 4 0 0 1-4 4M14 15h16M14 22h16M14 29h10"/></svg>',
    visual: '<svg viewBox="0 0 48 48"><rect x="6" y="8" width="36" height="32" rx="4"/><circle cx="17" cy="18" r="4"/><path d="m6 34 11-10 9 8 6-5 10 9"/></svg>'
  };

  var SERVICES = [
    { title: "Social Media Content", icon: "social", desc: "Posts, stories, reels, captions & content calendars", chips: ["Posts", "Stories", "Reels", "Captions", "Content calendars"] },
    { title: "Digital Campaigns", icon: "campaign", desc: "Campaign concepts, promotional content & platform execution", chips: ["Campaign concepts", "Promotional content", "Platform execution"] },
    { title: "Event Content", icon: "event", desc: "Live coverage, event visuals, stories & real-time communication", chips: ["Live coverage", "Event visuals", "Stories", "Real-time communication"] },
    { title: "PR & Communications", icon: "pr", desc: "Press releases, media content, proposals & client communications", chips: ["Press releases", "Media content", "Proposals", "Client communications"] },
    { title: "Visual Content", icon: "visual", desc: "Canva designs, social assets, presentations & promotional materials", chips: ["Canva designs", "Social assets", "Presentations", "Promotional materials"] }
  ];

  var WORK = [
    { group: 1, file: "work-01", dur: "0:09", alt: "Jeep event setup by the Pyramids" },
    { group: 1, file: "work-02", dur: "0:17", alt: "Illuminated Jeep stage at night" },
    { group: 1, file: "work-03", dur: "0:23", alt: "Guests arriving at an evening launch event" },
    { group: 1, file: "work-04", dur: "0:24", alt: "Automotive brand reveal" },
    { group: 2, file: "work-05", dur: "0:12", alt: "Gracias Latin Kitchen nachos" },
    { group: 2, file: "work-06", dur: "0:20", alt: "Diners sharing dishes at Gracias" },
    { group: 2, file: "work-07", dur: "0:09", alt: "Gracias Latin Kitchen food and storefront" },
    { group: 2, file: "work-08", dur: "0:24", alt: "December holiday content" },
    { group: 3, file: "work-09", dur: "0:09", alt: "Behind the scenes at a car showroom shoot" },
    { group: 3, file: "work-10", dur: "0:31", alt: "Car showcase at night" },
    { group: 3, file: "work-11", dur: "0:26", alt: "Egypt Automotive event entrance" },
    { group: 3, file: "work-12", dur: "0:18", alt: "Christmas greeting video" }
  ];

  var INDUSTRIES = [
    { title: "Education, Research & Technology", short: "Education & Research", who: "The American University in Cairo — A2K4D",
      desc: "Responsible AI, data governance, research communication, digital content, institutional events, and knowledge outreach.",
      chips: ["Responsible AI", "Data governance", "Research communication", "Digital content", "Institutional events", "Knowledge outreach"],
      caps: ["content", "events", "research"] },
    { title: "Automotive & Corporate", short: "Automotive & Corporate", who: "Stellantis Egypt — Jeep, Alfa Romeo & Fiat | NATCO",
      desc: "Brand campaigns, automotive launches, social media management, PR, event execution, and media coverage.",
      chips: ["Brand campaigns", "Automotive launches", "Social media management", "PR", "Event execution", "Media coverage"],
      caps: ["social", "campaigns", "pr", "events", "media"] },
    { title: "Food & Beverage", short: "Food & Beverage", who: "Gracias Latin Kitchen | Nespresso",
      desc: "Brand awareness, promotional campaigns, lifestyle content, customer engagement, influencer collaborations, and social media.",
      chips: ["Brand awareness", "Promotional campaigns", "Lifestyle content", "Customer engagement", "Influencer collaborations", "Social media"],
      caps: ["social", "campaigns", "content", "influencers"] },
    { title: "Development & Non-Profit", short: "Development & Non-Profit", who: "USAID",
      desc: "Public relations, communication support, social media, and campaign-related content.",
      chips: ["Public relations", "Communication support", "Social media", "Campaign-related content"],
      caps: ["social", "campaigns", "pr", "content"] },
    { title: "Lifestyle & Retail", short: "Lifestyle & Retail", who: "Select Jewelry", desc: "", chips: [], caps: null }
  ];

  /* =========================================================
     SPLIT TEXT (title letters)
     ========================================================= */
  $$(".split").forEach(function (el, n) {
    var text = el.textContent;
    el.textContent = "";
    el.setAttribute("aria-hidden", "true");
    var base = el.classList.contains("l2") ? 380 : 150;
    Array.prototype.forEach.call(text, function (c, i) {
      var s = document.createElement("span");
      if (c === " ") { s.className = "sp"; }
      else { s.className = "ch"; s.textContent = c; s.style.setProperty("--i", i); s.style.setProperty("--d", base + "ms"); }
      el.appendChild(s);
    });
  });

  /* Quote: words light up as you scroll */
  var quote = $("[data-words]");
  var quoteWords = [];
  if (quote) {
    var words = quote.textContent.trim().split(/\s+/);
    quote.setAttribute("aria-label", quote.textContent.trim());
    quote.textContent = "";
    words.forEach(function (w, i) {
      var s = document.createElement("span");
      s.className = "w"; s.textContent = w; s.setAttribute("aria-hidden", "true");
      quote.appendChild(s);
      if (i < words.length - 1) quote.appendChild(document.createTextNode(" "));
      quoteWords.push(s);
    });
  }

  /* =========================================================
     SERVICES EXPLORER
     ========================================================= */
  var etabs = $(".explorer__tabs");
  var ecard = $(".explorer__card");
  var etimer = $(".explorer__timer");
  var eIndex = 0, eAuto = true, eTimerId = null, ROTATE = 5000;
  if (etabs) {
    SERVICES.forEach(function (s, i) {
      var b = document.createElement("button");
      b.className = "etab"; b.type = "button"; b.setAttribute("role", "tab");
      b.innerHTML = '<span class="etab__n">0' + (i + 1) + '</span><span class="etab__t">' + s.title + '</span><span class="etab__arrow" aria-hidden="true">→</span>';
      b.addEventListener("click", function () { eAuto = false; etimer.classList.remove("run"); showService(i); });
      etabs.appendChild(b);
    });
    etimer.style.setProperty("--t", ROTATE + "ms");
    renderService(0);
  }
  function renderService(i) {
    var s = SERVICES[i];
    $(".explorer__icon").innerHTML = ICONS[s.icon];
    $(".explorer__title").textContent = s.title;
    $(".explorer__desc").textContent = s.desc;
    $(".explorer__chips").innerHTML = s.chips.map(function (c) { return "<li>" + c + "</li>"; }).join("");
    $$(".etab").forEach(function (t, k) { t.setAttribute("aria-selected", String(k === i)); t.tabIndex = k === i ? 0 : -1; });
  }
  function showService(i) {
    eIndex = (i + SERVICES.length) % SERVICES.length;
    ecard.classList.add("is-swapping");
    setTimeout(function () { renderService(eIndex); ecard.classList.remove("is-swapping"); }, 260);
    var active = $$(".etab")[eIndex];
    if (active && etabs.scrollWidth > etabs.clientWidth) etabs.scrollTo({ left: active.offsetLeft - 8, behavior: "smooth" });
    if (eAuto) restartTimer();
  }
  function restartTimer() {
    clearTimeout(eTimerId);
    etimer.classList.remove("run"); void etimer.offsetWidth; etimer.classList.add("run");
    eTimerId = setTimeout(function () { if (eAuto) showService(eIndex + 1); }, ROTATE);
  }
  if (etabs) {
    etabs.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); eAuto = false; showService(eIndex + 1); $$(".etab")[eIndex].focus(); }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); eAuto = false; showService(eIndex - 1); $$(".etab")[eIndex].focus(); }
    });
    if (!reduceMotion && "IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        if (en[0].isIntersecting && eAuto) restartTimer(); else clearTimeout(eTimerId);
      }, { threshold: .4 }).observe($(".explorer"));
    }
  }

  /* =========================================================
     WORK GRID
     ========================================================= */
  var reelsList = $(".reels");
  WORK.forEach(function (item, i) {
    var li = document.createElement("li");
    li.dataset.group = item.group;
    var btn = document.createElement("button");
    btn.className = "reel"; btn.type = "button";
    btn.setAttribute("aria-label", "Play video: " + item.alt);
    btn.innerHTML =
      '<img src="' + BASE + item.file + '.webp" alt="" loading="lazy" decoding="async">' +
      '<span class="reel__num">0' + item.group + ' · ' + String(i + 1).padStart(2, "0") + '</span>' +
      '<span class="reel__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z"/></svg></span>' +
      '<span class="reel__time">' + item.dur + "</span>";
    btn.addEventListener("click", function () { openViewer(i); });

    if (finePointer && !reduceMotion) {
      var preview;
      btn.addEventListener("mouseenter", function () {
        if (!preview) {
          preview = document.createElement("video");
          preview.src = BASE + item.file + ".mp4";
          preview.muted = true; preview.loop = true; preview.playsInline = true;
          preview.setAttribute("aria-hidden", "true");
          btn.insertBefore(preview, btn.children[1]);
        }
        var p = preview.play(); if (p && p.catch) p.catch(function () {});
        btn.classList.add("is-previewing");
      });
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        btn.style.setProperty("--ry", ((x - .5) * 14).toFixed(2) + "deg");
        btn.style.setProperty("--rx", ((.5 - y) * 14).toFixed(2) + "deg");
        btn.style.setProperty("--gx", (x * 100).toFixed(0) + "%");
        btn.style.setProperty("--gy", (y * 100).toFixed(0) + "%");
      });
      btn.addEventListener("mouseleave", function () {
        if (preview) preview.pause();
        btn.classList.remove("is-previewing");
        btn.style.setProperty("--rx", "0deg"); btn.style.setProperty("--ry", "0deg");
      });
    }
    li.appendChild(btn);
    reelsList.appendChild(li);
  });

  // Filters
  var visibleIdx = WORK.map(function (_, i) { return i; });
  $$(".filter").forEach(function (f) {
    f.addEventListener("click", function () {
      $$(".filter").forEach(function (o) { o.classList.toggle("is-active", o === f); o.setAttribute("aria-pressed", String(o === f)); });
      var g = f.dataset.filter;
      var items = $$(".reels li");
      items.forEach(function (li) { li.classList.add("is-out"); });
      setTimeout(function () {
        visibleIdx = [];
        items.forEach(function (li, i) {
          var show = g === "all" || li.dataset.group === g;
          li.classList.toggle("is-gone", !show);
          if (show) visibleIdx.push(i);
        });
        requestAnimationFrame(function () {
          items.forEach(function (li, k) {
            if (!li.classList.contains("is-gone")) setTimeout(function () { li.classList.remove("is-out"); }, 40 * (k % 4));
          });
        });
      }, 300);
    });
  });

  /* =========================================================
     VIDEO VIEWER
     ========================================================= */
  var viewer = $(".viewer"), vVideo = $(".viewer__video"), vCount = $(".viewer__count"), current = 0;
  function show(i) {
    var pos = visibleIdx.indexOf(i);
    if (pos === -1) { visibleIdx = WORK.map(function (_, k) { return k; }); pos = i; }
    current = i;
    var item = WORK[i];
    vVideo.src = BASE + item.file + ".mp4";
    vVideo.poster = BASE + item.file + ".webp";
    vVideo.setAttribute("aria-label", item.alt);
    vCount.textContent = "WORK PORTFOLIO (0" + item.group + ") · " + (pos + 1) + " / " + visibleIdx.length;
    var p = vVideo.play(); if (p && p.catch) p.catch(function () {});
  }
  function step(dir) {
    var pos = visibleIdx.indexOf(current);
    show(visibleIdx[(pos + dir + visibleIdx.length) % visibleIdx.length]);
  }
  function openViewer(i) {
    $$(".reel video").forEach(function (v) { v.pause(); });
    if (typeof viewer.showModal === "function") viewer.showModal(); else viewer.setAttribute("open", "");
    document.body.style.overflow = "hidden";
    show(i);
  }
  function closeViewer() {
    vVideo.pause(); vVideo.removeAttribute("src"); vVideo.load();
    if (viewer.open && viewer.close) viewer.close(); else viewer.removeAttribute("open");
    document.body.style.overflow = "";
  }
  $(".viewer__close").addEventListener("click", closeViewer);
  $(".viewer__prev").addEventListener("click", function () { step(-1); });
  $(".viewer__next").addEventListener("click", function () { step(1); });
  viewer.addEventListener("cancel", function (e) { e.preventDefault(); closeViewer(); });
  viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });
  document.addEventListener("keydown", function (e) {
    if (!viewer.open) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  vVideo.addEventListener("ended", function () { step(1); });
  var sx = null;
  viewer.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  viewer.addEventListener("touchend", function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
    sx = null;
  });

  /* =========================================================
     INDUSTRY EXPLORER + CAPABILITY MATRIX
     ========================================================= */
  var ilist = $(".industry__list"), ipanel = $(".industry__panel"), iIndex = 0;
  var itimer = $(".industry__timer"), iAuto = true, iTimerId = null, IROTATE = 5000, iHover = false;
  INDUSTRIES.forEach(function (ind, i) {
    var b = document.createElement("button");
    b.className = "itab"; b.type = "button"; b.setAttribute("role", "tab");
    b.innerHTML = '<span class="itab__n">0' + (i + 1) + '</span><span class="itab__t">' + ind.short + '</span><span class="itab__c">' + ind.who + "</span>";
    b.addEventListener("click", function () { iAuto = false; itimer.classList.remove("run"); clearTimeout(iTimerId); showIndustry(i); });
    ilist.appendChild(b);
  });
  function renderIndustry(i) {
    var ind = INDUSTRIES[i];
    $(".industry__num").textContent = "0" + (i + 1);
    $(".industry__title").textContent = ind.title;
    $(".industry__who").textContent = ind.who;
    var d = $(".industry__desc"); d.textContent = ind.desc; d.style.display = ind.desc ? "" : "none";
    $(".industry__chips").innerHTML = ind.chips.map(function (c) { return "<li>" + c + "</li>"; }).join("");
    $$(".itab").forEach(function (t, k) { t.setAttribute("aria-selected", String(k === i)); t.tabIndex = k === i ? 0 : -1; });
  }
  function showIndustry(i) {
    iIndex = (i + INDUSTRIES.length) % INDUSTRIES.length;
    ipanel.classList.add("is-swapping");
    setTimeout(function () { renderIndustry(iIndex); ipanel.classList.remove("is-swapping"); }, 240);
    var activeTab = $$(".itab")[iIndex];
    if (activeTab && ilist.scrollWidth > ilist.clientWidth) ilist.scrollTo({ left: activeTab.offsetLeft - 8, behavior: "smooth" });
    if (iAuto) restartITimer();
  }
  ilist.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); iAuto = false; showIndustry(iIndex + 1); $$(".itab")[iIndex].focus(); }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); iAuto = false; showIndustry(iIndex - 1); $$(".itab")[iIndex].focus(); }
  });
  renderIndustry(0);
  function restartITimer() {
    clearTimeout(iTimerId);
    itimer.style.setProperty("--t", IROTATE + "ms");
    itimer.classList.remove("run"); void itimer.offsetWidth; itimer.classList.add("run");
    iTimerId = setTimeout(function () { if (iAuto) showIndustry(iIndex + 1); }, IROTATE);
  }
  if (!reduceMotion && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      if (en[0].isIntersecting && iAuto) restartITimer();
      else { clearTimeout(iTimerId); itimer.classList.remove("run"); }
    }, { threshold: .4 }).observe($(".industry"));
  }

  /* =========================================================
     COUNTERS
     ========================================================= */
  function countUp(el) {
    var to = +el.dataset.count, t0 = null, dur = 1400;
    if (reduceMotion) { el.textContent = to; return; }
    function tick(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e);
      if (k < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add("is-in");
        $$("[data-count]", el).forEach(countUp);
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$("[data-reveal]").forEach(function (el) {
      var sib = el.parentElement ? $$(":scope > [data-reveal]", el.parentElement).indexOf(el) : 0;
      el.style.transitionDelay = Math.max(0, sib) * 90 + "ms";
      io.observe(el);
    });
    // Title letters animate when their folder comes into view
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("go"); so.unobserve(en.target); } });
    }, { threshold: 0.3 });
    $$(".split").forEach(function (el) { so.observe(el); });
  } else {
    $$("[data-reveal]").forEach(function (el) { el.classList.add("is-in"); });
    $$("[data-count]").forEach(function (el) { el.textContent = el.dataset.count; });
    $$(".split").forEach(function (el) { el.classList.add("go"); });
  }
  // Clear stagger delays after reveal so hover effects stay snappy
  document.addEventListener("transitionend", function (e) {
    if (e.target.hasAttribute && e.target.hasAttribute("data-reveal") && e.propertyName === "opacity") e.target.style.transitionDelay = "";
  });

  /* =========================================================
     SCROLL-LINKED EFFECTS
     ========================================================= */
  var nav = $(".nav"), bar = $(".progress span"), lastY = window.scrollY, ticking = false;
  var tl = $(".timeline"), tlLine = $(".timeline__line i"), steps = $$(".step");
  var parallax = $$("[data-speed]");
  var navOpen = false;
  function onScroll() {
    var y = window.scrollY, vh = window.innerHeight, max = document.documentElement.scrollHeight - vh;
    bar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    nav.classList.toggle("is-scrolled", y > 30);
    if (!navOpen) nav.classList.toggle("is-hidden", y > lastY && y > 500);
    lastY = y;

    if (tl) {
      var r = tl.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
      tlLine.style.setProperty("--p", reduceMotion ? 1 : p);
      steps.forEach(function (s) { s.classList.toggle("on", reduceMotion || s.getBoundingClientRect().top < vh * 0.72); });
    }
    if (quote && !reduceMotion) {
      var q = quote.getBoundingClientRect();
      var qp = Math.min(1, Math.max(0, (vh * 0.85 - q.top) / (vh * 0.5)));
      var n = Math.round(qp * quoteWords.length);
      quoteWords.forEach(function (w, i) { w.classList.toggle("on", i < n); });
    } else if (quote) { quoteWords.forEach(function (w) { w.classList.add("on"); }); }
    if (!reduceMotion) {
      parallax.forEach(function (el) {
        var rr = el.parentElement.getBoundingClientRect();
        el.style.transform = "translateY(" + ((rr.top + rr.height / 2 - vh / 2) * +el.dataset.speed).toFixed(1) + "px)";
      });
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* =========================================================
     POINTER EFFECTS (desktop)
     ========================================================= */
  if (finePointer && !reduceMotion) {
    // Folder scenes: layers shift with the mouse for depth
    $$("[data-tilt-scene]").forEach(function (scene) {
      var layers = $$("[data-depth]", scene);
      scene.addEventListener("mousemove", function (e) {
        var r = scene.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        layers.forEach(function (l) {
          var d = +l.dataset.depth;
          var rot = l.classList.contains("folder") ? " rotateY(" + (x * 6).toFixed(2) + "deg) rotateX(" + (-y * 6).toFixed(2) + "deg)" : "";
          l.style.transform = "translate3d(" + (x * d).toFixed(1) + "px," + (y * d).toFixed(1) + "px,0)" + rot;
        });
      });
      scene.addEventListener("mouseleave", function () { layers.forEach(function (l) { l.style.transform = ""; }); });
    });

    // Gentle 3D tilt on paper cards
    $$("[data-tilt]").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.setProperty("--ry", (x * 8).toFixed(2) + "deg");
        el.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
      });
      el.addEventListener("mouseleave", function () { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
    });

    // Magnetic buttons
    $$(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * .25).toFixed(1) + "px," + ((e.clientY - r.top - r.height / 2) * .35).toFixed(1) + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });

    // Custom cursor
    var cursor = $(".cursor"), label = $(".cursor__label");
    doc.classList.add("has-cursor");
    var cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    window.addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; cursor.classList.remove("is-hidden"); });
    document.addEventListener("mouseleave", function () { cursor.classList.add("is-hidden"); });
    (function loop() {
      cx += (tx - cx) * .22; cy += (ty - cy) * .22;
      cursor.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      var t = e.target;
      var reel = t.closest && t.closest(".reel");
      var inViewer = t.closest && t.closest(".viewer");
      cursor.classList.toggle("is-play", !!reel);
      label.textContent = reel ? "Play" : "";
      cursor.classList.toggle("is-hover", !reel && !!(t.closest && t.closest("a, button, .pillars li")));
      cursor.style.display = inViewer ? "none" : "";
    });
  }

  /* =========================================================
     NAV, COPY, MISC
     ========================================================= */
  var toggle = $(".nav__toggle"), links = $("#nav-links");
  toggle.addEventListener("click", function () {
    navOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(navOpen));
    toggle.setAttribute("aria-label", navOpen ? "Close menu" : "Open menu");
    links.classList.toggle("is-open", navOpen);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { navOpen = false; toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); }
  });

  var navMap = {};
  $$('a[href^="#"]', links).forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = navMap[en.target.id];
        if (a && en.isIntersecting) { Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("is-active"); }); a.classList.add("is-active"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(navMap).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  var toast = $(".toast"), toastT;
  function say(msg) { toast.textContent = msg; toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { toast.classList.remove("show"); }, 2200); }
  $$("[data-copy]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.dataset.copy;
      var done = function () { say("Number copied: +20 1065090040"); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(v).then(done, function () { say(v); });
      else { var ta = document.createElement("textarea"); ta.value = v; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (err) { say(v); } ta.remove(); }
    });
  });

  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
})();
