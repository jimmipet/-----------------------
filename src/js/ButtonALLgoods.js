//кнопка все товары
export const goods = document.querySelector('.btn-dropdown')
goods.addEventListener('click',()=>{
let intervalId;
const menu =  event.target.dataset.path;
const list = document.querySelector('.btn-list');
if(!document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
	document.querySelector(`[data-target=${menu}]`).classList.add('list-active');
	intervalId = setTimeout(()=>{
		document.querySelector(`[data-target=${menu}]`).classList.add('open')
	},0);
}

if(document.querySelector(`[data-target=${menu}]`).classList.contains('open')){
	clearTimeout(intervalId);
	document.querySelector(`[data-target=${menu}]`).classList.remove('list-active');
	intervalId = setTimeout(()=>{
		document.querySelector(`[data-target=${menu}]`).classList.remove('open')
	},0);
}
});


//кнопка все товары
//стиль для этйо кнопки

export const styleDropdown = document.querySelector('.btn-dropdown');
styleDropdown.addEventListener('click',()=>{
	styleDropdown.classList.toggle('dropdown-active');
	let elementsToShow = document.querySelectorAll('[id]');
	elementsToShow.forEach((element)=>{
		element.style.display = 'block';
	});
});