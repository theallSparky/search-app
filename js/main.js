import { setSearchFocus } from "./searchBar";

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
  // process the search
  setSearchFocus();
};
