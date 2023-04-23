let hiddenElements=[];
//мужская одежда
const menСlothing = document.querySelector('.mens-clothing');
menСlothing.addEventListener('click', () => {
	let elementsToHide = document.querySelectorAll('[id]');
	hiddenElements.forEach(element=>{
		element.style.display = 'block';
	});
	for (let i = 0; i < elementsToHide.length; i++) {
		const element = elementsToHide[i];
		if (!element.id.startsWith('men-s-clothing-')) {
		  element.style.display = 'none';
		  hiddenElements.push(element);
		}
	}
});

//ювелирка
const jewelery = document.querySelector('.jewellery');
jewelery.addEventListener('click', () => {
	let elementsToHide = document.querySelectorAll('[id]');
	hiddenElements.forEach(element=>{
		element.style.display = 'block';
	});
	for (let i = 0; i < elementsToHide.length; i++) {
		const element = elementsToHide[i];
		if (!element.id.startsWith('jewelery-')) {
		  element.style.display = 'none';
		  hiddenElements.push(element);
		}
	}
});

// электроника
const electric = document.querySelector('.electronics');
electric.addEventListener('click', () => {
	let elementsToHide = document.querySelectorAll('[id]');
	hiddenElements.forEach(element=>{
		element.style.display = 'block';
	});
	for (let i = 0; i < elementsToHide.length; i++) {
		const element = elementsToHide[i];
		if (!element.id.startsWith('electronics-')) {
		  element.style.display = 'none';
		  hiddenElements.push(element);
		}
	}
});

//женская одежда
const womenClothing = document.querySelector('.womens-clothing');
womenClothing.addEventListener('click', () => {
	let elementsToHide = document.querySelectorAll('[id]');
	hiddenElements.forEach(element=>{
		element.style.display = 'block';
	});
	for (let i = 0; i < elementsToHide.length; i++) {
		const element = elementsToHide[i];
		if (!element.id.startsWith('women-s-clothing-')) {
		  element.style.display = 'none';
		  hiddenElements.push(element);
		}
	}
});

