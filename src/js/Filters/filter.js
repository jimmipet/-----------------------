import { getResponse } from "../api/fetchAPI.js";
import { clearResult } from "../markupHelpers/clearResult.js";
import { addFullContent } from "../markupHelpers/addFullContent.js";

export async function filterCategory(categoryItem) {
	const content = await getResponse();
	clearResult();
	const result = document.querySelector(".cards-box")
	addFullContent(content,categoryItem,result);
}

