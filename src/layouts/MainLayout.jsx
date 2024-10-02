import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ParticleJS from '../components/ParticlesJS';
import Profile from '../components/Profile';
import NavBar from '../components/NavBar';

const MainLayout = () => {
	return (
		<>
			<div className="container">
				<Hero />
				<Profile />
				<NavBar />
				<article id="content">
					{/* this is where the content will show after navigating of nav items */}
				</article>
				<Footer />
			</div>

			<ParticleJS />
		</>
	);
};

export default MainLayout;
