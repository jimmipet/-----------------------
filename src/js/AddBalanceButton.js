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
		const balance = document.querySelector('.balance-value');
		const valueBalance = Number(balance.textContent);
		const valueInput = Number (document.querySelector('.format-input').value);
		const sum = valueBalance + valueInput;
		balance.textContent = sum;
});