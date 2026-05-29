import clsx from "clsx";
import {createPortal} from "react-dom";
import Button from "./Button.tsx";

function ConfirmDeleteModal({isOpen, onClose, onConfirm}) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
            <div className="border-gray-200 bg-white p-6 shadow-xs rounded-xl max-w-[500px] w-full">
                <h2 className="mb-4 text-2xl font-semibold text-slate-700 text-center">
                    Are you sure you want to delete this transaction?
                </h2>

                <p className="text-center text-slate-600">
                    This action cannot be undone.
                </p>

                <div className="flex gap-2 mt-8">
                    <Button
                        onClick={onConfirm}
                        title="Yes"
                        className="text-white"
                    />

                    <Button
                        onClick={onClose}
                        title="No"
                        className="border border-slate-300 bg-white md:px-6 text-slate-900 hover:bg-slate-50"
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ConfirmDeleteModal;