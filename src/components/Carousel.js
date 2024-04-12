import carousel_image_one from '../assets/images/carousel_image_one.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {

        return (
                <Carousel showThumbs={false} showStatus={false} width={"100%"}>
                <div>
                    <img src={carousel_image_one} alt='carousel_image' />
                </div>
                <div>
                    <img src={carousel_image_one} alt='carousel_image'/>
                </div>
                <div>
                    <img src={carousel_image_one} alt='carousel_image'/>
                </div>
            </Carousel>
        );
};

export default MyCarousel;