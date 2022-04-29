console.log('hello');

fetch('allproducts.json')
    .then ( (response)=> {
       return response.json() 
    })
    .then ( (data )=> {
       const filteredProducts = data.filter( (element ) => {
           return element.brand == 'maybellin' || element.brand == 'dior' || element.brand =='clinique'
       })
       console.log(filteredProducts);
       let container = document.getElementById('flex-container');
       for(const product of filteredProducts) {
           let productDiv=document.createElement('div'); //produsul de html!!
           productDiv.className="item";
           container.appendChild(productDiv);
          //creeare de div si pus in container


          let brandNameDiv= document.createElement('div');
          brandNameDiv.innerText=product.brand;
          productDiv.appendChild(brandNameDiv);
          brandNameDiv.className="brandName";
          
          let productNameDiv= document.createElement('div');
          productNameDiv.innerText=product.name;
          productDiv.appendChild(productNameDiv);

          let productTypeDiv= document.createElement('div');
          productTypeDiv.innerText='type:' + product.product_type;
          productDiv.appendChild(productTypeDiv);

          let productPriceDiv= document.createElement('div');
          productPriceDiv.innerText=''+ product.price + product.price_sign;
          productDiv.appendChild(productPriceDiv);

          

          let productLink= document.createElement('a');
          productLink.href=product.product_link;
          productLink.innerText='link';
          productDiv.appendChild(productLink);


           

           

       }
    })

    





let products = document.getElementById('products');

