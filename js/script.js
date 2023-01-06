function onClickImg(element) {
  document.getElementById("img-modal").src = element.src;
  document.getElementById("modal").style.display = "block";
}