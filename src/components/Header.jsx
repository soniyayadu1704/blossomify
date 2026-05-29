import Navbar from "./Navbar";

export default function Header() {
  return (
    <section
      id="home"
      className="
      relative
      h-screen
      overflow-hidden
    "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        scale-105
      "
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1126841725/photo/spring-meadow.webp?b=1&s=612x612&w=0&k=20&c=eDz8nDhzjbiZE0aY94vyrCp2kKNU30vGNyhBWwduNKI=)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* CONTENT */}
      <div
        className="
        relative
        z-20
        h-full
        flex
        flex-col
      "
      >
        {/* NAVBAR */}
        <div className="flex justify-center pt-8">
          <Navbar />
        </div>

        {/* HERO */}
        <div
          className="
          flex-1
          flex
          items-center
          justify-center
          px-6
        "
        >
          <div
            className="
            max-w-7xl
            w-full
            grid
            md:grid-cols-2
            gap-10
            items-center
          "
          >
            {/* LEFT */}
            <div>
              <p
                className="
                uppercase
                tracking-[0.4em]
                text-white/70
                mb-6
                ml-15
              "
              >
                Luxury Floral Design
              </p>

              <h1
                className="
                text-white
                text-6xl
                md:text-8xl
                font-light
                leading-[0.9]
                ml-10
              "
              >
                Blossomify
              </h1>

              <p
                className="
                text-white/75
                text-lg
                mt-8
                ml-15
                max-w-lg
                leading-relaxed
              "
              >
                Elegant bouquets crafted with immersive floral experiences,
                luxury aesthetics, and modern interactions.
              </p>

              <div className="flex gap-5 mt-10 ml-15">
                {/* PRODUCTS */}
                <a
                  href="#products"
                  className="
    px-8
    py-4
    rounded-full

    border
    border-white/30

    bg-white/10
    backdrop-blur-xl

    text-white

    hover:bg-white/20
    hover:scale-105

    transition
  "
                >
                  Explore
                </a>

                
              </div>
               </div>
          </div>


        </div>
      </div>
  
    </section >
  );
}