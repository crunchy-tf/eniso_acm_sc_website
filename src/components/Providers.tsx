'use client';

import {ThemeProvider} from 'next-themes';
import {NextIntlClientProvider} from 'next-intl';
import type { AbstractIntlMessages } from 'use-intl';

export function Providers({children, locale, messages}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Africa/Tunis"
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
