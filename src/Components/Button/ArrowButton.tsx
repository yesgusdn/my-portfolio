interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    disabled: boolean;
}

const ArrowButton: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled,
}) => {
    return (
        <button
            className="mt-2 px-3 py-1 bg-white rounded-lg shawdow-md text-blue-500 font-bold"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default ArrowButton;
