import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    active: boolean;
}

const SideButton: React.FC<ButtonProps> = ({ children, onClick, active }) => {
    const className = clsx(
        "text-left font-semibold w-full h-auto p-3 rounded-xl focus:outline-none",
        {
            "bg-gray-100": active,
            "hover:bg-gray-100": !active,
        }
    );

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default SideButton;
