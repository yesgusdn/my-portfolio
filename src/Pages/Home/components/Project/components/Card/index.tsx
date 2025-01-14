import { Pjt } from "../Carousel";

type CardProps = {
    pjt: Pjt;
};

const Card: React.FC<CardProps> = ({ pjt }) => {
    return (
        <div className="p-2 rounded rounded-xl shadow-md bg-blue-500 h-40">
            {pjt.title}
        </div>
    );
};

export default Card;
