window.addEventListener("load", () => {
  var nume = document.getElementById("nume");
  var id = document.getElementById("id");
  var pret = document.getElementById("pret");
  var poza = document.getElementById("imagine");

  var n = sessionStorage.getItem("nume_produs");
  var i = sessionStorage.getItem("id_produs");
  var p = sessionStorage.getItem("pret_produs");
  po = sessionStorage.getItem("imagine_produs");

  poza.src = po;
  nume.textContent = n;
  pret.textContent = `${p} $`;
});
