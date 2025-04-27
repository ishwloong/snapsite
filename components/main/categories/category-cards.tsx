import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Fashion Categories",
    image: "/images/fashion-category.png",
    url: "/categories/fashion",
  },
  {
    id: 2,
    name: "Electronics Headphone",
    image: "/images/headphone-category.png",
    url: "/categories/electronics-headphone",
  },
  {
    id: 3,
    name: "Foot Wares",
    image: "/images/footwear-category.png",
    url: "/categories/foot-wares",
  },
  {
    id: 4,
    name: "Eye Ware & Sunglass",
    image: "/images/eyewear-category.png",
    url: "/categories/eye-ware",
  },
];

export function CategoryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
      {categories.map((category) => (
        <Link key={category.id} href={category.url}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-[3/2] w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-medium text-gray-700">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
