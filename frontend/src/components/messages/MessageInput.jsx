import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSentMessage";
import { useState } from "react";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };
    return (
        <form
            className="px-4 py-3 border-gray-900 border-t"
            onSubmit={handleSubmit}
        >
            <div className="w-full relative ">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 "
                    placeholder="Send a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="absolute inset-y-0 end-0 flex items-center pe-3 active:scale-90 "
                >
                    <BsSend className="" />
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
