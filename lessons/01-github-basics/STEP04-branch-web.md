# STEP 4 — Branchを作る（Web）

## 🎯 このLessonの目的

本線（main）を壊さず実験できる「枝（Branch）」の感覚をつかみます。

## 📖 Learn

```text
main  ●━━●━━●  ← いつも動く本線。直接触らない
           \
try-hello   ●  ← 実験用の枝。壊してもOK
```

Branchは「コピー作業机」です。元の机（main）はそのまま残ります。

## 🖥 Try（🌐 Web・約10分）

1. STEP 3で作った自分の練習リポジトリを開く
2. 上部のBranch表示（`main` と書かれたプルダウン）をクリック
3. `View all branches` → `New branch` をクリック
4. 名前を `try-hello` にして `Create new branch`
5. Branchが `try-hello` に切り替わったことを確認（プルダウン表示が変わる）
6. `hello.md` を編集（1行追加）→ `Commit changes`（Branch名が `try-hello` であることを確認）

## 💡 考えてみよう

- なぜmainではなくBranchで試すのでしょう？料理の「味見用の小皿」で例えると？

## 🎯 Mission

- [ ] `try-hello` ブランチでコミットした
- [ ] Branchプルダウンを `main` に戻すと、さっきの変更が「見えない」ことを確認した（分岐の証拠）

## ✅ Check

- [ ] mainとBranchの関係を図で説明できる
- [ ] 今自分がどのBranchにいるか確認できる

## 🚨 Troubleshooting

- どのBranchにいるか分からない → 画面左上のプルダウン表示を確認
- 変更がmainに見える → Branch切り替え忘れ。プルダウンで切り替えて再確認

## ➡️ Next

- [STEP 5: Pull RequestとMerge](STEP05-pr-merge-web.md)
