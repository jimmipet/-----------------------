
import { createCardsItem } from '../API/createCards-box-item.js';
import { clearResult } from '../function/ClearResult.js';
export  async function resetFilters(){
	clearResult();
	createCardsItem();
}