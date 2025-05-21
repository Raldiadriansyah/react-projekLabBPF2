

export default function Footer() {
    return (
        <div id="footer-container" className="bg-black w-full z-20 top-0 start-0 mt-12 text-white">
            <footer className="footer pb-5 ml-[350px]">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
                        <div className="col-span-1 mt-[30px]" >
                           <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                            <div className="mt-5 mb-5">
                                Jl. Yos Sudarso No.KM, RW.4, Umban Sari, Kec. Rumbai, Kota Pekanbaru, Riau 28265
                            </div>
                        </div>                     
                        <div className="col-span-1 px-10 mt-[30px]" >
                            <h6 className="text-lg font-semibold">Contact</h6>
                            <table className="mt-4 space-y-2">
                                <tr><td>Email</td>:<td></td><td>MakananSedap@gmail.com</td></tr>
                                <tr><td>Instagram</td>:<td></td><td>@_RestoSedap</td></tr>
                                <tr><td>WhatsApp</td>:<td></td><td>08123456789</td></tr>
                            </table>
                        </div>
                        
                        <div className="col-span-1 px-90 mt-[30px]">
                            <h6 className="text-lg font-semibold">Navigation</h6>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-white-700 hover:text-blue-500">Home</a></li>
                                <li><a href="#" className="text-white-700 hover:text-blue-500">About</a></li>
                                <li><a href="#" className="text-white-700 hover:text-blue-500">Product</a></li>
                        
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom  mt-[30px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col-span-1 text-center ml-[370px]">
                                Copyright ©2021 <a href="#" className="font-semibold text-blue-500">Jobhub</a>. All Rights Reserved
                            </div>
                            <div className="col-span-1 text-md-end text-start">
                                <div className="footer-social flex space-x-4">
                                    <a href="#" className="text-gray-700 hover:text-blue-500">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-blue-500">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-blue-500">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-gray-700 hover:text-blue-500">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}