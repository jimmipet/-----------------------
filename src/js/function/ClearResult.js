
 export function clearResult(){
	const result = document.querySelectorAll(".cards-box");
	for (let i = 0; i < result.length; i++) {
		result[i].innerHTML = '';
	}
 }