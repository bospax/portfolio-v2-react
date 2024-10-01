import { useEffect } from 'react';

export const ParticleJS = () => {
	useEffect(() => {
		window.particlesJS.load(
			'particles-js',
			'/particlesjs-config.json',
			function () {
				console.log('Particles.js loaded!');
			}
		);
	}, []);

	return <div id="particles-js"></div>;
};
