// cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: async (product) => {
    const cartItem = set((state) =>
      state.cart.find((item) => item._id === product._id)
    );

    if (cartItem) {
      if (cartItem.qty >= 1) {
        set((state) => increaseAmount(state.cart.indexOf(cartItem)));
      }
    } else {
      const userId = localStorage.getItem("userId");
      const newItem = { ...product, qty: 1, userId };

      try {
        const response = await axios.post("http://localhost:3000/cart", {
          name: newItem.name,
          qty: newItem.qty,
          price: newItem.price,
          description: newItem.description,
          user: newItem.userId,
          image: newItem.image,
          product: newItem._id,
        });

        if (response.status === 201) {
          set((state) => ({ cart: [...state.cart, newItem] }));
        } else {
          console.error("Error adding to cart:", response.data);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  },
  increaseAmount: async (cartId, qty) => {
    const userId = localStorage.getItem("userId");

    try {
      const response = await axios.put(
        `http://localhost:3000/cart/${userId}/${cartId}`,
        {
          qty: qty,
        }
      );

      if (response.status === 200) {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item._id === cartId ? { ...item, qty: item.qty + qty } : item
          );
          return { cart: updatedCart };
        });
      } else {
        console.error("Error increasing quantity:", response.data);
      }
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  },
}));

export default useCartStore;
