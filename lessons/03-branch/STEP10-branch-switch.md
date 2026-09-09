# STEP 10 — Branchを切って移動する

## 🎯 このLessonの目的

ターミナルで安全な作業場所を作り、行き来できるようになります。

## 📖 Learn

- `git branch`: 枝の一覧・作成
- `git switch`: 枝の移動（`checkout` の新しい版）
- 命名ルール（本教材）： `feature/xxx` `fix/xxx` `docs/xxx`。必要なら `feature/xxx-ユーザー名`

例： `feature/header` `fix/header-layout` `docs/readme`

## 🖥 Try（💻 Terminal）

状況： mainで直接編集しそうになった。危ないので実験用の枝が欲しい。

```bash
git status
#cleanであることを確認（汚いまま移動しない）
git branch
#今ある枝を確認（* が現在地）
```

↓ 必要な操作を判断：新しい枝を作って移動する。

```bash
git switch -c feature/practice-あなたのID
git branch
#* が新しい枝についていることを確認
echo "branch practice" >> memo2.txt
git add memo2.txt
git commit -m "Add memo2 on feature branch"
git log --oneline --graph -5
```

↓ 結果を確認：グラフで枝分かれが見える。mainに戻ると `memo2.txt` が見えない（分岐の証拠）。

```bash
git switch main
```

## 💡 考えてみよう

- Branch名から内容が想像できるのはなぜ大事でしょう？5人チームでバラバラな名前だったら？

## 🎯 Mission

- [ ] Branchを作成・移動・一覧確認できた
- [ ] mainと作業Branchでファイルの見え方が違うことを確認した

## ✅ Check

- [ ] `git switch` と `git branch` の役割を説明できる
- [ ] main直接作業を避ける理由を説明できる

## 🚨 Troubleshooting

- 切り替えで怒られる → 未コミット変更あり。先にcommitかstash。[TROUBLESHOOTING](../TROUBLESHOOTING.md#branchの切り替えで怒られる) 参照
- detached HEADになった → `git switch main` で戻る

## ➡️ Next

- [STEP 11: push / pull / fetch](../04-remote/STEP11-push-pull-fetch.md)
