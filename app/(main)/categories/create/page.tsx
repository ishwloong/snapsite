"use client";

import { useRouter } from "next/navigation";

import {
  CategoryForm,
  type CategoryFormValues,
} from "@/components/main/categories/category-form";
import { createCategory } from "@/services/category";

export default function CreateCategoryPage() {
  const router = useRouter();

  const handleSubmit = async (data: CategoryFormValues) => {
    try {
      await createCategory(data);
      router.push("/categories");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return <CategoryForm isNew={true} onSubmit={handleSubmit} />;
}
