import React from 'react'

export default function Shop() {
  return (
    <div>
       <h1 class="section-title">Southern Specials</h1>
    <p class="sub-title">10 Products</p>
    
    <div class="info-container">
        <div class="info-box">
            <img src="shipping-icon.png" alt="Shipping"/>
            <p>National Shipping in 3-5 days</p>
        </div>
        <div class="info-box">
            <img src="shelf-life-icon.png" alt="Shelf Life"/>
            <p>15 Days Shelf Life</p>
        </div>
        <div class="info-box">
            <img src="globe-icon.png" alt="International Shipping"/>
            <p>International Shipping in 5-7 Days</p>
        </div>
        <div class="info-box">
            <img src="preservatives-icon.png" alt="No Preservatives"/>
            <p>No Preservatives</p>
        </div>
    </div>

    <div class="product-container">
        <div class="product-card">
            <img src="sweets.jpg" alt="Sweets"/>
            <h3>Sweets</h3>
            <p>67 Products</p>
        </div>
        <div class="product-card">
            <img src="biscotti.jpg" alt="Indian Biscotti"/>
            <h3>Indian Biscotti</h3>
            <p>8 Products</p>
        </div>
        <div class="product-card">
            <img src="guilt-free.jpg" alt="Guilt Free"/>
            <h3>Guilt Free</h3>
            <p>24 Products</p>
        </div>
        <div class="product-card">
            <img src="snacks.jpg" alt="Tea Time Snacks"/>
            <h3>Tea Time Snacks</h3>
            <p>18 Products</p>
        </div>
        <div class="product-card">
            <img src="namkeen.jpg" alt="Namkeen"/>
            <h3>Namkeen</h3>
            <p>11 Products</p>
        </div>
    </div>
    </div>
  )
}
