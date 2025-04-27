
import { CategoryCards } from "@/components/main/categories/category-cards"
import { CategoryTable } from "@/components/main/categories/category-table"

export default function CategoriesPage() {
  return ( 
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <CategoryCards />
              <CategoryTable />
            </div>
          </div>
        </div>
  )
}
