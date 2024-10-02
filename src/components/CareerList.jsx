import Career from './Career';

const CareerList = () => {
	const careerData = [
		{
			id: 1,
			year: 2024,
			position: 'Project Based Web Developer',
			company: 'RDF Feeds, Livestock & Food Inc.',
			duration: 'October, 2023 to May, 2024',
			logo: 'rdf logo.jpg',
			responsibilities: [
				'Developed and enhanced application features and functionality.',
				'Developed software test automation process.',
				'Performed Test Driven Development, Unit and E2E testing.',
				'Provided support and troubleshooting for users and clients in the developed system.',
				'Integrated additional features based on client requirements.',
				'Collaborated with clients to understand and fulfill their requests.',
				'Ensured seamless performance and reliability of remote applications.',
			],
		},
		{
			id: 2,
			year: 2023,
			position: 'Junior Web Application Developer',
			company: 'RDF Feeds, Livestock & Food Inc.',
			duration: 'August, 2019 to October, 2023',
			logo: 'rdf logo.jpg',
			responsibilities: [
				'Streamlined manual operations, resulting in system efficiency through the development of efficient web and app solutions.',
				'Designed and developed full-stack applications using latest technologies.',
				'Ensured application security and API/database integration.',
				'Supported and troubleshot production issues.',
				'Responsible for development, testing, maintenance, and operation of web software.',
				'Ensured seamless front-end, back-end, and service integration.',
			],
		},
		{
			id: 3,
			year: 2019,
			position: 'Wordpress & PHP Developer',
			company: 'IConcept Global Advertising',
			duration: 'September, 2018 to June, 2019',
			logo: 'iconcept logo.jpg',
			responsibilities: [
				'Designed, developed, and tested user-friendly, high-performance websites.',
				'Tested, fixed bugs, and enhanced existing websites for better functionality and speed.',
				'Integrated third-party plugins in WordPress.',
				'Ensured compatibility across devices, browsers, and platforms.',
				'Collaborated with design and project management teams for product delivery.',
			],
		},
		{
			id: 4,
			year: 2018,
			position: 'Graphics & Web Design',
			company: 'VTG Travel and Tours',
			duration: 'January, 2018 to August, 2018',
			logo: 'vtglogo.jpg',
			responsibilities: [
				'Developed and maintained the company’s official website.',
				'Created visual and graphic content, designing posters and advertising.',
				'Collaborated in promotion and social media marketing.',
				'Handled booking and reservation transactions.',
			],
		},
	];

	return (
		<article>
			<ol className="timeline">
				{careerData.map((career, index) => (
					<Career key={index} career={career} />
				))}
			</ol>
		</article>
	);
};

export default CareerList;
