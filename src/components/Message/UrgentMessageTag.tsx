import React, { FC, HTMLProps } from "react";
import { styled } from "../../theme";
import ClockIcon from "../Icon/clock.svg";

export const UrgentStyles = styled.span`
	display: flex;
	align-items: center;
	padding: 2px 8px;
	border-radius: 24px;
	text-transform: capitalize;
	font-weight: 300;
	font-size: 0.75rem;
	color: ${({
		theme: {
			color: { grayLight }
		}
	}) => grayLight};
	background: ${({
		theme: {
			color: { redUrgent }
		}
	}) => redUrgent};

	.clock-icon {
		margin-right: 4px;
	}
`;

const UrgentMessageTag: FC<HTMLProps<HTMLSpanElement>> = ({
	children,
	className
}) => (
	<UrgentStyles className={className}>
		<img
			className="clock-icon"
			src={ClockIcon}
			alt="Urgent Icon"
			aria-hidden="true"
		/>
		{children}
	</UrgentStyles>
);

export default UrgentMessageTag;
