import React, { useState } from 'react';
import produkData from '../../assets/produk.json';  

export default function HalamanCekProduk() {
  const [namaProduk, setNamaProduk] = useState('');
  const [message, setMessage] = useState('');
  const [produk, setProduk] = useState(null);

  // Validasi input nama produk
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!namaProduk) {
      setMessage('❌ Nama produk tidak boleh kosong.');
      setProduk(null);
      return;
    }

    // Mencari produk berdasarkan nama
    const ditemukan = produkData.find((item) => 
      item.Nama.toLowerCase() === namaProduk.toLowerCase()
    );

    if (ditemukan) {
      if (ditemukan.stok > 0) {
        setMessage(
          `✅ Produk ${ditemukan.Nama} tersedia dengan harga Rp ${ditemukan.harga}. Stok tersedia: ${ditemukan.stok}`
        );
      } else {
        setMessage(`❌ Produk ${ditemukan.Nama} saat ini sedang habis. Out of Stock.`);
      }
      setProduk(ditemukan);
    } else {
      setMessage('❌ Nama produk tidak ditemukan.');
      setProduk(null);
    }
  };

  return (
    <div className="container p-8 max-w-xl mx-auto mt-12 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Cek Ketersediaan Produk</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="namaProduk" className="block text-gray-700 font-medium">Nama Produk:</label>
          <input
            type="text"
            id="namaProduk"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan nama produk"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
          Cek Produk
        </button>
      </form>

      {message && (
        <div className={`mt-6 p-4 rounded-lg text-center ${produk?.stok > 0 ? 'bg-green-200' : 'bg-yellow-200'}`}>
          <p className={`text-lg ${produk?.stok > 0 ? 'text-green-800' : 'text-yellow-800'}`}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
}
