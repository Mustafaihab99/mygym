import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gym from './gym.jpg';
import fat from './fat.jpg';
import push from './fit.jpg';
import run from './run.jpg';
import './work.css';
class Work extends Component {
    render() {
        return (
            <div id="ex">
                <section className="exer">
                    <h2 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>Our <span>Exercies</span></h2>
                    <div className="box">

                        <Card>
                            <Card.Img variant="top" src={gym} />
                            <Card.Body>
                                <Card.Title>With Equipment</Card.Title>
                                <Card.Text>
                                    Understanding your gym equipment and putting together an exercise regime can be a daunting process.
                                    Therefore, we've compiled a quick exercise
                                    equipment guide that will free you from the unknown so you can develop an informed workout regimen and expand your fitness horizons.
                                    so we will present some workouts
                                </Card.Text>
                                <Link to="/equa"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={push} />
                            <Card.Body>
                                <Card.Title>Physical Fitness</Card.Title>
                                <Card.Text>
                                    Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports,
                                    occupations, and daily activities. Physical fitness is generally
                                    achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan
                                </Card.Text>
                                <Link to="/fit"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={fat} />
                            <Card.Body>
                                <Card.Title>Fat loss</Card.Title>
                                <Card.Text>
                                    The physiological process of fat loss occurs when fats are liberated from adipocytes into circulation to supply the needed energy.
                                    Nutrition supplements that increase fat metabolism, impair fat absorption,
                                    increase weight loss, and increase fat oxidation during exercise are known as fat burners.
                                </Card.Text>
                                <Link to="/loss"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={run} />
                            <Card.Body>
                                <Card.Title>Running</Card.Title>
                                <Card.Text>
                                    Running is very good for humans in many different ways. It is a great way to get exercise, and a great way to meet new people.
                                    There are many positives, and some negatives, it is easy,
                                    enjoyable and makes humans more social, you can do it at anytime, and it relieves stress rather than give stress.
                                </Card.Text>
                                <Link to="/run"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </div>
        );
    }
};

export default Work;
