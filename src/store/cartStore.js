// cartStore.js
import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: async (product) => {
    // Update the local state
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    }));

    // Get the token from local storage
    const token = localStorage.getItem("token"); // Replace 'your_token_key' with your actual token key

    // Make a POST request to update the server
    try {
      const response = await axios.post(
        "http://localhost:3000/carts/",
        product,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Axios automatically throws an error for non-2xx responses
      // No need to check response.ok

      // Handle the server response if needed
      const data = response.data;
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  },
}));

export default useCartStore;
