import { useEffect } from "react";
import { useSelectedConversationContext } from "../../context/SelectedConversationContext";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } =
        useSelectedConversationContext();

    useEffect(() => {
        //cleanup function when component unmount
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className="md:min-w-[450px] flex flex-col h-[550px] bg-indigo-300">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-white/20 p-2 border-b-2 border-gray-600">
                        <span className="text-gray-700">To:</span>{" "}
                        <span className="text-black font-semibold capitalize">
                            {selectedConversation?.fullName}
                        </span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
                <p>
                    Welcome 👋{" "}
                    <span className="capitalize font-bold">
                        {authUser.fullName}
                    </span>{" "}
                    ❄
                </p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};

export default MessageContainer;
