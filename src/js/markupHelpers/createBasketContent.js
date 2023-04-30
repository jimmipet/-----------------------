export function createBasketContent(arrayBasketInfo){
const basket = document.querySelector('.basket-box__list')
	basket.innerHTML+=`	<div class="basket-box__item">
	<div class="item-about">
		<p class="item-about__name">${arrayBasketInfo[0].name}</p>
		<p class="item-about__price"><span class="item-about__count">${parseInt(arrayBasketInfo[0].count)}</span> шт x <span class ="item-about__price">${arrayBasketInfo[0].price}</span><i class="fa-solid fa-trash item-about-icon"></i></p>
	</div>
	<div class="item-img">
		<img src="${arrayBasketInfo[0].img}" alt="" class="item-foto">
	</div>
	</div>`;
}