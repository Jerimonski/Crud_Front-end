import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className='rounded-xl shadow-lg'>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        calendarClassName='!rounded-lg !shadow-md'
      />
    </div>
  )
}
