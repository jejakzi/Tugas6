import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { account } from "../lib/account";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === account.email && password === account.password) {
      setUser({ ...account });

      toast.success("Login Berhasil!");
    } else {
      toast.error("Login Gagal!");
    }
  };

  const logout = () => {
    setUser(null);

    toast.success("Logout Berhasil!");

    navigate("/");
  };

  const addFavorite = (movie) => {
    if (!user) {
      return toast.error("Please login first!");
    }

    if (!favorites.find((fav) => fav.id === movie?.id)) {
      setFavorites((prev) => [...prev, movie]);

      toast.success(`${movie?.title} added to favorites!`);
    } else {
      toast.error(`${movie?.title} already in favorites!`);
    }
  };

  const removeFavorite = (movie) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== movie?.id));

    toast.error(`${movie?.title} removed from favorites!`);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, favorites, addFavorite, removeFavorite }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
