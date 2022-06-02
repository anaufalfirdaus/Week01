// callback script code
const callCenter147 = () => {
  pesan("Selamat Datang Di Layanan Telkom 147", () => {
    pesan("Pilih angka 1 untuk indonesia", () => {
      pesan("Tekan angka 1 untuk pendaftaran", () => {
        pesan("Tekan angka 2 untuk keluhan", () => {
          pesan("Tekan angka 3 untuk membatalkan", () => {});
        });
      });
    });
  });
};
const pesan = (message, callback) => {
  setTimeout(() => {
    console.log(message);
    callback();
  }, 2000);
};
// call funtion
callCenter147();
