import { Link, useNavigate } from "react-router-dom";

export default function RecipeCard({ data }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipes/${data.idMeal}`);
  }

  return (
    <div className="recipe-card" onClick={handleClick}>
      <h4>{data.strMeal}</h4>
      <p className="description">{data.strInstructions}</p>
      <img src={data.strMealThumb} className="image"></img>
    </div>
  );
}
