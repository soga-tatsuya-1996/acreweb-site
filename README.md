# アクレウェブ株式会社 — コーポレートサイト（サンプル）

ホームページ制作会社「アクレウェブ株式会社」（架空）の公式サイト（静的サイト）。
会社名・代表者名・住所・実績のクライアント名はすべてサンプルです。

## 構成

```
corporate-site/
├── index.html              … トップページ
├── about/index.html        … 会社概要（会社情報・沿革）
├── services/index.html     … 事業内容・ご依頼の流れ
├── works/
│   ├── index.html          … 制作実績一覧
│   ├── work-01/index.html  … 実績詳細：カフェ（飲食店）
│   ├── work-02/index.html  … 実績詳細：美容室
│   ├── work-03/index.html  … 実績詳細：工務店
│   └── work-04/index.html  … 実績詳細：EC・物販
├── contact/index.html      … お問い合わせフォーム
├── assets/
│   ├── css/style.css       … 共通スタイル
│   ├── js/main.js          … ヘッダー追従・スマホメニュー・スクロール演出
│   └── img/                … 画像を入れる場所（現在は未使用、CSSグラデーションで代用）
└── README.md
```

ビルド不要。`index.html` をブラウザで開くだけで表示できます。
ローカル確認用サーバー（任意）:

```bash
python -m http.server 8000
```

→ ブラウザで <http://localhost:8000> を開く。

## 制作実績（works）の増やし方

1. `works/work-05/` のように新しいディレクトリを作成し、既存の `work-04/index.html` をコピーして内容を書き換える。
2. `works/index.html` の `.works-grid` にカード（`<a class="work-card">`）を1つ追加する。
3. トップページ（`index.html`）の実績抜粋にも載せる場合は `.works-grid` にカードを追加する（4件を超える場合は差し替え推奨）。
4. サムネイル色は `assets/css/style.css` の `.work-thumb-01`〜`.work-thumb-04` を参考に、新しいクラス（例 `.work-thumb-05`）を追加する。写真を使う場合は `assets/img/README.txt` を参照。
5. 各実績詳細ページ下部の `.work-nav`（前後の実績リンク）も合わせて更新する。

## お問い合わせフォームについて

`contact/index.html` のフォームは送信先が未実装です（`assets/js/main.js` 内で送信をキャンセルし、注意文を表示します）。
実運用では、以下のいずれかに差し替えてください。

- `<form>` の `action`/`method` を自社サーバーのフォーム処理に接続する
- Googleフォーム・フォームメーラー等の外部フォームサービスに差し替える

## 未確定・要確認事項

- [ ] 会社名・代表者名・所在地・資本金（すべて仮の情報）
- [ ] 制作実績のクライアント名・内容（すべて架空の事例）
- [ ] ロゴデータ（現在はテキスト＋CSSマーク）
- [ ] お問い合わせフォームの送信先
- [ ] 実績・ヒーロー画像（現在はCSSグラデーションで代用）
