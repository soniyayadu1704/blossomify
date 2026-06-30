import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function CreateBouquetNavbar() {
  return (
    <header className="py-5">
      <div className="max-w-[1400px] mx-auto px-5">

        <div className="flex items-center justify-between">

          <Link to="/">
            <h1 className="text-3xl font-bold">
              BLOSSOMIFY ✿
            </h1>
          </Link>

          <div className="hidden md:flex gap-20 text-lg">
            <Link to="/">About us</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Contact us</Link>
          </div>

          <div className="flex items-center gap-4">

            <button
              className="
              bg-black
              text-white
              px-7
              py-3
              rounded-xl
              "
            >
              Build a Bouquet
            </button>

            <ShoppingCart size={28} />
          </div>

        </div>

      </div>
    </header>
  );
}