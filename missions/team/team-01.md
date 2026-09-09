# TEAM-01: Issue分担スプリント

## 準備

Issueを人数分用意します（4人例）：

- `feature/header` ヘッダー整備
- `feature/search` 検索フォーム
- `feature/map` 地域カード
- `docs/readme` README整備

5人目以降は追加： `feature/footer` `feature/accessibility` `fix/mobile-layout` など。

## ルール

- 立候補制（早い者勝ち）。Assigneeを自分にする
- main直接push禁止
- 1Issue＝1Branch＝1PR
- PRには `Closes #番号` を書く

## 手順

1. 全員 `git pull origin main`
2. 各自Branch→実装→Push→PR
3. 他の人のPRを1件以上レビュー（自分のはセルフレビューのみ）
4. Approve→Merge（マージ担当はPRごとに決める）

## 完了条件

- [ ] 全IssueがCloseされた
- [ ] 全員がPR作成＋レビューを経験した
