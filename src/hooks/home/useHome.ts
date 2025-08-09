import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useHome = () => {
    const navigate = useNavigate();

    const handleButtonClick = useCallback(
        (path: string) => {
            navigate(path);
        },
        [navigate]
    );

    return { handleButtonClick };
};