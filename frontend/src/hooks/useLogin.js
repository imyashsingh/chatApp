import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
        if (!success) return;
        setLoading(true);
        try {
            const { data } = await axios.post("/api/auth/login", {
                username,
                password,
            });

            if (!data?.user) throw new Error("ERROR!!!!");

            localStorage.setItem("chat-user", JSON.stringify(data?.user));
            setAuthUser(data?.user);
            toast.success(data?.message);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error || error?.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};
export default useLogin;

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    return true;
}
