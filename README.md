# 外国語学部 留学・語学研修ガイド

学生向けの留学案内パンフレット(静的HTML)です。

## フォルダの中身
- `index.html` … 本文(文章・表・リンク)。ページごとに `<section id="...">` で区切られています
- `style.css` … 見た目(文字サイズ・フォント・色・背景)
- `app.js` … 頁送り・検索・目次の動き(通常は触りません)
- `images/` … 写真(表紙の写真など)
- `files/` … ダウンロードできる願書・誓約書などの書類
- `.nojekyll` … GitHub Pages用の設定(削除しないでください)

## GitHub Pagesで公開する手順
1. GitHubで新しいリポジトリを作成する
2. このフォルダの中身をすべてアップロードする(Add file → Upload files)
3. Settings → Pages で、Branch を `main`、フォルダを `/ (root)` にして Save
4. しばらくすると `https://ユーザー名.github.io/リポジトリ名/` で開けます

## よくある修正
- 文章・日程・金額の修正 … `index.html` をGitHub上で開き、鉛筆アイコンから編集して保存(Commit)
- 文字の大きさ … `style.css` の `html{font-size:17px}` の数字を変更
- フォント … `style.css` の `body{font-family:` の行を変更
- 書類の差し替え … `files/` に同じ名前のファイルをアップロードして上書き

## 写真を追加する
1. 写真を `images/` にアップロードする(横幅1200px程度・JPEG・1枚500KB以下が目安。大きすぎると表示が遅くなります)
2. `index.html` の載せたい場所に、次のように書く

1枚だけ載せる場合:
```html
<figure class="ph"><img src="images/ファイル名.jpg" alt="写真の説明"><figcaption>キャプション</figcaption></figure>
```

数枚を並べる場合:
```html
<div class="phs">
<img src="images/a.jpg" alt="説明1">
<img src="images/b.jpg" alt="説明2">
</div>
```
`alt` には写真の内容を書いてください(音声読み上げや、画像が表示されないときに使われます)。

## 注意
- 公開リポジトリは誰でも閲覧できます。公開してよい内容か、学内で確認してください。
- 写真に人物が写っている場合は、公開・掲載の許可を確認してください。
