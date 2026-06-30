export default function ProductCard({
  flower,
  setSelectedFlower,
}) {
  return (
    <div
      className="
      bg-white/70
      backdrop-blur-xl

      rounded-[30px]

      overflow-hidden

      shadow-[0_20px_60px_rgba(0,0,0,0.08)]

      hover:-translate-y-2
      transition-all
      duration-500
    "
    >
      <img
        src={flower.image}
        alt={flower.name}
        className="
        h-[320px]
        w-full
        object-cover
      "
      />

      <div className="p-6">
        <p className="text-black/50">
          {flower.category || "Flower"}
        </p>

        <h3
          className="
          text-3xl
          font-light
          mt-2
        "
        >
          {flower.name}
        </h3>

        <div
          className="
          flex
          items-center
          justify-between

          mt-6
        "
        >
          <p className="font-medium">
            ${flower.price}
          </p>

          <button
            onClick={() =>
              setSelectedFlower?.(flower)
            }
            className="
            px-5
            py-3

            rounded-full

            bg-black
            text-white

            hover:scale-105

            transition
          "
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}