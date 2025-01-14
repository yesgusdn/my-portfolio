import { ReactNode } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const CustomModal: React.FC<ModalProps> = ({ onClose, children, title }) => {
    const closeModal = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeModal}
        >
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto bg-white rounded-lg p-8 ">
                {children}
                <div
                    className="fixed top-1 right-1 p-2 hover:cursor-pointer"
                    onClick={onClose}
                >
                    <IoIosCloseCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
