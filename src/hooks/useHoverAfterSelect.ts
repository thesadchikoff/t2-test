import { useState, useEffect, useCallback } from "react";

export const useHoverAfterSelect = (isSelected: boolean) => {
    const [hovered, setHovered] = useState(false);
    const [hasLeftAfterSelect, setHasLeftAfterSelect] = useState(false);

    useEffect(() => {
        if (!isSelected) {
            setHovered(false);
            setHasLeftAfterSelect(false);
        } else {
            setHasLeftAfterSelect(false);
        }
    }, [isSelected]);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        if (isSelected) {
            setHasLeftAfterSelect(true);
        }
        setHovered(false);
    }, [isSelected]);

    const isHoverActive = isSelected && hovered && hasLeftAfterSelect;

    return { hovered, hasLeftAfterSelect, isHoverActive, onMouseEnter, onMouseLeave };
};
