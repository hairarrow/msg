import React, { FC, useContext } from "react";
import StyledMessage from "./MessageStyles";
import UrgentMessageTag from "./UrgentMessageTag";
import { LocalizationContext } from "../../context/LocalizationContext";
import { AddReactionIcon } from "../Icon";
import UserProfileThumbnail from "../UserProfileThumbnail";

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
	const currentUserSrc = "https://i.imgur.com/4VbAo78.jpg";
	const { localized } = useContext(LocalizationContext);
	const isCurrentUser = currentUserSrc === senderImageUrl;
	return (
		<StyledMessage
			isSenderMe={isCurrentUser}
			isLatestMessage={isLatestMessage}
			urgent={urgent}
		>
			<section className="message-row">
				{!isCurrentUser && (
					<UserProfileThumbnail profileSrc={senderImageUrl} />
				)}
				<p className="message-content">
					{urgent && (
						<UrgentMessageTag>{localized?.urgent}</UrgentMessageTag>
					)}
					{content}
				</p>
				{!isCurrentUser && (
					<button type="button" className="message-reaction-action">
						<AddReactionIcon />
					</button>
				)}
			</section>
			{isLatestMessage ? (
				<ul className="message-seen-by-collection">
					{seenByImageUrls.map(src => (
						<li
							key={src}
							className="message-seen-by-image-container"
						>
							<UserProfileThumbnail
								profileSrc={src}
								width={16}
								height={16}
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
