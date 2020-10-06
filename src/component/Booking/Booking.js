import React from 'react';
import NavBar from '../Navbar/NavBar';
import './Booking.css';
import '../HomePage/Homepage.css';
import fakeData from '../../FakeData/FakeData';
import { useHistory, useParams } from 'react-router-dom';
const Booking = () => {

 const history = useHistory(); 
 const {id} = useParams(); //take the previous homepage booking index id
 const index = Number(id);
  const details = fakeData.find(data => data.id === index);

  const handleSubmit = (event)=> {
     history.push("/startbooking"); 
     event.preventDefault();
  }

  return ( 

    <div className="homepage">
    <NavBar></NavBar>
    <div className="row">
    <div className="placeDetails">
        <div className="details">
        <h1>{details.heading}</h1>
        <p>{details.detail}</p>
      </div>
        </div>

        <div style={{width: '30%',float:"right"}}>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Origin</label>
                      <input className="input" required type="text" name="" id="" placeholder="Enter your origin" />
                      <label htmlFor="">Destination</label>
                        <input className="input" required type="text" name="" id="" value={details.heading}/>
                    <div className="row" style={{width:'100%',marginBottom:'50px'}}>
                          <div style={{width:'45%',marginLeft:'15px'}}>
                          <label htmlFor="">From</label>
                              <input className="input" required type="date" name="" id="" placeholder="day/month/year"/>
                           </div>
                          <div style={{width: '50%'}}>
                          <label htmlFor="">To</label>
                             <input className="input"  required type="date" name="" id=""/>
                          </div>        
                      </div>
                    <input  type="submit" value="Start Booking"/>
            </form>
           </div>

        </div>
    </div>
    </div>
  );
};

export default Booking;