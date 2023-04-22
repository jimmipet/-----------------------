// начислить баланс кнопка
//открыть 
const openCredit = document.querySelector('.btn-credit');
	openCredit.addEventListener('click',()=>{
	document.querySelector('.format').style.display = 'block';
});
//закрыть
const closeCredit = document.querySelector('.format-btn__back');
	closeCredit.addEventListener('click',()=>{
	document.querySelector('.format').style.display = 'none';
});

//начислить баланс
 const add = document.querySelector('.format-btn__add');
	add.addEventListener('click',()=>{
		console.log("начислил")
		let balance = document.querySelector('.balance-value');
		let valueBalance = Number(balance.textContent);
		let valueInput = Number (document.querySelector('.format-input').value);
		let sum = valueBalance + valueInput;
		balance.textContent = sum;
});



//кнопка все товары
let intervalId;

const goods = document.querySelector('.btn-dropdown')
	goods.addEventListener('click',()=>{
	const menu =  event.target.dataset.path;
	console.log(menu)
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

 const styleDropdown = document.querySelector('.btn-dropdown');
	styleDropdown.addEventListener('click',()=>{
		styleDropdown.classList.toggle('dropdown-active');	
});