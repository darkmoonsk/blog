import { cx } from "@/utils";
import Link from "next/link";

function Category({ link = "#", name, currentSlug, ...props }: any) {
  return (
    <Link
      href={link}
      className={cx(
        `inline-block, py-2 px-10 m-2
        rounded-full font-semibold border-2 border-solid
      border-dark hover:scale-105 transition-all ease duration-200`,
        props.className,
        currentSlug ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
}

export default Category;