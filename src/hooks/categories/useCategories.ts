import { useState, useCallback } from "react";
import { Difficultys } from '@/utilities/categories';

export const useCategories = () => {
    const [diff, setDiff] = useState<string>(Difficultys[0]);
    const [dropdown, setDropdown] = useState<boolean>(false);

    const getDiff = useCallback(
        (diff: string) => {
            setDiff(diff);
        },
        [setDiff]
    );

    const handleDropdown = useCallback(() => {
        setDropdown(!dropdown);
    }, [dropdown]);

    return {
        diff,
        dropdown,
        getDiff,
        handleDropdown
    }
};