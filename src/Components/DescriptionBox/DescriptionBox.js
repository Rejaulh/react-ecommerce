import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
    </div>
    <div className='descriptionbox-description'>
        <p>An e-commerce website is an online platform that enables businesses 
            to sell products or services directly to customers over the internet, 
            serving as a virtual storefront. These platforms facilitate browsing, 
            secure transactions via payment gateways, and order management without 
            physical, brick-and-mortar limitations. Popular examples include Amazon, 
            Shopify-based stores, and specialized online retailers. </p>
        <p>The main difference between an ecommerce platform and other website types 
            is that ecommerce sites allow for transactions to occur online. This 
            means that customers can browse your products, add them to their cart, 
            and purchase them without ever stepping into a physical store.</p>
    </div>
    </div>
  )
}

export default DescriptionBox