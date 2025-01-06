import { useNavigate } from "react-router-dom";
import SideButton from "../Button/SideButton";
import { useEffect, useState } from "react";

interface Menu {
    id: Number;
    label: String;
    url: String;
}

const Sidebar = () => {
    const defaultImage = "https://via.placeholder.com/150";
    const navigate = useNavigate();

    const [menus, setMenus] = useState<Menu[]>([]);
    const [active, setActive] = useState<Number>(1);

    useEffect(() => {
        setMenus([
            { id: 1, label: "HOME", url: "" },
            { id: 2, label: "SKILLS", url: "/skills" },
            { id: 3, label: "HISTORY", url: "/history" },
        ]);
    }, []);

    const changePage = (id: Number, url: String) => {
        setActive(id);
        navigate(`${url}`);
    };

    return (
        <div className="my-5">
            <div className="flex justify-center">
                <img
                    src={defaultImage}
                    alt="Loaded"
                    className="w-50 h-auto rounded-full"
                />
            </div>
            <div className="mt-10 space-y-1">
                {menus.map((menu, index) => (
                    <SideButton
                        key={index}
                        active={menu.id === active}
                        onClick={() => changePage(menu.id, menu.url)}
                    >
                        {menu.label}
                    </SideButton>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
