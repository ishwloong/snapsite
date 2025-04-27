"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloudIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema with Zod
export const categoryFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Category title must be at least 3 characters" }),
  createdBy: z
    .string()
    .min(1, { message: "Please select who created this category" }),
  stock: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Stock must be a valid number",
  }),
  tagId: z.string().min(1, { message: "Tag ID is required" }),
  description: z.string().optional(),
  metaTitle: z.string().optional(),
  metaTagKeyword: z.string().optional(),
  metaDescription: z.string().optional(),
  image: z.any().optional(),
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;

interface CategoryFormProps {
  initialData?: CategoryFormValues;
  isNew?: boolean;
  onSubmit: (data: CategoryFormValues) => Promise<void>;
}

export function CategoryForm({
  initialData,
  isNew = true,
  onSubmit,
}: CategoryFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: initialData || {
      title: "",
      createdBy: "",
      stock: "",
      tagId: "",
      description: "",
      metaTitle: "",
      metaTagKeyword: "",
      metaDescription: "",
    },
  });

  // Set image preview when initialData changes
  useEffect(() => {
    if (initialData?.image && typeof initialData.image === "string") {
      setImagePreview(initialData.image);
    }
  }, [initialData]);

  // Handle form submission
  const handleSubmit = async (data: CategoryFormValues) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);

    // Update form value
    form.setValue("image", file);
  };

  // Handle drag and drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);

    // Update form value
    form.setValue("image", file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left column - Preview */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-md border bg-muted">
                    {imagePreview ? (
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Category preview"
                        width={300}
                        height={200}
                        className="h-[200px] w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-[200px] items-center justify-center bg-muted">
                        <p className="text-sm text-muted-foreground">
                          No image selected
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium">
                    {form.watch("title") || "Category Title"}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Created By:</p>
                      <p>{form.watch("createdBy") || "Not specified"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Stock:</p>
                      <p>{form.watch("stock") || "0"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ID:</p>
                      <p>{form.watch("tagId") || "Not specified"}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      {isNew ? "Create Category" : "Save Changes"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.push("/categories")}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Form */}
          <div className="space-y-6 col-span-2">
            {/* Image Upload */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-medium">
                  Add Thumbnail Photo
                </h3>
                <div
                  className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                >
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <CloudIcon className="mb-2 h-10 w-10 text-blue-500" />
                  <p className="mb-1 text-center text-lg font-medium">
                    Drop your images here, or{" "}
                    <span className="text-blue-500">click to browse</span>
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                    allowed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* General Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-medium">
                  General Information
                </h3>
                <div className="grid gap-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter category title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="createdBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Created By</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select creator" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Admin">Admin</SelectItem>
                              <SelectItem value="Seller">Seller</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="stock"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Stock</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter stock quantity"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="tagId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tag ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter tag ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter category description"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Meta Options */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-medium">Meta Options</h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="metaTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter meta title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="metaTagKeyword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Tag Keyword</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter meta keywords"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type description"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/categories")}
              >
                Cancel
              </Button>
              <Button type="submit">Save Change</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
