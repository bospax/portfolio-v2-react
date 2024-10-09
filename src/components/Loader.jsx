import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
	return (
		<>
			{isLoading && (
				<div id="loader">
					<p>Loading content, please wait...</p>
				</div>
			)}
		</>
	);
};

Loader.propTypes = {
	isLoading: PropTypes.bool,
};

export default Loader;
