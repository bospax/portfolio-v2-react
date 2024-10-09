import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';

const CareerPage = lazy(() => import('./pages/CareerPage'));
const SkillPage = lazy(() => import('./pages/SkillPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const WorkflowPage = lazy(() => import('./pages/WorkflowPage'));
const ResourcePage = lazy(() => import('./pages/ResourcePage'));

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			errorElement: <ErrorPage />,
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: (
						<Suspense fallback={<Loader isLoading={true} />}>
							<CareerPage />
						</Suspense>
					),
				},
				{
					path: 'skills',
					element: (
						<Suspense fallback={<Loader isLoading={true} />}>
							<SkillPage />
						</Suspense>
					),
				},
				{
					path: 'projects',
					element: (
						<Suspense fallback={<Loader isLoading={true} />}>
							<ProjectPage />
						</Suspense>
					),
				},
				{
					path: 'workflows',
					element: (
						<Suspense fallback={<Loader isLoading={true} />}>
							<WorkflowPage />
						</Suspense>
					),
				},
				{
					path: 'resources',
					element: (
						<Suspense fallback={<Loader isLoading={true} />}>
							<ResourcePage />
						</Suspense>
					),
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
