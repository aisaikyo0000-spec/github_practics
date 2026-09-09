# サンプルPR：BobのPRをレビューしよう

> 一人でも他人のPRレビューを体験するための架空シナリオです。
> 登場人物： Alice / Bob / Charlie（実在ユーザーではありません）。

## 状況

Bobが `feature/search-bob` からPRを作成しました：

- タイトル： `Add search form`
- 関連Issue： `Closes #12`
- 変更ファイル： `examples/sample-project/index.html`

## 差分（抜粋・わざと改善点あり）

```diff
 <section id="search">
   <h2>検索</h2>
+  <input type="text" id="q" placeholder="キーワード">
+  <button style="background:red">検索</button>
+  <p>とりあえず追加しました</p>
 </section>
```

## あなたの仕事（SOLO-02）

以下の3観点でコメント案を書いてください：

1. 良い点（例：「検索欄の追加自体はIssue通りで良い」）
2. 問題点（例：`input` に `label` がない／赤ベタのインラインスタイル／説明文が雑）
3. 改善提案（例：`<label for="q">キーワード</label>` 追加、`style.css` に移動、`placeholder` の文言具体化）

## 模範解答例

- 👍 良い点： Issue #12 の要件（検索欄追加）を満たしている
- ⚠️ 問題点： labelがなくアクセシビリティに問題。インラインスタイルは保守性が低い
- 💡 提案： label追加＋CSS分離をお願いします

```html
<label for="q">キーワード</label>
<input type="text" id="q" name="q" placeholder="例: 夏祭り">
```

この型をPAIR/TEAMの実レビューでそのまま使ってください。
