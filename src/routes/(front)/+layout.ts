import { addTranslations, setLocale, setRoute } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data }) => {
  // console.log("🚀 ~ file: +layout.ts:5 ~ constload:LayoutLoad= ~ data:", data)
  try {
    const { i18n, translations } = data;
    if (!i18n) return
    const { locale, route } = i18n;

    addTranslations(translations);

    await setRoute(route);
    await setLocale(locale);

    return i18n;
  } catch (error) {
    console.log("🚀 ~ file: +layout.ts:16 ~ constload:LayoutLoad= ~ error:", error)
  }
};