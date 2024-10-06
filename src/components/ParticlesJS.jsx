import { useEffect } from 'react';

const ParticleJS = () => {
	useEffect(() => {
		window.particlesJS.load('particles-js', '/particlesjs-config.json');
	}, []);

	return <div id="particles-js"></div>;
};

export default ParticleJS;
