import React , {Component} from "react";
import logo from '../logo.png';
import './head.css';
class Head extends Component {
    render(){

        return(
            <div id="header">
                <div className="navi">
                <img src={logo} alt="" style={{'width' : '60px'}}/>
                <h2 className="logo">Git<span>Fit</span></h2>
                </div>
                <ul className="main">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li className="menu brand">
                        <a href="#ser">Services</a>
                        <ul className="drop">
                            <li><a href="#ex">Exercies</a></li>
                            <li><a href="#meal">Meals</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#cont">Contact</a>
                    </li>
                    <li>
                        <a href="#review">Review</a>
                    </li>
                </ul>
            </div>
        );
    }
};
export default Head;
