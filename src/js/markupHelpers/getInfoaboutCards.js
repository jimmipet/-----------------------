
export function getInfoAboutCards(arrayInfo,product){

	// полученные данные из editCards заполняем в элементы секции
	const imgProduct = product.querySelector('.img-product');
	imgProduct.src = arrayInfo[0].img;
	const nameProduct = product.querySelector('.products-nav__title');
	nameProduct.textContent = arrayInfo[0].name;
	const priceProduct = product.querySelector('.product-item__price');
	priceProduct.textContent = arrayInfo[0].price;
	
}
