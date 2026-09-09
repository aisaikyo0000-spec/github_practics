# STEP 12 — 個人開発フロー（Issue→Mergeを通す）

## 🎯 このLessonの目的

一人で以下を完走します：

```text
Issue → Branch → 実装 → Commit → Push → PR → Review → 修正 → Approve → Merge
```

## 📖 Learn

一人でもPRを挟む理由：履歴が残る・見直せる・チームの練習になる。
使う素材は `examples/sample-project/`（index.html / style.css / script.js の最小構成）。

## 🖥 Try（所要30分）

状況： 「トップページの見出しを変えたい」というIssueがあるとする。

1. 🌐 Issue作成（例：`#10 ヘッダーの文言を更新`。4項目を書く）
2. 💻 Branch作成：

```bash
git switch main
git pull origin main
git switch -c feature/header-あなたのID
```

3. 💻 実装： `examples/sample-project/index.html` の `<h1>` を1か所だけ変える
4. 💻 Commit→Push：

```bash
git diff
git add examples/sample-project/index.html
git commit -m "Update header text"
git push -u origin feature/header-あなたのID
```

5. 🌐 PR作成： base `main` ← compare 自分のBranch。テンプレートに沿って記入（STEP 13参照）
6. 🌐 セルフレビュー： Files changedを見て自分でコメント→修正があれば追加コミット
7. 🌐 Merge： `Merge pull request` → `Confirm merge` → Branch削除

## 💡 考えてみよう

- 一人なのにIssue→PRと回すのは大げさ？5人になった時、この習慣が何を助けるでしょう？

## 🎯 Mission

- [ ] Issue番号とPRを紐づけた（PR本文に `Closes #番号`）
- [ ] Merge後にmainをpullして反映を確認した

## ✅ Check

- [ ] 全9工程を自分の手で回せた
- [ ] main直接pushをしなかった

## 🚨 Troubleshooting

- PRに余計な差分が混ざる → mainが古い。Branch作成前にpullすること
- push拒否 → [TROUBLESHOOTING](../TROUBLESHOOTING.md) 参照

## ➡️ Next

- [STEP 13: PRの書き方](STEP13-pr-message.md)
