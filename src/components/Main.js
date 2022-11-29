import React from 'react';

function Main() {
    return (
      <div className="card-wrapper">
        <div className="product-card">
              <div class="product-image">
                <img src="./public/assets/images/img1.jpg" alt="img" />
              </div>
              <div class="product-name">
              Foxxx Kitsune Mini Black Vintage RCA
              </div>
              <div class="product-price">
                6000 ₽
              </div>
              <div class="product-action-block">
                <div class="to-cart-button">
                  <span>Добавить в корзину</span>
                </div>
                <div class="favourite-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>                  
                </div>
              </div>
        </div>
      </div>
    );
  }
  
  export default Main;