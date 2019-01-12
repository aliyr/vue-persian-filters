import moment from 'jalali-moment'

export default function toPersianDate (date, format) {
  return moment(date).locale('fa').format(format)
}
