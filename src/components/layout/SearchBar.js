import React from "react";
import PropTypes from "prop-types";

class SearchBar extends React.Component {
	state = { term: "" };

	static propTypes = {
		searchVideos: PropTypes.func.isRequired,
	};
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.searchVideos(this.state.term);
	};

	render() {
		return (
			<div className='ui segment'>
				<div className='ui fluid category search'>
					<form onSubmit={this.onFormSubmit}>
						<div className='ui icon input'>
							<input
								className='prompt'
								type='text'
								value={this.state.term}
								onChange={this.onInputChange}
								placeholder='Search for video...'
							/>
							<i className='search icon'></i>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
