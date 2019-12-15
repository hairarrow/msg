import React, { FC, useContext } from "react";
import StyledMessage from "./MessageStyles";
import UrgentMessageTag from "./UrgentMessageTag";
import { LocalizationContext } from "../../context/LocalizationContext";
import { AddReactionIcon } from "../Icon";

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
			<section className="message-row">
				{urgent && (
					<UrgentMessageTag>{localized?.urgent}</UrgentMessageTag>
				)}
				<span className="message-sender-image-container">
					<img
						className="message-sender-image"
						src={senderImageUrl}
						alt={"Someone's Name"}
					/>
				</span>
				<p className="message-content">{content}</p>
				<button type="button">
					<AddReactionIcon />
				</button>
			</section>
			{isLatestMessage ? (
				<ul className="message-seen-by-collection">
					{seenByImageUrls.map(src => (
						<li
							key={src}
							className="message-seen-by-image-container"
						>
							<img
								className="message-seen-by-image"
								src={src}
								alt={"Someone Name"}
							/>
						</li>
					))}
				</ul>
			) : (
				<p className="message-seen">
					{localized?.seen_by} {seenByImageUrls.length}
				</p>
			)}
		</StyledMessage>
	);
};

export default Message;
