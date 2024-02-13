import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="mt-auto py-2">
            {loading ? (
                <div className="text-black font-medium">Loading...</div>
            ) : (
                <BiLogOut
                    className="text-black w-6 h-6 cursor-pointer"
                    onClick={logout}
                />
            )}
        </div>
    );
};

export default LogoutButton;
