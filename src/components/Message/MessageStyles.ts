import { styled } from "../../theme";
import { IMessageProps } from "./Message";

export default styled.article<
	Pick<IMessageProps, "isLatestMessage" | "urgent" | "isSenderMe">
>`
	background: ${({
		theme: {
			color: { greenLight, grayLight }
		},
		isSenderMe
	}) => (isSenderMe ? greenLight : grayLight)};
`;
