import RecipeCard from "../components/RecipeCard";

export default function RecipePage({ recipes }) {
  if (recipes.length === 0) return <p>No recipes found</p>;

  return (
    <>
      <h1>Explore Recipes!</h1>
      <div className="recipe-grid">
        {recipes.map((meal) => (
          <RecipeCard key={meal.idMeal} data={meal} />
        ))}
      </div>
    </>
  );
}
