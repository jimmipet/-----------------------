
import { createCardsItem } from '../API/createCards-box-item.js';

export  async function resetFilters(){
	const result = document.querySelectorAll(".cards-box");
	for (let i = 0; i < result.length; i++) {
		result[i].innerHTML = '';
	}
	createCardsItem();
}