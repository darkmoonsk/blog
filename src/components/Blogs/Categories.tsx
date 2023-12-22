import { slug } from "github-slugger";
import Category from "./Category";

interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}

function Categories({ categories, currentSlug }: CategoriesProps) {
  
  return (
    <div className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex flex-wrap items-start justify-center
      font-medium 
    ">
      {categories.map((cat: string) => (
        <Category
          key={cat}
          link={`${cat}`}
          name={cat}
          currentSlug={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
}

export default Categories;
