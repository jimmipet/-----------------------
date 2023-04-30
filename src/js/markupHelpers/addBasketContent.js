import { createBasketContent } from "./createBasketContent.js"

export function addBasketContent(arrayBasketInfo, countClick, basketContent){
  const basket = document.querySelector('.basket-box__list')
  
  // Если basketContent НЕ включает имя продукта и countClick > 0,
  // то вызываем функцию createBasketContent
  if(!basketContent.includes(arrayBasketInfo[0].name) && countClick > 0){
    createBasketContent(arrayBasketInfo)
  }
  
  if((countClick > 1) && (!basketContent.includes(arrayBasketInfo[0].name))){
    basket.style.height = "200px"
    
  }
  else if ((countClick > 1) && (basketContent.includes(arrayBasketInfo[0].name))){
    const names = document.querySelectorAll('.item-about__name');
      names.forEach(nameElement => {
          if (nameElement.textContent === arrayBasketInfo[0].name) {
              const itemAbout = nameElement.closest('.item-about');
              const newCount = itemAbout.querySelector('.item-about__count');
              newCount.textContent = parseInt(newCount.textContent) + parseInt(arrayBasketInfo[0].count);
              const newPrice = itemAbout.querySelector('.item-about__price').children[1];
              newPrice.textContent = (parseFloat(arrayBasketInfo[0].price)*parseInt(newCount.textContent)).toFixed(2) + '$';
  }
});
}
  if((countClick > 2)){
    basket.style.overflowY = "auto"
  }
}
