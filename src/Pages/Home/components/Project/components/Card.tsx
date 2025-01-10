import { Pjt } from "..";

type CardProps = {
    pjt: Pjt;
};

const Card: React.FC<CardProps> = ({ pjt }) => {
    return (
        <div className="rounded-xl shadow-md bg-white w-64 h-40 p-4">
            {pjt.title}
        </div>
    );
};

export default Card;
