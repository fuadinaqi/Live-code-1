function getCoins(value) {
  debugger
  const nilai = value
	let coin = [1, 5, 7, 9, 11]
  let arr = []

  while (nilai >= coin[coin.length-1]) {
    let tampung = []
    for (var i = coin.length-1; i >= 0; i--) {
      if (value >= coin[i]) {
        value -= coin[i]
        tampung.push(coin[i])
      }
    }
    coin.splice(coin.length-1, 1)
    if (value == 0) {
      arr.push(tampung.sort())
    }
    value = nilai
  }
  if (arr.length > 1) {
    console.log(arr);
  } else {
    console.log('-1');
  }

}

getCoins(12)
// [1, 11]
// [5, 7]

getCoins(17)
// [1, 5, 11]
// [1,7,9]

getCoins(3)
//-1
