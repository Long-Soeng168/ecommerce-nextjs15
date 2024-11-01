import Image from "next/image";

const MySocialLinkCard = ({imageUrl, link, title}) => {
  return (
    <>
      <a
        href={link}
        className="inline-flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-white hover:underline"
      >
        <Image width={50} height={50} alt={title} src={imageUrl} />
        {title}
      </a>
    </>
  );
};

export default MySocialLinkCard;
