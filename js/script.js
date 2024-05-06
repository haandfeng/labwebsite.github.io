document.addEventListener('DOMContentLoaded', function() {
// 获取模态框元素
var modal = document.getElementById("bio-popup");

// 获取打开模态框的按钮
var btn = document.getElementById("viewBio");

// 获取关闭模态框的 <span> 元素
var span = document.getElementsByClassName("close")[0];

// 点击按钮时打开模态框
btn.onclick = function() {
  modal.style.display = "block";
}

// 点击 <span> （x），关闭模态框
span.onclick = function() {
  modal.style.display = "none";
}

// 点击模态框外的地方，关闭模态框
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});