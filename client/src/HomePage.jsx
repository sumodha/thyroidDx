import './HomePage.css';
import {useState} from 'react';
import Popup from './PopUp';

const HomePage = () => {
    const [openPopup, setOpenPopup] = useState(false);

    return ( 
        <div id = "homepage">
            <div id="heading"> 
            <h1>ThyroidDx</h1>
            <h2>Decode your bloodwork. Detect thyroid disease.</h2>
            <button onClick= {() => setOpenPopup(true)}> Start Assessment</button>
            </div>
            <div id = "stats-container"> 
                <div className = "stats">
                    <h1>60%</h1>
                    <h3>of people are unaware of their condition</h3>
                </div>
                <div className = "stats">
                    <h1>20M</h1>
                    <h3>Americans have thyroid disease</h3>
                </div>
                <div className = "stats">
                    <h1>12%</h1>
                    <h3>of Americans will develop a thyroid condition</h3>
                </div>
            </div>
            {openPopup && <Popup setOpenPopup = {setOpenPopup}></Popup>}
        </div>
    );
}

export default HomePage;