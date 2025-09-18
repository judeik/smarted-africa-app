// src/context/AuthProvider.tsx
import { ReactNode, useEffect, useState } from "react";
import { AuthContext, AuthContextType, User } from "./auth-context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    const s = localStorage.getItem("authUser");
    return s ? (JSON.parse(s) as User) : null;
  });

  useEffect(() => {
    // rehydrate if needed (safe-guard)
    if (!user) {
      const stored = localStorage.getItem("authUser");
      if (stored) {
        try {
          setUser(JSON.parse(stored));
        } catch {
          localStorage.removeItem("authUser");
        }
      }
    }
  }, [user]);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
