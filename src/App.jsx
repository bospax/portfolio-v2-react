import ProfileImage from './assets/images/avatar.jpg';

function App() {
	return (
		<>
			<div className="container">
				<div className="callout">
					<span>👋 </span>

					<p className="callout-description">
						A Software Developer with over 5 years of professional
						development experience. I&apos;m a passionate programmer
						who feels enjoyment and fulfillment from the journey of
						creating softwares and applications that give solution
						from simple to complex problems.
					</p>
				</div>
				<div className="profile">
					<div className="profile-avatar">
						<img src={ProfileImage} alt="Jose Pacheco Jr." />
					</div>
					<div className="profile-description">
						<h1>Jose Pacheco Jr.</h1>
						<p>Software Developer / WebApp Designer</p>
						<div className="links">
							<p>Connect with me:</p>
							<a href="#">Email</a>
							<a href="#">LinkedIn</a>
							<a href="#">CV</a>
						</div>
					</div>
				</div>
				<nav>
					<button
						className="nav-item active"
						data-file="timeline.html"
					>
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
				<article id="content"></article>
				<section className="contact">
					<div className="links">
						<p>Connect with me to discuss further:</p>
						<a href="#">Email</a>
						<a href="#">LinkedIn</a>
						<a href="#">CV</a>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
