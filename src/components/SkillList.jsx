import SkillSet from './SkillSet';
import SkillSetData from '../data/skillset';

const SkillList = () => {
	const skillsets = SkillSetData;

	return (
		<>
			<div className="skill-table">
				{skillsets.map((skillset, index) => (
					<SkillSet key={index} skillset={skillset} />
				))}
			</div>
		</>
	);
};
export default SkillList;
