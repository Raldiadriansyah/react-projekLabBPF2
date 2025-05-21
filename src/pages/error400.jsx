
import ErrorPage from "../components/ErrorPage";
export default function Error400() {
    return (
      <div>
        <ErrorPage 
        Kode="400" 
        Deskripsi="Setiap kesalahan adalah kesempatan untuk menemukan jalan baru.
         Halaman ini mungkin hilang, tapi petualanganmu belum berakhir!" 
        Gambar="img/img-error.png">
        </ErrorPage>
      </div>    
    );
  }