import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import './App.css'
import Welcome from './components/Welcome'
import Downloads from './components/Downloads'

const App = ({links}) => (
  <div className="app">
    <Navigation links={links}/>
    <Welcome links={links}/>
    <Downloads links={links}/>
  </div>

)

export default App;
