import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import { DeleteItem } from '../redux/Actions/ActionCreators'

function Cart() {
  const cartPrduct = useSelector((state) => state.cartPrdct.cart)
  console.table("cartproducts here.." + JSON.stringify(cartPrduct))
  const dispatch=useDispatch()
  const DeleteHandler=(value)=>{
    console.log("deletingitem"+JSON.stringify(value))
    dispatch(DeleteItem(value))
  }
  return (
    <>
      <h1>cart..</h1>
      {
        cartPrduct.map((value, key) => {
          return (
            <Card style={{ width: '16em', height: '25em', display: 'inline-flex', margin: '1em' }}>
              <Card.Img variant="top" src={value.image} style={{ height: '200px', width: '200px' }} />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary"className='me-5'>Buy</Button>
                <Button variant="primary"onClick={()=>DeleteHandler(value.id)}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}

export default Cart