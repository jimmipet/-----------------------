
import { editCards } from '../buttons/editCards.js';
import { addFullContent } from './addFullContent.js';
export async function createCardsItem() {
	addFullContent();
	editCards();
}
createCardsItem();