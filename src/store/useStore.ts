// src/store/useStore.ts
// 🔹 Global store using Zustand with strict TypeScript typing

import { create } from "zustand";

// Define your store state shape
type State = {
  user: string | null; // you can replace `string` with a proper User type later
  mobileMenuOpen: boolean;
  setUser: (u: string | null) => void;
  setMobileMenuOpen: (open: boolean) => void;
};

// Create the store with strong typing
const useStore = create<State>((set) => ({
  user: null,
  mobileMenuOpen: false,
  setUser: (u) => set({ user: u }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));

export default useStore;
