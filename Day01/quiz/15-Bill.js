/** hitung total gaji karyawan */

function totalGaji(gaji1, gaji2, gaji3) {
   
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */