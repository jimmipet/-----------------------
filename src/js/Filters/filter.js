
import { editCards } from "../buttons/editCards.js";
import { getResponce } from "../api/fetchAPI.js";
import { clearResult } from "../markupHelpers/clearResult.js";

export async function filterCategory(categoryItem) {
	const content = await getResponce();
	clearResult();
	const result = document.querySelectorAll(".cards-box");
	for (let key in content) {
		let category = content[key].category;
		category = category.replace(/[' ]/g, '-');
		const itemId = `${category}-${key}`;
		if (category == categoryItem) {
			for (let i = 0; i < result.length; i++) {
				result[i].innerHTML += `<div id="${itemId}" class="cards-box__item">
			<i class="fa-solid fa-pen-to-square cards-box__icons"></i>
			<img class="cards-box__img"  src="${content[key].image}" alt="">
			<hr class="cards-box__hr">
			<div class="cards-box__about">
				<p class="cards-box__name">${content[key].title}</p>
				<p class="cards-box__price"><span>${content[key].price}</span>&#36</p>
			</div>
		</div>`
			}
			editCards();
		}
	}

}

