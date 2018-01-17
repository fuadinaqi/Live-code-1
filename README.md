# Live-code-1

# 1. Parsing Socmed

Divisi marketing akan mencoba mengiklankan perusahaan mereka didalam social media, mereka memiliki beberapa iklan yang sudah disesuaikan dengan beberapa social media. Divisi marketing juga memiliki data calon customer yang menjadi target market mereka. Tetapi mereka kesulitan mengkelompokan calon customer berdasarkan rentang umur dan social media apa saja yang calon pelanggan miliki.
[
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
  ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
  ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
  ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
]
Buatlah 2 function:
getMillenials(data): function ini untuk menampilkan calon customer dari umur 20 - 29 tahun
	Output:
	[ { Nama: 'Tobias',
    Umur: 21,
    Asal: 'Jakarta',
    MediaSosial: [ 'Twitter', 'Facebook' ] },
  { Nama: 'Syldie',
    Umur: 25,
    Asal: 'Malang',
    MediaSosial: [ 'Google+', 'Instagram', 'Twitter' ] },
  { Nama: 'Fuad',
    Umur: 24,
    Asal: 'Jakarta',
    MediaSosial: [ 'Path', 'LinkedIn', 'Google+' ] } ]
LANJUT KEBAWAH
getSocial(data, social): function ini untuk menampilkan calon customer yang memiliki social media yang ingin kita tampilkan saja.
Output jika mencari Instagram:
	[ { Nama: 'Kevin',
    Umur: 18,
    Asal: 'Bandung',
    MediaSosial: [ 'Instagram', 'LinkedIn', 'Facebook' ] },
  { Nama: 'Syldie',
    Umur: 25,
    Asal: 'Malang',
    MediaSosial: [ 'Google+', 'Instagram', 'Twitter' ] },
  { Nama: 'Chandra',
    Umur: 31,
    Asal: 'Surabaya',
    MediaSosial: [ 'Facebook', 'Instagram', 'Twitter' ] } ]
PENTING: OUTPUT CALON CUSTOMER HARUS BERUPA ARRAY OF OBJECT

# 2. Logic Shape of W
https://docs.google.com/document/d/11xyULK-AhBhSkM_EL4yNPDJXmFL-iJXS7hpueoqr8Mw/edit

Buat sebuah function bernama reorderingLetter, yang akan menerima 2 parameter : string dan angka (asumsi nama parameter : str dan totalLevel). Buat code di dalam function reorderingLetter yang akan mengurutkan huruf berdasarkan level nya. Saat ini, totalLevel maksimum 6, dan maksimum jumlah karakter string nya 100.
Driver code :
function reorderingLetter(str, totalLevel) {
  //your code here...
}
Contoh 1 :
reorderingLetter(“DARWINFOX”, 3)
//result yang diharapkan : DIXAWNORF
Ilustrasi :
D    	     I  	        X
    A	W     N     O
        R		 F
Maka,
Level 1 : D, I, X
Level 2 : A, W, N, O
Level 3 : R, F
Contoh 2 :
reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5)
//result yang diharapkan : AIQBHJPCGKODFLNEM
Ilustrasi :
A                      I                      Q
   B               H    J                 P
      C         G          K           O
         D    F                L     N
            E                       M
Maka,
Level 1 : A, I, Q
Level 2 : B, H, J, P
Level 3 : C, G, K, O
Level 4 : D, F, L, N
Level 5 : E, M

# 3. Unique Coin
https://docs.google.com/document/d/1vXEkwfBXM7yrSyqKPzBhNadEb3SMfrSytHUKbtNhdSo/edit#

Kita memiliki coin dengan nilai sbb : 1,5,7,9,11, masing-masing coin dibatasi hanya berjumlah 1. Buat sebuah function, yang menerima number berupa sebuah angka (maksimum 33), bisa ditambahkan parameter lain apabila dibutuhkan. Function akan mengembalikan semua kombinasi coin yang jumlahnya sesuai dengan angka yang dimasukkan dan unik tidak boleh ada yang duplikat (karena masing-masing coin jumlah nya 1).
Driver Code :
function getCoins(value) {
	//write your code here
}
Contoh 1 :
getCoins(12)
//Result yang diharapkan, ada 2 kombinasi, yaitu :
[1, 11]
[5, 7]
Contoh 2 :
getCoins(17)
//Result yang diharapkan, ada 2 kombinasi, yaitu :
[1, 5, 11] dan [1,7,9]
Contoh 3 :
getCoins(3)
//Result yang diharapkan, ada 0 kombinasi, yaitu :
-1
