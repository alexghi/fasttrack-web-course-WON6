const urls = [
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx",
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique",
];

async function getAllUrls(urls) {
  var data = await Promise.all(
    urls.map((url) => fetch(url).then((response) => response.json()))
  );
  return data;
}

window.addEventListener("load", () => {
  const container = document.getElementById("container");

  getAllUrls(urls).then((data) => {
    for (let i = 0; i < data.length; i++) {
      const array1 = data[i];
      for (let k = 0; k < array1.length; k++) {
        const el = document.createElement("div");
        el.style.width = "200px";
        el.style.height = "300px";
        el.style.margin = "10px";
        el.style.background = "blue";
        el.style.color = "white";
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.fontSize = "13px";
        el.style.fontFamily = "Trebuchet MS";
        el.style.textAlign = "center";

        descrierea = document.createElement("div");
        descrierea.style.padding = "5px";

        const poza = document.createElement("img");

        el.appendChild(poza);
        el.appendChild(descrierea);

        const nume = array1[k].name;
        const id = array1[k].id;
        const pret = array1[k].price;
        const imagineURL = array1[k].image_link;
        poza.src = `${imagineURL}`;
        descrierea.textContent = `${nume} `;

        container.appendChild(el);

        sessionStorage.setItem("id_produs", id);
        el.addEventListener("click", () => {
          window.location.href = "buy_page.html";

          sessionStorage.setItem("imagine_produs", imagineURL);
          sessionStorage.setItem("nume_produs", nume);
          sessionStorage.setItem("id_produs", id);
          sessionStorage.setItem("pret_produs", pret);
        });
      }
    }
  });
});