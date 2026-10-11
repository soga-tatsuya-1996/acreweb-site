# KEDAI KENSHIN — 公式サイト

岡山市北区表町のインドネシア料理＆コーヒーショップ「KEDAI KENSHIN（ケダイ ケンシン）」の Web サイト（静的サイト）。

## 構成

```
kedai-kenshin/
├── index.html            … 1ページ完結のサイト本体
├── assets/
│   ├── css/style.css     … スタイル（配色・レイアウト）
│   ├── js/main.js        … ヘッダー追従・スマホメニュー・スクロール演出
│   └── img/              … 写真を入れる場所（現在は空）
└── README.md
```

ビルド不要。`index.html` をブラウザで開くだけで表示できます。
ローカル確認用サーバー（任意）:

```bash
python -m http.server 8000
```

→ ブラウザで <http://localhost:8000/kedai-kenshin/> を開く。

## 掲載情報（2026年9月時点・Instagram より）

| 項目 | 内容 |
| --- | --- |
| 店名 | KEDAI KENSHIN（ケダイ ケンシン） |
| 業態 | インドネシア料理（Nusantara Food）＆ コーヒーショップ、日本⇄インドネシア Jastip（買い付け・配送代行）サービスも展開 |
| 住所 | 〒700-0822 岡山県岡山市北区表町2丁目4-9 表町ヒルズ |
| 電話 | +81 70-8490-6647 |
| WhatsApp | 085718166606（インドネシアから） |
| Instagram | <https://www.instagram.com/kedai_kenshin/> |

> 情報は Instagram（@kedai_kenshin）のプロフィール欄をもとにしています。
> **営業時間・定休日・具体的なメニュー内容と価格は Instagram に記載がなく未確認です。** オーナー確認のうえ更新してください。

## ギャラリー（Instagram 埋め込み）

`#gallery` セクションは **Instagram 公式の埋め込み**（`embed.js`）で投稿を表示しています。
画像ファイルをサーバーに置く必要はなく、Instagram 側の投稿がそのまま反映されます（著作権・利用規約の面でも安全）。

### 表示する投稿を更新する

`index.html` の `<div class="ig-grid">` 内にある 6 個の `<blockquote class="instagram-media" …>` の
`data-instgrm-permalink` を、表示したい投稿の URL に差し替えます。

```html
<blockquote class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/p/＜投稿ID＞/"
  data-instgrm-version="14">
  <a href="https://www.instagram.com/p/＜投稿ID＞/">Instagramで見る</a>
</blockquote>
```

投稿 ID は、Instagram で投稿を開いたときの URL `.../p/XXXXXXXX/` の `XXXXXXXX` 部分です。
件数は増減自由（`<blockquote>` を足し引きするだけ）。PC で自動的に 2〜3 列に並びます。

> 現在掲載しているのは、制作時点（2026-09-13）に確認できた開店告知・イベント・店内の様子の投稿です。
> より手間なく「常に最新」を出したい場合は、LightWidget / SnapWidget などの
> Instagram フィードウィジェット、または Instagram Graph API の利用を検討してください。

## その他の写真

現在サイト内に料理写真は使用していません（メニューはジャンル紹介のみで、詳細は Instagram に誘導しています）。写真を入れる場合:

1. 画像を `assets/img/` に置く。
2. **ヒーロー背景**: `style.css` の `.hero` の `background` に `url("../img/xxx.jpg")` を重ねる。
3. **メニューに写真を追加**: `#menu` の `.menu-card` に `<img>` を追加し、`style.css` でレイアウトを調整。

## 未確定・要確認事項

- [ ] 営業時間・定休日（Instagram に記載なし）
- [ ] 具体的なメニュー品目・価格（Instagram の「Menu OKK」ハイライトは動画のため自動取得不可。オーナーに確認）
- [ ] 正確な最寄り駅・バス停・徒歩分数
- [ ] 駐車場の有無
- [ ] ロゴデータ（現在はテキスト＋CSS マーク。Instagram のプロフィール画像は黒地に金の縁取り・赤の意匠）
- [ ] Jastip（配送代行）サービスの申込方法・料金の詳細
- [ ] ギャラリーの掲載投稿（`index.html` の `.ig-grid` 内 permalink）を定期的に最新へ更新
