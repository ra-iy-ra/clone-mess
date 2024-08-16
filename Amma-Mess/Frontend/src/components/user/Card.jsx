import React from 'react'
import img1 from '../../assets/breakfast.png'
import img2 from '../../assets/lunch.jpeg'
import img3 from '../../assets/dinner.jpeg'

const Card = () => {
  return (

    <div style={{display:'flex', margin:100, justifyContent:'space-between'}}>
      <div class="card" style={{width: '18rem'}}>
  <img src={img1} class="card-img-top" alt="..." style={{height:'100px',width: '206px',paddingLeft: '57px'}}/>
  <div class="card-body" style={{marginTop:'35px'}}>
    <h5 class="card-title">Breakfast</h5>
    <p class="card-text">Sandwhich</p>
     <h6>Rs.40</h6>
    <a href="#" class="btn btn-primary">Select</a>
    <a href="#" class="btn btn-primary">Cancel</a>
  </div>
</div>


<div class="card" style={{width: '18rem'}}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Lunch </h5>
    <p class="card-text">Fried rice</p>
    <h6>Rs.70</h6>
    <a href="#" class="btn btn-primary">Select</a>
    <a href="#" class="btn btn-primary">Cancel</a>
  </div>
</div>


<div class="card" style={{width: '18rem'}}>
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Dinner</h5>
    <p class="card-text">chicken</p>
    <h6>Rs.40</h6>
    <a href="#" class="btn btn-primary">Select</a>
    <a href="#" class="btn btn-primary">Cancel</a>
  </div>
</div>
    </div>
  )
}

export default Card
