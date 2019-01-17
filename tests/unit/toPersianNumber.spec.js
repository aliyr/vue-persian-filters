import toPersianNumber from '../../src/filters/toPersianNumber'

const myNums = {
  stringNum: '1234',
  num: 1234,
  stringNumWithSpace: ' 1234 ',
  negativeNum: ' -1234',
  decimal: '-1234.43'
}

describe.each`
  val    | expected
  ${'1234'} | ${'۱۲۳۴'}
  ${1234} | ${'۱۲۳۴'}
  ${' 1234 '} | ${' ۱۲۳۴ '}
  ${' -1234'} | ${' -۱۲۳۴'}
`('toPersianNumber', ({ val, expected }) => {
  test(`returns ${expected}`, () => {
    expect(toPersianNumber(val)).toBe(expected)
  })
})

describe('toPersianNumber', () => {
  test('get String as number and parse it to Persian Number', () => {
    expect(toPersianNumber(myNums.stringNum)).toBe('۱۲۳۴')
  })

  test('get Number and parse it to Persian Number', () => {
    expect(toPersianNumber(myNums.num)).toBe('۱۲۳۴')
  })

  test('get Number with space and parse it to Persian Number', () => {
    expect(toPersianNumber(myNums.stringNumWithSpace)).toBe(' ۱۲۳۴ ')
  })

  test('get negative Number and parse it to Persian Number', () => {
    expect(toPersianNumber(myNums.negativeNum)).toBe(' -۱۲۳۴')
  })

  test('get decimal Number and parse it to Persian Number', () => {
    expect(toPersianNumber(myNums.decimal)).toBe('-۱۲۳۴.۴۳')
  })
})
