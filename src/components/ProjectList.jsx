import PropTypes from 'prop-types';
import Project from './Project';

const ProjectList = ({ projects }) => {
	return (
		<>
			<div className="projects">
				{projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</div>
		</>
	);
};

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			image_folder: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired,
			description: PropTypes.string,
			image_count: PropTypes.number,
			category: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default ProjectList;
