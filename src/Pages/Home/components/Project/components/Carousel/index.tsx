import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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
        <div className="flex flex-row relative">
            {/* 캐러셀 구현 */}
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
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
            <div className="absolute top-1/2 left-1 -translate-y-1/2 -translate-x-1/2">
                {/* button */}
                <ArrowButton
                    onClick={handlePrevClick}
                    disabled={currentIdx === 0}
                >
                    <FaAngleLeft />
                </ArrowButton>
            </div>
            <div className="absolute top-1/2 right-1 -translate-y-1/2 translate-x-1/2">
                <ArrowButton
                    onClick={handleNextClick}
                    disabled={currentIdx === 3}
                >
                    <FaAngleRight />
                </ArrowButton>
            </div>
        </div>
    );
};

export default Carousel;
