import Link from './Link';
import LinkData from '../data/links';

const Footer = () => {
	return (
		<section className="contact">
			<p>Connect with me to discuss further:</p>
			<br />
			<ul className="links">
				{LinkData.map((link, index) => (
					<li key={index}>
						<Link
							link={link.link}
							label={link.label}
							target={link.target}
						/>
						{' ' + link.description}
					</li>
				))}
			</ul>
		</section>
	);
};
export default Footer;
