// import './Login.css';
// import React, { useState, useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';


// const SignUp = () => {
//   const [activeTab, setActiveTab] = useState('signin');
//   const [signInUsername, setSignInUsername] = useState('');
//   const [signInPassword, setSignInPassword] = useState('');

//   const [signUpUsername, setSignUpUsername] = useState('');
//   const [signUpPassword, setSignUpPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const handleSignUp = async () => {
//     try {
//       console.log('Before signup:', signUpUsername, signUpPassword, repeatPassword, email);
  
//       const response = await fetch('http://localhost:5000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: signUpUsername, password: signUpPassword, repeatPassword, email }),
//       });
  
//       if (response.ok) {
//         console.log('User registered successfully');
  
//         // Reset the form fields directly
//         setSignUpUsername('');
//         setSignUpPassword('');
//         setRepeatPassword('');
//         setEmail('');
  
//         console.log('After reset:', signUpUsername, signUpPassword, repeatPassword, email);
//         const userData = await response.json();
        
//         // Handle success, e.g., redirect or show a success message
//       } else {
//         const data = await response.json();
//         console.error(`Error: ${data.error}`);
//         // Handle error, e.g., display an error message to the user
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };
//   const navigate = useNavigate();
//   const handleSignIn = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: signInUsername, password: signInPassword }),
//       });

//       if (response.ok) {
//         console.log('User signed in successfully');
//         setSignInUsername('');
//       setSignInPassword('');
//       navigate('/home');
//         // Handle success, e.g., redirect or show a success message
//       } else {
//         const data = await response.json();
//         console.error(`Error: ${data.error}`);
//         alert("Invalid Credentials");
//         setSignInUsername('');
//       setSignInPassword('');
//         // Handle error, e.g., display an error message to the user
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   const preventSignUpLabelClick = (e) => {
//     if (!e.target.classList.contains("tab")) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//   };

//   return (
//   <>


//     <div className="login-wrap">
//       <div className="login-html">
//         <input id="tab-1" type="radio" name="tab" className="sign-in" checked={activeTab === 'signin'} onChange={() => handleTabChange('signin')} />
//         <label htmlFor="tab-1" className="tab" onClick={() => handleTabChange('signin')}>
//           Sign In
//         </label>
//         <input id="tab-2" type="radio" name="tab" className="sign-up" checked={activeTab === 'signup'} onChange={() => handleTabChange('signup')} />
//         <label htmlFor="tab-2" className="tab" onClick={() => handleTabChange('signup')}>
//           Sign Up
//         </label>
//         <div className="login-form">
//           <div className="sign-in-htm">
//             <div className="group">
//               <label htmlFor="signin-user" className="label">
//                 Username
//               </label>
//               <input
//                 id="signin-user"
//                 type="text"
//                 className="input"
//                 value={signInUsername}
//                 onChange={(e) => setSignInUsername(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <label htmlFor="signin-pass" className="label">
//                 Password
//               </label>
//               <input
//                 id="signin-pass"
//                 type="password"
//                 className="input"
//                 data-type="password"
//                 value={signInPassword}
//                 onChange={(e) => setSignInPassword(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <input type="submit" className="button" value="Sign In" onClick={handleSignIn} />
//             </div>
//             <div className="hr"></div>
//             <div className="foot-lnk">
//               <a href="#forgot">Forgot Password?</a>
//             </div>
//           </div>
//           <div className="sign-up-htm">
//             <div className="group">
//               <label htmlFor="signup-user" className="label">
//                 Username
//               </label>
//               <input
//                 id="signup-user"
//                 type="text"
//                 className="input"
//                 value={signUpUsername}
//                 onChange={(e) => setSignUpUsername(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <label htmlFor="signup-pass" className="label">
//                 Password
//               </label>
//               <input
//                 id="signup-pass"
//                 type="password"
//                 className="input"
//                 data-type="password"
//                 value={signUpPassword}
//                 onChange={(e) => setSignUpPassword(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <label htmlFor="signup-repeat-pass" className="label">
//                 Repeat Password
//               </label>
//               <input
//                 id="signup-repeat-pass"
//                 type="password"
//                 className="input"
//                 data-type="password"
//                 value={repeatPassword}
//                 onChange={(e) => setRepeatPassword(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <label htmlFor="signup-email" className="label">
//                 Email Address
//               </label>
//               <input
//                 id="signup-email"
//                 type="text"
//                 className="input"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="group">
//               <input type="submit" className="button" value="Sign Up" onClick={handleSignUp} />
//             </div>
//             <div className="hr"></div>
//             <div className="foot-lnk">
//               <label htmlFor="tab-1">Already Member?</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  
  
//     </>
//   );
// };

// export default SignUp;