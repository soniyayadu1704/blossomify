import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ setSelectedFlower }) {
  const [flowers, setFlowers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/flowers")
      .then((res) => {
        setFlowers(res.data);
      });
  }, []);

  const filteredFlowers = flowers.filter((flower) =>
    flower.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="products"
      className="
      bg-[#ebe6dc]
      px-6
      md:px-14
      py-28
    "
    >
      {/* TOP */}
      <div
        className="
        flex
        flex-col
        md:flex-row
        justify-between
        gap-6
        mb-16
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

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search flowers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          px-6
          py-4
          rounded-full
          bg-white/60
          border
          border-black/10
          outline-none
          w-full
          md:w-[300px]
        "
        />
      </div>

      {/* GRID */}
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
    </section>
  );
}