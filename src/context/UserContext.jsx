import { createContext, useContext, useState } from "react";

const UserContext = createContext()
export const useUser = () => useContext(UserContext)


export function UserProvider({ children }) {
const [user, setUser] = useState({
username: 'Saurabh',
email: 'saurabh@example.com',
address: 'Noida, UP'
})
const updateUser =  (patch) => setUser((u) =>({...u, ...patch}))

return(
  <UserContext.Provider value={{ user, updateUser }}>
{children}
</UserContext.Provider>
)
}
