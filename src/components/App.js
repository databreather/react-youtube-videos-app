import "./style.css";
import React from "react";
import randYoutubeVideo from "youtube-random-video";
import youtube from "../apis/youtube";
import SearchBar from "./layout/SearchBar";
import VideoList from "./videos/VideoList";
import VideoDetail from "./videos/VideoDetail";

const KEY = "AIzaSyDtPtJEtuasCgOpQ1hBVVEXwnfsnLS_A1w";
class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		//get a random a youtube video
		randYoutubeVideo.getRandomVid(KEY, (err, data) => {
			if (err) throw err;
			//call searchVideos with the random video when component mounts
			this.searchVideos(data.snippet.title);
		});
	}

	searchVideos = async (term) => {
		const data = await (await youtube.get(`/search?q=${term}`)).data;
		this.setState({
			videos: data.items.slice(1, data.items.length), //rest of the videos
			selectedVideo: data.items[0], //default video
		});
	};

	selectVideo = (video) => {
		this.setState({ selectedVideo: video });
		this.removeVideoFromList(video);
	};

	removeVideoFromList = (vid) => {
		randYoutubeVideo.getRandomVid(KEY, (err, data) => {
			if (err) throw err;

			this.setState({
				videos: this.state.videos.filter(
					(video) => video.id.videoId !== vid.id.videoId
				),
			});
			this.setState({ videos: [...this.state.videos, data] });
		});
	};

	render() {
		return (
			<div className='ui container' style={{ paddingTop: "1.5em" }}>
				<h1>YouMagic</h1>
				<SearchBar searchVideos={this.searchVideos} />
				<div className='ui grid'>
					<div className='row'>
						<div className='eleven wide column'>
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								selectVideo={this.selectVideo}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
