export default function toPersianDigits (num) {
  return digitToWords(num)
}

function digitToWords (value) {
  let delimiter, digit, i, iThree, numbers, parts, result, resultThree, three

  if (!isFinite(value)) {
    return ''
  }

  if (typeof value !== 'string') {
    value = value.toString()
  }

  parts = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'کوادریلیون', 'کویینتیلیون', 'سکستیلیون']
  numbers = {
    0: ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'],
    1: ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'],
    2: ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'],
    two: ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'],
    zero: 'صفر'
  }
  delimiter = ' و '

  let valueParts = value.split('').reverse().join('').replace(/\d{3}(?=\d)/g, '$&,').split('').reverse().join('').split(',').map(function (str) {
    return Array(4 - str.length).join('0') + str
  })

  result = (function () {
    let _results
    _results = []
    for (iThree in valueParts) {
      three = valueParts[iThree]

      resultThree = (function () {
        let _i, _len, _results1
        _results1 = []

        for (i = _i = 0, _len = three.length; _i < _len; i = ++_i) {
          digit = three[i]
          if (i === 1 && digit === '1') {
            _results1.push(numbers.two[three[2]])
          } else if ((i !== 2 || three[1] !== '1') && numbers[i][digit] !== '') {
            _results1.push(numbers[i][digit])
          } else {
            continue
          }
        }

        return _results1
      })()

      resultThree = resultThree.join(delimiter)
      let _result = resultThree ? resultThree + ' ' + parts[valueParts.length - parseInt(iThree) - 1] : resultThree
      _results.push(_result)
    }
    return _results
  })()

  result = result.filter(function (x) {
    return x.trim() !== ''
  })

  result = result.join(delimiter).trim()
  if (result === '') {
    result = numbers.zero
  }

  return result
}
