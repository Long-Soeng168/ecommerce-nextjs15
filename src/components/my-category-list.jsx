import React from "react";
import { Brush, User, Briefcase, BookOpen } from "lucide-react";
import MyCategoryCard from "./ui/my-category-card";

const categories = [
  { icon: <Brush />, title: "Art & Photography", count: "1200+ books" },
  { icon: <User />, title: "Biographies", count: "1200+ books" },
  { icon: <Briefcase />, title: "Business & Money", count: "1200+ books" },
  { icon: <BookOpen />, title: "Children's Book", count: "1200+ books" },
];

const MyCategoryList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {categories.map((category) => (
        <MyCategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};

export default MyCategoryList;
