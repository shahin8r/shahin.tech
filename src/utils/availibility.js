import nextWeekday from './nextWeekday'

const weekFromNow = new Date()
weekFromNow.setDate(weekFromNow.getDate() + 7)

const Availibility = () => nextWeekday(weekFromNow, 1).toLocaleString('en-us', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})


export default Availibility