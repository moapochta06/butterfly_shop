let shoppingCart = document.querySelector('.shopping-cart');
let shoppingCartBox = document.querySelector('.shopping-cart-box');
let closeShoppingCart = document.querySelector('.close');


shoppingCart.addEventListener('click',function () {
       shoppingCartBox.classList.toggle('shopping-cart-box--active');
    })

closeShoppingCart.addEventListener('click',function () {
    shoppingCartBox.classList.remove('shopping-cart-box--active');
 })
  




// div внутри корзины с товарами 
    const cartWrapper = document.querySelector('.shopping-cart-box');

// Отследиваем клик на сранице
    window.addEventListener('click', function(event){

    // Проверяем что клик был совершён по кнопке добавить в корзину
    if(event.target.hasAttribute('data-cart')){

    // находим карточку с товаром, внутри которой был совершён клик
    const card = event.target.closest('.butterfly-item')
    

    const prodactInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.butterfly-img').getAttribute('src'),
        title: card.querySelector('.butterfly-item-title').innerText,
        price: card.querySelector('.butterfly-price').innerText,
        counter: card.querySelector('[data-counter]').innerText
        
    };

   
   
    //  Проверить есть ли уже такой товар в корзине
    const itemInCart = cartWrapper.querySelector(`[data-id="${prodactInfo.id}"]`);
    
    
    if (itemInCart){
        // Если товар есть в корзине
    const counterElement = itemInCart.querySelector('[data-counter]');
    counterElement.innerText = parseInt(counterElement.innerText) + parseInt(prodactInfo.counter);
    } 
    else{
        // Если товара нет в корзине

         // Собранные данные подставим в шаблон для товара в корзине
    const cartItemHTML = `
            
            <li class="card butterfly-item" data-id="${prodactInfo.id}">
   <div class="butterfly-item-img"> <div class="butterfly-item-title">${prodactInfo.title}</div>
    
   <img  src="${prodactInfo.imgSrc}"}>
   </div>
    
    <div  class="counter-and-price">
    <div class="counter-wrapper">
    <div class="minus" data-action="minus" >–</div>
    <div class="number" data-counter  >${prodactInfo.counter}</div>
    <div class="plus" data-action="plus">+</div>
    </div>
     <div class="butterfly-price">${prodactInfo.price}</div>
    </div>
   
    </div>
    <li>
    `;
    // Отобразим товар в корзине
    cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);
     }


    //  Сбрасываем счётчик добавленного товара
     card.querySelector('[data-counter]').innerText = '1'

     //Отображение статуса корзины Пустая/Полная
     toggleCartStatus();
}


});