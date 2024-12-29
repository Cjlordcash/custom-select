var fieldsSel = document.getElementById("fieldSel");
var textSelect = document.getElementById("textSelect");
var listOption = document.getElementsByClassName("list-options");
var list = document.getElementById("list");
var selectImg = document.getElementById("selectImg");

fieldsSel.onclick = function () {
  list.classList.toggle("hide");
  selectImg.classList.toggle("rotate");
};

for (listOption of listOption) {
  listOption.onclick = function () {
    textSelect.innerHTML = this.textContent;
    list.classList.toggle("hide");
    selectImg.classList.toggle("rotate");
  };
}
