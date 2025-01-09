import Experience from "./components/Experience";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import Title from "./components/Title";

const Home = () => {
    return (
        <div className="flex flex-col p-10 space-y-10">
            <Title />
            <div className="flex flex-row space-x-10">
                <div className="w-1/3">
                    <TechStack />
                </div>
                <div className="flex flex-col">
                    <div className="h-3/4">
                        <Project />
                    </div>
                    <div className="h-1/4">
                        <Experience />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
