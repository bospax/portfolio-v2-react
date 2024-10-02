import ProfileImage from '../assets/images/avatar.jpg';

const Profile = () => {
	return (
		<div className="profile">
			<div className="profile-avatar">
				<img src={ProfileImage} alt="Jose Pacheco Jr." />
			</div>
			<div className="profile-description">
				<h1>Jose Pacheco Jr.</h1>
				<p>Software Developer / Web App Designer</p>
				<div className="links">
					<p>Connect with me:</p>
					<a href="#">Email</a>
					<a href="#">LinkedIn</a>
					<a href="#">CV</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
