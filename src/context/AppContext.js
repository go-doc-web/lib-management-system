import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        books,
        setBooks,
        isLoading,
        setIsLoading,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
