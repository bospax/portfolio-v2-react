import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CareerPage from './pages/CareerPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import WorkflowPage from './pages/WorkflowPage';
import ResourcePage from './pages/ResourcePage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <CareerPage />,
				},
				{
					path: 'skills',
					element: <SkillPage />,
				},
				{
					path: 'projects',
					element: <ProjectPage />,
				},
				{
					path: 'workflows',
					element: <WorkflowPage />,
				},
				{
					path: 'resources',
					element: <ResourcePage />,
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
