import { useState } from "react";
import PlusButton from "../../Components/Button/PlusButton";
import CustomModal from "../../Components/CustomModal";
import AddStack from "./AddStack";

const Stack = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handlePlusButton = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-8 h-8">
            <PlusButton onClick={handlePlusButton} />
            {isOpen ? (
                <CustomModal onClose={handlePlusButton}>
                    <AddStack />
                </CustomModal>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Stack;
