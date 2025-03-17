// 1. Di Indonesia, ada pecahan mata uang rupiah, yaitu:
// 	100.000,-
// 	50.000,-
// 	20.000,-
// 	10.000,-
// 	5.000,-
// 	2.000,-
// 	1.000,-
// 	500,-
// 	200,-
// 	100,-

// 	buatlah sebuah fungsi untuk menghitung berapa lembar pecahan yang harus dikeleluarkan dari input harga

// ***(dengan pembulatan ke atas jika punya harga pecahan antara 1 sampai 99)
// kondisi diatas ***sangat harus diperhatikan

// 	input : 145.000,-
// output:
// {
//     100.000,- = 1
//     20.000,- = 2
//     5.000,- = 1
// }

// input : 2050
// output: {
//     2.000,- = 1
//     100,- = 1
// }

// di minta outputnya dalam bentuk object

function lembarPecahanRupiah(num) {
  const pecahanRupiah = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
  ];

  let kembalian = {};
  for (i in pecahanRupiah) {
    // + 99 untuk mengakali kondisi yang ada di soal agar jumlahnya naik misal jumlah nya 70 maka akan jadi 189 dan akan dibulatkan ke bawah jadi 100.
    if (num + 99 >= pecahanRupiah[i]) {
      // Fungsi Math.floor() adalah fungsi matematika yang membulatkan angka ke bawah menjadi bilangan bulat terdekat
      const lembar = Math.floor((num + 99) / pecahanRupiah[i]);
      num = num - pecahanRupiah[i] * lembar;
      kembalian[`Rp. ${pecahanRupiah[i]}`] = lembar;
    }
  }
  console.log(kembalian);
}
lembarPecahanRupiah(150490);
lembarPecahanRupiah(150400);
lembarPecahanRupiah(2050);
lembarPecahanRupiah(145000);
