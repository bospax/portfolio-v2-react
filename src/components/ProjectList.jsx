import PropTypes from 'prop-types';
import Project from './Project';

const projectExperienceData = [
	{
		category: 'HR Integrated System',
		description:
			'Solutions for human resource management, employee data, evaluations, and recruitment process.',
		projects: [
			{
				title: 'SEDAR Manpower Module',
				details:
					'Manages employee records, assignments, and workforce planning.',
			},
			{
				title: 'SEDAR DA Evaluation Module',
				details:
					'Handles employee performance assessments and developmental actions.',
			},
			{
				title: 'SEDAR Monthly and Probi Module',
				details: 'Tracks monthly reports and probationary evaluations.',
			},
			{
				title: 'SEDAR HR Recruitment System',
				details:
					'Facilitates new employee data, applicant tracking, and hiring workflows.',
			},
		],
	},
	{
		category: 'Document & Policy System',
		description:
			'A platform for publishing, searching, and managing company rules, policies, and regulatory documents.',
		projects: [
			{
				title: 'SEDAR Policy & Documents Module',
				details:
					'Allows users to browse and search organizational policies by category or keyword.',
			},
		],
	},
	{
		category: 'ECommerce & Website Development',
		description:
			'Development of CMS-powered websites and online stores, ensuring responsive design and seamless user experience.',
		projects: [
			{
				title: 'Fresh Options Online Store',
				details:
					'An e-commerce platform for ordering meat and food products.',
			},
			{
				title: 'Infinity Trading Corporation',
				details:
					'Corporate website with integrated product catalog and inquiry system.',
			},
			{
				title: 'Rayomarine eCommerce',
				details:
					'Online sales platform for marine and industrial products.',
			},
			{
				title: 'Smart Strata Listing',
				details:
					'Property listing and management system for real estate businesses.',
			},
		],
	},
	{
		category: 'Trip Ticketing System',
		description:
			'Solutions for transport and logistics departments to monitor vehicle usage and generate trip-related reports.',
		projects: [
			{
				title: 'Project Metro',
				details:
					'A trip ticketing and reporting system to track vehicle movements, mileage, and fuel usage.',
			},
		],
	},
];

const ProjectList = ({ projects }) => {
	return (
		<>
			<div className="projects">
				{/* {projects.map((project, index) => (
					<Project key={index} project={project} />
				))} */}
			</div>

			<section className="project-experience-section">
				{projectExperienceData.map((category, index) => (
					<div key={index} className="category">
						<h3 className="category-title">{category.category}</h3>
						<p className="category-description">
							{category.description}
						</p>
						<ul className="project-list">
							{category.projects.map((project, idx) => (
								<li key={idx} className="project-item">
									<strong>{project.title}:</strong>{' '}
									{project.details}
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
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
