import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  role: 'user' | 'admin';
  trialEndsAt?: string;
  subscriptionStatus: 'active' | 'cancelled' | 'expired' | 'trial';
  createdAt: string;
  lastLoginAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('goldChickenUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check for admin credentials
    const isAdminLogin = (email === 'admin@goldchicken.com' && password === 'admin123') || 
                        (email === 'Charlie' && password === 'admin123');
    
    const mockUser: User = {
      id: isAdminLogin ? (email === 'Charlie' ? 'charlie-admin' : 'admin-1') : '1',
      email,
      name: isAdminLogin ? (email === 'Charlie' ? 'Charlie' : 'Admin User') : email.split('@')[0],
      plan: isAdminLogin ? 'enterprise' : 'professional',
      role: isAdminLogin ? 'admin' : 'user',
      subscriptionStatus: 'active',
      createdAt: '2024-01-01T00:00:00Z',
      lastLoginAt: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('goldChickenUser', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      plan: 'free',
      role: 'user',
      subscriptionStatus: 'trial',
      trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('goldChickenUser', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('goldChickenUser');
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('goldChickenUser', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}