import MySocialLinkCard from "./ui/my-social-link-card";

const items = [
  {
    id: 1,
    title: "Telegram",
    image: "/images/icons/telegram.png",
    link: "#",
  },
  {
    id: 2,
    title: "Facebook",
    image: "/images/icons/facebook.png",
    link: "#",
  },
  {
    id: 3,
    title: "Youtube",
    image: "/images/icons/youtube.png",
    link: "#",
  },
];

const MyFooter = () => {
  return (
    <footer className="px-4 py-8 mt-20 text-white bg-gray-800 dark:bg-black dark:border-t">
      <div className="flex flex-col items-start justify-start max-w-screen-xl gap-8 px-2 mx-auto sm:flex-row">
        <div className="flex-1 pr-10">
          <h4 className="mb-2 text-lg font-semibold">Information</h4>
          <p>Phnom Penh, Cambodia</p>
          <p>010775589</p>
          <p>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</p>
        </div>
        <div className="flex flex-col flex-1 sm:pl-10 sm:items-center">
          <h4 className="mb-2 text-lg font-semibold">Social Media</h4>
          <ul className="space-x-4">
            {items.map((item) => (
              <MySocialLinkCard
                imageUrl={item.image}
                title={item.title}
                link={item.link}
                key={item.id}
              />
            ))}
            <li></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© Corasoft | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default MyFooter;
