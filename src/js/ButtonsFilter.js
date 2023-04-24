import {filterItems} from './filter.js'

export let hiddenElements=[];

export const menClothing = document.querySelector('.mens-clothing');
	menClothing.addEventListener('click', () => {
		filterItems('men-s-clothing', hiddenElements);
});

export const jewelery = document.querySelector('.jewellery');
	jewelery.addEventListener('click', () => {
		filterItems('jewelery', hiddenElements);
});

export const electric = document.querySelector('.electronics');
	electric.addEventListener('click', () => {
		filterItems('electronics', hiddenElements);
});

export const womenClothing = document.querySelector('.womens-clothing');
	womenClothing.addEventListener('click', () => {
		filterItems('women-s-clothing', hiddenElements);
});