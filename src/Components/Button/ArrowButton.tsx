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
            onClick={onClick}
            disabled={disabled}
            className="bg-white rounded-full p-2"
        >
            {children}
        </button>
    );
};

export default ArrowButton;
