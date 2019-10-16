import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Index } from './Index'

export const App = () => {
  return (
    <Router>
      <section className="App">
        <Route exact path="/" component={Index} />
      </section>
    </Router>
  )
}
