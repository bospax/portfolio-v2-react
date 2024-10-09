import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SimpleSlider = ({ images }) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<div key={index}>
					<img src={image} alt="" />
				</div>
			))}
		</Slider>
	);
};

SimpleSlider.propTypes = {
	images: PropTypes.array,
};

export default SimpleSlider;
