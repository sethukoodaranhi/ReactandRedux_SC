import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import {useCart} from 'react-use-cart'
import { setCartItems, SetProducts } from '../redux/Actions/ActionCreators'
import { useState } from 'react'
function Products() {
 
    const dispatch = useDispatch()
    const productsData = useSelector((state) => state.allProducts.products)
    // console.log("state data" + productsData)
    // const cartData=useSelector((state)=>state.cartPrdct.products)
    // console.log("cart data.."(cartData))
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => {
                console.log('err in api' + err)
            })
         console.log(response)
        dispatch(SetProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

//    const cartHandler=()=>{
//       const cartArray=[]
//       cartArray.push(...productsData)
//       dispatch(setCartItems(cartArray))
//    }
    const cartHandler=(value)=>{
    //    console.log(value)
    //    setCart(value)
    dispatch(setCartItems(value))
       
    }
    // console.log("....."+Cart)
    return (
        <div>
            {
                productsData.map((value, key) => {
                    return (
                        <Card style={{ width: '16em', height: '25em', display: 'inline-flex', margin: '1em' }} key={key}>
                            <Card.Img variant="top" src={value.image} style={{ height: '200px', width: '200px' }} />
                            <Card.Body>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.Text>
                                    Rs.{value.price}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>cartHandler(value)}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
          
        </div>

    )
}

export default Products