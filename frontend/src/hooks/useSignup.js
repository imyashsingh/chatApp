import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const signup = async ({
        fullName,
        username,
        password,
        confirmPassword,
        gender,
    }) => {
        const success = handleInputErrors({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
        });
        if (!success) return;

        setLoading(true);
        try {
            const { data } = await axios.post("/api/auth/signup", {
                fullName,
                username,
                password,
                confirmPassword,
                gender,
            });

            if (!data?.user) {
                throw new Error("ERROR!!!!!");
            }
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

    return { loading, signup };
};
export default useSignup;

function handleInputErrors({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
}) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 5) {
        toast.error("Password must be at least 5 characters");
        return false;
    }

    return true;
}
