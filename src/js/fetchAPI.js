
 export async function getResponce(){
	const response = await fetch('https://fakestoreapi.com/products');
	const  data = await response.json();
	const content = data;
	return content;
}
