import { useState } from 'react';
import ProjectFilter from '../components/ProjectFilter';
import ProjectList from '../components/ProjectList';
import ProjectData from '../data/projects';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
	const [selectedFilter, setSelectedFilter] = useState('webapp');

	const filteredProjects = ProjectData.filter((project) => {
		return project.category === selectedFilter;
	});

	const handleFilterClick = (filter) => {
		setSelectedFilter(filter);
	};

	return (
		<>
			<div className="alert">
				<span>🔥</span>
				<p>
					I have also created interesting features to showcase my
					knowledge of advanced technologies. Filter by &apos;
					<a
						href="#"
						className="highlight"
						onClick={(e) => {
							e.preventDefault();
							handleFilterClick('module');
						}}
					>
						Modules
					</a>
					&apos; to see the list.
				</p>
			</div>
			<br />
			<div className="alert">
				<span>⚙️</span>
				<p>
					Also take a look at my{' '}
					<Link to="/workflows" className="highlight">
						Workflow
					</Link>{' '}
					for an overview of my development process.
				</p>
			</div>

			<ProjectFilter
				selectedFilter={selectedFilter}
				onFilterClick={handleFilterClick}
			/>
			<ProjectList projects={filteredProjects} />
		</>
	);
};
export default ProjectPage;
