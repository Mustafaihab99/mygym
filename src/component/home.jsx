import React, { Component } from "react";
import { Link } from 'react-router-dom';
import lift from '../left.png';
import './home.css';

class Home extends Component {
  handleOpenInNewTab = (event) => {
    event.preventDefault();
    const url = window.location.origin + '/LoginForm'; // Construct the full URL
    window.open(url, '_blank');
  };

  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="content">
            <h3 id="home">Build Your</h3>
            <h1>Dream Physique</h1>
            <h3><span className="text">Body Building</span></h3>
            <p>
              Regular physical workouts can have benefits that compound over time. When you exercise consistently,
              you may experience improvements in various aspects of your health and well-being
            </p>
            <Link to="/LoginForm" onClick={this.handleOpenInNewTab}><button className="bton"><a href=".">Join Us</a></button></Link>
          </div>
          <div className="image">
            <img src={lift} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
