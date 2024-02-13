import { useAuthContext } from "../../context/AuthContext";
import { useSelectedConversationContext } from "../../context/SelectedConversationContext";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useSelectedConversationContext();
    const fromMe = message?.senderId === authUser?._id;

    // const formattedTime = extractTime(message.createdAt);
    const profilePic = fromMe
        ? authUser.profilePic
        : selectedConversation?.profilePic;

    const extractTime = (dateString) => {
        const date = new Date(dateString);
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        return `${hours}:${minutes}`;
    };

    // Helper function to pad single-digit numbers with a leading zero
    const padZero = (number) => {
        return number.toString().padStart(2, "0");
    };
    const formatedTime = extractTime(message.createdAt);
    return (
        <>
            {fromMe ? (
                <div className="flex justify-end gap-1 py-1">
                    <div className="text-end">
                        <div className="rounded-xl text-sm p-2 max-w-52 break-words bg-blue-400 text-gray-900">
                            {message?.message}
                        </div>
                        <div className="rounded text-sm text-gray-700">
                            {formatedTime}
                        </div>
                    </div>
                    <div>
                        <img
                            src={profilePic}
                            alt="user avatar"
                            className="w-8"
                        />
                    </div>
                </div>
            ) : (
                <div className="flex justify-start gap-1 py-1">
                    <div>
                        <img
                            src={profilePic}
                            alt="user avatar"
                            className="w-8"
                        />
                    </div>
                    <div className="text-start">
                        <div className="rounded-xl text-sm p-2 max-w-52 break-words bg-slate-400 text-gray-900">
                            {message?.message}
                        </div>
                        <div className="rounded text-sm text-gray-700">
                            {formatedTime}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Message;
