import PropTypes from 'prop-types';

const Link = ({ link, label, target, description }) => {
	return (
		<a target={target} href={link} className="highlight">
			{label}
		</a>
	);
};

Link.propTypes = {
	link: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	target: PropTypes.string,
	description: PropTypes.string,
};

export default Link;
