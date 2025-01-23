import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <>
        <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
        <Container>
         <Link to ={'/'}  style={{textDecoration:'none'}}>
         <i className="text-white fa-solid fa-school me-3"></i>
         <Navbar.Brand style={{color:'white'}}>Marksheet
        </Navbar.Brand>
         </Link>
        
        </Container>
      </Navbar>
    
  </>
  )
}

export default Header