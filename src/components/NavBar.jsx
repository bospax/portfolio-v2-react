import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<NavLink to="/" className="nav-item">
				CAREER
			</NavLink>
			<NavLink to="skills" className="nav-item">
				SKILLS
			</NavLink>
			<NavLink to="projects" className="nav-item">
				PROJECTS
			</NavLink>
			<NavLink to="workflows" className="nav-item">
				WORKFLOW
			</NavLink>
			<NavLink to="resources" className="nav-item">
				RESOURCES
			</NavLink>
		</nav>
	);
};
export default NavBar;
