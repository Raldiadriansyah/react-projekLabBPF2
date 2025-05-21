import UlasanData from "../../assets/user.json";

export default function Ulasan() {
  return (
    <div className="mt-[40px]">
      <h1 className="font-bold text-green-600 text-center mb-[30px] text-[40px]">
        Testimoni
      </h1>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {UlasanData.map((item, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-white text-center">
          <img
            src={item.avatar}
            className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h2>
          <p className="text-gray-700">{item.review}</p>
        </div>
      ))}
    </div>
    </div>
    
  );
}
