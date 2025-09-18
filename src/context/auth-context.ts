// src/context/auth-context.ts
import { createContext } from "react";

export type User = {
  name: string;
  role: "student" | "teacher" | "parent" | "admin";
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

// Export only the context + types (no components here)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
// AuthProvider component moved to AuthContext.tsx for clarity
