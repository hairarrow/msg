import React, { FC, useContext } from "react";
import StyledMessage from "./MessageStyles";
import UrgentMessageTag from "./UrgentMessageTag";
import { LocalizationContext } from "../../context/LocalizationContext";

export interface IMessageProps {
	id: string;
	content: string;
	urgent: boolean;
	senderImageUrl: string;
	seenByImageUrls: string[];
	isSenderMe?: boolean;
	isLatestMessage?: boolean;
}

const Message: FC<IMessageProps> = ({
	content,
	urgent,
	senderImageUrl,
	isSenderMe,
	seenByImageUrls,
	isLatestMessage
}) => {
	const { localized } = useContext(LocalizationContext);
	return (
		<StyledMessage
			isSenderMe={isSenderMe}
			isLatestMessage={isLatestMessage}
			urgent={urgent}
		>
			{urgent && <UrgentMessageTag>{localized?.urgent}</UrgentMessageTag>}
			<p className="message-content">{content}</p>
		</StyledMessage>
	);
};

export default Message;
