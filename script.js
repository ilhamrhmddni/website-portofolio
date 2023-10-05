const klikLanjut = document.getElementById('klikLanjut')
const klikKembali = document.getElementById('klikKembali')
const lanjut = document.getElementById('lanjut')
let tampil = false;


klikLanjut.addEventListener('click', function() {
    lanjut.classList.remove('hidden');
    klikLanjut.innerText = "";
    klikKembali.innerText = "Sembunyikan";
    tampil = true;
});

klikKembali.addEventListener('click', function() {
    lanjut.classList.add('hidden');
    klikLanjut.innerText = "Baca Selengkapnya";
    klikKembali.innerText = "";
    tampil = false;
})