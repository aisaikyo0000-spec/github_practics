# 学習マップ（ROADMAP）

> 日付ではなくSTEPで進みます。1人でも5人以上でも同じ地図を使います。

## PHASE対応表

| PHASE | テーマ | STEP | 場所 | 参加条件 |
|---|---|---|---|---|
| PHASE 1 | GitHub基礎（Webのみ） | STEP 1–6 | `01-github-basics/` | なし（Git不要） |
| PHASE 2 | Git基礎（ターミナル） | STEP 7–11 | `02-git-basics/` `03-branch/` `04-remote/` | STEP 6まで推奨 |
| PHASE 3 | 個人開発実践 | STEP 12–14 | `05-pull-request/` `06-issue/` | STEP 11まで完了 |
| PHASE 4 | 非同期チーム開発 | STEP 15–17 | `07-code-review/` `08-merge-conflict/` `09-team-development/` | STEP 14まで完了 |
| FINAL | 模擬チーム開発 | STEP 18 | `09-team-development/STEP18-final-project.md` | STEP 17まで完了 |

## STEP一覧

- STEP 1: GitHubアカウント作成 → [01-github-basics/STEP01-account.md](01-github-basics/STEP01-account.md)
- STEP 2: RepositoryとREADME → [01-github-basics/STEP02-repository.md](01-github-basics/STEP02-repository.md)
- STEP 3: ファイル作成とCommit（Web） → [01-github-basics/STEP03-file-commit.md](01-github-basics/STEP03-file-commit.md)
- STEP 4: Branch（Web） → [01-github-basics/STEP04-branch-web.md](01-github-basics/STEP04-branch-web.md)
- STEP 5: Pull RequestとMerge（Web） → [01-github-basics/STEP05-pr-merge-web.md](01-github-basics/STEP05-pr-merge-web.md)
- STEP 6: Issue（Web） → [01-github-basics/STEP06-issue-web.md](01-github-basics/STEP06-issue-web.md)
- STEP 7: Gitインストールと初期設定 → [02-git-basics/STEP07-setup.md](02-git-basics/STEP07-setup.md)
- STEP 8: clone / status / log → [02-git-basics/STEP08-clone-status.md](02-git-basics/STEP08-clone-status.md)
- STEP 9: add / commit / diff → [02-git-basics/STEP09-add-commit.md](02-git-basics/STEP09-add-commit.md)
- STEP 10: branch / switch → [03-branch/STEP10-branch-switch.md](03-branch/STEP10-branch-switch.md)
- STEP 11: push / pull / fetch / merge → [04-remote/STEP11-push-pull-fetch.md](04-remote/STEP11-push-pull-fetch.md)
- STEP 12: 個人開発フロー（Issue→Branch→PR） → [05-pull-request/STEP12-pr-flow.md](05-pull-request/STEP12-pr-flow.md)
- STEP 13: PRの書き方・セルフレビュー → [05-pull-request/STEP13-pr-message.md](05-pull-request/STEP13-pr-message.md)
- STEP 14: Issue駆動開発 → [06-issue/STEP14-issue-driven.md](06-issue/STEP14-issue-driven.md)
- STEP 15: Code Review → [07-code-review/STEP15-review.md](07-code-review/STEP15-review.md)
- STEP 16: Merge Conflict → [08-merge-conflict/STEP16-conflict.md](08-merge-conflict/STEP16-conflict.md)
- STEP 17: チーム開発・途中参加 → [09-team-development/STEP17-join-midway.md](09-team-development/STEP17-join-midway.md)
- STEP 18: FINAL PROJECT → [09-team-development/STEP18-final-project.md](09-team-development/STEP18-final-project.md)

## モード別おすすめルート

```text
SOLO (1人): STEP 1 → 18 を順番に。Reviewは sample-pr/ のBobのPRで練習
PAIR (2人): STEP 11まで各自SOLO → missions/pair/ で2人課題 → STEP 15以降
TEAM (3人+): STEP 14まで各自SOLO → missions/team/ で分担 → FINALへ
```

## 進捗の記録方法

各STEP末尾のCheckpointにチェックを入れてください。
GitHub上でチェックを入れたい人は、自分の進捗Issue（例：`学習進捗：@自分のID`）を作り、以下を貼ると便利です。

```markdown
- [ ] STEP 1
- [ ] STEP 2
...
- [ ] STEP 18
```
