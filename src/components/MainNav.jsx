import { Link } from "react-router";

// rfce
function MainNav() {
  return (
    <nav
      className="flex justify-between 
  h-8 bg-green-200 px-4 items-center"
    >
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/recap">Recap</Link>
        <Link to="/recap_state">Recap_useState</Link>
        <Link to="/zustand">zustand</Link> */}
        <Link to="/product">Product</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
export default MainNav;
