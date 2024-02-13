import { createContext, useContext, useState } from "react";

const SelectedConversationContext = createContext();

export const useSelectedConversationContext = () =>
    useContext(SelectedConversationContext);

export const SelectedConversationContextProvider = ({ children }) => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState(null);
    return (
        <SelectedConversationContext.Provider
            value={{
                selectedConversation,
                setSelectedConversation,
                messages,
                setMessages,
            }}
        >
            {children}
        </SelectedConversationContext.Provider>
    );
};
