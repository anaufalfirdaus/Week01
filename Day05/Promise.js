// contoh promise
const mypromise = new Promise((resolve, reject) => {
  if (10 <= 5) {
    resolve("Lunas yaa...!");
  }
  reject(new Error("Belum ada uang, ntar sok yah.. "));
});
// call function mypromise
mypromise
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
