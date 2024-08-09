import React from 'react'
import Card from 'react-bootstrap/Card';
import "./Cards.css"
import {Reviews} from '../Reviews';

 function Cards() {
  return (
    <div id='containar'>
  <div id='reviewBox'>
  {Reviews.map((revi)=>(
    
    <Card id='body' key={revi.id}>
      <Card.Img variant="top" src={revi.img} id='img'/>
      <p id='name'>{revi.name}</p>
      <div>
       <box-icon name='star' type='solid' color='gold' ></box-icon>
       <box-icon name='star' type='solid' color='gold' ></box-icon>
       <box-icon name='star' type='solid' color='gold' ></box-icon>
       <box-icon name='star' type='solid' color='gold' ></box-icon>
       <box-icon name='star' type='solid' color='gold' ></box-icon>
      </div>
      <Card.Body>
        <Card.Title id='title'>{revi.title}</Card.Title>
        <Card.Text id='comment'>
          {revi.comment}
        </Card.Text>
      </Card.Body>
    </Card>
  
  ))} 
 </div>
 </div>
 );

}
export default Cards;