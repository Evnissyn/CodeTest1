import React, { Component } from 'react';

const VideoLink = ({ number, title, minutes, seconds, url, userChoosesVideo, selectedVideo }) => {
	return (
		<div 
			key={`video_link_${number}`} 
			onClick={ () => {userChoosesVideo(number);}}
			className={ selectedVideo === number ? 'selected vidLink' : 'vidLink' }
		>
			<span>{ number + 1 }. { title }</span>
			<span>{minutes}m {seconds}s</span>
		</div>
	)
}

export default VideoLink;