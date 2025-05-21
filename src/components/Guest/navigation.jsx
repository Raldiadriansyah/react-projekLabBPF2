import { BiUserCircle } from "react-icons/bi"; 
import { Link } from "react-router-dom";
export default function navigation() {
  return (
    <div  className="border-b py-4 px-8  text-gray-700 h-[60px] mt-[10px] font-[30]"
  style={{ backgroundColor: "oklch(92.3% 0.003 48.717)" }}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        {/* Kiri - (Kosong atau Logo) */}
        <div className="w-1/3">
  <a href="#" className="flex items-center text-gray-600 hover:underline hover:text-green-500">
    <BiUserCircle className="text-green-500 text-2xl mr-2" /> Login / Register
  </a>
</div>

        {/* Tengah - Navigation Menu */}
        <div className="w-1/3 flex justify-center">
          <div className="flex space-x-6 font-medium">
                <Link to="/HalamanGuestSedap" className="hover:text-green-600">Home</Link>
                <a href="#about" className="hover:text-green-600">About</a>
                <a href="#produk" className="hover:text-green-600">Shop</a>
                <a href="#user" className="hover:text-green-600">User</a>
                <a href="#contact" className="hover:text-green-600">Contact</a>
          </div>
        </div>

        {/* Kanan - Language & Login */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <div className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-5 h-5"
            />
            <span>English</span>
          </div>
          
        </div>

      </div>
    </div>
  );
}
