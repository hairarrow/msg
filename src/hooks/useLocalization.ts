import { useState } from "react";

const MOCK_RESPONSE = {
	seen_by: {
		en: "seen by",
		es: "visto por"
	},
	urgent: {
		en: "urgent",
		es: "urgente"
	}
};

export interface ILocalizationResponse {
	[k: string]: {
		[k: string]: string;
	};
}

export default function useLocalization(): {
	loading: boolean;
	localizedStrings: ILocalizationResponse;
} {
	const localizedStrings = MOCK_RESPONSE;
	const loading = false;

	return {
		localizedStrings,
		loading
	};
}
