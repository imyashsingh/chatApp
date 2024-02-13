import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();

    const lastMessageRef = useRef();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);

        return () => clearTimeout(timeOut);
    }, [messages]);
    return (
        <div className="flex-1 px-4 overflow-auto">
            {!loading &&
                messages &&
                messages?.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {loading && (
                <div className=" text-center p-4 text-gray-800 font-medium">
                    Loading...
                </div>
            )}
            {!loading && messages && messages?.length === 0 && (
                <p className="text-center p-4 text-gray-800 font-medium">
                    Send a message to start the conversation :)
                </p>
            )}
        </div>
    );
};

export default Messages;
