const getNomorAntri = (nomor) => {
  return nomor;
};
const pilihPaket = (nomor, paket) => {
  if (nomor <= 0 && isNaN(nomor)) {
    return "silahkan antri";
  }
  if (paket === "A") {
    return "KFC Paket A";
  } else {
    return "KFC Paket B";
  }
};
const tagihan = (paket) => {
  if (paket === "A") {
    return 25000;
  } else {
    return 24000;
  }
};
const orderKFC = async (paket) => {
  const [nomorAntri, menu, total] = await Promise.all([getNomorAntri(10), pilihPaket(10, "A"), tagihan("A")]);
  return [nomorAntri, menu, total];
};
orderKFC("B").then((res) => console.log(res));
