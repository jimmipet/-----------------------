async function getReponce(){
	let response = await fetch('https://fakestoreapi.com/products');
	let  data = await response.json();
	let content = data;

	let result=document.querySelector(".cards-box")
	for(let key in content){
		result.innerHTML+=`<div class="cards-box__item">
		<img  src="${content[key].image}" alt="">
		<div class="cards-box__about">
			<p class="cards-box__name">${content[key].title}</p>
			<p class="cards-box__price"><span>${content[key].price}</span>&#36</p>
		</div>
	</div>`
	}
}

getReponce();

async function getSd(){
	fetch('https://fakestoreapi.com/products/categories')
	.then(res => res.json())
	.then(categories => {
	  const promises = categories.map(category => {
		return fetch(`https://fakestoreapi.com/products/category/${category}`)
		  .then(res => res.json())
		  .then(products => ({ category, products }));
	  });
	  return Promise.all(promises);
	})
	.then(data => console.log(data));
  
}

getSd()