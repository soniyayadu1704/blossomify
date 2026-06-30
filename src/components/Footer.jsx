export default function Footer() {
  return (
    <footer
      id="footer"
      className="
      relative
      min-h-[30vh]
      overflow-hidden
      bg-[#d9c7b8]
    "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        opacity-25
        scale-110
      "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      <div
        className="
        absolute
        inset-0
        backdrop-blur-[4px]
        bg-[#b9987f]/40
      "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/40
        via-black/10
        to-transparent
      "
      />

      {/* CONTENT */}
      <div
        className="
        relative
        z-20

        px-5
        md:px-12

        py-8

        flex
        flex-col

        gap-6
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
        "
        >
          <div>
            <p
              className="
              uppercase
              tracking-[0.35em]
              text-white/60
              text-xs
              mb-3
            "
            >
              BLOSSOMIFY
            </p>

            <h2
              className="
              text-white
              text-3xl
              md:text-5xl
              leading-none
              font-light
              max-w-2xl
            "
              style={{
                fontFamily: "Cormorant Garamond",
              }}
            >
              Spread love through fresh Flowers.
            </h2>
          </div>

          <div
            className="
            max-w-md
            text-white/70
            leading-relaxed
            text-base
          "
          >
            Blossomify crafts timeless floral experiences designed to celebrate
            love, beauty and unforgettable moments.
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <h1
            className="
            text-white/80
            text-4xl
            md:text-[90px]
            italic
            leading-none
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
          md:items-center

          gap-6
        "
        >
          <div
            className="
            flex
            flex-wrap
            gap-5

            text-white/80
            text-xs

            uppercase
            tracking-[0.2em]
          "
          >
            <a href="#">Privacy Policy</a>
            <a href="#">FAQ</a>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
          </div>

          <div>
            <p
              className="
              text-white/60
              mb-2
              text-xs
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
              backdrop-blur-xl

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
                px-5
                py-3

                outline-none
                text-white

                placeholder:text-white/50

                w-[220px]
              "
              />

              <button
                className="
                h-[44px]
                w-[44px]

                rounded-full

                bg-white
                text-black

                text-xl

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