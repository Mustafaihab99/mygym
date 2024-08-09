import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div>
      <div className="about-page" id='about'>
        <header className="about-header">
          <h1 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>About <span>Get Fit</span></h1>
        </header>
        <section className="about-content">
          <div className="about-intro">
            <h2>Welcome to Get Fit!</h2>
            <p>
              At Get Fit, we're dedicated to helping you achieve your fitness goals and live a healthier lifestyle.
              Whether you're a beginner just starting your fitness journey or an experienced athlete looking to take your training to the
              next level, we've got you covered.
            </p>
          </div>
          <section className='about-content'>
            <div className='about-intro'>
              <h2>Calories and health</h2>
              <p>
                The human body needs calories to survive. Without energy, the cells in the body would die, the heart and lungs would stop,
                and the organs would not be able to carry out the basic processes needed for living. People absorb this energy from food and drink.
                If people consumed only the number of calories needed every day, they would probably have healthy lives. Calorie consumption that is
                too low or too high will eventually lead to health problems.
                The number of calories in food tells us how much potential energy they contain. It is not only calories that are important,
                but also the substance from which the calories are taken.
              </p>
            </div>
          </section>
          <section className='about-content'>
            <div className='about-intro'>
              <h2>Exercise Benefits</h2>
              <p>Exercise can help boost your energy levelsTrusted Source while helping to reduce fatigue. This may help as a treatment
                methodTrusted Source if you have certain health conditions, such as cancer.
                Aerobic exercise boosts your cardiovascular system and improves lung health, which may help with energy levels.
                Your heart pumps more blood as you move, delivering more oxygen to your working muscles. With regular exercise,
                your heart becomes more efficientTrusted Source at moving oxygen into your blood.
                Over time, exercise results in less demand on your lungs. This is one of the reasons why you may find yourself
                getting less and less out of breath during exercise, according to the American Lung Association.
              </p>
            </div>
          </section>

          <section className='about-content'>
            <div className='about-intro'>
              <h2>Meals Management</h2>
              <p>Meal management refers to planning menus, purchasing food, preparing, and serving meals with goals of good nutrition, 
                planned spending, and satisfying meals using time and energy efficiently.
                It provides guidelines for meal planning such as planning several days of simple, varied meals using seasonal foods
              </p>
            </div>
          </section>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide high-quality fitness resources and tools that are accessible to everyone. We believe in empowering individuals to take control of their health through personalized workout plans, expert advice, and a supportive community.
            </p>
            <p>
              With Get Fit, you can access:
              <ul>
                <li>Customized workout plans tailored to your goals</li>
                <li>Nutrition tips and meal planning advice</li>
                <li>Interactive fitness challenges and progress tracking</li>
              </ul>
            </p>
          </div>

        </section>
        <footer className="about-footer">
          <p>&copy; {new Date().getFullYear()} Get Fit. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
