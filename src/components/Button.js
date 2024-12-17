import { Fugaz_One } from "next/font/google";

// Import Fugaz One font
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Button({ text, icon, dark, full }) {
  return (
    <button
      className={` mx-1  rounded-lg overflow-hidden duration-200 hover:opacity-60 border-1 border-solid 
      ${dark ? "text-white bg-primary" : "text-black bg-white"} ${
        full ? "" : ""
      }`}
    >
      <div className="flex justify-center items-center px-4 sm:px-4 py-2 sm:py-2 ">
        {icon && (
          <span className="">
            {typeof icon === "string" ? (
              <img src={icon} alt="icon" className="h-5 w-5 object-cover" />
            ) : (
              icon
            )}
          </span>
        )}
        <p className={`whitespace-nowrap `}>{text}</p>
      </div>
    </button>
  );
}
