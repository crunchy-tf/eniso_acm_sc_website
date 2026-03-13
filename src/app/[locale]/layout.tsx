import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Providers} from '@/components/Providers';
import '../globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
