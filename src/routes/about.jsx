import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1 style={{position: 'absolute', top: '40%', left: '35%', transform: 'translate(-50%, -50%)', color: 'white'}}>About</h1>
            <div style={{overflowX: 'hidden', width: '100%', height: '100vh', background: 'url(https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundPosition: 'top center', backgroundSize: 'cover'}}>
                <p style={{textAlign: 'center', color: 'white', fontSize: '2rem', position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button style={{backgroundColor: 'white', fontSize: '2rem', position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'transparent', border: 'none'}}>
                    <Link to="/home">Check It Out</Link>
                </button>
            </div>
            <div>
                <h2 style={{textAlign: 'center'}}>ClothWire strives for excellence through quality products</h2>
                <div>
                    <h3 style={{textAlign: 'center', color: 'white'}}>We only use the best materials to ensure our products are of the highest quality</h3>
                </div>
            </div>
        </div>
    );
};

export default About;