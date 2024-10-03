import Career from './Career';
import CareerData from '../data/careers.js';

const CareerList = () => {
	const careerData = CareerData;

	return (
		<article>
			<ol className="timeline">
				{careerData.map((career, index) => {
					<Career key={index} career={career} />;
				})}
			</ol>
		</article>
	);
};

export default CareerList;
