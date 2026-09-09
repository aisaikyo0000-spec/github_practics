# STEP 7 — Gitをインストールして名乗る

## 🎯 このLessonの目的

PCにGitを用意し、「誰が記録したか」を登録します。

## 📖 Learn

Commitには作者名が残ります。初回だけ名前とメールを登録します。
これはGitHubログインとは別物（PC側の設定）です。

## 🖥 Try（💻 Terminal）

状況： `git --version` でGitの有無を確認したい。

```bash
git --version
```

- バージョンが出ればOK（例：`git version 2.45.0`）
- 出なければインストール：
  - Windows: https://git-scm.com/downloads/win → Git for Windows → 既定設定でOK
  - Mac: `xcode-select --install`
  - Ubuntu: `sudo apt update && sudo apt install git`

次に名乗ります（初回のみ）：

```bash
git config --global user.name "あなたのGitHub ID"
git config --global user.email "GitHub登録メール"
git config --global init.defaultBranch main
```

確認：

```bash
git config --global --list
```

## 💡 考えてみよう

- なぜ名前とメールを登録するのでしょう？図書館の貸出カードと比べてみてください。

## 🎯 Mission

- [ ] `git --version` が表示される
- [ ] `user.name` / `user.email` が登録されている

## ✅ Check

- [ ] Gitのインストール有無を確認できる
- [ ] 自分の名前でCommitされる準備ができた

## 🚨 Troubleshooting

- `git command not found` → インストール後にターミナルを開き直す。詳細は [TROUBLESHOOTING](../TROUBLESHOOTING.md) 参照
- Windowsで文字化け → Git Bashを使用。文字コードは後回しでOK

## ➡️ Next

- [STEP 8: clone / status / log](STEP08-clone-status.md)
