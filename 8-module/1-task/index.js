class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
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
  }





  show() {

    return this.arr = fetch(this.productsUrl).then(response => response.json().then(response => {
      let arrItems = response;

      let homePage = this.el.querySelector(".homepage-cards");
      arrItems.forEach((item, index, arra) => {

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
      this.el.addEventListener("click", (e) => {
        let yes;
        let idProduct;
        if (e.target.dataset.buttonRole === "add-to-cart") {
          idProduct = e.target.closest(".products-list-product").dataset.productId;
          yes = confirm('Вы уверенны, что хотите добавить этот товар в корзину?');
          if (yes) {
            if (!arrProduct.includes(arrItems.find((item) => {
                  if (item.id == idProduct) {
                    return true;
                  }
                }))) {
              arrProduct.push(arrItems.find((item) => item.id == idProduct)) ;
            }
          } else {
            console.log("no");
          }
        }
        console.log(arrProduct);
      });
    }));
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
