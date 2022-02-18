import React, { createContext, useState } from 'react';

export const userContext = createContext();

export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
