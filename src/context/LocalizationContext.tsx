import React, { createContext, FC, useState, useMemo } from "react";
import useLocalization from "../hooks/useLocalization";

export interface ILocalizationContext {
	lang: "en" | "es";
	localized: { [k: string]: string } | null;
	changeLanguage?: (k: ILocalizationContext["lang"]) => void;
	languages?: ILanguages;
	selectedLanguage?: ILanguageInformation | null;
}

export interface ILanguages {
	[k: string]: ILanguageInformation;
}

export interface ILanguageInformation {
	name: string;
	flagEmoji?: string;
}

const languageMap = {
	en: {
		name: "english",
		flagEmoji: "🇺🇸"
	},
	es: {
		name: "spanish",
		flagEmoji: "🇲🇽"
	}
};

export const LocalizationContext = createContext<ILocalizationContext>({
	lang: "en",
	localized: null
});

export const LocalizationContextProvider: FC = ({ children }) => {
	const { localizedStrings } = useLocalization();
	const [language, setLanguage] = useState<ILocalizationContext["lang"]>(
		"en"
	);
	const localized = useMemo(
		() =>
			Object.keys(localizedStrings).reduce<{
				[k: string]: string;
			}>((a, b) => {
				a[b] = localizedStrings[b][language];
				return a;
			}, {}),
		[language, localizedStrings]
	);
	const selectedLanguage = languageMap[language];

	function changeLanguage(language: ILocalizationContext["lang"]) {
		setLanguage(language);
	}

	return (
		<LocalizationContext.Provider
			value={{
				localized,
				lang: "en",
				changeLanguage,
				languages: languageMap,
				selectedLanguage
			}}
		>
			{children}
		</LocalizationContext.Provider>
	);
};
