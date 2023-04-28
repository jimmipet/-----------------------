//кнопка редактирования карточки 
export function editCards(){
	const elements = document.querySelectorAll(".cards-box__item i");
	const edit = document.querySelector('.edit');
	const back = document.querySelector('.edit-btn__back');
	elements.forEach(function(element) {
	element.addEventListener("click", function() {
		edit.style.display = 'block';
	});
	back.addEventListener('click', ()=>{
		edit.style.display = 'none';
	});
});
}
