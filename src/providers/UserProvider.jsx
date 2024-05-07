import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("roles");
        setUser(null);
    };

    const updateUser = (newUser) => {
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
    };
    
    return (
        <UserContext.Provider value={{ user, logout, updateUser }}>
        {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
