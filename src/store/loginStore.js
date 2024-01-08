import { create } from "zustand";

const loginStore = create((set) => ({
  email: "", // Add email to the state
  password: "",
  isLoggedIn: false,
  setField: (field, value) => set({ [field]: value }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default loginStore;
