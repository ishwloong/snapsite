"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit2Icon, EyeIcon, PlusIcon, TrashIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const categoryData = [
  {
    id: 1,
    name: "Fashion Men, Women & Kid's",
    image: "/images/fashion-category.png",
    priceRange: "$80 to $400",
    createdBy: "Seller",
    productId: "FS16276",
    stock: 46233,
  },
  {
    id: 2,
    name: "Women Hand Bag",
    image: "/images/handbag-category.png",
    priceRange: "$120 to $500",
    createdBy: "Admin",
    productId: "HB73029",
    stock: 2739,
  },
  {
    id: 3,
    name: "Cap and Hat",
    image: "/images/cap-category.png",
    priceRange: "$50 to $200",
    createdBy: "Admin",
    productId: "CH492-9",
    stock: 1829,
  },
  {
    id: 4,
    name: "Electronics Headphone",
    image: "/images/headphone-category.png",
    priceRange: "$100 to $700",
    createdBy: "Seller",
    productId: "EC23818",
    stock: 1902,
  },
  {
    id: 5,
    name: "Foot Wares",
    image: "/images/footwear-category.png",
    priceRange: "$70 to $400",
    createdBy: "Seller",
    productId: "FW11009",
    stock: 2733,
  },
  {
    id: 6,
    name: "Wallet Categories",
    image: "/images/wallet-category.png",
    priceRange: "$120 to $300",
    createdBy: "Admin",
    productId: "WL38299",
    stock: 890,
  },
  {
    id: 7,
    name: "Electronics Watch",
    image: "/images/watch-category.png",
    priceRange: "$60 to $400",
    createdBy: "Seller",
    productId: "SM37817",
    stock: 250,
  },
  {
    id: 8,
    name: "Eye Ware & Sunglass",
    image: "/images/eyewear-category.png",
    priceRange: "$70 to $500",
    createdBy: "Admin",
    productId: "EG37878",
    stock: 1900,
  },
];

export function CategoryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectAll = () => {
    if (selectedItems.length === categoryData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(categoryData.map((item) => item.id));
    }
  };

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 lg:px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">All Categories List</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="this-month">
            <SelectTrigger className="h-9 w-[130px]">
              <SelectValue placeholder="This Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Link href="/categories/create">
            <Button className="flex items-center gap-1">
              <PlusIcon className="h-4 w-4" />
              Add Category
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedItems.length === categoryData.length}
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Categories</TableHead>
              <TableHead>Starting Price</TableHead>
              <TableHead>Create by</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Product Stock</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoryData.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(category.id)}
                    onCheckedChange={() => toggleSelectItem(category.id)}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-md">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                </TableCell>
                <TableCell>{category.priceRange}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      category.createdBy === "Admin"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-green-50 text-green-600"
                    }
                  >
                    {category.createdBy}
                  </Badge>
                </TableCell>
                <TableCell>{category.productId}</TableCell>
                <TableCell>{category.stock.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <Edit2Icon className="h-4 w-4 text-blue-500" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                    >
                      <TrashIcon className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">8</span> of{" "}
          <span className="font-medium">24</span> categories
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={
              currentPage === 1 ? "bg-primary text-primary-foreground" : ""
            }
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={
              currentPage === 2 ? "bg-primary text-primary-foreground" : ""
            }
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={
              currentPage === 3 ? "bg-primary text-primary-foreground" : ""
            }
            onClick={() => setCurrentPage(3)}
          >
            3
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            disabled={currentPage === 3}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
