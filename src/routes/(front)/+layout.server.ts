import { defaultLocale, loadTranslations, translations } from '$lib/translations';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url, cookies }) => {
  const { pathname, searchParams } = url;

  console.log("searchParams.get('lang')=>", searchParams.get('lang'));
  console.log("cookies.get('locale')=>", cookies.get('locale'));
  console.log("defaultLocale", defaultLocale);


  const initLocale = searchParams.get('lang') || cookies.get('locale') || defaultLocale;
  console.log("🚀 ~ file: +layout.server.ts:34 ~ constload:ServerLoad= ~ initLocale:", initLocale)

  cookies.set('locale', initLocale);

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {
    i18n: { locale: initLocale, route: pathname },
    translations: translations.get(), // `translations` on server contain all translations loaded by different clients
  };
};
