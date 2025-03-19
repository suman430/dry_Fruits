import React from 'react'
import "../pages/Home.css"

export default function Home() {
  return (
    <>
    <div className='Home-page'>
    <h1 class="section-title">Southern Specials</h1>
    <p class="sub-title">10 Products</p>
    
    <div class="info-container">
        <div class="info-box">
            <img src="https://cdn.shopify.com/s/files/1/0569/3456/4001/files/product_shelf_life.svg?v=1709729633" alt="Shipping"/>
            <p>National Shipping in 3-5 days</p>
        </div>
        <div class="info-box">
            <img src="https://cdn.shopify.com/s/files/1/0569/3456/4001/files/c_shelf_life.svg?v=1710410317" alt="Shelf Life"/>
            <p>15 Days Shelf Life</p>
        </div>
        <div class="info-box">
            <img src="https://cdn.shopify.com/s/files/1/0569/3456/4001/files/product_international_shipping.svg?v=1709729634"/>
            <p>International Shipping in 5-7 Days</p>
        </div>
        <div class="info-box">
            <img src="https://cdn.shopify.com/s/files/1/0569/3456/4001/files/c_no_preservatives.svg?v=1710410318" alt="No Preservatives"/>
            <p>No Preservatives</p>
        </div>
    </div>

    <div class="product-container">
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/all-products.png?v=1685687087" alt="Sweets"/>
            <h3>Sweets</h3>
            <p>67 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/sweets_8b268f2d-ded2-4ef7-afc9-96689773f95e.png?v=1684238049&width=533" alt="Indian Biscotti"/>
            <h3>Indian Biscotti</h3>
            <p>8 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/Indian-biscoti_75309bdb-3f51-4f80-a792-600b1a57fe7c.png?v=1685687514" alt="Guilt Free"/>
            <h3>Guilt Free</h3>
            <p>24 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/Frame_5599.png?v=1701944655&width=533" alt="Tea Time Snacks"/>
            <h3>Tea Time Snacks</h3>
            <p>18 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/guilt_free.png?v=1685690388" alt="Namkeen"/>
            <h3>Guilt Free</h3>
            <p>11 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/namkeen_d632508c-e897-427a-aec4-edae6d3d4172.png?v=1684238080&width=533" alt="Namkeen"/>
            <h3>Namkeen</h3>
            <p>11 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/indian_bakery_9620709e-7447-4e35-a0ce-4ff9bd1128f7.png?v=1685690412" alt="Namkeen"/>
            <h3>Nippattu</h3>
            <p>9 Products</p>
        </div>
        <div class="product-card">
            <img src="https://www.anandsweets.in/cdn/shop/files/tea-time-snacks.png?v=1684238065&width=533" alt="Namkeen"/>
            <h3>Tea Time Snacks</h3>
            <p>11 Products</p>
        </div>
    </div>
    </div>
    </>
  )
}
