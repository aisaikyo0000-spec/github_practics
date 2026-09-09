# トラブルシューティング集

> 困ったらまずここ。直らなければ Issue に `question` ラベルで質問してください。
> 各Lessonの `🚨 Troubleshooting` からもここにリンクしています。

## git command not found / gitが見つかりません

- Gitが未インストールです。[STEP 7](02-git-basics/STEP07-setup.md) に戻ってインストールしてください
- Windows: Git Bashを使っていますか？（通常のコマンドプロンプトではなくGit Bash推奨）
- インストール後にターミナルを開き直してください
- 確認: `git --version`

## GitHub authentication（認証エラー）

- ID/パスワード直打ちは現在使えません。**Personal Access Token (PAT)** か **SSH** が必要です
- HTTPS + PATの場合：
  1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate
  2. `repo` にチェック → トークンをコピー（再表示されません）
  3. `git push` 時にパスワード欄にトークンを貼る（保存は資格情報マネージャー）
- ブラウザにログインできているか先に確認してください

## clone失敗

```bash
git clone https://github.com/aisaikyo0000-spec/github_practics.git
```

- URLのタイプミスが最多です。GitHubの緑色の `<> Code` ボタンからコピーしてください
- プライベートリポジトリなら認証が必要です（上記参照）
- 既に同名フォルダがあると失敗します → 別名で `git clone <URL> 別名` かフォルダを移動

## push拒否（rejected / failed to push）

- 原因1: リモートに自分の知らない変更がある → `git pull --rebase origin main` してからpush
- 原因2: mainに直接pushしようとした → Branchを切ってPR経由にしてください（本教材のルール）
- 原因3: 権限がない（他人のリポジトリ） → Forkか招待を確認

## pull失敗

- Conflict付きで失敗したら [STEP 16](08-merge-conflict/STEP16-conflict.md) の手順で解消
- `You have unstaged changes` と出たら先に `git stash` か `git commit` で作業を退避

## Branchの切り替えで怒られる

- 未コミットの変更があると切り替えできません
- 対処: `git status` → `git add` + `git commit` か、捨てていいなら `git stash -u`

## merge conflict（競合）

- 焦らなくて大丈夫です。教材のメインイベントです
- `<<<<<<<` `=======` `>>>>>>>` マーカーを探して手で直します
- 直したら `git add` → `git commit`（または `git rebase --continue`）
- 詳細: [STEP 16](08-merge-conflict/STEP16-conflict.md) / [sample-conflict](../examples/sample-conflict/README.md)

## detached HEAD

- Branchではなく過去のCommitにいる状態です
- 戻り方: `git switch main`（作業があれば先に `git switch -c 救出-branch` で退避）
- `git log --oneline -5` で今どこにいるか確認

## mainが古い

```bash
git fetch origin
git status
git pull origin main
```

- `fetch` は「本棚の新刊リストを見る」、 `pull` は「持って帰る」です
- チーム開発前は必ず最新化してください（[STEP 11](04-remote/STEP11-push-pull-fetch.md)）

## Commit忘れ / add忘れ

- `git status` が真実です。赤い `Untracked` / `modified` が残っていませんか？
- `git log --oneline -5` に自分のコミットがなければ未コミットです
- 流れ: 編集 → `git add` → `git commit -m "メッセージ"` → `git push`

## Web UIとターミナルの混同

- 🌐 Web = ブラウザ上の操作（Issue作成、PR作成、Mergeボタンなど）
- 💻 Terminal = 自分のPC（clone、add、commit、pushなど）
- 教材では各手順の先頭に 🌐 / 💻 を付けています
