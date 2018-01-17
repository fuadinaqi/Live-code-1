let arr = []
function getMillenials(data) {
  let media = []

  for (var i = 1; i < data.length; i++) {
    let obj = {}
    for (var j = 0; j < data[i].length; j++) {
      obj[data[0][j]] = data[i][j]
    }
    arr.push(obj)
  }

  // for (var k = 0; k < arr.length; k++) {
  //   media.push(arr[k].MediaSosial.split(';'))
  // }
  return arr
}

function getSocial(data, social) {
  let newArr = []
  for (var i = 0; i < data.length; i++) {
    if (social.indexOf(data[i].MediaSosial) !== -1) {
      newArr.push(data[i])
    }
  }
  return newArr
}

let input = [
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
  ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
  ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
  ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
]

console.log(getMillenials(input));

console.log(getSocial(arr, 'Instagram'));
