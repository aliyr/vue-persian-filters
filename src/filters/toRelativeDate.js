import moment from 'jalali-moment'
import toPersianNumber from './toPersianNumber'
export default function toRelativeDate (date, format) {
  return "‫‫" + toPersianNumber(moment(date, format).locale('fa').fromNow())
}
