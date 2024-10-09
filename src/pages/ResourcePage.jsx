import ResourceList from '../components/ResourceList';

const ResourcePage = () => {
	return (
		<>
			<div className="alert">
				<span>💡</span>
				<p>
					Here are some of my resources that you might also find
					useful. If you do, please remember to connect with me to say
					thanks!🙂
				</p>
			</div>
			<ResourceList />
		</>
	);
};
export default ResourcePage;
