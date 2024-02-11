import ConversationModel from "../models/Conversation.model.js";
import MessageModel from "../models/message.model.js";

export const sentMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await ConversationModel.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await ConversationModel.create({
                participants: { $all: [senderId, receiverId] },
            });
        }

        const newMessage = new MessageModel({
            senderId,
            receiverId,
            message,
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        //Socoket IO functionality

        // await newMessage.save();
        // await conversation.save();
        //both will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error while sending message", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getMessage = async () => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await ConversationModel.findOne({
            participants: { $all: [userToChatId, senderId] },
        }).populate(message);

        if (!conversation) {
            res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error while receiving message", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
