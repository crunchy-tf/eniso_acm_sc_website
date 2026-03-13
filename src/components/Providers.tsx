'use client';

import {ThemeProvider} from 'next-themes';
import {NextIntlClientProvider} from 'next-intl';

export function Providers({children, locale, messages}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
