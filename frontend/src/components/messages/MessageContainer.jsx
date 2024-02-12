import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = 10;
    return (
        <div className="md:min-w-[450px] flex flex-col h-[550px]">
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="bg-white/20 p-2 border-b-2 border-gray-600">
                        <span className="text-gray-700">To:</span>{" "}
                        <span className="text-black font-semibold capitalize">
                            test male
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
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Test male ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    );
};

export default MessageContainer;
