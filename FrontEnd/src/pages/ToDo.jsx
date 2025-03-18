import React from 'react'
import axios from 'axios';
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import{useState} from "react"
import apiClient from '../communication/apiClient'
import CardLogIn from '../components/CardLogIn'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from '../components/UserTable';
import UserRegister from '../components/UserRegister';

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ImageCarouselCard from '../components/ImageCarouselCard'; // Import the ImageCarouselCard component

import LiveCurveCard from '../components/LiveCurveCard'; // Import the LiveCurveCard component



const sampleUser = [
  {
    id: "678dcfacb91e637d2ce2f4ab",
    name: "test",
    email: "test@gmail.com",
    department: "legal",
    orgId: 1,
    secret: "ituJDEoIPGKh",
    status: "active",
  },
  {
    id: "678dcfacb91e637d2ce2f4ac",
    name: "example",
    email: "example@gmail.com",
    department: "marketing",
    orgId: 2,
    // secret: "xyz123secret",
    status: "inactive",
  },
  // Add more users as needed
];



const ToDo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('drsudip.robotics@gmail.com');
  const [password, setPassword] = useState('Sudip@123');
  const [token, setToken] = useState('');
  
  const [users, setUsers] = useState([]);

  ////////////////////////////////////////////////
    const handleLogin = async () => {
      try {
          const requestParams  = { email, password };
          const val={
            params: requestParams,
            headers:  
            {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token-here'
            }
          }
          navigate("/CardLogIn"); // Redirect to "AnotherPage" after 3 seconds

    } catch (error) {
      console.error(error.response?.data || 'Login error');
    //  alert('Invalid login credentials');
    }
  };
  //////////////////////////////////////////////
  const testAPI_handler = async () => {
    try {
      const Client = axios.create({
        baseURL: 'http://192.168.31.196:3000/v1/',
        headers: 
        {
          'Content-Type': 'application/json',
        },
      });
      ////////////////
        const requestParams  = { email, password };
        const val={
          params: requestParams,
          headers:  
          {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your-token-here'
          }
        }
      const response = await Client.get('/auth/test3', val);
      alert(response.data.message);
  } catch (error) {
   alert("API not Running");
  }
};
//////////////////////////////////////////////
const handleSignUp = async () => {
  try {
    // Create the Axios client
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Prepare the JSON payload for registration
    const payload = {
      email: "user43@gmail.com",
      name: "pavan",
      password: "Admin@123",
      department: "legal",
      orgId: 1,
    };

    // Send a POST request to the /auth/register endpoint
    const response = await Client.post('/auth/register', payload, {
      headers: {
        'Authorization': 'Bearer your-token-here',
      },
    });

    // Handle the response
    alert(response.data.message);
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      // Handle server response errors
      alert(`Error: ${error.response.data.message}`);
    } else {
      // Handle network errors or API not running
      alert("API not Running or Network Error");
    }
  }
};
//////////////////////////////////////////////
const handleGetAllUser = async () => {
  try {
    // Replace with a valid token
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed


    // Create the Axios client
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token2}`,
      },
    });

    // Send a GET request to the /users endpoint
    const response = await Client.get('/users?size=30&page=0');

  //  console.log(sampleUser);

   // alert(response.payload);
    
    // Handle the response
    console.log(response.data.payload.docs); // Log the response data

    // const result= extractIdsAndStatuses(response);

    // console.log("Extracted Array:", result);

    ////////////////////////////////
    setUsers(response.data.payload.docs);









    ////////////////////////////////
















   // alert("Users fetched successfully!");
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      // Handle server response errors
      alert(`Error: ${error.response.data.message}`);
    } else {
      // Handle network errors or API not running
      alert("API not Running or Network Error");
    }
  }
};
/////////////////////////////////////////////////
const extractIdsAndStatuses = (response) => {
  if (response.success && response.payload.docs) {
    const resultArray = response.payload.docs.map((doc) => {
      return { id: doc.id, status: doc.status };
    });
    return resultArray;
  } else {
    console.error("Invalid response or no documents found.");
    return [];
  }
};
/////////////////////////////////////////////////////
const handleSetActive = async () => {
  try {
    // Retrieve the token from localStorage
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed

    // Create the Axios client
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token2}`,
      },
    });

    // Specify the user ID and payload
    const userId = "678dcfacb91e637d2ce2f4ab"; // Replace with the desired user ID
    const payload = { status: "active" };

    // Send a PATCH request to update the user's status
    const response = await Client.put(`/users/${userId}`, payload);

    // Handle the response
    console.log("Response Data:", response.data);



   alert(`${response.data.message}`);
  } catch (error) {
    console.error("Error:", error);
    if (error.response) {
      // Handle server response errors
      alert(`Error: ${error.response.data.message}`);
    } else {
      // Handle network errors or API not running
      alert("API not Running or Network Error");
    }
  }
};

/////////////////////////////////////////////////




const btn_user_login = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
      const requestParams  = {email , password };
   
      const response = await Client.post('/auth/login', requestParams, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response); // Handle the response
      const token=response.data.payload.access.token; // Handle the response
      localStorage.setItem('authToken', token); // Save token with key 'authToken'
      console.log('Token saved to localStorage:', token);
      alert(response.data.message); // Optional, display the response message

    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
//////////////////////////////////////////////
const btn_admin_login = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
    setEmail("testAdmin@gmail.com");// setEmail("admin60@gmail.com");
    setPassword("Admin@123");
      const requestParams  = {email , password };
   
      const response = await Client.post('/auth/login', requestParams, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data); // Handle the response
      alert(response.data.message); // Optional, display the response message

    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
//////////////////////////////////////////////
const btn_create_note = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
    // Dynamically retrieve the token
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed

    const payload = {
      title: "EIS Anual Program",
      text: "Today Final Reharsal-20:48"
    };
   
      const response = await Client.post('/notes', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token2}` // Use the dynamic token    
        }
      });

      console.log(response.data); // Handle the response
      alert(response.data.message); // Optional, display the response message

    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
//////////////////////////////////////////////
const btn_update_note = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
    // Dynamically retrieve the token
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed

    const payload = {
      id: "22d61e94-6c00-43ff-82dc-f8c09e9028e7",
      title: "Serampore Bookfair Visit",
      text: "hi"
    };
   
      const response = await Client.put('/notes', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token2}` // Use the dynamic token    
        }
      });

      console.log(response.data); // Handle the response
      alert(response.data.message); // Optional, display the response message

    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
//////////////////////////////////////////////
const btn_get_note = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
    // Dynamically retrieve the token
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed

    const noteId = "6f620f49-7a65-4de6-a2d3-c04644d99fe3"; // ID for the note

     // Pass the ID directly in the URL
     const response = await Client.get(`/notes/${noteId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token2}`, // Use the dynamic token    
      },
    });
      const noteText = response.data.payload.text;
      const noteTitle = response.data.payload.title;
      alert(`Title: ${noteTitle}\nText: ${noteText}`);
      
    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
//////////////////////////////////////////////
const btn_get_history = async () => {
  try {
    const Client = axios.create({
      baseURL: 'http://192.168.31.196:3000/v1/'
    });
    ////////////////
    // Dynamically retrieve the token
    const token2 = localStorage.getItem('authToken'); // Replace with sessionStorage or a variable if needed

    const noteId = "22d61e94-6c00-43ff-82dc-f8c09e9028e7"; // ID for the note

     // Pass the ID directly in the URL
     const response = await Client.get(`/notes/history/${noteId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token2}`, // Use the dynamic token    
      },
    });
       
    console.log(response.data); // Handle the response
 
    } catch (error) {
      console.error(error); // Log the full error
      alert(error.response?.data?.message || 'An error occurred'); // Handle error gracefully
    }
  };
  //////////<LogIn>///////////////////////////
  return (

    <div>
      
    <h1>ToDo</h1>
    <div>
    <h3>User Registration</h3>
    <UserRegister></UserRegister>
    <UserTable data={users} />   

      <h1>Dashboard</h1>
      <UserTable data={users} />     
    </div>

    <button onClick={testAPI_handler}>Test API Server Runnig</button> 
    <br></br>  <br></br>

    {/*===============Register a user================*/}
    <label>User ID</label> <input id="userId" />
    <label>Password</label> <input id="passWord" />
    <button onClick={handleSignUp}>Sign Up</button>
    {/* =========================================== */}
    <br></br>  <br></br>

    <button onClick={handleGetAllUser}>Get All User</button>
    <br></br>  <br></br>

    <button onClick={handleSetActive}>Set User Active</button>
    <br></br>  <br></br>

    <button onClick={btn_user_login}>User LogIn</button> 
    
    <br></br>  <br></br>

    <button onClick={btn_admin_login}>Admin LogIn</button>  <br></br>  <br></br>

    <button onClick={btn_create_note}>Create Note</button>  <br></br>  <br></br>

    <button onClick={btn_update_note}>Update Note</button>  <br></br>  <br></br>

    <button onClick={btn_get_note}>Get Note</button>  <br></br>  <br></br>

    <button onClick={btn_get_history}>Get History</button>  <br></br>  <br></br>

    {/* <CardLogIn/> */}
    {/* <label>Email</label> 

    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

    <button onClick={handleLogin}>USER LogIn</button> 
    <button onClick={handleLogin}>Admin LogIn</button> 
    
    
    <br></br>
    <br></br> */}

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
 
    <LiveCurveCard />
    <ImageCarouselCard />
 
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

export default ToDo;
