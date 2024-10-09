import PropTypes from 'prop-types';

const Resource = ({ resource }) => {
	return (
		<>
			<li>
				<a href={resource.link}>
					<h5>{resource.label}</h5>
					<p>{resource.description}</p>
				</a>
			</li>
		</>
	);
};

Resource.propTypes = {
	resource: PropTypes.shape({
		label: PropTypes.string,
		description: PropTypes.string,
		link: PropTypes.string,
	}),
};

export default Resource;
