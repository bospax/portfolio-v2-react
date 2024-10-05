import Career from './Career';
import CareerData from '../data/careers.js';

const CareerList = () => {
	return (
		<article>
			<ol className="timeline">
				{CareerData.map((career, index) => (
					<Career key={index} career={career} />
				))}
			</ol>
		</article>
	);
};

export default CareerList;
