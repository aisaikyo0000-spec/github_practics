# STEP 16 — Merge Conflictを解消する

## 🎯 このLessonの目的

Conflictを恐れず直せるようになります。Conflictは「失敗」ではなく「相談」です。

## 📖 Learn

起きる仕組み：

```text
Aも同じ行を変えた ＋ Bも同じ行を変えた → Gitが自動判断できない → Conflict
```

```text
<<<<<<< HEAD (今のBranchの内容)
ようこそ
=======
いらっしゃいませ (相手のBranchの内容)
>>>>>>> feature/other
```

人間が選んで直すしかありません。

## 🖥 Try（SOLO再現版・約20分）

> 詳細スクリプトは [sample-conflict](../../examples/sample-conflict/README.md) にあります。要約版：

```bash
git switch main
git pull origin main
# 1つ目の変更
git switch -c feature/conflict-a
echo "Hello A" > conflict-demo.txt
git add conflict-demo.txt
git commit -m "Update greeting by A"
git push -u origin feature/conflict-a
# GitHub上でPR→Mergeしておく（または merge mainに）

# 2つ目の変更（同じファイルの同じ行を別内容で）
git switch main
git pull origin main
git switch -c feature/conflict-b
# ※わざとmainを更新せず古い状態から作るのがポイント（再現のため）
```

PAIR版はA・Bが同時に同じファイルを編集してPRを2件作り、後勝ちの方でConflictを起こします。
解消手順：

```bash
git switch feature/conflict-b
git pull origin main
# conflict発生 → ファイルを開いてマーカーを手で直す
git add conflict-demo.txt
git commit -m "Resolve conflict in greeting"
git push
```

## 💡 考えてみよう

- Conflictを減らすにはどうすればいいでしょう？（ヒント：小さいPR・早いMerge・声かけ）

## 🎯 Mission

- [ ] Conflictを1回起こした
- [ ] マーカーを手で解消してpushした
- [ ] `git status` と `git log` で正常に戻ったことを確認した

## ✅ Check

- [ ] Conflict＝Gitからの「選んでください」というお願いと説明できる
- [ ] 直し方（編集→add→commit）を言える

## 🚨 Troubleshooting

- マーカーが大量にある → エディタの検索で `<<<<<<<` を探す
- 間違えて消した → `git merge --abort` / `git rebase --abort` でやり直せる内は戻れる
- 詳しくは [TROUBLESHOOTING](../TROUBLESHOOTING.md#merge-conflict競合) 参照

## ➡️ Next

- [STEP 17: チーム開発・途中参加](../09-team-development/STEP17-join-midway.md)
