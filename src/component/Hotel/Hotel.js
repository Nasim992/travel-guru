import { Map, Marker,GoogleApiWrapper } from 'google-maps-react';
import React, { useContext} from 'react';
import { Context } from '../../App';
import fakeData from '../../FakeData/FakeData';
import "./Hotel.css";
import NavBarBlack from '../NavBarBlack/NavBarBlack';


const Hotel = (props) => {
    const { idNo } = useContext(Context);
    const [indexId] = idNo;
    console.log(indexId);
    const hotel = fakeData.find(fakedata => fakedata.id === indexId);
    const mapStyles = {
        width: '100%',
        height: '100%'
    };
    const latitude = hotel.lat;
    const longitude = hotel.lng;
    console.log(latitude, longitude);

    return (
        <div>
            <NavBarBlack></NavBarBlack>
            
            <div className="hotel-container">
            <span></span>
                <div className="row">
                    <div className="col-6">
                        <h4 style={{marginLeft:'20px'}}> Stay in {hotel.heading}</h4>
            {
                hotel.hotelDetails.map(detail => <div className="row m-2">
                    <div className="col-md-6">
                        <img style={{width:'270px',height:'188px'}} src={detail.img} alt=""/>
                    </div>
                    <div className="col-md-6"> 
                        <h4>{detail.heading}</h4>
                        <p>{detail.placeDetails}</p>
                        <p>${detail.price}</p>
                    </div>
                </div>)
            }
            </div>
                    <div className="col-md-6">
                        
                    <Map
                        google={props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={
                        {
                            lat: latitude,
                            lng: longitude
                        }
                        }
                        >
                            <Marker position={{ lat: latitude, lng: longitude}} />
                    </Map>
                    </div>
                    
                    </div>
            </div>
            </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyB1D6ho4-hUgPt0fbVSdBKoxq41TF1sl4U")
    
    
})(Hotel);