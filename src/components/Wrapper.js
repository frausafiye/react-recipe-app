import React from 'react'
import{Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Wrapper({data}) {
  return (

    <div className="row">
        {data.map(item=>{
          return (
    <Link to={{pathname:`/recipe/${item.recipe.label}`, state:item}}  style={{width:'25%', alignSelf:'baseline'
   }}>
    <Card border="primary">
      <Card.Img variant='top' src={item.recipe.image}></Card.Img>
      <Card.Header>{item.recipe.label}</Card.Header>
      <Card.Body>
        <Card.Text style={{height:'24vh', overflow:'hidden'}} >
          {item.recipe.source}
          <ul>
          {item.recipe.ingredients.map(each=>{return(<li>{each.text}</li>)})}
          </ul>
        </Card.Text>
        <Button href={item.recipe.url} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Link>
  )

        })}
      
    </div>
  )
}
