import Experience from "./components/Experience";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import Title from "./components/Title";

const Home = () => {
    return (
        <div className="flex flex-col p-10 space-y-20">
            <Title />
            <div className="flex flex-row space-x-10">
                <div className="w-1/3">
                    <TechStack />
                </div>
                <div className="flex flex-col w-full space-y-10">
                    <div>
                        <Project />
                    </div>
                    <div>
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
