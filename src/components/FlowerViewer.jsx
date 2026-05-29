import { Link } from "react-router-dom";

export default function FlowerViewer() {
  return (
    <section
      id="viewer"

      className="
      min-h-screen

      bg-[#ebe6dc]

      flex
      items-center

      px-6
      md:px-10

      overflow-hidden
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        w-full

        grid
        md:grid-cols-2

        items-center
        gap-16
      "
      >
        {/* LEFT SIDE */}
        <div>
          <p
            className="
            uppercase
            tracking-[0.3em]
            text-black/40
            mb-6
          "
          >
            Luxury Floral Studio
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            leading-[1]
            font-light
          "
          >
            Send your{" "}
            <span
              className="
              text-pink-400
              italic
              font-serif
            "
            >
              flowers
            </span>{" "}
            like you mean it.
          </h2>

          <p
            className="
            mt-10
            text-black/60
            leading-relaxed
            text-lg
            max-w-xl
          "
          >
            Flowers are meant to create memories for your loved ones with
            timeless elegance and handcrafted beauty.
          </p>

          {/* BUTTON */}
          <Link to="/create-bouquet">
            <button
              className="
              mt-12

              px-8
              py-5

              rounded-full

              bg-white/20

              backdrop-blur-2xl

              border
              border-white/30

              shadow-[0_10px_40px_rgba(0,0,0,0.12)]

              hover:scale-105
              transition

              text-black
              text-lg
            "
            >
              Create Bouquet
            </button>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
  relative

  flex
  justify-end
  items-end

  h-[700px]
  w-full

  overflow-hidden
"
        >
          {/* SOFT GLOW */}
          <div
            className="
    absolute

    bottom-0
    right-0

    h-[500px]
    w-[500px]

    rounded-full

    bg-pink-300/30

    blur-[140px]
  "
          />

          {/* GRADIENT LIGHT */}
          <div
            className="
    absolute

    bottom-[-100px]
    right-[-100px]

    h-[600px]
    w-[600px]

    rounded-full

    bg-gradient-to-tr
    from-pink-200/40
    to-transparent

    blur-[80px]
  "
          />

          {/* FLOWER IMAGE */}
          <img
            src="https://png.pngtree.com/png-vector/20250117/ourmid/pngtree-a-bouquet-of-purple-tulips-mother-cultured-encouragement-png-image_15253426.png"
            alt=""
            className="
    relative
    z-10

    w-[620px]
    md:w-[760px]

    object-contain

   translate-x-1
    translate-y-1

    drop-shadow-[0_40px_120px_rgba(0,0,0,0.18)]

    animate-[float_6s_ease-in-out_infinite]

    mix-blend-multiply
  "
          />
        </div>
      </div>
    </section>
  );
}