import { Link } from "react-router-dom";

export default function HalamanGuestSedap() {
  return (
    <div
      className="flex justify-center items-end h-screen bg-cover bg-center content-between"
      style={{
        backgroundImage: "url('img/bg.jpg')",
        height: "770px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mb-[280px] text-center">
        <p className="text-white font-poppins-extrabold font-[1000] text-[68px]">
          Sedap
        </p>
        <Link to="/HalamanCekProduk">
          <button className="bg-hijau text-white px-6 py-3 rounded-lg text-[18px] font-poppins-extrabold mt-[90px] hover:bg-green-700 transition duration-300">
            Cek Produk
          </button>
        </Link>
      </div>
    </div>
  );
}

