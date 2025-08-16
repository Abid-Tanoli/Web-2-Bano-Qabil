const products = [
  {
    id: 1,
    name: "Air Conditioner",
    brand: "Kenwood",
    image: "/images/Kenwood-Air-Conditioner.jpeg",
    price: 165000,
  },
  {
    id: 2,
    name: "Refrigerator",
    brand: "Dawlance",
    image: "/images/Dawlance-Refrigerator.jpeg",
    price: 120000,
  },
  {
    id: 3,
    name: "Washing Machine",
    brand: "Haier",
    image: "/images/Haier-Washing-Machine.jpeg",
    price: 65000,
  },
  {
    id: 4,
    name: "Microwave Oven",
    brand: "Dawlance",
    image: "/images/Dawlance-Microwave-Oven.jpeg",
    price: 42000,
  },
  {
    id: 5,
    name: "Deep Freezer",
    brand: "Haier",
    image: "/images/Haier-Deep-Freezer.jpeg",
    price: 85000,
  },
  {
    id: 6,
    name: "Water Dispenser",
    brand: "Homage",
    image: "/images/Homage-Water-Dispenser.jpeg",
    price: 36000,
  },
  {
    id: 7,
    name: "Floor Stand",
    brand: "Kenwood",
    image: "/images/Kenwwod-floor-Stand.jpeg",
    price: 360000,
  },
  {
    id: 8,
    name: "Washing Machine",
    brand: "Homage",
    image: "/images/Homage-Washing-Machine.jpeg",
    price: 25000,
  },
  {
    id: 9,
    name: "Dish Washer",
    brand: "Dawlance",
    image: "/images/Dawlance-Dish-Washer.jpeg",
    price: 175000,
  },
];

const CardList = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-amber-200 to-green-400 min-h-screen p-6 mt-10 w-380 ">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Pakistan Assembled Home Appliances
      </h1>
      <br className="bg-black h-20 w-20" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-amber-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-8xl transition transform hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1 hover:bg-white">
                {item.name}
              </h2>
              <p className="text-sm text-blue-900 font-bold mb-2">Brand: {item.brand}</p>
              <p className="text-lg font-bold text-green-600 mb-2">
                PKR {item.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

};

export default CardList;
