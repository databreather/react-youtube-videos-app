import React from "react";
import PropTypes from "prop-types";

const VideoItem = ({ selectVideo, video }) => {
	const onVideoItemClick = () => {
		selectVideo(video);
		//manipulateVideos(video);
	};
	return (
		<div className='video-item item' onClick={onVideoItemClick}>
			<img
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className='content'>
				<div className='header'>{video.snippet.title}</div>
			</div>
		</div>
	);
};

VideoItem.propTypes = {
	selectVideo: PropTypes.func.isRequired,
	video: PropTypes.object.isRequired,
};

export default VideoItem;
