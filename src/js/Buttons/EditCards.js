//кнопка редактирования карточки 
import { getInfoAboutCards } from "../markupHelpers/getInfoaboutcards.js";
import { buttonBackToBonusBar } from "./buttonBackToBonusBar.js";

export  function editCards(){
	const arrayInfo = []
	// получаем необходимые селекторы
	const elements = document.querySelectorAll(".cards-box__item i");
	const section = document.querySelector('.section-rigth')
	const product = document.querySelector('.section-product')
	elements.forEach(function(element) {
		element.addEventListener("click", (event) =>{
		// получаем родительский контент
		const parent = event.target.parentNode;
		const name = parent.querySelector('.cards-box__name').textContent;
		const img = parent.querySelector('.cards-box__img').src;
		const price = parent.querySelector('.cards-box__price').textContent;
		// создаем обьект с родительским контентом
		const  elementInfo ={
			name: name,
			img: img,
			price: price
		};
		// передаем обьект в массив
		arrayInfo.push(elementInfo)
		// скрытие открытие секций
		section.style.display="none";
		product.style.display = "flex";
		// если массив не пуст то передаем его в функции
		if(arrayInfo.length > 0){
			getInfoAboutCards(arrayInfo,product)
			buttonBackToBonusBar(product,arrayInfo,section)
		}
	});
});
}
