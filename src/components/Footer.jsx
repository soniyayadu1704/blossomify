export default function Footer() {
  return (
    <footer
      id="footer"
      className="
      relative

      min-h-[85vh]

      overflow-hidden

      bg-[#d9c7b8]
    "
    >
      {/* MAIN BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        bg-cover
        bg-center

        opacity-30
        scale-110
      "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* EXTRA BLUR LAYER */}
      <div
        className="
        absolute
        inset-0

        backdrop-blur-[6px]

        bg-[#b9987f]/40
      "
      />

      {/* FLOWER IMAGE */}
      <div
        className="
        absolute

        bottom-0
        right-0

        w-[500px]
        md:w-[700px]

        opacity-90

        blur-[3px]
      "
      >
        <img
          src="https://t3.ftcdn.net/jpg/19/06/67/36/360_F_1906673629_66NSxZp6BqEnyslkjuKbFjDCuo1kNe4c.jpg"
          alt=""
          className="
          w-full

          object-cover

          mask-image
        "
        />
      </div>

      {/* DARK SOFT OVERLAY */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t
        from-black/50
        via-black/20
        to-transparent
      "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-20

        h-full

        flex
        flex-col
        justify-between

        px-8
        md:px-16

        py-14
      "
      >
        {/* TOP */}
        <div
          className="
          flex
          flex-col
          md:flex-row

          justify-between
          items-start

          gap-10
        "
        >
          {/* LEFT */}
          <div>
            <p
              className="
              uppercase
              tracking-[0.35em]

              text-white/60

              text-sm

              mb-6
            "
            >
              Bloosomify
            </p>

            <h2
              className="
              text-white

              text-5xl
              md:text-7xl

              leading-[1]

              font-light

              max-w-3xl
            "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Spread love through fresh Flowers.
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="
            max-w-md

            text-white/70

            leading-relaxed
            text-lg
          "
          >
            Blossomify crafts timeless floral experiences designed to celebrate
            love, beauty, and unforgettable moments with elegance.
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center mt-10">
          <h1
            className="
            text-pink/90

            text-6xl
            md:text-[140px]

            italic

            tracking-wide

            drop-shadow-[0_10px_40px_rgba(0,0,0,0.4)]
          "
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            with love
          </h1>
        </div>

        {/* BOTTOM */}
        <div
          className="
          flex
          flex-col
          md:flex-row

          justify-between
          items-start
          md:items-end

          gap-10

          mt-10
        "
        >
          {/* LINKS */}
          <div
            className="
            flex
            gap-8

            text-white/80

            text-sm
            uppercase
            tracking-[0.2em]
          "
          >
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
          </div>

          {/* EMAIL */}
          <div>
            <p
              className="
              text-white/60
              mb-4
              text-sm
              uppercase
              tracking-[0.25em]
            "
            >
              Join our floral journal
            </p>

            <div
              className="
              flex
              items-center

              bg-white/10

              backdrop-blur-2xl

              border
              border-white/20

              rounded-full

              overflow-hidden
            "
            >
              <input
                type="text"
                placeholder="Email sign up..."
                className="
                bg-transparent

                px-6
                py-4

                outline-none

                text-white

                placeholder:text-white/50

                w-[260px]
              "
              />

              <button
                className="
                h-[52px]
                w-[52px]

                rounded-full

                bg-white

                text-black

                text-2xl

                flex
                items-center
                justify-center

                m-1

                hover:scale-105
                transition
              "
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}