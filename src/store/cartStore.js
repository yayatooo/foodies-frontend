import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product === product._id
      );

      if (existingItem) {
        existingItem.qty += 1;
        return { cart: [...state.cart] };
      } else {
        return { cart: [...state.cart, { product: product._id, qty: 1 }] };
      }
    });
  },
}));

export default useCartStore;

// const addToCart = async (product, _id) => {
//   const cartItem = cart.find((item) => item._id === _id);

//   if (cartItem) {
//     if (cartItem.qty >= 1) {
//       increaseByQty(_id);
//     }
//   } else {
//     const userId = localStorage.getItem('userId');
//     const newItem = { ...product, qty: 1, userId };

//     try {
//       const response = await axios.post('http://localhost:3000/carts', {
//         name: newItem.name,
//         qty: newItem.qty,
//         price: newItem.price,
//         description: newItem.description,
//         user: newItem.userId,
//         image: newItem.image,
//         product: newItem._id,
//       });

//       if (response.status === 201) {
//         setCart((prevCart) => [...prevCart, newItem]);
//       } else {
//         console.error('Error adding to cart:', response.data);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   }
// };
