import React, { Component } from "react";
import calo from './calor.jpg';
import './calor.css';
import { Link } from "react-router-dom";

class Cal extends Component {
    handleOpenInNewTab = (event) => {
        event.preventDefault();
        const url = window.location.origin + '/calc'; // Construct the full URL
        window.open(url, '_blank');
      };
    render() {
        return (
            <div className="mytit">
                <h2 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>Calc<span> Calories</span></h2>
                <div className="mypage">
                    <div>
                        <h4>A calorie is a unit of energy.
                            In nutrition, calories refer to the energy people get from the food and drink they consume,
                            and the energy they use in physical activity.
                            Calories are essential for human health. The key is consuming the right amount.
                            Everyone requires different amounts of energy each day, depending on age, sex, size, and activity level.
                            People in the United States consume more than 11 percent of their daily calories from fast food.
                            Foods high in energy but low in nutritional value provide empty calories.
                            we present a new option to caculate your Calories and your sleep Quality.
                        </h4>
                        <Link to="/calc" onClick={this.handleOpenInNewTab3}><button><a href=".">Click here</a></button></Link>
                    </div>
                    <img src={calo} alt="" />
                </div>
            </div>
        );
    }
};
export default Cal;