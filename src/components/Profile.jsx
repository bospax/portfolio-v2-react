import { ASSETS_PATH_IMAGES } from '../libs/constants';

const Profile = () => {
	return (
		<div className="profile">
			<div className="profile-avatar">
				<img
					src={`${ASSETS_PATH_IMAGES}avatar.jpg`}
					alt="Jose Pacheco Jr."
				/>
			</div>
			<div className="profile-description">
				<h1>Jose Pacheco Jr.</h1>
				<p>Software Developer / Web App Designer</p>
				<div className="links">
					<p>Connect with me:</p>
					<a href="#" className="highlight">
						Email
					</a>
					<a href="#" className="highlight">
						LinkedIn
					</a>
					<a href="#" className="highlight">
						CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
