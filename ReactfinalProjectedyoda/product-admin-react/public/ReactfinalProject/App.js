import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from './index'
import DashIndex from "./Dashbord";
import styles from './Dashbord/dashbord.css'
import Footer from "./Dashbord/footer";
import ProductIndex from "./Products";




function App() {
  


  const [isLoggedIn , updateState] = useState(false)

  useEffect(()=>{
    let localState = JSON.parse(localStorage.getItem('isLoggedIn'))
    if(localState == true){
      updateState(true)
    }
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage/>
            }
          />
          <Route
            path="/dashbord"
            element={<DashIndex/> 
            }
          />
          <Route path="/products" element={<ProductIndex/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
