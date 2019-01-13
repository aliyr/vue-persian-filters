import toPersianNumber from './toPersianNumber'
export default function toPersianCurrency (value, symbol, decimals, options) {
  let separator
  let digitsRE = /(\d{3})(?=\d)/g
  let sign = value < 0 ? '-' : ''
  options = options || {}
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  symbol = symbol != null ? sign + ' ' + symbol : sign + ' ' + 'ریال'
  decimals = decimals != null ? decimals : 2
  separator = options.separator != null ? options.separator : ','
  let stringified = Math.abs(value).toFixed(decimals)
  stringified = options.decimalSeparator
    ? stringified.replace('.', options.decimalSeparator)
    : stringified
  let _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  let i = _int.length % 3
  let head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? separator : ''))
    : ''
  let _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  symbol = head + _int.slice(i).replace(digitsRE, '$1' + separator) + _float + symbol
  return toPersianNumber(symbol)
}
