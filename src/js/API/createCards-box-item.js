
import {editCards} from '../Buttons/EditCards.js';
import { addFullContent } from "../function/AddFullContent.js";
export  async function createCardsItem(){
	addFullContent();
	editCards();
}
createCardsItem();