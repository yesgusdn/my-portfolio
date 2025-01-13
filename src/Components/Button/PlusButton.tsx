interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
}

const PlusButton: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white w-auto h-auto p-2 rounded-lg shadow text-blue-500"
        >
            {children}
        </div>
    );
};

export default PlusButton;
