import { create } from "zustand";

const loginStore = create((set) => ({
  fullName: "",
  email: "", // Add email to the state
  password: "",
  isLoggedIn: false,
  setField: (field, value) => set({ [field]: value }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),

  saveUserData: (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  },

  // Function to retrieve user data from localStorage
  loadUserData: () => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  },

  // Function to clear user data from localStorage
  clearUserData: () => {
    localStorage.removeItem("userData");
  },
}));

export default loginStore;
