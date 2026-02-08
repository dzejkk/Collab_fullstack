// import axios from "axios"; for now we dont need axios
// we will use it later when we make real api calls to backend

import { users, marketItems, categories, token } from "./mockData";

// simulate network delay
const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // get all items
  getAllItems: async () => {
    await delay();
    return { data: marketItems };
  },

  getItemById: async (id) => {
    await delay();
    const item = marketItems.find((item) => item.id === parseInt(id));
    return { data: item };
  },

  getCategories: async () => {
    await delay();
    return { data: categories };
  },

  // LOGIN
  login: async (email, password) => {
    await delay();

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    //store user.id in local storage
    if (!user) {
      throw new Error("Invalid credentials");
    }

    localStorage.setItem("userId", user.id);

    return {
      data: {
        token: token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
    };
  },

  // register

  register: async (userData) => {
    await delay();

    const newUser = {
      id: users.length + 1,
      ...userData,
    };

    return {
      data: {
        token: token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
      },
    };
  },

  // get current user (for protected route)

  getCurrentUser: async () => {
    await delay();

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token) {
      throw new Error("Not authenticated");
    }

    const user = users.find((user) => user.id === parseInt(userId));

    return {
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  },
};
