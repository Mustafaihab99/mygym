import React ,{Component} from "react";
import pro from './pro.png';
import { Link } from "react-router-dom";
import './prot.css';
class Protin extends Component{
    handleOpenInNewTab = (event) => {
        event.preventDefault();
        const url = window.location.origin + '/cart'; // Construct the full URL
        window.open(url, '_blank');
    };
    render(){
        return(
            <React.Fragment>
                <h2 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>Buy<span> Portien</span></h2>
                <div style={{display : 'flex' , flexDirection : 'row' , textAlign : 'center' , color: 'white'}}>
                    <div className="exp" style={{marginTop: '10%' ,marginLeft: '20px'}}>
                        <h6>Whey protein for muscle growth: This protein helps in boosting muscle mass and promotes muscle growth.
                            Many trainers prefer protein powders for men who are bodybuilders,
                            athletes, and active gym-goers as it helps in building muscle strength and improves performance.
                            we provide it by cheapy price and good quality of it come and buy it and enjoy with our offer</h6>
                        <Link to="/cart" onClick={this.handleOpenInNewTab}><button className="bton" style={{marginTop : '20%'}}>Buy now</button></Link>
                    </div>
                    <div className="image">
                        <img src={pro} alt=""></img>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Protin;