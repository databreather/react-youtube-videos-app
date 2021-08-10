import React from "react";
import VideoItem from "./VideoItem";
import PropTypes from "prop-types";

const VideoList = ({ selectVideo, videos }) => {
	videos = videos.map((video) => (
		<VideoItem selectVideo={selectVideo} key={video.id.videoId} video={video} />
	));
	return <div className='ui relaxed divided list'>{videos}</div>;
};

VideoList.propTypes = {
	selectVideo: PropTypes.func.isRequired,
	videos: PropTypes.array.isRequired,
};

export default VideoList;
