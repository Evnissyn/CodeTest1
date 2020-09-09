import React, {Component} from 'react';
import VideoLink from './VideoLinkContainer';

import videoList from '../videoListFile.js'

/*
const videoList = [{
	"title": "Creating a Campaign",
	"minutes": 1,
	"seconds": 23,
	"url": "https:\/\/assets.thankview.com\/assets\/videos\/walkthrough\/1_Creating_A_Campaign.mp4",
	"thumb": "https:\/\/assets.thankview.com\/assets\/videos\/thumbnails\/1.jpg"
}]
*/

export default class Navigation extends Component{

  render () {
    return (
      <div className="width-half navigation">
        <h1>Thankview Walkthrough</h1>
        {
        	videoList.map((item, index) => (
        		<VideoLink 
        			key={index}
        			number={index} 
        			title={item.title}
        			minutes={item.minutes}
        			seconds={item.seconds} 
        		/>))
        }
      </div>
    )
  }
}
