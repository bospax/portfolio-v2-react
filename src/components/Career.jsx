import PropTypes from 'prop-types';
import { ASSETS_PATH_IMAGES } from '../libs/constants';

const Career = ({ career }) => {
	return (
		<li className="timeline-item extra-space">
			<span className="timeline-item-icon filled-icon">
				{career.year}
			</span>
			<div className="timeline-item-wrapper">
				<div className="timeline-item-description">
					<i className="avatar small">
						<img src={ASSETS_PATH_IMAGES + career.logo} />
					</i>
					<span>
						<a href="#">{career.position}</a> worked at{' '}
						{career.company} from{' '}
						<time dateTime={career.duration}>
							{career.duration}
						</time>
					</span>
				</div>
				<div className="timeline-detail">
					<ul>
						{career.responsibilities.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</li>
	);
};

const CareerPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	position: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
	responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
});

Career.propTypes = {
	career: CareerPropType.isRequired,
};

export default Career;
