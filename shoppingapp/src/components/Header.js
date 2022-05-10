import React from 'react'
import {NavDropdown,Nav,Container,Navbar} from 'react-bootstrap'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useCart} from 'react-use-cart'
function Header() {  
    const{totalUniqueItems}=useCart();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"className='text-uppercase'>CoolShoppy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Products</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           <ShoppingCartOutlinedIcon/><sup>{totalUniqueItems}</sup>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header