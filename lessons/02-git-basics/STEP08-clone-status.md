# STEP 8 — cloneして中を観察する

## 🎯 このLessonの目的

Remote（本棚）をLocal（机）に複製し、観察コマンドを覚えます。

## 📖 Learn

- `clone`: 最初だけ行う全体コピー
- `status`: 今の机の状態（何が変わったか）
- `log`: 過去の記録一覧

## 🖥 Try（💻 Terminal）

状況：教材リポジトリを自分のPCに持ってきたい。でもPCはまだ何も知らない。

↓ 何が起きているか考える：Remoteの内容を丸ごとコピーすればいい（＝clone）

```bash
git clone https://github.com/aisaikyo0000-spec/github_practics.git
cd github_practics
```

↓ 結果を確認：

```bash
git status
```

```text
On branch main
nothing to commit, working tree clean
→ 「机はきれい。未記録の変更なし」の意味
```

```bash
git log --oneline -5
```

```text
a1b2c3d Add search form のような履歴が5件出る
```

## 💡 考えてみよう

- `status` は「今」、 `log` は「過去」を見ます。料理中に例えると何でしょう？（ヒント：味見 vs レシピノート）

## 🎯 Mission

- [ ] 教材リポジトリをcloneした
- [ ] `git status` と `git log` の出力を読めた

## ✅ Check

- [ ] cloneは最初だけと説明できる
- [ ] statusが「きれい」か「変更あり」か判別できる

## 🚨 Troubleshooting

- clone失敗 → URLコピーミス・認証エラーが多い。[TROUBLESHOOTING](../TROUBLESHOOTING.md#clone失敗) 参照
- `cd` できない → フォルダ名を確認（`ls` / `dir`）

## ➡️ Next

- [STEP 9: add / commit / diff](STEP09-add-commit.md)
