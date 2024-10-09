import Resource from './Resource';
import ResourceData from '../data/resources';

const ResourceList = () => {
	return (
		<>
			<div className="resources">
				<ol>
					{ResourceData.map((resource, index) => (
						<Resource key={index} resource={resource} />
					))}
				</ol>
			</div>
		</>
	);
};
export default ResourceList;
