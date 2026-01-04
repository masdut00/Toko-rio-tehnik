// Paste URL Script Google Apps Script Anda di sini
const API_URL = "https://script.google.com/macros/s/AKfycbyOGuBRe4uKlN6ql3OgraaLZEOM0UXm6XEGTa0iodqQDeVIHeBguFolicUMsvBk_xIQ/exec"; 

async function requestKeGoogle(action, dataTambahan = {}) {
  
  // Bungkus data
  const paketData = {
    action: action,
    ...dataTambahan
  };

  try {
    // Kirim request POST
    // Kita pakai mode 'no-cors' tidak bisa dipakai karena kita butuh balikan JSON.
    // Trik GAS: Kirim data stringify sebagai text/plain agar tidak kena blokir browser (CORS)
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(paketData)
    });

    const hasil = await response.json();
    return hasil;
    
  } catch (error) {
    console.error("Error koneksi:", error);
    alert("Gagal terhubung ke Server Google!");
    return null;
  }
}