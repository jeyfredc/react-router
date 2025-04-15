import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Menu = () => {
  const auth = useAuth();

  const routes = [
    { path: "/", name: "Home", private: false },
    { path: "/blog", name: "Blog", private: false },
    { path: "/profile", name: "Profile", private: true },
    { path: "/login", name: "Login", private: false, publicOnly: true },
    { path: "/logout", name: "Logout", private: true },
    { path: "/blogList", name: "BlogList", private: true },
  ];
  return (
    <nav>
      <ul>
        {routes.map((route) => {
            if (route.private && !auth.user) return null;
            if(route.publicOnly && auth.user) return null;
          return (
            <li key={route.path}>
              <NavLink
                to={route.path}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "blue",
                  };
                }}
              >
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
