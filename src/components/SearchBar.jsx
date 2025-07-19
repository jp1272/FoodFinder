export default function SearchBar({ getRecipes }) {
  function handleSearch(e) {
    e.preventDefault();
    const itemName = e.target.querySelector(".search-input");
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName.value}`;
    getRecipes(API_URL);
  }

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleSearch}>
        <span className="material-symbols-rounded">search</span>
        <input className="search-input" placeholder="Enter a recipe"></input>
      </form>
    </div>
  );
}
