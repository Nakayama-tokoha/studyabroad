# 外国語学部 留学・語学研修ガイド

学生向けの留学案内パンフレット(静的HTML)です。

## フォルダの中身
- `index.html` … 本文(文章・表・リンク)。ページごとに `<section id="...">` で区切られています
- `style.css` … 見た目(文字サイズ・フォント・色・背景)
- `app.js` … 頁送り・検索・目次の動き(通常は触りません)
- `images/` … 写真(表紙の写真など)
- `files/` … ダウンロードできる願書・誓約書などの書類
- `.nojekyll` … GitHub Pages用の設定(削除しないでください)

## 各種変更手順
- 文章・日程・金額・リンクを直す場合
  　リポジトリの「Code」タブを開き、index.html をクリック
　　右上の鉛筆アイコン(Edit this file)を押す
　　直したい箇所を探して書き換えます(キーボードの Ctrl+F が使えます)
　　右上の「Commit changes...」を押し、そのまま「Commit changes」で確定
- 書類を差し替える
　　files フォルダを開く
　　右上の「Add file」→「Upload files」を選択
　　新しいファイルを、今と同じ名前にしてアップロードし、「Commit changes」を押す。同じ名前なら上書きされます。
- 写真を追加する
　　写真を `images/` にアップロードする(横幅1200px程度・JPEG・1枚500KB以下が目安。大きすぎると表示が遅くなります)
　　`index.html` の載せたい場所に、次のように書く
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

- 文字の大きさ・フォント・色を変更する場合
　　文字：`style.css` の `html{font-size:17px}` の数字を変更
　　フォント：`style.css` の `body{font-family:` の行を変更
　　書類の差し替え：`files/` に同じ名前のファイルをアップロードして上書き
 
## GitHub Pagesで公開する手順
1. GitHubで新しいリポジトリを作成する
2. このフォルダの中身をすべてアップロードする(Add file → Upload files)
3. Settings → Pages で、Branch を `main`、フォルダを `/ (root)` にして Save
4. しばらくすると `https://ユーザー名.github.io/リポジトリ名/` で開けます

## 注意
- 公開リポジトリは誰でも閲覧できます。公開してよい内容か、学内で確認してください。
- 写真に人物が写っている場合は、公開・掲載の許可を確認してください。
