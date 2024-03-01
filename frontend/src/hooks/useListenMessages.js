import { useEffect } from "react";

import notificationSound from "../assets/sounds/notification.mp3";
import { useSocketContext } from "../context/SocketContext";
import { useSelectedConversationContext } from "../context/SelectedConversationContext";
import toast from "react-hot-toast";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } =
        useSelectedConversationContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            toast.success("New Message Received");
            if (selectedConversation?._id === newMessage?.senderId) {
                setMessages([...messages, newMessage]);
            }
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;
