import React, { Component } from "react";
// import './fit.css';
import plank from './plank.jpg';
import push from './images/pushups.jpg';
import p1 from './images/bicyclecrunch.jpg';
import p3 from './images/burpees.jpg';
import p5 from './images/crossover.jpg';
import p6 from './images/diamondpushups.jpg';
import p7 from './images/doorway.jpg';
import p8 from './images/floortriceps.jpg';
import p9 from './images/Hindu.jpg';
import p10 from './images/jumpsquat.jpg';
import p11 from './images/kneepushups.jpg';
import p12 from './images/lungs.jpg';
import p13 from './images/pike.jpg';
import p14 from './images/squats.jpg';
import p16 from './images/tricepskickback.jpg';
import '../ex.css';
class Fit extends Component {
    render() {
        return (
            <React.Fragment>
                    <div style={{display : "block"}}>
                        <h1 style={{textAlign: 'center' , fontSize: '50px' , textTransform: 'uppercase' , marginTop : "45px", color: 'red' , letterSpacing:'1px', fontFamily:"Playfair Display", fontWeight:'800'}}>Begginer</h1>
                    </div>
                <div className="Box" style={{ marginLeft: "2%" }}>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={push} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>PUSH-UPS</h4>
                            <p>Chest-Biceps-Triceps-Shoulders</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/Pp44Y390Ffs?si=z5ZU7vh2_cSlwDrH" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={plank} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>PLANK</h4>
                            <p>ABS-Shoulders-Glutes</p>
                            <p>1 min</p>
                            <a href="https://youtu.be/BQu26ABuVS0?si=lm860uRoBSHq0nYI">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p6} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>DIAMOND PUSH-UPS</h4>
                            <p>Chest-Triceps-Shoulders</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/XtU2VQVuLYs?si=Ai0Hba1SNOlSQnRG" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p14} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>SQUATS</h4>
                            <p>Glutes-Quadriceps-Hamstring-Calves</p>
                            <p>4x10</p>
                            <a href="https://youtu.be/eme-4jMcv6o?si=4AylSbW5hJQwDp17" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p11} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>KNEE PUSH-UPS</h4>
                            <p>Chest-Triceps-Shoulders</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/WcHtt6zT3Go?si=7cniI9X6Qf9hTvxC" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div style={{display : "block"}}>
                        <h1 style={{textAlign: 'center' , fontSize: '50px' , textTransform: 'uppercase' , marginTop : "75px", color: 'red' , letterSpacing:'1px', fontFamily:"Playfair Display", fontWeight:'800'}}>Intermediate</h1>
                    </div>
                    <div className="Box" style={{marginLeft : "2%"}}>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p1} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>BICYCLE CRUNCHES</h4>
                            <p>Abs-Glutes-Quadricpes</p>
                            <p>4x10</p>
                            <a href="https://youtu.be/1we3bh9uhqY?si=PPb4QAyATS650NlV" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p9} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>HINDU PUSH-UPS</h4>
                            <p>Lowerback-Chest-Triceps-Glutes-Calves-Shoulders</p>
                            <p>2x10</p>
                            <a href="https://youtu.be/vj1vBwVKTjU?si=DaoLtBD1lb6N-UoA" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p16} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>TRICEPS KICKBACKS</h4>
                            <p>Triceps</p>
                            <p>4x10</p>
                            <a href="https://youtube.com/shorts/valZGQU5Lpk?si=WZT0XCOc06dcFp4d" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p12} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>LUNGS</h4>
                            <p>Glutes-Quadriceps-Hamstring-Calves</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/wrwwXE_x-pQ?si=DA7Xlm2v69nq-9w_" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p8} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>FLOOR TRICEP DIPS</h4>
                            <p>Triceps-Chest-Shoulders-Back</p>
                            <p>4x10</p>
                            <a href="https://youtu.be/xAjzkYXqTjc?si=iPWr7JiBVDtR5cKO" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div style={{display : "block" }}>
                        <h1 style={{textAlign: 'center' , fontSize: '50px' , textTransform: 'uppercase' , marginTop : "75px", color: 'red' , letterSpacing:'1px', fontFamily:"Playfair Display", fontWeight:'800'}}>Advanced</h1>
                    </div>
                    <div className="Box" style={{marginLeft : "2%"}}>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p5} alt="" id="imed" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>CROSSOVER CRUNCH</h4>
                            <p>Abs-Glutes-Quadriceps</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/5disNDTovts?si=1ejQnVyIAIxae5rK" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p3} alt="" id="imed" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>BURPEES</h4>
                            <p>Abs-Glutes-Quadriceps-Chest-Shoulders-Triceps-Calves</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/auBLPXO8Fww?si=HnppS0huwA5a-hms" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p7} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>DOORWAY CURLS LEFT-RIGHT</h4>
                            <p>Biceps-Forearms</p>
                            <p>2x10</p>
                            <a href="https://youtu.be/CkA_wRByO5A?si=tDtGWuzqW5yrXjL-" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p10} alt="" id="imed" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>JUMPING SQUATS</h4>
                            <p>Glutes-Quadriceps-Hamstring-Calves</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/uoIIxLyVleY?si=FnnUB8whRinJA2_F" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={p13} alt="" style={{width: '133px', marginLeft: '-17px' ,marginTop: '66px'}} />
                        </div>
                        <div className="info">
                            <h4>PIKE PUSH-UPS</h4>
                            <p>Shoulders-Chest-Triceps</p>
                            <p>3x10</p>
                            <a href="https://youtu.be/XckEEwa1BPI?si=cOoUR5vZdAXzUzlM" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Fit;