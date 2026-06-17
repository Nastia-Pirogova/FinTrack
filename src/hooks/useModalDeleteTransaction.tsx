import useModal from "./useModal";

function useModalDeleteTransaction(deleteItem) {
    const modal = useModal();

    const confirmDelete = async () => {
        if (!modal.selected) return;

        await deleteItem(modal.selected);
        modal.closeModal();
    };

    return {
        ...modal,
        confirmDelete,
    };
}

export default useModalDeleteTransaction;