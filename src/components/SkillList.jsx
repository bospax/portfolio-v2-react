import SkillSet from './SkillSet';
import SkillSetData from '../data/skillset';

const SkillList = () => {
	return (
		<>
			<div className="skill-table">
				{SkillSetData.map((skillset, index) => (
					<SkillSet key={index} skillset={skillset} />
				))}
			</div>
		</>
	);
};
export default SkillList;
