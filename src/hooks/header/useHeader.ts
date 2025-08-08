import { useState, useCallback } from "react";

export function useHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return { isOpen, toggleMenu };
}