import { Link } from "react-router-dom";

export default function FlowerViewer() {
  return (
    <section
      id="viewer"
      className="
      min-h-[75vh]
      bg-[#ebe6dc]
      overflow-hidden
      flex
      items-center
    "
    >
      <div
        className="
        w-full

        grid
        lg:grid-cols-[45%_55%]

        items-center

        px-6
        md:px-12
        xl:px-20
      "
      >
        {/* LEFT CONTENT */}
        <div className="z-20 py-10">
          <p
            className="
            uppercase
            tracking-[0.35em]
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
            leading-[0.9]
            font-light
          "
          >
            Send your

            <span
              className="
              block
              text-pink-400
              italic
              font-serif
            "
            >
              flowers
            </span>

            like you mean it.
          </h2>

          <p
            className="
            mt-8
            text-black/60
            text-lg
            leading-relaxed
            max-w-xl
          "
          >
            Flowers are meant to create memories for your loved ones with
            timeless elegance, handcrafted beauty and unforgettable floral
            experiences.
          </p>

          <div className="mt-16">
            <Link to="/create-bouquet">
              <button
                className="
                group

                px-10
                py-5

                rounded-full

                bg-white

                shadow-[0_20px_50px_rgba(0,0,0,0.12)]

                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]

                transition-all
                duration-500
              "
              >
                <span
                  className="
                  flex
                  items-center
                  gap-4
                  text-lg
                "
                >
                  Create Bouquet

                  <span
                    className="
                    group-hover:translate-x-2
                    transition
                  "
                  >
                    →
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
          relative
          h-[520px]
        "
        >
          {/* GLOW */}
          <div
            className="
            absolute

            bottom-0
            right-[-100px]

            w-[420px]
            h-[420px]

            rounded-full

            bg-pink-300/40

            blur-[120px]
          "
          />

          {/* FLOWER IMAGE */}
          <img
            src="https://png.pngtree.com/png-vector/20250117/ourmid/pngtree-a-bouquet-of-purple-tulips-mother-cultured-encouragement-png-image_15253426.png"
            alt="Bouquet"
            className="
            absolute

           -bottom-15
            right-[-180px]

            w-[760px]

            max-w-none

            object-contain

            drop-shadow-[0_40px_100px_rgba(0,0,0,0.15)]
          "
          />
        </div>
      </div>
    </section>
  );
}