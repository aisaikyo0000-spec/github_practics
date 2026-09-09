# STEP 3 — ファイルを作ってCommitする（Web）

## 🎯 このLessonの目的

「変更を記録する（Commit）」をWeb上で初体験します。Git用語が初めて出ますが、操作は3クリックです。

## 📖 Learn

Commitは変更のスナップショットです。Web上では：

```text
ファイル編集 → メッセージを書く → Commit changes（確定）
```

が1セットです。メッセージは後から履歴に残ります。

## 🖥 Try（🌐 Web・約10分）

> 練習用に自分のアカウントで試します（教材リポジトリには直接書きません）。

1. 自分のアカウントで `practice-xxx` という新しいRepositoryを作る
   - `New repository` → 名前だけ入力 → `Public` → `Add a README file` にチェック → `Create`
2. `Create new file` をクリック
3. ファイル名に `hello.md`、本文に以下を入力：

```markdown
# Hello
はじめてのコミット練習です。
```

4. 右上の `Commit changes...` をクリック
5. メッセージに `Add hello.md` と入力して `Commit changes`

## 💡 考えてみよう

- Commitメッセージは未来の自分・仲間へのメモです。「aaa」では何が困るでしょう？

## 🎯 Mission

- [ ] 自分の練習リポジトリに `hello.md` をCommitした
- [ ] Commit履歴（ファイル一覧上の `History` / 時計アイコン）から自分のCommitを見つけた

## ✅ Check

- [ ] Commitが「記録確定」だと説明できる
- [ ] 履歴からメッセージと時刻を確認できた

## 🚨 Troubleshooting

- Commitボタンが押せない → ファイル名・本文が空でないか確認
- 練習リポジトリを消したい → Settings → Danger Zone → Delete（教材では消さなくてOK）

## ➡️ Next

- [STEP 4: Branch](STEP04-branch-web.md)
