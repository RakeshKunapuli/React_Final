import React  from 'react'
import  styles from "./loginpage.css"
import "bootstrap/dist/css/bootstrap.css";
import IndexNav from './indexnav';
import { useState ,useEffect } from 'react';
import DashbordIndex from './Dashbord';
import { Link , useNavigate } from 'react-router-dom';
import Footer from './Dashbord/footer';

{/* Api https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json  */}
// Demo website link https://templatemo.com/live/templatemo_524_product_admin 

// char 2 js   npm i react-chartjs-2 chart.js
// https://www.chartjs.org/docs/latest/



function LoginPage() {

  let navigate = useNavigate()

  let [state1,updatestate] =useState('')
  let [state2,updatestate2] =useState('')

  var pasword=(password) =>{
    updatestate2(password)
  }

  var username=(username) =>{
updatestate(username)
  }

  const [isLoggedIn, updateState] = useState(false);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (localState === null) {
      localStorage.setItem("isLoggedIn", false);
      updateState(false);
    }
  }, []);


var loginbtn =()=>{
  if(state1 === state2){
    localStorage.setItem('isLoggedIn',true)
    updateState(true)
    navigate('/dashbord')
  }else{
    alert("Invalid Username and Password ")
    navigate('/')
  }

}

  return (
    <>
    <div className='main-div'>
    <nav>
      <IndexNav/>
    </nav>
    <form className='login-form'>
        <h5 className='welcome'>Welcome to Dashboard Login</h5>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Username </label>
    <input type="text" id="username" onChange={(e) =>{username(e.target.value)}} required className="form-control pr-1 pb-2 pt-2 pl-2" />
  </div>

  
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="password" onChange={(e) =>{pasword(e.target.value)}} className="form-control" />
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" id="login" onClick={()=>{loginbtn()}} className="btn w-100 btn-primary btn-block mb-4">LOGIN</button>
  <button type="button"  id="forgot" className="btn w-100 btn-primary btn-block mb-4">FORGOT YOUR PASSWORD?</button>
</form>
<Footer/>
</div>
    </>
  )
}

export default LoginPage;
