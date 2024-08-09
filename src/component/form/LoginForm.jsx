import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./LoginForm.module.css";
import gym from "./gym.png";
import facebook from "./facebook.png";
import google from "./google.png";
export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(''); // State for error handling

  const btnRef = useRef(null);
  const loginInputRef = useRef(null);
  const registerInputRef = useRef(null);

  const userNameRef = useRef(null);
  const newUserNameRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const agreeRef = useRef(null);

  const register = () => {
    btnRef.current.style.left = "50%";
    loginInputRef.current.style.left = "-50%";
    registerInputRef.current.style.left = "50%";
  };

  const login = () => {
    btnRef.current.style.left = "0";
    loginInputRef.current.style.left = "50%";
    registerInputRef.current.style.left = "200%";
  };

  const validateUserName = () => {
    const userNameValue = userNameRef.current.value;
    const regExp = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/;
    const isValid = regExp.test(userNameValue);
    userNameRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    userNameRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    userNameRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateNewUserName = () => {
    const userNameValue = newUserNameRef.current.value;
    const regExp = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/;
    const isValid = regExp.test(userNameValue);
    userNameRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    userNameRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    userNameRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validatePassword = () => {
    const passwordValue = passwordRef.current.value;
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    const isValid = regExp.test(passwordValue);
    passwordRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    passwordRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    passwordRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateFirstName = () => {
    const firstNameValue = firstNameRef.current.value;
    const regExp = /^[a-zA-Z]{2,30}$/;
    const isValid = regExp.test(firstNameValue);
    firstNameRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    firstNameRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    firstNameRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateLastName = () => {
    const lastNameValue = lastNameRef.current.value;
    const regExp = /^[a-zA-Z]{2,30}$/;
    const isValid = regExp.test(lastNameValue);
    lastNameRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    lastNameRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    lastNameRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateEmail = () => {
    const value = emailRef.current.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(value);
    emailRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    emailRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    emailRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateNewPassword = () => {
    const newPasswordValue = newPasswordRef.current.value;
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    const isValid = regExp.test(newPasswordValue);
    newPasswordRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    newPasswordRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    newPasswordRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateConfirmPassword = () => {
    const confirmPasswordValue = confirmPasswordRef.current.value;
    const isValid = confirmPasswordValue === newPasswordRef.current.value && validateNewPassword();
    confirmPasswordRef.current.style.borderTop = isValid ? "2px solid var(--green)" : "2px solid red";
    confirmPasswordRef.current.style.borderLeft = isValid ? "2px solid var(--green)" : "2px solid red";
    confirmPasswordRef.current.style.borderRight = isValid ? "2px solid var(--green)" : "2px solid red";
    return isValid;
  };

  const validateAgree = () => {
    const isValid = agreeRef.current.checked;
    const labelAgree = document.querySelector(".label-agree");
    labelAgree.style.color = isValid ? "var(--white)" : "red";
    return isValid;
  };


  const handleRegister = async () => {
    validateFirstName();
    validateNewUserName();
    validateLastName();
    validateEmail();
    validateNewPassword();
    validateConfirmPassword();
    validateAgree();
    if (
      validateFirstName() &&
      validateLastName() &&
      validateEmail() &&
      validateNewPassword() &&
      validateConfirmPassword() &&
      validateAgree()
    ) {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: newUserNameRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: newPasswordRef.current.value
                    }),
        });
  
        if (response.ok) {
          const username = newUserNameRef.current.value;
          navigate('/plans', { state: { username } }); // Redirect to plans page
          alert('Registered successfully!');
        } else {
          const result = await response.json();
          setError(result.message || 'Failed to register. Please try again.');
        }
      } catch (err) {
        setError('An error occurred while registering. Please try again.');
        console.error('Registration error:', err);
      }
    } else {
      window.location.href = "#error";
    }
  };
  

 

  const handleLogin = async () => {

    validateUserName();
    validatePassword();
    if (validateUserName() && validatePassword()) {
      try {
        const response = await fetch('http://localhost:5000/users'); // Change to the correct endpoint if needed
        const users = await response.json();

        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
          navigate('/my-account', { state: { username } });
        } else {
          window.location.href = "#fail";
          setError(error);
        }
      } catch (err) {
        console.error('Error logging in', err);
        window.location.href = "#fail";
      }
    } else {
      window.location.href = "#fail";
    }
  };

  

  return (
    <div className={styles.myloGin}>
    <main className={styles.main}>
    <div className={styles.login} style={{marginTop: '80px'}}>
      <div className={styles.loginPhoto}>
        <img src={gym} alt="Gym" className={styles.gym} style={{width:'500px' , marginLeft :'-100px'}}/>
      </div>
      <div className={styles.form}>
        <div className={styles.toggle}>
          <button className={styles.btn} ref={btnRef} />
          <button className={styles.toggleBtn} onClick={login}>
            Login
          </button>
          <button className={styles.toggleBtn} onClick={register}>
            Register
          </button>
        </div>
        <div className={styles.icons}>
          <a href="#google">
            <img src={google} alt="Login with Google" width="32" height="32" />
          </a>
          <a href="#facebook">
            <img src={facebook} alt="Login with Facebook" width="62" height="44" />
          </a>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.loginInput} ref={loginInputRef}>
            <p>
              <input
                type="text"
                name="username"
                id="user-name"
                placeholder="Username"
                required
                ref={userNameRef}
                onInput={validateUserName}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                ref={passwordRef}
                onInput={validatePassword}
              />
            </p>
            <p className={styles.remember}>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember"> Remember me</label>
            </p>
            <p>
              <a href="#forget-password">Forgot Password?</a>
            </p>
            <p>
              <input type="submit" value="Login" onClick={handleLogin} />
            </p>
          </div>
          <div className={styles.registerInput} ref={registerInputRef}>
            <p className={styles.name}>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                required
                ref={firstNameRef}
                onInput={validateFirstName}
              />
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                required
                ref={lastNameRef}
                onInput={validateLastName}
              />
            </p>
            <p>
              <input
                type="text"
                name="username"
                id="new-user-name"
                placeholder="Set Username"
                required
                ref={newUserNameRef}
                onInput={validateNewUserName}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                ref={emailRef}
                onInput={validateEmail}
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                id="new-password"
                placeholder="Password"
                required
                ref={newPasswordRef}
                onInput={validateNewPassword}
              />
            </p>
            <p>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
                required
                ref={confirmPasswordRef}
                onInput={validateConfirmPassword}
              />
            </p>
            <p className={styles.remember}>
              <input type="checkbox" name="agree" id="agree" required ref={agreeRef} />
              <label htmlFor="agree" className="label-agree"> Agree to Terms</label>
            </p>
            <p>
              <input type="submit" value="Register" onClick={handleRegister} />
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
  );
 
}
