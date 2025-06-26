import { Link } from 'react-router-dom';
import SkillList from '../components/SkillList';

const SkillPage = () => {
	return (
		<>
			<div className="alert">
				<span>🧪</span>
				<p>
					These are the development technologies and tools I’ve
					mastered and actively use to build efficient, scalable, and
					modern applications.
				</p>
			</div>
			<div className="skills">
				<SkillList />
			</div>
		</>
	);
};
export default SkillPage;
