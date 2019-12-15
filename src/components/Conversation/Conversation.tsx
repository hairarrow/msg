import React, { FC } from "react";
import Container from "./ConversationStyles";
import useConversation from "../../hooks/useConversation";
import Message from "../Message";

export interface IConversationProps {
	id: string;
}

const Conversation: FC<IConversationProps> = ({ id }) => {
	const { loading: messagesLoading, messages } = useConversation(id);

	return messagesLoading ? (
		<h1>Loading</h1>
	) : (
		<Container>
			{messages.map((message, idx) => (
				<Message
					key={message.id}
					{...message}
					isLatestMessage={messages.length - 1 === idx}
				/>
			))}
		</Container>
	);
};

export default Conversation;
