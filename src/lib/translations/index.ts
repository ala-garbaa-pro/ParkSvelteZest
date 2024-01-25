import i18n, { type Config } from 'sveltekit-i18n';
import lang from './lang.json';

const config: Config = {
  translations: {
    nl: { lang },
    fr: { lang },
    en: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'menu',
      loader: async () => (await import('./en/menu.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'en',
      key: 'booking',
      routes: ['/booking'],
      loader: async () => (await import('./en/booking.json')).default,
    },
    {
      locale: 'en',
      key: 'error',
      routes: ['error'],
      loader: async () => (await import('./en/error.json')).default,
    },



    {
      locale: 'nl',
      key: 'menu',
      loader: async () => (await import('./nl/menu.json')).default,
    },

    {
      locale: 'nl',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./nl/home.json')).default,
    },
    {
      locale: 'nl',
      key: 'booking',
      routes: ['/booking'],
      loader: async () => (await import('./nl/booking.json')).default,
    },
    {
      locale: 'nl',
      key: 'error',
      routes: ['error'],
      loader: async () => (await import('./nl/error.json')).default,
    },


    {
      locale: 'fr',
      key: 'menu',
      loader: async () => (await import('./fr/menu.json')).default,
    },

    {
      locale: 'fr',
      key: 'home',
      routes: ['', '/'],
      loader: async () => (await import('./fr/home.json')).default,
    },
    {
      locale: 'fr',
      key: 'booking',
      routes: ['/booking'],
      loader: async () => (await import('./fr/booking.json')).default,
    },
    {
      locale: 'fr',
      key: 'error',
      routes: ['error'],
      loader: async () => (await import('./fr/error.json')).default,
    },
  ],
};

export const defaultLocale = 'fr';

const x = new i18n(config);






export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = x;

// console.log("locale==>", locale);

try {

  // Translations logs
  loading.subscribe(async ($loading) => {
    if ($loading) {
      console.log('Loading translations...');

      await loading.toPromise();
      console.log('Updated translations', translations.get());
    }
  });
} catch (error) {
  console.log("🚀 ~ file: index.ts:106 ~ error:", error)

}