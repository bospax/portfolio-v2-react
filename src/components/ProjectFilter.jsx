import PropTypes from 'prop-types';

const ProjectFilter = ({ selectedFilter, onFilterClick }) => {
	return (
		<div className="filter">
			Filter By:
			<button
				className={`filter-item ${
					selectedFilter === 'webapp' ? 'active' : ''
				}`}
				onClick={() => onFilterClick('webapp')}
			>
				WEB APPS
			</button>
			<button
				className={`filter-item ${
					selectedFilter === 'module' ? 'active' : ''
				}`}
				onClick={() => onFilterClick('module')}
			>
				MODULES
			</button>
			<button
				className={`filter-item ${
					selectedFilter === 'design' ? 'active' : ''
				}`}
				onClick={() => onFilterClick('design')}
			>
				DESIGNS
			</button>
		</div>
	);
};

ProjectFilter.propTypes = {
	selectedFilter: PropTypes.string.isRequired,
	onFilterClick: PropTypes.func.isRequired,
};

export default ProjectFilter;
