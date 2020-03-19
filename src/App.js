import React, { useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import TimeSince from './pages/time-since'
import DataFetching from './pages/data-fetching'
import MouseMove from './pages/mouse-move'
import FormDemo from './pages/form'
import useInterval from './hooks/useInterval'
import moment from 'moment'

function App () {
  const [startOfMinute, setStartOfMinute] = useState(moment().startOf('minute'))

  useInterval(useCallback(() => {
    setStartOfMinute(moment().startOf('minute'))
  }, [setStartOfMinute]), 60 * 1000)

  return (
    <Router>
      <div className='App'>
        <nav>
          <div><Link to='/time-since'>Set Interval Demo</Link></div>
          <div><Link to='/data-fetching'>Fetching Data Demo</Link></div>
          <div><Link to='/mouse-move'>Mouse Move Demo</Link></div>
          <div><Link to='/form'>Form Demo</Link></div>
        </nav>
        <main>
          <Switch>
            <Route path='/time-since' render={() => <TimeSince date={startOfMinute} />} />
            <Route path='/data-fetching' component={DataFetching} />
            <Route path='/mouse-move' component={MouseMove} />
            <Route path='/form' component={FormDemo} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
