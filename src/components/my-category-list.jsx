import React from "react";
import { Brush, User, Briefcase, BookOpen } from "lucide-react";
import MyCategoryCard from "./ui/my-category-card";
import { getCategories } from "@/services/categories-services";

const MyCategoryList = async () => {
  const categories = await getCategories({
    limit: 6,
    orderBy: "books_count",
    orderDir: "desc",
  });

  const colors = [
    "#60a5fa",
    "#3b82f6",
    "#818cf8",
    "#6366f1",
    "#a78bfa",
    "#8b5cf6",
  ];
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {categories?.map((category, index) => (
        <MyCategoryCard
          category={category}
          key={category.id}
          bgHoverColor={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default MyCategoryList;
