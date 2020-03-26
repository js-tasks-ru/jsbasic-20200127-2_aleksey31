class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;

  }





  show() {
    this.arr = fetch(this.productsUrl).then(response => response.json().then(response => {
      let arrItems = response;
      console.log(arrItems);

      this.el.innerHTML = `
        <div class="row justify-content-end">
            <div class="col-lg-9">
                <h3 class="section-title">Top Recommendations for You</h3>
                <div class="row homepage-cards">
                    <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
                    
                </div>
            </div>
        </div>
      `;

      let homePage = this.el.querySelector(".homepage-cards");
      arrItems.forEach((item, index, arra) => {
        console.log(item);

        let fullStar =`<i class="icon-star checked"></i>`;
        let emptyStar =`<i class="icon-star active"></i>`;
        let allStars = '';
        let checkedStars = item.rating ? item.rating.stars : 0;
        let oldPrice = null;

        if (item.oldPrice) {
          oldPrice = `<small class="ml-2">${item.oldPrice}</small></p>`;
        }

        for(let i = 0; i < 5; i++) {
          if (i < checkedStars) {
            allStars += fullStar;
          } else {
            allStars += emptyStar;
          }
        }
        console.log(allStars);

        homePage.innerHTML += `
          <div data-product-id="${item.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-img-wrap">
                    <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    
                    <div class="rate">
                        ${allStars}
                        <span class="rate-amount ml-2">${item.rating !== null ? item.rating.reviewsAmount : '0'}</span>
                    </div>
                    
                    <p class="card-text price-text ${item.oldPrice ? 'discount' : ''}"><strong>${item.price}</strong>
                        ${oldPrice ? oldPrice : ''}
                    </p>
            
                    <button class="product-add-to-cart" data-button-role="add-to-cart">
                      Add to cart
                    </button>
                </div>
            </div>
          </div>
        `
      });


      let arrProduct = [];
      let stingArrProduct;
      this.el = addEventListener("click", (e) => {
        let yes;
        let idProduct = e.target.closest(".products-list-product").dataset.productId;
        if (e.target.dataset.buttonRole === "add-to-cart") {
          yes = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');
          if (yes) {
            console.log("yes");
            console.log(idProduct);
            idProduct = String(idProduct);
            if (!arrProduct.includes(idProduct)) {
              arrProduct.push(idProduct);
              //arrProduct = [...arrProduct];
            }
          } else {
            console.log("no");
          }
        }
        console.log(arrProduct);
        stingArrProduct = arrProduct;
        localStorage.basket = JSON.stringify(stingArrProduct);
        console.log(localStorage.basket);


      });

    }));
    return fetch(this.productsUrl);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
