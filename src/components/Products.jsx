import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ setSelectedFlower }) {
  const [flowers, setFlowers] = useState([]);
  const [bouquets, setBouquets] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/flowers")
      .then((res) => setFlowers(res.data));

    axios
      .get("http://localhost:3001/bouquets")
      .then((res) => setBouquets(res.data));
  }, []);

  const filteredFlowers = flowers.filter((flower) =>
    flower.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredBouquets = bouquets.filter((bouquet) =>
    bouquet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="products"
      className="
      bg-[#ebe6dc]
      px-6
      md:px-14
      py-24
    "
    >
      {/* HEADER */}
      <div
        className="
        flex
        flex-col
        md:flex-row
        justify-between
        gap-6
        mb-20
      "
      >
        <div>
          <p
            className="
            uppercase
            tracking-[0.3em]
            text-black/50
          "
          >
            Collection
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-light
            mt-3
          "
          >
            Floral Products
          </h2>
        </div>

        <input
          type="text"
          placeholder="Search Flowers or Bouquets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          px-6
          py-4
          rounded-full

          bg-white/70

          border
          border-black/10

          outline-none

          md:w-[340px]
        "
        />
      </div>

      {/* FLOWERS */}
      <div className="mb-24">
        <h3
          className="
          text-4xl
          md:text-5xl
          font-light
          mb-10
        "
        >
          Fresh Flowers
        </h3>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {filteredFlowers.map((flower) => (
            <ProductCard
              key={flower.id}
              flower={flower}
              setSelectedFlower={setSelectedFlower}
            />
          ))}
        </div>
      </div>

      {/* BOUQUETS */}
      <div>
        <h3
          className="
          text-4xl
          md:text-5xl
          font-light
          mb-10
        "
        >
          Luxury Bouquets
        </h3>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {filteredBouquets.map((bouquet) => (
            <ProductCard
              key={bouquet.id}
              flower={bouquet}
              setSelectedFlower={setSelectedFlower}
            />
          ))}
        </div>
      </div>
    </section>
  );
}