import { useState } from "react";

function useModalDeleteTransaction(deleteItem) {
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

    const confirmDelete = async () => {
        if (!selected) return;

        await deleteItem(selected);

        closeModal();
    };

    return {
        isOpen,
        selected,
        openModal,
        closeModal,
        confirmDelete,
    };
}

export default useModalDeleteTransaction;