import PropTypes from 'prop-types';

const Loader = ({
	isLoading,
	customMessage = 'Loading content, please wait...',
}) => {
	return (
		<>
			{isLoading && (
				<div id="loader">
					<p>{customMessage}</p>
				</div>
			)}
		</>
	);
};

Loader.propTypes = {
	isLoading: PropTypes.bool,
	customMessage: PropTypes.string,
};

export default Loader;
