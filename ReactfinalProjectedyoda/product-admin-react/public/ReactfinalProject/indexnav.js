import React from 'react'
import styles from "./loginpage.css"
import { Link } from 'react-router-dom'

function IndexNav() {
  return (
    <>
    <div className='indexnav d-flex align-item-center'>
      
    <ul className="productadmin">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>



  <div className='indexnav2 d-flex justify-content-center align-item-center'>
  <li className="dashbord text-white">
    <a href='#' className='nav-link text-white fs-1'> <i class="fa-solid fa-gauge-high"></i></a>
    <p >Dashbord</p>
  </li>
 
  <li className="reports text-center text-white">
    <a className="nav-link text-white fs-1" href="#"><i class="fa-solid fa-file"></i></a>
    <p>Reports</p>
  </li>


  <li className="products text-center text-white">
    <a className="nav-link text-white fs-1" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
    <p>Products</p>
  </li>


  <li className="accounts text-center text-white">
    <a className="nav-link text-white fs-1" href="#"><i class="fa-regular fa-user"></i></a>
    <p>Accounts</p>
  </li>


  <li className="settings text-center text-white">
    <a className="nav-link text-white fs-1" href="#"><i class="fa-solid fa-gear"></i></a>
    <p>Settings</p>
  </li>
  </div>
  </ul>
 </div>
    </>
  )
}

export default IndexNav
