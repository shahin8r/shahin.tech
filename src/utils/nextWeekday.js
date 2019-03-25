const nextWeekday = (date, dayOfWeek) => {
  const resultDate = new Date(date.getTime());
  resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7)

  return resultDate
}

export default nextWeekday