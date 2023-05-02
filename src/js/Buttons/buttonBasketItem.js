

export function buttonBasketItem(basketContent){
	const basket = document.querySelectorAll('.basket-box__item i ');
	const list = document.querySelector('.basket-box__list');
	basket.forEach(element => {
		element.addEventListener('click',(event) => {
			const item = event.target.parentNode.parentNode.parentNode;
			console.log(item)
			list.removeChild(item);
			basketContent.pop(); 
			newContent = basketContent;
			console.log(basketContent);
		});
		
	});
}
