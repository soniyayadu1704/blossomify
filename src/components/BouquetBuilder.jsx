import axios from "axios";
import { useEffect, useState } from "react";

export default function BouquetBuilder({
  selectedSize,
  setSelectedSize,
  selectedFlower,
  setSelectedFlower,
  selectedWrap,
  setSelectedWrap,
  selectedCard,
  setSelectedCard,
}) {
  const [flowers, setFlowers] = useState([]);
  const [wraps, setWraps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/flowers")
      .then(res => setFlowers(res.data));

    axios.get("http://localhost:3001/wrappings")
      .then(res => setWraps(res.data));
  }, []);

  const sizes = [
    {
      id: 1,
      name: "Small",
      price: 15,
      image: "/sizes/Small-Size.webp",
    },
    {
      id: 2,
      name: "Medium",
      price: 25,
      image: "/sizes/Medium-size.webp",
    },
    {
      id: 3,
      name: "Large",
      price: 35,
      image: "/sizes/Large-size.webp",
    },
  ];

  const cards = [
    {
      id: 1,
      image: "/cards/card1.avif",
    },
    {
      id: 2,
      image: "/cards/card2.jpg",
    },
    {
      id: 3,
      image: "/cards/letter.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-[30px] p-8">

      <h1 className="text-6xl font-bold mb-10">
        Build your Bouquet
      </h1>

      {/* SIZE */}

      <h3 className="text-3xl font-semibold mb-5">
        Size
      </h3>

      <div className="flex gap-5 mb-12">

        {sizes.map(size => (
          <div
            key={size.id}
            onClick={() => setSelectedSize(size)}
            className={`
              cursor-pointer
              ${selectedSize?.id === size.id
                ? "ring-4 ring-pink-400"
                : ""}
            `}
          >
            <img
              src={size.image}
              alt=""
              className="
              w-28
              h-28
              rounded-xl
              object-cover
              "
            />

            <p className="mt-2">
              {size.name}
            </p>
          </div>
        ))}

      </div>

      {/* FLOWERS */}

      <h3 className="text-3xl font-semibold mb-5">
        Flowers
      </h3>

      <div className="grid grid-cols-6 gap-5 mb-12">

        {flowers.map(flower => (
          <div
            key={flower.id}
            onClick={() =>
              setSelectedFlower(flower)
            }
            className={`
              cursor-pointer

              ${
                selectedFlower?.id === flower.id
                  ? "ring-4 ring-pink-400 rounded-xl"
                  : ""
              }
            `}
          >
            <img
              src={flower.image}
              alt=""
              className="
              w-full
              h-24
              object-cover
              rounded-xl
              "
            />

            <p className="mt-2 text-center">
              {flower.name}
            </p>
          </div>
        ))}

      </div>

      {/* PACKAGE */}

      <h3 className="text-3xl font-semibold mb-5">
        Package
      </h3>

      <div className="grid grid-cols-6 gap-5 mb-12">

        {wraps.map(wrap => (
          <div
            key={wrap.id}
            onClick={() => setSelectedWrap(wrap)}
            className={`
              cursor-pointer

              ${
                selectedWrap?.id === wrap.id
                  ? "ring-4 ring-pink-400 rounded-xl"
                  : ""
              }
            `}
          >
            <img
              src={wrap.image}
              alt=""
              className="
              h-24
              w-full
              object-cover
              rounded-xl
              "
            />

            <p className="mt-2 text-center">
              {wrap.name}
            </p>
          </div>
        ))}

      </div>

      {/* CARDS */}

      <h3 className="text-3xl font-semibold mb-5">
        Card
      </h3>

      <div className="grid grid-cols-3 gap-5">

        {cards.map(card => (
          <img
            key={card.id}
            src={card.image}
            alt=""
            onClick={() =>
              setSelectedCard(card)
            }
            className={`
            h-32
            w-full
            object-cover
            rounded-xl
            cursor-pointer

            ${
              selectedCard?.id === card.id
                ? "ring-4 ring-pink-400"
                : ""
            }
          `}
          />
        ))}

      </div>

    </div>
  );
}