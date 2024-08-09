import React,{Component} from "react";
import './sleep-style.css';
class Sleep extends Component{
    caculate = ()=>{
        document.getElementById("letgo").classList.remove("animation")
        let inbed= Number(Number(document.getElementById("hr1").value)*60)+Number(document.getElementById("min1").value);
        let asleep=Number(Number(document.getElementById("hr2").value)*60)+Number(document.getElementById("min2").value);
        let eff= (asleep/inbed)*100;
        document.documentElement.style.setProperty('--prog',`${Math.floor(eff)}`)
        document.getElementById("sleere").textContent=`${Math.floor(eff)}%`
        setTimeout(() => {
            
            document.getElementById("letgo").classList.add("animation")
        }, 100);
    }
    render(){
        return(
            <React.Fragment>
                <div className="sleep-calc">
                    <div className="div-cir">
                        <div className="circular" id="letgo">
                            <p className="sleep-result" id="sleere">0%</p>
                        </div>
                    </div>
                    <div className="sleep-inputs">
                        <p style={{fontSize : '20px' , position : "unset" , textAlign : "start" , transform: 'none'}}>Time in bed</p>
                        <input type="Number" id="hr1" /> <label htmlFor="hr1">Hours</label> <input type="Number" id="min1" /> <label htmlFor="min1">Minutes</label>
                        <p style={{fontSize : '20px' , position : "unset" , textAlign : "start" , transform: 'none'}}>Time Asleep</p>
                        <input type="Number" id="hr2" /> <label htmlFor="hr2">Hours</label> <input type="Number" id="min2" /> <label htmlFor="min2">Minutes</label>
                        <button onClick={this.caculate}>Calculate</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Sleep;