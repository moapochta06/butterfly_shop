function toggleCartStatus(){
    console.log('toggleCartStatus');
    const cartWrapper = document.querySelector('.butterfly-item');
    const cartEmpty = document.querySelector('[data-cart-empty]');

   if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add('none')
   }

}