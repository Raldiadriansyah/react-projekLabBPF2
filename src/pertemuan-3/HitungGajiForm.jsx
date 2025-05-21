import { useState } from "react";
import InputField from "./components/InputField";
import Hasil from "./components/Hasil";

export default function HitungGajiForm() {
    const [gaji, setGaji] = useState("");
    const pajak = 0.11
   

	return (
		<div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Hitung Gaji Bersih</h2>

                <InputField label="Gaji Pokok" type="number" placeholder="Masukkan jumlah gaji" onChange={(e) => setGaji(e.target.value)}/>

				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Pajak: <b class="text-red-500">11%</b>
					</label>
				</div>

				{!gaji ? (
                    <div className="mt-4 p-3 bg-red-100 border-1-4 border-red-500 text-red-700">
                        <p className="font-semibold">
                            Silahkan Masukkan gaji yang valid (Tidak boleh kosong atau negatif)
                        </p>
                    </div>
                ):(
                    <Hasil gaji={gaji} pajak={pajak}/>
                )}
			</div>
		</div>
	);
}
