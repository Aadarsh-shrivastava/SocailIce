import React, {createContext, useState, useContext, ReactNode} from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => {
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
