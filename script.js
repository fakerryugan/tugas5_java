let produklist = [
    {id: 1,nama: "laptop",harga:12000000},
    {id: 2,nama: "Smartphone",harga:5000000},
    {id: 3,nama: "Monitor",harga: 3000000},
    {id: 4,nama: "Keyboard",harga: 1000000},
    {id: 5,nama: "Mouse",harga: 500000}
];

const eventHandler={
    tambah:(nama) => console.log(`Produk '${nama}' berhasil ditambahkan ke katalog.`),
    hapus:(id) => console.log(`Produk dengan ID ${id} berhasil dihapus dari katalog.`)
};

//**menambahkan protduk dengan spread operator */
function tambahProduk(id,nama,harga){
    const produkBaru = {id,nama,harga};
    produklist = [...produklist,produkBaru];
    eventHandler.tambah(nama);
}
//**mengahpus produk dengan rest parameter */
function hapusProduk(id){}
//**menampilkan produk dengan desttructuring */
function tampilkanProduk(){console.log("\n=== DAFTAR SEMUA PRODUK ===");
    produklist.forEach(produk => {
        const { id, nama, harga } = produk; 
        console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
    });
}

tampilkanProduk();
tambahProduk(6,'cpower',5000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();