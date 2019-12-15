import { useState, useEffect } from "react";
import { IMessageProps } from "../components/Message/Message";

const MOCK_RESPONSE = [
	{
		id: "18516e26-2413-4af4-b5d9-27435b815543",
		content:
			"The POS terminal is down again! We’re only able to accept cash. @russell can you call support?",
		urgent: true,
		senderImageUrl: "http://i.imgur.com/AyJ6XnG.jpg",
		seenByImageUrls: [
			"https://i.imgur.com/4VbAo78.jpg",
			"http://i.imgur.com/AyJ6XnG.jpg",
			"http://i.imgur.com/wp0o6Ds.jpg"
		]
	},
	{
		id: "73b220e3-5565-4e2c-b338-45c867bd8296",
		content: "Update: we were able to get the terminal fixed!",
		urgent: false,
		senderImageUrl: "http://i.imgur.com/wp0o6Ds.jpg",
		seenByImageUrls: [
			"https://i.imgur.com/4VbAo78.jpg",
			"http://i.imgur.com/AyJ6XnG.jpg",
			"http://i.imgur.com/wp0o6Ds.jpg"
		]
	},
	{
		id: "179a2559-dc05-44bf-853a-016052bbf49c",
		content:
			"Hi everyone! let’s talk about the barista interviews, how’d the last round go?",
		urgent: false,
		senderImageUrl: "https://i.imgur.com/4VbAo78.jpg",
		seenByImageUrls: [
			"https://i.imgur.com/4VbAo78.jpg",
			"http://i.imgur.com/AyJ6XnG.jpg"
		]
	}
];

const conversationService = (id: string) =>
	new Promise<IMessageProps[]>(resolve => {
		setTimeout(() => resolve(MOCK_RESPONSE as IMessageProps[]), 400);
	});

export default function useConversation(
	id: string
): { loading: boolean; messages: IMessageProps[] } {
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState<IMessageProps[]>([]);

	// TODO yield response and check if a component is mounted ...
	// ... before executing setMessages
	const getMessages = async () => {
		try {
			setLoading(true);
			const response = await conversationService(id);
			setMessages(response);
		} catch {
			throw new Error("Could not load messages");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getMessages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return { loading, messages };
}
