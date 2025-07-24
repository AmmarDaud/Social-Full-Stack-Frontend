import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 flex space-x-4 text-white">
      <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
      <NavLink to="/register" className="hover:text-yellow-400">Register</NavLink>
      <NavLink to="/signin" className="hover:text-yellow-400">Sign In</NavLink>
      <NavLink to="/feed" className="hover:text-yellow-400">Feed</NavLink>
    </nav>
  );
}
export default NavBar;