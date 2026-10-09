(function () {
  "use strict";

  var PASSWORD = "27585767";
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-password");
  var error = document.getElementById("gate-error");
  var slot = document.getElementById("teacher-content");

  var notes = [
    "<section><h2>知識和理解</h2><ul>",
    "<li>知道一些不同的自然環境。</li>",
    "<li>連繫常見的動植物與自然環境。</li>",
    "<li>列舉一些動物適應環境的特徵的例子。</li>",
    "<li>列舉一些植物適應環境的特徵的例子。</li>",
    "</ul></section>",
    "<section><h2>技能</h2><p>進行觀察活動，根據觀察結果提出合理的推論；搜集資料，根據資料作出簡單解釋。</p></section>",
    "<section><h2>價值觀</h2><p>欣賞生物適應環境的能力；尊重生命，愛護動植物，保護生態環境。</p></section>",
    "<section><h2>國家安全教育／生態安全</h2><p>良好生態環境是民生福祉；加強生態保護（如生物物種安全）；生物與環境互相依存；保育環境、珍惜善用地球資源並樂於實踐。對應《香港國家安全教育課程框架（2025）》學習元素 2.7（生態安全）。</p></section>",
    "<section><h2>活動生物（供備課）</h2>",
    "<p>極地：北極狐、環斑海豹、皇帝企鵝（南極）、北極罌粟。沙漠：耳廓狐（芬內克狐）、沙漠陸龜、沙蜥、仙人掌（桶形仙人掌）。</p>",
    "<p>沙漠陸龜指北美沙漠陸龜（Gopherus agassizii）。沙蜥照片為蟾頭沙蜥（Phrynocephalus mystaceus）。本活動不使用北極熊、海象、刺蝟、駱駝、狐獴、非洲盾臂龜、非洲跳鼠。</p>",
    "<p>操作：可點選或拖曳。鍵盤可用 Tab 移動、Enter 確認。頁首「朗讀」會用瀏覽器語音讀出短提示（偏好 zh-HK）。圖片出處在學生頁的「資料來源」。</p>",
    "</section>"
  ].join("");

  function showError() {
    error.hidden = false;
    error.textContent = "密碼不正確，請再試一次。";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    slot.hidden = true;
    slot.innerHTML = "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value !== PASSWORD) {
      showError();
      return;
    }
    error.hidden = true;
    error.textContent = "";
    input.removeAttribute("aria-invalid");
    form.closest(".gate-card").hidden = true;
    slot.innerHTML = '<article class="teacher-panel">' + notes + "</article>";
    slot.hidden = false;
    var heading = slot.querySelector("h2");
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
  });
})();
