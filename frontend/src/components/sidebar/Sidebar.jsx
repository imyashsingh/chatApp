import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className="flex flex-col border-r-2  border-gray-900 bg-indigo-300 h-[550px] ">
            <SearchInput />
            <hr className="mt-3 border-gray-700" />
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
