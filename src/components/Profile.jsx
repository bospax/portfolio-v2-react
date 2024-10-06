import { ASSETS_PATH_IMAGES } from '../libs/constants';
import LinkData from '../data/links';
import Link from './Link';

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

					{LinkData.map((link, index) => (
						<Link
							key={index}
							link={link.link}
							label={link.label}
							target={link.target}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Profile;
