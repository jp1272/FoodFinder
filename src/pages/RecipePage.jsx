import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchMeal = async () => {
      const promises = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const results = await promises.json();
      console.log(results.meals[0]);
      setData(results.meals[0]);
    };

    fetchMeal();
  }, []);

  return (
    <div>
      <h4>{data.strMeal}</h4>
      <p className="description">{data.strInstructions}</p>
      <img src={data.strMealThumb} className="image"></img>
    </div>
  );
}
