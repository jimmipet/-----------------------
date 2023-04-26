
 export async function getResponce(){
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const  data = await response.json();
		const content = data;
		return content;
	} catch (error) {
		console.log(error)
	}
}
