
export function addBalanceButtonHandler() {
	const format = document.querySelector('.format');
	const close = document.querySelector('.format-btn__back');
	const add = document.querySelector('.format-btn__add');
	const balance = document.querySelector('.balance-value');
  
	// Открыть форму начисления баланса
	const credit = document.querySelector('.btn-credit');
	credit.addEventListener('click', () => {
		format.style.display = 'block';
	});
  
	// Закрыть форму начисления баланса
	close.addEventListener('click', () => {
		format.style.display = 'none';
	});
  
	// Начислить баланс
	add.addEventListener('click', () => {
	  const valueBalance = Number(balance.textContent);
	  const valueInput = Number(document.querySelector('.format-input').value);
	  const sum = valueBalance + valueInput;
	  balance.textContent = sum;
  
	  format.style.display = 'none';
	});
}
addBalanceButtonHandler();