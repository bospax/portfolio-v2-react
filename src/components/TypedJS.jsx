import Typed from 'typed.js';
import { useEffect } from 'react';

const TypedJS = () => {
	useEffect(() => {
		// initialize Typed.js
		const typed = new Typed('#typing-element', {
			strings: ["Hello, I'm Jose!"],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		});

		// cleanup for typed.js
		return () => {
			typed.destroy();
		};
	}, []);

	return <h1 id="typing-element" className="callout-title"></h1>;
};

export default TypedJS;
