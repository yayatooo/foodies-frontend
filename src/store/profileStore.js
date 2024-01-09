// profileStore.js
import { create } from "zustand";
import axios from "axios";

const profileStore = create((set) => ({
  data: {},
  isLoading: false,
  isError: false,
}));

export default profileStore;
