import React from 'react'
import DashbordNav from '../Dashbord/dasbbordnav'
import Footer from '../Dashbord/footer'
import styles from './Product.css'
import ProductCategoriesList from './ProfuctCategoriesList'
import ProductsList from './ProductList'



function ProductIndex() {
  return (
    <div>
        <DashbordNav/>
        <ProductsList/>
      <Footer/>
    </div>
  )
}

export default ProductIndex
