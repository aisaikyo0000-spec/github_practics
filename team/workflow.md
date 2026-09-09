# 開発ワークフロー

```text
Issueを確認（なければ作成・立候補）
↓
mainを最新化（git pull origin main）
↓
Branch作成（feature/xxx-自分のID）
↓
実装（小さく・1件ずつ）
↓
Commit（意味のあるメッセージ）
↓
Push（git push -u origin Branch名）
↓
Pull Request作成（テンプレ・Closes #番号）
↓
Code Review（良い点・問題点・提案）
↓
必要なら修正（追加コミット）
↓
Approve（他人1件以上、SOLOはセルフ）
↓
Merge → Branch削除 → mainをpullして確認
```

## レビュー循環（4人例）

A→B→C→D→A。5人以上は循環を伸ばす。

## Issue追加ガイド（5人以上）

足しやすいIssue例： フッター詳細、アクセシビリティ（label/alt）、スマホ対応、使い方追記、OGP画像。
