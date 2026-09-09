# PAIR-02: Conflictペア体験

## 設定

A・Bが同じファイルの同じ行を別々に変えて、両方mainに入れようとします。

## 手順

1. 2人とも `git pull origin main` で最新化
2. A: `feature/greeting-a` で `conflict-demo.txt` を変更→PR→Merge
3. B: AのMerge前に `feature/greeting-b` で同じ行を変更→Push→PR作成
4. BのPRでConflict発生 → Bが解消（分からなければAと相談）→ Merge

## 完了条件

- [ ] Conflictを起こして解消した
- [ ] どちらかの変更を残すか、両方活かすか話し合って決めた

## 学び

- 早めのpull・小さいPR・声かけでConflictは減らせることを実感する
