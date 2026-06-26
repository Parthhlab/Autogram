import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = localStorage.getItem('autogram_user');
      if (userInfo) {
        const parsed = JSON.parse(userInfo);
        setUser(parsed);
        try {
          const res = await fetch('http://localhost:5000/api/auth/me', {
            headers: { 'Authorization': `Bearer ${parsed.token}` }
          });
          if (res.ok) {
            const data = await res.json();
            const updatedUser = { ...data, token: parsed.token };
            localStorage.setItem('autogram_user', JSON.stringify(updatedUser));
            setUser(updatedUser);
          }
        } catch (err) {
          console.error('Failed to verify session');
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || 'Login failed');
      
      localStorage.setItem('autogram_user', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      
      localStorage.setItem('autogram_user', JSON.stringify(data));
      setUser(data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('autogram_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
