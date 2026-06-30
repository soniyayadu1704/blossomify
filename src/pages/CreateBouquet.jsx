import { useState } from "react";
import CreateBouquetNavbar from "../components/CreateBouquetNavbar";
import BouquetBuilder from "../components/BouquetBuilder";
import PriceCard from "../components/PriceCard";
import BouquetGallery from "../components/BouquetGallery";
import Footer from "../components/Footer";

export default function CreateBouquet() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [selectedWrap, setSelectedWrap] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [message, setMessage] = useState("");

  const total =
    (selectedSize?.price || 0) +
    (selectedFlower?.price || 0) +
    (selectedWrap?.price || 0);

  return (
    <div className="bg-[#FFF1F3] min-h-screen">
      <CreateBouquetNavbar />

      <section className="max-w-[1400px] mx-auto px-5 py-8">
        <div className="grid lg:grid-cols-[1.2fr_.9fr] gap-6">

          <BouquetBuilder
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedFlower={selectedFlower}
            setSelectedFlower={setSelectedFlower}
            selectedWrap={selectedWrap}
            setSelectedWrap={setSelectedWrap}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />

          <div className="space-y-6">

            <PriceCard
              total={total}
              message={message}
              setMessage={setMessage}
              reset={() => {
                setSelectedSize(null);
                setSelectedFlower(null);
                setSelectedWrap(null);
                setSelectedCard(null);
                setMessage("");
              }}
            />

            <BouquetGallery />

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}