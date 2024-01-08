// profileStore.js
import { create } from "zustand";
import axios from "axios";

const profileStore = create((set) => ({
  data: {},
  isLoading: false,
  isError: false,

  fetchData: async () => {
    set({ isLoading: true });
    try {
      // Fetch data with the existing token
      const response = await axios.get("http://localhost:3000/me/");
      set({ data: response.data.products, isLoading: false, isError: false });
    } catch (error) {
      // If token expired, attempt to refresh the token
      if (error.response && error.response.status === 401) {
        console.log("Token expired. Refreshing token...");

        try {
          // Replace 'YOUR_REFRESH_TOKEN_ENDPOINT' with your actual refresh token endpoint
          const refreshResponse = await axios.post(
            "YOUR_REFRESH_TOKEN_ENDPOINT",
            {
              // Include any necessary data for refreshing the token, like the refresh token itself
              refresh_token: "your_refresh_token_here",
            }
          );

          // Update the token in your authentication store with the new token
          // Assuming you have an authStore with a setToken action
          authStore.setState({ token: refreshResponse.data.access_token });

          // Retry fetching the data with the new token
          const retryResponse = await axios.get("http://localhost:3000/me/");
          set({
            data: retryResponse.data.products,
            isLoading: false,
            isError: false,
          });
        } catch (refreshError) {
          set({ isLoading: false, isError: true });
          console.error("Error refreshing token:", refreshError);
        }
      } else {
        set({ isLoading: false, isError: true });
        console.error("Error fetching data:", error);
      }
    }
  },
}));

export default profileStore;
