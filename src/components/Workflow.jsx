import { useState } from 'react';
import Loader from './Loader';

const Workflow = () => {
	const [isLoading, setIsLoading] = useState(true);

	const handleIframeLoaded = () => {
		setIsLoading(false);
	};

	return (
		<>
			<Loader
				isLoading={isLoading}
				customMessage="Waiting for Coggle.it resources..."
			/>

			<div
				className="diagram"
				style={{ display: isLoading ? 'none' : 'block' }}
			>
				<iframe
					width="100%"
					height="480"
					src="https://coggle.it/diagram/ZzVpcwaoDqinBuvs/t/software-development-workflow/3245cfca7ab77a8791d0eb62d6a916833ca6c6a2550d83e33dec73eed1984251"
					allowFullScreen
					onLoad={handleIframeLoaded}
				></iframe>
			</div>
		</>
	);
};
export default Workflow;
