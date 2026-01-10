// import axios from "axios"; for now we dont need axios
// we will use it later when we make real api calls to backend

import { Users, marketItems, Token } from "./mockData";

// simulate network delay

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));

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
};
