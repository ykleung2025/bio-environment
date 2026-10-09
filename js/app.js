(function () {
  "use strict";

  var STORAGE_KEY = "bio-env-done-v1";
  var NEED = 3;

  var HABITAT = {
    polar: { name: "極地", hint: "冰雪、寒冷" },
    desert: { name: "沙漠", hint: "乾旱、炎熱" }
  };

  var EVIDENCE = {
    "thick-fur": "厚毛皮保暖",
    "white-coat": "白色毛皮作保護色",
    "small-ears": "耳朵細小減少散熱",
    "blubber": "厚脂肪層保暖",
    "streamline": "流線形身體利游泳",
    "sea-ice": "能在海冰上休息",
    "dense-feather": "密羽毛防水保暖",
    huddle: "互相靠攏取暖",
    "white-feather": "白色羽毛作保護色",
    "thick-down": "厚羽毛保暖",
    "feathered-feet": "腳趾有羽毛保暖",
    sidewind: "側行減少接觸熱沙",
    "big-ears": "大耳朵散熱",
    "pale-coat": "淺色毛皮反射陽光",
    nocturnal: "夜晚活動避開高溫",
    "hard-shell": "硬殼減少失水",
    burrow: "挖地洞躲避酷熱",
    "store-water": "體內儲存水分",
    "sand-color": "體色像沙地",
    scales: "鱗片減少失水",
    "bury-sand": "躲進沙子裡避熱"
  };

  var ORGANISMS = [
    {
      id: "arctic-fox",
      name: "北極狐",
      alias: "",
      kind: "animal",
      habitat: "polar",
      image: "images/arctic-fox.jpg",
      alt: "一隻白色北極狐走在積雪的山坡上",
      emoji: "🦊",
      intro: "先看照片，再讀資料。北極狐是生活在寒冷地區的狐狸。",
      observations: [
        "冬天的毛皮是白色的，跟雪地很相似。",
        "毛又厚又密，身體圓圓的，耳朵又短又小。",
        "腳掌也長了毛，在雪地上比較保暖。"
      ],
      evidence: ["thick-fur", "white-coat", "small-ears"],
      chips: ["thick-fur", "white-coat", "small-ears", "big-ears", "burrow", "nocturnal", "blubber", "scales"],
      hint: "厚毛皮和細小的耳朵，都是為了保住身體的熱。想一想：哪一種環境特別寒冷？",
      explain: "北極狐有厚毛皮、白色保護色和較短的耳朵，這些特徵幫助牠在極地保暖，也不容易在雪地裡被發現。",
      eco: "良好的生態環境是動物的家，也關係民生福祉。極地冰雪很脆弱，節約能源、減少浪費，就是在保護生態。"
    },
    {
      id: "sidewinder",
      name: "響尾蛇",
      alias: "角響尾蛇",
      kind: "animal",
      habitat: "desert",
      image: "images/sidewinder.jpg",
      alt: "一條體色像沙子的角響尾蛇盤在沙地上",
      emoji: "🐍",
      intro: "先看照片，再讀資料。角響尾蛇生活在很熱的沙漠沙地。",
      observations: [
        "身上的顏色像沙地，不容易被發現。",
        "牠用側行的方式移動，身體較少貼著燙熱的沙。",
        "多在清晨、黃昏或夜晚活動，避開最熱的時候。"
      ],
      evidence: ["sand-color", "sidewind", "nocturnal"],
      chips: ["sand-color", "sidewind", "nocturnal", "blubber", "white-coat", "thick-fur", "huddle", "feathered-feet"],
      hint: "側行和夜晚活動，都是為了少碰燙沙、避開高溫。哪一種環境的地面特別熱？",
      explain: "角響尾蛇的體色像沙地，側行可以減少接觸熱沙，又會在較涼的時候出來。這些特徵幫助牠生活在沙漠。",
      eco: "響尾蛇是沙漠生態的一分子。看見蛇不要傷害牠。尊重生命，生態才會保持完整。"
    },
    {
      id: "penguin",
      name: "皇帝企鵝",
      alias: "生活在南極",
      kind: "animal",
      habitat: "polar",
      image: "images/emperor-penguin.jpg",
      alt: "一隻成年皇帝企鵝和一隻幼企鵝站在南極的雪地上",
      emoji: "🐧",
      intro: "先看照片，再讀資料。皇帝企鵝生活在南極。南極終年冰雪，也是極地。",
      observations: [
        "羽毛又密又防水，皮下有厚脂肪。",
        "天氣很冷時，牠們會互相靠在一起取暖。",
        "翅膀像鰭，適合在海裡游泳找食物。"
      ],
      evidence: ["blubber", "dense-feather", "huddle"],
      chips: ["blubber", "dense-feather", "huddle", "big-ears", "sidewind", "burrow", "sand-color", "nocturnal"],
      hint: "密羽毛、厚脂肪和擠在一起，都是為了對抗嚴寒。再選一次環境吧。",
      explain: "皇帝企鵝生活在南極。南極和北極一樣，都是寒冷的極地。厚脂肪、密羽毛和互相靠攏，幫助牠們在冰雪中保暖。",
      eco: "生物與環境互相依存。南極生態一旦受破壞便很難恢復，我們要一起保育環境。"
    },
    {
      id: "sand-lizard",
      name: "沙蜥",
      alias: "",
      kind: "animal",
      habitat: "desert",
      image: "images/sand-lizard.jpg",
      alt: "一隻體色像沙子的沙蜥趴在沙地上",
      emoji: "🦎",
      intro: "先看照片，再讀資料。沙蜥常在乾熱的沙地上活動。",
      observations: [
        "身體顏色像沙地，不容易被發現。",
        "身上的鱗片幫助減少水分流失。",
        "沙子太熱的時候，牠會躲進沙子裡。"
      ],
      evidence: ["sand-color", "scales", "bury-sand"],
      chips: ["sand-color", "scales", "bury-sand", "blubber", "white-coat", "thick-fur", "feathered-feet", "dense-feather"],
      hint: "體色像沙，又會躲進沙子裡，這些特徵跟炎熱、缺水的地方有關。",
      explain: "沙蜥的體色像沙地，鱗片能減少失水，太熱時還會躲進沙裡。所以牠適合生活在沙漠。",
      eco: "細小的生物也是生態的一部分。愛護牠們，就是保護整個環境，也是保護生物物種安全。"
    },
    {
      id: "snowy-owl",
      name: "雪鴞",
      alias: "",
      kind: "animal",
      habitat: "polar",
      image: "images/snowy-owl.jpg",
      alt: "一隻白色雪鴞停在樹枝上，羽毛厚密，腳趾也有羽毛",
      emoji: "🦉",
      intro: "先看照片，再讀資料。雪鴞是生活在極地的大貓頭鷹。",
      observations: [
        "羽毛大多是白色的，在雪地裡不容易被發現。",
        "羽毛又厚又密，幫助在嚴寒中保暖。",
        "腳趾也蓋著羽毛，好像穿了雪靴。"
      ],
      evidence: ["white-feather", "thick-down", "feathered-feet"],
      chips: ["white-feather", "thick-down", "feathered-feet", "big-ears", "burrow", "scales", "store-water", "pale-coat"],
      hint: "白色羽毛和腳上的羽毛，都是為了在冰雪裡隱藏和保暖。哪一種環境特別寒冷？",
      explain: "雪鴞有白色羽毛作保護色，厚羽毛和蓋著羽毛的腳趾幫助牠在極地保暖。",
      eco: "雪鴞要在完整的極地環境裡覓食。保護棲息地，就是保護生物和環境互相依存的關係。"
    },
    {
      id: "desert-tortoise",
      name: "沙漠陸龜",
      alias: "",
      kind: "animal",
      habitat: "desert",
      image: "images/desert-tortoise.jpg",
      alt: "一隻沙漠陸龜在沙地上行走，背上有堅硬的殼",
      emoji: "🐢",
      intro: "先看照片，再讀資料。沙漠陸龜行動慢，卻很會應付乾旱。",
      observations: [
        "堅硬的殼可以保護身體，也有助減少水分散失。",
        "天氣太熱時，牠會挖地洞躲起來。",
        "身體可以儲存水分，耐得住很久不下雨。"
      ],
      evidence: ["hard-shell", "burrow", "store-water"],
      chips: ["hard-shell", "burrow", "store-water", "thick-fur", "big-ears", "dense-feather", "huddle", "white-feather"],
      hint: "挖地洞和儲存水分，都是為了應付炎熱和缺水。再想想環境吧。",
      explain: "沙漠陸龜會挖地洞避開酷熱，硬殼有助減少失水，身體又能儲存水分，所以適合乾旱的沙漠。",
      eco: "尊重生命，看見陸龜不要捉走。野生動物應該留在原來的環境。"
    },
    {
      id: "ringed-seal",
      name: "環斑海豹",
      alias: "",
      kind: "animal",
      habitat: "polar",
      image: "images/ringed-seal.jpg",
      alt: "一隻環斑海豹的特寫，毛皮上有淺色環紋",
      emoji: "🦭",
      intro: "先看照片，再讀資料。環斑海豹常在有海冰的寒冷海洋生活。",
      observations: [
        "皮下有厚厚的脂肪，在冰冷海水裡保持溫暖。",
        "身體呈流線形，四肢像槳，方便游泳。",
        "牠會爬上海冰休息，也在冰下找食物。"
      ],
      evidence: ["blubber", "streamline", "sea-ice"],
      chips: ["blubber", "streamline", "sea-ice", "big-ears", "white-coat", "nocturnal", "sand-color", "sidewind"],
      hint: "厚脂肪和海冰都跟冰冷的水域有關。極地和沙漠，哪裡會有海冰？",
      explain: "環斑海豹靠厚脂肪在冷水中保暖，流線形的身體方便游泳，也會在海冰上休息。這些特徵配合有冰的極地海洋。",
      eco: "海洋乾淨，海豹才有安全的家。不要亂丟垃圾，一起保護海洋和生物物種安全。"
    },
    {
      id: "fennec",
      name: "耳廓狐",
      alias: "芬內克狐",
      kind: "animal",
      habitat: "desert",
      image: "images/fennec-fox.jpg",
      alt: "耳廓狐的頭部特寫，可見一對很大的耳朵",
      emoji: "🦊",
      intro: "先看照片，再讀資料。耳廓狐最顯眼的地方，是那對很大的耳朵。",
      observations: [
        "耳朵又大又薄，能夠把身體的熱散走。",
        "毛皮顏色淺，可以反射強烈的陽光。",
        "牠多在夜晚出來活動，避開白天的高溫。"
      ],
      evidence: ["big-ears", "pale-coat", "nocturnal"],
      chips: ["big-ears", "pale-coat", "nocturnal", "blubber", "small-ears", "white-coat", "feathered-feet", "huddle"],
      hint: "大大的耳朵用來散熱，夜晚才出來是為了避開高溫。哪一種環境又熱又乾？",
      explain: "耳廓狐的大耳朵幫助散熱，淺色毛皮可以反射陽光，夜晚活動則避開沙漠白天的酷熱。",
      eco: "沙漠看起來空曠，仍然是許多生物的家。不要破壞植被，珍惜這些棲息地。"
    }
  ];

  var state = {
    screen: "gallery",
    orgId: null,
    step: "observe",
    habitat: null,
    picked: [],
    chipOrder: [],
    notice: "",
    feedback: null,
    speech: false,
    done: loadDone()
  };

  var lastFocusKey = "";
  var lastSpeechKey = "";
  var lastLive = "";
  var ghost = null;
  var ghostOffsetX = 0;
  var ghostOffsetY = 0;
  var swallowClick = false;

  var app = document.getElementById("app");
  var live = document.getElementById("live");

  function loadDone() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(raw)) return new Set();
      return new Set(raw.filter(function (id) {
        return ORGANISMS.some(function (org) { return org.id === id; });
      }));
    } catch (err) {
      return new Set();
    }
  }

  function saveDone() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state.done)));
    } catch (err) {
      /* private mode */
    }
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch];
    });
  }

  function orgById(id) {
    return ORGANISMS.filter(function (org) { return org.id === id; })[0] || null;
  }

  function currentOrg() {
    return orgById(state.orgId);
  }

  function kindLabel(org) {
    return org.kind === "plant" ? "植物" : "動物";
  }

  function pronoun(org) {
    return org.kind === "plant" ? "它" : "牠";
  }

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function validateData() {
    var banned = ["北極熊", "海象", "刺蝟", "駱駝", "狐獴", "非洲盾臂龜", "非洲跳鼠"];
    var habitats = { polar: 0, desert: 0 };
    if (ORGANISMS.length !== 8) throw new Error("count");
    ORGANISMS.forEach(function (org) {
      if (org.kind !== "animal") throw new Error("not animal " + org.id);
      if (org.evidence.length < NEED) throw new Error("evidence " + org.id);
      org.evidence.forEach(function (id) {
        if (!EVIDENCE[id] || org.chips.indexOf(id) === -1) throw new Error("chip " + org.id + " " + id);
      });
      if (banned.some(function (word) { return org.name.indexOf(word) !== -1; })) {
        throw new Error("banned " + org.name);
      }
      habitats[org.habitat] += 1;
    });
    if (!habitats.polar || !habitats.desert) throw new Error("habitats");
  }

  function photoHtml(org, className) {
    return '<img class="' + className + '" src="' + esc(org.image) + '" alt="' + esc(org.alt) + '" draggable="false">';
  }

  function fallbackHtml(org) {
    var habitatClass = org.habitat === "polar" ? "ph-polar" : "ph-desert";
    return '<div class="ph ' + habitatClass + '" role="img" aria-label="' + esc(org.alt) + '"><span class="ph-emoji">' + org.emoji + '</span><span>' + esc(org.name) + '</span></div>';
  }

  function attachImageFallback(root) {
    root.querySelectorAll("img").forEach(function (img) {
      img.addEventListener("error", function () {
        var org = ORGANISMS.filter(function (item) {
          return img.getAttribute("src") === item.image;
        })[0];
        if (!org) return;
        img.insertAdjacentHTML("afterend", fallbackHtml(org));
        img.remove();
      });
    });
  }

  function announce(text) {
    if (!text || text === lastLive) return;
    lastLive = text;
    live.textContent = text;
  }

  function updateChrome() {
    var total = ORGANISMS.length;
    var done = state.done.size;
    document.getElementById("progress-label").textContent = "已完成 " + done + "/" + total;
    document.getElementById("progress-bar").style.width = ((done / total) * 100) + "%";
    var track = document.getElementById("progress-track");
    track.setAttribute("aria-valuenow", String(done));
    track.setAttribute("aria-valuemax", String(total));
    var speakBtn = document.getElementById("speak-btn");
    speakBtn.setAttribute("aria-pressed", state.speech ? "true" : "false");
    speakBtn.textContent = state.speech ? "停止朗讀" : "朗讀";
  }

  function focusKey() {
    return [state.screen, state.orgId, state.step, state.feedback].join("|");
  }

  function speechText() {
    var org = currentOrg();
    if (state.screen === "gallery") {
      var extra = state.done.size === ORGANISMS.length ? "八種生物都完成了。記得愛護牠們的家。" : "請選一種生物，觀察特徵，再判斷環境。";
      return extra;
    }
    if (!org) return "";
    if (state.step === "observe") {
      return org.name + "。" + org.intro + org.observations.join("");
    }
    if (state.step === "habitat") {
      return "根據特徵，" + pronoun(org) + "比較適合極地還是沙漠？可以點選，也可以拖動卡片。";
    }
    if (state.step === "evidence") {
      return "你選擇了" + HABITAT[state.habitat].name + "。請把三項正確證據放進我的證據。不正確的會彈回去。";
    }
    if (state.feedback === "right") {
      return org.name + "適合生活在" + HABITAT[org.habitat].name + "。" + org.explain + org.eco;
    }
    return org.hint;
  }

  function speak(text) {
    if (!state.speech || !text || !window.speechSynthesis) return;
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-HK";
    utter.rate = 0.95;
    var voices = window.speechSynthesis.getVoices();
    var voice = voices.filter(function (item) { return item.lang.toLowerCase().indexOf("zh-hk") === 0; })[0]
      || voices.filter(function (item) { return /hong kong|cantonese/i.test(item.name); })[0]
      || voices.filter(function (item) { return item.lang.toLowerCase().indexOf("zh") === 0; })[0];
    if (voice) utter.voice = voice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function render() {
    updateChrome();
    if (state.screen === "gallery") renderGallery();
    else renderPlay();
    attachImageFallback(app);
    bindPlayEvents();
    var key = focusKey();
    if (key !== lastFocusKey) {
      lastFocusKey = key;
      var heading = app.querySelector(".step-title") || app.querySelector("h2");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
      if (state.speech && key !== lastSpeechKey) {
        lastSpeechKey = key;
        speak(speechText());
      }
      announce(speechText());
    }
  }

  function renderGallery() {
    var cards = ORGANISMS.map(function (org) {
      var done = state.done.has(org.id);
      var tag = done ? '<span class="done-tag">已完成 · ' + esc(HABITAT[org.habitat].name) + "</span>" : "";
      return '<button type="button" class="org-card' + (done ? " is-done" : "") + '" data-organism="' + esc(org.id) + '" aria-label="' + esc(org.name + "，" + kindLabel(org) + (done ? "，已完成" : "")) + '">'
        + photoHtml(org, "photo")
        + '<span class="meta"><span class="name">' + esc(org.name) + "</span>" + tag
        + '<span class="kind">' + kindLabel(org) + "</span></span></button>";
    }).join("");
    var banner = state.done.size === ORGANISMS.length
      ? '<p class="done-banner">八種生物都觀察完了。你已能用特徵和證據，連繫生物與環境。記得愛護牠們，保護生態。</p>'
      : "";
    app.innerHTML = '<section class="lede"><h2>選一種生物</h2><p>觀察特徵，推論牠適合極地還是沙漠，再找出支持你的證據。</p>' + banner + "</section>"
      + '<div class="card-grid">' + cards + "</div>";
  }

  function renderPlay() {
    var org = currentOrg();
    app.innerHTML = '<div class="play">' + dossierHtml(org) + '<section class="stage">' + stageHtml(org) + "</section></div>";
    var shaker = state.notice ? app.querySelector('[data-chip="' + state.shakeId + '"]') : null;
    if (shaker) shaker.classList.add("shake");
  }

  function dossierHtml(org) {
    var alias = org.alias ? '<p class="alias">' + esc(org.alias) + "</p>" : "";
    var items = org.observations.map(function (line) { return "<li>" + esc(line) + "</li>"; }).join("");
    var open = state.step === "observe" || window.matchMedia("(min-width: 900px)").matches ? " open" : "";
    return '<aside class="dossier"><div class="photo-wrap">' + photoHtml(org, "photo") + "</div><div class=\"dossier-body\">"
      + "<h2>" + esc(org.name) + "</h2>" + alias
      + '<p class="kind">' + kindLabel(org) + "</p>"
      + "<details class=\"obs-details\"" + open + "><summary>觀察與資料</summary><ul class=\"obs\">" + items + "</ul></details>"
      + "</div></aside>";
  }

  function stageHtml(org) {
    if (state.step === "result") return resultHtml(org);
    return stepperHtml() + stepBody(org) + noticeHtml();
  }

  function stepperHtml() {
    var steps = [
      ["observe", "1 觀察"],
      ["habitat", "2 選環境"],
      ["evidence", "3 找證據"]
    ];
    return '<ol class="steps">' + steps.map(function (item) {
      var id = item[0];
      var enabled = canOpen(id);
      var current = state.step === id ? ' aria-current="step"' : "";
      return '<li><button type="button" data-step="' + id + '"' + current + (enabled ? "" : " disabled") + ">" + item[1] + "</button></li>";
    }).join("") + "</ol>";
  }

  function canOpen(step) {
    if (step === "observe" || step === "habitat") return true;
    if (step === "evidence") return !!state.habitat;
    return false;
  }

  function stepBody(org) {
    if (state.step === "observe") {
      return "<h2 class=\"step-title\">看看" + esc(org.name) + "</h2><p class=\"help\">" + esc(org.intro) + "</p>"
        + actionBar('<button type="button" class="btn btn-secondary" data-action="gallery">所有生物</button>'
          + '<button type="button" class="btn btn-primary" data-action="next-habitat">下一步：選擇環境</button>');
    }
    if (state.step === "habitat") {
      return "<h2 class=\"step-title\">選擇自然環境</h2><p class=\"help\">根據特徵，" + pronoun(org) + "比較適合哪一種環境？點選環境，或把卡片拖進去。</p>"
        + '<div class="token-row"><div id="org-token" class="token">' + photoHtml(org, "") + "<span>" + esc(org.name) + "</span></div></div>"
        + '<div class="habitats">' + zoneButton("polar") + zoneButton("desert") + "</div>"
        + actionBar('<button type="button" class="btn btn-secondary" data-action="prev-observe">返回觀察</button>'
          + '<button type="button" class="btn btn-primary" data-action="next-evidence"' + (state.habitat ? "" : " disabled") + ">下一步：搜集證據</button>");
    }
    var pickedHabitat = '<div class="picked-habitat"><span class="pill">你暫時判斷：' + esc(HABITAT[state.habitat].name) + "</span>"
      + '<button type="button" class="btn btn-secondary" data-action="prev-habitat">更改環境</button></div>';
    var pool = state.chipOrder.filter(function (id) { return state.picked.indexOf(id) === -1; });
    var poolChips = pool.map(function (id) { return chipButton(org, id, false); }).join("");
    var zoneChips = state.picked.map(function (id) { return chipButton(org, id, true); }).join("");
    var empty = state.picked.length ? "" : '<p class="drop-empty">把證據拖到這裡，或點選證據。</p>';
    var ready = state.picked.length >= NEED;
    var confirmLabel = ready ? "確認我的判斷" : "還要放入 " + (NEED - state.picked.length) + " 項正確證據";
    return "<h2 class=\"step-title\">找出支持的證據</h2><p class=\"help\" id=\"evidence-help\">正確證據有 " + NEED + " 項。點選或拖進「我的證據」。不正確的會彈回去。</p>"
      + pickedHabitat
      + '<div class="evidence-layout"><div class="drop-zone' + (ready ? " is-ready" : "") + '" id="evidence-zone" data-drop="evidence" aria-label="我的證據">'
      + '<p class="drop-label">我的證據（' + state.picked.length + "/" + NEED + "）</p>" + zoneChips + empty + "</div>"
      + '<div class="chip-pool" data-drop="pool" aria-label="證據選擇"><p class="pool-label">可選證據</p>' + poolChips + "</div></div>"
      + actionBar('<button type="button" class="btn btn-secondary" data-action="prev-habitat">返回選環境</button>'
        + '<button type="button" class="btn btn-primary" id="confirm-btn" data-action="confirm"' + (ready ? "" : " disabled") + ">" + confirmLabel + "</button>");
  }

  function zoneButton(id) {
    var selected = state.habitat === id;
    return '<button type="button" class="zone zone-' + id + (selected ? " is-selected" : "") + '" data-habitat="' + id + '" data-drop="' + id + '" aria-pressed="' + (selected ? "true" : "false") + '">'
      + '<span class="scene" aria-hidden="true"></span><span class="zone-copy"><span class="zone-kicker">' + esc(HABITAT[id].hint) + "</span>"
      + '<span class="zone-name">' + esc(HABITAT[id].name) + "</span>"
      + (selected ? "<span>已選擇</span>" : "<span>點這裡</span>") + "</span></button>";
  }

  function chipButton(org, id, inZone) {
    var correct = org.evidence.indexOf(id) !== -1;
    return '<button type="button" class="chip' + (inZone ? " in-zone" : "") + '" data-chip="' + esc(id) + '" data-correct="' + (correct ? "1" : "0") + '">'
      + esc(EVIDENCE[id]) + "</button>";
  }

  function noticeHtml() {
    if (!state.notice) return "";
    return '<p class="notice" id="notice" role="status">' + esc(state.notice) + "</p>";
  }

  function actionBar(html) {
    return '<div class="action-bar">' + html + "</div>";
  }

  function resultHtml(org) {
    if (state.feedback === "right") {
      var found = org.evidence.map(function (id) { return "<li>" + esc(EVIDENCE[id]) + "</li>"; }).join("");
      var next = nextPending();
      var nextBtn = next
        ? '<button type="button" class="btn btn-primary" id="next-btn" data-action="next-org" data-next="' + esc(next) + '">下一種生物</button>'
        : '<button type="button" class="btn btn-primary" data-action="gallery">返回列表</button>';
      return '<article class="result-card is-right" data-result="right"><div class="burst" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>'
        + "<h2 class=\"step-title\">判斷正確！</h2><p class=\"choice-recap\">" + esc(org.name) + "適合生活在" + esc(HABITAT[org.habitat].name) + "。</p>"
        + '<p class="explain">' + esc(org.explain) + "</p><p><strong>你找到的證據</strong></p><ul class=\"found\">" + found + "</ul>"
        + '<aside class="eco"><h3>生態安全小貼士</h3><p>' + esc(org.eco) + "</p></aside>"
        + actionBar('<button type="button" class="btn btn-secondary" id="back-gallery" data-action="gallery">所有生物</button>' + nextBtn) + "</article>";
    }
    var items = org.observations.map(function (line) { return "<li>" + esc(line) + "</li>"; }).join("");
    return '<article class="result-card is-wrong" data-result="wrong"><h2 class="step-title">再觀察一下</h2>'
      + '<p class="choice-recap">你選了「' + esc(HABITAT[state.habitat].name) + "」。</p>"
      + '<p class="explain">' + esc(org.hint) + "</p><ul class=\"found\">" + items + "</ul>"
      + actionBar('<button type="button" class="btn btn-secondary" data-action="gallery">所有生物</button>'
        + '<button type="button" class="btn btn-primary" data-action="retry">重新選擇環境</button>') + "</article>";
  }

  function nextPending() {
    var index = ORGANISMS.findIndex(function (org) { return org.id === state.orgId; });
    for (var step = 1; step <= ORGANISMS.length; step += 1) {
      var org = ORGANISMS[(index + step) % ORGANISMS.length];
      if (!state.done.has(org.id)) return org.id;
    }
    return null;
  }

  function openOrganism(id) {
    var org = orgById(id);
    state.screen = "play";
    state.orgId = id;
    state.step = "observe";
    state.habitat = null;
    state.picked = [];
    state.chipOrder = shuffle(org.chips);
    state.notice = "";
    state.feedback = null;
    state.shakeId = "";
    render();
  }

  function bindPlayEvents() {
    app.querySelectorAll("[data-organism]").forEach(function (btn) {
      btn.addEventListener("click", function () { openOrganism(btn.getAttribute("data-organism")); });
    });
    app.querySelectorAll("[data-step]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var step = btn.getAttribute("data-step");
        if (!canOpen(step)) return;
        state.step = step;
        state.feedback = null;
        state.notice = "";
        render();
      });
    });
    app.querySelectorAll("[data-action]").forEach(function (btn) {
      btn.addEventListener("click", function () { runAction(btn.getAttribute("data-action"), btn); });
    });
    app.querySelectorAll("[data-habitat]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.habitat = btn.getAttribute("data-habitat");
        state.notice = "";
        render();
        announce("已選擇" + HABITAT[state.habitat].name);
      });
    });
    app.querySelectorAll("[data-chip]").forEach(function (btn) {
      bindPointer(btn, {
        onTap: function () {
          handleChipTap(btn.getAttribute("data-chip"), btn.getAttribute("data-correct") === "1");
        },
        onDragStart: function (event) { startGhost(btn, event); },
        onDragMove: function (event) { moveGhost(event); },
        onDragEnd: function (event) {
          var zone = hitDrop(event);
          endGhost();
          handleChipDrop(btn.getAttribute("data-chip"), btn.getAttribute("data-correct") === "1", zone);
        },
        onCancel: function () { endGhost(); }
      });
    });
    var token = document.getElementById("org-token");
    if (token) {
      bindPointer(token, {
        onTap: function () {},
        onDragStart: function (event) { startGhost(token, event); },
        onDragMove: function (event) { moveGhost(event); },
        onDragEnd: function (event) {
          var zone = hitDrop(event);
          endGhost();
          var drop = zone && zone.getAttribute("data-drop");
          if (drop === "polar" || drop === "desert") {
            state.habitat = drop;
            state.notice = "";
            render();
            announce("已選擇" + HABITAT[drop].name);
          }
        },
        onCancel: function () { endGhost(); }
      });
    }
  }

  function runAction(action, btn) {
    if (action === "gallery") {
      state.screen = "gallery";
      state.notice = "";
      state.feedback = null;
      render();
      return;
    }
    if (action === "next-habitat") {
      state.step = "habitat";
      state.notice = "";
      render();
      return;
    }
    if (action === "prev-observe") {
      state.step = "observe";
      state.notice = "";
      render();
      return;
    }
    if (action === "next-evidence") {
      if (!state.habitat) return;
      state.step = "evidence";
      state.notice = "";
      render();
      return;
    }
    if (action === "prev-habitat") {
      state.step = "habitat";
      state.feedback = null;
      state.notice = "";
      render();
      return;
    }
    if (action === "confirm") {
      confirmRound();
      return;
    }
    if (action === "retry") {
      state.step = "habitat";
      state.habitat = null;
      state.feedback = null;
      state.notice = "";
      render();
      return;
    }
    if (action === "next-org") {
      openOrganism(btn.getAttribute("data-next"));
    }
  }

  function confirmRound() {
    var org = currentOrg();
    if (state.picked.length < NEED || !state.habitat) {
      state.notice = "請先放入 " + NEED + " 項正確證據。";
      render();
      return;
    }
    var correctOnly = state.picked.every(function (id) { return org.evidence.indexOf(id) !== -1; });
    if (!correctOnly) return;
    state.notice = "";
    state.step = "result";
    if (state.habitat !== org.habitat) {
      state.feedback = "wrong";
      render();
      return;
    }
    state.done.add(org.id);
    saveDone();
    state.feedback = "right";
    render();
  }

  function handleChipTap(id, correct) {
    if (state.picked.indexOf(id) !== -1) {
      state.picked = state.picked.filter(function (item) { return item !== id; });
      state.notice = "";
      state.shakeId = "";
      render();
      announce("已取出一項證據。現在有 " + state.picked.length + " 項。");
      return;
    }
    if (!correct) {
      rejectChip(id);
      return;
    }
    acceptChip(id);
  }

  function handleChipDrop(id, correct, zone) {
    var drop = zone && zone.getAttribute("data-drop");
    if (drop === "evidence") {
      if (!correct) {
        rejectChip(id);
        return;
      }
      if (state.picked.indexOf(id) === -1) acceptChip(id);
      return;
    }
    if (state.picked.indexOf(id) !== -1 && (drop === "pool" || !drop)) {
      state.picked = state.picked.filter(function (item) { return item !== id; });
      state.notice = "";
      render();
    }
  }

  function acceptChip(id) {
    state.picked.push(id);
    state.notice = "";
    state.shakeId = "";
    render();
    announce("已放入證據：" + EVIDENCE[id] + "。現在有 " + state.picked.length + " 項。");
  }

  function rejectChip(id) {
    var org = currentOrg();
    state.notice = "這項證據跟" + pronoun(org) + "不太吻合，再觀察一下特徵吧。";
    state.shakeId = id;
    render();
    announce(state.notice);
  }

  function bindPointer(el, handlers) {
    var active = false;
    var dragging = false;
    var pointerId = null;
    var originX = 0;
    var originY = 0;

    el.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      active = true;
      dragging = false;
      pointerId = event.pointerId;
      originX = event.clientX;
      originY = event.clientY;
      if (el.setPointerCapture) el.setPointerCapture(event.pointerId);
    });

    el.addEventListener("pointermove", function (event) {
      if (!active || event.pointerId !== pointerId) return;
      if (!dragging) {
        if (Math.hypot(event.clientX - originX, event.clientY - originY) < 8) return;
        dragging = true;
        handlers.onDragStart(event);
      }
      if (event.cancelable) event.preventDefault();
      handlers.onDragMove(event);
    }, { passive: false });

    function finish(event, cancelled) {
      if (!active || !event || event.pointerId !== pointerId) return;
      var wasDragging = dragging;
      active = false;
      dragging = false;
      pointerId = null;
      if (cancelled || !wasDragging) {
        if (wasDragging) handlers.onCancel();
        return;
      }
      swallowClick = true;
      handlers.onDragEnd(event);
      setTimeout(function () { swallowClick = false; }, 0);
    }

    el.addEventListener("pointerup", function (event) { finish(event, false); });
    el.addEventListener("pointercancel", function (event) { finish(event, true); });
    el.addEventListener("click", function (event) {
      if (swallowClick) {
        swallowClick = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      handlers.onTap(event);
    });
  }

  document.addEventListener("click", function (event) {
    if (!swallowClick) return;
    swallowClick = false;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  function startGhost(source, event) {
    var rect = source.getBoundingClientRect();
    ghostOffsetX = event.clientX - rect.left;
    ghostOffsetY = event.clientY - rect.top;
    ghost = source.cloneNode(true);
    ghost.classList.remove("is-dragging", "shake");
    ghost.classList.add("drag-ghost");
    ghost.style.width = rect.width + "px";
    ghost.style.left = rect.left + "px";
    ghost.style.top = rect.top + "px";
    ghost.setAttribute("aria-hidden", "true");
    document.body.appendChild(ghost);
    source.classList.add("is-dragging");
  }

  function moveGhost(event) {
    if (!ghost) return;
    ghost.style.left = (event.clientX - ghostOffsetX) + "px";
    ghost.style.top = (event.clientY - ghostOffsetY) + "px";
    ghost.style.visibility = "hidden";
    var under = document.elementFromPoint(event.clientX, event.clientY);
    ghost.style.visibility = "visible";
    clearHover();
    var zone = under && under.closest("[data-drop]");
    if (zone) zone.classList.add("is-hover");
  }

  function hitDrop(event) {
    if (!event) return null;
    if (ghost) ghost.style.visibility = "hidden";
    var under = document.elementFromPoint(event.clientX, event.clientY);
    if (ghost) ghost.style.visibility = "visible";
    return under && under.closest("[data-drop]");
  }

  function endGhost() {
    if (ghost) ghost.remove();
    ghost = null;
    document.querySelectorAll(".is-dragging").forEach(function (el) { el.classList.remove("is-dragging"); });
    clearHover();
  }

  function clearHover() {
    document.querySelectorAll(".is-hover").forEach(function (el) { el.classList.remove("is-hover"); });
  }

  document.getElementById("speak-btn").addEventListener("click", function () {
    state.speech = !state.speech;
    updateChrome();
    if (!window.speechSynthesis) return;
    if (state.speech) {
      lastSpeechKey = focusKey();
      speak(speechText());
    } else {
      window.speechSynthesis.cancel();
    }
  });

  var creditsDialog = document.getElementById("credits-dialog");
  document.getElementById("credits-btn").addEventListener("click", function () {
    if (typeof creditsDialog.showModal === "function") creditsDialog.showModal();
    else creditsDialog.setAttribute("open", "");
  });
  document.getElementById("credits-close").addEventListener("click", function () {
    if (typeof creditsDialog.close === "function") creditsDialog.close();
    else creditsDialog.removeAttribute("open");
  });
  creditsDialog.addEventListener("click", function (event) {
    if (event.target === creditsDialog && typeof creditsDialog.close === "function") creditsDialog.close();
  });

  document.getElementById("reset-btn").addEventListener("click", function () {
    if (!window.confirm("要清除全部進度嗎？")) return;
    state.done = new Set();
    saveDone();
    state.screen = "gallery";
    state.feedback = null;
    render();
  });

  if (window.speechSynthesis) {
    window.speechSynthesis.addEventListener("voiceschanged", function () {});
  }

  window.matchMedia("(min-width: 900px)").addEventListener("change", function () {
    if (state.screen === "play") render();
  });

  try {
    validateData();
  } catch (err) {
    app.textContent = "活動資料有問題，請重新整理頁面。";
    return;
  }

  render();
})();
