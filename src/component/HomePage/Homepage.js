import React, { useState } from 'react';
import NavBar from '../Navbar/NavBar';
import './Homepage.css';
import fakeData from '../../FakeData/FakeData';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/Sajek.png';
import image2 from '../../images/Sreemongol.png';
import image3 from '../../images/sundorbon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => { 
    const [index, setIndex] = useState(0); 
    const handleSelect = (selectedIndex) => {   // carosel handle select option
        setIndex(selectedIndex);
  }

  const details = fakeData.filter(data => data.id === index);
    return (
        <div className="homepage"> 
            <NavBar></NavBar>
            <div className="row">
        <div className="placeDetails">
            <div className="details">
            {
            details.map(data => <>
              <h1>{data.heading}</h1>
              <p>{data.detail}</p>
               <button ><Link to={`/booking/${index}`} style={{color: 'white', textDecoration:'none'}}> BOOKING <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></button>
                  
            </>)
                 
              }
          </div>
            </div>

            {/* Carosel section starts  */}

            <div style={{width: '30%',float:'right'}}>
                <Carousel className="carousel"  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={image1}
                alt="Sajek"
              />
              <Carousel.Caption>
                <h3>SAJEK</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>SREEMONGOL</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="Sreemongol"
              />

              <Carousel.Caption>
                <h3>SUNDARBAN</h3>
              </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
            </div>
            
             {/* Carosel section ends  */}
        </div>
        </div>
    );
};

export default Homepage;