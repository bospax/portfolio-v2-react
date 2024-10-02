const NavBar = () => {
	return (
		<nav>
			<button className="nav-item active" data-file="timeline.html">
				CAREER
			</button>
			<button className="nav-item" data-file="skills.html">
				SKILLS
			</button>
			<button className="nav-item" data-file="projects.html">
				PROJECTS
			</button>
			<button className="nav-item" data-file="workflow.html">
				WORKFLOW
			</button>
			<button className="nav-item" data-file="resources.html">
				RESOURCES
			</button>
		</nav>
	);
};
export default NavBar;
