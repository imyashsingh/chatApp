import { useState } from "react";

import toast from "react-hot-toast";
import { useSelectedConversationContext } from "../context/SelectedConversationContext";
import axios from "axios";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } =
        useSelectedConversationContext();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const { data } = await axios.post(
                `/api/messages/send/${selectedConversation?._id}`,
                { message }
            );

            if (!data) throw new Error("ERROR!!!!");

            !messages ? setMessages([data]) : setMessages([...messages, data]);
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.error || error?.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};
export default useSendMessage;
