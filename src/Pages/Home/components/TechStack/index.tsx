import { useEffect, useState } from "react";

// icon
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

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
            <div className="font-bold text-2xl">Tech Stack</div>
            {categories.map((category) => (
                <div key={category} className="font-bold text-md">
                    {category.toUpperCase()}
                    <div>
                        {techStack[category as keyof Tech] ? (
                            techStack[category as keyof Tech].map(
                                (tech, index) => (
                                    <div key={index} className={tech.color}>
                                        {getIcon(tech.title, tech.color)}
                                    </div>
                                )
                            )
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            ))}
            <div className="text-green-500"></div>
        </div>
    );
};

export default TechStack;
