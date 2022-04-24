const firstBrandData = 'maybelline';
const secondBrandData = 'revlon';
const thirdBrandData = 'dior';

const brands = [firstBrandData, secondBrandData, thirdBrandData];
const brandsList = [];
const brand = document.getElementById('container');

getResponseData();

function getResponseData() {
    for (let i = 0; i < brands.length; i++) {
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=' + brands[i])
            .then(response => response.json())
            .then(response => firstBrandResponseReceived(response))
            .catch(err => console.error(err));
    }
}

function firstBrandResponseReceived(responseData) {
    brandsList.push(responseData);
    brand.innerHTML = '';

    updateUI();
}

function updateUI() {
    let brandList = '';
    for (let i = 0; i < brandsList.length; i++) {
        brandList += "        <div class=\"brand-container\">\n" +
            "            <h4>" + brands[i].toUpperCase() + "</h4>";
        for (let j = 0; j < 5; j++) {
            brandList += "<div class=\"product-box\">\n" +
                "                <img src=" + brandsList[i][j].image_link + ">\n" +
                "                <div class=\"product-info\">\n" +
                "                    <span>" + brandsList[i][j].name + "</span>\n" +
                "                    <span>Price: " + brandsList[i][j].price + "</span>\n" +
                "                </div>\n" +
                "                <a href=" + brandsList[i][j].product_link + " target=\"_blank\">Product Page</a>\n" +
                "         </div>";
        }
        brandList += "</div>";
        brand.innerHTML = brandList;
    }
}
