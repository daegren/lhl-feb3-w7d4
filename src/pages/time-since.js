import React, { useState, useEffect } from 'react'
import moment from 'moment'

const secondsDiff = (a, b) => moment.duration(a.diff(b)).as('seconds')

const TimeSince = ({ date }) => {
  const [currentDate, setCurrentDate] = useState(moment())
  const [timeSinceDate, setTimeSinceDate] = useState(secondsDiff(date, currentDate))

  useEffect(() => {
    console.log('Setting up interval')
    const timer = setInterval(() => {
      console.log('Updating currentDate')
      setCurrentDate(moment())
    }, 1000)

    return () => {
      console.log('Clearing interval')
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log('Updating timeSinceDate')
    setTimeSinceDate(secondsDiff(date, currentDate))
  }, [date, currentDate])

  return (
    <div>
      <div>
        {date.toString()}
      </div>
      <div>
        {currentDate.toString()}
      </div>
      <div>
        {timeSinceDate}
      </div>
    </div>
  )
}

export default TimeSince
