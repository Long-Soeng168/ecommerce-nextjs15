"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BookUser, ChevronDown, CornerDownRight } from "lucide-react";
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
              <CollapsibleContent className="w-full pl-3 ml-4 text-[16px] border-l-2 border-primary">
                <ul>
                  {category.sub_categories?.map((subCategory) => (
                    <li
                      key={subCategory.id}
                      className="cursor-pointer hover:underline"
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
