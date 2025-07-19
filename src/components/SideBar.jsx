import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="sidebar">
      <ul className="pages">
        <li className="title">FoodFinder</li>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="link">
            Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
