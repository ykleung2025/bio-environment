# 生物與環境

小學科學互動網頁，主題是**生物與環境**。學生觀察動植物特徵，判斷牠們適應**極地**還是**沙漠**，再把正確證據放進「我的證據」。

網址（合併到 `main` 並開啟 GitHub Pages 後）：<https://ykleung2025.github.io/bio-environment/>

## 本地開啟

這個網站是靜態檔案，不需要安裝或建置。

在專案資料夾執行：

```bash
python3 -m http.server 8080
```

然後用瀏覽器開啟 <http://localhost:8080/>。

也可以直接開啟 `index.html`。語音朗讀在部分瀏覽器的 `file://` 頁面可能無法使用，建議用上面的本機伺服器。

## GitHub Pages

網站檔案放在儲存庫根目錄（`index.html`、`css/`、`js/`、`images/`），適合從 `main` 分支的根目錄發佈。

1. 把這個變更合併到 `main`。
2. 在 GitHub 儲存庫選擇 **Settings → Pages**。
3. **Build and deployment** 選 **Deploy from a branch**。
4. Branch 選 **main**，資料夾選 **/ (root)**，然後儲存。
5. 頁面就緒後會出現在 <https://ykleung2025.github.io/bio-environment/>。

已加入 `.nojekyll`，避免 GitHub Pages 的 Jekyll 略過底線開頭的檔案。若要更新樣式或程式而瀏覽器仍顯示舊版，可把 `index.html` 裡的 `css/style.css?v=1` 和 `js/app.js?v=1` 改成新的版本號。

## 怎樣玩

1. 選一張生物卡。
2. 閱讀「觀察與資料」。
3. 點選**極地**或**沙漠**，也可以把生物卡拖進環境。
4. 把正確證據拖進「我的證據」，或直接點選。不正確的證據會彈回。放滿 3 項正確證據後才可以確認。
5. 環境和證據都正確會有說明和生態安全小貼士。環境不對會有溫和提示，可以再選一次。
6. 進度顯示為已完成 X/8，並記在這部裝置的瀏覽器裡。頁底可清除進度。

手機、平板可以用手指拖曳（Pointer Events）。不方便拖曳時，點選一樣可以完成。鍵盤可用 Tab 移動、Enter 確認。頁首「朗讀」會用瀏覽器語音讀出短提示，語言偏好 `zh-HK`。

## 學習目標

學生畫面只保留任務。完整目標在頁底「給老師」。

- 知識和理解：知道一些不同的自然環境；連繫常見的動植物與自然環境；列舉動物和植物適應環境的特徵例子。
- 技能：進行觀察，根據觀察結果提出合理推論；搜集資料，根據資料作出簡單解釋。
- 價值觀：欣賞生物適應環境的能力；尊重生命，愛護動植物，保護生態環境。
- 國家安全教育／生態安全：良好生態環境是民生福祉；加強生態保護（如生物物種安全）；生物與環境互相依存；保育環境、珍惜善用地球資源並樂於實踐。對應《香港國家安全教育課程框架（2025）》學習元素 2.7（生態安全）。

## 活動生物

極地：北極狐、環斑海豹、皇帝企鵝（南極）、北極罌粟（植物）。

沙漠：耳廓狐（芬內克狐）、沙漠陸龜、沙蜥、仙人掌（桶形仙人掌，植物）。

沙漠陸龜指北美沙漠陸龜（*Gopherus agassizii*）。沙蜥照片為蟾頭沙蜥（*Phrynocephalus mystaceus*）。本活動不使用北極熊、海象、刺蝟、駱駝、狐獴、非洲盾臂龜、非洲跳鼠。

## 圖片來源

相片來自 [維基共享資源](https://commons.wikimedia.org/)，已縮圖放在 `images/`。轉載圖片時請保留原授權。

| 生物 | 作者 | 授權 | 原檔 |
| --- | --- | --- | --- |
| 北極狐 | Jonatan Pie | [CC0](http://creativecommons.org/publicdomain/zero/1.0/) | [Vulpes lagopus in Iceland](https://commons.wikimedia.org/wiki/File:Vulpes_lagopus_in_Iceland.jpg) |
| 環斑海豹 | Lee Cooper | 公有領域 | [Ringedsealportrait](https://commons.wikimedia.org/wiki/File:Ringedsealportrait.jpg) |
| 皇帝企鵝 | Ian Duffy | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Aptenodytes forsteri, Snow Hill Island](https://commons.wikimedia.org/wiki/File:Aptenodytes_forsteri_-Snow_Hill_Island,_Antarctica_-adults_and_juvenile-8.jpg) |
| 北極罌粟 | Graham | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) | [Papaver radicatum flowers](https://commons.wikimedia.org/wiki/File:Papaver_radicatum_flowers.jpg) |
| 耳廓狐 | Caninest | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Fennec Fox Ears](https://commons.wikimedia.org/wiki/File:Fennec_Fox_Ears_(4394678079).jpg) |
| 沙漠陸龜 | Robb Hannawacker／約書亞樹國家公園 | 公有領域 | [Desert tortoise (Gopherus agassizii)](https://commons.wikimedia.org/wiki/File:Desert_tortoise_(Gopherus_agassizii).jpg) |
| 沙蜥 | Ron Knight | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | [Phrynocephalus mystaceus](https://commons.wikimedia.org/wiki/File:Secret_Toadhead_Agama_(Phrynocephalus_mystaceus)_(8603768596).jpg) |
| 仙人掌 | Bernard Gagnon | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | [Fishhook Barrel Cactus](https://commons.wikimedia.org/wiki/File:Fishhook_Barrel_Cactus.jpg) |
