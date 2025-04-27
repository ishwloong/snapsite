import type { CategoryFormValues } from "@/components/main/categories/category-form"

// Mock data for a single category
const mockCategory = {
  id: "1",
  title: "Fashion Men, Women & Kid's",
  createdBy: "Seller",
  stock: "46233",
  tagId: "FS16276",
  description:
    "Aurora Fashion has once again captivated fashion enthusiasts with its latest collection, seamlessly blending elegance with comfort in a range of exquisite designs.",
  metaTitle: "Fashion Brand",
  metaTagKeyword: "fashion",
  metaDescription: "",
  image: "/images/fashion-category.png",
}

// Get a category by ID
export async function getCategoryById(id: string): Promise<CategoryFormValues | null> {
  // In a real app, this would be an API call
  // For demo purposes, we'll return mock data
  if (id === "new") return null

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return mockCategory
}

// Create a new category
export async function createCategory(data: CategoryFormValues): Promise<{ id: string }> {
  // In a real app, this would be an API call
  console.log("Creating category:", data)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Return a mock ID
  return { id: "new-category-id" }
}

// Update an existing category
export async function updateCategory(id: string, data: CategoryFormValues): Promise<void> {
  // In a real app, this would be an API call
  console.log(`Updating category ${id}:`, data)

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
