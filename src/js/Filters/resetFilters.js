
import { createCardsItem } from '../markupHelpers/createCardsItem.js';
import { clearResult } from '../markupHelpers/clearResult.js';
export async function resetFilters() {
	clearResult();
	createCardsItem();
}