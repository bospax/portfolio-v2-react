import SkillList from '../components/SkillList';

const SkillPage = () => {
	return (
		<>
			<div className="alert">
				<span>🧪</span>
				<p>
					Here are my arsenal of development technologies. For more
					practical and comprehensive use cases of my skills check out
					my{' '}
					<a href="#" className="highlight">
						Projects
					</a>
					.
				</p>
			</div>
			<div className="skills">
				<SkillList />
			</div>
		</>
	);
};
export default SkillPage;
