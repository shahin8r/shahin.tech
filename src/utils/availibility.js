import nextWeekday from './nextWeekday'

const weekFromNow = new Date()
weekFromNow.setDate(weekFromNow.getDate())

const Availibility = () => nextWeekday(weekFromNow, 1).toLocaleString('en-us', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})


export default Availibility