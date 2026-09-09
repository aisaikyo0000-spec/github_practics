# STEP 9 — add / commit / diff（記録の基本）

## 🎯 このLessonの目的

「編集 → 記録候補 → 記録確定 → 差分確認」の基本サイクルを体得します。

## 📖 Learn

```text
編集（working tree）
 ↓ git diff（何が変わったか見る）
 ↓ git add（記録候補に入れる＝ステージ）
 ↓ git commit（記録確定＋メッセージ）
```

## 🖥 Try（💻 Terminal・約15分）

状況： `memo.txt` に1行足した。でもGitはまだ記録していない。

```bash
git status
#赤字で modified: memo.txt がなければ先に echo "hello git" > memo.txt
```

↓ 何が起きているか考える：変更はあるが記録されていない。差分を見てから記録したい。

```bash
git diff
```

↓ 必要な操作を判断：よさそうなので記録候補に入れる → 確定する。

```bash
git add memo.txt
git status
#緑字 staged になったことを確認
git commit -m "Add memo for practice"
git log --oneline -3
```

↓ 結果を確認： `git status` がcleanに戻り、 `git log` に自分のコミットがある。

> 練習ファイルは後で消してOKです（`git rm memo.txt` 後にcommit、またはSTEP 10のBranch練習と一緒に捨てる）。

## 💡 考えてみよう

- `add` を挟むのは面倒に見えます。でも「写すものを選んでからシャッターを押す」方がいいのはどんな時でしょう？

## 🎯 Mission

- [ ] diffで差分を読めた（`+` が追加行、`-` が削除行）
- [ ] add→commit→log確認の一連の流れを通せた

## ✅ Check

- [ ] 悪い例（`fix` `aaa`）を避け、意味のあるメッセージを書けた
- [ ] `git status` を操作の前後に見る癖がついた

## 🚨 Troubleshooting

- Commit忘れ・add忘れ → `git status` を見る。[TROUBLESHOOTING](../TROUBLESHOOTING.md#commit忘れ--add忘れ) 参照
- 日本語メッセージ文字化け（Windows） → 今は英語メッセージでOK

## ➡️ Next

- [STEP 10: branch / switch](../03-branch/STEP10-branch-switch.md)
