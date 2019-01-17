import toPersianDate from '../../src/filters/toPersianDate'

const sampleDates = {
  dates: {
    now: new Date(),
    stringDate: '11/9/2011'
  },
  formats: {
    full: 'MMMM Do YYYY, h:mm:ss a',
    dayAndMonthAndYear: 'MMMM Do YYYY',
    MonthAndYear: 'MMMM YYYY',
    moment: 'h:mm:ss a'
  }
}

describe('to persian date', () => {
  test('get String as number and parse it to Persian Number', () => {
    expect(toPersianDate(sampleDates.stringNum)).toBe('۱۲۳۴')
  })
})
