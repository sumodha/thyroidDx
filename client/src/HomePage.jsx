import './HomePage.css';

const HomePage = () => {
    return ( 
        <div id = "homepage">
            <div id="heading"> 
            <h1>ThyroidDx</h1>
            <h2>Decode your bloodwork. Detect Thyroid disease.</h2>
            <button> Start Assessment</button>
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
        </div>
    );
}

export default HomePage;