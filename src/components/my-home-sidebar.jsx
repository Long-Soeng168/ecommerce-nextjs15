"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ArrowRight,
  BookUser,
  ChevronDown,
  CornerDownRight,
  Minus,
} from "lucide-react";
import Image from "next/image";

export function MyHomeSidebar({ categories }) {
  const IMAGE_CATE_URL = "https://isbn-nlc.org/assets/images/categories/";

  return (
    <div className="w-64 space-y-1.5">
      {categories.length > 0 &&
        categories.map((category) => (
          <Collapsible key={category.id}>
            <div className="flex items-center justify-between cursor-pointer">
              <div className="hover:bg-primary/10 items-center flex gap-1 p-0.5 w-full text-[16px] hover:underline">
                <Image
                  className={`aspect-square p-0.5 bg-white dark:bg-gray-100 object-contain`}
                  width={24}
                  height={24}
                  src={IMAGE_CATE_URL + category.image}
                  alt=""
                />
                <span>{category.name}</span>
              </div>
              {category.sub_categories.length > 0 && (
                <CollapsibleTrigger className="p-0.5 text-[16px] px-2 hover:bg-primary/10">
                  <ChevronDown />
                </CollapsibleTrigger>
              )}
            </div>
            {category.sub_categories.length > 0 && (
              <CollapsibleContent className="w-full ml-4 text-[14px] border-l-2 border-primary">
                <ul className="py-2 space-y-2">
                  {category.sub_categories?.map((subCategory) => (
                    <li
                      key={subCategory.id}
                      className="relative pl-3 max-w-[80%] cursor-pointer hover:underline"
                    >
                      {subCategory.name}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            )}
          </Collapsible>
        ))}
    </div>
  );
}
