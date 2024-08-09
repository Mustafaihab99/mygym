import React from 'react'
import Cards from '../cards/Cards'
import "./Review.css"

export default function Review() {
  return (
    <div id='containar' >
      <div className="tit" id='review'>
      <h1 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>Rev<span>iew</span></h1>
      </div>
      <Cards />
    </div>
  )
}
