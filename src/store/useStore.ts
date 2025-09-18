/**
 * src/store/useStore.ts
 * Minimal Zustand store for user session & UI state.
 * - Keep store small and focused
 * - Persist selected safe state to localStorage if needed (beware PII)
 */

import create from "zustand";

type User = { id: string; name: string; role: string } | null;

type State = {
  user: User;
  setUser: (u: User) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const useStore = create<State>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
}));

export default useStore;
