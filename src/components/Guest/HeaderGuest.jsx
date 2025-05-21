import { CgPhone } from "react-icons/cg";
import { BiMailSend } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

export default function HeaderGuest({ title, children }) {
  return (
    <header className="bg-white shadow">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-3 text-sm text-gray-600  h-[110px]">
        {/* Left: Sosmed */}
        <div className="flex space-x-6 ml-[260px] text-[20px] mr-2">
          <FaTwitter className="cursor-pointer hover:text-green-600" />
          <FaFacebookF className="cursor-pointer hover:text-green-600" />
          <FaInstagram className="cursor-pointer hover:text-green-600" />
        </div>

        {/* Middle: Logo & Email */}
        <div className="flex items-center justify-center space-x-56 font-[200] text-[18px]">
          <div className="flex items-center">
            <BiMailSend className="text-green-500 text-[40px] mr-2" />
            <div className="leading-snug">
              <p className="font-semibold">Email</p>
              <p>Sedap@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 ">
            <span className="font-[1000] text-[35px] text-gray-900">
              {title} {children}
            </span>
          </div>

          <div className="flex items-center">
            <CgPhone className="text-green-500 text-[37px] mr-2" />
            <div className="leading-snug">
              <p className="font-semibold">Phone</p>
              <p>081267548463</p>
            </div>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 text-[20px] mr-[290px] ml-[35px]">
          <FaSearch className="cursor-pointer hover:text-green-600" />
          <FaShoppingCart className="cursor-pointer hover:text-green-600" />
        </div>
      </div>
    </header>
  );
}
