import React, {Component} from 'react';
import {Link} from 'react-router'
import videoList from '../videoListFile.js'

export default class Video extends Component{

  render () {
  	console.log(this.props);
  	const { nextVideo, selectedVideo } = this.props;
    return (
      <div className="width-half videoClass">
        <video className="videoClass">
        	<source src={ videoList[selectedVideo].url } type="video/mp4" />
        </video>
      </div>
    );
  }
}
