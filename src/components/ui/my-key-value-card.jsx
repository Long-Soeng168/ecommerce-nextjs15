import React from "react";

const MyKeyValueCard = ({ title, value }) => {
  return (
    <div className="flex nowrap">
      <p className="w-[123px] uppercase tracking-wide text-sm font-semibold border-r border-border pr-5 mr-5 flex-shrink-0">
        {title}
      </p>
      <p className="text-sm ">{value}</p>
    </div>
  );
};

export default MyKeyValueCard;
