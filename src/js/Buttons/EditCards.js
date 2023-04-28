//кнопка редактирования карточки 

import { getInfoaboutCards } from "../markupHelpers/getInfoaboutcards.js";
const arrayInfo=[]
export function editCards(){
	const elements = document.querySelectorAll(".cards-box__item i");
	const section = document.querySelector('.section-rigth')
	const product = document.querySelector('.section-product')
	elements.forEach(function(element) {
		element.addEventListener("click", (event) =>{
		const parent = event.target.parentNode;
		const name = parent.querySelector('.cards-box__name').textContent;
		const img = parent.querySelector('.cards-box__img').src;
		const price = parent.querySelector('.cards-box__price').textContent;
		const  elementInfo ={
			name: name,
			img: img,
			price: price
		};
		arrayInfo.push(elementInfo);

		section.style.display="none";
		product.style.display = "flex";

		// Првоерка!!!
		const imgProduct = product.querySelector('.img-product');
		imgProduct.src = elementInfo.img;
		const nameProduct = product.querySelector('.products-nav__title');
		nameProduct.textContent = elementInfo.name;
		const priceProduct = product.querySelector('.product-item__price');
		priceProduct.textContent = elementInfo.price;

		// нажал на кнопку вернуться в бонус-бар
		const back = product.querySelector('.product-item__btn-back');
		 back.addEventListener('click', () =>{
			product.style.display = "none";
			section.style.display="flex";
		 })
		



	});
});
getInfoaboutCards(arrayInfo)
}
