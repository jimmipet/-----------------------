
import { filterCategory } from "../Filters/filter.js";
//кнопка электроника
export const electric = document.querySelector('.electronics');
	electric.addEventListener('click', () => {
		filterCategory('electronics');
	});
//кнопка ювилерки
export const jewelery = document.querySelector('.jewellery');
	jewelery.addEventListener('click', () => {
		filterCategory('jewelery');
	});
//кнопка мужской одежды
export const menClothing = document.querySelector('.mens-clothing');
	menClothing.addEventListener('click', () => {
		filterCategory('men-s-clothing');
	});
//кнопка женской одежды
export const womenClothing = document.querySelector('.womens-clothing');
	womenClothing.addEventListener('click', () => {
		filterCategory('women-s-clothing',);
});
