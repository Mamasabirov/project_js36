import Carousel from 'react-bootstrap/Carousel';
import desktop from '../assets/desktop.png';
import desktop2 from '../assets/desktop2.png';
import desktop3 from '../assets/desktop3.png';
import desktop4 from '../assets/desktop4.png';
import desktop5 from '../assets/desktop5.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Promotion.css'

function Promotion() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desktop}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desktop2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desktop3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desktop4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desktop5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Promotion;
