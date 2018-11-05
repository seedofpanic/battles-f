import {GET_GLOBAL_LANG} from "../store/store";
import {RussianResources} from "./russian-l10n";
import {EnglishResources} from "./english-l10n";

export const SupportedLanguagesEnum = {
    "En": 1,
    "Ru": 2
};

Object.freeze(SupportedLanguagesEnum);

export class l10n_helper {
    lang(key) {
        const language = GET_GLOBAL_LANG();

        if (language === SupportedLanguagesEnum.Ru) return this.GetLocalizedValue(key, "ошибка", RussianResources);
        if (language === SupportedLanguagesEnum.En) return this.GetLocalizedValue(key, 'error', EnglishResources);

        return 'unknown language';
    }

    GetLocalizedValue(key, noKeyMessage, resource) {
        if (resource.hasOwnProperty(key)) {
            return resource[key];
        }

        return noKeyMessage;
    }
};
