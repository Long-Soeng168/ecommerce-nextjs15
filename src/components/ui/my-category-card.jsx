import React from "react";

const MyCategoryCard = ({category}) => {
  return (
    <div
      className="flex items-center p-4 transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="mr-4 text-4xl text-indigo-500 dark:text-indigo-400">
        {category.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {category.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {category.count}
        </p>
      </div>
    </div>
  );
};

export default MyCategoryCard;
