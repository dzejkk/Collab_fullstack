// src/pages/Dashboard.jsx
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function DashBoard() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <nav>
        <Link to="/products">Browse Products</Link>
        <Link to="/profile">My Profile</Link>
        <button onClick={logout}>Logout</button>
      </nav>
      <h1>Welcome, {user?.name}!✌</h1>
      <main></main>
    </div>
  );
}
