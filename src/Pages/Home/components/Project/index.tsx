import { useEffect, useState } from "react";
import Card from "./components/Card";

export interface Pjt {
    pjtId: number;
    title: string;
    tech: string[];
}

const Project = () => {
    const [projects, setProjects] = useState<Pjt[]>([]);
    useEffect(() => {
        fetch("/static/data/project.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects));
    }, []);

    return (
        <div>
            <div className="font-bold text-2xl">프로젝트</div>
            <div className="flex flex-row">
                {projects &&
                    projects.map((pjt, index) => (
                        <div key={index} className="flex flex-row">
                            <Card pjt={pjt} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Project;
