import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
	color: {
		redUrgent: "#f92b65",
		greenLight: "#d4f4ee",
		grayLight: "#f7f7f7",
		gray: "#bdbdbd"
	}
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
