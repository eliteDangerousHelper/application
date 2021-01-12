import { Locales } from "./locales";
import optionsStore from "../store/options";

import en from "./en";
import fr from "./fr";

export const messages = {
  [Locales.EN]: en,
  [Locales.FR]: fr
};

export const defaultLocale = optionsStore.state.lang;
