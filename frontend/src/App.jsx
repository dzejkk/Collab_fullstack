// src/App.jsx
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HomePage from "./pages/HomePage";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AddNewOffering from "./pages/AddNewOffering";
import Favorites from "./pages/Favorites";

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/" replace />;
};

// Redirect if already logged in
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Navigate to="/" replace /> : children;
};

export default function App() {
  return (
    <Routes>
      {/* Main layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add-item"
          element={
            <ProtectedRoute>
              <AddNewOffering />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* without any layout */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
