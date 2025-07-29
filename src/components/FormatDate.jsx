import React from 'react'

const FormatDate = (date) => {
  const dateToFormat = new Date(date)
  const month = dateToFormat.getMonth() + 1
  const day = dateToFormat.getDate()
  const year = dateToFormat.getFullYear()

  const formattedDate = month + "/" + day + "/" + year

  return formattedDate
}

export default FormatDate;
