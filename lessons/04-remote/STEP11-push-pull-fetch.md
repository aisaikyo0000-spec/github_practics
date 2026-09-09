# STEP 11 — push / pull / fetch（本棚と机のやり取り）

## 🎯 このLessonの目的

良い例で学びます：

```text
悪い： git fetchはリモートの情報を取得します。（暗記）
良い： GitHubに新しい変更があるのにPCは知らない。どうする？ → fetchで見に行く
```

## 📖 Learn

- `push`: 机 → 本棚に上げる
- `fetch`: 本棚の新刊リストを見に行く（持って帰らない）
- `pull`: 本棚から持って帰る（＝fetch＋merge）
- `merge`: 合流させる

## 🖥 Try（💻 Terminal＋🌐 Web）

状況： STEP 10で `feature/practice-あなたのID` にコミットした。まだ自分のPCにしかない。

↓ 考える：本棚（GitHub）に上げたい → pushだ。

```bash
git switch feature/practice-あなたのID
git push -u origin feature/practice-あなたのID
```

↓ 結果を確認： GitHubのBranchプルダウンに自分のBranchが見える。

次に、GitHub上で誰か（または自分）がmainを更新したとする。
PCはまだ知らない。どうする？

```bash
git switch main
git fetch origin
git status
#behind などの表示が「遅れ」を教えてくれる
git pull origin main
git log --oneline -3
```

## 💡 考えてみよう

- `fetch` と `pull` の違いを「本屋」で例えると？（立ち読み vs 購入）

## 🎯 Mission

- [ ] 自分の作業Branchをpushし、GitHubで確認した
- [ ] fetch→status→pullの流れでmainを最新化した

## ✅ Check（PHASE 2 修了確認）

- [ ] clone/status/add/commit/log/diff/switch/branch/push/pull/fetch/merge を一通り使った
- [ ] 操作前に `git status` を見る癖がついた

## 🚨 Troubleshooting

- push rejected → 先にpull（rebase推奨）。[TROUBLESHOOTING](../TROUBLESHOOTING.md#push拒否rejected--failed-to-push) 参照
- 認証エラー → PAT／資格情報マネージャーを確認
- mainが古い → fetch→pullの順で最新化

## ➡️ Next

- PHASE 3へ：[STEP 12: 個人開発フロー](../05-pull-request/STEP12-pr-flow.md)
