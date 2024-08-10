import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import meal1 from './meal1.jpg';
import meal2 from './meal2.jpg';
import meal3 from './meal3.jpg';
import meal4 from './meal4.jpg';

import './work.css';
class Meal extends Component {
    render() {
        return (
            <div id="meal">
                <section className="exer">
                    <h2 style={{color: 'white' ,fontSize: '40px' ,marginTop: '100px' ,textAlign: 'center'}}>Our <span>Meals</span></h2>
                    <div className="box">

                        <Card>
                            <Card.Img variant="top" src={meal1} />
                            <Card.Body>
                                <Card.Title>4000 Calories</Card.Title>
                                <Card.Text>
                                   4000 Calories a day is much higher than a typical diet, so this meal plan is mostly
                                   gearded towards a bodybuilder during bulking, or an endurance athlete.
                                   This diet plan is only intended as an example of what a diet might look like for 4000 kcal with high
                                   protein and you will get weight 
                                </Card.Text>
                                
                                <Link to="/meal4"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={meal2} />
                            <Card.Body>
                                <Card.Title>3000 Calories</Card.Title>
                                <Card.Text>
                                A 3000 Calories meal plan may be for you if you are looking to gain or maintain weight.
                                this high-calorie diet can help you manage your weight if you are an athlete or lead an active lifestyle
                                with protein, fiber, healthy fats and complex carbohydrates while still including fun foods.
                                </Card.Text> 
                                <Link to="/meal3"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={meal3} />
                            <Card.Body>
                                <Card.Title>2000 Calories</Card.Title>
                                <Card.Text>
                                    the most common number being 2000 calories because it's the most common, the FDA uses 2000 calories
                                    as a base to determine daily values of various nutrients. if you want to lose weight rather than
                                    maintain a healthy weight, that number will change. it is helps many people lose weight. 
                                </Card.Text> 
                                <Link to="/meal2"}><Button>Join now</Button></Link>
                            
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src={meal4} />
                            <Card.Body>
                                <Card.Title>1500 Calories</Card.Title>
                                <Card.Text>
                                A 1500 calories diet fits the needs of many people who want to lose fat and improve health. 
                                Like any health diet it should include mostly whole, unprocessed foods. Reducing excess calories and
                                using some of the simple tips in this article can help you succeed in your weight loss journey.
                                </Card.Text> 
                                <Link to="/meal1"><Button>Join now</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            </div>
        );
    }
};

export default Meal;
