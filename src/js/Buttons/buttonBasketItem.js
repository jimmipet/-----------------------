import { addBasketContent } from "../markupHelpers/addBasketContent.js";

export function buttonBasketItem(basketContent){
    const basket = document.querySelectorAll('.basket-box__item i ');
    const list = document.querySelector('.basket-box__list');
    let flag = false;
    basket.forEach(element => {
        element.addEventListener('click',(event) => {
            const item = event.target.parentNode.parentNode.parentNode;
            console.log(item)
            list.removeChild(item);
            console.log(typeof basketContent);
            for( const key of Object.keys(basketContent)){
                delete basketContent[key];
            }
            console.log(basketContent);
            flag = true;
            addBasketContent(flag ? basketContent : [...basketContent]);
        });
    });
}
buttonBasketItem();
