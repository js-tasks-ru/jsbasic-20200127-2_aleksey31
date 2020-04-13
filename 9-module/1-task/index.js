'use strict';

class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {

    this.cartArr = JSON.parse(localStorage.getItem('cart-products'));
    console.log(this.cartArr);
    parentElement.innerHTML = `<div class="product-list-box">
        <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
    </div>`;
    let basketPage = parentElement.querySelector('.product-list-box');
    console.log(basketPage);
    this.cartArr.forEach((product) => {
      let fullStar =`<i class="icon-star checked"></i>`;
      let emptyStar =`<i class="icon-star active"></i>`;
      let allStars = '';
      let checkedStars = product.rating ? product.rating.stars : 0;

      for(let i = 0; i < 5; i++) {
        if (i < checkedStars) {
          allStars += fullStar;
        } else {
          allStars += emptyStar;
        }
      }

      basketPage.innerHTML += `
        <div data-product-id="${product.id}" class="product-wrapper box-inner-col description-col">

        <div class="product-image-container">
          <img class="product-image" src="${product.imageUrl}" alt="img">
        </div>
      
        <div class="product-description">
          <h4 class="col-title mb-2">${product.title}</h4>
          <div class="rate">
            ${allStars}
          </div>
          <p class="rate-amount d-none d-md-block mt-1">${product.rating.reviewsAmount} reviews</p>
        </div>
      
        <div class="product-price">
          <p class="mb-0 font-weight-light">Price:</p>
          <h4 class="col-title price-text mb-2">${product.price}</h4>
        </div>
      
        <div class="product-remove-button-wrapper">
          <button type="button"
                  data-button-role="checkout-remove-product"
                  class="product-remove-button">
            X
          </button>
        </div>
      
      </div>
      `
    });


    let deletedItems = [];
    parentElement.addEventListener("click", (e) => {
      let yes;
      let idProduct;
      if (e.target.dataset.buttonRole === "checkout-remove-product") {
        idProduct = e.target.closest(".product-wrapper").dataset.productId;

        yes = confirm('Вы уверенны, что хотите удалить этот товар из корзины?');
        if (yes) {
          if (this.cartArr.find((item) => {
                if (item.id == idProduct) {
                  return true;
                }
              })) {
            this.cartArr = this.cartArr.filter((item) => {
              if (item.id != idProduct) {
                return true;
              }
            });

            console.log("оставшиеся товары", this.cartArr);
            localStorage.setItem('cart-products', JSON.stringify(this.cartArr));
            e.target.closest(".product-wrapper").remove();
          }
        } else {
          //console.log("no");
        }
      }
      //console.log(arrProduct);
    });
  }
}

window.CheckoutProductList = CheckoutProductList;
