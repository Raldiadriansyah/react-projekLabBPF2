import { Outlet } from "react-router-dom";
import Header from "../components/Guest/HeaderGuest";
import Nav from "../components/Guest/navigation";
import Produk from "../pages/Guest/Produk";
import About from "../pages/Guest/about";
import User from "../pages/Guest/user";
import Footer from "../components/Guest/footer";

export default function GuestLayout(){
   return (
    <div id="app-container" className="bg-gray-100 min-h-screen">
      <div id="layout-wrapper">
        <div id="main-content" className="p-4">
          <div id="home">
            <Header title="Sedap" children={<b id="logo-dot" className="text-hijau">.</b>} />
            <Nav />
          </div>
            <Outlet/>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>

          <section id="produk" className="scroll-mt-20">
            <Produk />
          </section>

          <section id="user" className="scroll-mt-20">
            <User />
          </section>

          <section id="contact" className="scroll-mt-20">
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}