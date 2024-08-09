import React,{Component} from "react";
import './calc-style.css';
import Sleep from "./sleep-quality";
class Calculator extends Component{
    state={
        age:"",
        height:"",
        weight:"",
        gender:"1",
        activity:"",
        result:""
    }
        
    setage=(event)=>{
        this.setState({age:event.target.value})
    }
    setheight=(event)=>{
        this.setState({height:event.target.value})
    }
    setweight=(event)=>{
        this.setState({weight:event.target.value})
    }
    setgender=(event)=>{
        this.setState({gender:event.target.value})
    }
    setactv=(event)=>{
        this.setState({activity:event.target.value})
    }
    calculatebmr=()=>{
        let age=this.state.age;
        let weight=this.state.weight;
        let height=this.state.height;
        let gender=this.state.gender;
        let act=this.state.activity;
        let resflag=true;
        if(age==="" || (age<15 || age>80)){document.getElementById("in1").style.borderColor="red";resflag=false}
        else{document.getElementById("in1").style.borderColor="rgb(100,217,178)";resflag=true}
        if(height===""){document.getElementById("in2").style.borderColor="red";resflag=false}
        else{document.getElementById("in2").style.borderColor="rgb(100,217,178)";resflag=true}
        if(weight===""){document.getElementById("in3").style.borderColor="red";resflag=false}
        else{document.getElementById("in3").style.borderColor="rgb(100,217,178)";resflag=true}
        if(act===""){document.getElementById("sel").style.borderColor="red";resflag=false}
        else{document.getElementById("sel").style.borderColor="rgb(100,217,178)";resflag=true}
        if(resflag){
            let result=(10*weight)+(6.25*height)-(5*age);
            if(gender==="1"){result+=5;}
            else{result-=161}
            result*=act;
            console.log("bmr:"+result)
            this.setState({result:result});
            let bmi=weight/(height/100)**2;
            console.log(bmi);
            if(bmi<=25){
                for(let i=1;i<=4;i++){
                    document.getElementById(`re${i}`).classList.remove("suggest")
                }
                document.getElementById("re1").classList.add("suggest")
            }
            else if(bmi<=30){
                for(let i=1;i<=4;i++){
                    document.getElementById(`re${i}`).classList.remove("suggest")
                }
                document.getElementById("re2").classList.add("suggest");
            }
            else if(bmi<=35){
                for(let i=1;i<=4;i++){
                    document.getElementById(`re${i}`).classList.remove("suggest")
                }
                document.getElementById("re3").classList.add("suggest");
            }
            else if(bmi<=40 || bmi>40){
                for(let i=1;i<=4;i++){
                    document.getElementById(`re${i}`).classList.remove("suggest")
                }
                document.getElementById("re4").classList.add("suggest");
            }
            document.getElementById("divre").style.display="block"
            setTimeout(() => {
                document.getElementById("divre").style.opacity="1"
            }, 300);
        }
    }
    render(){
        return(
        <React.Fragment>
            <div className="cont">
                <div className="imdiv">
                    <Sleep></Sleep>
                </div>
                <div className="calculator">
                    <div className="divne">
                    <label htmlFor="in1">Age</label>
                    <div className="in1be">
                        <input type="number" id="in1" min={15} max={80} placeholder="age 15-80" onChange={this.setage} value={this.state.age}/>
                    </div>
                    </div>
                    <div className="divne">
                    <label htmlFor="in2">Height</label>
                    <div className="in2be">
                        <input type="number" id="in2" onChange={this.setheight} value={this.state.height}/>
                    </div>
                    </div>
                    <div className="divne">
                    <label htmlFor="in3">Weight</label>
                    <div className="in3be">
                        <input type="number" id="in3" onChange={this.setweight} value={this.state.weight} />
                    </div>
                    </div>
                    <div className="divne">
                        <label htmlFor="" id="lerg">Gender</label>
                        <div className="genderarea">
                        <input type="radio" name="gender" style={{width : '10px'}} checked={this.state.gender==="1"} onChange={this.setgender} id="male" value="1" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" style={{width : '10px'}} checked={this.state.gender==="2"} onChange={this.setgender} id="female" value="2" />
                        <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="divne">
                        <label htmlFor="">Activity Level</label>
                    <select name="activity-level" id="sel" value={this.state.activity} onChange={this.setactv}>
                        <option value="" selected>Select your activity level</option>
                        <option value="1">Basal Metabolic Rate</option>
                        <option value="1.2">Little or no exercies</option>
                        <option value="1.375">Exercies 1-3 times/week</option>
                        <option value="1.55">Exercies 4-5 times/week</option>
                        <option value="1.725">hard exercies or sports 6-7 days a week</option>
                        <option value="1.9">Intense exercies 6-7 times/week or physical job</option>
                    </select>
                    </div> 
                    <button id="calcbtn" onClick={()=>{this.calculatebmr()}}>Calc</button>
                </div>
            </div>
            <div className="result-div" id="divre">
                <p id="resp">RESULT</p>
                <div className="result" >
                    <div className="plan"> Maination weight </div>
                    <div className="calorie-num" id="re1">{this.state.result}</div>
                </div>
                <div className="result">
                    <div className="plan"><p>Mild weight loss</p><p>0.25kg/week</p> </div>
                    <div className="calorie-num"  id="re2">{this.state.result-250}</div>
                </div>
                <div className="result" >
                        <div className="plan"><p>weight loss</p><p>0.5kg/week</p></div>
                    <div className="calorie-num" id="re3">{this.state.result-500}</div>
                </div>
                <div className="result" >
                <div className="plan"><p id="l">Extreme weight loss</p><p>1kg/week</p></div>
                    <div className="calorie-num" id="re4">{this.state.result-1000}</div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
export default Calculator;