import { getResponce } from "../API/fetchAPI.js";
export  async function addFullContent(){
	const content = await getResponce();
	const result = document.querySelector(".cards-box")
	for(let key in content){
		let category = content[key].category;
		category = category.replace(/[' ]/g, '-');
		const itemId = `${category}-${key}`;
		result.innerHTML+=`<div id="${itemId}" class="cards-box__item">
		<i class="fa-solid fa-pen-to-square cards-box__icons"></i>
		<img class="cards-box__img"  src="${content[key].image}" alt="">
		<hr class="cards-box__hr">
		<div class="cards-box__about">
			<p class="cards-box__name">${content[key].title}</p>
			<p class="cards-box__price"><span>${content[key].price}</span>&#36</p>
		</div>
	</div>`
	}
}