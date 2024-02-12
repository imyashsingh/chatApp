import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className="md:flex  md:h-[550px] bg-blue-300 rounded-md ">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;
