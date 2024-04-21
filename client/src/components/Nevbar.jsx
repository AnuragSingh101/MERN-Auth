import { Link } from "react-router-dom"
import 'E:/MERN-PROJECTS/Blood/client/src/index.css'
export default function Nevbar() {
  return (
    <nav className="navBar">
      <Link to="/">|Home</Link>
      <Link to="/register">|--|Register</Link>
      <Link to="/login">|--|Login</Link>
      <Link to="/inventory">|--|Blood-Inventory|</Link>

    </nav>
  )
}
