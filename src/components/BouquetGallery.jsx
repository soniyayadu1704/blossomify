export default function BouquetGallery() {
  const gallery = [
    "/lillybouquet.jpg",
    "/orchidbouquet.jfif",
    "/sunflowerbouquet.avif",
    "/rosebouquet.jpg",
  ];

  return (
    <div className="bg-white rounded-[25px] p-6">

      <h2 className="text-4xl font-bold mb-6">
        Bouquet gallery
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="
            h-[220px]
            w-full
            object-cover
            rounded-2xl
            "
          />
        ))}

      </div>

    </div>
  );
}