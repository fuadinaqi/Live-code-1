function reorderingLetter(str, totalLevel) {
  debugger
  let strSplit = str.split('')
  let arr = []

  for (var i = 0; i < totalLevel; i++) {
    let midIdx = Math.floor(strSplit.length / 2)
    let newStr = ''
    if (strSplit.length % 2 !== 0) {
      newStr += strSplit[0] + strSplit[midIdx] + strSplit[strSplit.length-1]
      strSplit.splice(midIdx, 1)
    } else {
      if (strSplit.length > 2) {
        newStr += strSplit[0] + strSplit[midIdx-1] + strSplit[midIdx] + strSplit[strSplit.length-1]
      } else {
        newStr += strSplit[0] + strSplit[strSplit.length-1]
      }

      strSplit.splice(midIdx-1, 1)
      strSplit.splice(midIdx-1, 1)
    }
    arr.push(newStr)
    strSplit.splice(0, 1)

    strSplit.splice(strSplit.length-1, 1)
  }

  console.log(arr.join(''));
}

reorderingLetter('DARWINFOX', 5)

//result yang diharapkan : DIXAWNORF

reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)

//result yang diharapkan : AIQBHJPCGKODFLNEM

reorderingLetter('FUADGANTENGSEDUNIA', 5)
