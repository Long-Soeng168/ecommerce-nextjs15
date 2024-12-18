import Card from "@/components/Card";

const DataList = async () => {
  const response = await fetch("https://admin.thnal.org/api/books?perPage=100");
  let products;
  if (response.status == 200) {
    const result = await response.json();
    products = result.data;
  }
  return (
    <div className="grid items-start justify-start w-full grid-cols-2 gap-3 px-2 pr-4 my-2 mb-10 sm:grid-cols-3 xl:grid-cols-6 lg:grid-cols-4">
      {products.map((item, index) => (
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
