import { addBasketContent } from "../markupHelpers/addBasketContent.js";
import { buttonBasketItem } from "./buttonBasketItem.js";

// кнопка выбора товара и добавление его в корзину 
export function buttonSelectProduct(){
	const arrayBasketInfo =[] //массив данных ля передачи
	const basketContent =[] //массив данных для проверки на уже добавленные элменты в корзину
	let countClick = 0;
	const productImg = document.querySelector('.img-product');
	const productName = document.querySelector('.products-nav__title');
	const productPrice = document.querySelector('.product-item__price');
	const productCount = document.querySelector('.product-item__input')
	const select = document.querySelector('.product-item__btn-select');
	select.addEventListener('click',() => {
		countClick++;
		if (productCount.value !==''){
			const BasketInfo ={
				name:productName.textContent,
				img:productImg.src,
				price:productPrice.textContent,
				count:productCount.value
			}
			arrayBasketInfo.push(BasketInfo)
			addBasketContent(arrayBasketInfo,countClick,basketContent)
			buttonBasketItem(basketContent);
			basketContent.push(arrayBasketInfo[0].name,arrayBasketInfo[0].count,arrayBasketInfo[0].price);
			arrayBasketInfo.pop()
		}
		else alert("Введите количество товара")
		
	})
}
buttonSelectProduct();