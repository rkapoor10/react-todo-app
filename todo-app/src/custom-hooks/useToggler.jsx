import { useState } from "react";

export const useToggler = () => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleIt = () => {
        setIsToggle((status) => !status);
    };
    return { isToggle, toggleIt };
};
