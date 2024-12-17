import Card from "@/components/Card";

const DataList = () => {
    const details = [
        {
          image: "/images/pos/product2.jpg",
          title: "Hario V60 Ceramic Coffee Dripper",
          quantity: "2",
          price: "25.00",
          discount: 0,
        },
        {
          image: "/images/pos/product4.png",
          title: "Breville Barista Express Espresso Machine",
          quantity: "1",
          price: "699.00",
          discount: 10,
        },
        {
          image: "/images/pos/product5.png",
          title: "Chemex Classic Series Coffeemaker",
          quantity: "2",
          price: "45.00",
          discount: 0,
        },
        {
          image: "/images/pos/product3.webp",
          title: "Baratza Encore Coffee Grinder",
          quantity: "1",
          price: "149.00",
          discount: 0,
        },
        {
          image: "/images/pos/book3.jpg",
          title: "Fellow Stagg Pour-Over Kettle",
          quantity: "1",
          price: "79.00",
          discount: 10,
        },
        {
          image: "/images/pos/book1.jpg",
          title: "AeroPress Coffee and Espresso Maker",
          quantity: "2",
          price: "35.00",
          discount: 5,
        },
        {
          image: "/images/pos/book6.jpg",
          title: "OXO Brew Adjustable Temperature Kettle",
          quantity: "1",
          price: "99.00",
          discount: 10,
        },
        {
          image: "/images/pos/product4.png",
          title: "Breville Smart Grinder Pro",
          quantity: "1",
          price: "199.00",
          discount: 0,
        },
        {
          image: "/images/pos/product5.png",
          title: "Kalita Wave 185 Dripper",
          quantity: "2",
          price: "30.00",
          discount: 5,
        },
        {
          image: "/images/pos/product3.webp",
          title: "Fellow Atmos Coffee Canister",
          quantity: "1",
          price: "30.00",
          discount: 0,
        },
        {
          image: "/images/pos/book3.jpg",
          title: "Hario Skerton Pro Ceramic Coffee Mill",
          quantity: "1",
          price: "50.00",
          discount: 5,
        },
        {
          image: "/images/pos/book1.jpg",
          title: "Varia Multi Brewer",
          quantity: "2",
          price: "199.00",
          discount: 0,
        },
        {
          image: "/images/pos/book6.jpg",
          title: "Timemore Nano Scale Black Mirror",
          quantity: "1",
          price: "90.00",
          discount: 0,
        },
      ];
      

  return (
    <div className="grid items-start justify-start w-full grid-cols-2 gap-3 px-2 pr-4 my-2 mb-10 sm:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4">
      {details.map((item, index) => (
        <Card
          key={index} // Use a unique key, such as `index` or a unique property from the `item` object
          image={item.image}
          title={item.title}
          price={item.price}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default DataList;
