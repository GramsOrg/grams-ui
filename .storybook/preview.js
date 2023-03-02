import i18n from './i18next';
import 'semantic-ui-css/semantic.min.css';

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    ar: 'Arabic'
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
