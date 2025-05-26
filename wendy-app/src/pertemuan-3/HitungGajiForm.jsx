import {useState} from "react";
import InputGaji from "./components/InputField";
import KondisiGaji from "./components/KondisiGaji";

export default function HitungGajiForm() {
    const [gaji,setGaji] = useState("");
    const pajak =0.11
    const totalGaji = gaji-(gaji*pajak)
    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">Hitung Gaji Bersih</h2>

                <div className="mb-4">
                    <InputGaji
                        label="Gaji Pokok"
                        type="number"
                        placeholder="Masukkan jumlah gaji"
                        
                        onChange= {(inputanUser)=> setGaji(inputanUser.target.value)}      
                    />
                    
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">
                        Pajak: <b class="text-red-500">11%</b>
                    </label>
                </div>

                {!gaji  ? (
                        <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700">
                            <KondisiGaji
                            label="Silahkan Masukkan Gaji yang valid (tidak boleh kosong)"
                            />
                        </div>

                        
                ) : (
                    <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500 text-green-700">
                        <KondisiGaji
                            label="Total Take Home Pay (THP): Rp"
                            totalGaji={totalGaji.toLocaleString()}
                        />
                    </div>
                )}
                    
                
            </div>
        </div>
    );
}