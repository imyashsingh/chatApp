import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelectedConversationContext } from "../context/SelectedConversationContext";
import axios from "axios";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } =
        useSelectedConversationContext();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(
                    `/api/messages/${selectedConversation._id}`
                );

                if (!data) throw new Error("Error!!!!");
                setMessages(data);
            } catch (error) {
                console.log(error);
                toast.error(error?.response?.data?.error || error?.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};
export default useGetMessages;
