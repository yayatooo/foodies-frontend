import { create } from "zustand";

const loginStore = create((set) => ({
  fullName: "",
  email: "", // Add email to the state
  password: "",
  isLoggedIn: false,
  setField: (field, value) => set({ [field]: value }),
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),

  login: (token) => {
    set({ isLoggedIn: true, token }); // Update the token when the user logs in
  },

  logout: () => set({ isLoggedIn: false, token: null }),
}));

export default loginStore;

// import create from 'zustand';

// const useAuthStore = create((set) => ({
//   user: null,

//   login: (userData) => set({ user: userData }),

//   logout: () => set({ user: null }),

//   initialize: () => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       set({ user: storedUser });
//     }
//   },
// }));

// export default useAuthStore;
