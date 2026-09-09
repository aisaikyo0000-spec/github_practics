# STEP 17 — 非同期チーム開発・途中参加

## 🎯 このLessonの目的

開始日も進度もバラバラなチームで開発を回せるようになります。

```text
A → STEP 30相当（先行） B → STEP 12 C → STEP 24 D → STEP 5 でもOK
```

## 📖 Learn

原則：

1. STEP順に進む（追いつく必要なし）
2. チーム課題には参加条件を満たしてから参加（例：STEP 14まで完了）
3. mainは常に最新化してから始める
4. main直接push禁止・必ずIssue→Branch→PR

途中参加フロー（Bさんが9/20に参加した例）：

```text
1. Repositoryを取得（clone済みなら pull）
2. 現在のmainを取得（fetch→pull）
3. 自分の学習STEPを開始（BさんはSTEP 8から）
4. 参加条件を満たしたらIssueを担当（立候補制）
```

## 🖥 Try

1. 💻 最新化：

```bash
git switch main
git fetch origin
git pull origin main
```

2. 🌐 空いているIssueを1つ取ってAssigneeに自分を設定
3. 💻 定例フローで回す（Issue→Branch→実装→PR→Review→Merge）
4. 🌐 自分の進捗をIssueやPRに残す（非同期なので文字で残す）

## 💡 考えてみよう

- 同期（全員集合）前提だと何が困るでしょう？非同期だと何が助かるでしょう？

## 🎯 Mission

- [ ] 最新mainからBranchを切ってPRを1件Mergeした
- [ ] レビューを1件した（または受けた）

## ✅ Check

- [ ] 途中参加の4手順を言える
- [ ] 人数可変（1〜5人以上）でもIssue追加で対応できると説明できる

参加条件の例：

```text
本STEPの参加条件： STEP 14まで完了
FINALの参加条件： STEP 17まで完了
```

## 🚨 Troubleshooting

- mainが古いまま作業した → Conflict・余計な差分の元。作業前に必ずpull
- 誰もレビューしてくれない → SOLO同様にセルフレビュー＋sample-prで補完可

## ➡️ Next

- [STEP 18: FINAL PROJECT](STEP18-final-project.md)
