import React from 'react'
import {Switch,Route} from 'react-router-dom'
import {Cities} from './Cities'
import {Nav} from './Nav'

import './../assets/app.css'
export function App(){
  return(
    <div id='app'>
      <Nav />
      <Switch>
        
        <Route path='/search' component={Cities} />
      </Switch>
    </div>
  )
}