import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 10000);
  });
}
export function UserProvider({ children }) {
  const [user, setUser] = useState({ id: "Loading...", name: "Loading..." });
  useEffect(() => {
    fetchUser().then((data) => setUser(data));
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
