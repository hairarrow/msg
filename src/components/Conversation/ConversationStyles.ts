import { styled } from "../../theme";
import Message from "../Message/MessageStyles";

export default styled.article`
	max-width: 448px;
	max-height: 640px;
	padding: 40px 32px;
	background: #fff;

	${Message} + ${Message} {
		margin-top: 16px;
	}
`;
