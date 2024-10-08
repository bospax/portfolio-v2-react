import PropTypes from 'prop-types';
import { ASSETS_PATH_IMAGES } from '../libs/constants';
import { useState } from 'react';
import Modal from './Modal';
import Link from './Link';
import LinkData from '../data/links';
import SimpleSlider from './Slider';

const Project = ({ project }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	const images = [];

	for (let i = 1; i <= project.image_count; i++) {
		images.push(
			`${ASSETS_PATH_IMAGES}projects/${project.image_folder}/${i}.jpg`
		);
	}

	return (
		<>
			<div
				className="project-item"
				style={{
					background: `url(${images[2]}) center center / cover no-repeat`,
					filter: 'grayscale(1)',
				}}
				onClick={() => handleOpenModal()}
			>
				<p>{project.name}</p>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				title={project.name}
			>
				<div className="custom-slider-container">
					<SimpleSlider images={images} />
				</div>

				<div>
					<span>Connect with me for Project Demo:</span>
					<ul className="links">
						{LinkData.map((link, index) => (
							<li key={index}>
								<Link
									link={link.link}
									label={link.label}
									target={link.target}
								/>
							</li>
						))}
					</ul>
				</div>
			</Modal>
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
