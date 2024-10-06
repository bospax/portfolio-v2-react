import PropTypes from 'prop-types';
import { ASSETS_PATH_IMAGES } from '../libs/constants';

const Project = ({ project }) => {
	const images = [];

	for (let i = 1; i <= project.image_count; i++) {
		images.push(
			`${ASSETS_PATH_IMAGES}projects/${project.image_folder}/${i}.jpg`
		);
	}

	return (
		<>
			<div
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasExample"
				aria-controls="offcanvasExample"
				className="project-item"
				style={{
					background: `url(${images[2]}) center center / cover no-repeat`,
					filter: 'grayscale(1)',
				}}
			>
				<p>{project.name}</p>
			</div>
		</>
	);
};

Project.propTypes = {
	project: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image_folder: PropTypes.string.isRequired,
		image_count: PropTypes.number.isRequired,
	}).isRequired,
};

export default Project;
