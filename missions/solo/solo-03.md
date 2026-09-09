# SOLO-03: Conflictを一人で再現・解消する（STEP 16対応）

## 目的

一人でもConflictの起こし方・直し方を体験する。

## 手順（要約）

詳細は [sample-conflict](../../examples/sample-conflict/README.md) のスクリプト通り。

1. `feature/conflict-a` で `conflict-demo.txt` を `Hello A` にしてMergeまで行う
2. わざと古いmainから `feature/conflict-b` を切り、`Hello B` でコミット
3. `feature/conflict-b` をmainに合流しようとしてConflictを起こす
4. マーカーを手で直して `add→commit→push`

## 完了条件

- [ ] Conflictを起こせた
- [ ] 解消してMergeできた

## 注意

練習リポジトリか、この教材のclone先の作業Branchで試してください。mainを壊したら `git merge --abort` で戻れます。
