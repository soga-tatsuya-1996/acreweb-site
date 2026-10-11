画像を入れる場所です。

現在、サイト内の実績サムネイル・ヒーロー画像はCSSのグラデーションで代用しています
（assets/css/style.css の .work-thumb-01 〜 .work-thumb-04）。

実際の写真を使う場合:
1. 画像ファイルをこのディレクトリ以下に配置する（例: works/work-01-main.jpg）。
2. 各ページの .work-thumb / .work-hero 要素に <img> を追加するか、
   style.css の該当クラスの background を url("...") に差し替える。
3. トップページのロゴ・会社ロゴを使う場合は logo/ ディレクトリを作成して配置する。
