import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocale can be a full locale like "en-US" or "fr-FR".
  // Normalize to the base language so the app works for common browser locales.
  const requested = (await requestLocale) ?? 'en';
  const locale = String(requested).split('-')[0];

  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'Africa/Tunis'
  };
});
