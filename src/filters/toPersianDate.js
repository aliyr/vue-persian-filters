import moment from 'jalali-moment'
import toPersianNumber from './toPersianNumber'
export default function toPersianDate (date, format) {
  return toPersianNumber(moment(date).locale('fa').format(format))
}
