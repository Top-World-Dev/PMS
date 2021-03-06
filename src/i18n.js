import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./locales/en.json";
import bn from "./locales/bn.json";

Vue.use(VueI18n);

function loadLocaleMessages() {
  // const locales = require.context(
  //   "./locales",
  //   true,
  //   /[A-Za-z0-9-_,\s]+\.json$/i
  // );

  const locales = {
    "en.json": en,
    "bn.json": bn
  };

  const messages = {};
  Object.keys(locales).forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales[key];
    }
  });
  return messages;
}

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages()
});
