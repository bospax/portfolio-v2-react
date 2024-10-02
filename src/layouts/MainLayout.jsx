import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ParticleJS from '../components/ParticlesJS';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<div className="container">
				<Hero />
				<Profile />
				<NavBar />
				<article id="content">
					<Outlet />
				</article>
				<Footer />
			</div>

			<ParticleJS />
		</>
	);
};

export default MainLayout;
