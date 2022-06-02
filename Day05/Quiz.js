//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas

//soal 2
// Buatlah algoritma untuk menampilkan angka 1 s/d n, dengan ketentuan:
// kelipatan 3 diganti “OK”, kelipatan 4 diganti “YES”, kelipatan 3 & 4 diganti “OKYES”
// Contoh output di bawah adalah ketika nilai “n” = 15

//soal 3
// Buat script program supaya bisa muncul output seperti di bawah
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25

//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.


//soal 6
function isPalindrome(word){
	//buat isi function untuk menentukan nilai palindrome di console true atau false 
}
console.log(isPalindrome('kasur ini rUsak'));//true


//soal 7
function countingValleys(s) {
	//buat isi function untuk menentukan nilai countingValleys di console jika D = -1 dan U = +1
	//jika total nilai akhir adalah 0 dan U maka = +1 
}
console.log(countingValleys('UDDDUDUU'));//1

//soal 8
function checkPermute(stringOne, stringTwo) {
	//buat isi function untuk menentukan nilai checkPermute di console jika length
	//kedua inputan tidak sama makan hasilnya false, dan jika length sama maka di cek apakah
	//jumlah kata dari masing2 inputan perjumlah sama atau tidak
}
console.log(checkPermute('aba', 'aab'))//true;
console.log(checkPermute('aba', 'aaba'))//false;
console.log(checkPermute('aba', 'aaa'))//false;

//soal 9
function maxWordLength(params) {
	//buat function menentukan kata mana yang paling panjang lengthnya
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp

//soal 10
const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];
// Find where the 'walrus' item is

// Join the portion before 'walrus' to the portion after 'walrus'

// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

//soal 11
function startsWithE(animal) {

}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'];

console.log(animalsE); // ["elephant", "emu", "eel", "earwig"]

//soal 12
function range(startOrEnd, end, step) {

}

function rangeFromStartToEnd(start, end, step = 1){

};

console.log(range(9));//(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5,9));//(4) [5, 6, 7, 8]

//soal 13
const  findSum =(arr, weight) =>{

}

console.log(findSum([1,2,3,4,5],9)); // 4 & 5

//soal 14
/**
 *  Peminjaman komik di taman bacaan 
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

 function tagihanKomik(tglPinjam, tglKembali, totalkomik) {

}


console.log(tagihanKomik("09-03-20xx", "09-06-2021",4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021",4));//Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021",4));//Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-06-2021",4));
/**
 Total Hari = 3 
 Total Komik = 4 x 2500 
 ------------------------
 Total Tagihan =Rp.30000
 */


//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,
    
    function payment(tglBayar,tglJatuhTempo,cicilan);

    jika penghuni telat membayar dari tgl jatuh tempo 
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */

function payment(tglBayar,tglJatuhTempo,cicilan){
    
} 

function showTagihan(payDate,dueDate,angsuran,cicilan,terlambat,denda){

    
}

function differenceInDays(startDate,endDate){

}

console.log(payment("09/30/2021","09/27/2021",50000));//Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021","09/27/2021",3500000));//Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021","09/27/2021",3500000));
/**
 --------------------------
    	Tanggal Bayar : 27/9/2021
    	Jatuh Tempo :  27/9/2021
    	--------------------------
    	Tagihan bulan 9,2021 = Rp.3500000 
    	Denda = Rp.0 (terlambat 0 hari)
    	Total = Rp.3500000 (lunas)
    	--------------------------
    	Kwitansi ini sebagai alat bukti pembayaran
 */