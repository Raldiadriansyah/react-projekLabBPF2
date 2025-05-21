import ProdukData from "../../assets/produk.json";

export default function Produk() {
  return (
    <div className="mt-[30px]">
      <h1 className="font-bold text-green-600 text-center mb-[30px] text-[40px]">
        Produk Populer
      </h1>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProdukData.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md bg-white">
            <img
              src={`/img/${item.gambar}`}
              alt=""
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {item.Nama}
            </h2>
            <p className="text-gray-700">Harga: Rp {item.harga}</p>
            <p className="text-gray-700">Stok: {item.stok}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
