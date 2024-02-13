import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="md:flex h-full md:h-[550px] bg-indigo-400 rounded-md my-4 ">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;
