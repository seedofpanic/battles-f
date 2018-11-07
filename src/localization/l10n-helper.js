import {GET_GLOBAL_LANG} from "../store/store";
import {RussianResources} from "./russian-l10n";
import {EnglishResources} from "./english-l10n";

export const SupportedLanguagesEnum = {
    "En": 'en',
    "Ru": 'ru'
};

Object.freeze(SupportedLanguagesEnum);

class l10n_helper {
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

const l10n_instance = new l10n_helper();
Object.freeze(l10n_instance);

export default l10n_instance;
