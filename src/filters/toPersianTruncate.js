export default function toPersianTruncate (val, length = 10, seperate = '.') {
  let wordsArr = val.split(' ')
  let separator = seperate + seperate + seperate
  let currentLength = 0
  let futureLength = 0
  let completedWord = ''
  if (val.length >= length) {
    wordsArr.map((item) => {
      futureLength += item.length + 1
      if (futureLength < length) {
        currentLength += item.length + 1
        completedWord = completedWord + ' ' + item
      }
    })
    completedWord = completedWord + ' ' + separator
  } else {
    completedWord = val
  }
  return completedWord
}
