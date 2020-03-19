import React, { useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import TimeSince from './pages/time-since'
import DataFetching from './pages/data-fetching'
import useInterval from './hooks/useInterval'
import moment from 'moment'

function App () {
  const [startOfMinute, setStartOfMinute] = useState(moment().startOf('minute'))

  useInterval(useCallback(() => {
    setStartOfMinute(moment().startOf('minute'))
  }), 60 * 1000)

  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/time-since'>Set Interval Demo</Link>
          <Link to='/data-fetching'>Fetching Data Demo</Link>
        </nav>
        <main>
          <Switch>
            <Route path='/time-since' render={() => <TimeSince date={startOfMinute} />} />
            <Route path='/data-fetching' component={DataFetching} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
