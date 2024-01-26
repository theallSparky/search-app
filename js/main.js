import {
  clearSearchText,
  setSearchFocus,
  showClearTextButton,
  clearPushListener,
} from "./searchBar.js";
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
  const search = document.getElementById("search");
  search.addEventListener("input", showClearTextButton);
  const clear = document.getElementById("clear");
  clear.addEventListener("click", clearSearchText);

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
