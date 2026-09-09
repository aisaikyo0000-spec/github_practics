# サンプルConflict：再現スクリプト

> SOLOでもPAIRでも使えるConflict再現手順です。練習リポジトリで試してください。

## SOLO再現（約10分）

```bash
git switch main
git pull origin main

# Aの変更 → 先にmainに入れる
git switch -c feature/conflict-a
echo "Hello A" > conflict-demo.txt
git add conflict-demo.txt
git commit -m "Update greeting by A"
git switch main
git merge feature/conflict-a
git push origin main

# Bの変更 → わざと古い状態から切る（再現のコツ）
git switch -c feature/conflict-b main~1
echo "Hello B" > conflict-demo.txt
git add conflict-demo.txt
git commit -m "Update greeting by B"
git switch feature/conflict-b
git pull origin main
# → CONFLICT発生
```

解消：

```bash
# conflict-demo.txtを開き、<<<<<<< / ======= / >>>>>>> を手で1つに直す
git add conflict-demo.txt
git commit -m "Resolve conflict in greeting"
git push -u origin feature/conflict-b
```

## PAIR再現

1. 2人とも最新mainから開始
2. 同じファイルの同じ行を別内容で編集→各自Push→各自PR
3. 先にMergeされた方が勝ち、後のPRでConflict発生→後の人が解消

## 片付け

```bash
git switch main
git pull origin main
git branch -d feature/conflict-a feature/conflict-b
rm conflict-demo.txt
git add -u
git commit -m "Clean up conflict demo"
git push origin main
```
