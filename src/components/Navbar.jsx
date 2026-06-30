import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className="
      w-[92%]
      max-w-6xl
      flex
      items-center
      justify-between
      px-10
      py-5
      rounded-full
      bg-white/10
      border
      border-white/20
      backdrop-blur-2xl
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      text-white
    "
    >
      {/* LOGO */}
      <Link to="/">
        <h1
          className="
          text-2xl
          tracking-[0.3em]
          font-light
          cursor-pointer
          hover:opacity-80
          transition
        "
        >
          BLOSSOMIFY
        </h1>
      </Link>

      {/* NAV LINKS */}
      <div
        className="
        hidden
        md:flex
        gap-10
        text-sm
        uppercase
        tracking-[0.2em]
      "
      >
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-white/70 transition"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("viewer")}
          className="hover:text-white/70 transition"
        >
          Viewer
        </button>

        <button
          onClick={() => scrollToSection("products")}
          className="hover:text-white/70 transition"
        >
          Products
        </button>

        <button
          onClick={() => scrollToSection("footer")}
          className="hover:text-white/70 transition"
        >
          Contact
        </button>
      </div>
    </div>
  );
}