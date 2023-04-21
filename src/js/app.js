  async function getReponce(){
	let response = await fetch('https://fakestoreapi.com/products');
	let  data = await response.json();
	let content = data;

	let result=document.querySelector(".cards-box")
	for(let key in content){
		result.innerHTML+=`<div class="cards-box__item">
		<img  src="${content[key].image}" alt="">
		<div class="cards-box__about">
			<h2 class="cards-box__name">${content[key].title}</h2>
			<p class="cards-box__price"><span>${content[key].price}</span>&#36</p>
		</div>
	</div>`
	}
}

getReponce();

