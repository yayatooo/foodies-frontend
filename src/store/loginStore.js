import { create } from "zustand";

const loginStore = create((set) => ({
  user: null,

  login: (userData) => set({ user: userData }),

  logout: () => set({ user: null }),

  initialize: () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      set({ user: storedUser });
    }
  },
}));

export default loginStore;
