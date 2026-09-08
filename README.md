# ニューコウジヤ / NEW KOJIYA — 公式サイト

岡山市北区京橋町のスパイスカレー専門店「ニューコウジヤ」の Web サイト（静的サイト）。

## 構成

```
WebSite/
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

→ ブラウザで <http://localhost:8000> を開く。

## 掲載情報（2026年9月時点・Instagram / 各グルメサイトより）

| 項目 | 内容 |
| --- | --- |
| 店名 | スパイスカレー専門店「ニューコウジヤ」 |
| 住所 | 岡山県岡山市北区京橋町1-10 |
| 営業時間 | 11:00–14:30（L.O.） |
| 定休日 | 木曜・金曜 |
| 席数 | カウンター7席 |
| メニュー | 3種あいがけ 1,500円 のみ（ライス量の調整可） |
| 支払い | 現金・QRコード決済（カード・電子マネー不可） |
| 予約 | 不可 |
| 駐車場 | なし（近隣コインパーキング） |
| Instagram | <https://www.instagram.com/new_kojiya/> |

> 情報は Instagram（@new_kojiya）と食べログ・Retty の公開情報をもとにしています。
> 電話番号・郵便番号など未確認の項目があります。オーナー確認のうえ更新してください。

## ギャラリー（Instagram 埋め込み）

`#gallery` セクションは **Instagram 公式の埋め込み**（`embed.js`）で最新投稿を表示しています。
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
件数は増減自由（`<blockquote>` を足し引きするだけ）。PC で自動的に 2 列に並びます。

> 現在掲載しているのは、制作時点（2026-09-07）の最新 6 投稿です。
> より手間なく「常に最新」を出したい場合は、LightWidget / SnapWidget などの
> Instagram フィードウィジェット、または Instagram Graph API の利用を検討してください。

## その他の写真

- **メニューの一皿写真**: `assets/img/curry.jpg` を表示中（Pexels のフリー素材／商用可・帰属表示不要）。
  実際の料理写真に差し替える場合は、同じファイル名で上書きするか、
  `index.html` の `<img class="menu-photo" …>` の `src` を変更する。縦長 4:5・幅 1200px 程度を推奨。
- **ヒーロー背景**: 現状は CSS グラデーション。写真にする場合は `style.css` の `.hero` の
  `background` に `url("../img/xxx.jpg")` を重ねる。

## 未確定・要確認事項

- [ ] 郵便番号（暫定で 700-0821 と記載）
- [ ] 電話番号（未記載）
- [ ] 正確な最寄り電停名・徒歩分数
- [ ] 価格（Instagram は1,500円、一部グルメサイトは1,300円表記。最新はオーナー確認）
- [ ] ロゴデータ（現在はテキスト＋CSS マーク）
- [ ] メニューの一皿写真を実際の料理写真へ差し替え（現在は Pexels のフリー素材）
- [ ] SNS 以外の連絡先（メール等）
- [ ] ギャラリーの掲載投稿（`index.html` の `.ig-grid` 内 permalink）を定期的に最新へ更新
