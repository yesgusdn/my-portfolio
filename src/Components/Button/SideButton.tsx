interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    active: boolean;
}

const SideButton: React.FC<ButtonProps> = ({ children, onClick, active }) => {
    const className = active
        ? "text-left font-semibold w-full h-auto p-3 rounded-xl bg-gray-100 focus:outline-none"
        : "text-left font-semibold w-full h-auto p-3 rounded-xl hover:bg-gray-100 focus:outline-none";

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default SideButton;
