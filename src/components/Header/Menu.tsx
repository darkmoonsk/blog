import { Link } from "@/navigation"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { cx, translations } from "@/utils";
import dynamic from 'next/dynamic';
import { getLocale } from "next-intl/server";
import { useLocale } from "next-intl";

const SunIcon = dynamic(() => import('@/components/Icons/SunIcon'), {
  ssr: false,
});
const MoonIcon = dynamic(() => import('@/components/Icons/MoonIcon'), {
  ssr: false,
});

interface MenuProps {
  isActive?: boolean
}

async function Menu({ isActive } : MenuProps ) {
  const [mode, setMode] = useThemeSwitch();
  const menuHidden = isActive ? "flex" : "hidden"
  const locale = useLocale();
  const t = translations(locale).Menu;

  const toggleTheme = () => {
    const result = mode === "light" ? "dark" : "light"
    if(typeof setMode === "function") {
      setMode(result);
    }
  }

  return (
    <nav
        className={`
          items-center gap-2 w-max py-3 px-8 bg-galaxy bg-[length:400px_94px] object-center backdrop-blur-sm
          border border-solid border-dark/50 rounded-full
          font-medium text-light capitalize ${menuHidden} lg:flex
          fixed top-6 right-1/2 translate-x-1/2 z-50
      `}
      style={{
        textShadow: "6px 3px 10px rgba(0, 0, 0, 1)"
      }}
      >
        <Link href="/" className="mr-2">{t.home}</Link>
        <Link href="/about"className="mx-2">{t.about}</Link>
        <Link href="/contact" className="mx-2">{t.contact}</Link>
        <button onClick={toggleTheme}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light":
          "bg-light text-dark"
          )}
        >
          <>
          {
            
            mode === "light" ?
            <SunIcon /> :
            <MoonIcon />
          }
          </>
        </button>
      </nav>
  )
}

export default Menu