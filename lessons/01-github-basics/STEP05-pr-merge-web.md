# STEP 5 — Pull RequestとMerge（Web）

## 🎯 このLessonの目的

「合流していいか相談（PR）→ 合流（Merge）」の一連の流れをWeb完結で体験します。

## 📖 Learn

Pull Requestは「この変更をmainに入れていいですか？」というお願いです。
Mergeは実際に入れる操作です。一人でもこの手順を踏むと履歴がきれいに残ります。

```text
try-hello ●━━●
               ↘ PR「入れてください」→ 確認 → Merge → mainに合流
main      ●━━━━━━●━━●
```

## 🖥 Try（🌐 Web・約15分）

1. 練習リポジトリで `Pull requests` タブ → `New pull request`
2. `base: main` ← `compare: try-hello` であることを確認
3. 差分（Files changed）が1行追加だけであることを確認 → `Create pull request`
4. タイトルに `Update hello.md`、本文に `練習のため1行追加しました` と書いて作成
5. 下部の `Merge pull request` → `Confirm merge` をクリック
6. `main` に戻って `hello.md` に変更が反映されたことを確認

## 💡 考えてみよう

- 一人なのにわざわざPRを挟む意味は何でしょう？（ヒント：履歴・見直し・癖づけ）

## 🎯 Mission

- [ ] PRを作成し、自分でMergeした
- [ ] Merge後に `try-hello` ブランチを削除した（Delete branchボタン）

## ✅ Check

- [ ] PRは「合流のお願い場所」と説明できる
- [ ] Mergeは「合流実行」と説明できる
- [ ] base/compareの向きを間違えずに選べる

## 🚨 Troubleshooting

- `There isn't anything to compare` → 既にMerge済みか、Branchを間違えています
- Mergeボタンが緑でない → Conflictの可能性。PHASE 4で扱うので今は新規リポジトリでやり直しOK

## ➡️ Next

- [STEP 6: Issue](STEP06-issue-web.md)
