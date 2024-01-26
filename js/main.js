import { setSearchFocus, showClearTextButton } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";
import {
  deleteSearchResults,
  clearStatsLine,
  buildSearchResults,
  setStatsLine,
} from "./searchResults.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // TODO: 2 listeners clear text
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (event) => {
  event.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
};

processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return; //Tells app to not call api if search term is blank
  const resultArray = await retrieveSearchResults(searchTerm);
  if (resultArray.length) {
    buildSearchResults(resultArray);
  }
  setStatsLine(resultArray.length);
};
