import TechStack from "./components/TechStack";
import Title from "./components/Title";

const Home = () => {
    return (
        <div className="flex flex-col p-10 space-y-10">
            <Title />
            <TechStack />
        </div>
    );
};

export default Home;
