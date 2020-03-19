import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import useInterval from '../hooks/useInterval'

const secondsDiff = (a, b) => moment.duration(a.diff(b)).as('seconds')

const TimeSince = ({ date }) => {
  const [currentDate, setCurrentDate] = useState(moment())
  const [timeSinceDate, setTimeSinceDate] = useState(secondsDiff(date, currentDate))

  const updateDate = useCallback(() => {
    console.log('Updating currentDate')
    setCurrentDate(moment())
  }, [setCurrentDate])

  useInterval(updateDate, 1000)

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
