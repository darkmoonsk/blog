import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['pt-br', 'es'] as const;
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});