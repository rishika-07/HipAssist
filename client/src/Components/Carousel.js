import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarousalSection() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://th.bing.com/th/id/OIP.dLLGN4LHHnI40OZoX6_CNwHaFj?pid=ImgDet&rs=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>GMR</h5>
          <p>“KNO is by the far the most helpful resource to learn with. Cannot imagine the world before this platform. Thank you for creating it.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://th.bing.com/th/id/R.a23e2dcdd3de73def6ddbd3cae1742c6?rik=Qp5z6JrTCMtjVg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f04%2f06%2f338054-landscape-Sun.jpg&ehk=SsN0SMy0iAXyYPKSGIUJc1FqWGO2tx3k%2fQngJQj%2flPs%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>
            Angel One
          </h5>
          <p>“Alltius' platform has been extremely promising. As a FinTech with high bar on partner security, they meet our info-sec standards.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.hdqwalls.com/wallpapers/blue-sea-cave-4k.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Prudential</h5>
          <p>
          One of the best of its kind we've seen. Earlier, it took 6-7 months to get new reps to medium level in training. KNO could cut that time by 50%.”

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default CarousalSection ;
