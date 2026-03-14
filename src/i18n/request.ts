import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'fr'];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = String(await requestLocale);
  
  if (!locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'Africa/Tunis'
  };
});
