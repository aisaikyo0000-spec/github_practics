# GitHub実践教材 — ゼロから学ぶ Git / GitHub

> 完全初心者が「ゼロの状態」から実際に手を動かして学ぶための教材リポジトリです。\
> このリポジトリ自体が教材であり、実習環境です。

- 対象: Git / GitHub を一度も使ったことがない人
- 前提: 日付ではなく **STEP基準** で進む非同期学習。1人でも5人以上でも成立します
- 学習モード: **SOLO / PAIR / TEAM** に対応
- 最初に読むページ: [lessons/00-start-here.md](lessons/00-start-here.md)

---
yah
## この教材は何なのか

「読むだけ」ではなく「操作して理解する」ための教材です。

- GitHubのWeb画面操作から始めます（いきなりターミナルは使いません）
- 次にGitコマンドを「状況 → 考える → 実行 → 確認」の流れで学びます
- 小さなWebアプリを題材に、Issue → Branch → PR → Review → Merge を実践します
- 最後に模擬チーム開発（FINAL PROJECT）を行います

ゴールは「コマンド暗記」ではなく、**「今何が起きているか」を考えて操作を選べること**です。

---

## GitとGitHubの違い（30秒で理解）

|  | Git | GitHub |
|---|---|---|
| 正体 | 履歴を記録する仕組み（ソフトウェア） | Gitの履歴をネット上に置く場所（Webサービス） |
| 場所 | あなたのPCの中 | インターネット上 |
| 例え | ノートに記録する行為 | ノートをみんなで共有する図書館 |
| なくて困ること | Gitがないと「変更履歴」が残せない | GitHubがないと「共同作業」が難しい |

> 詳しくは [00-start-here](lessons/00-start-here.md) で図解します。ここで覚えなくて大丈夫です。

---

## 対象者

- Git / GitHub 初心者（未経験者歓迎）
- プログラミング初心者でもOK（サンプルはHTML/CSS/JSの最小構成）
- 学生・社会人・独学の方。授業での利用も想定しています

必要なのは意欲だけです。専門用語はその都度説明します。

---

## SOLO / PAIR / TEAM

| モード | 人数 | 内容 |
|---|---|---|
| **SOLO** | 1人 | 1人で完結。他人役は教材の架空人物（Alice / Bob / Charlie）で代用 |
| **PAIR** | 2人 | Issue担当 × Review担当などで実際の共同作業 |
| **TEAM** | 3人以上 | Issue分担・レビュー持ち回りのチーム開発。5人以上はIssue追加で対応 |

人数で教材を作り替える必要はありません。
`missions/solo/` → `missions/pair/` → `missions/team/` の順に進めます。

---

## 非同期学習について（重要）

全員が同じ日に始める必要はありません。

```text
Aさん: 9/1 開始 → STEP 30 まで進んだ
Bさん: 9/20 開始 → STEP 8 を進行中
Cさん: 10/1 開始 → これから STEP 1
```

でも成立します。ルールは2つだけです。

1. **STEP順に進むこと**（日付で進まない）
2. **チーム課題には「参加条件」を満たしてから参加すること**（例: PHASE 2 STEP 11 まで完了）

AさんはBさんを待たなくてよく、BさんはAさんに追いつく必要はありません。
途中参加の手順は [lessons/09-team-development/STEP17-join-midway.md](lessons/09-team-development/STEP17-join-midway.md) を見てください。

---

## 学習の進め方

```text
PHASE 1: GitHub基礎（Webのみ） → lessons/01-github-basics/
PHASE 2: Git基礎（ターミナル） → lessons/02-git-basics/, 03-branch/, 04-remote/
PHASE 3: 個人開発実践 → lessons/05-pull-request/, 06-issue/, examples/sample-project/
PHASE 4: 非同期チーム開発 → lessons/07-code-review/, 08-merge-conflict/, 09-team-development/
FINAL: 模擬チーム開発 → lessons/09-team-development/STEP18-final-project.md
```

各Lessonは共通フォーマットです：

```markdown
🎯 目的 → 📖 Learn → 🖥 Try → 💡 考えてみよう → 🎯 Mission → ✅ Check → 🚨 Trouble → ➡️ Next
```

Checkpointにチェックを入れて進んでください。数日空いてもどこまで進んだか分かります。

学習マップ全体は [lessons/ROADMAP.md](lessons/ROADMAP.md) を見てください。

---

## Repositoryの構造

```text
github_practics/
├── README.md                    ← 今ここ
├── lessons/
│   ├── 00-start-here.md         ← 最初に読む
│   ├── ROADMAP.md               ← STEP一覧・PHASE対応表
│   ├── TROUBLESHOOTING.md       ← つまずき集
│   ├── 01-github-basics/        ← PHASE 1 (STEP 1-6)
│   ├── 02-git-basics/           ← PHASE 2 (STEP 7-9)
│   ├── 03-branch/               ← PHASE 2 (STEP 10)
│   ├── 04-remote/               ← PHASE 2 (STEP 11)
│   ├── 05-pull-request/         ← PHASE 3 (STEP 12-13)
│   ├── 06-issue/                ← PHASE 3 (STEP 14)
│   ├── 07-code-review/          ← PHASE 4 (STEP 15)
│   ├── 08-merge-conflict/       ← PHASE 4 (STEP 16)
│   └── 09-team-development/     ← PHASE 4 + FINAL (STEP 17-18)
├── missions/
│   ├── solo/                    ← 1人用課題
│   ├── pair/                    ← 2人用課題
│   └── team/                    ← 3人以上用課題
├── examples/
│   ├── sample-project/          ← 実習用Webアプリ
│   ├── sample-pr/               ← Review練習用サンプルPR
│   └── sample-conflict/         ← Conflict再現用
├── team/
│   ├── rules.md                 ← チームルール
│   ├── workflow.md              ← 開発フロー
│   └── onboarding.md            ← 途中参加ガイド
└── .github/
    ├── ISSUE_TEMPLATE/          ← feature / bug / task
    └── PULL_REQUEST_TEMPLATE.md
```

---

## 準備するもの

### 1. GitHubアカウント（必須・無料）

- [GitHub](https://github.com) で登録します
- 手順は [STEP 1](lessons/01-github-basics/STEP01-account.md) に画像付き相当の手順で解説しています

### 2. PCにGitをインストール（PHASE 2から必須）

| OS | 方法 |
|---|---|
| Windows | [git-scm.com](https://git-scm.com/downloads/win) からGit for Windowsをインストール |
| Mac | `xcode-select --install` または `brew install git` |
| Linux (Ubuntu) | `sudo apt update && sudo apt install git` |

確認コマンド：

```bash
git --version
```

> `git command not found` と出たら [TROUBLESHOOTING](lessons/TROUBLESHOOTING.md) を見てください。
> PHASE 1はGit不要（ブラウザだけ）で進められます。

### 3. 推奨環境

- ブラウザ: Chrome / Edge / Firefox のいずれか
- エディタ: VS Code 推奨（メモ帳でも可）
- ターミナル: Windowsは「Git Bash」、Mac/Linuxは標準ターミナル

---

## Web UIとターミナルの区別

本教材では操作場所を明示します。

- 🌐 **Web**: ブラウザ上のGitHubで操作
- 💻 **Terminal**: 自分のPCのターミナルで操作

例： `🌐 Issueを作成する` / `💻 git push origin feature/xxx`

---

## さあ始めよう

1. [00-start-here](lessons/00-start-here.md) を読む（10分）
2. [ROADMAP](lessons/ROADMAP.md) で全体像をつかむ
3. [STEP 1](lessons/01-github-basics/STEP01-account.md) から順番に進む

> 🆘 困ったら [TROUBLESHOOTING](lessons/TROUBLESHOOTING.md) → それでも解決しなければ Issue に `question` ラベルで質問してください。
