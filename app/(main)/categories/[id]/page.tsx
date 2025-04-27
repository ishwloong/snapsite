"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  CategoryForm,
  type CategoryFormValues,
} from "@/components/main/categories/category-form";
import { getCategoryById, updateCategory } from "@/services/category";

export default function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [category, setCategory] = useState<CategoryFormValues | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategory() {
      try {
        const data = await getCategoryById(params.id);
        setCategory(data);
      } catch (error) {
        console.error("Error loading category:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCategory();
  }, [params.id]);

  const handleSubmit = async (data: CategoryFormValues) => {
    try {
      await updateCategory(params.id, data);
      router.push("/categories");
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <p>Loading category data...</p>
      </div>
    );
  }

  return (
    <CategoryForm
      initialData={category || undefined}
      isNew={false}
      onSubmit={handleSubmit}
    />
  );
}
