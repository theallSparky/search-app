import { setSearchFocus } from "./searchBar.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  setSearchFocus();

  // 3 listeners clear text

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};

const submitTheSearch = (event) => {
  event.preventDefault();
  // Delete search results
  processTheSearch();
  setSearchFocus();
};

processTheSearch = async () => {
  // clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return; //Tells app to not call api if search term is blank
  const resultArray = await retrieveSearchResults(searchTerm);
};
