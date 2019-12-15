import React, { FC, HTMLProps } from "react";
import { styled } from "../../theme";
import { ClockIcon } from "../Icon";

const Urgent = styled.span`
	background: ${({
		theme: {
			color: { redUrgent }
		}
	}) => redUrgent};

	.clock-icon {
		padding-right: 16px;
	}
`;

const UrgentMessageTag: FC<HTMLProps<HTMLSpanElement>> = ({
	children,
	className
}) => (
	<Urgent className={className}>
		<ClockIcon className="clock-icon" />
		{children}
	</Urgent>
);

export default UrgentMessageTag;
