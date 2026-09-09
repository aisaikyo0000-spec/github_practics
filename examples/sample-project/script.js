// 練習用JS：スポット追加の最小例
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("spot-list");
  console.log("spots:", list ? list.children.length : 0);
});
