
import { editCards } from '../buttons/editCards.js';
import { addFullContent } from '../markupHelpers/addFullContent.js';
export async function createCardsItem() {
	addFullContent();
	editCards();
}
createCardsItem();