import { FaPlus } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

const PlusButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white w-auto h-auto p-2 rounded-lg shadow text-blue-500 hover:cursor-pointer"
        >
            <FaPlus />
        </div>
    );
};

export default PlusButton;
