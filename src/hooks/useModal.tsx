import { useState } from "react";

function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const openModal = (item) => {
        setSelected(item);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelected(null);
    };

    return {
        isOpen,
        selected,
        openModal,
        closeModal,
    };
}

export default useModal;