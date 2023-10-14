import { slug } from "github-slugger";
import Category from "./Category";

// interface CategoriesProps {
//   categories: string[];
//   currentSlug: string;
// }

function Categories({ categories, currentSlug }: any) {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start justify-center
      font-medium 
    ">
      {categories.map((cat: string) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          currentSlug={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
}

export default Categories;
