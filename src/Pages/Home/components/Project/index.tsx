import { FaPlus } from "react-icons/fa";
import PlusButton from "../../../../Components/Button/PlusButton";
import Carousel from "./components/Carousel";
const Project = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="font-bold text-2xl p-2">프로젝트</div>
                <PlusButton>
                    <FaPlus />
                </PlusButton>
            </div>
            <Carousel />
        </>
    );
};

export default Project;
