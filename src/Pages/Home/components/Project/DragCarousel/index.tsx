import { useEffect, useRef, useState } from "react";

interface Row {
    pjtId: string;
    title: string;
    tech: string[];
}

const DragCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [rowData, setRowData] = useState<Row[]>([]);

    useEffect(() => {
        fetch("/static/data/project.json")
            .then((response) => response.json())
            .then((data) => setRowData(data.projects));
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;

        e.preventDefault();

        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.scrollLeft;
            const cardElement = carouselRef.current
                .firstElementChild as HTMLElement;
            const cardWidth = cardElement?.offsetWidth || 0;
            const targetIndex = Math.round(scrollAmount / cardWidth);
            const targetScrollLeft = targetIndex * cardWidth;
            carouselRef.current.scrollTo({
                left: targetScrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Draggable Carousel</h2>
            {/* Draggable Carousel */}
            <div
                ref={carouselRef}
                className="overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                    scrollBehavior: isDragging ? "auto" : "smooth",
                }}
            >
                {rowData.map((value, index) => (
                    <div
                        key={index}
                        className="snap-center flex-shrink-0 w-[calc((100%)/4)] bg-blue-500 h-40 flex justify-center items-center rounded-lg shadow text-white font-bold"
                    >
                        {value.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragCarousel;
