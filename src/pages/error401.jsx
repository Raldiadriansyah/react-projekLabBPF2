
import ErrorPage from "../components/ErrorPage";
export default function Error401() {
    return (
      <div>
        <ErrorPage 
        Kode="401" 
        Deskripsi="Setiap jalan buntu adalah isyarat untuk menemukan jalur baru. Jangan menyerah!" 
        Gambar="img/error-403.png">
        </ErrorPage>
      </div>    
    );
  }