import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Children,
} from 'react';

interface User {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({Children}: {Children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {Children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
