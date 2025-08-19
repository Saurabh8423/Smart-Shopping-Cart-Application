import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {selectTotalItems} from "../redux/cartSlice";
import {useUser} from "../context/UserContext"


export default function Navbar(){
  const totalItems = useSelector(selectTotalItems)
  const {user}= useUser()
  return(
    <header className="navbar">
      <link to="/" className="brand">🛍️ SmartCart</link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <div className="user">Hello,<strong>{user.username}</strong></div>
    </header>
  )
}