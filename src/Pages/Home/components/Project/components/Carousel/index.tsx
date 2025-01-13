import { useEffect, useState } from "react";
import ArrowButton from "../../../../../../Components/Button/ArrowButton";
import Card from "../Card";

export interface Pjt {
    pjtId: number;
    title: string;
    tech: string[];
}

const Carousel = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);
    const [projects, setProjects] = useState<Pjt[]>([]);

    const handleNextClick = () => {
        setCurrentIdx(currentIdx + 1);
    };

    const handlePrevClick = () => {
        setCurrentIdx(currentIdx - 1);
    };

    useEffect(() => {
        fetch("/static/data/project.json")
            .then((response) => response.json())
            .then((data) => setProjects(data.projects.reverse()));
    }, []);

    const cardsToShow: number = 4;

    return (
        <div className="flex flex-row">
            <div className="w-full relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{
                        transform: `translateX(-${
                            (100 / cardsToShow) * currentIdx
                        }%)`,
                    }}
                >
                    {projects.map((project, idx) => (
                        <div key={idx} className="min-w-[25%] p-1">
                            <Card pjt={project} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-end space-y-1 ">
                {/* button */}
                <ArrowButton
                    onClick={handlePrevClick}
                    disabled={currentIdx === 0}
                >
                    {"<"}
                </ArrowButton>
                <ArrowButton
                    onClick={handleNextClick}
                    disabled={currentIdx === 3}
                >
                    {">"}
                </ArrowButton>
            </div>
        </div>
    );
};

export default Carousel;
