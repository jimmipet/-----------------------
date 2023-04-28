import { editCards } from '../buttons/editCards.js';
import { filterCategory } from '../filters/filter.js';

export async function createCardsItem() {
	await filterCategory("all")
	editCards();
}
createCardsItem();