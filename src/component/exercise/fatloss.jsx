import React , {Component} from "react";
import './ex.css';
import f1 from './f1.jpeg';
import f2 from './f2.jpeg';
import f3 from './f3.jpeg';
import f4 from './f4.jpeg';
import f5 from './f5.jpeg';
import f6 from './f6.jpeg';
import f7 from './f7.jpeg';
import f8 from './f8.jpeg';
import f9 from './f9.jpeg';

class Loss extends Component {
    render(){
        return(
            <React.Fragment>
                 <div style={{ display: "block" }}>
                    <h1 style={{ textAlign: 'center', fontSize: '40px', textTransform: 'uppercase', marginTop: "45px", color: 'white', letterSpacing: '1px', fontFamily: "Playfair Display", fontWeight: '800' }}>Fat <span>Loss</span></h1>
                </div>
                <div className="Box" style={{ marginLeft: "1%" }}>
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f1} alt="" style={{ width: '130px', marginLeft: '-1px', marginTop: '33px' }} />
                        </div>
                        <div className="info">
                            <h4>Jumping-jacks</h4>
                            <p>all-body</p>
                            <p>5 minutes</p>
                            <a href="https://youtu.be/q_Z29u7nglQ?si=GJro88NYzfoNuccn" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f2} alt="" style={{ width: '130px', marginLeft: '-1px', marginTop: '33px' }} />
                        </div>
                        <div className="info">
                            <h4>Squat-jumps</h4>
                            <p>legs</p>
                            <p>4x20</p>
                            <a href="https://youtu.be/YGGq0AE5Uyc?si=oumqUysSKM9mFO0U" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f3} alt="" style={{ width: '130px', marginLeft: '-1px', marginTop: '33px' }} />
                        </div>
                        <div className="info">
                            <h4>High-Knee</h4>
                            <p>leg-abs</p>
                            <p>5 minutes</p>
                            <a href="https://youtu.be/FvjmPRU3zn4?si=p40AuYQGV2Sel_k6" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f4} alt="" style={{ width: '130px', marginLeft: '-1px', marginTop: '33px' }} />
                        </div>
                        <div className="info">
                            <h4>Cycling</h4>
                            <p>allbody</p>
                            <p>20 minutes</p>
                            <a href="https://youtu.be/jhPqTyejY_0?si=oWz93l7kkQaG93y1" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f5} alt="" style={{ width: '130px', marginLeft: '-1px', marginTop: '33px' }} />
                        </div>
                        <div className="info">
                            <h4>Lungs</h4>
                            <p>leg-abs</p>
                            <p>5x15</p>
                            <a href="https://youtu.be/wrwwXE_x-pQ?si=AZDxc4BKRBmeFmEZ" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f6} alt="" style={{ width: '123px', marginLeft: '-16px', marginTop: '66px' }} />
                        </div>
                        <div className="info">
                            <h4>Push-ups</h4>
                            <p>chest-shoulder</p>
                            <p>5x10</p>
                            <a href="https://youtu.be/IODxDxX7oi4?si=4OxzP-c-XYYItPRb" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                
                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f7} alt="" style={{ width: '130px', marginLeft: '-20px', marginTop: '63px' }} />
                        </div>
                        <div className="info">
                            <h4>Mountain-climbers</h4>
                            <p>leg-abs</p>
                            <p>3x20</p>
                            <a href="https://youtu.be/ruQ4ZwncXBg?si=I3sTDiBTaeAnR1Q3" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f8} alt="" style={{ width: '130px', marginLeft: '-20px', marginTop: '63px' }} />
                        </div>
                        <div className="info">
                            <h4>Cardio</h4>
                            <p>allbody</p>
                            <p>20 minutes</p>
                            <a href="https://youtu.be/vBVoodacTf8?si=Du33efghEzDnrzty" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: 'black', height: '210px', position: 'relative', border: '2px solid aquamarine' }}>
                        <div className="eximg">
                            <img src={f9} alt="" style={{ width: '130px', marginLeft: '-20px', marginTop: '63px' }} />
                        </div>
                        <div className="info">
                            <h4>Barbell-complex</h4>
                            <p>all body</p>
                            <p>3x12</p>
                            <a href="https://youtu.be/B5L0D2dl5YI?si=DNqNtOQ7IBNnCcNM" target="blank">
                                <button>How to do</button>
                            </a>
                        </div>
                    </div>


                </div> 
            </React.Fragment>
        );
    };
}
export default Loss;