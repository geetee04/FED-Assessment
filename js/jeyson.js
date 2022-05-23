let http =  new XMLHttpRequest();

http.open('GET', 'js/products.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){

        let products = JSON.parse(this.responseText)
        let output = "";

        for(let item of products){
            output += `
                <div class="product-box">
                <img src="${item.productImg}" alt="${item.productImg}" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <span class="price">$${item.price}</span>
                <button type = "button" class = 'add-cart'>
                            Add To Cart
                        </button>
                </div>
                `;
        }
        document.querySelector(".shop-content").innerHTML = output;
    }
}