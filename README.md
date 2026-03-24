# Crowdin + next-intl POC

驗證 Crowdin TMS 與 Next.js + next-intl 的翻譯管理流程。

## 市場路由

| 路徑 | 市場 | 語言 |
|------|------|------|
| `/` | US | English |
| `/de/` | Germany | Deutsch |
| `/fr/` | France | Français |
| `/it/` | Italy | Italiano |
| `/es/` | Spain | Español |
| `/nl/` | Netherlands | Nederlands |
| `/be/` | Belgium | Français (BE) |
| `/at/` | Austria | Deutsch (AT) |

## 開發

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Crowdin 設定

### 1. 建立 Crowdin 專案

1. 到 [crowdin.com](https://crowdin.com) 建立帳號（Free plan 即可）
2. 建立新專案，source language 選 English
3. Target languages 加入：German, French, Italian, Spanish, Dutch, French (Belgium), German (Austria)

### 2. 設定 GitHub 整合

1. 在 Crowdin 專案 → Integrations → GitHub
2. 連接此 repo
3. Source file: `src/messages/en.json`
4. Translation pattern: `src/messages/%locale%.json`
5. 開啟 "Create PR for translations"

### 3. 或用 Crowdin CLI

```bash
npm install -g @crowdin/cli

# 設定環境變數
export CROWDIN_PROJECT_ID=your_project_id
export CROWDIN_PERSONAL_TOKEN=your_token

# 上傳 source
crowdin upload sources

# 下載翻譯
crowdin download

# 檢查狀態
crowdin status
```

## 翻譯流程

```
工程師新增/修改 en.json key
    ↓
Push to GitHub
    ↓
Crowdin 自動偵測新 key
    ↓
翻譯人員在 Crowdin 介面翻譯
    ↓
Crowdin 自動發 PR (更新 de/fr/it/es/nl/be/at.json)
    ↓
工程師 merge PR → 部署 → 翻譯上線
```
# crowdin-poc
