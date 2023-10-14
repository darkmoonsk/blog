import Link from "next/link"
import { SunIcon } from "../Icons"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"
import { useState } from "react";

interface MenuProps {
  isMobile?: boolean
}

function Menu({ isMobile } : MenuProps ) {
  const [mode, setMode] = useThemeSwitch();
  const menuHidden = isMobile ? "flex" : "hidden"

  return (
    <nav
        className={`
          items-center gap-2 w-max py-3 px-8 bg-light/80 backdrop-blur-sm
          border border-solid border-dark rounded-full 
          font-medium capitalize ${menuHidden} lg:flex
          fixed top-6 right-1/2 translate-x-1/2 z-50
      `}
      >
        <Link href="/" className="mr-2">Inicio</Link>
        <Link href="/about"className="mx-2">Sobre</Link>
        <Link href="/contact" className="mx-2">Contato</Link>
        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          <SunIcon className />
        </button>
      </nav>
  )
}

export default Menu