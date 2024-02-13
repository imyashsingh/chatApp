import { useEffect, useRef } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import { useSelectedConversationContext } from "../../context/SelectedConversationContext";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    const { selectedConversation } = useSelectedConversationContext();

    const selectedConversationRef = useRef();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            selectedConversationRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        }, 100);

        return () => clearTimeout(timeOut);
    }, [selectedConversation]);

    return (
        <>
            <div className="py-2 flex flex-col overflow-auto ">
                {conversations.map((conversation) => (
                    <div key={conversation._id} ref={selectedConversationRef}>
                        <Conversation
                            key={conversation._id}
                            conversation={conversation}
                        />
                    </div>
                ))}
            </div>
            {loading && (
                <div className="py-2 h-full text-black flex flex-col items-center justify-center overflow-auto ">
                    Loading...
                </div>
            )}
        </>
    );
};

export default Conversations;
