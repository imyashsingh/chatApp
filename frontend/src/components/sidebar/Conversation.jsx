import { useSelectedConversationContext } from "../../context/SelectedConversationContext";

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } =
        useSelectedConversationContext();
    const isSelected = selectedConversation?._id === conversation?._id;
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-3 cursor-pointer border-gray-400 border-b ${
                    isSelected && "bg-violet-400"
                }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
                <div>
                    <p className="font-semibold text-gray-800">
                        {conversation.fullName}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Conversation;
