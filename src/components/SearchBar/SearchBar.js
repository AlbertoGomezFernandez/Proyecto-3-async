import "./SearchBar.css";

export const SearchBar = ({ parentNode, text = "🔍Search", bgColor = "white", textColor = "#2d2d2d" }) => {
  const SearchBar = document.createElement("input");
  SearchBar.classList.add("searchBar");
  SearchBar.type = "search";
  SearchBar.placeholder = text;
  SearchBar.style.backgroundColor = bgColor;
  SearchBar.style.webkitTextFillColor = textColor;
  parentNode.appendChild(SearchBar);
};