

export const filterItems = (category, hiddenElements)=>{
	const elementsToHide = document.querySelectorAll('[id]');

	hiddenElements.forEach(element => {
		element.style.display ='block';	
	});

	for (let i=0; i<elementsToHide.length; i++) {
		const element = elementsToHide[i];
		if(!element.id.startsWith(`${category}-`)){
			element.style.display = 'none';
			hiddenElements.push(element);
		}
	}
};