import moment from 'jalali-moment'

export default function toPersianDate (date, format) {
  let now = moment(date).locale('fa').format(format)
  return now
}
