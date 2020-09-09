import React, {Component} from 'react';
import Navigation from './Navigation/index'
import Video from './Video/index'

export default class App extends Component{

  render () {
    return (
      <div className="app">
        <Navigation />
        <Video />
      </div>
    )
  }
}

