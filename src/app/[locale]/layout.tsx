import {getMessages} from 'next-intl/server';
import {Providers} from '@/components/Providers';
import '../globals.css';

export const metadata = {
  title: 'ACM ENISo',
  description: 'ACM ENISo Student Chapter',
  icons: {
    icon: '/images/logos/icon.png',
    shortcut: '/images/logos/icon.png',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
