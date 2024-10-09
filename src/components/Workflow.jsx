import { useState } from 'react';
import Loader from './Loader';

const Workflow = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleIframeLoaded = () => {
		setIsLoading(false);
	};

	return (
		<>
			<Loader isLoading={isLoading} />

			<div
				className="diagram"
				style={{ display: isLoading ? 'none' : 'block' }}
			>
				<iframe
					width="100%"
					height="480"
					src="https://embed.coggle.it/diagram/Zqmxipnzn8szSGIu/c346d2a6b0a79cf54317ca688b62b8202ceb705fd2728e64ac1a2d9a5c742f0c"
					allowFullScreen
					onLoad={handleIframeLoaded}
				></iframe>
			</div>
		</>
	);
};
export default Workflow;
