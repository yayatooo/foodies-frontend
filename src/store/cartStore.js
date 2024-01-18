// useCartStore.js
import { create } from "zustand";
import axios from "axios";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: async (product, _id) => {
    try {
      const cartItem = set((state) =>
        state.cart.find((item) => item._id === _id)
      );

      if (cartItem) {
        if (cartItem.qty >= 1) {
          set((state) => state.increaseByQty(_id));
        }
      } else {
        const userId = localStorage.getItem("userId");
        const newItem = { ...product, qty: 1, userId };

        const response = await axios.post("http://localhost:3000/carts/", {
          name: newItem.name,
          qty: newItem.qty,
          price: newItem.price,
          user: newItem.userId,
          image: newItem.image,
          product: newItem._id,
        });

        if (response.status === 201) {
          set((state) => ({ cart: [...state.cart, newItem] }));
        } else {
          console.error("Error adding to cart:", response.data);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  },
  increaseByQty: async (_id, qty) => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:3000/carts/${userId}/${_id}/increase/${qty}`
      );

      if (response.status === 200) {
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === _id ? { ...item, qty: item.qty + 1 } : item
          ),
        }));
      } else {
        console.error("Error increasing qty:", response.data);
      }
    } catch (error) {
      console.error("Error increasing qty:", error);
    }
  },
}));

export { useCartStore };
