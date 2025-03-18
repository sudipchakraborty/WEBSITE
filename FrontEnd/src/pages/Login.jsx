import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import{useState} from "react"
import apiClient from '../communication/apiClient'

const Login = () => {
  
  const [email, setEmail] = useState('drsudip.robotics@gmail.com');
  const [password, setPassword] = useState('Sudip@123');

  // const handleLogin = async () => {
  //   try {
  //     const response = await apiClient.post('/login', { email, password });
  //     const { token } = response.data;

  //     // Store token in localStorage
  //     localStorage.setItem('authToken', token);
  //     alert('Login successful! Token stored.');
  //   } catch (error) {
  //     console.error(error.response?.data || 'Login error');
  //     alert('Invalid login credentials');
  //   }
  // };

    // const[user,setUser]=useState("");
    // // const[email,setEmail]=useState("");
    // const navigate=useNavigate();








  // const handleLogin=(e)=>{
  //   e.preventDefault();
  //   navigate(-1);
  //   localStorage.setItem("user",JSON.stringify(user));
  //   setUser("");
  //   setEmail("");
  //   console.log("login button pressed");

  // }



    ////////////////////////////////////////////////
    const handleLogin = async () => {
      try {
  
          const requestParams  = {
            email,
            password
          };
  
          const val={
            params: requestParams,
            headers: 
            {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token-here'
            }
          }
          ///////////////////////////////////////////////
          // const response = await apiClient.get('/auth/test3', val);
          const response = await apiClient.post('/auth/login', requestParams);
          console.log(response);

    // /////////////////////////////////////// /////////
    //  const handleLogin = async () => {
    // try {

    //     const requestParams  = {
    //       email,
    //       password,
    //       timestamp: Date.now(),
    //       version: '1.0'
    //     };

    //     const val={
    //       params: requestParams,
    //       headers: 
    //       {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer your-token-here'
    //       }
    //     }

    //  const response = await apiClient.get('/logIn', val);
       // alert(response.data.message);

    //     ///////////////////////////////////////////////




    
        // console.log("dfgfdgdfgdfgdg@@@@@@@@@@", val);

        // Modify the request line with additional parameters
       
        



      // const response = await apiClient.get('/test', { email, password });
      // const { token } = response.data;

      // // Store token in localStorage
      // localStorage.setItem('authToken', token);
      // alert('Login successful! Token stored.');
    } catch (error) {
      console.error(error.response?.data || 'Login error');
    //  alert('Invalid login credentials');
    }
  };



  //////////<LogIn>//////////////////////////////////////////////
  return (

    <div>
    <h1>Login</h1>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
  </div>


    // <div className='loginWrapper'>
    //   <div className='formWrapper'>
    //       <form onSubmit={handleSubmit}>
    //         <div className='inputWrapper'>
    //            <label htmlFor='name'>Name</label>
    //            <input type='text' id='name' value={user}
    //            onChange={(e)=>setUser(e.target.value)}
    //            ></input>
    //         </div>          
    //         <div className='inputWrapper'>
    //           <label htmlFor='email'>Email</label>
    //           <input 
    //           type='email' 
    //           id='email'
    //           value={email}
    //           onChange={(e)=>setEmail(e.target.value)}
    //           />          
    //         </div>
    //         <button type='submit'>Login</button>
    //     </form>
    //   </div>
   
    // </div>
  )
  ///////////< End of LogIn Interface>///////////////////////////




}

export default Login;
