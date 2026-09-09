# STEP 14 — Issue駆動開発

## 🎯 このLessonの目的

付箋（Issue）を起点に開発を回し、人数可変に対応できるようになります。

## 📖 Learn

Issue駆動の原則：

1. 作業前にIssueを作る（口頭指示にしない）
2. Branch名・PRにIssue番号を含める（`feature/search-12` / `Closes #12`）
3. 完了条件を満たしたらCloseする（Mergeで自動Close可）

担当者の決め方（人数可変）：固定名ではなく **「空いているIssueに立候補」方式**。

```text
1人： 自分でIssueを立てて自分で取る
2人： Issueを2つ作り1つずつ取る
4人： Issueを4つ作り1つずつ取る
5人以上： Issueを追加する（例：フッター、アクセシビリティ対応など）
```

Commitメッセージ指針（優しめルール）：

- 悪い： `fix` `update` `aaa` `test`
- 良い： `Add search form` `Fix mobile header layout` `Update README setup instructions`
- 日本語でもOKだが、英語の動詞始まりに慣れるとチームで読みやすい

## 🖥 Try

1. 🌐 Issueを1件立てる（`feature.md` テンプレート使用）。例：`検索フォームを追加する`
2. 💻 Branch： `git switch -c feature/search-あなたのID`
3. 💻 実装： `examples/sample-project/index.html` にフォームを3行追加（正解は問わない）
4. 💻 Commit： `git commit -m "Add search form (refs #番号)"`
5. 🌐 PR本文に `Closes #番号` と書いてMerge

## 💡 考えてみよう

- Issueがないまま作業すると、5人チームで何が起きるでしょう？（重複・抜け・責任不明）

## 🎯 Mission

- [ ] Issue→Branch→PR→MergeをIssue番号付きで回した
- [ ] Commitメッセージを良い例の形で書いた

## ✅ Check（PHASE 3 修了確認）

- [ ] サンプルプロジェクトで一通り開発できた
- [ ] コード自体よりGit操作が主役だと理解できた

## 🚨 Troubleshooting

- Issue番号を忘れた → Issuesタブで確認。Branch名は後から変えなくてOK
- テンプレートが出ない → `.github/ISSUE_TEMPLATE/` を確認

## ➡️ Next

- PHASE 4へ：[STEP 15: Code Review](../07-code-review/STEP15-review.md)
