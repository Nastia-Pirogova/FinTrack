import {createPortal} from "react-dom";

function Modal({isOpen, children}) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
            <div className="border-gray-200 bg-white p-6 shadow-xs rounded-xl max-w-[500px] w-full">
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;