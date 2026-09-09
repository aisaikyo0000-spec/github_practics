# STEP 18 (FINAL) — 模擬チーム開発：地域情報Webサービス

## 🎯 このLessonの目的

チーム全体で Issue→担当→Branch→PR→Review→Merge を回し、1つのサービスを完成させます。

## 📖 Learn

題材： **地域情報Webサービス**（例：地元の祭り・公園・グルメを紹介する1ページサイト）。
使う素材： `examples/sample-project/` を拡張します。難しくしないことがルールです。

4人の場合のIssue分担例：

| # | Issue | Branch例 | 担当の決め方 |
|---|---|---|---|
| 1 | ヘッダー・タイトル整備 | `feature/header` | 立候補 |
| 2 | 検索フォーム追加 | `feature/search` | 立候補 |
| 3 | 地域カード（祭り等）追加 | `feature/map` | 立候補 |
| 4 | フッター・README整備 | `docs/readme` | 立候補 |

5人以上なら追加：

- `feature/footer-detail` お問い合わせ欄
- `feature/accessibility` label・alt追加
- `fix/mobile-layout` スマホ対応
- `docs/usage` 使い方追記

## 🖥 Try（全体の流れ）

```text
1. 🌐 Issueを4件（＋予備）立てる（担当は空欄→立候補）
2. 💻 各自 Branch作成→実装→Commit→Push
3. 🌐 PR作成（テンプレ厳守・Closes #番号）
4. 🌐 相互レビュー（3観点・最低1人は他人がレビュー）
5. 💻 修正→Approve→Merge
6. 🌐 mainを確認・デモ（index.htmlを開く）
```

期間の目安： 非同期で3〜7日。各PRは小さく・早く出す。

## 💡 考えてみよう

- 「動くものを早くmainに入れる」方がいいのはなぜでしょう？

## 🎯 Mission（FINAL達成条件）

- [ ] Issueが全てCloseされた
- [ ] PRが全てMergeされた
- [ ] mainのサイトがブラウザで表示できる
- [ ] 全員が1件以上レビューした

## ✅ Check

- [ ] main直接pushゼロだった
- [ ] Conflictが起きても解消できた
- [ ] 次に参加する人へのREADME更新をした

## 🚨 Troubleshooting

- PRが溜まる → 小さく分割・WIP PRで早期共有
- Conflict多発 → mainのpull頻度を上げる・作業範囲をずらす

## ➡️ Next（修了）

- お疲れさまでした 🎉 学習Issueに `STEP 18 完了` と記録しましょう
- 次の挑戦： `missions/team/` の応用課題、または自分の作品リポジトリでIssue駆動開発を続ける
