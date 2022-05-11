import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
function Cart() {
  const cartPrduct = useSelector((state) => state.cartPrdct.cart)
  console.table("cartproducts here.." + JSON.stringify(cartPrduct))
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
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </>
  )
}

export default Cart