import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

import { AuthProvider, useAuth } from "./context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

const App = () => (
  <div className="bg-[#001327] text-white min-h-screen">
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
    <ToastContainer theme="dark" />
  </div>
);

export default App;
