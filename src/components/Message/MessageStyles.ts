import { styled } from "../../theme";
import { IMessageProps } from "./Message";
import { UrgentStyles } from "../Message/UrgentMessageTag";

export default styled.article<
	Pick<IMessageProps, "isLatestMessage" | "urgent" | "isSenderMe">
>`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	${({ isSenderMe }) =>
		isSenderMe &&
		`
		padding-left: 80px;
	`}

	.message-row {
		display: grid;
		grid-template-columns: auto 1fr auto;
		grid-template-columns: ${({ isSenderMe }) =>
			isSenderMe ? "1fr" : "auto 1fr auto"};
		align-items: flex-end;
		grid-gap: 16px;
	}

	.message-content {
		position: relative;
		display: inline-block;
		padding: 16px;
		font-size: 1.125rem;
		line-height: 1.4;
		border-radius: 32px;
		background: ${({
			theme: {
				color: { greenLight, grayLight }
			},
			isSenderMe
		}) => (isSenderMe ? greenLight : grayLight)};
	}

	.message-reaction-action {
		align-self: center;
		background: transparent;
		outline: 0;
		border: none;

		&:focus {
			box-shadow: 0 0 4px 1px
				${({
					theme: {
						color: { redUrgent }
					}
				}) => redUrgent};
		}
	}

	.message-seen {
		margin-top: 8px;
		color: ${({
			theme: {
				color: { gray }
			}
		}) => gray};
		font-size: 0.75rem;
		text-transform: capitalize;
	}

	.message-seen-by-collection {
		margin-top: 8px;
		display: grid;
		grid-template-columns: repeat(10, auto);
		grid-gap: 8px;
		direction: rtl;
	}

	${UrgentStyles} {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(calc(-100% + 8px));
	}
`;
