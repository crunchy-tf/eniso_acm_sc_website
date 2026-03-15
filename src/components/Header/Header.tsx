'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import {Sun, Moon, Menu, X, Globe} from 'lucide-react';
import styles from './Header.module.css';
import {useLocale} from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('calendar'), path: '/calendar' },
    { name: t('team'), path: '/team' },
    { name: t('news'), path: '/news' },
    { name: t('join'), path: '/join' },
    { name: t('contact'), path: '/contact' },
  ];

  const switchLanguage = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  if (!mounted) return null;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href={`/${locale}`} className={styles.logoLink}>
            <Image
              src="/images/logos/icon.png"
              alt="ACM ENISo logo"
              className={styles.logoIcon}
              width={44}
              height={44}
              priority
            />
            <div className={styles.logoLabel}>
              <span className={styles.logoLine}>ACM</span>
              <span className={styles.logoLine}>@ ENISo</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={`/${locale}${item.path}`}
              className={pathname === `/${locale}${item.path}` ? styles.active : ''}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button onClick={switchLanguage} className={styles.iconBtn}>
            <Globe size={20} />
            <span className={styles.langLabel}>{locale.toUpperCase()}</span>
          </button>
          
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={styles.iconBtn}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileToggle}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={`/${locale}${item.path}`}
              onClick={() => setIsOpen(false)}
              className={pathname === `/${locale}${item.path}` ? styles.active : ''}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
