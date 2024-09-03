import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ books, setBooks, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};
