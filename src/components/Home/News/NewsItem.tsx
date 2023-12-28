import { Link } from "@/navigation";

interface NewsItemProps {
  title: string
  url?: string
  locale?: "pt-br" | "es"
  text: string
}

function NewsItem({title, url = "#", locale, text}: NewsItemProps) {
  return (
    <li >
      <h3 className="
        text-xl font-bold
      ">• {title}</h3>
      <Link 
        href={url} 
        locale={locale} 
        className="
          ml-5
          text-blue-600 font-semibold bg-gradient-to-r from-accent to-accent 
          dark:from-accentDark/50 dark:to-accentDark/50
          bg-[length:0px_4px] hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat 
          transition-[background-size] duration-500
        ">
           ⁃ {text}
      </Link>
    </li>
  );
}

NewsItem.defaultProps = {
  locale: "pt-br"
}

export default NewsItem;