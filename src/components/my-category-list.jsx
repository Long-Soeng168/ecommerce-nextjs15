import React from "react";
import { Brush, User, Briefcase, BookOpen } from "lucide-react";
import MyCategoryCard from "./ui/my-category-card";
import { getCategories } from "@/services/categories-services";

const MyCategoryList = async () => {
  const categories = await getCategories({ limit: 4 });
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {categories?.map((category) => (
        <MyCategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};

export default MyCategoryList;
