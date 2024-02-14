import { useEffect } from "react";

import notificationSound from "../assets/sounds/notification.mp3";
import { useSocketContext } from "../context/SocketContext";
import { useSelectedConversationContext } from "../context/SelectedConversationContext";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages, selectedConversation } =
        useSelectedConversationContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notificationSound);

            if (selectedConversation?._id === newMessage?.senderId) {
                sound.play();
                setMessages([...messages, newMessage]);
            }
        });

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;
