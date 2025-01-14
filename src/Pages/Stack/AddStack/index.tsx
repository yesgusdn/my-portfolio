import { useEffect, useState } from "react";

// icon
import { FaMagnifyingGlass } from "react-icons/fa6";

interface StackInfo {
    name: string;
    description: string;
    icon: string;
    selected: boolean;
}

interface TechStack {
    web?: StackInfo[];
    mobile?: StackInfo[];
    backend?: StackInfo[];
    database?: StackInfo[];
    devops?: StackInfo[];
}

const AddStack = () => {
    const [rowData, setRowData] = useState<TechStack | undefined>();

    const handleSelect = (name: string) => {
        const updatedRowData: TechStack | undefined = rowData || undefined;

        const selectedItem: StackInfo | undefined = updatedRowData?.web?.find(
            (item) => item.name === name
        );

        if (selectedItem) {
            selectedItem.selected = !selectedItem.selected;
            setRowData(updatedRowData);
        }
    };

    useEffect(() => {
        fetch("/static/data/allTechStack.json")
            .then((response) => response.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="relative w-[80%]">
                <input
                    type="text"
                    className="border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none w-full"
                    placeholder="검색/직접입력"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-1 -translate-x-1/2 text-gray-500">
                    <FaMagnifyingGlass />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                {rowData?.web?.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-gray-100 rounded-full p-5 w-auto relative">
                            <img
                                src={`/icons/${tech.icon}`}
                                alt={tech.name}
                                className="w-10 h-10 hover:cursor-pointer"
                                onClick={() => handleSelect(tech.name)}
                            />
                        </div>
                        <div>{tech.name}</div>
                        <div>{tech.selected ? <div>hi</div> : <></>}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddStack;
