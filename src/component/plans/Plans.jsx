// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './Plans.module.css';
// import check from './checkbox.svg';
// import heart from './heart.png';
// import arrow from './arrow.svg';
// import star from './star.png';
// import premium from './premium.svg';

// const Plans = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { username } = location.state || {};

//   const handlePlanSelect = async (plan) => {
//     try {
//       const response = await fetch('http://localhost:5000/users', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, plan }),
//       });

//       if (response.ok) {
//         navigate('/my-account', { state: { username } });
//       } else {
//         console.error('Failed to update plan');
//       }
//     } catch (err) {
//       console.error('Error updating plan:', err);
//     }
//   };


//   return (
//     <section className={styles.plans}>
//       <div className={styles.container}>
//         <div className={styles.data}>
//           <div className={styles.titles}>
//             <h1>OUR</h1>
//             <h2>SPECIAL PLANS</h2>
//           </div>
//         </div>
//         <div className={styles.cards}>
//           <div className={`${styles.card} ${styles.free}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={heart} alt="heart" width="90px" height="70px" />
//                 </div>
//               </div>
//               <h1>FREE PACKAGE</h1>
//               <h2>$0</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" height="20px" width="20px" /> 5 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('free')}>
//                 Enroll Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//           <div className={`${styles.card} ${styles.basic}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={star} alt="star" width="30px" height="30px" />
//                 </div>
//               </div>
//               <h1>BASIC PACKAGE</h1>
//               <h2>$200</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 6 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To ALL Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Bottle Of Protein
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Sweatshirt
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('basic')}>
//                 Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//           <div className={`${styles.card} ${styles.premium}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={premium} alt="premium" width="30px" height="30px" />
//                 </div>
//               </div>
//               <h1>PREMIUM PACKAGE</h1>
//               <h2>$250</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 5 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('premium')}>
//                 Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Plans;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './Plans.module.css';
// import check from './checkbox.svg';
// import heart from './heart.png';
// import arrow from './arrow.svg';
// import star from './star.png';
// import premium from './premium.svg';

// const Plans = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { username } = location.state || {};

//   const handlePlanSelect = async (plan) => {
//     try {
//       const response = await fetch('http://localhost:5000/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ plan }),     });

//       if (response.ok) {
//         navigate('/my-account', { state: { username } });
//       } else {
//         console.error('Failed to update plan');
//         alert('Failed to update plan');
//       }
//     } catch (err) {
//       console.error('Error updating plan:', err);
//       alert('Error updating plan');
//     }
//   };

//   return (
//     <section className={styles.plans}>
//       <div className={styles.container}>
//         <div className={styles.data}>
//           <div className={styles.titles}>
//             <h1>OUR</h1>
//             <h2>SPECIAL PLANS</h2>
//           </div>
//         </div>
//         <div className={styles.cards}>
//           <div className={`${styles.card} ${styles.free}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={heart} alt="heart" width="90px" height="70px" />
//                 </div>
//               </div>
//               <h1>FREE PACKAGE</h1>
//               <h2>$0</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" height="20px" width="20px" /> 5 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('free')}>
//                 Enroll Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//           <div className={`${styles.card} ${styles.basic}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={star} alt="star" width="30px" height="30px" />
//                 </div>
//               </div>
//               <h1>BASIC PACKAGE</h1>
//               <h2>$200</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 6 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To ALL Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Bottle Of Protein
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Sweatshirt
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('basic')}>
//                 Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//           <div className={`${styles.card} ${styles.premium}`}>
//             <div className={styles.pricing}>
//               <div className={styles.shape}>
//                 <div className={styles.circle}>
//                   <img src={premium} alt="premium" width="30px" height="30px" />
//                 </div>
//               </div>
//               <h1>PREMIUM PACKAGE</h1>
//               <h2>$250</h2>
//             </div>
//             <div className={styles.center}>
//               <ul className={styles.list}>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> 5 Days In A Week
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
//                 </li>
//                 <li>
//                   <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.center}>
//               <button onClick={() => handlePlanSelect('premium')}>
//                 Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Plans;



import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Plans.module.css';
import check from './checkbox.svg';
import heart from './heart.png';
import arrow from './arrow.svg';
import star from './star.png';
import premium from './premium.svg';

const Plans = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users`);
        const users = response.data;
        const foundUser = users.find(user => user.username === username);
        if (foundUser) {
          setUser(foundUser);
        } else {
          console.error('User not found');
          alert('User not found');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        alert('Error fetching user');
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  const handlePlanSelect = async (plan) => {
    if (!user) {
      alert('User not available');
      return;
    }

    try {
      const response = await axios.patch(`http://localhost:5000/users/${user.id}`, {
        plan,
      });

      if (response.status === 200 && response.data.plan === plan) {
        console.log('Updated user:', response.data);
        navigate('/my-account', { state: { username } });
      } else {
        console.error('Plan update verification failed');
        alert('Plan update verification failed');
      }
    } catch (err) {
      console.error('Error updating plan:', err);
      alert('Error updating plan');
    }
  };

  return (
    <div className={styles.parentt} style={{color: 'white'}}>
    <section className={styles.plans}>
      <div className={styles.container}>
        <div className={styles.data}>
          <div className={styles.titles}>
            <h1>OUR</h1>
            <h2>SPECIAL PLANS</h2>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.free}`}>
            <div className={styles.pricing}>
              <div className={styles.shape}>
                <div className={styles.circle}>
                  <img src={heart} alt="heart" width="90px" height="70px" />
                </div>
              </div>
              <h1>FREE PACKAGE</h1>
              <h2>$0</h2>
            </div>
            <div className={styles.center}>
              <ul className={styles.list} style={{display : 'flex' , flexDirection : 'column'}}>
                <li>
                  <img src={check} alt="checkbox" height="20px" width="20px" /> 5 Days In A Week
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
                </li>
              </ul>
            </div>
            <div className={styles.center}>
              <button onClick={() => handlePlanSelect('free')} style={{borderRadius: '1rem',padding: '1rem',fontWeight: '700'}}>
                Enroll Now <img src={arrow} alt="arrow" width="30px" height="30px" />
              </button>
            </div>
          </div>
          <div className={`${styles.card} ${styles.basic}`}>
            <div className={styles.pricing}>
              <div className={styles.shape}>
                <div className={styles.circle}>
                  <img src={star} alt="star" width="30px" height="30px" />
                </div>
              </div>
              <h1>BASIC PACKAGE</h1>
              <h2>$200</h2>
            </div>
            <div className={styles.center}>
              <ul className={styles.list} style={{display : 'flex' , flexDirection : 'column'}}>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> 6 Days In A Week
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Access To ALL Videos
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Bottle Of Protein
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> 01 Sweatshirt
                </li>
              </ul>
            </div>
            <div className={styles.center}>
              <button onClick={() => handlePlanSelect('basic')} style={{borderRadius: '1rem',padding: '1rem',fontWeight: '700'}}>
                Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
              </button>
            </div>
          </div>
          <div className={`${styles.card} ${styles.premium}`}>
            <div className={styles.pricing}>
              <div className={styles.shape}>
                <div className={styles.circle}>
                  <img src={premium} alt="premium" width="30px" height="30px" />
                </div>
              </div>
              <h1>PREMIUM PACKAGE</h1>
              <h2>$250</h2>
            </div>
            <div className={styles.center}>
              <ul className={styles.list} style={{display : 'flex' , flexDirection : 'column'}}>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> 5 Days In A Week
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Access To Videos
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Muscle Stretching
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Some Meals Recipes
                </li>
                <li>
                  <img src={check} alt="checkbox" width="20px" height="20px" /> Free Support
                </li>
              </ul>
            </div>
            <div className={styles.center}>
              <button onClick={() => handlePlanSelect('premium')} style={{borderRadius: '1rem',padding: '1rem',fontWeight: '700'}}>
                Purchase Now <img src={arrow} alt="arrow" width="30px" height="30px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> 
  );
};

export default Plans;
