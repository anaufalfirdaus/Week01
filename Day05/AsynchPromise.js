async function getNomorAntri(nomor) {
  if (nomor <= 10) {
    return Promise.resolve(10);
  } else {
    return Promise.reject(new Error("Antrian habis"));
  }
}
const order = () => {
  console.log("Order KFC paket A");
};
//call function
getNomorAntri(5)
  .then((res) => console.log(res))
  .catch((error) => console.log(error.toString()));
order();
