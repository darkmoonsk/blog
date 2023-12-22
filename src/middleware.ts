import createMiddleware from "next-intl/middleware";
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  defaultLocale: "pt-br",
  locales,
  localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-br|es)/:path*"],
};
