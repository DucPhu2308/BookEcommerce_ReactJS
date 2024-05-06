import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser({});
    };
    
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
        {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
