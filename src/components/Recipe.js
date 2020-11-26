import React from 'react'
import{Card,Button} from 'react-bootstrap'

export default function Recipe(props) {
  // let recipe=props.data.find(item=>item.recipe.label===props.match.params.id)
  const item=props.location.state.recipe

  return (
    <Card border="primary" style={{ width:'80%',margin:'0 auto' }}>
      <Card.Img variant='top' src={item.image}></Card.Img>
      <Card.Header>{item.label}</Card.Header>
      <Card.Body>
        <Card.Text>
          {item.source}
          <ul>
          {item.ingredients.map(each=>{return(<li>{each.text}</li>)})}
          </ul>
        </Card.Text>
        <Button href={item.url} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}
