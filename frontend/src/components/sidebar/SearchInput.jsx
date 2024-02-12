import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2 p-4">
            <input
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                placeholder="Search.."
                type="text"
            />
            <button type="Submit" className="rounded-full text-black text-2xl">
                <CiSearch />
            </button>
        </form>
    );
};

export default SearchInput;
