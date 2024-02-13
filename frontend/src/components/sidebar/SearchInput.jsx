import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelectedConversationContext } from "../../context/SelectedConversationContext";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useSelectedConversationContext();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error(
                "Search term must be at least 3 characters long"
            );
        }

        const conversation = conversations.find((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    return (
        <form className="flex items-center gap-1 p-4" onSubmit={handleSubmit}>
            <input
                className="block w-full rounded-md border-0 p-1.5 bg-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                placeholder="Search.."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="Submit"
                className="rounded-full bg-gray-700 p-1 text-2xl"
            >
                <CiSearch />
            </button>
        </form>
    );
};

export default SearchInput;
