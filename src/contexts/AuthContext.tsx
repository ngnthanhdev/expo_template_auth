import { useRouter } from "expo-router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authService, User } from "../services/auth/authService";
import ZustandSession from "../services/zustand/session";

// ✅ Define authentication context type
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | undefined;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

// ✅ Create authentication context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const authState = authService.isAuthenticated();
        const currentUser = authService.getCurrentUser();
        
        setIsAuthenticated(authState);
        setUser(currentUser);
        
        // Subscribe to zustand changes
        const unsubscribe = ZustandSession.subscribe(
          (state) => ({ isAuthenticated: state.isAuthenticated, user: state.user }),
          (newState) => {
            setIsAuthenticated(newState.isAuthenticated ?? false);
            setUser(newState.user);
          }
        );

        setIsLoading(false);
        return unsubscribe;
      } catch (error) {
        console.error('Error initializing auth:', error);
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // ✅ Login function (Redirect to Main)
  const login = async (username: string, password: string) => {
    try {
      const result = await authService.login({ username, password });
      
      if (result.success) {
        setIsAuthenticated(true);
        setUser(result.user);
        // ✅ Redirect to main app
        router.replace("/main/(tabs)");
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  // ✅ Logout function (Redirect to Auth Screen)
  const logout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setUser(undefined);
      // ✅ Redirect to auth screen
      router.replace("/auth");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        isLoading, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};