import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div>
			<h1>Oops! Something went wrong.</h1>
		</div>
	);
}

export default ErrorPage;
