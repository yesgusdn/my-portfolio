import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Title = () => {
    const goToGithub = () => {
        window.open("https://github.com/yesgusdn", "_blank");
    };
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-2">
                <div className="font-bold text-4xl">DashBoard</div>
                <div className="text-md">yesgusdn</div>
            </div>
            <div className="flex flex-col w-1/5 h-auto bg-white p-5 rounded-lg shadow-md space-y-1">
                <div
                    className="flex flex-row items-center space-x-3 hover:cursor-pointer"
                    onClick={goToGithub}
                >
                    <FaGithub size={20} />
                    <p>GitHub</p>
                </div>
                <div className="flex flex-row items-center space-x-3">
                    <MdMail size={20} />
                    <div>shd2741@naver.com</div>
                </div>
            </div>
        </div>
    );
};

export default Title;
