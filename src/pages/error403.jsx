
import ErrorPage from "../components/ErrorPage";
export default function Error403() {
    return (
      <div>
        <ErrorPage 
        Kode="403" 
        Deskripsi="Terkadang kita tersesat untuk menemukan tempat yang lebih indah. Mari kembali ke jalur yang benar." 
        Gambar="img/error-401.png">
        </ErrorPage>
      </div>    
    );
  }