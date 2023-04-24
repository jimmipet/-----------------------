// начислить баланс кнопка
//открыть 
export const openCredit = document.querySelector('.btn-credit');
	openCredit.addEventListener('click',()=>{
	document.querySelector('.format').style.display = 'block';
});
//закрыть
 export const closeCredit = document.querySelector('.format-btn__back');
	closeCredit.addEventListener('click',()=>{
	document.querySelector('.format').style.display = 'none';
});

//начислить баланс
 export const add = document.querySelector('.format-btn__add');
	add.addEventListener('click',()=>{
		let balance = document.querySelector('.balance-value');
		let valueBalance = Number(balance.textContent);
		let valueInput = Number (document.querySelector('.format-input').value);
		let sum = valueBalance + valueInput;
		balance.textContent = sum;
});