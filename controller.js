function clear() {
  document.getElementById("email").value = "";
  document.getElementById("use").value = "";
}
function kalkulerPRY() {
  var x = parseFloat(rentelån / 100);
  var y;
  y = Math.pow(x, tme);
  lån = antall * Math.pow((1+ x), tme);
  updateView();
}