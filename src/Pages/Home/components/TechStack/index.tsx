import { useEffect, useState } from "react";

// icon
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

import PlusButton from "../../../../Components/Button/PlusButton";

interface TechInfo {
    title: string;
    color: string;
}

interface Tech {
    frontend: TechInfo[];
    backend: TechInfo[];
    db: TechInfo[];
    deployment: TechInfo[];
}

const iconLibraries: any = {
    ...FaIcons,
    ...SiIcons,
};

const getIcon = (title: string, color: string) => {
    const iconName1 = `Fa${title}`;
    const iconName2 = `Si${title}`;
    const IconComponent = iconLibraries[iconName1] || iconLibraries[iconName2];

    return IconComponent ? (
        <IconComponent size={50} className={color} />
    ) : (
        <></>
    );
};

const initTech: Tech = { frontend: [], backend: [], db: [], deployment: [] };

const TechStack = () => {
    const [techStack, setTechStack] = useState<Tech>(initTech);

    const categories: string[] = Object.keys(initTech);

    useEffect(() => {
        fetch("/static/data/techStack.json")
            .then((response) => response.json())
            .then((data) => setTechStack(data));
    }, []);

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center justify-between">
                <div className="font-bold text-2xl p-2">기술스택</div>
                <PlusButton />
            </div>
            {categories.map((category) => (
                <div key={category} className="font-bold text-md">
                    <div className="flex flex-row items-center space-x-1 space-y-2 bg-white rounded rounded-2xl shadow-md p-2 ">
                        {techStack[category as keyof Tech] ? (
                            techStack[category as keyof Tech].map(
                                (tech, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col w-[100px] items-center hover:scale-110"
                                    >
                                        {getIcon(tech.title, tech.color)}
                                        <div>{tech.title}</div>
                                    </div>
                                )
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStack;
