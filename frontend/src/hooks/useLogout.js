import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post("/api/auth/logout");

            if (!data) throw new Error("ERROR!!!!");

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success(data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error || error?.message);
        } finally {
            setLoading(false);
        }
    };
    return { logout, loading };
};

export default useLogout;
