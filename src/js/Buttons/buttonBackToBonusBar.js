
// Вернуться в бонус бар кнопка
export function buttonBackToBonusBar(product,arrayInfo,section){

	const back = product.querySelector('.product-item__btn-back');
		back.addEventListener('click', () =>{
		arrayInfo.pop() //обнуляем массив с обьектом родительской карточки товара по которой мы кликали ранее
		product.style.display = "none";
		section.style.display="flex";
	})
}