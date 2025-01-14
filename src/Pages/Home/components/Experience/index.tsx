import { useEffect, useState } from "react";
import PlusButton from "../../../../Components/Button/PlusButton";

export interface History {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
}

const Experience = () => {
    const [rowData, setRowData] = useState<History[]>([]);
    useEffect(() => {
        fetch("/static/data/experience.json")
            .then((response) => response.json())
            .then((data) => setRowData(data.experiences));
    }, []);

    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="font-bold text-2xl p-2">경험 및 경력</div>
                <PlusButton />
            </div>
            <div className="bg-white rounded rounded-xl shadow-md p-5 mt-1">
                {rowData?.map((value, index) => (
                    <div
                        key={index}
                        className="flex flex-row justify-between p-2"
                    >
                        <p>{value.name}</p>
                        <p>
                            {value.startDate} - {value.endDate}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Experience;
