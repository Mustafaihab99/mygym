import React from "react";
import run1 from './run1.jpg';
import run2 from './run2.jpg';
import run3 from './run3.jpg';
import run4 from './run4.jpg';
import run5 from './run5.jpg';
import run6 from './run6.jpg';
import './ex.css';
const Run = () => {
    return(
        <div id="tit">
            <h2 style={{'color' : "white" , 'textAlign' : 'Center' , 'fontSize' : '40px' , 'marginTop' : '10px'}}>Runn<span>ing</span></h2>
    <div className="Box">
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run1} alt="" style={{ransform: 'rotate(-29deg)' , width:'200px'}}/>
                    </div>
                    <div className="info">
                        <h4>Base Run</h4>
                        <p>Basic training runs</p>
                        <p>1 hour</p>
                        <a href="https://youtu.be/N9C88z3g0Es?si=wjwLjcPHBGzeFa_q" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
                
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run2} alt="" style={{ransform: 'rotate(-29deg)' , width:'280px'}}/>
                    </div>
                    <div className="info">
                        <h4>Threshold Workouts</h4>
                        <p>Improve threshold</p>
                        <p>30 Minutes</p>
                        <a href="https://youtu.be/T_CchXY6jvs?si=tm5LTqAOK8X6GDWo" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
                
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run3} alt="" style={{ransform: 'rotate(-29deg)' , width:'282px' , marginLeft: '-40px'}}/>
                    </div>
                    <div className="info">
                        <h4>Tempo run</h4>
                        <p>Tempo runs  workouts</p>
                        <p>40 Minutes</p>
                        <a href="https://youtu.be/k5vqiyry2z8?si=23autdkJ4JTD-zCy" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
                
        
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run4} alt="" style={{ransform: 'rotate(-29deg)' , width:'200px'}}/>
                    </div>
                    <div className="info">
                        <h4>Interval</h4>
                        <p>Intervals is a generic term</p>
                        <p>300 meters</p>
                        <a href="https://youtu.be/Dyx7qFMcaeY?si=Uv8i1dBNtVhjEXa-" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
          
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run5} alt="" style={{ransform: 'rotate(-29deg)' , width:'315px' , marginLeft : '-62px'}}/>
                    </div>
                    <div className="info">
                        <h4>Cardio</h4>
                        <p>Both running is forms of aerobic exercise</p>
                        <p>15 Minutes</p>
                        <a href="https://youtu.be/aTOq9lV44y0?si=f2yqjXawC49ympu6" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
                
          <div className="card" style={{backgroundColor: 'black',height: '180px',position: 'relative',border: '2px solid aquamarine'}}>
                    <div className="eximg">
                        <img src={run6} alt="" style={{ransform: 'rotate(-29deg)' , width:'320px' , marginLeft : '-92px'}}/>
                    </div>
                    <div className="info">
                        <h4>Climbing Hill</h4>
                        <p>a type of motorsport in which drivers</p>
                        <p>1 hour</p>
                        <a href="https://youtu.be/De3Gl-nC7IQ?si=7ItehSV3wqE1yy41" target="blank">
                            <button>How to do</button>
                        </a>
                    </div>
                </div>
    </div>
    </div>
    );
}; 

export default Run;