import { useState } from "react";
import NameContext from "../context/NameContext";

export const Wrapper = ({ children }) => {

    const [name, setName] = useState('Unknown');

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};
