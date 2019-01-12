import moment from 'jalali-moment'

export default function toRelativeDate (date, format) {
  return moment(date, format).locale('fa').fromNow()
}
