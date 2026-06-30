export default function PriceCard({
  total,
  message,
  setMessage,
  reset,
}) {
  return (
    <div className="bg-white rounded-[25px] p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-4xl font-bold">
          Price
        </h2>

        <h2 className="text-5xl font-bold">
          €{total}
        </h2>

      </div>

      <textarea
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Your message on the card"
        className="
        w-full
        h-[150px]
        border-2
        rounded-2xl
        p-4
        "
      />

      <div className="flex gap-5 mt-6">

        <button
          className="
          bg-black
          text-white
          px-8
          py-4
          rounded-xl
          "
        >
          Add to cart
        </button>

        <button
          onClick={reset}
          className="
          border-2
          px-8
          py-4
          rounded-xl
          "
        >
          Make a new Bouquet
        </button>

      </div>

    </div>
  );
}