import PropTypes from 'prop-types';
import { useState } from 'react';

const RenderSymbol = ({ tech }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<div className="symbol-container">
			{tech.image && !imageError ? (
				<div className="symbol">
					<img
						src={tech.image}
						alt={tech.name}
						width="22"
						onError={handleImageError}
					/>
				</div>
			) : (
				<div className="symbol">{tech.code}</div>
			)}
		</div>
	);
};

const SkillSet = ({ skillset }) => {
	return (
		<>
			<div className="skill-container">
				<div className="legend">
					<div className="legend-item">
						<div className="legend-color color-1"></div>
						<div className="legend-text">{skillset.category}</div>
					</div>
				</div>
				<div className="row">
					{skillset.techs.map((tech, index) => (
						<div key={index} className="element">
							{/* <div className="number">{tech.id}</div> */}
							<RenderSymbol tech={tech} />
							<div className="name">{tech.name}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

RenderSymbol.propTypes = {
	tech: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
		image: PropTypes.string,
	}).isRequired,
};

SkillSet.propTypes = {
	skillset: PropTypes.shape({
		category: PropTypes.string.isRequired,
		techs: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				code: PropTypes.string.isRequired,
				image: PropTypes.string,
			})
		).isRequired,
	}).isRequired,
};

export default SkillSet;
