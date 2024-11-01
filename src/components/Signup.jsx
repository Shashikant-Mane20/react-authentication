import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(response => {
        if(response.data.status) {
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        <p>Have an Account? <Link to="/login">Login</Link></p> 
      </form>
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import "../App.css";
// import Axios from 'axios';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Add e as a parameter to handleSubmit
//         Axios.post('http://localhost:3000/auth/signup', {
//             username,
//             email,
//             password
//         }).then(response => {
//             console.log(response);
//         }).catch(err => {
//             console.log(err);
//         });
//     };

//     return (
//         <div className='sign-up-container'>
//             <h2>Sign up</h2>
//             <form className='sign-up-form' onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     placeholder='Username'
//                     onChange={(e) => setUsername(e.target.value)}
//                 />

//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="email"
//                     placeholder='Email'
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     placeholder='******'
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;
