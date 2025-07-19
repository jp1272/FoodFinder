import RecipeCard from "../components/RecipeCard";

export default function Home({ featured }) {
  return (
    <>
      <h1>Welcome to FoodFinder.</h1>
      <p>
        At FoodFinder our goal is to make your meals easy! You have access to
        millions of recipes that are easy to search all with the goal of making
        your food choices quick and easy to make. Search, save, and add recipes
        at your convenience and let us know how we can help. Thank you for using
        FoodFinder!
      </p>
      <h2 className="main">Featured Recipes</h2>
      <div className="featured">
        {featured.map((meal) => (
          <RecipeCard key={meal.idMeal} data={meal} />
        ))}
      </div>
    </>
  );
}
