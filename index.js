
let hp = document.querySelector('.handphone');
const jmlHp = document.querySelector('.jumlahBeliHp');


let laptop = document.querySelector('.laptop');
const jmlLaptop = document.querySelector('.jumlahBeliLaptop');


let komputer = document.querySelector('.komputer');
const jmlKomputer = document.querySelector('.jumlahBeliKomputer');


const hasil = document.querySelector('#total');


const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
    
    if (hp.checked === false && laptop.checked === false && komputer.checked === false) {
        alert('Check barang terlebih dahulu!');
    }

  
    let hargaHp =1200000; 
    if (hp.checked === true) {
        hargaHp *= jmlHp.value;
        hasil.value = hargaHp;
    }

    
    let hargaLaptop = 5000000;
    if (laptop.checked === true) {
        hargaLaptop *= jmlLaptop.value;
        hasil.value = hargaLaptop;
    }

    
    let hargaKomputer = 3000000;
    if (komputer.checked === true) {
        hargaKomputer *= jmlKomputer.value;
        hasil.value = hargaKomputer;
    }

   
    if (hp.checked === true && laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaLaptop + hargaKomputer;

    
    } else if (hp.checked === true && laptop.checked === true) {
        hasil.value = hargaHp + hargaLaptop;

        
    } else if (hp.checked === true && komputer.checked === true) {
        hasil.value = hargaHp + hargaKomputer;

       
    } else if (laptop.checked === true && komputer.checked === true) {
        hasil.value = hargaLaptop + hargaKomputer;
    }
});