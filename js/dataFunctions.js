export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2,}/gi; // Don't want 2 spaces in search term
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};
