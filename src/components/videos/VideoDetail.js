import React from "react";
import PropTypes from "prop-types";

const VideoDetail = ({ video }) => {
	return (
		video && (
			<div>
				<div className='ui embed'>
					<iframe
						src={`https://www.youtube.com/embed/${video.id.videoId}`}
						title='video player'
					/>
				</div>
				<div className='ui segment'>
					<h4 className='ui header'>{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
					<div className='ui comments'>
						<div className='comment'>
							<div className='content'>
								<h5>Published at </h5>
								<div className='metadata'>
									<div className='date'>
										{new Date(video.snippet.publishedAt).toDateString()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

VideoDetail.propTypes = {
	video: PropTypes.object,
};

export default VideoDetail;
